'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useCurrentLocale } from '@/locales/client';
import { pickLocale } from '@/locales/all';
import featureVisa from '../../assets/images/feature-visa-support.jpg';
import featureLife from '../../assets/images/feature-life-support.jpg';
import featureFollow from '../../assets/images/feature-follow-up.jpg';


const ServiceFeatures = () => {
  const currentLocale = useCurrentLocale();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Select the correct locale object
  const locale = pickLocale(currentLocale);

  const imageMap = {
    '/feature-visa-support.jpg': featureVisa,
    '/feature-life-support.jpg': featureLife,
    '/feature-follow-up.jpg': featureFollow,
  };

  if (!isMounted) {
    return null; // Prevent hydration mismatch
  }

  // Get features from the selected locale
  const features = locale.serviceFeatures.items;

  return (
    <section id="service" className="py-16 md:py-24 bg-white"> {/* Added id for navigation */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16"> {/* Increased size */}
          {locale.serviceFeatures.sectionTitle} {/* Use translated title */}
        </h2>
        <div className="space-y-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
            >
              {/* Image Column */}
              <div className={`relative w-full rounded-lg overflow-hidden shadow-lg aspect-video ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <Image
                  src={imageMap[feature.imageUrl]}
                  alt={feature.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              {/* Text Column */}
              <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                {/* Use whitespace-pre-line to respect newlines in the title */}
                <h3 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4 whitespace-pre-line"> {/* Increased size */}
                  {feature.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed"> {/* Increased size */}
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures; 