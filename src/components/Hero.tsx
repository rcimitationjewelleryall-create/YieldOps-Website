'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';
import TextReveal from './TextReveal';
import MagneticButton from './MagneticButton';

// Companies with logos
const companies = [
  { name: 'Rc Imitation', logo: '/logos/rc-imitation.png' },
  { name: 'Makerman Jeans', logo: '/logos/makerman-jeans.png' },
  { name: 'Mevish Ceramic', logo: '/logos/mevish-ceramic.png' },
  { name: 'Orgets', logo: '/logos/orgets.png' },
  { name: 'Maitri Fabrics', logo: '/logos/maitri-fabrics.png' },
];

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Parallax: background blurs move at different speeds
  const blur1Y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const blur2Y = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16">
      {/* Subtle gradient background with parallax */}
      <div className="absolute inset-0 bg-[var(--background)]">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-gold)]/5 via-transparent to-[var(--accent-coral)]/5" />
        <motion.div
          style={{ y: blur1Y }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--primary-gold)]/10 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: blur2Y }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--accent-coral)]/10 rounded-full blur-3xl"
        />
      </div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 flex-1 flex items-center"
        style={{ opacity: contentOpacity, scale: contentScale }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 glass-badge mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[var(--primary-gold)]" />
              <span className="text-sm text-[var(--text-secondary)]">The Anti-Agency</span>
            </motion.div>

            {/* Headline — word-by-word reveal */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] mb-6 text-[var(--text-primary)]">
              <TextReveal delay={0.3}>Manual work is a tax</TextReveal>
              <br />
              <span className="gradient-text">
                <TextReveal delay={0.7}>on your revenue.</TextReveal>
              </span>
            </h1>

            {/* Subheadline — fade in after headline finishes */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
            >
              We don&apos;t just build software; we <span className="text-[var(--primary-gold)] font-medium">surgically remove the bottlenecks</span> that slow your growth.
            </motion.p>

            {/* CTA Button — Magnetic */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <MagneticButton
                as="a"
                href="https://cal.com/dax-yeildops/yield-diagnostic"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 apple-button px-8 py-4 text-base font-medium cursor-pointer"
                intensity={0.4}
              >
                Start the Diagnostic ($99)
                <ArrowRight className="w-4 h-4" />
              </MagneticButton>
            </motion.div>

            {/* Money-back guarantee */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.8 }}
              className="mt-4 text-sm text-[var(--text-muted)]"
            >
              100% Money-back guarantee if we don&apos;t find the waste.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.0 }}
        className="relative z-10 flex justify-center pb-8"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="text-[var(--text-muted)]"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>

      {/* Trusted By Section - Bottom of Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.2 }}
        className="relative z-10 pb-12"
      >
        <p className="text-center text-xs font-medium text-[var(--text-muted)] uppercase tracking-widest mb-6">
          Trusted By
        </p>

        {/* Scrolling logos */}
        <div className="w-full md:max-w-[60%] mx-auto relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[var(--background)] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[var(--background)] to-transparent z-10" />

          <div className="flex overflow-hidden">
            <div
              className="flex gap-8 items-center animate-scroll"
              style={{ animationDuration: '25s' }}
            >
              {[...companies, ...companies].map((company, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex items-center gap-3 px-5 py-2 glass-badge min-w-[180px]"
                >
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={28}
                    height={28}
                    className="rounded-md"
                  />
                  <span className="text-[var(--text-muted)] font-medium text-sm whitespace-nowrap">
                    {company.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
