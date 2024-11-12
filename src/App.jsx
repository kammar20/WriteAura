import AvailableFor from './components/AvailableFor';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import PricingSection from './components/PricingSection';
import Testimonial from './components/Testimonial';
import WorkingSection from './components/WorkingSection';
import { PricingData } from './constant/data';

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
      <Footer />
    </div>
  );
}
