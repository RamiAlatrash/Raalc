/** Made by: @Muayyed Ismail and Rami Alatrash */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Star, CheckCircle } from 'lucide-react';

const testimonialsData = [
  {
    "name": "Ahmed K.",
    "avatar": "AK",
    "rating": 5,
    "review": "RAALC's team was incredibly professional and efficient. They handled my case with utmost care and precision. Highly recommended!",
    "verified": true
  },
  {
    "name": "Fatima S.",
    "avatar": "FS",
    "rating": 5,
    "review": "Excellent service! They made a complex legal process seem so simple. The online token system is a game changer.",
    "verified": true
  },
  {
    "name": "John D.",
    "avatar": "JD",
    "rating": 4,
    "review": "Very knowledgeable and helpful. They guided me through every step. I appreciate their dedication.",
    "verified": false
  },
  {
    "name": "Aisha M.",
    "avatar": "AM",
    "rating": 5,
    "review": "The best legal consultants in Dubai! Their expertise in Sharia marriage registration is unmatched.",
    "verified": true
  },
  {
    "name": "Raj P.",
    "avatar": "RP",
    "rating": 5,
    "review": "Quick, responsive, and results-driven. RAALC exceeded my expectations. Thank you for your support!",
    "verified": true
  },
  {
    "name": "Noora H.",
    "avatar": "NH",
    "rating": 4,
    "review": "A reliable partner for all legal matters. Their team is approachable and always ready to assist.",
    "verified": false
  }
];

const SectionWrapper = ({ id, children, className = "" }) => (
  <motion.section
    id={id}
    className={`py-16 md:py-24 ${className}`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8 }}
  >
    {children}
  </motion.section>
);

const TestimonialCard = ({ name, avatar, rating, review, verified }) => {
  const [expanded, setExpanded] = useState(false);
  const shortReview = review.length > 100 ? review.substring(0, 100) + "..." : review;

  return (
    <motion.div 
      className="glassmorphism-card p-6 rounded-xl flex flex-col h-full shadow-lg hover:shadow-primary/30 transition-shadow duration-300 border border-primary/20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      dir='ltr'
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-heading text-xl mr-3">
          {avatar}
        </div>
        <div>
          <p className={`font-heading text-lg text-primary`}>{name}</p>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
            ))}
            {verified && <CheckCircle className="h-4 w-4 text-green-500 ml-2" title="Verified by Google" />}
          </div>
        </div>
      </div>
      <p className={`text-brand-dark-grey text-sm leading-relaxed flex-grow mb-3 font-body`}>
        {expanded ? review : shortReview}
      </p>
      {review.length > 100 && (
        <Button variant="link" className="text-primary hover:text-primary/80 p-0 self-start text-sm font-body" onClick={() => setExpanded(!expanded)}>
          {expanded ? "Read less" : "Read more"}
        </Button>
      )}
    </motion.div>
  );
};

const TestimonialsSection = ({ id }) => {
  const [visibleTestimonials, setVisibleTestimonials] = useState(3);

  const loadMoreTestimonials = () => {
    setVisibleTestimonials(prev => prev + 3);
  };

  return (
    <SectionWrapper
      id={id}
      className="relative bg-gradient-to-br from-[#f5f7fa] via-[#e3ecf7] to-[#d1e3f8] overflow-hidden"
    >
      <img
        src="/images/robot-images/robot10.png"
        alt=""
        className="absolute bottom-0 right-0 w-40 opacity-10 blur-sm pointer-events-none select-none"
        aria-hidden="true"
      />
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-center mb-4 text-primary">What our customers say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.slice(0, visibleTestimonials).map(testimonial => (
            <TestimonialCard
              key={testimonial.name}
              {...testimonial}
            />
          ))}
        </div>
        {visibleTestimonials < testimonialsData.length && (
          <div className="text-center mt-12">
            <Button onClick={loadMoreTestimonials} size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-body shadow-lg transform hover:scale-105 transition-transform duration-300">
              Load More Reviews
            </Button>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
};
export default TestimonialsSection;