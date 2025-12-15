import { Tilt } from "@/components/ui/tilt";
import { Toggle } from "@/components/ui/toggle";
import { Bookmark } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useFavoritesContext } from "@/context/useFavorites";
import { useAuth } from "@/context/useAuth";

import { useNavigate } from "react-router-dom";

interface AnimeCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  isFavorite?: boolean;
  showFavorite?: boolean;
  badge?: React.ReactNode;
  progress?: string;
  onToggleFavorite?: () => void;
}

export default function AnimeCard({
  id,
  title,
  description,
  image,
  isFavorite: propIsFavorite,
  showFavorite,
  badge,
  progress,
  onToggleFavorite,
}: AnimeCardProps) {
  const { isFavorite, toggleFavorite } = useFavoritesContext();

  const currentFavorite = propIsFavorite ?? isFavorite(id);

  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleToggle = async () => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
    const newState = !currentFavorite;
    try {
      await toggleFavorite(id, newState);
      onToggleFavorite?.();
    } catch (err) {
      console.error("Erreur favori :", err);
    }
  };

  return (
    <Tilt
      rotationFactor={20}
      className="relative group w-full aspect-5/8 md:aspect-2/3 rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md shadow-lg transition-all hover:shadow-xl"
    >
      <motion.img
        src={image}
        alt={title}
        className="object-cover absolute inset-0 w-full h-full opacity-40 transition-opacity duration-500 group-hover:opacity-100"
        initial={{ scale: 1.05 }}
        whileHover={{ scale: 1.1 }}
      />

      <div className="absolute inset-0 to-transparent bg-linear-to-t from-black/70 via-black/20" />

      {badge && <div className="absolute top-3 left-3 z-10">{badge}</div>}

      <div className="flex absolute right-0 bottom-0 left-0 flex-col p-4 space-y-3">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-white line-clamp-2">
            {title}
          </h3>
          {progress && (
            <p className="absolute top-3 right-3 z-10 px-2 py-1 text-xs text-white rounded-md backdrop-blur-sm bg-black/60">
              {progress}
            </p>
          )}
          {showFavorite && (
            <Toggle
              pressed={currentFavorite}
              onPressedChange={handleToggle}
              aria-label={
                currentFavorite ? "Retirer des favoris" : "Ajouter aux favoris"
              }
              className="p-1 rounded-full cursor-pointer bg-white/10 hover:bg-white/20"
            >
              <Bookmark
                className={`w-5 h-5 transition-colors ${
                  currentFavorite
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-white"
                }`}
              />
            </Toggle>
          )}
        </div>

        <p className="text-sm text-neutral-300 line-clamp-3">{description}</p>
        <Button
          variant="secondary"
          asChild
          className="self-center px-4 py-1 mt-2 text-sm text-white rounded-lg border cursor-pointer w-fit bg-white/10 border-white/20 hover:bg-white/20 md:self-start"
        >
          <Link to={`/animes/${id}`}>Lire plus</Link>
        </Button>
      </div>
    </Tilt>
  );
}
