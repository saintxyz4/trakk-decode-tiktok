import { motion } from "framer-motion";
import { Target, Search, MessageSquare, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Score de viralité",
    description: "Chaque vidéo reçoit un score prédictif basé sur les patterns de l'algorithme TikTok.",
    span: "md:col-span-2",
  },
  {
    icon: Search,
    title: "Exploration de niche",
    description: "Identifie les niches à fort potentiel et les formats qui performent dans ton secteur.",
    span: "",
  },
  {
    icon: MessageSquare,
    title: "Chatbot IA",
    description: "Un coach expert disponible 24/7 pour répondre à tes questions stratégiques.",
    span: "",
  },
  {
    icon: TrendingUp,
    title: "Suivi des tendances",
    description: "Repère les trends émergentes avant qu'elles n'explosent et positionne-toi en premier.",
    span: "md:col-span-2",
  },
];

export default function BentoFeaturesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Tout ce qu'il faut pour{" "}
            <span className="font-accent glow-text-dark">percer</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Des outils pensés pour les créateurs qui veulent comprendre et maîtriser l'algorithme.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {features.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6, boxShadow: "0 20px 40px -12px hsla(244, 95%, 57%, 0.15)" }}
              className={`${feat.span} rounded-2xl border border-border bg-card p-8 transition-shadow duration-300 group cursor-default`}
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feat.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">{feat.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
