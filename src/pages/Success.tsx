import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function Success() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="text-center max-w-sm">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-2xl font-bold mb-2">Paiement confirmé !</h1>
        <p className="text-muted-foreground mb-8">
          Votre abonnement est maintenant actif. Profitez de toutes les fonctionnalités de Trakk.
        </p>
        <Button asChild>
          <Link to="/dashboard">Accéder au tableau de bord</Link>
        </Button>
      </div>
    </div>
  );
}
