import { motion } from "framer-motion";
import { ArrowDown, Mail, Linkedin } from "lucide-react";
import pankajPhoto from "@/assets/pankaj-photo.jpg";

const metrics = [
  { value: "$76K+", label: "Projected Annual Savings" },
  { value: "18%", label: "Startup Waste Reduction" },
  { value: "339", label: "Startup Events Analyzed" },
  { value: "100K+", label: "Rows of Data Processed" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center section-padding pt-24">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block w-12 h-[2px] bg-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-widest">
                Process Engineer
              </span>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
              Pankaj Bose
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-4 max-w-xl">
              Industrial engineer driving <span className="text-foreground font-medium">measurable process improvements</span> on the manufacturing floor. Six Sigma Green Belt with hands-on experience in coating operations, statistical analysis, and cross-functional team leadership.
            </p>

            <p className="text-base text-muted-foreground mb-8 max-w-xl">
              MS Industrial Engineering, Northeastern University · May 2026
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
              >
                <Mail size={16} />
                Get in Touch
              </a>
              <a
                href="https://linkedin.com/in/pankaj-bose-95599a205"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium text-sm text-foreground hover:bg-secondary transition-colors"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>

            {/* Metrics strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {metrics.map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary font-heading">
                    {m.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 leading-tight">
                    {m.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-72 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden glass-card-elevated">
                <img
                  src={pankajPhoto}
                  alt="Pankaj Bose - Process Engineer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold shadow-lg">
                Six Sigma Green Belt
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs tracking-wider uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
