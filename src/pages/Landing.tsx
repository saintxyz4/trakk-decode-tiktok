import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import PricingSection from "@/components/landing/PricingSection";

const navItems = [
  { label: "Fonctionnalités", href: "#features" },
  { label: "Tarifs", href: "#pricing" },
];

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
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Link to="/" className="text-xl font-semibold tracking-tight">
              Trakk<span className="font-accent text-lg super-glow-dark">.</span>
            </Link>
          </motion.div>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            {navItems.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="hover:text-foreground transition-colors"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.05 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
            >
              <Button variant="ghost" size="sm" asChild>
                <Link to="/login">Connexion</Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <Button size="sm" asChild>
                <Link to="/signup">S'inscrire</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      <HeroSection />

      {/* Smooth gradient transition hero → features */}
      <div
        className="h-40"
        style={{
          background: "linear-gradient(to bottom, hsl(240, 60%, 25%) 0%, hsl(240, 30%, 40%) 25%, hsl(240, 15%, 60%) 50%, hsl(40, 7%, 92%) 80%, hsl(40, 7%, 96%) 100%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <FeaturesSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <PricingSection />
      </motion.div>

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
