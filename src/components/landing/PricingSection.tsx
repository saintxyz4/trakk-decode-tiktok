import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

const tiers = [
  {
    name: "Free",
    price: "0€",
    period: "",
    features: ["1 analyse offerte", "Niche du jour (aperçu)", "Accès limité"],
    cta: "Commencer gratuitement",
    highlighted: false,
  },
  {
    name: "Créateur",
    price: "20€",
    period: "/mois",
    features: [
      "20 analyses/mois",
      "1 niche complète/jour",
      "Historique complet",
      "Support prioritaire",
    ],
    cta: "Débloquer Créateur",
    highlighted: true,
  },
  {
    name: "Studio",
    price: "59€",
    period: "/mois",
    features: [
      "Analyses illimitées",
      "2 niches/jour",
      "Chatbot IA (100 msg/mois)",
      "Tout inclus",
    ],
    cta: "Passer à Studio",
    highlighted: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-secondary/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Un plan pour chaque <span className="font-accent">créateur</span>
          </h2>
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
                <span className="text-muted-foreground text-sm">
                  {tier.period}
                </span>
              </div>
              <ul className="space-y-3 flex-1 mb-8">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={tier.highlighted ? "default" : "outline"}
                className="w-full"
                asChild
              >
                <Link to="/signup">{tier.cta}</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
