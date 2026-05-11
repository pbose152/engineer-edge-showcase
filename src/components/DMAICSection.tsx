import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronRight, CheckCircle2, Search, BarChart3, Users, Wrench, BookOpen, TrendingDown } from "lucide-react";
import { useTilt } from "@/hooks/useTilt";
import sappi3uc from "@/assets/sappi-3uc.jpg";

const phases = [
  {
    id: "define",
    label: "Define",
    summary: "Scoped the project and locked the baseline.",
    details: [
      "Targeted the 3UC UltraCast coater after prior-year startup waste data ranked it the highest cost driver",
      "Defined project scope: reduce startup material waste on 3UC coater specifically",
      "Set measurable target tied to NET_LBS reduction with quantifiable annual savings",
      "Aligned project charter with operations leadership before kickoff",
    ],
  },
  {
    id: "measure",
    label: "Measure",
    summary: "Pulled the data the line was already generating.",
    details: [
      "Pulled 339 startup events and 100,000+ rows of production data from Braincube and PI Vision",
      "Established baseline NET_LBS waste profile per startup across operators, shifts, and grades",
      "Validated data quality and removed outlier events caused by unrelated line stops",
    ],
  },
  {
    id: "analyze",
    label: "Analyze",
    summary: "Found what was actually driving the variation.",
    details: [
      "Ran ANOVA on shift, operator, and product grade effects (p=0.895 for shift effect)",
      "Correlation analysis on NET_LBS vs Time returned r=0.905, startup duration was the lever",
      "Identified AutoTurnup as the critical control variable, accounting for ~12% of waste",
    ],
  },
  {
    id: "improve",
    label: "Improve",
    summary: "Built width-specific targets the operators could hit.",
    details: [
      "Developed AutoTurnup targets by product width: 56\" at 186 lbs, 65.5\" at 198 lbs, 86.5\" at 265 lbs",
      "Validated 18% startup waste reduction projection against the new targets",
      "Translated to $76,000 in projected annual savings, signed off by operations leadership",
    ],
  },
  {
    id: "control",
    label: "Control",
    summary: "Drafted the control plan; full Control phase ran past my co-op end date.",
    details: [
      "Built the SPC monitoring plan and reaction protocol for AutoTurnup deviations",
      "Documented standardized startup procedure for operator handoff",
      "Recommended c-charts for ongoing waste tracking; full Control phase implementation continued under the Sappi team after my co-op ended",
    ],
  },
];

const sappiProjects = [
  {
    icon: Search,
    title: "LSV Event Root Cause Analysis",
    metrics: ["17 defect events", "2 product lines"],
    description: "Root cause investigation across 17 LSV (Linear String Voids) defect events on the coating line. Identified gravure roll speed differentials as the primary cause using Braincube and PI Vision.",
    outcome: "Findings narrowed the failure modes and informed the corrective action plan.",
    tags: ["Root Cause Analysis", "Braincube", "PI Vision"],
  },
  {
    icon: BarChart3,
    title: "SQC Executive Reporting Framework",
    metrics: ["3 coaters", "15-point rolling charts"],
    description: "Weekly SQC reports tracking viscosity, coatweight, and glycol metrics across 3 coating lines using 15-point rolling averages.",
    outcome: "Adopted by the UltraCast leadership team for weekly review cadence.",
    tags: ["Quality Metrics", "Executive Reports", "Viscosity / Coatweight / Glycol"],
  },
  {
    icon: Users,
    title: "Operator Performance Analytics",
    metrics: ["15 operators benchmarked", "20% gap", "5 training targets"],
    description: "Benchmarked 15 operators on startup waste using I-MR charts and Pareto analysis. Surfaced a 20% performance gap and built five operator-specific training targets from the data.",
    outcome: "Surfaced a 20% performance gap and produced five operator-specific training targets.",
    tags: ["I-MR Charts", "Pareto Analysis", "Operator Training"],
  },
  {
    icon: Wrench,
    title: "5S Implementation",
    metrics: ["2 areas", "27-item audit", "8-week rollout"],
    description: "Set up 5S audit checklists and visual standards across UltraCast coating lines, sustained through quarterly Lean reviews.",
    outcome: "Audit checklists held through quarterly Lean reviews.",
    tags: ["Lean", "5S", "Audit Checklists"],
  },
  {
    icon: BookOpen,
    title: "Co-op Onboarding Program",
    metrics: ["8-day program", "68+ tasks"],
    description: "Authored onboarding framework with interactive HTML portal documenting 68+ tasks across an 8-day program. SOPs, training guides, daily quality reports, and weekly executive summaries included.",
    outcome: "Cut onboarding ramp time roughly 50%; still in use by incoming co-ops.",
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
  const { ref, onMouseMove, onMouseLeave } = useTilt(5);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: i * 0.08, duration: 0.5 }}
      className="h-full"
    >
      <div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="card-3d p-6 h-full min-h-[340px] flex flex-col"
      >
        <div className="relative z-10 flex flex-col h-full">
          <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
            <proj.icon size={20} className="text-primary" />
          </div>
          <h3 className="font-heading text-lg text-foreground mb-2">{proj.title}</h3>

          <div className="flex flex-wrap gap-1.5 mb-3">
            {proj.metrics.map((m) => (
              <span key={m} className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-semibold border border-primary/20">
                {m}
              </span>
            ))}
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">{proj.description}</p>

          <p className="text-sm text-foreground/90 leading-relaxed mt-3 pt-3 border-t border-border/50 italic">
            {proj.outcome}
          </p>

          <div className="flex flex-wrap gap-2 mt-4 mt-auto pt-4">
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

const DMAICSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activePhase, setActivePhase] = useState("define");

  const current = phases.find((p) => p.id === activePhase)!;

  return (
    <section id="dmaic" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
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

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <AnimatedStat val="$76K+" label="Projected Annual Savings" inView={isInView} delay={0.1} />
          <AnimatedStat val="18%" label="Validated Waste Reduction" inView={isInView} delay={0.2} />
          <AnimatedStat val="339" label="Events Analyzed" inView={isInView} delay={0.3} />
          <AnimatedStat val="~12%" label="AutoTurnup Impact" inView={isInView} delay={0.4} />
        </div>

        {/* Image row */}
        <motion.figure
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="card-3d p-3 mx-auto mb-12 w-full lg:w-4/5"
        >
          <div className="rounded-xl overflow-hidden border border-border/50 bg-background/40">
            <img
              src={sappi3uc}
              alt="Pankaj at Sappi North America, Westbrook, Maine"
              className="w-full h-auto max-h-[480px] object-contain"
              loading="lazy"
            />
          </div>
          <figcaption className="text-xs text-muted-foreground text-center mt-3 px-2 pb-1">
            Sappi North America · Westbrook, Maine
          </figcaption>
        </motion.figure>

        {/* DMAIC Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="flex gap-1.5 mb-6 overflow-x-auto pb-2">
            {phases.map((phase, i) => {
              const active = activePhase === phase.id;
              return (
                <button
                  key={phase.id}
                  onClick={() => setActivePhase(phase.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 whitespace-nowrap border ${
                    active
                      ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20 scale-[1.03]"
                      : "bg-card text-white/70 border-primary/30 hover:text-foreground hover:border-primary/60 hover:bg-secondary"
                  }`}
                >
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    active ? "bg-primary-foreground/20" : "bg-primary text-primary-foreground"
                  }`}>
                    {i + 1}
                  </span>
                  {phase.label}
                  {i < 4 && <ChevronRight size={14} className="text-inherit opacity-40" />}
                </button>
              );
            })}
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

        <div className="section-divider my-16" />

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
            Five additional projects completed during the 6-month co-op.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-5">
          {sappiProjects.map((proj, i) => {
            const span =
              i < 3
                ? "lg:col-span-2"
                : i === 3
                  ? "lg:col-span-2 lg:col-start-2"
                  : "lg:col-span-2";
            return (
              <div key={proj.title} className={`md:col-span-1 ${span}`}>
                <ProjectCard proj={proj} i={i} isInView={isInView} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DMAICSection;
