import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/useAuth";
import type { ReactNode } from "react";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const { isLoggedIn, loading } = useAuth();

  if (loading)
    return (
      <div className="w-full min-h-screen bg-gradient-to-br from-black via-[#0B0F14] to-[#1A2428] flex items-center justify-center text-white">
        <p>Chargement...</p>
      </div>
    );

  if (!isLoggedIn) return <Navigate to="/login" replace />;

  return children;
}
