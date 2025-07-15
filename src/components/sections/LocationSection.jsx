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

const LocationSection = ({ id }) => {
  const mapRef = useRef(null);
  const placeId = 'ChIJnwlzC9ldXz4R3XHp5w3MaBw'; // Al Adheed - Al Rashidiya place ID
  
  const handleDirectionsClick = () => {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=place_id:${placeId}`, '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    // Function to initialize the map
    const initMap = () => {
      if (window.google && mapRef.current) {
        const map = new window.google.maps.Map(mapRef.current, {
          center: { lat: 25.23253059387207, lng: 55.38557434082031 },
          zoom: 14,
          styles: [
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [{ color: "#e9e9e9" }]
            },
            {
              featureType: "landscape",
              elementType: "geometry",
              stylers: [{ color: "#f5f5f5" }]
            },
            {
              featureType: "road",
              elementType: "geometry",
              stylers: [{ color: "#ffffff" }]
            },
            {
              featureType: "poi",
              elementType: "geometry",
              stylers: [{ color: "#e5e5e5" }]
            },
            {
              featureType: "transit",
              elementType: "geometry",
              stylers: [{ color: "#f2f2f2" }]
            }
          ]
        });

        const marker = new window.google.maps.Marker({
          position: { lat: 25.23253059387207, lng: 55.38557434082031 },
          map,
          title: "RAALC - Govt. Services"
        });

        const infoWindow = new window.google.maps.InfoWindow({
          content: `
            <div style="padding: 10px; text-align: left">
              <h3 style="margin: 0 0 5px 0; color: #333;">RAALC - Govt. Services</h3>
              <p style="margin: 0; color: #666;">Bin Sougat Center, Airport Road, Al Rashidiya, Dubai</p>
            </div>
          `
        });

        marker.addListener("click", () => {
          infoWindow.open(map, marker);
        });
      }
    };

    // Load the script if it doesn't exist
    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
      window.initMap = initMap;
    } else {
      // If script is already loaded, just initialize the map
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
      className="bg-[#fdf6ee]"
    >
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
        
        <motion.p
          className="text-lg md:text-xl text-brand-dark-grey text-center mb-12 max-w-3xl mx-auto font-body"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Visit us at our convenient location in the heart of Dubai. We look forward to welcoming you.
        </motion.p>

        {/* Map container */}
        <div ref={mapRef} id="map" className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg mb-8"></div>

        <div className="mt-8 text-center space-y-4">
          <div>
            <p className="text-lg font-medium text-gray-700">
              RAALC - Govt. Services
            </p>
            <p className="text-gray-600">
              1st Floor - Bin Sougat Center, Airport Road
            </p>
            <p className="text-gray-600">
              Al Rashidiya - Dubai
            </p>
          </div>
          
          <Button 
            onClick={handleDirectionsClick}
            className="bg-primary text-white hover:bg-primary/90"
          >
            Get Directions
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default LocationSection;