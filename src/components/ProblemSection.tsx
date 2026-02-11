'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { DollarSign, Hourglass, Layers } from 'lucide-react';
import TiltCard from './TiltCard';

const problems = [
  {
    icon: DollarSign,
    title: 'Redundant Labor',
    description: "Your payroll is your biggest expense. If 20% of your team's week is spent on repetitive administrative tasks, you are effectively burning 20% of your payroll budget.",
    from: { x: -60, y: 20, rotate: -3 },
  },
  {
    icon: Hourglass,
    title: 'Opportunity Cost',
    description: 'Speed is a feature. Every hour a lead sits in an inbox without a response, the chance of closing that deal drops by 50%. Slow workflows lose customers.',
    from: { x: 0, y: 60, rotate: 0 },
  },
  {
    icon: Layers,
    title: 'Fragile Processes',
    description: "What happens if your office manager quits tomorrow? If your 'process' lives in someone's head instead of code, your business is one resignation away from chaos.",
    from: { x: 60, y: 20, rotate: 3 },
  }
];

function ProblemCard({ problem, index }: { problem: typeof problems[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  
  const IconComponent = problem.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: problem.from.x, y: problem.from.y, rotate: problem.from.rotate }}
      animate={isInView 
        ? { opacity: 1, x: 0, y: 0, rotate: 0 } 
        : { opacity: 0, x: problem.from.x, y: problem.from.y, rotate: problem.from.rotate }
      }
      transition={{ 
        duration: 0.7, 
        delay: index * 0.15, 
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <TiltCard 
        className="apple-card p-8 overflow-hidden h-full"
        tiltIntensity={8}
        glowColor="rgba(240, 145, 141, 0.12)"
      >
        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <div className="w-12 h-12 rounded-2xl mb-6 flex items-center justify-center bg-[var(--accent-coral)]/10">
            <IconComponent className="w-6 h-6 text-[var(--accent-coral)]" />
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">{problem.title}</h3>

          {/* Description */}
          <p className="text-[var(--text-secondary)] leading-relaxed text-sm">{problem.description}</p>
        </div>
      </TiltCard>
    </motion.div>
  );
}

export default function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="problem" className="py-24 px-6 bg-[var(--background-secondary)]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header — slides in from right */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-[var(--accent-coral)] uppercase tracking-wide mb-3">
            The Problem
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[var(--text-primary)]">
            Invisible enemies are costing you
          </h2>
        </motion.div>

        {/* Problem Cards Grid — each card enters from different direction */}
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <ProblemCard key={index} problem={problem} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
