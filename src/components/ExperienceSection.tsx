import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Process Engineer Co-op",
    company: "Sappi North America",
    location: "Westbrook, Maine",
    period: "Jul 2025 – Jan 2026",
    highlights: [
      "Led DMAIC project achieving 18% startup waste reduction with $76K projected annual savings",
      "Analyzed 100K+ rows of production data from PI Vision and Braincube",
      "Developed SPC control charts and process capability analyses in Minitab",
      "Implemented 5S workplace organization and designed audit checklists",
      "Created structured onboarding framework and SOPs for quality reporting",
    ],
  },
  {
    title: "Assistant Engineer",
    company: "Raghav Kitchen Industries",
    location: "Faridabad, India",
    period: "Mar 2022 – Dec 2023",
    highlights: [
      "Optimized AutoCAD production layouts for stainless steel fabrication",
      "Achieved 8% production cost reduction through material waste analysis",
      "Applied DFMEA to reduce fabrication defects by 5%",
    ],
  },
  {
    title: "Graduate Engineering Trainee",
    company: "MAT Brakes India Private Limited",
    location: "Sonipat, India",
    period: "Jul 2021 – Nov 2021",
    highlights: [
      "Improved production efficiency by 4% through material flow streamlining",
      "Managed production scheduling and inventory using SAP PP",
      "Conducted Gemba walks and implemented Kanban improvements",
    ],
  },
];

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
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Career</span>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mt-2">Experience</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-[2px] bg-border hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="relative md:pl-14"
              >
                {/* Timeline dot */}
                <div className="absolute left-[12px] top-1 w-[16px] h-[16px] rounded-full border-[3px] border-primary bg-background hidden md:block" />

                <div className="glass-card-elevated p-6">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-heading text-xl text-foreground">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-primary font-medium mt-1">
                        <Briefcase size={14} />
                        {exp.company}
                      </div>
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      <div className="flex items-center gap-1"><Calendar size={12} /> {exp.period}</div>
                      <div className="flex items-center gap-1 mt-1"><MapPin size={12} /> {exp.location}</div>
                    </div>
                  </div>
                  <ul className="space-y-2 mt-4">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
