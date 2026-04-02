import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function DashboardSettings() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setEmail(data.user?.email || "");
    });
  }, []);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Paramètres</h1>
        <p className="text-muted-foreground mt-1">Gérez votre profil et votre abonnement.</p>
      </div>

      <div className="glass-card p-6 space-y-4">
        <h2 className="font-semibold">Profil</h2>
        <div className="text-sm">
          <span className="text-muted-foreground">Email : </span>
          <span>{email}</span>
        </div>
      </div>

      <div className="glass-card p-6 space-y-4">
        <h2 className="font-semibold">Abonnement</h2>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-medium">Plan Free</div>
            <div className="text-xs text-muted-foreground">1 analyse offerte</div>
          </div>
          <Button variant="outline" size="sm" asChild>
            <Link to="/upgrade">Changer de plan</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
