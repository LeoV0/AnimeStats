"use client";

import AnimeList from "@/components/AnimeList";
import { useTags } from "@/hooks/use-tags";
import { X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo, useEffect } from "react";
import { api } from "@/lib/api";

interface Anime {
  id: string;
  name: string;
  description: string;
  image_url: string;
  tags?: string[];
  isFavorite?: boolean;
}

export default function DiscoverPage() {
  const [allAnimes, setAllAnimes] = useState<Anime[]>([]);
  const [allTags, setAllTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [showAllTags, setShowAllTags] = useState(false);

  const { tags, addTag, removeTag, removeLastTag, hasReachedMax } = useTags({
    maxTags: 5,
  });

  const selectedTags = tags.map((t) => t.label);

  useEffect(() => {
    async function load() {
      try {
        const res = await api(`/animes`);
        if (!res.ok) return;
        const data: Anime[] = await res.json();

        setAllAnimes(data);

        const tagCount = new Map<string, number>();
        data.forEach((anime) => {
          anime.tags?.forEach((tag) => {
            tagCount.set(tag, (tagCount.get(tag) || 0) + 1);
          });
        });

        const sortedTags = Array.from(tagCount.entries())
          .sort((a, b) => b[1] - a[1])
          .map(([tag]) => tag);

        setAllTags(sortedTags);
      } catch (err) {
        console.error(err);
      } finally {
        setIsDataLoaded(true);
      }
    }
    load();
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !inputValue) {
      e.preventDefault();
      removeLastTag();
    }
    if (e.key === "Enter" && inputValue.trim()) {
      e.preventDefault();
      const val = inputValue.trim();
      addTag({ id: val, label: val });
      setInputValue("");
    }
  };

  const filteredAnimes = useMemo(() => {
    if (selectedTags.length === 0) return allAnimes;
    return allAnimes.filter((anime) =>
      selectedTags.every((tag) => anime.tags?.includes(tag))
    );
  }, [allAnimes, selectedTags]);

  const visibleTags = showAllTags ? allTags : allTags.slice(0, 12);
  const hasMoreTags = allTags.length > 12;

  return (
    <div className="relative min-h-screen bg-linear-to-br from-black via-[#0B0F14] to-[#1A2428] text-white">
      <div className="flex relative z-10 flex-col items-center px-6 pt-32 pb-20 min-h-screen">
        <div className="space-y-12 w-full max-w-6xl">
          <div className="space-y-1 text-left">
            <h1 className="text-4xl font-bold md:text-5xl text-white/90">
              発見する
            </h1>
            <p className="text-xl md:text-2xl text-neutral-400">Découvrir</p>
          </div>

          {allTags.length > 0 && (
            <div className="space-y-6 w-full max-w-md">
              <div className="space-y-3">
                <label className="text-sm font-medium text-neutral-300">
                  Filtrer par tags
                </label>
                <div className="p-3 rounded-xl border backdrop-blur-md border-white/10 bg-white/5">
                  <div className="flex flex-wrap gap-2 items-center">
                    <AnimatePresence>
                      {tags.map((tag) => (
                        <motion.span
                          key={tag.id}
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.8, opacity: 0 }}
                          className="inline-flex items-center gap-1.5 rounded-lg bg-blue-500/20 px-3 py-1.5 text-xs font-medium text-blue-300 border border-blue-400/30"
                        >
                          {tag.label}
                          <button
                            onClick={() => removeTag(tag.id)}
                            className="p-1 rounded-full transition hover:bg-white/20"
                            aria-label={`Retirer le tag ${tag.label}`}
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </motion.span>
                      ))}
                    </AnimatePresence>

                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder={
                        hasReachedMax ? "Max 5 tags" : "Action, Romance..."
                      }
                      disabled={hasReachedMax}
                      className="flex-1 min-w-[200px] border-none bg-transparent text-sm text-white placeholder:text-neutral-500 focus:ring-0"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-neutral-300">
                    Suggestions
                  </label>
                  {hasMoreTags && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowAllTags(!showAllTags)}
                      className="text-xs text-neutral-400 hover:text-white"
                    >
                      {showAllTags ? "Voir moins" : "Voir plus"}
                      <ChevronDown
                        className={cn(
                          "ml-1 h-3 w-3 transition-transform",
                          showAllTags && "rotate-180"
                        )}
                      />
                    </Button>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  {visibleTags.map((suggestion) => {
                    const isSelected = tags.some((t) => t.label === suggestion);
                    return (
                      <Button
                        key={suggestion}
                        variant={isSelected ? "default" : "outline"}
                        size="sm"
                        onClick={() => {
                          if (isSelected) {
                            const tag = tags.find(
                              (t) => t.label === suggestion
                            );
                            if (tag) removeTag(tag.id);
                          } else {
                            addTag({ id: suggestion, label: suggestion });
                          }
                        }}
                        disabled={hasReachedMax && !isSelected}
                        className={cn(
                          "px-4 py-1.5 text-xs",
                          isSelected && "ring-2 ring-white/50"
                        )}
                      >
                        {suggestion}
                      </Button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-16 w-full">
          <div className="px-6 mx-auto max-w-7xl">
            <AnimeList
              animes={filteredAnimes}
              hasActiveFilters={selectedTags.length > 0}
              isDataLoaded={isDataLoaded}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
