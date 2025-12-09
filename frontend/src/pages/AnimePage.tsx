import Page1 from "@/components/glow-menu";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Toggle } from "@/components/ui/toggle";
import { Bookmark, CheckCircle2, Eye, EyeOff } from "lucide-react";
import { useFavoritesContext } from "@/context/useFavorites";
import { useAuth } from "@/context/useAuth";
import { useNavigate } from "react-router-dom";
import { api } from "@/lib/api";

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
  const totalEpisodes = episodes.length;
  const seenCount = episodes.filter((ep) => ep.seen).length;
  const progress =
    totalEpisodes > 0 ? Math.round((seenCount / totalEpisodes) * 100) : 0;

  const { isFavorite, toggleFavorite, refreshFavorites } =
    useFavoritesContext();

  useEffect(() => {
    setLoading(true);

    const fetchAnime = api(`/animes/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Anime non trouvé");
        return res.json();
      })
      .then((data) => setAnime(data))
      .catch(console.error);

    const fetchEpisodes = api(`/animes/${id}/episodes`)
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

  const { isLoggedIn, loading: authLoading } = useAuth();
  const navigate = useNavigate();

  const handleToggleFavorite = async () => {
    if (authLoading) return;
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
    if (!anime) return;
    const newState = !isFavorite(anime.id);
    try {
      await toggleFavorite(anime.id, newState);
      setAnime((prev) => (prev ? { ...prev, isFavorite: newState } : prev));
    } catch (err) {
      console.error("Erreur favori :", err);
    }
  };

  const toggleSeen = async (epId: string) => {
    if (authLoading) return;
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
    const current = episodes.find((ep) => ep.id === epId);
    if (!current) return;
    const wasSeen = current.seen;

    setEpisodes((prev) =>
      prev.map((ep) => (ep.id === epId ? { ...ep, seen: !wasSeen } : ep))
    );

    try {
      const response = await api(`/episodes/${epId}/watched`, {
        method: wasSeen ? "DELETE" : "POST",
      });

      if (response.ok) {
        window.dispatchEvent(new Event("in-progress-updated"));
      }
    } catch (error) {
      console.error("Erreur vue épisode :", error);
      setEpisodes((prev) =>
        prev.map((ep) => (ep.id === epId ? { ...ep, seen: wasSeen } : ep))
      );
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-linear-to-br from-black via-[#0B0F14] to-[#1A2428] text-gray-200">
      <div className="flex fixed right-0 left-0 top-4 z-50 justify-center pointer-events-none">
        <div className="px-6 w-full max-w-6xl pointer-events-auto">
          <Page1 />
        </div>
      </div>

      <div className="relative z-10 p-6 pt-40">
        <div className="flex flex-col gap-12 mx-auto max-w-6xl md:flex-row">
          <div className="flex flex-col gap-6 flex-2">
            {loading && (
              <div className="flex justify-center items-center h-64">
                <p className="text-xl text-gray-400">Chargement...</p>
              </div>
            )}

            {!loading && !anime && (
              <div className="flex justify-center items-center h-64">
                <p className="text-xl text-red-400">Anime non trouvé</p>
              </div>
            )}

            {!loading && anime && (
              <>
                <div className="flex gap-2 items-center">
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

                {totalEpisodes > 0 && (
                  <div className="p-6 mt-10 space-y-5 rounded-2xl border backdrop-blur-lg bg-white/5 border-white/10">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-neutral-400">
                        {seenCount} / {totalEpisodes} épisodes
                      </span>
                      <span className="font-medium text-white/90">
                        {progress}%
                      </span>
                    </div>

                    {progress === 100 ? (
                      <div className="flex justify-center">
                        <div
                          className="inline-flex items-center gap-2.5 px-5 py-2.5 text-sm font-medium text-white
          rounded-full border border-white/20 bg-white/10 backdrop-blur-xl
          shadow-lg shadow-black/30"
                        >
                          <CheckCircle2 size={18} className="text-white/90" />
                          <span>Animé terminé</span>
                        </div>
                      </div>
                    ) : (
                      <div className="relative h-3.5 overflow-hidden rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                        <div
                          className="h-full rounded-full shadow-inner backdrop-blur-sm transition-all duration-700 ease-out bg-white/30"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    )}
                  </div>
                )}

                {episodes.length > 0 && (
                  <div className="mt-4">
                    <h3 className="mb-2 text-2xl font-semibold text-white">
                      Épisodes
                    </h3>
                    <ul className="space-y-2">
                      {episodes.map((ep) => (
                        <li
                          key={ep.id}
                          className="flex justify-between items-center p-2 text-gray-300 rounded-lg border border-white/10 bg-white/5"
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

          <div className="flex relative flex-1 justify-center mt-0 md:mt-0">
            {loading ? (
              <div className="w-full max-w-[400px] h-96 bg-white/5 rounded-xl" />
            ) : (
              anime && (
                <div className="relative w-full max-w-[400px] rounded-xl overflow-hidden shadow-lg h-fit top-24">
                  <img
                    src={anime.image_url}
                    alt={anime.name}
                    className="block object-cover w-full h-auto"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
