import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import RaalcNowItemAr from './RaalcNowItemAr';

const raalcNowDataAr = {
  "title": "أصبحت عمليات التقديم والاستفسارات في العضيد الراشدية الآن<1> مبسطة مع </1><2/><3>التوكن الرقمي</3>",
  "items": [
    {
      "title": "العضيد الراشدية... الخطوة الأولى",
      "description": "تدير العضيد الراشدية أول مركز خدمات قضائية ذكي، معتمد ومرخص من محاكم دبي. يوفر وصولاً سهلاً بنهج مستقبلي وفعال، بما يتماشى مع رؤية صاحب السمو الشيخ محمد لتعزيز تجربتك. تتماشى جهودنا المستمرة لجعل الإجراءات والعمليات القضائية سلسة مع هدفنا المتمثل في تحقيق رضا العملاء بنسبة 100٪.",
      "list": [
        "خدمة لا ورقية",
        "تجربة بدون طوابير",
        "خدمة التوكن الرقمي"
      ]
    },
    {
      "title": "شركاء موثوقون",
      "description": "تفتخر العضيد الراشدية بارتباطها بمحاكم دبي، وتقديم خدمات قضائية معتمدة ومرخصة. تضمن شراكتنا حصولك على خدمات رسمية وموثوقة وصالحة قانونًا لجميع متطلباتك.",
      "list": [
        "شراكة رسمية",
        "خدمات مرخصة",
        "صلاحية قانونية"
      ]
    },
    {
      "title": "الوصول والكفاءة",
      "description": "تمتع بوصول سلس إلى الخدمات القضائية من خلال مرافقنا الحديثة. يعني التزامنا بالكفاءة أوقات معالجة أسرع وتقديم خدمات محسّنة لجميع متطلباتك القانونية.",
      "list": [
        "معالجة سريعة",
        "مرافق حديثة",
        "خدمات محسنة"
      ]
    }
  ]
};

const RaalcNowSectionAr = ({ id }) => {
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
        <div className="flex justify-center items-center gap-4 mb-4 ltr-preserve">
          <img src="/images/robot-images/robot1.png" alt="روبوت 1" className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 ltr-preserve" />
          <img src="/images/robot-images/robot12.png" alt="روبوت 12" className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 ltr-preserve" />
          <img src="/images/robot-images/robot17.png" alt="روبوت 17" className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 ltr-preserve" />
        </div>

        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-center mb-4 text-primary font-arabic rtl-text"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          أصبحت عمليات التقديم والاستفسارات في العضيد الراشدية الآن<span className="block sm:inline"> مبسطة مع </span><br className="hidden sm:block" /> <span className="gradient-text-blue">التوكن الرقمي</span>
        </motion.h2>
        
        <div className="space-y-8 mt-8">
          <RaalcNowItemAr
            title={raalcNowDataAr.items[0].title}
            description={raalcNowDataAr.items[0].description}
            imageUrl="/images/al-adheed-rashidiya.png"
            altText="واجهة مركز خدمة العضيد الراشدية الذكي الرقمية"
            listItems={raalcNowDataAr.items[0].list}
            customClasses="md:flex-row-reverse"
          />

          <div className="grid md:grid-cols-2 gap-6">
            <RaalcNowItemAr
              title={raalcNowDataAr.items[1].title}
              description={raalcNowDataAr.items[1].description}
              imageUrl="/images/robot-images/trusted-part.jpg"
              altText="شراكة العضيد الراشدية مع محاكم دبي"
              listItems={raalcNowDataAr.items[1].list}
              customClasses="md:flex-row-reverse"
              imgClassName="w-48 h-48"
            />
            <RaalcNowItemAr
              title={raalcNowDataAr.items[2].title}
              description={raalcNowDataAr.items[2].description}
              imageUrl="/images/robot-images/accesspic.jpg"
              altText="نظام تقديم الخدمات الفعال في العضيد الراشدية"
              listItems={raalcNowDataAr.items[2].list}
              customClasses="md:flex-row-reverse"
              imgClassName="w-48 h-48"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default RaalcNowSectionAr; 