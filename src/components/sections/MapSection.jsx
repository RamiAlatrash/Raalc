import React from 'react';
import { motion } from 'framer-motion';

const MapSection = () => {
  return (
    <motion.section
      className="py-16 md:py-24 bg-background relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated Aurora Light Streak */}
      <div
        className="absolute top-0 left-1/2 w-[700px] h-[120px] z-0 opacity-60 pointer-events-none aurora-animate"
        style={{ transform: 'translateX(-50%)' }}
      >
        <svg width="700" height="120" viewBox="0 0 700 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="auroraGradient" x1="0" y1="60" x2="700" y2="60" gradientUnits="userSpaceOnUse">
              <stop stopColor="#38bdf8" stopOpacity="0.7"/>
              <stop offset="0.5" stopColor="#f0abfc" stopOpacity="0.5"/>
              <stop offset="1" stopColor="#818cf8" stopOpacity="0.7"/>
            </linearGradient>
          </defs>
          <ellipse cx="350" cy="60" rx="320" ry="40" fill="url(#auroraGradient)" />
        </svg>
      </div>

      {/* Animated Blob */}
      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] z-0 opacity-50 pointer-events-none blob-animate-1">
        <svg viewBox="0 0 400 400">
          <defs>
            <radialGradient id="mapBlob" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#bae6fd" stopOpacity="1" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.5" />
            </radialGradient>
          </defs>
          <ellipse cx="200" cy="200" rx="180" ry="140" fill="url(#mapBlob)" />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-heading text-center mb-8 text-primary"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Our Location
        </motion.h2>
        
        <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.131909648089!2d55.385584599999994!3d25.2324817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5dd90b73099f%3A0x1c68cc0de7e971dd!2zQWwgQWRoZWVkIC0gQWwgUmFzaGlkaXlhIHwg2KfZhNi52LbZitivIC0g2KfZhNix2KfYtNiv2YrYqSB8IOCkheCksiDgpIXgpKbgpLngpYDgpKYgLSDgpIXgpLIg4KSw4KS24KWA4KSm4KS_4KSv4KS-IHwg6Zi_5bCU6Zi_5b635biM5b63IC0g6Zi_5bCU5ouJ5biM6L-q5LqaIHwg0JDQu9GMLdCQ0LTRhdC40LQgLSDQkNC70Ywt0KDQsNGI0LjQtNC40Y8!5e0!3m2!1sen!2sae!4v1749262990705!5m2!1sen!2sae"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default MapSection;
