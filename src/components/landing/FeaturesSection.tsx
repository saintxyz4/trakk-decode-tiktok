import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Diagnostic intelligent",
    description:
      "Notre IA analyse en profondeur chaque métrique de vos vidéos pour identifier ce qui freine votre portée.",
  },
  {
    title: "Inspiration IA",
    description:
      "Soumettez une vidéo virale et recevez un plan d'action sur-mesure pour reproduire le succès.",
  },
  {
    title: "Coach TikTok",
    description:
      "Un assistant expert 24/7 qui maîtrise l'algorithme et les stratégies de croissance.",
  },
  {
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

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const sectionHeight = section.offsetHeight;
      const p = Math.min(
        Math.max(
          (window.scrollY - sectionTop + window.innerHeight * 0.6) / (sectionHeight * 0.8),
          0
        ),
        1
      );
      setProgress(p);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const pointThresholds = [0.2, 0.45, 0.7, 0.95];

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
          <svg
            className="absolute top-[10px] left-0 w-full"
            height="4"
            viewBox="0 0 1000 4"
            preserveAspectRatio="none"
          >
            <line
              x1="0" y1="2" x2="1000" y2="2"
              stroke="hsl(var(--border))"
              strokeWidth="2"
            />
            <line
              x1="0" y1="2" x2="1000" y2="2"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              strokeDasharray="1000"
              strokeDashoffset={1000 - progress * 1000}
              style={{ transition: "stroke-dashoffset 0.05s linear" }}
            />
          </svg>

          <div className="flex justify-between relative">
            {steps.map((step, i) => {
              const active = progress >= pointThresholds[i];
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
                        transform: `translateY(-14px)`,
                      }}
                    >
                      🏆
                    </div>
                  ) : (
                    <div
                      className="w-5 h-5 rounded-full border-2 z-10 transition-all duration-500 flex-shrink-0"
                      style={{
                        borderColor: "hsl(var(--primary))",
                        backgroundColor: active
                          ? "hsl(var(--primary))"
                          : "hsl(var(--background))",
                        transform: active ? "scale(1.2)" : "scale(1)",
                        boxShadow: active
                          ? "0 0 12px hsla(244, 95%, 57%, 0.5)"
                          : "none",
                      }}
                    />
                  )}
                  <h3
                    className="mt-4 text-sm font-bold text-center transition-colors duration-500"
                    style={{
                      color: active
                        ? "hsl(var(--foreground))"
                        : "hsl(var(--muted-foreground))",
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
        <div className="md:hidden relative pl-8 max-w-sm mx-auto">
          <svg
            className="absolute left-[9px] top-0 h-full"
            width="4"
            viewBox="0 0 4 400"
            preserveAspectRatio="none"
          >
            <line
              x1="2" y1="0" x2="2" y2="400"
              stroke="hsl(var(--border))"
              strokeWidth="2"
            />
            <line
              x1="2" y1="0" x2="2" y2="400"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              strokeDasharray="400"
              strokeDashoffset={400 - progress * 400}
              style={{ transition: "stroke-dashoffset 0.05s linear" }}
            />
          </svg>

          <div className="flex flex-col gap-12 relative">
            {steps.map((step, i) => {
              const active = progress >= pointThresholds[i];
              return (
                <div key={i} className="flex items-start gap-4">
                  {step.isTrophy ? (
                    <div
                      className="w-10 h-10 rounded-full z-10 flex items-center justify-center text-lg flex-shrink-0 -ml-8 transition-all duration-500"
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
                      className="w-5 h-5 rounded-full border-2 z-10 flex-shrink-0 -ml-8 transition-all duration-500"
                      style={{
                        borderColor: "hsl(var(--primary))",
                        backgroundColor: active
                          ? "hsl(var(--primary))"
                          : "hsl(var(--background))",
                        transform: active ? "scale(1.2)" : "scale(1)",
                        boxShadow: active
                          ? "0 0 12px hsla(244, 95%, 57%, 0.5)"
                          : "none",
                      }}
                    />
                  )}
                  <div>
                    <h3
                      className="text-sm font-bold transition-colors duration-500"
                      style={{
                        color: active
                          ? "hsl(var(--foreground))"
                          : "hsl(var(--muted-foreground))",
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
