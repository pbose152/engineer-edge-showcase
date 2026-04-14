import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Factory, BarChart3, Users, Target } from "lucide-react";

const capabilities = [
  {
    icon: Factory,
    title: "Manufacturing Process Optimization",
    description: "Hands-on experience across paper coating, stainless steel fabrication, and automotive brake manufacturing. Comfortable on the shop floor and in the control room.",
  },
  {
    icon: Target,
    title: "Six Sigma & Lean Methodology",
    description: "Led DMAIC projects, root cause analysis, DFMEA, 5S, Kanban, and Value Stream Mapping. IISE Green Belt certified with validated project savings.",
  },
  {
    icon: BarChart3,
    title: "Statistical Process Control",
    description: "SPC charts, process capability analysis, ANOVA (p=0.895), correlation analysis (r=0.905), hypothesis testing, DOE. Minitab, Python, and Excel for data-driven decisions.",
  },
  {
    icon: Users,
    title: "Cross-Functional Collaboration",
    description: "Partnered with operators, engineers, and leadership. Built SOPs, onboarding frameworks (68+ tasks), and weekly executive reporting systems.",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-secondary/50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">What I Do</span>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mt-2">
            Built for the Manufacturing Floor
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl text-base leading-relaxed">
            Results-driven Process Engineer with hands-on experience in high-volume manufacturing and continuous improvement across paper coating, discrete fabrication, and automotive components. Proven ability to partner with operators, engineers, and leadership to stabilize processes, improve yield, and standardize best practices.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
              className="glass-card-elevated p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                  <cap.icon size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg text-foreground mb-1">{cap.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cap.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
