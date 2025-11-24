import Page1 from "@/components/glow-menu";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/useAuth";
import AnimeCard from "@/components/AnimeCard";
import { Badge } from "@/components/ui/badge";
import { Trophy } from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

interface User {
  id: string;
  name: string;
  email: string;
}

interface Anime {
  id: string;
  name: string;
  name_japanese: string;
  image_url: string;
  totalEpisodes: number;
}

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const { checkAuth } = useAuth();

  const navigate = useNavigate();

  const [completedAnimes, setCompletedAnimes] = useState<Anime[]>([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`${API_URL}/users/me`, {
          credentials: "include",
        });

        if (!res.ok) throw new Error("Utilisateur non trouvé");

        const data = await res.json();
        setUser(data);
      } catch (error) {
        console.error("Erreur profil:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchCompleted = async () => {
      try {
        const res = await fetch(`${API_URL}/animes/completed`, {
          credentials: "include",
        });
        if (res.ok) {
          const data = await res.json();
          setCompletedAnimes(Array.isArray(data) ? data : []);
        }
      } catch (error) {
        console.error("Erreur animes terminés:", error);
      }
    };

    fetchUser();
    fetchCompleted();
  }, []);

  const handleLogout = async () => {
    try {
      await fetch(`${API_URL}/auth/logout`, {
        method: "POST",
        credentials: "include",
      });

      await checkAuth();
      navigate("/login");
    } catch (error) {
      console.error("Erreur déconnexion:", error);
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-black via-[#0B0F14] to-[#1A2428] text-gray-200">
      <div className="fixed left-0 right-0 z-50 flex justify-center pointer-events-none top-4">
        <div className="w-full max-w-6xl px-6 pointer-events-auto">
          <Page1 />
        </div>
      </div>

      <div className="relative z-10 p-6 pt-40">
        <div className="max-w-6xl mx-auto">
          {loading ? (
            <p className="text-xl text-gray-400">Chargement...</p>
          ) : user ? (
            <>
              <p className="mb-2 text-xl text-gray-400">あなたのプロフィール</p>
              <h1 className="text-3xl font-bold text-white">
                Bonjour, {user.name}
              </h1>

              {completedAnimes.length > 0 && (
                <div className="mt-12">
                  <h2 className="mb-6 text-2xl font-bold text-white">
                    Animes Terminés
                  </h2>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {completedAnimes.map((anime) => (
                      <AnimeCard
                        key={anime.id}
                        id={anime.id}
                        title={anime.name}
                        description={anime.name_japanese}
                        image={anime.image_url}
                        showFavorite={false}
                        badge={
                          <Badge className="flex items-center gap-1 text-yellow-400 border bg-yellow-500/20 border-yellow-500/50">
                            <Trophy className="w-3 h-3" />
                            Complété
                          </Badge>
                        }
                        progress={`${anime.totalEpisodes} épisodes`}
                      />
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <p className="text-xl text-red-400">Erreur de chargement</p>
          )}
        </div>
      </div>

      <div className="fixed bottom-6 right-6">
        <button
          onClick={handleLogout}
          className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 shadow-lg cursor-pointer"
        >
          Se déconnecter
        </button>
      </div>
    </div>
  );
}
