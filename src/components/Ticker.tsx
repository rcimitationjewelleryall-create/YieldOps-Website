'use client';

import { motion } from 'framer-motion';

interface TickerProps {
  items?: string[];
  speed?: number;
  direction?: 'left' | 'right';
  className?: string;
}

export default function Ticker({ 
  items = ['AUTOMATE', 'OPTIMIZE', 'YIELD', 'SCALE', 'ACCELERATE', 'TRANSFORM', 'ELIMINATE', 'STREAMLINE'],
  speed = 30,
  direction = 'left',
  className = '',
}: TickerProps) {
  return (
    <div className={`relative overflow-hidden py-8 ${className}`}>
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[var(--background)] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[var(--background)] to-transparent z-10" />
      
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: direction === 'left' ? '-50%' : '0%' }}
        initial={{ x: direction === 'left' ? '0%' : '-50%' }}
        transition={{
          x: {
            duration: speed,
            repeat: Infinity,
            ease: 'linear',
          },
        }}
      >
        {/* Double items for seamless loop */}
        {[...items, ...items].map((item, index) => (
          <span
            key={index}
            className="inline-flex items-center mx-6 text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter select-none"
          >
            <span className="text-[var(--border-light)] opacity-40 hover:text-[var(--primary-gold)] hover:opacity-100 transition-all duration-500">
              {item}
            </span>
            <span className="mx-8 w-2 h-2 rounded-full bg-[var(--primary-gold)] opacity-30" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
