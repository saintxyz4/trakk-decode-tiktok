import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Léa M.",
    handle: "@leacreates",
    text: "Depuis que j'utilise Trakk., mes vidéos atteignent en moyenne 4x plus de vues. Le diagnostic m'a ouvert les yeux sur mes erreurs.",
    avatar: "LM",
  },
  {
    name: "Hugo D.",
    handle: "@hugodaily",
    text: "L'outil d'inspiration est un game-changer. J'analyse les tendances et je sais exactement quoi publier. Indispensable.",
    avatar: "HD",
  },
  {
    name: "Sarah K.",
    handle: "@sarahkontent",
    text: "Le chatbot IA comprend vraiment l'algorithme TikTok. C'est comme avoir un coach personnel disponible 24/7.",
    avatar: "SK",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Ils utilisent{" "}
          <span className="font-accent glow-text-dark">Trakk.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-muted-foreground mb-16 max-w-lg mx-auto"
        >
          Des créateurs de toutes tailles font confiance à notre plateforme
          pour décoder l'algorithme.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-border bg-card p-6 transition-shadow duration-300 hover:shadow-[0_8px_30px_-12px_hsla(244,95%,57%,0.25)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.handle}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                "{t.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
