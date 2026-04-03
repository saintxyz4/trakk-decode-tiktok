import { motion, useAnimation } from "framer-motion";
import { Link2, Zap, FileText, Target, Search, MessageSquare, TrendingUp, Check, AlertTriangle, Lock } from "lucide-react";
import { useEffect, useRef } from "react";

/* ─── BLOCK A — How it works ─── */
const steps = [
  {
    icon: Link2,
    label: "Collez votre lien",
    sub: "Copiez l'URL de n'importe quelle vidéo TikTok",
  },
  {
    icon: Zap,
    label: "L'IA analyse",
    sub: "Rétention, accroche, score viral, tendances…",
  },
  {
    icon: FileText,
    label: "Vous recevez votre rapport",
    sub: "Clair, actionnable, en moins de 10 secondes",
  },
];

function BlockA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="rounded-2xl p-8 md:p-12"
      style={{ backgroundColor: "hsl(244 30% 96%)" }}
    >
      {/* Desktop */}
      <div className="hidden md:flex items-start justify-between gap-2">
        {steps.map((s, i) => (
          <div key={i} className="contents">
            <div className="flex-1 flex flex-col items-center text-center gap-3">
              <s.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
              <h4 className="text-sm font-semibold text-foreground">{s.label}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed max-w-[200px]">{s.sub}</p>
            </div>
            {i < steps.length - 1 && (
              <span className="text-muted-foreground/40 text-xl font-light self-center select-none mt-1">→</span>
            )}
          </div>
        ))}
      </div>
      {/* Mobile */}
      <div className="flex md:hidden flex-col items-center gap-6">
        {steps.map((s, i) => (
          <div key={i} className="contents">
            <div className="flex flex-col items-center text-center gap-2">
              <s.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
              <h4 className="text-sm font-semibold text-foreground">{s.label}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed max-w-[240px]">{s.sub}</p>
            </div>
            {i < steps.length - 1 && (
              <span className="text-muted-foreground/40 text-lg select-none">↓</span>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

/* ─── BLOCK B — Metrics Preview ─── */
function BlockB() {
  const blurControls = useAnimation();
  const hasFlashed = useRef(false);

  const handleViewport = () => {
    if (hasFlashed.current) return;
    hasFlashed.current = true;
    setTimeout(() => {
      blurControls.start({
        filter: ["blur(4px)", "blur(0px)", "blur(4px)"],
        transition: { duration: 0.4, times: [0, 0.5, 1], ease: "easeInOut" },
      });
    }, 1500);
  };

  const scrollToHero = () => {
    document.getElementById("hero-input")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onViewportEnter={handleViewport}
      className="space-y-4"
    >
      <div className="text-center space-y-2">
        <h3 className="text-xl md:text-2xl font-bold text-foreground">
          Un rapport que vous n'attendiez pas.
        </h3>
        <p className="text-sm text-muted-foreground">
          Chaque vidéo cache des données que TikTok ne vous montre pas.
        </p>
      </div>

      <div
        className="rounded-2xl p-6 md:p-10 space-y-5 font-mono text-sm"
        style={{ backgroundColor: "#0A0A0A", color: "#e4e4e7" }}
      >
        {/* Score — visible, this is the hook */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground text-xs uppercase tracking-wider">Score de viralité</span>
            <span className="text-lg font-bold" style={{ color: "hsl(244 95% 70%)" }}>87 <span className="text-xs font-normal text-muted-foreground">/ 100</span></span>
          </div>
          <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
            <div className="h-full rounded-full" style={{ width: "87%", background: "linear-gradient(90deg, hsl(244 95% 57%), hsl(244 95% 72%))" }} />
          </div>
          <span className="text-xs font-semibold" style={{ color: "hsl(142 70% 55%)" }}>Excellent</span>
        </div>

        <div className="h-px" style={{ backgroundColor: "rgba(255,255,255,0.06)" }} />

        {/* Metrics — blurred values with lock overlay */}
        <div className="relative">
          <motion.div
            animate={blurControls}
            initial={{ filter: "blur(4px)" }}
            className="space-y-3"
          >
            {[
              { label: "Rétention moyenne", value: "73%", good: false, warn: false },
              { label: "Accroche (3 premières sec)", value: "Forte", good: true, warn: false },
              { label: "Rythme de montage", value: "Rapide", good: true, warn: false },
              { label: "Hashtags pertinents", value: "Moyen", good: false, warn: true },
            ].map((m, i) => (
              <div key={i} className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground" style={{ filter: "blur(0px)" }}>{m.label}</span>
                <span className="flex items-center gap-1.5">
                  {m.value}
                  {m.good && <Check className="w-3.5 h-3.5" style={{ color: "hsl(142 70% 55%)" }} />}
                  {m.warn && <AlertTriangle className="w-3.5 h-3.5" style={{ color: "hsl(38 92% 60%)" }} />}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Lock overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="flex items-center gap-2 px-4 py-2 rounded-full text-xs"
              style={{
                backgroundColor: "rgba(0,0,0,0.7)",
                color: "rgba(255,255,255,0.8)",
                backdropFilter: "blur(2px)",
              }}
            >
              <Lock className="w-3 h-3" />
              Détails disponibles après analyse
            </div>
          </div>
        </div>

        <div className="h-px" style={{ backgroundColor: "rgba(255,255,255,0.06)" }} />

        {/* Recommendation — blurred placeholder lines */}
        <div className="space-y-3">
          <span className="text-xs" style={{ color: "hsl(244 95% 70%)" }}>💡 Recommandation principale</span>
          <div className="space-y-2">
            <div className="h-3 rounded" style={{ width: "90%", backgroundColor: "rgba(255,255,255,0.1)" }} />
            <div className="h-3 rounded" style={{ width: "75%", backgroundColor: "rgba(255,255,255,0.1)" }} />
            <div className="h-3 rounded" style={{ width: "50%", backgroundColor: "rgba(255,255,255,0.1)" }} />
          </div>
          <button
            onClick={scrollToHero}
            className="text-xs font-medium mt-1 cursor-pointer bg-transparent border-none outline-none"
            style={{
              color: "hsl(244 95% 70%)",
              textDecoration: "underline",
              textUnderlineOffset: "3px",
            }}
          >
            → Voir la recommandation complète
          </button>
        </div>
      </div>

      <p
        className="text-center text-xs cursor-pointer transition-colors duration-200 hover:text-primary"
        style={{ color: "hsl(244 95% 65%)" }}
        onClick={scrollToHero}
      >
        Obtenez le vôtre en moins de 10 secondes. →
      </p>
    </motion.div>
  );
}

/* ─── BLOCK C — Feature Pills ─── */
const pills = [
  { icon: Target, title: "Score viral", desc: "Un score sur 100 basé sur l'algorithme réel" },
  { icon: Search, title: "Analyse de niche", desc: "Les formats qui marchent dans votre secteur" },
  { icon: MessageSquare, title: "Stratège IA", desc: "Recommandations personnalisées en langage naturel" },
  { icon: TrendingUp, title: "Tendances", desc: "Repérez les trends avant qu'elles explosent" },
];

function BlockC() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="grid grid-cols-1 sm:grid-cols-2 gap-3"
    >
      {pills.map((p, i) => (
        <motion.div
          key={i}
          whileHover={{ y: -3, borderColor: "hsl(244 95% 57%)" }}
          transition={{ duration: 0.2 }}
          className="flex items-start gap-3 rounded-2xl bg-card p-5 cursor-default"
          style={{ border: "1px solid rgba(0,0,0,0.08)", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
        >
          <p.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" strokeWidth={1.5} />
          <div>
            <h4 className="text-sm font-semibold text-foreground">{p.title}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">{p.desc}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

/* ─── BLOCK D — Comparison ─── */
const comparisons = [
  { left: "Vous postez et espérez", right: "Vous analysez avant de publier" },
  { left: "Statistiques TikTok floues", right: "Score clair sur 100" },
  { left: "Vous copiez des trends", right: "Vous les anticipez" },
  { left: "0 feedback actionnable", right: "1 recommandation concrète par vidéo" },
];

function BlockD() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-2xl mx-auto"
    >
      <div className="grid grid-cols-[1fr_auto_1fr] gap-x-6 md:gap-x-10 text-sm">
        {/* Headers */}
        <span
          className="text-xs font-semibold uppercase tracking-wider pb-4"
          style={{ color: "hsl(0 70% 55%)", textShadow: "0 0 12px hsla(0, 70%, 55%, 0.4)" }}
        >
          Sans Trakk<span className="font-accent">.</span>
        </span>
        <div />
        <span
          className="text-xs font-semibold uppercase tracking-wider pb-4"
          style={{ color: "hsl(142 70% 55%)", textShadow: "0 0 12px hsla(142, 70%, 55%, 0.4)" }}
        >
          Avec Trakk<span className="font-accent">.</span>
        </span>

        {comparisons.map((row, i) => (
          <div key={i} className="contents">
            <span className="text-muted-foreground py-2.5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "hsl(0 70% 55%)" }} />
              {row.left}
            </span>
            <div className="w-px self-stretch" style={{ backgroundColor: "hsl(var(--border))" }} />
            <span className="text-foreground font-medium py-2.5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "hsl(142 70% 55%)" }} />
              {row.right}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

/* ─── MAIN SECTION ─── */
export default function BentoFeaturesSection() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: "hsl(var(--background))" }}>
      {/* Noise */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "256px",
        }}
      />

      <div className="container max-w-4xl relative space-y-20 md:space-y-24">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Ce que Trakk<span className="font-accent super-glow-dark">.</span>{" "}
            <span className="font-accent glow-text-dark">fait</span> pour vous
          </h2>
          <p className="mt-4 text-muted-foreground text-[15px]">
            Pas de jargon. Un lien, un rapport, une décision.
          </p>
        </motion.div>

        <BlockA />
        <BlockB />
        <BlockC />
        <BlockD />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center font-accent text-sm text-muted-foreground"
        >
          * et ce n'est que le début.
        </motion.p>
      </div>
    </section>
  );
}
