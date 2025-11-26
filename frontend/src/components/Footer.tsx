import { Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-6 mt-auto border-t border-white/10 bg-[rgb(22,31,35)] text-neutral-400">
      <div className="container flex flex-col gap-4 justify-between items-center px-4 mx-auto md:flex-row">
        <p className="text-sm">
          © {new Date().getFullYear()} YumeTrack. All rights reserved.
        </p>

        <div className="flex gap-6 items-center">
          <a
            href="https://github.com/leov0"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 items-center transition-colors hover:text-white"
          >
            <Github size={20} />
            <span className="text-sm font-medium">GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
