import { Link } from "react-router-dom";
import { Search, Zap, MessageSquare, ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const quickActions = [
  { to: "/dashboard/diagnostic", icon: Search, title: "Diagnostic vidéo", desc: "Analysez pourquoi votre vidéo ne performe pas" },
  { to: "/dashboard/inspiration", icon: Zap, title: "Inspiration IA", desc: "Obtenez un plan d'action depuis une vidéo virale" },
  { to: "/dashboard/chat", icon: MessageSquare, title: "Coach TikTok", desc: "Posez vos questions à un expert IA" },
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Tableau de bord</h1>
        <p className="text-muted-foreground mt-1">Bienvenue sur Trakk. Choisissez un outil pour commencer.</p>
      </div>

      {/* Niche du jour */}
      <div className="glass-card p-6">
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp className="h-5 w-5 text-primary" />
          <h2 className="font-semibold">Niche du jour</h2>
          <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">Aperçu</span>
        </div>
        <div className="relative">
          <div className="blur-sm select-none pointer-events-none">
            <p className="text-sm text-muted-foreground">
              🔥 <strong>Micro-tutos cuisine healthy</strong> — Engagement moyen : 8.2% — Meilleur format : 15-30s — 
              Hooks recommandés : "Vous faites cette erreur tous les jours", "3 ingrédients, 1 minute"...
            </p>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Button variant="outline" size="sm" asChild>
              <Link to="/upgrade">Débloquer la niche complète <ArrowRight className="h-3 w-3 ml-1" /></Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Quick actions */}
      <div className="grid sm:grid-cols-3 gap-4">
        {quickActions.map((a) => (
          <Link key={a.to} to={a.to} className="glass-card p-6 hover:shadow-md transition-shadow group">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <a.icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">{a.title}</h3>
            <p className="text-sm text-muted-foreground">{a.desc}</p>
          </Link>
        ))}
      </div>

      {/* Stats */}
      <div className="glass-card p-6">
        <h2 className="font-semibold mb-4">Vos analyses</h2>
        <div className="grid grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold">0</div>
            <div className="text-xs text-muted-foreground mt-1">Analyses ce mois</div>
          </div>
          <div>
            <div className="text-3xl font-bold">1</div>
            <div className="text-xs text-muted-foreground mt-1">Analyses restantes</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">Free</div>
            <div className="text-xs text-muted-foreground mt-1">Plan actuel</div>
          </div>
        </div>
      </div>
    </div>
  );
}
