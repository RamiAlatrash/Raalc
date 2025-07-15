import React from 'react';
    import HeroSection from '@/components/sections/HeroSection';
    import ServicesSection from '@/components/sections/ServicesSection';
    import DeterminationSection from '@/components/sections/DeterminationSection';
    import RaalcNowSection from '@/components/sections/RaalcNowSection';
    import TestimonialsSection from '@/components/sections/TestimonialsSection';
    import ContactSection from '@/components/sections/ContactSection';
    import LocationSection from '@/components/sections/LocationSection';
    import ScrollToTopButton from '@/components/ScrollToTopButton';
    import { motion } from 'framer-motion';

    const HomePage = ({ scrollToSection }) => {
      return (
        <div className="overflow-x-hidden bg-background">
          <HeroSection id="home" scrollToSection={scrollToSection} />
          <ServicesSection id="services" />
          <DeterminationSection id="determination-services" />
          <RaalcNowSection id="raalc-now" />
          <TestimonialsSection id="testimonials" />
          <ContactSection id="contact" />
          <LocationSection id="location" />
          <ScrollToTopButton />
        </div>
      );
    };

    export default HomePage;