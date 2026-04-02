import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, ArrowLeft } from "lucide-react";

const tiers = [
  {
    name: "Créateur",
    price: "20€",
    period: "/mois",
    features: ["20 analyses/mois", "1 niche complète/jour", "Historique des analyses", "Support prioritaire"],
  },
  {
    name: "Studio",
    price: "59€",
    period: "/mois",
    features: ["Analyses illimitées", "2 niches/jour", "Chatbot IA — 100 msg/mois", "Tout inclus", "Support dédié"],
    highlighted: true,
  },
];

export default function Upgrade() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="container py-6">
        <Button variant="ghost" size="sm" asChild>
          <Link to="/dashboard">
            <ArrowLeft className="h-4 w-4 mr-1" /> Retour
          </Link>
        </Button>
      </div>

      <div className="flex-1 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full text-center">
          <h1 className="text-3xl font-bold mb-2">
            Débloquez tout le potentiel de <span className="font-accent">Trakk</span>
          </h1>
          <p className="text-muted-foreground mb-10">
            Passez à un plan supérieur pour accéder à toutes les fonctionnalités.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {tiers.map((tier) => (
              <div key={tier.name} className={`glass-card p-8 text-left ${tier.highlighted ? "ring-2 ring-primary" : ""}`}>
                <h3 className="text-lg font-semibold">{tier.name}</h3>
                <div className="mt-3 mb-6">
                  <span className="text-3xl font-bold">{tier.price}</span>
                  <span className="text-muted-foreground text-sm">{tier.period}</span>
                </div>
                <ul className="space-y-2 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant={tier.highlighted ? "default" : "outline"}>
                  S'abonner à {tier.name}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
