import { createContext, useState, useEffect, type ReactNode } from "react";
import { api } from "@/lib/api";

interface AuthContextType {
  isLoggedIn: boolean;
  loading: boolean;
  checkAuth: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  const checkAuth = async () => {
    try {
      const res = await api("/users/me");
      setIsLoggedIn(res.ok);
      if (res.ok) {
        localStorage.setItem("isLoggedIn", "true");
      } else {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("jwt_token");
      }
    } catch (err) {
      setIsLoggedIn(false);
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("jwt_token");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
    const interval = setInterval(checkAuth, 10 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, loading, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
