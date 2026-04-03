import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedBlobs from "./AnimatedBlobs";
import trakkGraph from "@/assets/trakk-graph.png";

export default function HeroSection() {
  return (
    <section className="relative hero-gradient pt-32 pb-28 overflow-hidden">
      <AnimatedBlobs />

      {/* Electricity curve animation */}
      <div className="absolute inset-0 flex items-center justify-center z-[1] pointer-events-none">
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
          {/* Main path tracing the graph shape */}
          {/* Main thick path */}
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
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 0.3,
            }}
          />
          {/* Glow layer */}
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
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 0.3,
            }}
          />
          {/* Dot at the tip — synced with path */}
          <motion.circle
            cx="720"
            cy="300"
            r="14"
            fill="hsl(244, 95%, 75%)"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0, 1, 1, 0] }}
            transition={{
              duration: 1.9,
              repeat: Infinity,
              times: [0, 0.42, 0.5, 0.84, 1],
            }}
          />
          <motion.circle
            cx="720"
            cy="300"
            r="28"
            fill="hsl(244, 95%, 75%)"
            filter="blur(14px)"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0, 0.6, 0.6, 0] }}
            transition={{
              duration: 1.9,
              repeat: Infinity,
              times: [0, 0.42, 0.5, 0.84, 1],
            }}
          />
        </svg>
      </div>

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

        {/* Spacer */}
        <div className="h-10 md:h-16" />

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
