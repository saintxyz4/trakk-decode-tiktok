import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Lock, ArrowRight } from "lucide-react";

export default function Chat() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Coach TikTok IA</h1>
        <p className="text-muted-foreground mt-1">Posez vos questions à un expert de l'algorithme TikTok.</p>
      </div>

      <div className="glass-card p-12 text-center">
        <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
          <Lock className="h-6 w-6 text-muted-foreground" />
        </div>
        <h2 className="text-lg font-semibold mb-2">Fonctionnalité Studio</h2>
        <p className="text-sm text-muted-foreground mb-6 max-w-sm mx-auto">
          Passez au plan Studio pour accéder au chatbot IA expert TikTok (100 messages/mois).
        </p>
        <Button asChild>
          <Link to="/upgrade">
            Débloquer le Coach IA <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
