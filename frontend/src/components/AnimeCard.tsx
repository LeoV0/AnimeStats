"use client";

import React from "react";
import { Tilt } from "@/components/ui/tilt";
import { Toggle } from "@/components/ui/toggle";
import { Bookmark } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface AnimeCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  isFavorite?: boolean;
  onToggleFavorite?: (state: boolean) => void;
}

export default function AnimeCard({
  id,
  title,
  description,
  image,
  isFavorite = false,
  onToggleFavorite,
}: AnimeCardProps) {
  const [favorite, setFavorite] = React.useState(isFavorite);

  const handleToggle = () => {
    const newState = !favorite;
    setFavorite(newState);
    onToggleFavorite?.(newState);
  };

  return (
    <Tilt
      rotationFactor={15}
      className="relative group w-[280px] h-[400px] rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md shadow-lg transition-all hover:shadow-xl"
    >
      <motion.img
        src={image}
        alt={title}
        className="absolute inset-0 object-cover w-full h-full transition-opacity duration-500 opacity-40 group-hover:opacity-100"
        initial={{ scale: 1.05 }}
        whileHover={{ scale: 1.1 }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 flex flex-col p-4 space-y-3">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold text-white line-clamp-2">
            {title}
          </h3>
          <Toggle
            pressed={favorite}
            onPressedChange={handleToggle}
            aria-label="Ajouter aux favoris"
            className="p-1 rounded-full cursor-pointer bg-white/10 hover:bg-white/20"
          >
            <Bookmark
              className={`w-5 h-5  transition-colors ${
                favorite ? "fill-yellow-400 text-yellow-400" : "text-white"
              }`}
            />
          </Toggle>
        </div>

        <p className="text-sm text-neutral-300 line-clamp-3">{description}</p>

        <Button
          variant="secondary"
          className="px-4 py-1 mt-2 text-sm text-white border rounded-lg cursor-pointer w-fit bg-white/10 border-white/20 hover:bg-white/20"
        >
          <Link to={`/animes/${id}`}>Lire plus</Link>
        </Button>
      </div>
    </Tilt>
  );
}
