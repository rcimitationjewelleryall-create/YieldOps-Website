'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What exactly is included in the ₹2,999 bundle?',
    answer: 'You get complete Google Maps profile optimization (categories, photos, keywords, verification), a mobile-first one-page website hosted on our subdomain, 2 NFC "Tap-to-Review" cards, QR review stickers, and 30 days of post-delivery support.',
  },
  {
    question: 'How long does delivery take?',
    answer: 'We deliver your complete digital presence within 7 working days from the date you provide us all your business details and photos.',
  },
  {
    question: 'Is there a monthly subscription?',
    answer: 'No. The ₹2,999 is a one-time payment. There are no hidden fees, no recurring charges. The website hosting is included for 1 year.',
  },
  {
    question: 'How do the NFC review cards work?',
    answer: 'When a customer taps the NFC card with their phone (or scans the QR code), it opens your Google Review page directly. They can leave a review in under 30 seconds — no app downloads needed.',
  },
  {
    question: 'Will this work for my type of business?',
    answer: 'This bundle is designed for any local business — shops, clinics, salons, restaurants, gyms, repair services, and more. If customers visit your physical location, this bundle will work for you.',
  },
  {
    question: 'Can I upgrade to AI automation services later?',
    answer: 'Absolutely. Many of our local business clients eventually upgrade to our enterprise AI automation services for CRM integration, automated follow-ups, and revenue operations.',
  },
];

function FAQItem({ faq, index, isInView }: { faq: typeof faqs[0]; index: number; isInView: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: 0.08 + index * 0.06 }}
    >
      {/* Divider line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[var(--border-light)] to-transparent" />

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 text-left cursor-pointer group"
      >
        <span className="text-base sm:text-lg font-medium text-[var(--text-primary)] pr-6 group-hover:text-[var(--primary-gold)] transition-colors">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-[var(--text-muted)]" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-[var(--text-secondary)] leading-relaxed max-w-3xl">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function DigitalGrowthFAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="dg-faq" className="py-20 px-6 bg-[var(--background)]">
      <div className="max-w-3xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-sm font-medium text-[var(--primary-gold)] uppercase tracking-widest mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
            Common Questions
          </h2>
        </motion.div>

        {/* FAQ List */}
        <div>
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} isInView={isInView} />
          ))}
          {/* Bottom divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-[var(--border-light)] to-transparent" />
        </div>
      </div>
    </section>
  );
}
