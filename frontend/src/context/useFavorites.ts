// contexts/useFavorites.ts
import { useState, useEffect, useContext } from "react";
import { FavoritesContext } from "./FavoritesContext";

export interface FavoriteAnime {
  id: string;
}

export function useFavorites() {
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const refreshFavorites = async () => {
    try {
      const res = await fetch("http://localhost:3000/animes/favorites", {
        credentials: "include",
      });
      if (res.ok) {
        const data: FavoriteAnime[] = await res.json();
        const ids = data.map((fav) => fav.id);
        setFavorites(new Set(ids));
      }
    } catch (err) {
      console.error("Erreur refresh favoris:", err);
    }
  };

  useEffect(() => {
    refreshFavorites();
  }, []);

  const toggleFavorite = async (id: string, isFavorite: boolean) => {
    const method = isFavorite ? "POST" : "DELETE";
    try {
      await fetch(`http://localhost:3000/animes/${id}/favorites`, {
        method,
        credentials: "include",
      });

      setFavorites((prev) => {
        const newSet = new Set(prev);
        if (isFavorite) newSet.add(id);
        else newSet.delete(id);
        return newSet;
      });
    } catch (err) {
      console.error("Erreur toggle favori:", err);
      throw err;
    }
  };

  const isFavorite = (id: string) => favorites.has(id);

  return { favorites, toggleFavorite, isFavorite, refreshFavorites };
}

export function useFavoritesContext() {
  const ctx = useContext(FavoritesContext);
  if (!ctx)
    throw new Error(
      "useFavoritesContext must be used inside FavoritesProvider"
    );
  return ctx;
}
