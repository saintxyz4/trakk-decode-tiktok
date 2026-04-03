import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const steps = [
  {
    num: 1,
    title: "Diagnostic intelligent",
    description:
      "Notre IA analyse en profondeur chaque métrique de vos vidéos pour identifier ce qui freine votre portée.",
  },
  {
    num: 2,
    title: "Inspiration IA",
    description:
      "Soumettez une vidéo virale et recevez un plan d'action sur-mesure pour reproduire le succès.",
  },
  {
    num: 3,
    title: "Coach TikTok",
    description:
      "Un assistant expert 24/7 qui maîtrise l'algorithme et les stratégies de croissance.",
  },
  {
    num: 4,
    title: "Percer sur TikTok",
    description:
      "Transformez vos données en stratégies actionnables et accélérez votre audience.",
    isTrophy: true,
  },
];

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const windowH = window.innerHeight;
        // Line starts drawing when section top enters viewport
        const start = windowH;
        const end = -rect.height * 0.3;
        const raw = (start - rect.top) / (start - end);
        setProgress(Math.min(Math.max(raw, 0), 1));
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const totalPoints = steps.length;

  return (
    <section id="features" ref={sectionRef} className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Trois outils, un seul{" "}
            <span className="font-accent glow-text-dark">objectif</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Décodez l'algorithme, optimisez votre stratégie et accélérez la
            croissance de votre audience.
          </p>
        </motion.div>

        {/* Desktop timeline */}
        <div className="hidden md:block relative max-w-4xl mx-auto">
          {/* Line spans from center of first icon to center of last icon */}
          {/* Each icon is w-10 (40px) or w-12 (48px for trophy). Icons are in w-1/4 columns. */}
          {/* Center of first column = 12.5%, center of last column = 87.5% */}
          <svg
            className="absolute top-[18px] w-full"
            height="4"
            style={{ left: '12.5%', width: '75%' }}
            viewBox="0 0 1000 4"
            preserveAspectRatio="none"
          >
            <line x1="0" y1="2" x2="1000" y2="2" stroke="hsl(var(--border))" strokeWidth="2" />
            <line
              x1="0" y1="2" x2="1000" y2="2"
              stroke="url(#timeline-grad-h)"
              strokeWidth="2"
              strokeDasharray="1000"
              strokeDashoffset={1000 - progress * 1000}
              style={{ transition: "stroke-dashoffset 0.05s linear" }}
            />
            <defs>
              <linearGradient id="timeline-grad-h" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(244, 95%, 57%)" />
                <stop offset="100%" stopColor="hsl(244, 95%, 75%)" />
              </linearGradient>
            </defs>
          </svg>

          <div className="flex justify-between relative">
            {steps.map((step, i) => {
              const threshold = (i + 0.5) / totalPoints;
              const active = progress >= threshold;
              return (
                <div key={i} className="flex flex-col items-center w-1/4 px-2">
                  {step.isTrophy ? (
                    <div
                      className="w-12 h-12 rounded-full z-10 flex items-center justify-center text-xl flex-shrink-0 transition-all duration-500"
                      style={{
                        background: active ? "#FFD700" : "hsl(var(--background))",
                        border: active ? "none" : "2px solid hsl(var(--border))",
                        boxShadow: active
                          ? "0 0 20px #FFD700, 0 0 40px rgba(255,215,0,0.4), 0 0 80px rgba(255,215,0,0.2)"
                          : "none",
                        animation: active ? "pulse-gold 2s ease-in-out infinite" : "none",
                      }}
                    >
                      🏆
                    </div>
                  ) : (
                    <div
                      className="w-10 h-10 rounded-full z-10 flex items-center justify-center flex-shrink-0 transition-all duration-300"
                      style={{
                        borderWidth: "2px",
                        borderStyle: "solid",
                        borderColor: "hsl(var(--primary))",
                        backgroundColor: active
                          ? "hsl(var(--primary))"
                          : "hsla(var(--primary) / 0.15)",
                        transform: active ? "scale(1.1)" : "scale(1)",
                        boxShadow: active
                          ? "0 0 12px hsla(244, 95%, 57%, 0.5)"
                          : "none",
                      }}
                    >
                      <span className="text-sm font-semibold text-primary-foreground leading-none">
                        {step.num}
                      </span>
                    </div>
                  )}
                  <h3
                    className="mt-4 text-sm font-bold text-center transition-colors duration-500"
                    style={{
                      color: active ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="mt-2 text-xs text-center leading-relaxed transition-opacity duration-500"
                    style={{
                      color: "hsl(var(--muted-foreground))",
                      opacity: active ? 1 : 0.4,
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile timeline */}
        <div className="md:hidden relative mx-auto max-w-[480px]">
          {/* Vertical line: starts at center of first icon (20px from left, 20px from top) */}
          {/* ends at center of last icon. Icons are w-10 h-10, gap-12 (48px) between items */}
          <svg
            className="absolute left-[19px]"
            width="4"
            style={{ top: '20px', bottom: '20px', height: 'calc(100% - 40px)' }}
            viewBox="0 0 4 400"
            preserveAspectRatio="none"
          >
            <line x1="2" y1="0" x2="2" y2="400" stroke="hsl(var(--border))" strokeWidth="2" />
            <line
              x1="2" y1="0" x2="2" y2="400"
              stroke="url(#timeline-grad-v)"
              strokeWidth="2"
              strokeDasharray="400"
              strokeDashoffset={400 - progress * 400}
              style={{ transition: "stroke-dashoffset 0.05s linear" }}
            />
            <defs>
              <linearGradient id="timeline-grad-v" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="hsl(244, 95%, 57%)" />
                <stop offset="100%" stopColor="hsl(244, 95%, 75%)" />
              </linearGradient>
            </defs>
          </svg>

          <div className="flex flex-col gap-12 relative">
            {steps.map((step, i) => {
              const threshold = (i + 0.5) / totalPoints;
              const active = progress >= threshold;
              return (
                <div key={i} className="flex items-start gap-4">
                  {step.isTrophy ? (
                    <div
                      className="w-10 h-10 rounded-full z-10 flex items-center justify-center text-lg flex-shrink-0 transition-all duration-500"
                      style={{
                        background: active ? "#FFD700" : "hsl(var(--background))",
                        border: active ? "none" : "2px solid hsl(var(--border))",
                        boxShadow: active
                          ? "0 0 20px #FFD700, 0 0 40px rgba(255,215,0,0.4)"
                          : "none",
                        animation: active ? "pulse-gold 2s ease-in-out infinite" : "none",
                      }}
                    >
                      🏆
                    </div>
                  ) : (
                    <div
                      className="w-10 h-10 rounded-full z-10 flex items-center justify-center flex-shrink-0 transition-all duration-300"
                      style={{
                        borderWidth: "2px",
                        borderStyle: "solid",
                        borderColor: "hsl(var(--primary))",
                        backgroundColor: active
                          ? "hsl(var(--primary))"
                          : "hsla(var(--primary) / 0.15)",
                        boxShadow: active
                          ? "0 0 12px hsla(244, 95%, 57%, 0.5)"
                          : "none",
                      }}
                    >
                      <span className="text-sm font-semibold text-primary-foreground leading-none">
                        {step.num}
                      </span>
                    </div>
                  )}
                  <div className="pt-1">
                    <h3
                      className="text-sm font-bold transition-colors duration-500"
                      style={{
                        color: active ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))",
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="mt-1 text-xs leading-relaxed transition-opacity duration-500"
                      style={{
                        color: "hsl(var(--muted-foreground))",
                        opacity: active ? 1 : 0.4,
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
