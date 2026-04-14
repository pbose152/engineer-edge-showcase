import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronRight, CheckCircle2 } from "lucide-react";

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
    color: "bg-primary",
    summary: "Established baselines from production data",
    details: [
      "Collected and cleaned 100,000+ rows from PI Vision and Braincube",
      "Analyzed 339 startup events across multiple product lines",
      "Established statistical baselines for waste metrics",
      "Mapped key process parameters: roll speed, coatweight, viscosity",
    ],
  },
  {
    id: "analyze",
    label: "Analyze",
    color: "bg-primary",
    summary: "Identified root causes through statistical analysis",
    details: [
      "Performed ANOVA and correlation analysis in Minitab",
      "Conducted hypothesis testing to validate factor significance",
      "Identified that AutoTurnup reduces waste by ~12%",
      "Analyzed centerlining data to find root causes of startup inefficiencies",
    ],
  },
  {
    id: "improve",
    label: "Improve",
    color: "bg-primary",
    summary: "Implemented solutions and validated results",
    details: [
      "Created width-specific targets for different product sizes",
      "Developed operator training recommendations based on data",
      "Validated 18% waste reduction on one coater",
      "Projected $76K+ in annual cost savings",
    ],
  },
  {
    id: "control",
    label: "Control",
    color: "bg-muted",
    summary: "Built sustainability systems for lasting impact",
    details: [
      "Built SPC dashboards and control charts for ongoing monitoring",
      "Developed standardized operating procedures for startup processes",
      "Created weekly executive summary reporting framework",
      "Established process capability baselines for sustained stability",
    ],
  },
];

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
        >
          {[
            { val: "$76K+", lbl: "Annual Savings" },
            { val: "18%", lbl: "Waste Reduction" },
            { val: "339", lbl: "Events Analyzed" },
            { val: "~12%", lbl: "AutoTurnup Impact" },
          ].map((m) => (
            <div key={m.lbl} className="glass-card-elevated p-4 text-center">
              <div className="text-xl md:text-2xl font-bold text-primary font-heading">{m.val}</div>
              <div className="text-xs text-muted-foreground mt-1">{m.lbl}</div>
            </div>
          ))}
        </motion.div>

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
                className={`flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all whitespace-nowrap ${
                  activePhase === phase.id
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-card text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                <span className="w-5 h-5 rounded-full bg-primary-foreground/20 flex items-center justify-center text-xs">
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
