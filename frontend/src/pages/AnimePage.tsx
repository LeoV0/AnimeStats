"use client";

import Page1 from "@/components/glow-menu";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Toggle } from "@/components/ui/toggle";
import { Bookmark, Eye, EyeOff } from "lucide-react";
import { useFavorites } from "@/context/useFavorites";

interface Episode {
  id: string;
  number: number;
  title: string;
  seen?: boolean;
}

interface Anime {
  id: string;
  name: string;
  name_japanese: string;
  description: string;
  image_url: string;
  isFavorite?: boolean;
}

export default function AnimePage() {
  const { id } = useParams();
  const [anime, setAnime] = useState<Anime | null>(null);
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [loading, setLoading] = useState(true);

  const { isFavorite, toggleFavorite, refreshFavorites } = useFavorites();

  useEffect(() => {
    setLoading(true);

    const fetchAnime = fetch(`http://localhost:3000/animes/${id}`, {
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Anime non trouvé");
        return res.json();
      })
      .then((data) => setAnime(data))
      .catch(console.error);

    const fetchEpisodes = fetch(`http://localhost:3000/animes/${id}/episodes`, {
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Épisodes non trouvés");
        return res.json();
      })
      .then((data) => setEpisodes(data))
      .catch(console.error);

    Promise.all([fetchAnime, fetchEpisodes]).finally(() => {
      setLoading(false);
      refreshFavorites();
    });
  }, [id]);

  const handleToggleFavorite = async () => {
    if (!anime) return;
    const newState = !isFavorite(anime.id);
    try {
      await toggleFavorite(anime.id, newState);
      setAnime((prev) => (prev ? { ...prev, isFavorite: newState } : prev));
    } catch (err) {
      console.error("Erreur favori :", err);
    }
  };

  const toggleSeen = (epId: string) => {
    setEpisodes((prev) =>
      prev.map((ep) => (ep.id === epId ? { ...ep, seen: !ep.seen } : ep))
    );
  };

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-black via-[#0B0F14] to-[#1A2428] text-gray-200">
      <div className="fixed left-0 right-0 z-50 flex justify-center pointer-events-none top-4">
        <div className="w-full max-w-6xl px-6 pointer-events-auto">
          <Page1 />
        </div>
      </div>

      <div className="relative z-10 p-6 pt-40">
        <div className="flex flex-col max-w-6xl gap-12 mx-auto md:flex-row">
          <div className="flex flex-col flex-[2] gap-6">
            {loading && (
              <div className="flex items-center justify-center h-64">
                <p className="text-xl text-gray-400">Chargement...</p>
              </div>
            )}

            {!loading && !anime && (
              <div className="flex items-center justify-center h-64">
                <p className="text-xl text-red-400">Anime non trouvé</p>
              </div>
            )}

            {!loading && anime && (
              <>
                <div className="flex items-center gap-2">
                  <h2 className="text-3xl font-bold text-white">
                    {anime.name}
                  </h2>
                  <Toggle
                    pressed={isFavorite(anime.id)}
                    onPressedChange={handleToggleFavorite}
                    className="p-1 rounded-full cursor-pointer bg-white/10 hover:bg-white/20"
                  >
                    <Bookmark
                      className={`w-5 h-5 transition-colors ${
                        isFavorite(anime.id)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-white"
                      }`}
                    />
                  </Toggle>
                </div>

                <p className="text-xl text-gray-400">{anime.name_japanese}</p>
                <p className="text-gray-300">{anime.description}</p>

                {episodes.length > 0 && (
                  <div className="mt-4">
                    <h3 className="mb-2 text-2xl font-semibold text-white">
                      Épisodes
                    </h3>
                    <ul className="space-y-2">
                      {episodes.map((ep) => (
                        <li
                          key={ep.id}
                          className="flex items-center justify-between p-2 text-gray-300 border rounded-lg border-white/10 bg-white/5"
                        >
                          <span
                            className={`flex-1 ${
                              ep.seen ? "line-through text-gray-500" : ""
                            }`}
                          >
                            Épisode {ep.number}: {ep.title}
                          </span>
                          <button
                            onClick={() => toggleSeen(ep.id)}
                            className="p-1 ml-2 rounded-full cursor-pointer bg-white/10 hover:bg-white/20"
                          >
                            {ep.seen ? (
                              <EyeOff className="w-5 h-5 text-yellow-400" />
                            ) : (
                              <Eye className="w-5 h-5 text-white" />
                            )}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            )}
          </div>

          <div className="relative flex items-center justify-center flex-1 mt-6 md:mt-0">
            {loading ? (
              <div className="w-full max-w-[400px] h-96 bg-white/5 rounded-xl" />
            ) : (
              anime && (
                <img
                  src={anime.image_url}
                  alt={anime.name}
                  className="w-full max-w-[400px] md:max-w-full h-auto rounded-xl object-cover"
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
