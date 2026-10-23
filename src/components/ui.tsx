import { motion } from "framer-motion";
import { fadeUp } from "./motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export const Reveal = ({ children, className, delay = 0 }: RevealProps) => (
  <motion.div
    className={className}
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-80px" }}
    transition={{ delay }}
  >
    {children}
  </motion.div>
);

type SectionHeadingProps = {
  index: string;
  label: string;
  title: ReactNode;
  subtitle?: string;
};

export const SectionHeading = ({ index, label, title, subtitle }: SectionHeadingProps) => (
  <Reveal className="section-head">
    <span className="section-label">
      {index} · {label}
    </span>
    <h2 className="section-title">{title}</h2>
    {subtitle && <p className="section-subtitle">{subtitle}</p>}
  </Reveal>
);
