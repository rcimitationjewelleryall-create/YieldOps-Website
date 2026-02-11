'use client';

import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Clock, Cpu, TrendingUp } from 'lucide-react';

const stats = [
  {
    icon: Clock,
    value: 500,
    suffix: '+',
    label: 'Hours Saved Monthly',
    description: 'For our clients combined',
  },
  {
    icon: Cpu,
    value: 47,
    suffix: '',
    label: 'Automations Deployed',
    description: 'And counting',
  },
  {
    icon: TrendingUp,
    value: 98,
    suffix: '%',
    label: 'Client Retention',
    description: 'They keep coming back',
  },
];

function AnimatedNumber({ value, suffix, isInView }: { value: number; suffix: string; isInView: boolean }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, latest => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: [0.25, 0.1, 0.25, 1],
      });
      return controls.stop;
    }
  }, [isInView, value, count]);

  useEffect(() => {
    const unsubscribe = rounded.on('change', latest => {
      setDisplayValue(latest);
    });
    return unsubscribe;
  }, [rounded]);

  return (
    <span className="tabular-nums">
      {displayValue}{suffix}
    </span>
  );
}

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const IconComponent = stat.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.15,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="text-center group"
    >
      <div className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center bg-[var(--primary-gold)]/10 group-hover:bg-[var(--primary-gold)]/20 transition-colors">
        <IconComponent className="w-6 h-6 text-[var(--primary-gold)]" />
      </div>
      
      <div className="text-4xl sm:text-5xl font-bold text-[var(--text-primary)] mb-2 gradient-text">
        <AnimatedNumber value={stat.value} suffix={stat.suffix} isInView={isInView} />
      </div>
      
      <p className="text-[var(--text-primary)] font-medium mb-1">{stat.label}</p>
      <p className="text-sm text-[var(--text-muted)]">{stat.description}</p>
    </motion.div>
  );
}

export default function CounterSection() {
  return (
    <section className="py-20 px-6 bg-[var(--background)] relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--primary-gold)]/5 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
