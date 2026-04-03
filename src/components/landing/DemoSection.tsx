import { motion } from "framer-motion";

export default function DemoSection() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Une interface pensée pour la{" "}
            <span className="font-accent glow-text-dark">performance</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Chaque métrique, chaque insight, chaque recommandation — accessible
            en un coup d'œil.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative mx-auto rounded-2xl border border-border bg-card overflow-hidden shadow-2xl"
        >
          {/* Mock dashboard UI */}
          <div className="p-4 border-b border-border flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-destructive/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
            <div className="w-3 h-3 rounded-full bg-green-400/60" />
            <span className="ml-3 text-xs text-muted-foreground font-mono">
              trakk.app/dashboard
            </span>
          </div>
          <div className="p-8 grid md:grid-cols-3 gap-6">
            {[
              { label: "Portée moyenne", value: "24.5K", change: "+18%" },
              { label: "Taux d'engagement", value: "8.2%", change: "+3.1%" },
              { label: "Score algorithme", value: "92/100", change: "+12" },
            ].map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="rounded-xl bg-background p-5 border border-border"
              >
                <p className="text-xs text-muted-foreground mb-1">
                  {metric.label}
                </p>
                <p className="text-2xl font-bold">{metric.value}</p>
                <p className="text-xs text-green-500 font-medium mt-1">
                  {metric.change}
                </p>
              </motion.div>
            ))}
          </div>
          {/* Gradient overlay at the bottom for visual effect */}
          <div className="h-16 bg-gradient-to-t from-card to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
