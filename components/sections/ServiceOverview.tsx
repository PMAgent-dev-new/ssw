'use client'; // Add use client directive

import Image from 'next/image'; // Import Image
import { useState, useEffect } from 'react';
import { useCurrentLocale } from '@/locales/client';
import { pickLocale } from '@/locales/all';
import serviceOverview from '../../assets/images/service_overview.png';


const ServiceOverview = () => {
  const currentLocale = useCurrentLocale();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Select the correct locale object, default to 'ja' if not found
  const locale = pickLocale(currentLocale);

  if (!isMounted) {
    return null; // Prevent hydration mismatch
  }

  return (
    // Consider adjusting padding/margins if background image affects layout
    <section className="bg-gray-50 py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-5xl md:text-6xl font-semibold text-gray-800 mb-4">
          {locale.serviceOverview.mainTitlePart1}
          <span className="text-2xl md:text-3xl align-baseline">
            {locale.serviceOverview.mainTitlePart2}
          </span>
        </h2>
        <p className="text-4xl md:text-5xl text-red-600 font-medium max-w-3xl mx-auto mb-8">
          {locale.serviceOverview.subtitlePart1}
          <span className="font-bold">
            {locale.serviceOverview.subtitleEmphasis}
          </span>
          {locale.serviceOverview.subtitlePart2}
        </p>
      </div>
      {/* Taxi Silhouette Background Image */}
      <div className="absolute inset-0 flex items-center justify-center z-0 opacity-10 pointer-events-none">
          <Image
              src={serviceOverview}
              alt="" // Decorative image, empty alt
              width={600} // Adjust size as needed
              height={300} // Adjust size as needed
              className="object-contain"
          />
      </div>
    </section>
  );
};

export default ServiceOverview; 