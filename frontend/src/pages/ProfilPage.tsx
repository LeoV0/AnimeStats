import Page1 from "@/components/glow-menu";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface User {
  id: string;
  name: string;
  email: string;
}

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("http://localhost:3000/users/me", {
          credentials: "include",
        });

        if (!res.ok) throw new Error("Utilisateur non trouvé");

        const data = await res.json();
        setUser(data);
      } catch (error) {
        console.error("Erreur profil:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    try {
      await fetch("http://localhost:3000/auth/logout", {
        method: "POST",
        credentials: "include",
      });

      navigate("/login");
    } catch (error) {
      console.error("Erreur déconnexion:", error);
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-black via-[#0B0F14] to-[#1A2428] text-gray-200">
      <div className="fixed left-0 right-0 z-50 flex justify-center pointer-events-none top-4">
        <div className="w-full max-w-6xl px-6 pointer-events-auto">
          <Page1 />
        </div>
      </div>

      <div className="relative z-10 p-6 pt-40">
        <div className="max-w-6xl mx-auto">
          {loading ? (
            <p className="text-xl text-gray-400">Chargement...</p>
          ) : user ? (
            <>
              <p className="mb-2 text-xl text-gray-400">あなたのプロフィール</p>
              <h1 className="text-3xl font-bold text-white">
                Bonjour, {user.name}
              </h1>
            </>
          ) : (
            <p className="text-xl text-red-400">Erreur de chargement</p>
          )}
        </div>
      </div>

      <button
        onClick={handleLogout}
        className="px-4 py-2 mt-4 text-white bg-red-500 rounded-lg hover:bg-red-600"
      >
        Se déconnecter
      </button>
    </div>
  );
}
