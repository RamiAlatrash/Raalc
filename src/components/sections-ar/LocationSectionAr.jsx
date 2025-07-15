import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

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

const LocationSectionAr = ({ id }) => {
  const mapRef = useRef(null);
  const placeId = 'ChIJnwlzC9ldXz4R3XHp5w3MaBw'; // Al Adheed - Al Rashidiya place ID
  
  const handleDirectionsClick = () => {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=place_id:${placeId}`, '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    const initMap = () => {
      if (window.google && mapRef.current) {
        const map = new window.google.maps.Map(mapRef.current, {
          center: { lat: 25.23253059387207, lng: 55.38557434082031 },
          zoom: 14,
          styles: [
            { featureType: "water", elementType: "geometry", stylers: [{ color: "#e9e9e9" }] },
            { featureType: "landscape", elementType: "geometry", stylers: [{ color: "#f5f5f5" }] },
            { featureType: "road", elementType: "geometry", stylers: [{ color: "#ffffff" }] },
            { featureType: "poi", elementType: "geometry", stylers: [{ color: "#e5e5e5" }] },
            { featureType: "transit", elementType: "geometry", stylers: [{ color: "#f2f2f2" }] }
          ]
        });

        const marker = new window.google.maps.Marker({
          position: { lat: 25.23253059387207, lng: 55.38557434082031 },
          map,
          title: "موقع رالك"
        });

        const infoWindow = new window.google.maps.InfoWindow({
          content: `
            <div style="padding: 10px; text-align: right; font-family: 'Tajawal', sans-serif;">
              <h3 style="margin: 0 0 5px 0; color: #333;">رالك للاستشارات القانونية</h3>
              <p style="margin: 0; color: #666;">مركز العضيد - الراشدية<br>دبي، الإمارات العربية المتحدة</p>
            </div>
          `
        });

        marker.addListener("click", () => {
          infoWindow.open(map, marker);
        });
      }
    };

    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&callback=initMap&language=ar`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
      window.initMap = initMap;
    } else {
      initMap();
    }

    return () => {
      if (window.initMap) {
        delete window.initMap;
      }
    };
  }, []);

  return (
    <SectionWrapper
      id={id}
      dir="rtl"
      className="bg-[#fdf6ee]"
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-primary font-arabic"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          تفضل بزيارة مكتبنا
        </motion.h2>
        <motion.p 
          className="text-lg md:text-xl text-brand-dark-grey mb-8 font-arabic text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          .موقعنا مناسب في دبي. تفضل بزيارتنا لمناقشة احتياجاتك القانونية شخصياً
        </motion.p>

        <div ref={mapRef} id="map" className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg mb-8"></div>

        <div className="mt-8 text-center space-y-4">
          <div>
            <p className="text-lg font-medium text-gray-700 font-arabic">
              رالك - خدمات حكومية
            </p>
            <p className="text-gray-600 font-arabic">
              الطابق الأول - مركز بن سوقات، طريق المطار
            </p>
            <p className="text-gray-600 font-arabic">
              الراشدية - دبي
            </p>
          </div>
          
          <Button 
            onClick={handleDirectionsClick}
            className="bg-primary text-white hover:bg-primary/90 font-arabic"
          >
            الحصول على الاتجاهات
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default LocationSectionAr; 