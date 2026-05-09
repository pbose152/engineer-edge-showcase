import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Process Engineer Co-op",
    department: "UltraCast Coating Department",
    company: "Sappi North America",
    location: "Westbrook, Maine",
    period: "Jul 2025 – Dec 2025",
    highlights: [
      "Projected $76,000 in annual savings by leading DMAIC-driven process optimization on the 3UC coating line, validating an 18% startup waste reduction target with operations leadership.",
      "Shaped new 3UC process controls adopted by the coating team after ANOVA and regression isolated root causes of variation across operator, shift, and grade variables.",
      "Surfaced special cause variation in coatweight and viscosity through Minitab SPC charts and capability analyses across UltraCast coater lines.",
      "Accelerated coating defect diagnosis through real-time monitoring of Braincube and PI Vision dashboards.",
      "Sustained 5S adoption with audit checklists and visual standards passing quarterly Lean Manufacturing reviews.",
      "Authored SOPs for daily quality reports and weekly executive summaries, adopted by incoming co-ops.",
    ],
  },
  {
    title: "Assistant Engineer",
    department: "Manufacturing Operations",
    company: "Raghav Kitchen Industries",
    location: "Faridabad, India",
    period: "Mar 2022 – Dec 2023",
    highlights: [
      "Cut production costs 8% by tracing material waste and cycle time inefficiencies across steel fabrication operations.",
      "Integrated DFMEA into fabrication workflows, lowering defect rates by 5% and improving first-pass yield.",
      "Optimized client-to-shop-floor handoff by translating customer specs into production-ready AutoCAD drawings.",
      "Compressed design-to-production rework on recurring product variants through standardized work instructions.",
    ],
  },
  {
    title: "Graduate Engineer Trainee",
    department: "Production Planning & Control",
    company: "MAT Brakes India Private Limited",
    location: "Sonipat, India",
    period: "Jul 2021 – Nov 2021",
    highlights: [
      "Improved production efficiency by 4% by restructuring material flow in brake pad manufacturing.",
      "Managed production schedules and inventory through SAP PP, keeping materials on the line through shift changes.",
      "Identified bottlenecks through Gemba walks and ran Kanban pulls that reduced WIP buildup.",
    ],
  },
];

const ExperienceCard = ({ exp, i, isInView }: { exp: typeof experiences[0]; i: number; isInView: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: i * 0.15, duration: 0.5 }}
      className="relative md:pl-14"
    >
      <div className="absolute left-[12px] top-2 w-4 h-4 rounded-full border-[3px] border-primary bg-background hidden md:block shadow-sm shadow-primary/30" />

      <div className="card-3d p-6 hover:-translate-y-1 transition-all duration-400">
        <div className="relative z-10">
          <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
            <div>
              <h3 className="font-heading text-xl text-foreground">{exp.title}</h3>
              <div className="flex items-center gap-2 text-sm text-primary font-medium mt-1">
                <Briefcase size={14} />
                {exp.company}
              </div>
              <p className="text-xs text-muted-foreground mt-0.5">{exp.department}</p>
            </div>
            <div className="text-right text-sm text-muted-foreground">
              <div className="flex items-center gap-1"><Calendar size={12} /> {exp.period}</div>
              <div className="flex items-center gap-1 mt-1"><MapPin size={12} /> {exp.location}</div>
            </div>
          </div>
          <ul className="space-y-2 mt-4">
            {exp.highlights.map((h, j) => (
              <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0 shadow-sm shadow-primary/50" />
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-xs font-semibold text-primary uppercase tracking-[0.3em]">Career</span>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mt-3">Experience</h2>
          <p className="text-muted-foreground mt-2 text-sm">
            3 industries · Paper Coating · Discrete Fabrication · Automotive Components
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[19px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-primary/50 via-border to-transparent hidden md:block" />
          {/* Timeline terminal cap */}
          <div className="absolute left-[12px] -bottom-1 w-4 h-4 rounded-full bg-primary border-[3px] border-background shadow-sm shadow-primary/40 hidden md:block" />
          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <ExperienceCard key={exp.company + exp.title} exp={exp} i={i} isInView={isInView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
