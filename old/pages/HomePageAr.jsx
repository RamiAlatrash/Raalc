import React from 'react';
import HeroSectionAr from '@/components/sections-ar/HeroSectionAr';
import ServicesSectionAr from '@/components/sections-ar/ServicesSectionAr';
import DeterminationSectionAr from '@/components/sections-ar/DeterminationSectionAr';
import RaalcNowSectionAr from '@/components/sections-ar/RaalcNowSectionAr';
import TestimonialsSectionAr from '@/components/sections-ar/TestimonialsSectionAr';
import ContactSectionAr from '@/components/sections-ar/ContactSectionAr';
import LocationSectionAr from '@/components/sections-ar/LocationSectionAr';
import ScrollToTopButton from '@/components/ScrollToTopButton';

const HomePageAr = ({ scrollToSection }) => {
  return (
    <div className="overflow-x-hidden bg-background">
      <HeroSectionAr id="home" scrollToSection={scrollToSection} />
      <ServicesSectionAr id="services" />
      <DeterminationSectionAr id="determination-services" />
      <RaalcNowSectionAr id="raalc-now" />
      <TestimonialsSectionAr id="testimonials" />
      <ContactSectionAr id="contact" />
      <LocationSectionAr id="location" />
      <ScrollToTopButton />
    </div>
  );
};

export default HomePageAr;