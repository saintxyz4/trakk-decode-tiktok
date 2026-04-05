import { motion, useInView } from "framer-motion";
import { Lock } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AnimatedCounter({ target, duration = 1.2 }: { target: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = (now - startTime) / (duration * 1000);
      if (elapsed >= 1) { setCount(target); return; }
      const eased = 1 - Math.pow(1 - elapsed, 3);
      setCount(Math.round(eased * target));
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}</span>;
}

const badges = [
  { label: "Sujet", type: "green" as const },
  { label: "CTA", type: "green" as const },
  { label: "Hook", type: "orange" as const },
  { label: "Rétention", type: "orange" as const },
];

const metrics = [
  { label: "Hook (5 premières sec.)", value: "62%", color: "#D4890A", context: "rétention" },
  { label: "Durée moy. visionnage", value: "18s", color: "#1B8A30", context: "/ 24s total" },
  { label: "Visionnage complet", value: "34%", color: "#6C63FF", context: "des viewers" },
  { label: "CTA / Conversions", value: "4.2%", color: "#1B8A30", context: "taux clic lien" },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } },
};

export default function ReportOverviewSection() {
  return (
    <section className="py-24 bg-[#0A0A0A] overflow-hidden">
      <div className="container max-w-3xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5F3]">
            Un rapport que vous n'attendiez{" "}
            <span className="font-accent" style={{ color: "#6C63FF" }}>pas.</span>
          </h2>
          <p className="mt-3 text-[#999] max-w-md mx-auto text-sm">
            Voici ce que vous obtenez après chaque analyse — données fictives à titre d'exemple.
          </p>
        </motion.div>

        {/* Report card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="rounded-2xl border overflow-hidden shadow-2xl"
          style={{ background: "#FAFAF8", borderColor: "#E8E8E4" }}
        >
          {/* 1. macOS bar */}
          <div
            className="flex items-center justify-between px-4 py-3"
            style={{ background: "#F5F5F1", borderBottom: "1px solid #E8E8E4" }}
          >
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full" style={{ background: "#FF5F57" }} />
              <span className="w-3 h-3 rounded-full" style={{ background: "#FEBC2E" }} />
              <span className="w-3 h-3 rounded-full" style={{ background: "#28C840" }} />
            </div>
            <span style={{ fontSize: 12, color: "#999", letterSpacing: "0.5px", textTransform: "uppercase" }}>
              Rapport d'analyse
            </span>
          </div>

          <motion.div
            className="p-6 md:p-8 space-y-7"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* 2. Score + Tendance */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row sm:items-end gap-5">
              <div>
                <p style={{ fontSize: 11, color: "#999", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: 4 }}>
                  Score global
                </p>
                <div className="flex items-baseline gap-1">
                 <span className="tracking-tight font-accent" style={{ fontSize: 48, fontWeight: 700, color: "#6C63FF", lineHeight: 1 }}>
                    <AnimatedCounter target={15} />
                  </span>
                  <span className="tracking-tight" style={{ fontSize: 20, color: "#BBB", fontWeight: 500 }}>/ 20</span>
                </div>
              </div>
              <div
                className="rounded-[10px] px-4 py-3"
                style={{ background: "rgba(108,99,255,0.08)", border: "1px solid rgba(108,99,255,0.2)" }}
              >
                <p style={{ fontSize: 11, color: "#999", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: 2 }}>
                  Tendance
                </p>
                <p style={{ fontSize: 14, color: "#28C840", fontWeight: 500 }}>+12% vs habitude</p>
              </div>
            </motion.div>

            {/* 3. Analyse phrase */}
            <motion.div
              variants={fadeUp}
              className="rounded-r-lg"
              style={{ background: "#F0EFFF", borderLeft: "3px solid #6C63FF", padding: "14px 18px" }}
            >
              <p style={{ fontSize: 14, lineHeight: 1.6, color: "#333" }}>
                Votre vidéo performe{" "}
                <strong style={{ color: "#6C63FF" }}>mieux que d'habitude</strong>, mais le hook
                manque d'impact pour maximiser la rétention au-delà des 5 premières secondes.
              </p>
            </motion.div>

            {/* 4. Points forts */}
            <motion.div variants={fadeUp}>
              <p style={{ fontSize: 11, color: "#999", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: 10 }}>
                Points forts identifiés
              </p>
              <motion.div className="flex flex-wrap gap-2" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                {badges.map((b, i) => {
                  const isGreen = b.type === "green";
                  return (
                    <motion.span
                      key={b.label}
                      variants={fadeUp}
                      className="inline-flex items-center gap-1.5 rounded-full"
                      style={{
                        padding: "6px 14px",
                        fontSize: 13,
                        fontWeight: 500,
                        background: isGreen ? "rgba(40,200,64,0.1)" : "rgba(254,188,46,0.12)",
                        color: isGreen ? "#1B8A30" : "#9A6D00",
                        border: `1px solid ${isGreen ? "rgba(40,200,64,0.25)" : "rgba(254,188,46,0.3)"}`,
                      }}
                    >
                      <span style={{ fontSize: 8 }}>●</span>
                      {b.label}
                    </motion.span>
                  );
                })}
              </motion.div>
            </motion.div>

            {/* 5. Metrics grid */}
            <motion.div variants={fadeUp}>
              <p style={{ fontSize: 11, color: "#999", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: 10 }}>
                Métriques détaillées
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {metrics.map((m) => (
                  <div key={m.label} className="rounded-[10px] px-4 py-3.5" style={{ background: "#F7F7F5" }}>
                    <p style={{ fontSize: 11, color: "#999", marginBottom: 4 }}>{m.label}</p>
                    <div className="flex items-baseline gap-1.5">
                      <span className="tracking-tight" style={{ fontSize: 22, fontWeight: 700, color: m.color }}>{m.value}</span>
                      <span style={{ fontSize: 12, color: "#999" }}>{m.context}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 6. Locked zone */}
            <motion.div variants={fadeUp} className="relative rounded-xl overflow-hidden" style={{ minHeight: 180 }}>
              {/* Blurred fake content */}
              <div style={{ filter: "blur(6px)", opacity: 0.5, pointerEvents: "none" }} className="space-y-3 p-4">
                <p style={{ fontSize: 11, color: "#999", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                  Analyse approfondie
                </p>
                {[1, 2, 3].map((i) => (
                  <div key={i} className="rounded-lg p-3" style={{ background: "#F7F7F5" }}>
                    <p style={{ fontSize: 13, color: "#999", lineHeight: 1.5 }}>
                      {i === 1
                        ? "Le format vertical court avec une accroche textuelle fonctionne 2.3x mieux que votre moyenne…"
                        : i === 2
                        ? "Recommandation : testez un hook visuel dans les 0.5 premières secondes pour capter l'attention…"
                        : "Comparaison avec les 50 vidéos similaires dans votre niche : vous êtes dans le top 35%…"}
                    </p>
                  </div>
                ))}
              </div>

              {/* Overlay */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center px-4"
                style={{ background: "rgba(250,250,248,0.6)", backdropFilter: "blur(2px)" }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(108,99,255,0.1)" }}
                >
                  <Lock size={18} style={{ color: "#6C63FF" }} />
                </div>
                <p style={{ fontSize: 14, fontWeight: 500, color: "#333" }}>Analyse complète verrouillée</p>
                <p style={{ fontSize: 12, color: "#999" }}>Lancez votre analyse pour débloquer les détails</p>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    to="/signup"
                    className="inline-block mt-1 text-sm font-medium text-white rounded-[10px] transition-colors"
                    style={{ background: "#6C63FF", padding: "12px 28px" }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#5B52EE")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "#6C63FF")}
                  >
                    Analyser ma vidéo
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Below card CTA */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center mt-6"
        >
          <a href="#hero-input" style={{ fontSize: 13, color: "#6C63FF" }} className="hover:underline">
            Obtenez le vôtre en moins de 10 secondes →
          </a>
        </motion.p>
      </div>
    </section>
  );
}
