import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Factory, BarChart3, Users, Target } from "lucide-react";
import { useTilt } from "@/hooks/useTilt";

const capabilities = [
  {
    icon: Factory,
    title: "Manufacturing Process Optimization",
    description: "Hands-on experience across paper coating, stainless steel fabrication, and automotive brake manufacturing. Comfortable on the shop floor and in the control room.",
    accent: "from-primary/20 to-transparent",
  },
  {
    icon: Target,
    title: "Six Sigma & Lean Methodology",
    description: "Led DMAIC projects, root cause analysis, DFMEA, 5S, Kanban, and Value Stream Mapping. IISE Green Belt certified with validated project savings.",
    accent: "from-accent/20 to-transparent",
  },
  {
    icon: BarChart3,
    title: "Statistical Process Control",
    description: "SPC charts, capability analysis, ANOVA, correlation analysis, hypothesis testing, DOE. Minitab, Python, and Excel for data-driven decisions.",
    accent: "from-primary/20 to-transparent",
  },
  {
    icon: Users,
    title: "Cross-Functional Collaboration",
    description: "Partnered with operators, engineers, and leadership. Built SOPs, onboarding frameworks, and weekly executive reporting systems.",
    accent: "from-accent/20 to-transparent",
  },
];

const TiltCard = ({ cap, i, isInView }: { cap: typeof capabilities[0]; i: number; isInView: boolean }) => {
  const { ref, onMouseMove, onMouseLeave } = useTilt(6);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.1 + i * 0.1, duration: 0.6 }}
    >
      <div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="card-3d p-6 h-full cursor-default"
      >
        <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${cap.accent} rounded-t-xl`} />
        <div className="relative z-10">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 border border-primary/20">
            <cap.icon size={22} className="text-primary" />
          </div>
          <h3 className="font-heading text-xl text-foreground mb-2">{cap.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{cap.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-semibold text-primary uppercase tracking-[0.3em]">What I Do</span>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mt-3">
            Built for the Manufacturing Floor
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl text-base leading-relaxed">
            Results-driven Process Engineer with hands-on experience in high-volume manufacturing and continuous improvement. Proven ability to partner with operators, engineers, and leadership to stabilize processes, improve yield, and standardize best practices.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {capabilities.map((cap, i) => (
            <TiltCard key={cap.title} cap={cap} i={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
