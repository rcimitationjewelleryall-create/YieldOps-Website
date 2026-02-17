'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingDown, TrendingUp, ArrowRight } from 'lucide-react';

export default function DigitalGrowthProblem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="dg-problem" className="py-20 px-6 bg-[var(--background-secondary)]">
      <div className="max-w-4xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-medium text-[#c94448] uppercase tracking-widest mb-3">
            The Reality
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
            Your competitors are <span className="text-[#c94448]">winning</span> because of reviews
          </h2>
        </motion.div>

        {/* Problem / Solution split */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Problem Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="apple-card p-8 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#712123] to-[#c94448]" />
            <div className="w-12 h-12 rounded-2xl mb-5 flex items-center justify-center bg-[#712123]/15">
              <TrendingDown className="w-6 h-6 text-[#c94448]" />
            </div>
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3">The Problem</h3>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Your competitors are ranking higher on Google Maps because they have <span className="text-[var(--text-primary)] font-medium">more reviews, better photos, and optimized listings</span>. 
              Every day without fixes means lost customers walking to the shop next door.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {['No reviews', 'Bad photos', 'Wrong category', 'No website'].map((tag) => (
                <span key={tag} className="text-xs px-3 py-1 rounded-full bg-[#712123]/10 text-[#c94448] border border-[#712123]/20">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Solution Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="apple-card p-8 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--primary-gold)] to-[var(--accent-coral)]" />
            <div className="w-12 h-12 rounded-2xl mb-5 flex items-center justify-center bg-[var(--primary-gold)]/15">
              <TrendingUp className="w-6 h-6 text-[var(--primary-gold)]" />
            </div>
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3">Our Solution</h3>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Our <span className="text-[var(--primary-gold)] font-medium">NFC &ldquo;Tap-to-Review&rdquo; cards</span> make 
              it effortless for happy customers to leave 5-star reviews instantly. Combined with 
              Google Maps SEO, you rise to the top — fast.
            </p>
            <div className="mt-5 flex items-center gap-2 text-sm text-[var(--primary-gold)]">
              <span>See how it works</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
