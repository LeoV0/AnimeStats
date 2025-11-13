// context/FavoritesContext.tsx
import { createContext, type ReactNode } from "react";
import { useFavorites } from "./useFavorites";

interface FavoritesContextType {
  favorites: Set<string>;
  toggleFavorite: (id: string, isFavorite: boolean) => Promise<void>;
  isFavorite: (id: string) => boolean;
  refreshFavorites: () => Promise<void>;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

interface FavoritesProviderProps {
  children: ReactNode;
}

export function FavoritesProvider({ children }: FavoritesProviderProps) {
  const { favorites, toggleFavorite, isFavorite, refreshFavorites } =
    useFavorites();

  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorite, isFavorite, refreshFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export { FavoritesContext };
