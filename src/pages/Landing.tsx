import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import StatsSection from "@/components/landing/StatsSection";
import DemoSection from "@/components/landing/DemoSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import PricingSection from "@/components/landing/PricingSection";
import FAQSection from "@/components/landing/FAQSection";

const navItems = [
  { label: "Fonctionnalités", href: "#features" },
  { label: "Tarifs", href: "#pricing" },
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-background" style={{ scrollBehavior: "smooth" }}>
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
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
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
            <div className="hidden md:block w-px h-5 bg-border" />
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
        </div>
      </motion.nav>

      <HeroSection />

      {/* Smooth gradient transition hero → features */}
      <div
        className="h-72"
        style={{
          background: `linear-gradient(to bottom,
            hsl(240, 60%, 25%) 0%,
            hsla(240, 58%, 26%, 0.97) 8%,
            hsla(240, 52%, 28%, 0.90) 16%,
            hsla(240, 45%, 32%, 0.78) 26%,
            hsla(240, 35%, 38%, 0.62) 36%,
            hsla(240, 25%, 48%, 0.45) 46%,
            hsla(240, 15%, 60%, 0.30) 56%,
            hsla(40, 8%, 75%, 0.18) 66%,
            hsla(40, 7%, 85%, 0.10) 76%,
            hsla(40, 7%, 92%, 0.04) 86%,
            hsl(40, 7%, 96%) 100%
          )`,
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <FeaturesSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <StatsSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <DemoSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <TestimonialsSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <PricingSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <FAQSection />
      </motion.div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-12 border-t border-thin border-border"
      >
        <div className="container text-center text-sm text-muted-foreground">
          © 2026 Trakk. Tous droits réservés.
        </div>
      </motion.footer>
    </div>
  );
}
