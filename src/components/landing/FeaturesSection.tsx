import { motion } from "framer-motion";

const features = [
  {
    num: "01",
    title: "Diagnostic intelligent",
    description:
      "Importez une capture d'écran de vos statistiques TikTok et notre IA analyse en profondeur chaque métrique pour identifier précisément ce qui freine la portée de votre contenu.",
  },
  {
    num: "02",
    title: "Reverse-engineering viral",
    description:
      "Soumettez l'URL d'une vidéo virale et recevez un plan d'action sur-mesure : structure narrative, hooks, timing de publication — tout ce qu'il faut pour reproduire le succès.",
  },
  {
    num: "03",
    title: "Coach IA dédié",
    description:
      "Un assistant expert disponible 24/7 qui maîtrise l'algorithme TikTok, les tendances et les stratégies de croissance. Posez vos questions, obtenez des réponses exploitables.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Trois outils, un seul{" "}
            <span className="font-accent glow-text-dark">objectif</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Décodez l'algorithme, optimisez votre stratégie de contenu et accélérez la croissance de votre audience.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={f.num}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className={`feature-row relative py-10 ${i < features.length - 1 ? "border-b border-border" : ""}`}
            >
              <span className="feature-num absolute -left-2 top-6 text-[80px] font-light leading-none select-none pointer-events-none hidden md:block">
                {f.num}
              </span>
              <div className="md:pl-28">
                <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed max-w-md">
                  {f.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
