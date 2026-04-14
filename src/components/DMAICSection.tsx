import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronRight, CheckCircle2 } from "lucide-react";

const phases = [
  {
    id: "define",
    label: "Define",
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
    summary: "Built sustainability systems for lasting impact",
    details: [
      "Built SPC dashboards and I-MR control charts for ongoing monitoring",
      "Developed standardized operating procedures for startup processes",
      "Created weekly SQC executive reports tracking viscosity, coatweight, and glycol metrics",
      "Established process capability baselines for sustained stability across 3 coating lines",
    ],
  },
];

const AnimatedStat = ({ val, label, inView }: { val: string; label: string; inView: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, type: "spring" }}
      className="glass-card-elevated p-4 text-center hover:-translate-y-1 transition-transform duration-300"
    >
      <div className="text-xl md:text-2xl font-bold text-primary font-heading">{val}</div>
      <div className="text-xs text-muted-foreground mt-1">{label}</div>
    </motion.div>
  );
};

const DMAICSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activePhase, setActivePhase] = useState("define");

  const current = phases.find((p) => p.id === activePhase)!;

  return (
    <section id="dmaic" className="section-padding bg-secondary/50" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Featured Project</span>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mt-2">
            Startup Waste Reduction at Sappi
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl text-base">
            Six Sigma DMAIC project on the 3UC UltraCast coating line. Led from Define through Improve phase with minimal supervision.
          </p>
        </motion.div>

        {/* Results banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <AnimatedStat val="$76K+" label="Projected Annual Savings" inView={isInView} />
          <AnimatedStat val="18%" label="Validated Waste Reduction" inView={isInView} />
          <AnimatedStat val="339" label="Events Analyzed" inView={isInView} />
          <AnimatedStat val="~12%" label="AutoTurnup Impact" inView={isInView} />
        </div>

        {/* DMAIC Navigator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {/* Phase tabs */}
          <div className="flex gap-1 mb-6 overflow-x-auto pb-2">
            {phases.map((phase, i) => (
              <button
                key={phase.id}
                onClick={() => setActivePhase(phase.id)}
                className={`flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                  activePhase === phase.id
                    ? "bg-primary text-primary-foreground shadow-md scale-[1.02]"
                    : "bg-card text-muted-foreground hover:text-foreground hover:bg-muted hover:scale-[1.01]"
                }`}
              >
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${
                  activePhase === phase.id ? "bg-primary-foreground/20" : "bg-muted"
                }`}>
                  {i + 1}
                </span>
                {phase.label}
                {i < 4 && <ChevronRight size={14} className="text-inherit opacity-50" />}
              </button>
            ))}
          </div>

          {/* Phase content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePhase}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="glass-card-elevated p-6 md:p-8"
            >
              <h3 className="font-heading text-2xl text-foreground mb-2">{current.label}</h3>
              <p className="text-muted-foreground mb-6">{current.summary}</p>
              <ul className="space-y-3">
                {current.details.map((d, j) => (
                  <motion.li
                    key={j}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: j * 0.08 }}
                    className="flex items-start gap-3 text-sm text-foreground"
                  >
                    <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    {d}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default DMAICSection;
