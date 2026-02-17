'use client';

import DigitalGrowthHero from './DigitalGrowthHero';
import DigitalGrowthProblem from './DigitalGrowthProblem';
import DigitalGrowthBundle from './DigitalGrowthBundle';
import DigitalGrowthPricing from './DigitalGrowthPricing';
import DigitalGrowthAbout from './DigitalGrowthAbout';
import DigitalGrowthFAQ from './DigitalGrowthFAQ';
import DigitalGrowthUpsell from './DigitalGrowthUpsell';
import Ticker from '@/components/Ticker';
import Footer from '@/components/Footer';

export default function DigitalGrowthPage() {
  return (
    <main className="min-h-screen">
      <DigitalGrowthHero />
      <Ticker
        items={['AUTOMATE', 'OPTIMIZE', 'YIELD', 'SCALE', 'ACCELERATE', 'TRANSFORM']}
        speed={35}
      />
      <DigitalGrowthProblem />
      <DigitalGrowthBundle />
      <DigitalGrowthPricing />
      <DigitalGrowthAbout />
      <DigitalGrowthFAQ />
      <DigitalGrowthUpsell />
      <Footer />
    </main>
  );
}
