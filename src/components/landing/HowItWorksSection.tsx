import { motion } from "framer-motion";
import { Link2, Zap, FileText } from "lucide-react";

const steps = [
  { icon: Link2, title: "Colle ton lien TikTok", description: "Copie l'URL de ta vidéo et colle-la dans l'outil." },
  { icon: Zap, title: "L'IA analyse tes métriques", description: "Notre algorithme scanne engagement, rétention, hooks et tendances." },
  { icon: FileText, title: "Reçois ton rapport en secondes", description: "Un diagnostic complet avec des recommandations actionnables." },
];

export default function HowItWorksSection() {
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
            Comment ça <span className="font-accent glow-text-dark">marche</span>
          </h2>
        </motion.div>

        {/* Desktop: horizontal */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="text-center group"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center" style={{ border: "1px solid hsl(var(--border))" }}>
                <step.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <div className="text-xs font-bold text-primary mb-2 tracking-widest uppercase">
                Étape {i + 1}
              </div>
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile: vertical */}
        <div className="md:hidden space-y-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ border: "1px solid hsl(var(--border))" }}>
                <step.icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-xs font-bold text-primary mb-1 tracking-widest uppercase">
                  Étape {i + 1}
                </div>
                <h3 className="text-base font-bold mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="#hero-input"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#hero-input')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-sm font-medium text-primary hover:underline transition-colors"
          >
            Essayer maintenant →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
