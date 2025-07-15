import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Star, CheckCircle } from 'lucide-react';

const testimonialsDataAr = [
    {
      "name": "أحمد ك.",
      "avatar": "أك",
      "rating": 5,
      "review": "كان فريق رالع محترفًا وفعالًا بشكل لا يصدق. لقد تعاملوا مع قضيتي بعناية فائقة ودقة. موصى به للغاية!",
      "verified": true
    },
    {
      "name": "فاطمة س.",
      "avatar": "فس",
      "rating": 5,
      "review": "خدمة ممتازة! لقد جعلوا عملية قانونية معقدة تبدو بسيطة للغاية. نظام التوكن عبر الإنترنت يغير قواعد اللعبة.",
      "verified": true
    },
    {
      "name": "جون د.",
      "avatar": "جد",
      "rating": 4,
      "review": "واسعو المعرفة ومفيدون جدا. لقد أرشدوني خلال كل خطوة. أقدر تفانيهم.",
      "verified": false
    },
    {
      "name": "عائشة م.",
      "avatar": "عم",
      "rating": 5,
      "review": "أفضل مستشارين قانونيين في دبي! خبرتهم في تسجيل عقود الزواج الشرعي لا مثيل لها.",
      "verified": true
    },
    {
      "name": "راج ب.",
      "avatar": "رب",
      "rating": 5,
      "review": "سريعون ومتجاوبون ويركزون على النتائج. لقد تجاوز رالع توقعاتي. شكرا لدعمكم!",
      "verified": true
    },
    {
      "name": "نورة هـ.",
      "avatar": "نه",
      "rating": 4,
      "review": "شريك موثوق به في جميع الأمور القانونية. فريقهم ودود ومستعد دائمًا للمساعدة.",
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

const TestimonialCardAr = ({ name, avatar, rating, review, verified }) => {
  const [expanded, setExpanded] = useState(false);
  const shortReview = review.length > 100 ? review.substring(0, 100) + "..." : review;

  return (
    <motion.div 
      className="glassmorphism-card p-6 rounded-xl flex flex-col h-full shadow-lg hover:shadow-primary/30 transition-shadow duration-300 border border-primary/20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      dir='rtl'
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-heading text-xl ml-3">
          {avatar}
        </div>
        <div>
          <p className="font-heading text-lg text-primary font-arabic">{name}</p>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
            ))}
            {verified && <CheckCircle className="h-4 w-4 text-green-500 mr-2" title="تم التحقق منه بواسطة جوجل" />}
          </div>
        </div>
      </div>
      <p className="text-brand-dark-grey text-sm leading-relaxed flex-grow mb-3 font-arabic">
        {expanded ? review : shortReview}
      </p>
      {review.length > 100 && (
        <Button variant="link" className="text-primary hover:text-primary/80 p-0 self-start text-sm font-arabic" onClick={() => setExpanded(!expanded)}>
          {expanded ? "اقرأ أقل" : "اقرأ المزيد"}
        </Button>
      )}
    </motion.div>
  );
};

const TestimonialsSectionAr = ({ id }) => {
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
        className="absolute bottom-0 right-0 w-40 opacity-10 blur-sm pointer-events-none select-none ltr-preserve"
        aria-hidden="true"
      />
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-center mb-4 text-primary font-arabic rtl-text">ماذا يقول عملاؤنا</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsDataAr.slice(0, visibleTestimonials).map(testimonial => (
            <TestimonialCardAr
              key={testimonial.name}
              {...testimonial}
            />
          ))}
        </div>
        {visibleTestimonials < testimonialsDataAr.length && (
          <div className="text-center mt-12">
            <Button onClick={loadMoreTestimonials} size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-arabic shadow-lg transform hover:scale-105 transition-transform duration-300">
              تحميل المزيد من التقييمات
            </Button>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
};
export default TestimonialsSectionAr; 