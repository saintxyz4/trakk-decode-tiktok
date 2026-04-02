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

        {/* Treasure map arrow pointing to Trakk */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="flex justify-end pr-[15%] md:pr-[18%] my-2"
        >
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
          >
            <motion.path
              d="M10 8 C25 12, 35 5, 45 15 C55 25, 30 35, 50 40 C70 45, 55 55, 65 60 M58 52 L65 62 L54 60"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, delay: 0.6, ease: "easeInOut" }}
            />
            {/* Small X mark */}
            <motion.g
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 1.8 }}
            >
              <line x1="68" y1="64" x2="76" y2="72" stroke="#FFD700" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="76" y1="64" x2="68" y2="72" stroke="#FFD700" strokeWidth="2.5" strokeLinecap="round" />
            </motion.g>
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
