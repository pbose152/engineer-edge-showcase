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
    initialVisible: 5,
    highlights: [
      "Validated $76,000 in projected annual savings on the 3UC UltraCast coater by leading a Six Sigma DMAIC project from Define through Improve as the primary co-op engineer; established an 18% startup waste reduction target and aligned operations leadership behind it before handing off to the Sappi team for the Control phase.",
      "Identified AutoTurnup as the critical control variable driving roughly 12% of startup waste, running ANOVA across operator, shift, and grade effects on 339 startup events plus correlation analysis on 100,000+ rows of NET_LBS production data in Python and Minitab; finding became the basis for width-specific targets the operators could hit.",
      "Translated analytical findings into operator-actionable controls by setting width-specific AutoTurnup targets adopted into 3UC startup procedure: 56\" at 186 lbs, 65.5\" at 198 lbs, 86.5\" at 265 lbs.",
      "Surfaced special cause variation in coatweight, viscosity, and chemistry data across UltraCast coater lines (1UC, 3UC, 4UC) by building SPC charts and capability analyses in Minitab on a weekly cycle; gave the leadership team a stable read on process drift.",
      "Accelerated coating defect investigations by running real-time monitoring on Braincube and PI Vision dashboards; turned production data the line was already generating into diagnostic signal during shift handoffs.",
      "Investigated 17 LSV defect events across two coating lines, narrowing failure modes through Pareto analysis and Braincube data pulls; findings informed the corrective action plan owned by the Sappi quality team.",
      "Built the SQC Executive Reporting Framework adopted by UltraCast leadership: weekly quality metrics (viscosity, coatweight, glycol) tracked on 15-point rolling charts across three coaters (1UC, 3UC, 4UC) for review cadence.",
      "Surfaced a 20% performance gap across 15 operators on startup waste using I-MR charts and Pareto analysis in Minitab; produced five operator-specific training targets the line lead used for coaching conversations.",
      "Sustained 5S adoption across the UltraCast department by setting up audit checklists, visual standards, and an 8-week rollout plan covering two areas with a 27-item audit; quarterly Lean reviews confirmed the standard held after my co-op ended.",
      "Authored the co-op onboarding program (8-day plan, 68+ structured tasks, interactive HTML portal) plus SOPs for daily quality reports and weekly executive summaries; cut onboarding ramp time roughly 50% for incoming co-ops still using the program.",
    ],
  },
  {
    title: "Assistant Engineer",
    department: "Manufacturing Operations",
    company: "Raghav Kitchen Industries",
    location: "Faridabad, India",
    period: "Mar 2022 – Dec 2023",
    initialVisible: 4,
    highlights: [
      "Cut production costs 8% across steel fabrication operations by tracing material waste and cycle time inefficiencies on the manufacturing floor; analysis showed cost concentrated in two recurring failure modes that became the focus for ongoing process work.",
      "Lowered defect rates 5% and improved first-pass yield by integrating DFMEA into fabrication workflows on recurring product variants; risk analysis caught design issues upstream before they reached the shop floor.",
      "Optimized client-to-shop-floor handoff by translating customer specifications into production-ready AutoCAD drawings on custom kitchen equipment orders; reduced rework loops between design intake and fabrication staff.",
      "Compressed design-to-production rework on recurring variants by writing standardized work instructions tied to recurring failure points; same approach scaled to new product lines as they came through the order pipeline.",
    ],
  },
  {
    title: "Graduate Engineer Trainee",
    department: "Production Planning & Control",
    company: "MAT Brakes India Private Limited",
    location: "Sonipat, India",
    period: "Jul 2021 – Nov 2021",
    initialVisible: 4,
    highlights: [
      "Lifted production efficiency 4% on the brake pad line during a 5-month rotation in Production Planning & Control by restructuring material flow; identified handoff delays between WIP stations as the primary loss point and re-sequenced station-to-station transfers.",
      "Managed daily production schedules and inventory through SAP PP, keeping materials on the line through shift changes; tightened reorder points on high-turn brake pad components to reduce stockout-driven downtime.",
      "Identified bottlenecks during Gemba walks and ran Kanban pulls that reduced WIP buildup at the bonding stage; visual signaling replaced the prior phone-call-based replenishment process.",
      "Coordinated workflow and resource allocation across a 6-person team to meet production targets, including shift planning and cross-training across multiple stations.",
    ],
  },
  {
    title: "Intern",
    department: "Horlicks Manufacturing Plant",
    company: "GSK Consumer Healthcare",
    location: "Sonipat, India",
    period: "Jul 2019 – Aug 2019",
    initialVisible: 3,
    highlights: [
      "Improved raw material handling workflows on the Horlicks production floor during a summer rotation at GSK Consumer Healthcare; suggested layout adjustments that reduced manual transfer steps in the warehouse-to-line handoff.",
      "Streamlined routine procurement steps alongside the GSK procurement team, contributing to faster turnaround on supplier paperwork and tighter coordination with regular vendors.",
      "First exposure to a regulated food and beverage manufacturing environment, including food safety and quality documentation practices that built foundational context for later Six Sigma coursework at Northeastern and quality engineering work at Sappi.",
    ],
  },
];

const ExperienceCard = ({ exp, i, isInView }: { exp: typeof experiences[0]; i: number; isInView: boolean }) => {
  const [expanded, setExpanded] = useState(false);
  const hasMore = exp.highlights.length > exp.initialVisible;
  const visible = expanded ? exp.highlights : exp.highlights.slice(0, exp.initialVisible);

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
            {visible.map((h, j) => (
              <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0 shadow-sm shadow-primary/50" />
                {h}
              </li>
            ))}
          </ul>
          {hasMore && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              {expanded ? (
                <>Show less <ChevronUp size={14} /></>
              ) : (
                <>Show {exp.highlights.length - exp.initialVisible} more <ChevronDown size={14} /></>
              )}
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
            4 industries · Paper Coating · Discrete Fabrication · Automotive Components · Pharmaceutical
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
