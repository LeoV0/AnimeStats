import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoutes";
import Layout from "./components/Layout";
import AuthPage from "@/pages/AuthPage";
import HomePage from "@/pages/HomePage";
import AnimePage from "./pages/AnimePage";
import FavoritePage from "./pages/FavoritePage";
import ProfilPage from "./pages/ProfilPage";
import DiscoverPage from "./pages/DiscoverPage";
import GlobalWrapper from "./components/GlobalWrapper";
import NotFoundPage from "./pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    element: <GlobalWrapper />,
    children: [
      {
        path: "/login",
        element: <AuthPage mode="login" />,
      },
      {
        path: "/register",
        element: <AuthPage mode="register" />,
      },
      {
        element: <Layout />,
        children: [
          {
            path: "/",
            element: <HomePage />,
          },
          {
            path: "/animes/:id",
            element: <AnimePage />,
          },
          {
            path: "/favorites",
            element: (
              <ProtectedRoute>
                <FavoritePage />
              </ProtectedRoute>
            ),
          },
          {
            path: "/profil",
            element: (
              <ProtectedRoute>
                <ProfilPage />
              </ProtectedRoute>
            ),
          },
          {
            path: "/discover",
            element: <DiscoverPage />,
          },
          {
            path: "*",
            element: <NotFoundPage />,
          },
        ],
      },
    ],
  },
]);
