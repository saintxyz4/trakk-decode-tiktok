import { motion } from "framer-motion";

const features = [
  {
    num: "01",
    title: "Diagnostic vidéo",
    description:
      "Uploadez une capture d'écran de vos stats TikTok et obtenez un diagnostic détaillé de ce qui freine votre vidéo.",
  },
  {
    num: "02",
    title: "Inspiration IA",
    description:
      "Collez l'URL d'une vidéo virale et recevez un plan d'action personnalisé pour reproduire son succès.",
  },
  {
    num: "03",
    title: "Coach TikTok",
    description:
      "Un chatbot expert qui répond à toutes vos questions sur l'algorithme, la stratégie et le contenu.",
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
            <span className="font-accent">objectif</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Comprenez l'algorithme, optimisez votre contenu, et faites décoller
            votre audience.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={f.num}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className={`relative py-10 ${i < features.length - 1 ? "border-b border-border" : ""}`}
            >
              <span className="absolute -left-2 top-6 text-[80px] font-light leading-none text-[hsl(244_60%_90%)] select-none pointer-events-none hidden md:block">
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
