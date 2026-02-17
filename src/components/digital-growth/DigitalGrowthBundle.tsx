'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Globe, CreditCard } from 'lucide-react';
import TiltCard from '@/components/TiltCard';

const bundleItems = [
  {
    icon: MapPin,
    title: 'Google Maps SEO',
    description: 'We fix your business categories, upload professional photos, optimize keywords, and verify your listing for maximum local visibility.',
    highlights: ['Category optimization', 'Photo uploads', 'Keyword targeting', 'Listing verification'],
    color: '#c94448',
    from: { x: -40, y: 20 },
  },
  {
    icon: Globe,
    title: 'Smart Website',
    description: 'A high-speed, mobile-first "link-in-bio" style website hosted on a YieldOps subdomain. Your verified digital identity.',
    highlights: ['Mobile-first design', 'Lightning fast', 'Custom domain', 'WhatsApp integration'],
    color: 'var(--primary-gold)',
    from: { x: 0, y: 40 },
  },
  {
    icon: CreditCard,
    title: 'NFC Review Hardware',
    description: 'Physical NFC cards and QR stickers that customers tap to instantly leave a Google Review. No app downloads, no friction.',
    highlights: ['Tap-to-review cards', 'QR stickers', 'No app needed', 'Instant 5-star path'],
    color: '#c94448',
    from: { x: 40, y: 20 },
  },
];

export default function DigitalGrowthBundle() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="dg-process" className="py-20 px-6 bg-[var(--background)]">
      <div className="max-w-5xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-medium text-[var(--primary-gold)] uppercase tracking-widest mb-3">
            What You Get
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
            The Digital Dominance Bundle
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto">
            Three powerful tools, one flat price. Everything your business needs to own the local market.
          </p>
        </motion.div>

        {/* Bundle Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {bundleItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: item.from.x, y: item.from.y }}
                animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <TiltCard
                  className="apple-card p-7 overflow-hidden h-full"
                  tiltIntensity={7}
                  glowColor={`${item.color === '#c94448' ? 'rgba(201, 68, 72, 0.12)' : 'rgba(232, 200, 114, 0.12)'}`}
                >
                  <div className="relative z-10">
                    {/* Number badge */}
                    <div className="flex items-center gap-3 mb-5">
                      <div 
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-sm font-bold"
                        style={{ background: `linear-gradient(135deg, ${item.color === '#c94448' ? '#712123' : '#b8973d'}, ${item.color})` }}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${item.color}15` }}>
                        <IconComponent className="w-5 h-5" style={{ color: item.color }} />
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">{item.title}</h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5">{item.description}</p>

                    {/* Feature pills */}
                    <div className="flex flex-wrap gap-2">
                      {item.highlights.map((h, i) => (
                        <span 
                          key={i} 
                          className="text-xs px-2.5 py-1 rounded-full border"
                          style={{ 
                            borderColor: `${item.color}25`,
                            color: item.color,
                            background: `${item.color}08`,
                          }}
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
