import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import PricingSection from "@/components/landing/PricingSection";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background scroll-smooth">
      {/* Nav */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-md border-b border-thin border-border"
      >
        <div className="container flex items-center justify-between h-14">
        <Link to="/" className="text-xl font-semibold tracking-tight">
            Trakk<span className="font-accent text-lg super-glow-dark">.</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors">Fonctionnalités</a>
            <a href="#pricing" className="hover:text-foreground transition-colors">Tarifs</a>
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
      </motion.nav>

      <HeroSection />
      <FeaturesSection />
      <PricingSection />

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="py-12 border-t border-thin border-border"
      >
        <div className="container text-center text-sm text-muted-foreground">
          © 2026 Trakk. Tous droits réservés.
        </div>
      </motion.footer>
    </div>
  );
}
