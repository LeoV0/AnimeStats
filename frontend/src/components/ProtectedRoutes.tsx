import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/useAuth";
import type { ReactNode } from "react";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const { isLoggedIn, loading } = useAuth();

  if (loading && !isLoggedIn) return null;

  if (!isLoggedIn && !loading) return <Navigate to="/login" replace />;

  return children;
}
