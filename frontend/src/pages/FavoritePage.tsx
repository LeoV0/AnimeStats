"use client";

import { useEffect, useState } from "react";
import AnimeCard from "@/components/AnimeCard";
import Page1 from "@/components/glow-menu";
import { useFavorites } from "@/context/useFavorites";

interface Anime {
  id: string;
  name: string;
  description: string;
  image_url: string;
}

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<Anime[]>([]);
  const [loading, setLoading] = useState(true);
  const { refreshFavorites, toggleFavorite } = useFavorites();

  useEffect(() => {
    async function fetchFavorites() {
      try {
        const res = await fetch("http://localhost:3000/animes/favorites", {
          credentials: "include",
        });
        if (res.ok) {
          const data = await res.json();
          setFavorites(data);
        }
      } catch (err) {
        console.error("Erreur favoris:", err);
      } finally {
        setLoading(false);
        refreshFavorites();
      }
    }

    fetchFavorites();
  }, []);

  return (
    <div className="relative w-full bg-gradient-to-br from-black via-[#0B0F14] to-[#1A2428] text-white min-h-screen">
      <div className="fixed left-0 right-0 z-50 flex justify-center pointer-events-none top-4">
        <div className="w-full max-w-6xl px-6 pointer-events-auto">
          <Page1 />
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center min-h-screen p-6 pt-32">
        <div className="w-full max-w-6xl space-y-8">
          <div className="space-y-1 text-left">
            <h1 className="text-2xl font-bold md:text-3xl text-white/90">
              私の好きなアニメ
            </h1>
            <p className="text-lg md:text-xl text-neutral-400">Mes favoris</p>
          </div>

          {loading && (
            <div className="flex justify-center py-20">
              <p className="text-neutral-400">Chargement de tes favoris...</p>
            </div>
          )}

          {!loading && favorites.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <p className="text-2xl text-neutral-500">Aucun favori</p>
              <p className="mt-2 text-neutral-400">
                Ajoute des animés depuis l'accueil !
              </p>
            </div>
          )}

          {!loading && favorites.length > 0 && (
            <div className="grid grid-cols-1 gap-8 py-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-items-center">
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
