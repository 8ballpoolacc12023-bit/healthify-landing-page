import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Advantages from './components/Advantages';
import Pricing from './components/Pricing';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import OrderModal from './components/OrderModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlanOrService, setSelectedPlanOrService] = useState(null);

  const handleOpenModal = (item = null) => {
    setSelectedPlanOrService(item);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedPlanOrService(null);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#1e2920] flex flex-col font-sans selection:bg-[#2d4c24] selection:text-white">
      {/* Top Header Navigation */}
      <Navbar onOpenOrderModal={() => handleOpenModal()} />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onExplorePlans={() => scrollToSection('plans')}
          onLearnMore={() => scrollToSection('about')}
        />

        {/* 2. Key Trust Indicators Banner */}
        <Stats />

        {/* 3. About Healthify / Brand Story */}
        <About onLearnMore={() => scrollToSection('services')} />

        {/* 4. Our Services / 4 Meal Plan Cards */}
        <Services onSelectService={(srv) => handleOpenModal(srv)} />

        {/* 5. Why Choose Healthify / Advantages */}
        <Advantages onDiscoverAdvantages={() => scrollToSection('plans')} />

        {/* 6. Growth Plans / Pricing */}
        <Pricing onSelectPlan={(plan) => handleOpenModal(plan)} />

        {/* 7. Healthy Eating in 3 Simple Steps */}
        <Process onGetStarted={() => scrollToSection('plans')} />

        {/* 8. Customer Testimonials */}
        <Testimonials />

        {/* 9. Interactive FAQ Accordion */}
        <FAQ onContactUs={() => scrollToSection('contact')} />

        {/* 10. Final Call To Action Banner */}
        <CTA onGetStarted={() => handleOpenModal()} />
      </main>

      {/* 11. Complete Footer */}
      <Footer />

      {/* 12. Floating WhatsApp Chat Support Button */}
      <WhatsAppButton />

      {/* 13. Interactive Consultation / Order Modal */}
      <OrderModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        selectedItem={selectedPlanOrService}
      />
    </div>
  );
}
