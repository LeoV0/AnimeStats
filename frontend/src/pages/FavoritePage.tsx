"use client";

import { useEffect, useState } from "react";
import AnimeCard from "@/components/AnimeCard";
import { useFavoritesContext } from "@/context/useFavorites";
import { api } from "@/lib/api";

interface Anime {
  id: string;
  name: string;
  description: string;
  image_url: string;
}

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<Anime[]>([]);
  const [loading, setLoading] = useState(true);
  const { toggleFavorite } = useFavoritesContext();

  useEffect(() => {
    async function fetchFavorites() {
      try {
        const res = await api(`/animes/favorites`);
        if (res.ok) {
          const data = await res.json();
          setFavorites(data);
        }
      } catch (err) {
        console.error("Erreur favoris:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchFavorites();
  }, []);

  return (
    <div className="relative w-full bg-linear-to-br from-black via-[#0B0F14] to-[#1A2428] text-white min-h-screen">
      <div className="flex relative z-10 flex-col items-center p-6 pt-32 min-h-screen">
        <div className="space-y-8 w-full max-w-6xl">
          <div className="space-y-1 text-left">
            <h1 className="text-2xl font-bold md:text-3xl text-white/90">
              私の好きなアニメ
            </h1>
            <p className="text-lg md:text-xl text-neutral-400">Mes favoris</p>
          </div>

          {loading && (
            <div className="flex justify-center py-20">
              <div className="flex flex-col gap-4 items-center">
                <div className="w-12 h-12 rounded-full border-4 animate-spin border-white/20 border-t-white/80"></div>
                <p className="text-neutral-400">Chargement de tes favoris...</p>
              </div>
            </div>
          )}

          {!loading && favorites.length === 0 && (
            <div className="flex flex-col justify-center items-center py-20 text-center">
              <p className="text-2xl text-neutral-500">Aucun favori</p>
              <p className="mt-2 text-neutral-400">
                Ajoute des animés depuis l'accueil !
              </p>
            </div>
          )}

          {!loading && favorites.length > 0 && (
            <div className="grid grid-cols-1 gap-8 justify-items-center py-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
              {favorites.map((anime) => (
                <AnimeCard
                  key={anime.id}
                  id={anime.id}
                  title={anime.name}
                  description={anime.description}
                  image={anime.image_url}
                  showFavorite={true}
                  onToggleFavorite={() => {
                    toggleFavorite(anime.id, false);
                    setFavorites((prev) =>
                      prev.filter((a) => a.id !== anime.id)
                    );
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
