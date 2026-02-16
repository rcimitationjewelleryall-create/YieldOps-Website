'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, ArrowRight, Star, Globe } from 'lucide-react';
import Link from 'next/link';
import TiltCard from './TiltCard';
import MagneticButton from './MagneticButton';

export default function OtherServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-20 px-6 bg-[var(--background-secondary)]">
      <div className="max-w-4xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-[var(--text-muted)] uppercase tracking-widest mb-3">
            Other Services
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[var(--text-primary)]">
            Local Business Solutions
          </h2>
        </motion.div>

        {/* Service Card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="max-w-2xl mx-auto"
        >
          <TiltCard
            className="rounded-3xl overflow-hidden border border-[#712123]/30 bg-[var(--card-bg)] backdrop-blur-xl"
            tiltIntensity={5}
            glowColor="rgba(201, 68, 72, 0.1)"
          >
            <div className="relative z-10">
              {/* Top accent */}
              <div className="h-1 bg-gradient-to-r from-[#712123] to-[#c94448]" />

              <div className="p-8 sm:p-10">
                {/* Icon row */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[#712123]/15">
                    <MapPin className="w-6 h-6 text-[#c94448]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                      Digital Presence & Reputation Management
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                  Turn walk-ins into 5-star reviews. Complete Google Maps optimization, 
                  NFC technology, and a verified digital identity — built for shops, 
                  clinics, salons, and local businesses.
                </p>

                {/* Feature pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {[
                    { icon: MapPin, label: 'Google Maps SEO' },
                    { icon: Globe, label: 'Smart Website' },
                    { icon: Star, label: 'NFC Review Cards' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#712123]/10 border border-[#712123]/15">
                      <item.icon className="w-3.5 h-3.5 text-[#c94448]" />
                      <span className="text-xs font-medium text-[var(--text-secondary)]">{item.label}</span>
                    </div>
                  ))}
                </div>

                {/* Price + CTA row */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <span className="text-sm text-[var(--text-muted)] line-through mr-2">₹7,000</span>
                    <span className="text-2xl font-bold text-[var(--text-primary)]">₹2,999</span>
                    <span className="text-sm text-[var(--text-muted)] ml-1">one-time</span>
                  </div>
                  <MagneticButton
                    as="a"
                    href="/digital-growth"
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-full bg-gradient-to-r from-[#712123] to-[#c94448] text-white border border-[#c94448]/30 shadow-md shadow-[#712123]/15 hover:shadow-[#712123]/30 transition-shadow cursor-pointer"
                    intensity={0.3}
                  >
                    View Bundle Offer
                    <ArrowRight className="w-4 h-4" />
                  </MagneticButton>
                </div>
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}
