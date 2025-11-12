import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import "./index.css";
import { Toaster } from "sonner";
import { FavoritesProvider } from "@/context/FavoritesContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <FavoritesProvider>
      <RouterProvider router={router} />
      <Toaster position="top-right" />
    </FavoritesProvider>
  </React.StrictMode>
);
