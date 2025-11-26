"use client";

import { useEffect, useState } from "react";
import AnimeCard from "@/components/AnimeCard";
import { useFavoritesContext } from "@/context/useFavorites";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

interface Anime {
  id: string;
  name: string;
  description: string;
  image_url: string;
  isFavorite?: boolean;
}

interface AnimeListProps {
  endpoint?: string;
}

export default function AnimeList({ endpoint = "/animes" }: AnimeListProps) {
  const [animes, setAnimes] = useState<Anime[]>([]);
  const [loading, setLoading] = useState(true);
  const { isFavorite, toggleFavorite, refreshFavorites } =
    useFavoritesContext();

  useEffect(() => {
    async function fetchAnimes() {
      try {
        const res = await fetch(`${API_URL}${endpoint}`, {
          credentials: "include",
        });
        const data = await res.json();
        setAnimes(data);
      } catch (error) {
        console.error("Erreur :", error);
      } finally {
        setLoading(false);
        refreshFavorites();
      }
    }
    fetchAnimes();

    const handleFavoritesUpdate = () => {
      fetchAnimes();
    };

    window.addEventListener("favorites-updated", handleFavoritesUpdate);
    return () =>
      window.removeEventListener("favorites-updated", handleFavoritesUpdate);
  }, [endpoint]);

  const handleToggle = async (animeId: string) => {
    const current = isFavorite(animeId);
    const newState = !current;
    try {
      await toggleFavorite(animeId, newState);
      setAnimes((prev) =>
        prev.map((a) => (a.id === animeId ? { ...a, isFavorite: newState } : a))
      );
    } catch (err) {
      console.error("Erreur favori :", err);
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center w-full h-64 text-neutral-400">
        Chargement...
      </div>
    );
  if (!animes.length)
    return (
      <div className="flex justify-center items-center w-full h-64 text-neutral-400">
        Aucun animé
      </div>
    );

  return (
    <div className="grid grid-cols-1 gap-8 justify-items-center py-16 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {animes.map((anime) => (
        <AnimeCard
          key={anime.id}
          id={anime.id}
          title={anime.name}
          description={anime.description}
          image={anime.image_url}
          isFavorite={isFavorite(anime.id)}
          showFavorite={true}
          onToggleFavorite={() => handleToggle(anime.id)}
        />
      ))}
    </div>
  );
}
