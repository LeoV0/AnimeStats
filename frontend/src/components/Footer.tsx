import { Github, ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const target = footerRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(target);
    return () => observer.unobserve(target);
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative w-full mt-auto overflow-hidden bg-linear-to-br from-black via-[#0B0F14] to-[#1A2428]"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />
      
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.03),transparent_70%)]" />

      <div className="relative">
        <div className="container mx-auto px-5 md:px-6 py-20 md:py-28">
          <div className={`mb-14 md:mb-20 transition-all duration-1200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <div className="relative mb-5 md:mb-6">
              <h2 className="relative text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[1.05] tracking-tight text-white">
                YUMETRACK
              </h2>
            </div>

            <p className="text-lg sm:text-xl md:text-2xl text-neutral-400 font-light max-w-3xl leading-relaxed">
              Interface premium pour suivre votre parcours anime. Design pensé pour l'essentiel, construit pour l'excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 lg:gap-16 mb-12">

            <div className={`md:col-span-4 transition-all duration-1000 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="mb-6">
                <span className="text-xs font-semibold text-neutral-600 uppercase tracking-widest">
                  Navigation
                </span>
              </div>
              <nav className="space-y-3">
                {[
                  { name: 'Accueil', href: '/' },
                  { name: 'Découvrir', href: '/discover' },
                  { name: 'Mes Favoris', href: '/favorites' },
                  { name: 'Mon Profil', href: '/profil' }
                ].map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="group relative flex items-center justify-between text-neutral-400 hover:text-white transition-colors duration-300 text-base md:text-lg"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="h-4 w-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="pointer-events-none absolute -bottom-1 left-0 h-px w-0 bg-neutral-400/60 opacity-0 transition-all duration-500 group-hover:w-full group-hover:opacity-100" />
                  </a>
                ))}
              </nav>
            </div>

            <div className={`md:col-span-4 transition-all duration-1000 delay-250 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="mb-6">
                <span className="text-xs font-semibold text-neutral-600 uppercase tracking-widest">
                  Contact
                </span>
              </div>
              <div className="space-y-3">
                <a
                  href="https://github.com/leov0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between text-neutral-300 hover:text-white rounded-xl border border-white/6 bg-white/3 px-4 py-3 text-sm transition-colors hover:border-white/15 hover:bg-white/6"
                >
                  <span className="flex items-center gap-2">
                    <Github className="h-4 w-4 text-neutral-400" />
                    GitHub
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-neutral-500 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
            </div>
          </div>

          <div className={`pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-neutral-600">
              <p>
                © {currentYear} <span className="font-semibold text-white">YumeTrack</span>
              </p>
              <span className="hidden md:block">•</span>
              <p>Conçu pour les passionnés d'anime</p>
            </div>
            
            
          </div>

        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
    </footer>
  );
}