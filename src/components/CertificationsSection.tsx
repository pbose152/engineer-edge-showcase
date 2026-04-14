import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award } from "lucide-react";
import sixSigmaBadge from "@/assets/six-sigma-badge.png";
import aiBadge from "@/assets/ai-badge.png";
import leadershipBadge from "@/assets/leadership-badge.png";

const certs = [
  {
    name: "Six Sigma Green Belt",
    org: "IISE",
    date: "October 2024",
    detail: "ID: 119171448",
    image: sixSigmaBadge,
    featured: true,
  },
  {
    name: "Graduate Leadership Institute (LEAD360)",
    org: "Northeastern University",
    date: "Spring 2026",
    detail: "Perfect Attendance",
    image: leadershipBadge,
    featured: false,
  },
  {
    name: "Applying AI Technologies to the Workplace",
    org: "Northeastern University",
    date: "September 2024",
    detail: "",
    image: aiBadge,
    featured: false,
  },
];

const additionalCerts = [
  "Professional Skills for Academic Success – Northeastern University",
  "Advanced Microsoft Excel",
  "Basics of Automobile Engineering",
  "Supply Chain Management",
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="section-padding bg-secondary/50" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Credentials</span>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mt-2">
            Certifications
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className={`glass-card-elevated p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${cert.featured ? "ring-2 ring-primary/30 relative" : ""}`}
            >
              {cert.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-semibold">
                  Featured
                </span>
              )}
              <img
                src={cert.image}
                alt={cert.name}
                className="w-24 h-24 object-contain mx-auto mb-4"
              />
              <h3 className="font-heading text-lg text-foreground mb-1">{cert.name}</h3>
              <p className="text-sm text-muted-foreground">{cert.org}</p>
              <p className="text-xs text-muted-foreground mt-1">{cert.date}</p>
              {cert.detail && (
                <p className="text-xs text-primary mt-1 font-medium">{cert.detail}</p>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {additionalCerts.map((c) => (
            <span key={c} className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-card border border-border text-muted-foreground">
              <Award size={12} className="text-primary" />
              {c}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;
