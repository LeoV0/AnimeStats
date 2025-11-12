import { createBrowserRouter } from "react-router-dom";
import AuthPage from "@/pages/AuthPage";
import HomePage from "@/pages/HomePage";
import AnimePage from "./pages/AnimePage";
import FavoritePage from "./pages/FavoritePage";

export const router = createBrowserRouter([
  { path: "/login", element: <AuthPage mode="login" /> },
  { path: "/register", element: <AuthPage mode="register" /> },
  { path: "/", element: <HomePage /> },
  { path: "/animes/:id", element: <AnimePage /> },
  { path: "/favorites", element: <FavoritePage /> },
]);
