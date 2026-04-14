import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    category: "Process Improvement",
    skills: ["Lean Six Sigma", "DMAIC", "5S/6S", "Kaizen", "Value Stream Mapping", "Root Cause Analysis", "SPC", "DOE", "Process Mapping"],
  },
  {
    category: "Quality Engineering",
    skills: ["DFM/DFMEA", "Statistical Process Control", "Hypothesis Testing", "ANOVA", "Regression", "Pareto Analysis", "Fishbone Diagrams", "Control Charts"],
  },
  {
    category: "Software & Tools",
    skills: ["Python (Pandas, NumPy)", "Minitab", "PI Vision", "Braincube", "SAP PP", "AutoCAD", "Excel (Pivot Tables, VBA, Power Query)"],
  },
  {
    category: "Data Analytics",
    skills: ["Statistical Analysis", "Data Mining", "Machine Learning", "Dashboard Development"],
  },
];

const SkillsSection = () => {
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
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Toolkit</span>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mt-2">Technical Skills</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card-elevated p-6"
            >
              <h3 className="font-heading text-lg text-foreground mb-4">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium hover:bg-primary/20 transition-colors duration-200"
                  >
                    {skill}
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

export default SkillsSection;
