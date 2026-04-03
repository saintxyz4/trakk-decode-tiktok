import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedBlobs from "./AnimatedBlobs";

export default function HeroSection() {
  return (
    <section className="relative hero-gradient pt-32 pb-28 overflow-hidden">
      <AnimatedBlobs />
      <div className="container relative z-10 max-w-3xl mx-auto px-6">
        {/* Line 1 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground text-center leading-tight"
        >
          L'algorithme TikTok a des secrets.
        </motion.p>


        {/* Line 2 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground text-center leading-tight"
        >
          <span className="font-accent-light super-glow">Trakk.</span>{" "}
          vous les révèle.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-10 flex justify-center"
        >
          <Link to="/signup" className="cta-btn">
            Commencer l'analyse gratuite
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
