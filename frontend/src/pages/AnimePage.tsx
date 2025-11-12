import Page1 from "@/components/glow-menu";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Toggle } from "@/components/ui/toggle";
import { Bookmark, Eye, EyeOff } from "lucide-react";

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
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch(`http://localhost:3000/animes/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Anime non trouvé");
        return res.json();
      })
      .then((data) => {
        setAnime(data);
        setFavorite(data.isFavorite || false);
      })
      .catch((err) => console.error(err));

    fetch(`http://localhost:3000/animes/${id}/episodes`)
      .then((res) => {
        if (!res.ok) throw new Error("Épisodes non trouvés");
        return res.json();
      })
      .then((data) => setEpisodes(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  const handleToggleFavorite = async () => {
    if (!anime) return;

    const newState = !favorite;

    setFavorite(newState);
    setAnime((prev) => (prev ? { ...prev, isFavorite: newState } : prev));

    try {
      const response = await fetch(
        `http://localhost:3000/animes/${anime.id}/favorites`,
        {
          method: newState ? "POST" : "DELETE",
          credentials: "include",
        }
      );
      console.log("Response status:", response.status);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (err) {
      console.error("Erreur favori :", err);
      setFavorite(!newState);
      setAnime((prev) => (prev ? { ...prev, isFavorite: !newState } : prev));
    }
  };

  const toggleSeen = (epId: string) => {
    setEpisodes((prev) =>
      prev.map((ep) => (ep.id === epId ? { ...ep, seen: !ep.seen } : ep))
    );
  };

  if (loading) return <p className="p-6">Chargement...</p>;
  if (!anime) return <p className="p-6">Anime non trouvé</p>;

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-black via-[#0B0F14] to-[#1A2428] text-gray-200">
      <div className="fixed left-0 right-0 z-50 flex justify-center pointer-events-auto top-4">
        <div className="w-full max-w-6xl px-6 pointer-events-auto">
          <Page1 />
        </div>
      </div>

      <div className="relative z-10 p-6 pt-40">
        <div className="flex flex-col max-w-6xl gap-12 mx-auto md:flex-row">
          <div className="flex flex-col flex-[2] gap-6">
            <div className="flex items-center gap-2">
              <h2 className="text-3xl font-bold text-white">{anime.name}</h2>
              <Toggle
                pressed={favorite}
                onPressedChange={handleToggleFavorite}
                aria-label="Ajouter aux favoris"
                className="p-1 rounded-full cursor-pointer bg-white/10 hover:bg-white/20"
              >
                <Bookmark
                  className={`w-5 h-5 transition-colors ${
                    favorite ? "fill-yellow-400 text-yellow-400" : "text-white"
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
                        title={
                          ep.seen ? "Marquer comme non vu" : "Marquer comme vu"
                        }
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
          </div>

          <div className="relative flex items-center justify-center flex-1 mt-6 md:mt-0">
            <img
              src={anime.image_url}
              alt={anime.name}
              className="w-full max-w-[400px] md:max-w-full h-auto rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
