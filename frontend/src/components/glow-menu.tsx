"use client";

import type * as React from "react";
import { motion } from "framer-motion";
import { Home, User, Bookmark, Compass } from "lucide-react";
import { useTheme } from "next-themes";
import { ThemeProvider } from "next-themes";

import { useAuth } from "@/context/useAuth";
import { LogIn } from "lucide-react";

interface MenuItem {
  icon: React.ReactNode;
  label: string;
  href: string;
  gradient: string;
  iconColor: string;
}

const itemVariants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
};

const backVariants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
};

const glowVariants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 2,
    transition: {
      opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
      scale: {
        duration: 0.5,
        type: "spring" as const,
        stiffness: 300,
        damping: 25,
      },
    },
  },
};

const navGlowVariants = {
  initial: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

const sharedTransition = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20,
  duration: 0.5,
};

function MenuBar() {
  const { theme } = useTheme();
  const { isLoggedIn } = useAuth();

  const isDarkTheme = theme === "dark";

  const menuItems: MenuItem[] = [
    {
      icon: <Home className="w-5 h-5" />,
      label: "Accueil",
      href: "/",
      gradient:
        "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)",
      iconColor: "text-blue-500",
    },
    {
      icon: <Compass className="w-5 h-5" />,
      label: "Découvrir",
      href: "/discover",
      gradient:
        "radial-gradient(circle, rgba(249,115,22,0.15) 0%, rgba(234,88,12,0.06) 50%, rgba(194,65,12,0) 100%)",
      iconColor: "text-orange-500",
    },
    {
      icon: <Bookmark className="w-5 h-5" />,
      label: "Mes Favoris",
      href: "/favorites",
      gradient:
        "radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(22,163,74,0.06) 50%, rgba(21,128,61,0) 100%)",
      iconColor: "text-green-500",
    },
    isLoggedIn
      ? {
          icon: <User className="w-5 h-5" />,
          label: "Profil",
          href: "/profil",
          gradient:
            "radial-gradient(circle, rgba(239,68,68,0.15) 0%, rgba(220,38,38,0.06) 50%, rgba(185,28,28,0) 100%)",
          iconColor: "text-red-500",
        }
      : {
          icon: <LogIn className="w-5 h-5" />,
          label: "Connexion",
          href: "/login",
          gradient:
            "radial-gradient(circle, rgba(168,85,247,0.15) 0%, rgba(147,51,234,0.06) 50%, rgba(126,34,206,0) 100%)",
          iconColor: "text-purple-500",
        },
  ];

  return (
    <motion.nav
      className="overflow-hidden relative p-2 rounded-2xl shadow-lg backdrop-blur-lg bg-linear-to-b from-background/80 to-background/40"
      initial="initial"
      whileHover="hover"
    >
      <motion.div
        className={`absolute -inset-2 bg-gradient-radial from-transparent ${
          isDarkTheme
            ? "via-blue-400/30 via-30% via-purple-400/30 via-60% via-red-400/30 via-90%"
            : "via-blue-400/20 via-30% via-purple-400/20 via-60% via-red-400/20 via-90%"
        } to-transparent rounded-3xl z-0 pointer-events-none`}
        variants={navGlowVariants}
      />
      <ul className="flex relative z-10 gap-2 items-center">
        {menuItems.map((item) => (
          <motion.li key={item.label} className="relative">
            <motion.div
              className="block overflow-visible relative rounded-xl group"
              style={{ perspective: "600px" }}
              whileHover="hover"
              initial="initial"
            >
              <motion.div
                className="absolute inset-0 z-0 pointer-events-none"
                variants={glowVariants}
                style={{
                  background: item.gradient,
                  opacity: 0,
                  borderRadius: "16px",
                }}
              />
              <motion.a
                href={item.href}
                className="flex relative z-10 gap-2 items-center px-4 py-2 bg-transparent rounded-xl transition-colors text-muted-foreground group-hover:text-foreground"
                variants={itemVariants}
                transition={sharedTransition}
                aria-label={item.label}
                style={{
                  transformStyle: "preserve-3d",
                  transformOrigin: "center bottom",
                }}
              >
                <span
                  className={`transition-colors duration-300 group-hover:${item.iconColor} text-foreground`}
                >
                  {item.icon}
                </span>
                <span className="hidden md:block">{item.label}</span>
              </motion.a>
              <motion.a
                href={item.href}
                className="flex absolute inset-0 z-10 gap-2 justify-center items-center px-4 py-2 bg-transparent rounded-xl transition-colors text-muted-foreground group-hover:text-foreground md:justify-start"
                variants={backVariants}
                transition={sharedTransition}
                aria-label={item.label}
                style={{
                  transformStyle: "preserve-3d",
                  transformOrigin: "center top",
                  rotateX: 90,
                }}
              >
                <span
                  className={`transition-colors duration-300 group-hover:${item.iconColor} text-foreground`}
                >
                  {item.icon}
                </span>
                <span className="hidden md:block">{item.label}</span>
              </motion.a>
            </motion.div>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}

export default function Page1() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <div className="flex flex-col items-center pb-10 w-full bg-background">
        <MenuBar />
      </div>
    </ThemeProvider>
  );
}
