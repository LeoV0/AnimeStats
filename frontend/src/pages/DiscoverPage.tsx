import AnimeList from "@/components/AnimeList";
import Page1 from "@/components/glow-menu";

export default function DiscoverPage() {
  return (
    <div className="relative w-full bg-linear-to-br from-black via-[#0B0F14] to-[#1A2428] text-white min-h-screen">
      <div className="fixed left-0 right-0 z-50 flex justify-center pointer-events-none top-4">
        <div className="w-full max-w-6xl px-6 pointer-events-auto">
          <Page1 />
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center min-h-screen p-6 pt-32">
        <div className="w-full max-w-6xl space-y-8">
          <div className="space-y-1 text-left">
            <h1 className="text-2xl font-bold md:text-3xl text-white/90">
              発見する
            </h1>
            <p className="text-lg md:text-xl text-neutral-400">Découvrir</p>
          </div>
        </div>
        <div className="relative z-10">
          <div className="px-6 mx-auto space-y-24 max-w-7xl">
            <AnimeList />
          </div>
        </div>
      </div>
    </div>
  );
}
