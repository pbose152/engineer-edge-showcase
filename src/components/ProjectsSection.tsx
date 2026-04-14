import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, BarChart3, Users, Wrench, BookOpen } from "lucide-react";

const projects = [
  {
    icon: Search,
    title: "LSV Event Analysis",
    description: "Root cause investigation of coating defects using production data and statistical methods.",
    tags: ["Root Cause Analysis", "Coating Defects", "Data Analysis"],
  },
  {
    icon: BarChart3,
    title: "SQC Framework",
    description: "Weekly executive reporting system for quality metrics across coating operations.",
    tags: ["Quality Metrics", "Executive Reporting", "SQC"],
  },
  {
    icon: Users,
    title: "Operator Performance Analytics",
    description: "Benchmarking system to identify training needs and performance gaps across shifts.",
    tags: ["Benchmarking", "Training", "Performance"],
  },
  {
    icon: Wrench,
    title: "5S Implementation",
    description: "Lean manufacturing initiative with audit checklists and standardized procedures.",
    tags: ["Lean", "5S", "Shop Floor"],
  },
  {
    icon: BookOpen,
    title: "Co-op Onboarding Framework",
    description: "Structured training documentation and SOPs for incoming engineering co-ops.",
    tags: ["SOPs", "Knowledge Transfer", "Documentation"],
  },
];

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
          className="mb-14"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Projects</span>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mt-2">
            Other Sappi Contributions
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card-elevated p-6 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <proj.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-heading text-lg text-foreground mb-2">{proj.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{proj.description}</p>
              <div className="flex flex-wrap gap-2">
                {proj.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
