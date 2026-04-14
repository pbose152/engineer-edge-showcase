import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, ExternalLink, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background pointer-events-none" />
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold text-primary uppercase tracking-[0.3em]">Let's Connect</span>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mt-3 mb-4">
            Available May 2026
          </h2>
          <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
            Seeking full-time Process Engineer, Quality Engineer, or Continuous Improvement roles in manufacturing.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:bosepankaj.ie@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 transition-all duration-300"
            >
              <Mail size={16} />
              bosepankaj.ie@gmail.com
            </a>
            <a
              href="tel:+18573973680"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium text-sm text-foreground hover:bg-secondary hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              <Phone size={16} />
              (857) 397-3680
            </a>
            <a
              href="https://linkedin.com/in/pankaj-bose-95599a205"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium text-sm text-foreground hover:bg-secondary hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-8">
            <MapPin size={14} />
            Boston, Massachusetts
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
