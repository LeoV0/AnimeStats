"use client";

import { useEffect, useState } from "react";
import AnimeCard from "@/components/AnimeCard";

interface Anime {
  id: string;
  name: string;
  description: string;
  image_url: string;
  isFavorite?: boolean;
}

export default function AnimeList() {
  const [animes, setAnimes] = useState<Anime[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAnimes() {
      try {
        const res = await fetch("http://localhost:3000/animes", {
          credentials: "include",
        });
        const data = await res.json();
        console.log("Liste des animés : ", data);
        setAnimes(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des animes :", error);
      } finally {
        setLoading(false);
      }
    }

    fetchAnimes();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-64 text-neutral-400">
        Chargement des animés...
      </div>
    );
  }

  if (!animes.length) {
    return (
      <div className="flex items-center justify-center w-full h-64 text-neutral-400">
        Aucun animé trouvé
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-8 py-16 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-items-center">
      {animes.map((anime) => (
        <AnimeCard
          key={anime.id}
          id={anime.id}
          title={anime.name}
          description={anime.description}
          image={anime.image_url}
          isFavorite={anime.isFavorite}
          showFavorite={true}
          onToggleFavorite={async (fav) => {
            setAnimes((prev) =>
              prev.map((a) =>
                a.id === anime.id ? { ...a, isFavorite: fav } : a
              )
            );

            try {
              await fetch(
                `http://localhost:3000/animes/${anime.id}/favorites`,
                {
                  method: fav ? "POST" : "DELETE",
                  credentials: "include",
                }
              );
            } catch (err) {
              console.error("Erreur favori :", err);
              setAnimes((prev) =>
                prev.map((a) =>
                  a.id === anime.id ? { ...a, isFavorite: !fav } : a
                )
              );
            }
          }}
        />
      ))}
    </div>
  );
}
