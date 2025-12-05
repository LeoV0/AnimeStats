import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoutes";
import { LoadingSpinner } from "./components/LoadingSpinner";
import Layout from "./components/Layout";

const AuthPage = React.lazy(() => import("@/pages/AuthPage"));
const HomePage = React.lazy(() => import("@/pages/HomePage"));
const AnimePage = React.lazy(() => import("./pages/AnimePage"));
const FavoritePage = React.lazy(() => import("./pages/FavoritePage"));
const ProfilPage = React.lazy(() => import("./pages/ProfilPage"));
const DiscoverPage = React.lazy(() => import("./pages/DiscoverPage"));
import GlobalWrapper from "./components/GlobalWrapper";
import NotFoundPage from "./pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    element: <GlobalWrapper />,
    children: [
      {
        path: "/login",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <AuthPage mode="login" />
          </Suspense>
        ),
      },
      {
        path: "/register",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <AuthPage mode="register" />
          </Suspense>
        ),
      },
      {
        element: <Layout />,
        children: [
          {
            path: "/",
            element: (
              <Suspense fallback={<LoadingSpinner />}>
                <HomePage />
              </Suspense>
            ),
          },
          {
            path: "/animes/:id",
            element: (
              <Suspense fallback={<LoadingSpinner />}>
                <AnimePage />
              </Suspense>
            ),
          },
          {
            path: "/favorites",
            element: (
              <ProtectedRoute>
                <Suspense fallback={<LoadingSpinner />}>
                  <FavoritePage />
                </Suspense>
              </ProtectedRoute>
            ),
          },
          {
            path: "/profil",
            element: (
              <ProtectedRoute>
                <Suspense fallback={<LoadingSpinner />}>
                  <ProfilPage />
                </Suspense>
              </ProtectedRoute>
            ),
          },
          {
            path: "/discover",
            element: (
              <Suspense fallback={<LoadingSpinner />}>
                <DiscoverPage />
              </Suspense>
            ),
          },
          {
            path: "*",
            element: (
              <Suspense fallback={<LoadingSpinner />}>
                <NotFoundPage />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
]);
