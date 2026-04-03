import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import AnimatedBlobs from "./AnimatedBlobs";

export default function HeroSection() {
  const [url, setUrl] = useState("");

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
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.8 }}
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
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.8 }}
          />
        </svg>
      </motion.div>

      {/* Bottom fade overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 z-[2] pointer-events-none"
        style={{
          height: '70%',
          background: `linear-gradient(to bottom,
            transparent 0%,
            hsla(240, 60%, 25%, 0.03) 30%,
            hsla(240, 60%, 25%, 0.08) 42%,
            hsla(240, 60%, 25%, 0.18) 52%,
            hsla(240, 60%, 25%, 0.35) 62%,
            hsla(240, 60%, 25%, 0.58) 72%,
            hsla(240, 60%, 25%, 0.80) 82%,
            hsla(240, 60%, 25%, 0.95) 91%,
            hsl(240, 60%, 25%) 100%
          )`,
        }}
      />

      <div className="container relative z-10 max-w-3xl mx-auto px-6">
        {/* Headline */}
        <motion.p
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground text-center leading-tight"
        >
          Vos vidéos TikTok méritent mieux que des stats{" "}
          <span style={{ filter: "blur(1.5px)", WebkitFilter: "blur(1.5px)" }} className="inline-block">floues</span>
        </motion.p>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-6 text-base md:text-lg text-primary-foreground/70 text-center max-w-xl mx-auto leading-relaxed"
        >
          <span className="font-accent-light super-glow">Trakk.</span>{" "}
          analyse chaque vidéo en profondeur et te donne des recommandations concrètes pour scaler ton audience.
        </motion.p>

        {/* URL Input — the most important element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
          className="mt-10 max-w-2xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row gap-3 p-2 rounded-2xl"
            style={{
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://www.tiktok.com/@..."
              className="flex-1 bg-transparent text-primary-foreground placeholder:text-primary-foreground/40 px-5 py-4 text-base outline-none rounded-xl"
            />
            <Link
              to="/signup"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-medium text-sm whitespace-nowrap transition-all duration-200"
              style={{
                background: 'hsl(244, 95%, 57%)',
                color: '#fff',
                boxShadow: '0 0 20px hsla(244, 95%, 57%, 0.4)',
              }}
            >
              Analyser gratuitement →
            </Link>
          </div>

          {/* Reassurance */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="mt-4 text-center text-xs text-primary-foreground/50 flex items-center justify-center gap-4 flex-wrap"
          >
            <span>✓ Gratuit</span>
            <span>✓ Sans compte</span>
            <span>✓ En moins de 10 secondes</span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
