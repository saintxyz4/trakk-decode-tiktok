import { motion } from "framer-motion";

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
          Ils utilisent déjà{" "}
          <span className="font-accent glow-text-dark">Trakk.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-muted-foreground mb-16 max-w-lg mx-auto"
        >
          Des retours arrivent bientôt — nos premiers utilisateurs testent l'outil.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="rounded-2xl border-2 border-dashed border-border p-10 flex items-center justify-center min-h-[160px]"
            >
              <p className="text-sm italic text-muted-foreground">Bientôt disponible</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
