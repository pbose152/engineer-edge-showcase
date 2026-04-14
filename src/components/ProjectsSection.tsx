import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FlaskConical, ShoppingCart, Truck } from "lucide-react";
import { useTilt } from "@/hooks/useTilt";

const academicProjects = [
  {
    icon: FlaskConical,
    title: "Quality Optimization Using DMAIC & DOE",
    description: "Slashed defect rates 25% through Taguchi design in electronic component manufacturing.",
    expandedDesc: "Validated sampling interval modifications with robust statistical testing. Engineered real-time defect tracking dashboards. Identified critical process variables through fishbone analysis targeting maximum ROI.",
    tags: ["25% Defect Reduction", "Taguchi DOE", "Northeastern"],
  },
  {
    icon: ShoppingCart,
    title: "Bank Marketing Optimization",
    description: "Built 5 ML models achieving 85.1% accuracy with 17% false positive reduction.",
    expandedDesc: "Delivered end-to-end data pipeline from preprocessing to deployment-ready insights. Leveraged ensemble learning (Random Forest, XGBoost) for complex, high-dimensional datasets.",
    tags: ["85.1% Accuracy", "ML Pipeline", "Northeastern"],
  },
  {
    icon: Truck,
    title: "Supply Chain Optimization for Walmart",
    description: "Proposed solutions to reduce errors by 25% and operational costs by 15%.",
    expandedDesc: "Conducted data analysis to identify gaps in supply chain traceability and operational efficiency. Developed actionable recommendations for process improvement.",
    tags: ["25% Error Reduction", "15% Cost Savings", "Northeastern"],
  },
];

const AcademicCard = ({ proj, i, isInView }: { proj: typeof academicProjects[0]; i: number; isInView: boolean }) => {
  const { ref, onMouseMove, onMouseLeave } = useTilt(5);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: i * 0.1, duration: 0.5 }}
    >
      <div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="card-3d p-6 h-full"
      >
        <div className="relative z-10">
          <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
            <proj.icon size={20} className="text-accent" />
          </div>
          <h3 className="font-heading text-lg text-foreground mb-2">{proj.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{proj.description}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {proj.tags.map((tag) => (
              <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-muted-foreground border border-border">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="text-xs font-semibold text-accent uppercase tracking-[0.3em]">Academic Work</span>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mt-3">
            Academic Projects
          </h2>
          <p className="text-sm text-muted-foreground mt-2">Northeastern University · 2024–2025</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {academicProjects.map((proj, i) => (
            <AcademicCard key={proj.title} proj={proj} i={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
