'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, ArrowRight, Shield, Zap, Gift } from 'lucide-react';
import MagneticButton from '@/components/MagneticButton';
import TiltCard from '@/components/TiltCard';

const included = [
  'Complete Google Maps profile optimization',
  'Professional business photos upload',
  'Mobile-first one-page website (hosted)',
  'NFC "Tap-to-Review" cards (2 units)',
  'QR review sticker set',
  'WhatsApp integration on website',
  '30-day support after delivery',
];

export default function DigitalGrowthPricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="dg-pricing" className="py-20 px-6 bg-[var(--background-secondary)]">
      <div className="max-w-3xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-[#c94448] uppercase tracking-widest mb-3">
            Market Entry Offer
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
            One price. Everything included.
          </h2>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <TiltCard
            className="rounded-3xl overflow-hidden border-2 border-[#712123]/40 bg-[var(--card-bg)] backdrop-blur-xl"
            tiltIntensity={4}
            glowColor="rgba(201, 68, 72, 0.15)"
          >
            <div className="relative z-10">
              {/* Top banner */}
              <div className="bg-gradient-to-r from-[#712123] to-[#c94448] px-8 py-4 text-center">
                <div className="flex items-center justify-center gap-2 text-white/90 text-sm font-medium">
                  <Gift className="w-4 h-4" />
                  Limited-Time Launch Price
                </div>
              </div>

              <div className="p-8 sm:p-10">
                {/* Price */}
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <span className="text-2xl text-[var(--text-muted)] line-through font-medium">₹7,000</span>
                    <span className="text-5xl sm:text-6xl font-bold text-[var(--text-primary)]">₹2,999</span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">One-time payment · No subscriptions · No hidden fees</p>
                </div>

                {/* Trust badges */}
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <Shield className="w-4 h-4 text-[var(--primary-gold)]" />
                    100% Satisfaction Guarantee
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <Zap className="w-4 h-4 text-[var(--primary-gold)]" />
                    Delivered in 7 Days
                  </div>
                </div>

                {/* Included items */}
                <div className="space-y-3 mb-8">
                  {included.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -15 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.07 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-5 h-5 rounded-full bg-[#712123]/15 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#c94448]" />
                      </div>
                      <span className="text-sm text-[var(--text-secondary)]">{item}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <div className="text-center">
                  <MagneticButton
                    as="a"
                    href="https://wa.me/919825612393?text=Hi%20YieldOps%2C%20I%20want%20to%20claim%20the%20Digital%20Dominance%20Bundle%20at%20%E2%82%B92%2C999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 w-full sm:w-auto justify-center px-10 py-4 text-base font-semibold rounded-full bg-gradient-to-r from-[#712123] to-[#c94448] text-white border border-[#c94448]/30 shadow-lg shadow-[#712123]/20 hover:shadow-[#712123]/40 transition-shadow cursor-pointer"
                    intensity={0.35}
                  >
                    Claim This Offer on WhatsApp
                    <ArrowRight className="w-4 h-4" />
                  </MagneticButton>
                  <p className="mt-3 text-xs text-[var(--text-muted)]">
                    Or call us directly: +91 98256 12393
                  </p>
                </div>
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}
