'use client';

import DigitalGrowthHero from './DigitalGrowthHero';
import DigitalGrowthProblem from './DigitalGrowthProblem';
import DigitalGrowthBundle from './DigitalGrowthBundle';
import DigitalGrowthPricing from './DigitalGrowthPricing';
import DigitalGrowthUpsell from './DigitalGrowthUpsell';
import Footer from '@/components/Footer';

export default function DigitalGrowthPage() {
  return (
    <main className="min-h-screen">
      <DigitalGrowthHero />
      <DigitalGrowthProblem />
      <DigitalGrowthBundle />
      <DigitalGrowthPricing />
      <DigitalGrowthUpsell />
      <Footer />
    </main>
  );
}
