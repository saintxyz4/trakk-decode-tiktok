import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Lock, ArrowRight } from "lucide-react";

export default function Historique() {
  // Placeholder — requires Créateur+ tier
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Historique</h1>
        <p className="text-muted-foreground mt-1">Retrouvez toutes vos analyses passées.</p>
      </div>

      <div className="glass-card p-12 text-center">
        <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
          <Lock className="h-6 w-6 text-muted-foreground" />
        </div>
        <h2 className="text-lg font-semibold mb-2">Fonctionnalité Créateur+</h2>
        <p className="text-sm text-muted-foreground mb-6 max-w-sm mx-auto">
          Passez au plan Créateur ou Studio pour accéder à l'historique complet de vos analyses.
        </p>
        <Button asChild>
          <Link to="/upgrade">
            Débloquer l'historique <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
