import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import "./index.css";
import { Toaster } from "sonner";
import { FavoritesProvider } from "@/context/FavoritesContext";
import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <FavoritesProvider>
        <RouterProvider router={router} />
        <Toaster position="top-right" />
      </FavoritesProvider>
    </AuthProvider>
  </React.StrictMode>
);
