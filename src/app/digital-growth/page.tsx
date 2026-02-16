import type { Metadata } from 'next';
import DigitalGrowthPage from '@/components/digital-growth/DigitalGrowthPage';

export const metadata: Metadata = {
  title: 'Digital Dominance Bundle | YieldOps - Dominate Your Local Market',
  description: 'Google Maps SEO, Professional Website & NFC Review Tech — all in one bundle at ₹2,999. Turn walk-ins into 5-star reviews in 30 days.',
  openGraph: {
    title: 'Digital Dominance Bundle | YieldOps',
    description: 'Dominate your local market in 30 days. Google Maps SEO + Smart Website + NFC Review Cards.',
    type: 'website',
  },
};

export default function DigitalGrowth() {
  return <DigitalGrowthPage />;
}
