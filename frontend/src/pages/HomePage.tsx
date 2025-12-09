import React, { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tv, Bookmark, Compass } from "lucide-react";
import { Link } from "react-router-dom";
import Page1 from "@/components/glow-menu";
import JapaneseSection from "@/components/JapaneseSection";
import InfiniteScrollCarousel from "@/components/InfiniteScrollCarousel";
import InProgressSection from "@/components/InProgressSection";
import { useAuth } from "@/context/useAuth";

const Scene = React.lazy(() =>
  import("@/components/hero-section").then((module) => ({
    default: module.Scene,
  }))
);

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
  const { isLoggedIn } = useAuth();
  const [isDesktop, setIsDesktop] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const checkDesktop = () => setIsDesktop(window.innerWidth > 768);
      checkDesktop();
      window.addEventListener("resize", checkDesktop);
      return () => window.removeEventListener("resize", checkDesktop);
    }
  }, []);

  return (
    <div className="relative w-full bg-linear-to-br from-black via-[#0B0F14] to-[#1A2428] text-white ">
      {isDesktop && (
        <div className="absolute inset-0 z-0 h-screen opacity-70 pointer-events-none">
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </div>
      )}

      <div className="flex fixed right-0 left-0 top-4 z-50 justify-center pointer-events-none">
        <div className="px-6 w-full max-w-6xl pointer-events-auto">
          <Page1 />
        </div>
      </div>

      <div className="flex relative flex-col justify-center items-center p-6 min-h-screen sm:p-8">
        <div className="flex relative z-10 flex-col items-center space-y-12 w-full max-w-6xl pt-15">
          <div className="flex flex-col items-center space-y-6 text-center">
            <Badge
              variant="secondary"
              className="px-4 py-2 text-white rounded-full border backdrop-blur-sm transition-all duration-300 bg-white/10 border-white/20 hover:bg-white/20"
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

            <div className="flex flex-col gap-4 items-center sm:flex-row">
              {!isLoggedIn && (
                <Link to="/register">
                  <Button className="px-8 py-3 text-sm text-black bg-white rounded-xl border transition-all duration-300 cursor-pointer border-white/10 hover:bg-white/90">
                    S'inscrire
                  </Button>
                </Link>
              )}
              <a href="#animes">
                <Button className="px-8 py-3 text-sm text-white bg-transparent rounded-xl border transition-all duration-300 cursor-pointer border-white/20 hover:bg-white/10">
                  Explorer les Animés
                </Button>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 justify-items-center mx-auto w-full max-w-4xl sm:grid-cols-2 md:grid-cols-3">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-start items-start p-4 space-y-2 w-full max-w-xs h-40 rounded-xl border backdrop-blur-sm transition-transform duration-300 bg-white/5 border-white/10 md:p-6 md:h-48 md:space-y-3"
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
        <div className="px-6 mx-auto space-y-24 max-w-7xl">
          <InProgressSection />
          <div id="animes">
            <JapaneseSection />
            <InfiniteScrollCarousel endpoint="/animes/random" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
