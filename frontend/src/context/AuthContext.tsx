import { createContext, useState, useEffect, type ReactNode } from "react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

interface AuthContextType {
  isLoggedIn: boolean;
  loading: boolean;
  checkAuth: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch(`${API_URL}/users/me`, {
          credentials: "include",
        });
        setIsLoggedIn(res.ok);
        if (res.ok) {
          localStorage.setItem("isLoggedIn", "true");
        } else {
          localStorage.removeItem("isLoggedIn");
        }
      } catch {
        setIsLoggedIn(false);
        localStorage.removeItem("isLoggedIn");
      } finally {
        setLoading(false);
      }
    }
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const res = await fetch(`${API_URL}/users/me`, {
        credentials: "include",
      });
      setIsLoggedIn(res.ok);
      if (res.ok) {
        localStorage.setItem("isLoggedIn", "true");
      } else {
        localStorage.removeItem("isLoggedIn");
      }
    } catch {
      setIsLoggedIn(false);
      localStorage.removeItem("isLoggedIn");
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, loading, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
