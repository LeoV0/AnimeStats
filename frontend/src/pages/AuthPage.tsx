import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { registerUser, loginUser } from "@/services/auth";
import { toast } from "sonner";

interface AuthPageProps {
  mode: "login" | "register";
}

export default function AuthPage({ mode }: AuthPageProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (mode === "register" && !name.trim()) {
      toast.error("Le nom est requis");
      return;
    }
    if (!email.trim() || !password) {
      toast.error("Email et mot de passe requis");
      return;
    }

    setLoading(true);
    const toastId = toast.loading(
      mode === "register" ? "Création du compte..." : "Connexion en cours..."
    );

    try {
      if (mode === "login") {
        await loginUser({ email, password });
        toast.success("Connexion réussie !", { id: toastId });
        navigate("/");
      } else if (mode === "register") {
        await registerUser({ name, email, password });
        toast.success("Compte créé avec succès !", { id: toastId });
        navigate("/login");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message, { id: toastId });
      } else {
        toast.error("Une erreur est survenue", { id: toastId });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen w-screen overflow-hidden bg-gradient-to-br from-black via-[#0B0F14] to-[#1A2428] text-white p-8">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black via-transparent to-black opacity-40"></div>

      <Card className="relative z-10 w-full max-w-sm border shadow-lg bg-neutral-900 border-neutral-800">
        <CardHeader>
          <CardTitle className="text-white">
            {mode === "register" ? "Inscrivez-vous" : "Connectez-vous"}
          </CardTitle>
          <CardDescription className="text-gray-400">
            {mode === "register"
              ? "Entrez votre nom, votre email et votre mot de passe"
              : "Entrez votre email et votre mot de passe"}
          </CardDescription>

          <CardAction>
            {mode === "login" ? (
              <Button
                className="text-white cursor-pointer"
                variant="link"
                onClick={() => navigate("/register")}
                disabled={loading}
              >
                S'inscrire
              </Button>
            ) : (
              <Button
                className="text-white cursor-pointer"
                variant="link"
                onClick={() => navigate("/login")}
                disabled={loading}
              >
                Se connecter
              </Button>
            )}
          </CardAction>
        </CardHeader>

        <form onSubmit={handleSubmit} noValidate>
          <CardContent className="flex flex-col gap-6">
            {mode === "register" && (
              <div className="grid gap-2">
                <Label htmlFor="name" className="text-gray-300">
                  Nom
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Nom"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  disabled={loading}
                  className="text-white placeholder-gray-500 bg-neutral-800 border-neutral-700"
                />
              </div>
            )}

            <div className="grid gap-2">
              <Label htmlFor="email" className="text-gray-300">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Email@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
                className="text-white placeholder-gray-500 bg-neutral-800 border-neutral-700"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password" className="text-gray-300">
                Mot de passe
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="•••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
                className="text-white placeholder-gray-500 bg-neutral-800 border-neutral-700"
              />
            </div>
          </CardContent>

          <CardFooter className="flex-col gap-2 mt-4">
            <Button
              type="submit"
              variant="outline"
              className="w-full cursor-pointer bg-white text-black font-medium rounded-xl transition-all duration-300 hover:bg-black hover:text-white border border-black/10 hover:border-black backdrop-blur-sm hover:shadow-[0_0_30px_rgba(0,0,0,0.3)]"
              disabled={loading}
            >
              {loading
                ? mode === "register"
                  ? "Création..."
                  : "Connexion..."
                : mode === "register"
                ? "S'inscrire"
                : "Se connecter"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
