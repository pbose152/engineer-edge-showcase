import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ellie LeDuc",
    role: "Direct Manager at Sappi North America",
    quote:
      "Pankaj consistently outperformed other co-ops and delivered impeccable quality work. His ability to take on complex projects with minimal supervision and produce data-driven results was outstanding. He brought a rare combination of analytical rigor and practical shop-floor understanding.",
  },
  {
    name: "Dheeraj Varapana",
    role: "Six Sigma Black Belt, Team Colleague",
    quote:
      "Working with Pankaj was a great experience. His dedication to continuous improvement and his methodical approach to problem-solving made him an invaluable team member. He has a natural talent for translating data insights into actionable process improvements.",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">References</span>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mt-2">
            What Colleagues Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="glass-card-elevated p-6 md:p-8"
            >
              <Quote size={24} className="text-primary/30 mb-4" />
              <p className="text-foreground text-sm leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-heading text-base text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
