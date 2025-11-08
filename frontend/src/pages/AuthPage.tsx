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
    <div className="flex justify-center items-center h-screen">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>
            {mode === "register" ? "Inscrivez-vous" : "Connectez-vous"}
          </CardTitle>
          <CardDescription>
            {mode === "register"
              ? "Entrez votre nom, votre email et votre mot de passe"
              : "Entrez votre email et votre mot de passe"}
          </CardDescription>
          <CardAction>
            {mode === "login" ? (
              <Button
                className="cursor-pointer"
                variant="link"
                onClick={() => navigate("/register")}
                disabled={loading}
              >
                S'inscrire
              </Button>
            ) : (
              <Button
                className="cursor-pointer"
                variant="link"
                onClick={() => navigate("/login")}
                disabled={loading}
              >
                Se connecter
              </Button>
            )}
          </CardAction>
        </CardHeader>

        <form onSubmit={handleSubmit}>
          <CardContent className="flex flex-col gap-6">
            {mode === "register" && (
              <div className="grid gap-2">
                <Label htmlFor="name">Nom</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Nom"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  disabled={loading}
                />
              </div>
            )}

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Email@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password">Mot de passe</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
              />
            </div>
          </CardContent>

          <CardFooter className="flex-col gap-2 mt-4">
            <Button
              type="submit"
              variant="outline"
              className="w-full cursor-pointer transition-colors duration-500 ease-in-out hover:bg-black hover:text-white"
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
