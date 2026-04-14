import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Briefcase, MapPin, Calendar, ChevronDown, ChevronUp } from "lucide-react";

const experiences = [
  {
    title: "Process Engineer Co-op",
    department: "UltraCast Coating Department",
    company: "Sappi North America",
    location: "Westbrook, Maine",
    period: "Jul 2025 – Dec 2025",
    highlights: [
      "Led Ultracast startup waste reduction project using DMAIC methodology, performing statistical analysis to establish baselines and validate an 18% reduction target with projected annual savings of $76,000",
      "Analyzed 339 startup events and 100,000+ rows of production data using Python and Minitab to identify root causes of waste variation across operators, shifts, and product grades",
      "Performed ANOVA testing (p=0.895 for shift effect) and correlation analysis (r=0.905 for NET_LBS vs Time) to isolate key process variables",
      "Identified AutoTurnup as critical variable reducing waste by ~12%; developed width-specific targets (56\" at 186 lbs, 65.5\" at 198 lbs, 86.5\" at 265 lbs)",
    ],
    expandedHighlights: [
      "Built statistical control charts and capability analyses in Minitab to monitor coating process performance",
      "Collaborated with production engineers and operators to troubleshoot coating defects using Braincube and PI Vision",
      "Conducted LSV root cause analysis across 17 defect events, identifying gravure roll speed differentials as primary cause",
      "Developed weekly SQC executive reports tracking viscosity, coatweight, and glycol metrics across 3 coating lines",
      "Created operator performance benchmarking using I-MR control charts; identified 5 operators for targeted training via Pareto analysis",
      "Implemented 5S workplace organization, developing audit checklists and standardized procedures",
      "Authored co-op onboarding framework documenting 68+ tasks across 8-day training program with interactive HTML portal",
    ],
  },
  {
    title: "Assistant Engineer",
    department: "Manufacturing Operations",
    company: "Raghav Kitchen Industries",
    location: "Faridabad, India",
    period: "Mar 2022 – Dec 2023",
    highlights: [
      "Spearheaded process optimization, reducing production costs by 8% through material waste analysis and streamlined machine operations",
      "Designed and optimized AutoCAD layouts for stainless steel kitchen equipment production",
      "Implemented DFMEA techniques, improving reliability and reducing defects by 5% in fabricated products",
    ],
    expandedHighlights: [
      "Optimized operations of welding, shearing, bending, drilling, and buffing machines for high-precision manufacturing",
      "Translated customer specifications into production-ready drawings, reducing revision cycles between engineering and shop floor",
    ],
  },
  {
    title: "Graduate Engineer Trainee",
    department: "Production Planning & Control",
    company: "MAT Brakes India Private Limited",
    location: "Sonipat, India",
    period: "Jul 2021 – Nov 2021",
    highlights: [
      "Streamlined material flow, boosting production efficiency by 4% and minimizing delays in brake pad manufacturing",
      "Used SAP PP and Excel to manage production schedules, track inventory, and ensure material availability",
      "Performed Gemba walks to identify bottlenecks and improved processes with Kanban methodology",
    ],
    expandedHighlights: [
      "Led a team of six, coordinating workflow and resource allocation to enhance productivity and meet targets",
    ],
  },
  {
    title: "Intern",
    department: "Manufacturing Operations",
    company: "GSK (GlaxoSmithKline)",
    location: "Sonipat, India",
    period: "Jul 2019 – Aug 2019",
    highlights: [
      "Improved raw material handling workflows, improving productivity and efficiency in pharmaceutical manufacturing",
      "Advanced procurement processes, reducing administrative inefficiencies and strengthening supplier relationships",
    ],
    expandedHighlights: [],
  },
];

const ExperienceCard = ({ exp, i, isInView }: { exp: typeof experiences[0]; i: number; isInView: boolean }) => {
  const [expanded, setExpanded] = useState(false);
  const hasMore = exp.expandedHighlights.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: i * 0.15, duration: 0.5 }}
      className="relative md:pl-14"
    >
      {/* Timeline dot */}
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
            {expanded && exp.expandedHighlights.map((h, j) => (
              <motion.li
                key={`exp-${j}`}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0 shadow-sm shadow-primary/50" />
                {h}
              </motion.li>
            ))}
          </ul>
          {hasMore && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-4 flex items-center gap-1 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
            >
              {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              {expanded ? "Show less" : `Show ${exp.expandedHighlights.length} more`}
            </button>
          )}
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
