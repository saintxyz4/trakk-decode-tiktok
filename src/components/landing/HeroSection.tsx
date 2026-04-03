import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedBlobs from "./AnimatedBlobs";

export default function HeroSection() {
  return (
    <section className="relative hero-gradient pt-32 pb-28 overflow-hidden">
      <AnimatedBlobs />
      <div className="container relative z-10 max-w-3xl mx-auto px-6">
        {/* Line 1 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground text-center leading-tight"
        >
          L'algorithme TikTok a des secrets.
        </motion.p>

        {/* Treasure map arrow from "secrets." down to "Trakk." */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="flex justify-center my-1"
        >
          <svg
            width="200"
            height="60"
            viewBox="0 0 200 60"
            fill="none"
          >
            <motion.path
              d="M160 2 C140 8, 120 5, 100 15 C80 25, 90 35, 60 40 C40 45, 50 50, 38 55"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, delay: 0.6, ease: "easeInOut" }}
            />
          </svg>
        </motion.div>

        {/* Line 2 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground text-center leading-tight"
        >
          <span className="font-accent-light super-glow">Trakk.</span>{" "}
          vous les révèle.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-10 flex justify-center"
        >
          <Link to="/signup" className="cta-btn">
            Commencer l'analyse gratuite
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
