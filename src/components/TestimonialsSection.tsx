import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";
import { useTilt } from "@/hooks/useTilt";

const testimonials = [
  {
    name: "Ellie LeDuc",
    role: "Process Engineer, Sappi North America",
    relationship: "Direct Manager · 6+ months · January 2026",
    quote:
      "It is rare to have a co-op as talented and hardworking as Pankaj. His efforts and ability to analyze data are enviable and deserving of recognition. Pankaj quickly outperformed co-ops I have worked with in the past, working through complex projects faster than I could keep up with assigning them. Despite his speed, the quality of work was always impeccable with minimal errors. I highly recommend Pankaj for any engineering role. He is a true asset.",
  },
  {
    name: "Dheeraj Varapana",
    role: "ASQ CQE, Certified Lean Six Sigma Black Belt",
    relationship: "Team Colleague, Sappi North America · January 2026",
    quote:
      "He has done a good job on his daily assignments, worked on the LSS project, and understood the concepts with a real-time project. He has been always passionate to learn new things, asking questions and interacting with operators. I would recommend Pankaj.",
  },
];

const TestimonialCard = ({ t, i, isInView }: { t: typeof testimonials[0]; i: number; isInView: boolean }) => {
  const { ref, onMouseMove, onMouseLeave } = useTilt(4);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: i * 0.15, duration: 0.5 }}
    >
      <div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="card-3d p-6 md:p-8 h-full"
      >
        <div className="relative z-10">
          <Quote size={32} className="text-primary/20 mb-4" />
          <p className="text-foreground text-sm leading-relaxed mb-6 italic">
            "{t.quote}"
          </p>
          <div className="border-t border-border pt-4">
            <p className="font-heading text-lg text-foreground">{t.name}</p>
            <p className="text-xs text-primary font-medium mt-0.5">{t.role}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{t.relationship}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background pointer-events-none" />
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-xs font-semibold text-primary uppercase tracking-[0.3em]">References</span>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mt-3">What Colleagues Say</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} i={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
