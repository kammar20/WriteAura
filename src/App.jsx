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
  return (
    <div className="max-w-[1600px] mx-auto">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <AvailableFor />
      <WorkingSection />
      <PricingSection />
      <Testimonial />
      <FaqSection />
      <TeamSection />
      <ReadyToJoin />
      <Footer />
    </div>
  );
}
