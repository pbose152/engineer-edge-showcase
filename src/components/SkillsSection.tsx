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
    <section id="skills" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background pointer-events-none" />
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-xs font-semibold text-primary uppercase tracking-[0.3em]">Toolkit</span>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mt-3">Technical Skills</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="card-3d p-6"
            >
              <div className="relative z-10">
                <h3 className="font-heading text-xl text-foreground mb-5">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium border border-primary/20 hover:bg-primary/20 hover:border-primary/40 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
