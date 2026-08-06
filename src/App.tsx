import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustSection from '@/components/TrustSection';
import Categories from '@/components/Categories';
import TemplateMarketplace from '@/components/TemplateMarketplace';
import Pricing from '@/components/Pricing';
import WhyChooseUs from '@/components/WhyChooseUs';
import Reviews from '@/components/Reviews';
import ProcessTimeline from '@/components/ProcessTimeline';
import FreeDemo from '@/components/FreeDemo';
import AIAssistant from '@/components/AIAssistant';
import Blog from '@/components/Blog';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import ConversionFeatures from '@/components/ConversionFeatures';

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-snow">
      <Navbar />
      <main>
        <Hero />
        <TrustSection />
        <Categories />
        <TemplateMarketplace />
        <Pricing />
        <WhyChooseUs />
        <Reviews />
        <ProcessTimeline />
        <FreeDemo />
        <AIAssistant />
        <Blog />
        <FAQ />
      </main>
      <Footer />
      <ConversionFeatures />
    </div>
  );
}
