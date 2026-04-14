import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Master of Science",
    field: "Industrial Engineering",
    school: "Northeastern University",
    period: "Jan 2024 – May 2026",
    location: "Boston, MA",
  },
  {
    degree: "Bachelor of Engineering",
    field: "Mechanical Engineering",
    school: "Deenbandhu Chotu Ram University of Science & Technology",
    period: "2016 – 2020",
    location: "Haryana, India",
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-secondary/50" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Education</span>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mt-2">Academic Background</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((ed, i) => (
            <motion.div
              key={ed.school}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="glass-card-elevated p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg text-foreground">{ed.degree}</h3>
                  <p className="text-sm text-primary font-medium">{ed.field}</p>
                  <p className="text-sm text-muted-foreground mt-1">{ed.school}</p>
                  <p className="text-xs text-muted-foreground mt-1">{ed.period} · {ed.location}</p>
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
