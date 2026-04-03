import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedBlobs from "./AnimatedBlobs";

export default function HeroSection() {
  return (
    <section className="relative hero-gradient pt-32 pb-28 overflow-hidden">
      <AnimatedBlobs />

      {/* Electricity curve animation */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center z-[1] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <svg
          className="absolute w-[500px] md:w-[650px] lg:w-[750px] h-[500px] md:h-[650px] lg:h-[750px]"
          viewBox="0 0 1024 1024"
          fill="none"
        >
          <defs>
            <linearGradient id="elec-grad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(244, 95%, 57%)" stopOpacity="0" />
              <stop offset="40%" stopColor="hsl(244, 95%, 75%)" stopOpacity="1" />
              <stop offset="60%" stopColor="hsl(0, 0%, 100%)" stopOpacity="1" />
              <stop offset="100%" stopColor="hsl(244, 95%, 57%)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path
            d="M200,780 L380,620 L460,700 L620,380 L720,300"
            stroke="url(#elec-grad)"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 0.8,
            }}
          />
          <motion.path
            d="M200,780 L380,620 L460,700 L620,380 L720,300"
            stroke="hsl(244, 95%, 75%)"
            strokeWidth="22"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            filter="blur(10px)"
            opacity={0.45}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 0.8,
            }}
          />
        </svg>
      </motion.div>

      {/* Bottom fade overlay for seamless transition */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 z-[2] pointer-events-none"
        style={{
          background: `linear-gradient(to bottom,
            transparent 0%,
            hsla(240, 60%, 25%, 0.05) 20%,
            hsla(240, 60%, 25%, 0.15) 40%,
            hsla(240, 60%, 25%, 0.35) 55%,
            hsla(240, 60%, 25%, 0.6) 70%,
            hsla(240, 60%, 25%, 0.85) 85%,
            hsl(240, 60%, 25%) 100%
          )`,
        }}
      />

      <div className="container relative z-10 max-w-3xl mx-auto px-6">
        {/* Line 1 — staggered word entrance */}
        <motion.p
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground text-center leading-tight"
        >
          L'algorithme TikTok a des secrets.
        </motion.p>

        {/* Spacer */}
        <div className="h-10 md:h-16" />

        {/* Line 2 */}
        <motion.p
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground text-center leading-tight"
        >
          <span className="font-accent-light super-glow">Trakk.</span>{" "}
          vous les révèle.
        </motion.p>

        {/* CTA — spring entrance */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 1.4, type: "spring", stiffness: 200, damping: 20 }}
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
