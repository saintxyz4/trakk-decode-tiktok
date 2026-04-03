import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Comment Trakk. analyse-t-il mes vidéos TikTok ?",
    a: "Notre IA examine chaque métrique de vos vidéos — portée, rétention, engagement, timing — et les compare aux tendances actuelles de l'algorithme pour identifier précisément ce qui freine votre croissance.",
  },
  {
    q: "Dois-je connecter mon compte TikTok ?",
    a: "Non. Il vous suffit de coller le lien de votre vidéo TikTok. Trakk. extrait automatiquement les données nécessaires pour générer un diagnostic complet.",
  },
  {
    q: "Quelle est la différence entre les plans Starter et Studio ?",
    a: "Le plan Starter offre 20 analyses par mois, idéal pour débuter. Le plan Studio est illimité et inclut le chatbot IA expert avec 100 messages par mois pour un accompagnement personnalisé.",
  },
  {
    q: "Puis-je annuler mon abonnement à tout moment ?",
    a: "Oui, sans engagement. Vous pouvez annuler en un clic depuis votre tableau de bord. Votre accès reste actif jusqu'à la fin de la période facturée.",
  },
  {
    q: "L'outil fonctionne-t-il pour tous les types de contenu ?",
    a: "Absolument. Que vous fassiez du divertissement, de l'éducation, du lifestyle ou du business, notre IA s'adapte à votre niche et fournit des recommandations pertinentes.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container max-w-2xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Questions fréquentes
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-muted-foreground mb-12"
        >
          Tout ce que vous devez savoir avant de commencer.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left text-sm font-semibold">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
