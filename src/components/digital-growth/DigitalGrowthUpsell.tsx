'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Cpu } from 'lucide-react';
import Link from 'next/link';
import MagneticButton from '@/components/MagneticButton';

export default function DigitalGrowthUpsell() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-20 px-6 bg-[var(--background)]">
      <div className="max-w-3xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="apple-card p-10 sm:p-12 text-center relative overflow-hidden"
        >
          {/* Accent top border */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--primary-gold)] via-[var(--accent-coral)] to-[var(--primary-gold)]" />
          
          {/* Icon */}
          <div className="w-14 h-14 rounded-2xl mx-auto mb-6 flex items-center justify-center bg-[var(--primary-gold)]/10">
            <Cpu className="w-7 h-7 text-[var(--primary-gold)]" />
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-4">
            Looking for Enterprise Automation?
          </h3>
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-8 max-w-lg mx-auto">
            Need custom AI workflows, CRM integration, or revenue operations? 
            Explore our flagship automation services built for scale.
          </p>

          <MagneticButton
            as="a"
            href="/"
            className="inline-flex items-center gap-2 apple-button px-8 py-4 text-base font-medium cursor-pointer"
            intensity={0.35}
          >
            Explore YieldOps AI
            <ArrowRight className="w-4 h-4" />
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
