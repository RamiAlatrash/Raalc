import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import RaalcNowItem from './RaalcNowItem';

const raalcNowData = {
  "title": "RAALC Now <1>Submissions and Inquiries are</1><2/> Simplified with <3>Online Token</3>",
  "items": [
    {
      "title": "RAALC... First Step",
      "description": "RAALC runs the first Smart Judicial Service Center, authorized and licensed by Dubai Courts. Offers easy access with a futuristic and efficient approach, aligned with the vision of HH Sheikh Mohammed to enhance your experience. Our continuous efforts to make judicial procedures and processes seamless align with our goal to achieve 100% customer satisfaction.",
      "list": [
        "Paperless Service",
        "Queue-less Experience",
        "Online Token Facility"
      ]
    },
    {
      "title": "Trusted Partners",
      "description": "RAALC is proud to be associated with Dubai Courts, providing authorized and licensed judicial services. Our partnership ensures that you receive official, reliable, and legally valid services for all your requirements.",
      "list": [
        "Official Partnership",
        "Licensed Services",
        "Legal Validity"
      ]
    },
    {
      "title": "Access & Efficiency",
      "description": "Experience seamless access to judicial services with our state-of-the-art facilities. Our commitment to efficiency means faster processing times and enhanced service delivery for all your legal requirements.",
      "list": [
        "Quick Processing",
        "Modern Facilities",
        "Enhanced Services"
      ]
    }
  ]
};

const RaalcNowSection = ({ id }) => {
  return (
    <SectionWrapper
      id={id}
      className="relative bg-gradient-to-br from-[#f5f7fa] via-[#e3ecf7] to-[#d1e3f8] overflow-hidden"
    >
    {/* Background Blobs */}
    <div className="absolute -top-32 -left-32 w-[400px] h-[400px] opacity-50 pointer-events-none animate-pulse">
        <svg viewBox="0 0 400 400">
          <defs>
            <radialGradient id="nowBlob" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#bae6fd" stopOpacity="1" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.5" />
            </radialGradient>
          </defs>
          <ellipse cx="200" cy="200" rx="180" ry="140" fill="url(#nowBlob)" />
        </svg>
      </div>
    <div className="absolute -top-24 right-0 w-[400px] h-[400px] opacity-30 pointer-events-none animate-pulse">
        <svg viewBox="0 0 400 400">
          <defs>
            <radialGradient id="nowAccent" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f0abfc" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#a7f3d0" stopOpacity="0.3" />
            </radialGradient>
          </defs>
          <ellipse cx="200" cy="200" rx="180" ry="140" fill="url(#nowAccent)" />
        </svg>
      </div>
    <div className="absolute inset-0 pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="nowPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1.5" fill="#38bdf8" opacity="0.08" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#nowPattern)" />
        </svg>
      </div>

    <div className="container mx-auto px-4 relative z-10">
      {/* Robot Icons */}
      <div className="flex justify-center items-center gap-4 mb-4">
        <img src="/images/robot-images/robot1.png" alt="Robot 1" className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" />
        <img src="/images/robot-images/robot12.png" alt="Robot 12" className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" />
        <img src="/images/robot-images/robot17.png" alt="Robot 17" className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" />
        </div>

        <motion.h2 
        className="text-3xl sm:text-4xl md:text-5xl font-heading text-center mb-4 text-primary"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          RAALC Now <span className="block sm:inline">Submissions and Inquiries are</span><br className="hidden sm:block" /> Simplified with <span className="gradient-text-blue">Online Token</span>
        </motion.h2>
        
      <div className="space-y-8 mt-8">
          <RaalcNowItem
            title={raalcNowData.items[0].title}
            description={raalcNowData.items[0].description}
            imageUrl="/images/al-adheed-rashidiya.png"
            altText="RAALC Smart Judicial Service Center digital interface"
            listItems={raalcNowData.items[0].list}
          />

        <div className="grid md:grid-cols-2 gap-6">
            <RaalcNowItem
              title={raalcNowData.items[1].title}
              description={raalcNowData.items[1].description}
              imageUrl="/images/robot-images/trusted-part.jpg"
              altText="RAALC's partnership with Dubai Courts"
              listItems={raalcNowData.items[1].list}
              customClasses="md:flex-row-reverse"
              imgClassName="w-48 h-48"
            />
            <RaalcNowItem
              title={raalcNowData.items[2].title}
              description={raalcNowData.items[2].description}
              imageUrl="/images/robot-images/accesspic.jpg"
              altText="RAALC's efficient service delivery system"
              listItems={raalcNowData.items[2].list}
              imgClassName="w-48 h-48"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default RaalcNowSection; 