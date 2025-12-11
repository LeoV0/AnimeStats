import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/useAuth";
import AnimeCard from "@/components/AnimeCard";
import { Badge } from "@/components/ui/badge";
import { LogOut, Trophy } from "lucide-react";
import { api } from "@/lib/api";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

const getRoleBadge = (role: string) => {
  const labels: Record<string, string> = {
    USER: "Utilisateur",
    ADMIN: "Administrateur",
    CONTRIBUTOR: "Contributeur",
  };

  const colors: Record<string, string> = {
    USER: "bg-gray-500/20 border-gray-500/50 text-gray-400",
    ADMIN: "bg-red-500/20 border-red-500/50 text-red-400",
    CONTRIBUTOR: "bg-blue-500/20 border-blue-500/50 text-blue-400",
  };

  const label = labels[role] || role;
  const colorClass =
    colors[role] || "bg-gray-500/20 border-gray-500/50 text-gray-400";

  return (
    <Badge className={`ml-3 text-sm border translate-y-[-2px] ${colorClass}`}>
      {label}
    </Badge>
  );
};

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
        const res = await api(`/users/me`);

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
        const res = await api(`/animes/completed`);
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
      await api(`/auth/logout`, {
        method: "POST",
      });

      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("jwt_token");

      await checkAuth();
      navigate("/");
    } catch (error) {
      console.error("Erreur déconnexion:", error);
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-linear-to-br from-black via-[#0B0F14] to-[#1A2428] text-gray-200">
      <div className="relative z-10 p-6 pt-40">
        <div className="mx-auto max-w-6xl">
          {loading ? (
            <div className="flex flex-col gap-4 items-center py-20">
              <div className="w-12 h-12 rounded-full border-4 animate-spin border-white/20 border-t-white/80"></div>
              <p className="text-xl text-gray-400">Chargement...</p>
            </div>
          ) : user ? (
            <>
              <p className="mb-2 text-xl text-gray-400">あなたのプロフィール</p>
              <h1 className="text-3xl font-bold text-white">
                Bonjour, {user.name} {getRoleBadge(user.role)}
              </h1>

              <button
                onClick={handleLogout}
                className="mt-8 flex items-center gap-3 px-5 py-2.5 text-sm text-red-400 
             border border-red-500/30 rounded-lg
             hover:bg-red-500/10 hover:text-red-300 hover:border-red-400
             transition-all duration-200 cursor-pointer"
              >
                <LogOut className="w-4 h-4" />
                Se déconnecter
              </button>

              {completedAnimes.length > 0 && (
                <div className="mt-12">
                  <h2 className="mb-6 text-2xl font-bold text-white">
                    Animes Terminés
                  </h2>
                  <Carousel
                    opts={{
                      align: "start",
                    }}
                    className="w-full"
                  >
                    <CarouselContent>
                      {completedAnimes.map((anime) => (
                        <CarouselItem
                          key={anime.id}
                          className="basis-1/2 md:basis-1/3 lg:basis-1/4"
                        >
                          <AnimeCard
                            id={anime.id}
                            title={anime.name}
                            description={anime.name_japanese}
                            image={anime.image_url}
                            showFavorite={false}
                            badge={
                              <Badge className="flex gap-1 items-center text-yellow-400 border bg-yellow-500/20 border-yellow-500/50">
                                <Trophy className="w-3 h-3" />
                                Complété
                              </Badge>
                            }
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
                </div>
              )}
            </>
          ) : (
            <p className="text-xl text-red-400">Erreur de chargement</p>
          )}
        </div>
      </div>
    </div>
  );
}
