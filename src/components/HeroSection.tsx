import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ArrowDown, Mail, ExternalLink, Phone } from "lucide-react";
import pankajPhoto from "@/assets/pankaj-photo.jpg";

const metrics = [
  { value: 76, prefix: "$", suffix: "K+", label: "Projected Annual Savings" },
  { value: 18, prefix: "", suffix: "%", label: "Validated Waste Reduction" },
  { value: 339, prefix: "", suffix: "", label: "Startup Events Analyzed" },
  { value: 100, prefix: "", suffix: "K+", label: "Data Rows Processed" },
];

const AnimatedCounter = ({ value, prefix, suffix, inView }: { value: number; prefix: string; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = value / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return <span>{prefix}{count}{suffix}</span>;
};

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="relative min-h-screen flex items-center section-padding pt-24 overflow-hidden" ref={ref}>
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      
      {/* Radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left content — 3 cols */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              <span className="text-sm font-medium text-primary tracking-wide">
                Process Engineer · Six Sigma Green Belt
              </span>
            </motion.div>

            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.1] mb-6">
              Pankaj Bose
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4 max-w-xl">
              Industrial engineer driving{" "}
              <span className="text-foreground font-medium">measurable process improvements</span>{" "}
              in high-volume manufacturing. Hands-on across{" "}
              <span className="text-foreground font-medium">paper coating, discrete fabrication, and automotive</span>.
            </p>

            <p className="text-sm text-muted-foreground mb-10 max-w-xl">
              MS Industrial Engineering · Northeastern University · GPA 3.7/4.0 · May 2026
            </p>

            <div className="flex flex-wrap gap-3 mb-14">
              <a
                href="mailto:bosepankaj.ie@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 transition-all duration-300"
              >
                <Mail size={16} />
                Get in Touch
              </a>
              <a
                href="https://linkedin.com/in/pankaj-bose-95599a205"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium text-sm text-foreground hover:bg-secondary hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                <ExternalLink size={16} />
                LinkedIn
              </a>
              <a
                href="tel:+18573973680"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium text-sm text-foreground hover:bg-secondary hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                <Phone size={16} />
                (857) 397-3680
              </a>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {metrics.map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.12, duration: 0.5 }}
                  className="card-3d p-4 text-center group flex flex-col items-center justify-center min-h-[90px]"
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary font-heading relative z-10 leading-tight">
                    <AnimatedCounter value={m.value} prefix={m.prefix} suffix={m.suffix} inView={isInView} />
                  </div>
                  <div className="text-[11px] text-muted-foreground mt-2 leading-tight relative z-10">
                    {m.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — photo — 2 cols */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 flex justify-center lg:justify-end"
          >
            <div className="relative group" style={{ perspective: "800px" }}>
              <div className="w-72 h-80 md:w-80 md:h-[420px] rounded-2xl overflow-hidden border border-border/50 shadow-2xl shadow-black/30 transition-transform duration-500 group-hover:scale-[1.02]">
                <img
                  src={pankajPhoto}
                  alt="Pankaj Bose - Process Engineer"
                  className="w-full h-full object-cover object-top"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0, duration: 0.5, type: "spring" }}
                className="absolute -bottom-3 -left-4 bg-primary text-primary-foreground px-4 py-2.5 rounded-xl text-sm font-semibold shadow-xl shadow-primary/20 animate-float"
                style={{ animationDelay: "0s" }}
              >
                ✦ Six Sigma Green Belt
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
                className="absolute -top-3 -right-3 bg-card border border-border px-3 py-2 rounded-xl text-xs font-bold text-foreground shadow-xl animate-float"
                style={{ animationDelay: "2s" }}
              >
                3 Industries
              </motion.div>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="flex items-center justify-center gap-2 text-muted-foreground mt-8"
          >
            <span className="text-xs tracking-[0.3em] uppercase">Scroll</span>
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
              <ArrowDown size={16} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
