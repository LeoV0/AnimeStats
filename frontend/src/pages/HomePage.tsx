import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tv, Bookmark, Compass } from "lucide-react";
import { Link } from "react-router-dom";
import { Scene } from "@/components/hero-section";
import Page1 from "@/components/glow-menu";
import JapaneseSection from "@/components/JapaneseSection";
import AnimeList from "@/components/AnimeList";

const features = [
  {
    icon: Tv,
    title: "Suivi Facile",
    description:
      "Garde une trace de chaque anime que tu regardes, épisode après épisode.",
  },
  {
    icon: Compass,
    title: "Découvre de Nouveaux Mondes",
    description: "Explore les animés populaires et les nouveautés.",
  },
  {
    icon: Bookmark,
    title: "Favoris",
    description: "Ajoute tes animés préférés à ta liste personnelle.",
  },
];

const HomePage = () => {
  return (
    <div className="relative w-full bg-gradient-to-br from-black via-[#0B0F14] to-[#1A2428] text-white ">
      <div className="absolute inset-0 z-0 h-screen pointer-events-none opacity-70">
        <Scene />
      </div>

      <div className="fixed left-0 right-0 z-50 flex justify-center pointer-events-none top-4">
        <div className="w-full max-w-6xl px-6 pointer-events-auto">
          <Page1 />
        </div>
      </div>

      <div className="relative flex flex-col items-center justify-center min-h-screen p-6 sm:p-8">
        <div className="relative z-10 flex flex-col items-center w-full max-w-6xl space-y-12 pt-15">
          <div className="flex flex-col items-center space-y-6 text-center">
            <Badge
              variant="secondary"
              className="px-4 py-2 text-white transition-all duration-300 border rounded-full backdrop-blur-sm bg-white/10 border-white/20 hover:bg-white/20"
            >
              YumeTrack • Suis. Découvre. Profite.
            </Badge>

            <h1 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
              Ton univers animé, centralisé en un seul endroit.
            </h1>
            <p className="max-w-2xl text-lg text-neutral-300">
              Garde une trace de tout ce que tu regardes et découvre les
              nouvelles sorties.
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <Link to="/register">
                <Button className="px-8 py-3 text-sm text-black transition-all duration-300 bg-white border cursor-pointer rounded-xl border-white/10 hover:bg-white/90">
                  S'inscrire
                </Button>
              </Link>
              <a href="#animes">
                <Button className="px-8 py-3 text-sm text-white transition-all duration-300 bg-transparent border cursor-pointer rounded-xl border-white/20 hover:bg-white/10">
                  Explorer les Animés
                </Button>
              </a>
            </div>
          </div>

          <div className="grid w-full max-w-4xl grid-cols-1 gap-6 mx-auto sm:grid-cols-2 md:grid-cols-3 justify-items-center">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex flex-col items-start justify-start w-full h-40 max-w-xs p-4 space-y-2 transition-transform duration-300 border backdrop-blur-sm bg-white/5 border-white/10 rounded-xl md:p-6 md:h-48 md:space-y-3 "
              >
                <feature.icon
                  size={28}
                  className="text-white/80 md:w-6 md:h-6"
                />
                <h3 className="text-base font-medium md:text-lg">
                  {feature.title}
                </h3>
                <p className="text-sm text-neutral-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 py-16">
        <JapaneseSection />
      </div>

      <div id="animes" className="relative z-10 flex justify-center py-2">
        <AnimeList />
      </div>
    </div>
  );
};

export default HomePage;
