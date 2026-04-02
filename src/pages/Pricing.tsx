import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.5 } }),
};

const tiers = [
  {
    name: "Free",
    price: "0€",
    period: "",
    features: ["1 analyse offerte", "Niche du jour (aperçu flouté)", "Accès limité aux features"],
    cta: "Commencer",
    highlighted: false,
  },
  {
    name: "Créateur",
    price: "20€",
    period: "/mois",
    features: ["20 analyses/mois", "1 niche complète/jour", "Historique des analyses", "Support prioritaire"],
    cta: "S'abonner",
    highlighted: true,
  },
  {
    name: "Studio",
    price: "59€",
    period: "/mois",
    features: ["Analyses illimitées", "2 niches/jour", "Chatbot IA — 100 msg/mois", "Accès à toutes les features", "Support dédié"],
    cta: "S'abonner",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-thin border-border">
        <div className="container flex items-center justify-between h-14">
          <Link to="/" className="text-xl font-semibold tracking-tight">
            Trakk<span className="font-accent text-lg">.</span>
          </Link>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/login">Connexion</Link>
            </Button>
            <Button size="sm" asChild>
              <Link to="/signup">S'inscrire</Link>
            </Button>
          </div>
        </div>
      </nav>

      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold">
              Choisissez votre <span className="font-accent">plan</span>
            </h1>
            <p className="mt-4 text-muted-foreground">Pas d'engagement. Annulez à tout moment.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className={`glass-card p-8 flex flex-col ${tier.highlighted ? "ring-2 ring-primary shadow-lg relative" : ""}`}
              >
                {tier.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                    Populaire
                  </span>
                )}
                <h3 className="text-lg font-semibold">{tier.name}</h3>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-muted-foreground text-sm">{tier.period}</span>
                </div>
                <ul className="space-y-3 flex-1 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button variant={tier.highlighted ? "default" : "outline"} className="w-full" asChild>
                  <Link to="/signup">{tier.cta}</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
