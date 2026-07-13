'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useCurrentLocale } from '@/locales/client';
import { pickLocale } from '@/locales/all';
import testimonial1 from '../../assets/images/profile-candidate-1.jpg';
import testimonial2 from '../../assets/images/profile-candidate-2.jpg';
import testimonial3 from '../../assets/images/profile-candidate-3.jpg';


const Testimonials = () => {
  const currentLocale = useCurrentLocale();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Select the correct locale object
  const locale = pickLocale(currentLocale);

  const imageMap = {
    '/profile-candidate-1.jpg': testimonial1,
    '/profile-candidate-2.jpg': testimonial2,
    '/profile-candidate-3.jpg': testimonial3,
  };

  if (!isMounted) {
    return null; // Prevent hydration mismatch
  }

  // Get testimonials from the selected locale
  const testimonials = locale.testimonials.items;

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">
          {locale.testimonials.sectionTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              {/* Image */}
              <div className="relative w-full overflow-hidden mb-4 rounded-full aspect-square">
                <Image
                  src={imageMap[testimonial.imageUrl]}
                  alt={testimonial.alt}
                  fill
                  sizes="(max-width: 768px) 90vw, 33vw"
                  className="object-cover"
                />
              </div>
              {/* Quote */}
              <p className="text-gray-600 italic text-lg">
                「{testimonial.quote}」
              </p>
              {/* Name and Origin Wrapper */}
              <div className="mt-auto pt-4">
                <p className="font-semibold text-gray-800 text-xl">{testimonial.name}</p>
                <p className="text-base text-gray-500">{testimonial.origin}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 