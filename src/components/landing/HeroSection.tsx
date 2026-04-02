import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedBlobs from "./AnimatedBlobs";

export default function HeroSection() {
  return (
    <section className="relative hero-gradient pt-32 pb-24 overflow-hidden">
      <AnimatedBlobs />
      <div className="container relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-bold text-primary-foreground max-w-3xl mx-auto leading-tight"
        >
          L'algorithme TikTok a des secrets.
          <br />
          <span className="font-accent-light text-4xl md:text-6xl">Trakk</span>{" "}
          vous les révèle.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-6 text-lg text-primary-foreground/70 max-w-xl mx-auto"
        >
          Analysez vos vidéos, comprenez pourquoi elles ne percent pas, et
          obtenez un plan d'action concret grâce à l'IA.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            variant="outline"
            className="bg-primary-foreground text-foreground border-0 hover:bg-primary-foreground/90"
            asChild
          >
            <Link to="/signup">
              Analyser ma première vidéo <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
