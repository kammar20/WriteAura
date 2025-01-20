import { useRef } from 'react';
import AvailableFor from './components/AvailableFor';
import FaqSection from './components/FaqSection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import PricingSection from './components/PricingSection';
import ReadyToJoin from './components/ReadyToJoin';
import TeamSection from './components/TeamSection';
import Testimonial from './components/Testimonial';
import WorkingSection from './components/WorkingSection';

export default function App() {
  let heroRef = useRef();
  let featureRef = useRef();
  let priceRef = useRef();
  let testRef = useRef();
  let faqRef = useRef();

  function scrollToSection(ref) {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }

  //
  return (
    <div className="max-w-[1600px] mx-auto">
      <Navbar
        scrollToSection={scrollToSection}
        heroRef={heroRef}
        featureRef={featureRef}
        priceRef={priceRef}
        testRef={testRef}
        faqRef={faqRef}
      />
      <div ref={heroRef}>
        <HeroSection />
      </div>

      <div ref={featureRef}>
        <FeaturesSection />
      </div>

      <AvailableFor />
      <WorkingSection />

      <div ref={priceRef}>
        <PricingSection />
      </div>

      <div ref={testRef}>
        <Testimonial />
      </div>

      <div ref={faqRef}>
        <FaqSection />
      </div>

      <TeamSection />
      <ReadyToJoin />
      <Footer />
    </div>
  );
}
