import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronRight, CheckCircle2, Search, BarChart3, Users, Wrench, BookOpen, TrendingDown, Zap } from "lucide-react";
import { useTilt } from "@/hooks/useTilt";

/* ─── DMAIC Phases ─── */
const phases = [
  {
    id: "define",
    label: "Define",
    color: "bg-primary",
    summary: "Scoped the problem and set project goals",
    details: [
      "Identified startup waste on the 3UC UltraCast coating line as a key cost driver",
      "Defined project scope: reduce startup material waste and associated costs",
      "Set target: measurable waste reduction with quantifiable savings",
      "Created project charter with stakeholder alignment",
    ],
  },
  {
    id: "measure",
    label: "Measure",
    color: "bg-accent",
    summary: "Established baselines from production data",
    details: [
      "Collected and cleaned 100,000+ rows from PI Vision and Braincube",
      "Analyzed 339 startup events across multiple product lines",
      "Established statistical baselines for waste metrics using Python and Minitab",
      "Mapped key process parameters: roll speed, coatweight, viscosity",
    ],
  },
  {
    id: "analyze",
    label: "Analyze",
    color: "bg-primary",
    summary: "Identified root causes through statistical analysis",
    details: [
      "Performed ANOVA testing (p=0.895 for shift effect — no significant difference)",
      "Correlation analysis: r=0.905 for NET_LBS vs Time, confirming linear relationship",
      "Identified AutoTurnup as critical variable reducing waste by ~12%",
      "Analyzed centerlining data to find root causes of startup inefficiencies",
    ],
  },
  {
    id: "improve",
    label: "Improve",
    color: "bg-accent",
    summary: "Implemented solutions and validated results",
    details: [
      "Created width-specific targets: 56\" at 186 lbs, 65.5\" at 198 lbs, 86.5\" at 265 lbs",
      "Developed operator training recommendations based on Pareto analysis",
      "Validated 18% waste reduction on one coater",
      "Projected $76K+ in annual cost savings",
    ],
  },
  {
    id: "control",
    label: "Control",
    color: "bg-primary",
    summary: "Built sustainability systems for lasting impact",
    details: [
      "Built SPC dashboards and I-MR control charts for ongoing monitoring",
      "Developed standardized operating procedures for startup processes",
      "Created weekly SQC executive reports tracking viscosity, coatweight, and glycol metrics",
      "Established process capability baselines for sustained stability across 3 coating lines",
    ],
  },
];

/* ─── Sappi Other Projects ─── */
const sappiProjects = [
  {
    icon: Search,
    title: "LSV Event Root Cause Analysis",
    metrics: ["17 defect events", "2 product lines"],
    description: "Root cause investigation across 17 LSV defect events on the coating line.",
    expandedDesc: "Identified gravure roll speed differentials as the primary cause of LSV coating defects. Collaborated with production engineers using Braincube and PI Vision for real-time process data analysis across 2 product lines.",
    tags: ["Root Cause Analysis", "Braincube", "PI Vision"],
  },
  {
    icon: BarChart3,
    title: "SQC Executive Reporting Framework",
    metrics: ["3 coaters", "15-point rolling charts"],
    description: "Weekly quality metrics tracking across 3 coating lines for leadership.",
    expandedDesc: "Developed weekly SQC executive reports tracking viscosity, coatweight, and glycol metrics using 15-point rolling averages. Provided leadership with actionable insights for coating process decisions across all 3 coaters.",
    tags: ["Quality Metrics", "Executive Reports", "Viscosity/Coatweight/Glycol"],
  },
  {
    icon: Users,
    title: "Operator Performance Analytics",
    metrics: ["15+ operators benchmarked", "20% waste gap", "5 training targets"],
    description: "Performance benchmarking system using I-MR charts and Pareto analysis.",
    expandedDesc: "Benchmarked 15+ operators using I-MR control charts. Identified a 20% waste gap between top and bottom performers. Used Pareto analysis to select 5 operators for targeted training intervention.",
    tags: ["I-MR Charts", "Pareto Analysis", "Operator Training"],
  },
  {
    icon: Wrench,
    title: "5S Implementation",
    metrics: ["2 areas", "27-item audit", "8-week rollout"],
    description: "Lean manufacturing initiative across the UltraCast department.",
    expandedDesc: "Implemented 5S workplace organization across 2 areas with a 27-item audit checklist. Completed full rollout over 8 weeks with standardized procedures for sustained compliance.",
    tags: ["Lean", "5S", "Audit Checklists"],
  },
  {
    icon: BookOpen,
    title: "Co-op Onboarding Program",
    metrics: ["8-day program", "68+ tasks", "~50% faster onboarding"],
    description: "Structured training program with interactive HTML portal.",
    expandedDesc: "Authored comprehensive onboarding framework with interactive HTML portal. Documented 68+ tasks across an 8-day program, standardizing SOPs, training guides, daily quality reports, and weekly executive summaries. Estimated ~50% faster onboarding for future co-ops.",
    tags: ["HTML Portal", "SOPs", "Training Framework"],
  },
];

const AnimatedStat = ({ val, label, inView, delay = 0 }: { val: string; label: string; inView: boolean; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={inView ? { opacity: 1, scale: 1 } : {}}
    transition={{ duration: 0.5, delay, type: "spring" }}
    className="card-3d p-5 text-center group"
  >
    <div className="relative z-10">
      <div className="text-2xl md:text-3xl font-bold text-primary font-heading">{val}</div>
      <div className="text-xs text-muted-foreground mt-1.5">{label}</div>
    </div>
  </motion.div>
);

const ProjectCard = ({ proj, i, isInView }: { proj: typeof sappiProjects[0]; i: number; isInView: boolean }) => {
  const [expanded, setExpanded] = useState(false);
  const { ref, onMouseMove, onMouseLeave } = useTilt(5);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: i * 0.08, duration: 0.5 }}
    >
      <div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="card-3d p-6 h-full cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="relative z-10">
          <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
            <proj.icon size={20} className="text-primary" />
          </div>
          <h3 className="font-heading text-lg text-foreground mb-2">{proj.title}</h3>

          {/* Metric pills */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {proj.metrics.map((m) => (
              <span key={m} className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-semibold border border-primary/20">
                {m}
              </span>
            ))}
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">
            {expanded ? proj.expandedDesc : proj.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            {proj.tags.map((tag) => (
              <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-muted-foreground border border-border">
                {tag}
              </span>
            ))}
          </div>

          <button className="mt-3 flex items-center gap-1 text-xs font-medium text-primary">
            <Zap size={12} />
            {expanded ? "Less" : "Details"}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const DMAICSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activePhase, setActivePhase] = useState("define");

  const current = phases.find((p) => p.id === activePhase)!;

  return (
    <section id="dmaic" className="section-padding relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="text-xs font-semibold text-primary uppercase tracking-[0.3em]">Featured Project</span>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mt-3">
            Startup Waste Reduction
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl text-base">
            Six Sigma DMAIC project on the 3UC UltraCast coating line at Sappi North America. Led from Define through Improve phase with minimal supervision.
          </p>
        </motion.div>

        {/* Results banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <AnimatedStat val="$76K+" label="Projected Annual Savings" inView={isInView} delay={0.1} />
          <AnimatedStat val="18%" label="Validated Waste Reduction" inView={isInView} delay={0.2} />
          <AnimatedStat val="339" label="Events Analyzed" inView={isInView} delay={0.3} />
          <AnimatedStat val="~12%" label="AutoTurnup Impact" inView={isInView} delay={0.4} />
        </div>

        {/* DMAIC Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="flex gap-1.5 mb-6 overflow-x-auto pb-2">
            {phases.map((phase, i) => (
              <button
                key={phase.id}
                onClick={() => setActivePhase(phase.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 whitespace-nowrap border ${
                  activePhase === phase.id
                    ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20 scale-[1.03]"
                    : "bg-card text-muted-foreground border-border hover:text-foreground hover:border-primary/30 hover:bg-secondary"
                }`}
              >
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                  activePhase === phase.id ? "bg-primary-foreground/20" : "bg-muted"
                }`}>
                  {i + 1}
                </span>
                {phase.label}
                {i < 4 && <ChevronRight size={14} className="text-inherit opacity-40" />}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activePhase}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="card-3d p-6 md:p-8"
            >
              <div className="relative z-10">
                <h3 className="font-heading text-3xl text-foreground mb-2">{current.label}</h3>
                <p className="text-muted-foreground mb-6">{current.summary}</p>
                <ul className="space-y-3">
                  {current.details.map((d, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: j * 0.08 }}
                      className="flex items-start gap-3 text-sm text-foreground"
                    >
                      <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" />
                      {d}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Divider */}
        <div className="section-divider my-16" />

        {/* Other Sappi Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-2">
            <TrendingDown size={20} className="text-accent" />
            <span className="text-xs font-semibold text-accent uppercase tracking-[0.3em]">Sappi Portfolio</span>
          </div>
          <h3 className="font-heading text-3xl md:text-4xl text-foreground">
            Additional Contributions
          </h3>
          <p className="text-sm text-muted-foreground mt-2">
            Five additional projects completed during the 6-month co-op, each delivering measurable impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {sappiProjects.map((proj, i) => (
            <ProjectCard key={proj.title} proj={proj} i={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DMAICSection;
