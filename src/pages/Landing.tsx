import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Search, MessageSquare, Check } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.5 } }),
};

const features = [
  {
    icon: Search,
    title: "Diagnostic vidéo",
    description: "Uploadez une capture d'écran de vos stats TikTok et obtenez un diagnostic détaillé de ce qui freine votre vidéo.",
  },
  {
    icon: Zap,
    title: "Inspiration IA",
    description: "Collez l'URL d'une vidéo virale et recevez un plan d'action personnalisé pour reproduire son succès.",
  },
  {
    icon: MessageSquare,
    title: "Coach TikTok",
    description: "Un chatbot expert qui répond à toutes vos questions sur l'algorithme, la stratégie et le contenu.",
  },
];

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
    features: ["20 analyses/mois", "1 niche complète/jour", "Historique complet", "Support prioritaire"],
    cta: "Débloquer Créateur",
    highlighted: true,
  },
  {
    name: "Studio",
    price: "59€",
    period: "/mois",
    features: ["Analyses illimitées", "2 niches/jour", "Chatbot IA (100 msg/mois)", "Tout inclus"],
    cta: "Passer à Studio",
    highlighted: false,
  },
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-md border-b border-thin border-border">
        <div className="container flex items-center justify-between h-14">
          <Link to="/" className="text-xl font-semibold tracking-tight">
            Trakk<span className="font-accent text-lg">.</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
          </div>
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

      {/* Hero */}
      <section className="hero-gradient pt-32 pb-24">
        <div className="container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold text-primary-foreground max-w-3xl mx-auto leading-tight"
          >
            L'algorithme TikTok a des{" "}
            <span className="font-accent text-4xl md:text-6xl" style={{ color: "hsl(244, 95%, 75%)" }}>secrets</span>.
            <br />Trakk vous les révèle.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 text-lg text-primary-foreground/70 max-w-xl mx-auto"
          >
            Analysez vos vidéos, comprenez pourquoi elles ne percent pas, et obtenez un plan d'action concret grâce à l'IA.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" variant="outline" className="bg-primary-foreground text-foreground border-0 hover:bg-primary-foreground/90" asChild>
              <Link to="/signup">
                Analyser ma première vidéo <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Trois outils, un seul <span className="font-accent">objectif</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
              Comprenez l'algorithme, optimisez votre contenu, et faites décoller votre audience.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="glass-card p-8 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <f.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
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

      {/* Footer */}
      <footer className="py-12 border-t border-thin border-border">
        <div className="container text-center text-sm text-muted-foreground">
          © 2026 Trakk. Tous droits réservés.
        </div>
      </footer>
    </div>
  );
}
