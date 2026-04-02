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
  },
];

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let start: number | null = null;
            const duration = 1500;
            const animate = (ts: number) => {
              if (!start) start = ts;
              const elapsed = ts - start;
              const p = Math.min(elapsed / duration, 1);
              const eased = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
              setProgress(eased);
              if (p < 1) requestAnimationFrame(animate);
            };
            requestAnimationFrame(animate);
            observer.unobserve(section);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const pointThresholds = [0, 0.33, 0.66, 1];

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
                  <div
                    className="w-5 h-5 rounded-full border-2 z-10 transition-all duration-500 flex-shrink-0"
                    style={{
                      borderColor: "hsl(var(--primary))",
                      backgroundColor: active ? "hsl(var(--primary))" : "hsl(var(--background))",
                      transform: active ? "scale(1.2)" : "scale(1)",
                      boxShadow: active ? "0 0 12px hsla(244, 95%, 57%, 0.5)" : "none",
                    }}
                  />
                  <h3
                    className="mt-4 text-sm font-bold text-center transition-colors duration-500"
                    style={{ color: active ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))" }}
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
                  <div
                    className="w-5 h-5 rounded-full border-2 z-10 flex-shrink-0 -ml-8 transition-all duration-500"
                    style={{
                      borderColor: "hsl(var(--primary))",
                      backgroundColor: active ? "hsl(var(--primary))" : "hsl(var(--background))",
                      transform: active ? "scale(1.2)" : "scale(1)",
                      boxShadow: active ? "0 0 12px hsla(244, 95%, 57%, 0.5)" : "none",
                    }}
                  />
                  <div>
                    <h3
                      className="text-sm font-bold transition-colors duration-500"
                      style={{ color: active ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))" }}
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
