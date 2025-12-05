import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="relative w-full min-h-screen bg-linear-to-br from-black via-[#0B0F14] to-[#1A2428] text-white flex flex-col items-center justify-center p-6">
      <div className="flex flex-col items-center mt-20 space-y-6 text-center">
        <div className="flex justify-center items-center mx-auto w-24 h-24 rounded-full border backdrop-blur bg-white/10 border-white/20">
          <AlertTriangle size={48} className="text-white/80" />
        </div>

        <h1 className="text-4xl font-bold md:text-6xl">404</h1>
        <p className="max-w-md text-lg text-neutral-300">
          La page que tu cherches n'existe pas ou a été déplacée.
        </p>

        <div className="flex gap-4">
          <Link to="/">
            <Button className="px-8 py-3 text-sm text-white bg-transparent rounded-xl border transition-all duration-300 cursor-pointer border-white/20 hover:bg-white/10">
              Retour à l'accueil
            </Button>
          </Link>

          <Link to="/discover">
            <Button className="px-8 py-3 text-sm text-white bg-transparent rounded-xl border transition-all duration-300 cursor-pointer border-white/20 hover:bg-white/10">
              Découvrir les animés
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
