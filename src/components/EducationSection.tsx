import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { GraduationCap, ChevronDown, ChevronUp } from "lucide-react";

const education = [
  {
    degree: "Master of Science",
    field: "Industrial Engineering",
    school: "Northeastern University",
    period: "Jan 2024 – May 2026",
    location: "Boston, MA",
    gpa: "3.7/4.0",
    coursework: [
      "Statistical Quality Control", "Data Mining in Engineering", "Lean Concepts and Applications",
      "Supply Chain Engineering", "Logistics Warehousing and Scheduling",
      "Engineering Probability and Statistics", "Deterministic Operations Research",
    ],
  },
  {
    degree: "Bachelor of Technology",
    field: "Mechanical Engineering",
    school: "Deenbandhu Chhotu Ram University of Science and Technology",
    period: "2017 – 2021",
    location: "Sonipat, India",
    gpa: "",
    coursework: [],
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showCoursework, setShowCoursework] = useState(false);

  return (
    <section id="education" className="section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-xs font-semibold text-primary uppercase tracking-[0.3em]">Education</span>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mt-3">Academic Background</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((ed, i) => (
            <motion.div
              key={ed.school}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="card-3d p-6"
            >
              <div className="relative z-10 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={20} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl text-foreground">{ed.degree}</h3>
                  <p className="text-sm text-primary font-medium">{ed.field}</p>
                  <p className="text-sm text-muted-foreground mt-1">{ed.school}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {ed.period} · {ed.location}
                    {ed.gpa && <span className="ml-2 font-semibold text-foreground">GPA: {ed.gpa}</span>}
                  </p>
                  {ed.coursework.length > 0 && (
                    <div className="mt-3">
                      <button
                        onClick={() => setShowCoursework(!showCoursework)}
                        className="flex items-center gap-1 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
                      >
                        {showCoursework ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                        {showCoursework ? "Hide coursework" : "View relevant coursework"}
                      </button>
                      {showCoursework && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="flex flex-wrap gap-1.5 mt-2"
                        >
                          {ed.coursework.map((c) => (
                            <span key={c} className="text-xs px-2 py-1 rounded-full bg-secondary text-muted-foreground border border-border">
                              {c}
                            </span>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
