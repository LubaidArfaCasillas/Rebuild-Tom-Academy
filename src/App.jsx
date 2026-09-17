import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import JourneySection from './components/JourneySection';
import PortfolioSection from './components/PortfolioSection';
import TestimonialsSection from './components/TestimonialsSection';
import DocumentationSection from './components/DocumentationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-slate-950 selection:text-white font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <JourneySection />
        <PortfolioSection />
        <TestimonialsSection />
        <DocumentationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
