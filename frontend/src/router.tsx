import { createBrowserRouter } from "react-router-dom";
import AuthPage from "@/pages/AuthPage";
import HomePage from "./pages/HomePage";

export const router = createBrowserRouter([
  { path: "/login", element: <AuthPage mode="login" /> },
  { path: "/register", element: <AuthPage mode="register" /> },
  { path: "/", element: <HomePage /> },
]);
