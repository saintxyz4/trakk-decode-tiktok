import { motion } from "framer-motion";
import { Target, Search, MessageSquare, TrendingUp } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const features = [
  {
    num: "01",
    icon: Target,
    title: "Score de viralité",
    description:
      "On décrypte ce qui rend une vidéo addictive — rétention, rythme, accroche — et on vous donne un score clair sur 100.",
    accent: null,
  },
  {
    num: "02",
    icon: Search,
    title: "Exploration de niche",
    description:
      "Trouvez les formats et sujets qui performent dans votre secteur, avant que tout le monde les copie.",
    accent: null,
  },
  {
    num: "03",
    icon: MessageSquare,
    title: "Votre stratège personnel",
    description:
      "Posez vos questions en langage naturel. Obtenez des recommandations concrètes, pas des réponses floues.",
    accent: "→",
  },
  {
    num: "04",
    icon: TrendingUp,
    title: "Suivi des tendances",
    description:
      "Les trends TikTok durent 72h en moyenne. Repérez-les au bon moment — pas quand c'est déjà trop tard.",
    accent: null,
  },
];

export default function BentoFeaturesSection() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{
        backgroundColor: "hsl(var(--background))",
      }}
    >
      {/* Subtle noise texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
        }}
      />

      <div className="container max-w-4xl relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Ce que Trakk<span className="font-accent">.</span>{" "}
            <span className="font-accent glow-text-dark">fait</span> pour vous
          </h2>
          <p className="mt-4 text-muted-foreground max-w-md text-[15px] leading-relaxed">
            Pas de jargon. Pas de tableaux incompréhensibles.
            <br />
            Juste ce dont vous avez besoin pour progresser.
          </p>
        </motion.div>

        <div className="flex flex-col">
          {features.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: "easeOut",
              }}
            >
              {i > 0 && (
                <div
                  className="w-full h-px"
                  style={{ backgroundColor: "rgba(0,0,0,0.06)" }}
                />
              )}

              <div
                className="group flex items-start gap-6 md:gap-10 transition-colors duration-300 rounded-xl cursor-default"
                style={{
                  padding:
                    i % 2 === 0
                      ? "28px 20px 28px 20px"
                      : "32px 24px 32px 24px",
                  backgroundColor:
                    i % 2 === 1
                      ? "hsla(var(--primary) / 0.02)"
                      : "transparent",
                }}
              >
                {/* Large number */}
                <span
                  className="text-4xl md:text-5xl font-bold leading-none select-none flex-shrink-0 transition-colors duration-300"
                  style={{
                    color: "hsla(var(--primary) / 0.15)",
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  {feat.num}
                </span>

                {/* Icon + text */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <feat.icon
                      className="w-5 h-5 flex-shrink-0 transition-colors duration-300"
                      style={{
                        color: "hsl(var(--primary))",
                        strokeWidth: 1.5,
                      }}
                    />
                    <h3 className="text-base md:text-lg font-semibold tracking-tight text-foreground">
                      {feat.title}
                      {feat.accent && (
                        <span className="font-accent text-primary ml-2 text-sm">
                          {feat.accent}
                        </span>
                      )}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
                    {feat.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Small serif accent at bottom */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-center font-accent text-sm tracking-wide"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          * et ce n'est que le début.
        </motion.p>
      </div>
    </section>
  );
}
