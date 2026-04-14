import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Search, BarChart3, Users, Wrench, BookOpen, FlaskConical, ShoppingCart, Truck, ChevronDown, ChevronUp } from "lucide-react";

const sappiProjects = [
  {
    icon: Search,
    title: "LSV Event Analysis",
    description: "Root cause investigation across 17 defect events on coating line.",
    expandedDesc: "Identified gravure roll speed differentials as primary cause of LSV coating defects. Collaborated with production engineers using Braincube and PI Vision for real-time process data analysis.",
    tags: ["Root Cause Analysis", "17 Events", "Braincube"],
  },
  {
    icon: BarChart3,
    title: "SQC Executive Reporting",
    description: "Weekly quality metrics tracking across 3 coating lines.",
    expandedDesc: "Developed weekly SQC executive reports tracking viscosity, coatweight, and glycol metrics. Provided leadership with actionable insights for coating process decisions.",
    tags: ["Quality Metrics", "3 Coating Lines", "Executive Reports"],
  },
  {
    icon: Users,
    title: "Operator Performance Analytics",
    description: "Benchmarking system using I-MR control charts and Pareto analysis.",
    expandedDesc: "Created operator performance benchmarking using I-MR control charts. Identified 5 operators for targeted training via Pareto analysis to reduce startup waste variation.",
    tags: ["I-MR Charts", "Pareto Analysis", "5 Operators Identified"],
  },
  {
    icon: Wrench,
    title: "5S Implementation",
    description: "Lean manufacturing initiative across the UltraCast department.",
    expandedDesc: "Implemented 5S workplace organization across the ultracast department, developing audit checklists and standardized procedures for sustained compliance.",
    tags: ["Lean", "5S", "Audit Checklists"],
  },
  {
    icon: BookOpen,
    title: "Co-op Onboarding Framework",
    description: "Structured 8-day training program with 68+ documented tasks.",
    expandedDesc: "Authored comprehensive onboarding framework with interactive HTML portal. Standardized SOPs, training guides, daily quality reports, and weekly executive summaries.",
    tags: ["68+ Tasks", "HTML Portal", "SOPs"],
  },
];

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

const ProjectCard = ({ proj, i, isInView }: { proj: typeof sappiProjects[0]; i: number; isInView: boolean }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: i * 0.08, duration: 0.5 }}
      className="glass-card-elevated p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
        <proj.icon size={20} className="text-primary" />
      </div>
      <h3 className="font-heading text-lg text-foreground mb-2">{proj.title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {expanded ? proj.expandedDesc : proj.description}
      </p>
      <div className="flex flex-wrap gap-2 mt-4">
        {proj.tags.map((tag) => (
          <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-muted-foreground">
            {tag}
          </span>
        ))}
      </div>
      <button className="mt-3 flex items-center gap-1 text-xs font-medium text-primary">
        {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        {expanded ? "Less" : "More"}
      </button>
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
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Projects</span>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mt-2">
            Other Sappi Contributions
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {sappiProjects.map((proj, i) => (
            <ProjectCard key={proj.title} proj={proj} i={i} isInView={isInView} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-10"
        >
          <h3 className="font-heading text-2xl text-foreground">Academic Projects</h3>
          <p className="text-sm text-muted-foreground mt-1">Northeastern University · 2024–2025</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {academicProjects.map((proj, i) => (
            <ProjectCard key={proj.title} proj={proj} i={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
