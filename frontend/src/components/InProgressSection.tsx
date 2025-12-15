"use client";

import { useEffect, useState } from "react";
import AnimeCard from "@/components/AnimeCard";
import { Badge } from "@/components/ui/badge";
import { api } from "@/lib/api";

interface Anime {
  id: string;
  name: string;
  name_japanese: string;
  image_url: string;
  description: string;
  lastSeenEpisode: number;
  isFavorite?: boolean;
}

export default function InProgressSection() {
  const [animes, setAnimes] = useState<Anime[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInProgress = () => {
      api(`/animes/in-progress`)
        .then((r) => r.json())
        .then((data) => {
          setAnimes(Array.isArray(data) ? data : []);
        })
        .catch(() => setAnimes([]))
        .finally(() => setLoading(false));
    };

    fetchInProgress();

    const handleUpdate = () => {
      setLoading(true);
      fetchInProgress();
    };
    window.addEventListener("in-progress-updated", handleUpdate);
    return () => {
      window.removeEventListener("in-progress-updated", handleUpdate);
    };
  }, []);

  if (loading) return null;

  if (animes.length === 0) {
    return (
      <section className="py-16">
        <div className="flex flex-col justify-center items-center py-16 w-full text-white">
          <h2 className="mb-4 text-6xl font-extrabold tracking-wider text-center sm:text-8xl">
            進行中
          </h2>
          <p className="text-xl sm:text-2xl text-neutral-400">
            En cours de visionnage
          </p>
        </div>

        <p className="mx-auto mt-8 max-w-md text-lg text-center text-gray-400">
          Commence à regarder un animé pour le voir ici !
        </p>
      </section>
    );
  }

  return (
    <section className="py-16">
      <div className="flex flex-col justify-center items-center py-16 w-full text-white">
        <h2 className="mb-4 text-6xl font-extrabold tracking-wider text-center sm:text-8xl">
          進行中
        </h2>
        <p className="text-xl sm:text-2xl text-neutral-400">
          En cours de visionnage
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 justify-items-center md:gap-8 md:grid-cols-3 xl:grid-cols-4">
        {animes.map((anime) => (
          <AnimeCard
            key={anime.id}
            id={anime.id}
            title={anime.name}
            description={anime.description}
            image={anime.image_url}
            isFavorite={anime.isFavorite}
            showFavorite={true}
            badge={
              <Badge className="text-green-400 border bg-green-500/20 border-green-500/50">
                <div className="flex relative items-center">
                  <div className="relative w-2 h-2 mr-1.5">
                    <div className="absolute inset-0 bg-green-400 rounded-full animate-pulse" />
                    <div className="absolute inset-0 bg-green-400 rounded-full opacity-75 animate-ping" />
                  </div>
                  En cours
                </div>
              </Badge>
            }
          />
        ))}
      </div>
    </section>
  );
}
