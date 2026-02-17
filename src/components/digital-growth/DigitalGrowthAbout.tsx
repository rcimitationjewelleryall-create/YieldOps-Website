'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Zap, Heart, Shield } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'We focus on measurable outcomes — more reviews, higher rankings, more walk-ins.',
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'Your complete digital presence goes live within 7 days of onboarding.',
  },
  {
    icon: Heart,
    title: 'Built for You',
    description: 'Every listing, website, and card is customized for your specific business.',
  },
  {
    icon: Shield,
    title: 'Ongoing Support',
    description: '30 days of post-delivery support to ensure everything runs smoothly.',
  },
];

export default function DigitalGrowthAbout() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="dg-about" className="py-20 px-6 bg-[var(--background)]">
      <div className="max-w-4xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-medium text-[var(--primary-gold)] uppercase tracking-widest mb-3">
            About This Service
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
            Why Local Businesses Choose YieldOps
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto leading-relaxed">
            We&apos;re a tech-first agency that understands how local businesses grow.
            No fluff, no long contracts — just results that bring customers through your door.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {values.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="apple-card p-6 flex gap-4"
              >
                <div className="w-11 h-11 rounded-xl shrink-0 flex items-center justify-center bg-[#712123]/15">
                  <IconComponent className="w-5 h-5 text-[#c94448]" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[var(--text-primary)] mb-1">{item.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
