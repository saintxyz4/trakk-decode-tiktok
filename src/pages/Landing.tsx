import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import HeroSection from "@/components/landing/HeroSection";
import StatsSection from "@/components/landing/StatsSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import BentoFeaturesSection from "@/components/landing/BentoFeaturesSection";
import ReportOverviewSection from "@/components/landing/ReportOverviewSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import FinalCTASection from "@/components/landing/FinalCTASection";

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

      <div id="hero-input">
        <HeroSection />
      </div>

      {/* Smooth gradient transition hero → content */}
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

      {/* Trust bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <StatsSection />
      </motion.div>

      {/* How it works */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <HowItWorksSection />
      </motion.div>

      {/* Bento features */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <BentoFeaturesSection />
      </motion.div>

      {/* Gradient + Report + Gradient: no translateY to avoid white flash */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="h-48" style={{
          background: `linear-gradient(to bottom,
            hsl(40, 7%, 96%) 0%,
            hsl(40, 6%, 93%) 10%,
            hsl(40, 5%, 88%) 20%,
            hsl(35, 4%, 78%) 30%,
            hsl(30, 3%, 62%) 40%,
            hsl(20, 2%, 42%) 52%,
            hsl(10, 1%, 26%) 64%,
            hsl(0, 0%, 14%) 76%,
            hsl(0, 0%, 8%) 88%,
            hsl(0, 0%, 4%) 100%
          )`
        }} />
        <ReportOverviewSection />
        <div className="h-56" style={{
          background: `linear-gradient(to bottom,
            hsl(0, 0%, 4%) 0%,
            hsl(0, 0%, 6%) 8%,
            hsl(0, 0%, 10%) 18%,
            hsl(0, 0%, 16%) 28%,
            hsl(0, 0%, 24%) 38%,
            hsl(15, 2%, 42%) 50%,
            hsl(25, 3%, 60%) 60%,
            hsl(32, 4%, 75%) 70%,
            hsl(37, 5%, 85%) 80%,
            hsl(40, 6%, 91%) 88%,
            hsl(40, 7%, 94%) 94%,
            hsl(40, 7%, 96%) 100%
          )`
        }} />
      </motion.div>

      {/* Testimonials */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <TestimonialsSection />
      </motion.div>

      {/* Gradient + Final CTA: no translateY */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="h-56" style={{
          background: `linear-gradient(to bottom,
            hsl(40, 7%, 96%) 0%,
            hsl(40, 6%, 93%) 8%,
            hsl(40, 5%, 88%) 16%,
            hsl(35, 4%, 78%) 24%,
            hsl(30, 3%, 65%) 32%,
            hsl(270, 6%, 48%) 40%,
            hsl(250, 12%, 34%) 50%,
            hsl(244, 22%, 24%) 60%,
            hsl(244, 32%, 18%) 70%,
            hsl(244, 38%, 14%) 80%,
            hsl(244, 42%, 12%) 90%,
            hsl(244, 40%, 12%) 100%
          )`
        }} />
        <FinalCTASection />
      </motion.div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-12 border-t border-thin border-border"
      >
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">
            Trakk<span className="font-accent text-sm super-glow-dark">.</span>
          </span>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-foreground transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-foreground transition-colors">Contact</a>
          </div>
          <span>© 2026 Trakk. Tous droits réservés.</span>
        </div>
      </motion.footer>
    </div>
  );
}
