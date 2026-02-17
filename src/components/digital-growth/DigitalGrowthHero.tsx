'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Star } from 'lucide-react';
import TextReveal from '@/components/TextReveal';
import MagneticButton from '@/components/MagneticButton';

export default function DigitalGrowthHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--background)]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#712123]/15 via-transparent to-[var(--primary-gold)]/5" />
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-[#712123]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[var(--primary-gold)]/8 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 glass-badge mb-8"
        >
          <MapPin className="w-4 h-4 text-[#c94448]" />
          <span className="text-sm text-[var(--text-secondary)]">For Local Businesses</span>
        </motion.div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 text-[var(--text-primary)]">
          <TextReveal delay={0.2}>Dominate Your</TextReveal>
          <br />
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="inline-block bg-gradient-to-r from-[#c94448] to-[var(--primary-gold)] bg-clip-text text-transparent"
          >
            Local Market.
          </motion.span>
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          We combine <span className="text-[var(--primary-gold)] font-medium">Google Maps SEO</span>, 
          a Professional Website, and <span className="text-[#c94448] font-medium">NFC Review Tech</span> to 
          skyrocket your reputation.
        </motion.p>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="flex flex-wrap justify-center gap-6 mb-10"
        >
          {[
            { icon: Star, label: '5-Star Reviews', value: 'Guaranteed' },
            { icon: MapPin, label: 'Google Maps', value: 'Full Profile Optimization' },
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-3 glass-badge px-5 py-3 min-w-[220px]">
              <stat.icon className="w-5 h-5 text-[var(--primary-gold)]" />
              <div className="text-left">
                <p className="text-xs text-[var(--text-muted)]">{stat.label}</p>
                <p className="text-sm font-medium text-[var(--text-primary)]">{stat.value}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
        >
          <MagneticButton
            as="a"
            href="https://wa.me/919825612393?text=Hi%20YieldOps%2C%20I%20want%20to%20know%20about%20the%20Digital%20Dominance%20Bundle"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-full bg-gradient-to-r from-[#712123] to-[#c94448] text-white border border-[#c94448]/30 shadow-lg shadow-[#712123]/20 hover:shadow-[#712123]/40 transition-shadow cursor-pointer"
            intensity={0.4}
          >
            Claim This Offer — ₹2,999
            <ArrowRight className="w-4 h-4" />
          </MagneticButton>
          <p className="mt-4 text-sm text-[var(--text-muted)]">
            <span className="line-through">₹7,000</span> → Limited-time market entry offer
          </p>
        </motion.div>
      </div>
    </section>
  );
}
