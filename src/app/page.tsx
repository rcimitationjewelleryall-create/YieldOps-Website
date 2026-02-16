import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import Ticker from "@/components/Ticker";
import SolutionSection from "@/components/SolutionSection";
import CounterSection from "@/components/CounterSection";
import PricingSection from "@/components/PricingSection";
import ManifestoSection from "@/components/ManifestoSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import OtherServicesSection from "@/components/OtherServicesSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemSection />
      <Ticker 
        items={['AUTOMATE', 'OPTIMIZE', 'YIELD', 'SCALE', 'ACCELERATE', 'TRANSFORM']}
        speed={35}
      />
      <SolutionSection />
      <CounterSection />
      <PricingSection />
      <Ticker 
        items={['EFFICIENCY', 'PRECISION', 'IMPACT', 'RESULTS', 'GROWTH', 'SPEED']}
        speed={40}
        direction="right"
      />
      <ManifestoSection />
      <AboutSection />
      <FAQSection />
      <OtherServicesSection />
      <Footer />
    </main>
  );
}
