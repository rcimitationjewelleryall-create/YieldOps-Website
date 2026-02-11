'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, Map, Rocket } from 'lucide-react';
import TiltCard from './TiltCard';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'The Diagnostic',
    price: '$99',
    description: 'We observe your team to identify waste. No guesswork—just data.',
    duration: '2-3 hours',
    from: { x: 0, y: 80, scale: 0.9 },
  },
  {
    number: '02',
    icon: Map,
    title: 'The Roadmap',
    price: 'Included',
    description: 'We deliver a detailed action plan. You own it, even if you don\'t proceed.',
    duration: '48 hours',
    from: { x: 0, y: 80, scale: 0.9 },
  },
  {
    number: '03',
    icon: Rocket,
    title: 'The Build',
    price: 'Custom',
    description: 'We deploy the automation. Tested, documented, and ready to go.',
    duration: '7-14 days',
    from: { x: 0, y: 80, scale: 0.9 },
  }
];

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const IconComponent = step.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: step.from.y, scale: step.from.scale }}
      animate={isInView 
        ? { opacity: 1, y: 0, scale: 1 } 
        : { opacity: 0, y: step.from.y, scale: step.from.scale }
      }
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2, 
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <TiltCard 
        className="apple-card p-8 text-center overflow-hidden h-full"
        tiltIntensity={6}
        glowColor="rgba(232, 200, 114, 0.12)"
      >
        {/* Content */}
        <div className="relative z-10">
          {/* Step number with connecting line */}
          <div className="flex items-center justify-center mb-5">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--primary-gold)] to-[var(--accent-coral)] flex items-center justify-center">
              <span className="text-sm font-semibold text-[#1d1d1f]">{step.number}</span>
            </div>
          </div>

          {/* Icon */}
          <div className="w-12 h-12 rounded-2xl bg-[var(--primary-gold)]/10 flex items-center justify-center mx-auto mb-4">
            <IconComponent className="w-5 h-5 text-[var(--primary-gold)]" />
          </div>

          {/* Title & Price */}
          <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-1">{step.title}</h3>
          <p className="text-sm font-medium text-[var(--primary-gold)] mb-3">{step.price}</p>

          {/* Description */}
          <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">{step.description}</p>

          {/* Duration badge */}
          <span className="inline-block text-xs font-medium text-[var(--text-muted)] px-3 py-1 rounded-full bg-[var(--surface-light)]">
            {step.duration}
          </span>
        </div>
      </TiltCard>
    </motion.div>
  );
}

export default function SolutionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="process" className="py-24 px-6 bg-[var(--background)]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header — slides in from left */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-[var(--primary-gold)] uppercase tracking-wide mb-3">
            The Process
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[var(--text-primary)] mb-4">
            How we deliver results
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto">
            A proven framework to eliminate waste and maximize profit.
          </p>
        </motion.div>

        {/* Connecting line for desktop */}
        <div className="hidden md:block relative mb-6">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute top-0 left-[16.67%] right-[16.67%] h-[2px] bg-gradient-to-r from-transparent via-[var(--primary-gold)]/30 to-transparent origin-left"
          />
        </div>

        {/* Steps Grid — cards rise with staggered scale */}
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
