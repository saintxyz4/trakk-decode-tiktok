import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function FinalCTASection() {
  return (
    <section className="py-28 relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, hsl(0, 0%, 4%) 0%, hsl(244, 40%, 12%) 50%, hsl(244, 60%, 18%) 100%)',
    }}>
      {/* Subtle glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at center, hsla(244, 95%, 57%, 0.12) 0%, transparent 60%)',
      }} />

      <div className="container relative z-10 max-w-3xl mx-auto text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-bold leading-tight"
          style={{ color: '#fff' }}
        >
          Analyse ta première vidéo TikTok —{" "}
          <span className="font-accent-light super-glow">gratuitement.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 text-lg"
          style={{ color: 'rgba(255,255,255,0.6)' }}
        >
          Colle un lien, notre IA fait le reste. Aucune carte bancaire requise.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 20 }}
          className="mt-10"
        >
          <Link
            to="/signup"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl font-medium text-base transition-all duration-300"
            style={{
              background: 'hsl(244, 95%, 57%)',
              color: '#fff',
              boxShadow: '0 0 30px hsla(244, 95%, 57%, 0.4), 0 0 60px hsla(244, 95%, 57%, 0.15)',
            }}
          >
            Lancer mon analyse gratuite →
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
