import { motion, useAnimation } from "framer-motion";
import { Check, AlertTriangle, Lock } from "lucide-react";
import { useRef } from "react";

export default function ReportOverviewSection() {
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
    <section className="py-24 bg-[#0A0A0A] overflow-hidden">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          onViewportEnter={handleViewport}
          className="space-y-4"
        >
          {/* Section header */}
          <div className="text-center space-y-2 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#F5F5F3]">
              Un rapport que vous n'attendiez pas.
            </h2>
            <p className="text-sm text-[#999]">
              Chaque vidéo cache des données que TikTok ne vous montre pas.
            </p>
          </div>

          {/* Dark report card */}
          <div
            className="rounded-2xl p-6 md:p-10 space-y-5"
            style={{ backgroundColor: "#111114", color: "#e4e4e7", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            {/* Score — visible, the hook */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider" style={{ color: "#999" }}>
                  Score de viralité
                </span>
                <span className="text-xl font-bold" style={{ color: "hsl(244 95% 70%)" }}>
                  87 <span className="text-sm font-normal" style={{ color: "#999" }}>/ 100</span>
                </span>
              </div>
              <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
                <div
                  className="h-full rounded-full"
                  style={{ width: "87%", background: "linear-gradient(90deg, hsl(244 95% 57%), hsl(244 95% 72%))" }}
                />
              </div>
              <span className="text-xs font-semibold" style={{ color: "hsl(142 70% 55%)" }}>
                Excellent
              </span>
            </div>

            <div className="h-px" style={{ backgroundColor: "rgba(255,255,255,0.06)" }} />

            {/* Metrics — blurred with lock overlay */}
            <div className="relative">
              <motion.div
                animate={blurControls}
                initial={{ filter: "blur(4px)" }}
                className="space-y-3"
              >
                {[
                  { label: "Rétention moyenne", value: "73%", good: false, warn: false },
                  { label: "Accroche (5 premières sec)", value: "Forte", good: true, warn: false },
                  { label: "Rythme de montage", value: "Rapide", good: true, warn: false },
                  { label: "Hashtags pertinents", value: "Moyen", good: false, warn: true },
                ].map((m, i) => (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <span style={{ color: "#999", filter: "blur(0px)" }}>{m.label}</span>
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
              <span className="text-xs" style={{ color: "hsl(244 95% 70%)" }}>
                💡 Recommandation principale
              </span>
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
      </div>
    </section>
  );
}
