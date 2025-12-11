"use client";

import AnimeCard from "@/components/AnimeCard";
import { useFavoritesContext } from "@/context/useFavorites";

interface Anime {
  id: string;
  name: string;
  description: string;
  image_url: string;
  tags?: string[];
  isFavorite?: boolean;
}

interface AnimeListProps {
  animes?: Anime[];
  hasActiveFilters?: boolean;
  isDataLoaded?: boolean;
}

export default function AnimeList({
  animes = [],
  hasActiveFilters = false,
  isDataLoaded = false,
}: AnimeListProps) {
  const { isFavorite, toggleFavorite } = useFavoritesContext();

  const handleToggle = async (animeId: string) => {
    await toggleFavorite(animeId, !isFavorite(animeId));
  };

  if (!isDataLoaded) {
    return null;
  }

  if (animes.length === 0 && hasActiveFilters) {
    return (
      <div className="py-32 text-center">
        <p className="text-2xl font-light text-neutral-500">
          Aucun animé ne correspond à vos filtres
        </p>
        <p className="mt-4 text-neutral-600">Essayez d'enlever quelques tags</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 justify-items-center md:gap-10 md:grid-cols-3 xl:grid-cols-4">
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
