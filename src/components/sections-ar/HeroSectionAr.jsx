import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react'; // Changed to ArrowLeft for RTL

const HeroSectionAr = ({ id, scrollToSection }) => {
  const [bubbleStage, setBubbleStage] = useState(0); // 0: hidden, 1: dot1, 2: dot2, 3: dot3, 4: message

  useEffect(() => {
    setBubbleStage(1);
    const timers = [
      setTimeout(() => setBubbleStage(2), 400),
      setTimeout(() => setBubbleStage(3), 800),
      setTimeout(() => setBubbleStage(4), 1200),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.section
      id={id}
      className="py-20 md:py-32 min-h-[calc(100vh-80px)] flex items-center relative overflow-hidden bg-gradient-to-br from-[#f5f7fa] via-[#e3ecf7] to-[#d1e3f8]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Animated, Prominent Blobs */}
      <div className="absolute -top-40 -left-40 w-[650px] h-[650px] z-0 opacity-30 pointer-events-none">
        <svg viewBox="0 0 650 650">
          <defs>
            <radialGradient id="heroBlob1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="1" />
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.7" />
            </radialGradient>
          </defs>
          <ellipse cx="325" cy="325" rx="300" ry="240" fill="url(#heroBlob1)">
            <animate attributeName="rx" values="300;270;300" dur="8s" repeatCount="indefinite" />
            <animate attributeName="ry" values="240;270;240" dur="10s" repeatCount="indefinite" />
          </ellipse>
        </svg>
      </div>
      <div className="absolute -bottom-48 right-0 w-[700px] h-[700px] z-0 opacity-70 pointer-events-none">
        <svg viewBox="0 0 700 700">
          <defs>
            <radialGradient id="heroBlob2" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#818cf8" stopOpacity="1" />
              <stop offset="100%" stopColor="#a5b4fc" stopOpacity="0.7" />
            </radialGradient>
          </defs>
          <ellipse cx="350" cy="350" rx="320" ry="250" fill="url(#heroBlob2)">
            <animate attributeName="rx" values="320;290;320" dur="7s" repeatCount="indefinite" />
            <animate attributeName="ry" values="250;280;250" dur="9s" repeatCount="indefinite" />
          </ellipse>
        </svg>
      </div>
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] z-0 opacity-60 pointer-events-none" style={{ transform: 'translate(-50%, -50%)' }}>
        <svg viewBox="0 0 400 400">
          <defs>
            <radialGradient id="heroBlob3" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f0abfc" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#a5b4fc" stopOpacity="0.3" />
            </radialGradient>
          </defs>
          <ellipse cx="200" cy="200" rx="180" ry="140" fill="url(#heroBlob3)">
            <animate attributeName="rx" values="180;160;180" dur="11s" repeatCount="indefinite" />
            <animate attributeName="ry" values="140;160;140" dur="13s" repeatCount="indefinite" />
          </ellipse>
        </svg>
      </div>

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center z-10 relative">
        {/* Right Side: Main hero image (Order swapped for RTL) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative p-1 md:p-2 flex justify-center items-center min-h-[400px]"
        >
          <img
            src="/images/Robot-Home.png"
            alt="روبوت الذكاء الاصطناعي"
            className="max-w-full h-auto rounded-lg shadow-2xl object-cover"
          />
        </motion.div>

        {/* Left Side: Headline, description, robot group, and buttons (Order swapped for RTL) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="px-4 md:px-8"
        >
          <div className="flex items-center mb-6">
            <img
              src="/images/robot-images/robot1.png"
              alt="تميمة الروبوت"
              className="w-32 h-32 mr-2 hidden md:block ltr-preserve"
              style={{ filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.08))' }}
            />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-primary leading-tight font-arabic rtl-text mb-4">
              ثورة في <span className="block">أعمالك</span> بـ <span className="gradient-text-blue font-bold">ذكاء اصطناعي</span>
            </h1>
          </div>
          <p className="text-lg md:text-xl text-brand-dark-grey mb-8 font-arabic rtl-text max-w-2xl">
            طور عملياتك مع حلول الذكاء الاصطناعي المتطورة والمصممة لمستقبل أتمتة الأعمال والنمو.
          </p>
          <div className="flex flex-row items-center justify-center gap-0 mt-20 relative w-full ltr-preserve" style={{ minHeight: '140px' }}>
            <a
              href="https://api.whatsapp.com/send/?phone=971564044137&text=Welcome%20to%20RAALC.%20Get%20your%20virtual%20token%20now"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 min-w-[340px] pr-12 bg-gradient-to-r from-primary to-secondary text-white rounded-full shadow-lg text-xl font-heading font-bold hover:scale-105 transition-transform border-2 border-primary relative z-10 font-arabic rtl-text"
              style={{ boxShadow: '0 4px 16px rgba(56,189,248,0.18)', marginRight: '-1.25rem' }}
            >
              احصل على التوكن الرقمي الخاص بك الآن
            </a>
            <div className="relative w-32 h-40 flex flex-col items-center animate-robot-float z-20 ltr-preserve" style={{ marginLeft: '-1.25rem', marginBottom: '-1.5rem' }}>
              {/* Speech Bubble at the top dot */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-20 animate-speech-bubble-pop pointer-events-none">
                <div className="bg-white text-primary px-6 py-2 rounded-full shadow-lg text-base font-arabic border border-primary whitespace-nowrap rtl-text">
                  دعنا نوصلك!
                </div>
              </div>
              {/* Thought Dots, closer to the robot's head */}
              <div className="flex flex-col items-center absolute -top-4 left-1/2 transform -translate-x-1/2 z-10 space-y-1 ltr-preserve">
                <span className="w-4 h-4 bg-primary rounded-full thought-dot-3"></span>
                <span className="w-3 h-3 bg-primary rounded-full thought-dot-2"></span>
                <span className="w-2 h-2 bg-primary rounded-full thought-dot-1"></span>
              </div>
              {/* Robot Image, moved down and right to subtly touch the button */}
              <img
                src="/images/robot5.png"
                alt="روبوت الهيرو"
                className="w-52 h-52 mt-10 -mr-4 ltr-preserve"
                aria-hidden="true"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSectionAr; 