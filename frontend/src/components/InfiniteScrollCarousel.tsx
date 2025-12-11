"use client";

import { useEffect, useState, useRef } from "react";
import AnimeCard from "@/components/AnimeCard";
import { useFavoritesContext } from "@/context/useFavorites";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { api } from "@/lib/api";

interface Anime {
  id: string;
  name: string;
  description: string;
  image_url: string;
  isFavorite?: boolean;
}

interface InfiniteScrollCarouselProps {
  endpoint?: string;
  baseVelocity?: number;
}

export default function InfiniteScrollCarousel({
  endpoint = "/animes/random",
  baseVelocity = 0.5,
}: InfiniteScrollCarouselProps) {
  const [animes, setAnimes] = useState<Anime[]>([]);
  const [loading, setLoading] = useState(true);
  const { isFavorite, toggleFavorite, refreshFavorites } =
    useFavoritesContext();

  const [width, setWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    async function fetchAnimes() {
      try {
        const res = await api(`${endpoint}`);
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

  useEffect(() => {
    if (carouselRef.current) {
      const measuredWidth = carouselRef.current.offsetWidth;
      setWidth(measuredWidth);
      x.set(-measuredWidth);
    }
  }, [animes, x]);

  useAnimationFrame((_, delta) => {
    if (isHovered || isDragging || width === 0) return;

    const moveBy = baseVelocity * (delta / 1000) * 60;
    let newX = x.get() - moveBy;

    if (newX <= -2 * width) {
      newX += width;
    }
    if (newX > 0) {
      newX -= width;
    }

    x.set(newX);
  });

  const handleToggle = async (animeId: string) => {
    const current = isFavorite(animeId);
    const newState = !current;
    try {
      await toggleFavorite(animeId, newState);
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

  if (!animes.length) return null;

  return (
    <div
      className="overflow-hidden relative py-10 w-full cursor-grab active:cursor-grabbing"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <motion.div
        className="flex w-max"
        style={{ x }}
        drag="x"
        dragConstraints={{ left: -10000, right: 10000 }}
        dragMomentum={false}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
      >
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="flex gap-8 pr-8"
            ref={i === 0 ? carouselRef : null}
          >
            {animes.map((anime) => (
              <div
                key={`${i}-${anime.id}`}
                className="pointer-events-none shrink-0"
              >
                <div
                  className="pointer-events-auto w-[160px] sm:w-[280px]"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <AnimeCard
                    id={anime.id}
                    title={anime.name}
                    description={anime.description}
                    image={anime.image_url}
                    isFavorite={isFavorite(anime.id)}
                    showFavorite={true}
                    onToggleFavorite={() => handleToggle(anime.id)}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
