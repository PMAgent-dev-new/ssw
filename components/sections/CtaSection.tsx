'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useCurrentLocale } from '@/locales/client';
import { pickLocale } from '@/locales/all';


const CtaSection = () => {
  const currentLocale = useCurrentLocale();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Select the correct locale object
  const locale = pickLocale(currentLocale);

  if (!isMounted) {
    return null; // Prevent hydration mismatch
  }

  return (
    <section className="bg-[#257985] text-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {locale.ctaSection.heading}
        </h2>
        <p className="text-3xl md:text-4xl mb-8">
          {locale.ctaSection.line1}
          <br className="hidden sm:block" />
          {locale.ctaSection.line2}
        </p>
        <Link
          href="https://lin.ee/aHr6WDJ"
          target="_blank" rel="noopener noreferrer"
          className="inline-block bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
        >
          <div className="relative px-8 py-4">
             <span className="absolute top-0 left-0 -mt-2 -ml-2 bg-yellow-400 text-red-600 text-xs font-bold px-2 py-0.5 rounded">
                 {locale.ctaSection.badge}
               </span>
               <span className="block text-sm font-semibold">
                 {locale.ctaSection.buttonLine1}
               </span>
               <span className="block text-2xl">
                 {locale.ctaSection.buttonLine2}
               </span>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default CtaSection; 