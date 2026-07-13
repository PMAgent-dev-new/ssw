'use client'; // Mark as a Client Component

import { useState, useEffect } from 'react';
import { useCurrentLocale } from '@/locales/client';
import { pickLocale } from '@/locales/all';
import Script from 'next/script'; // Import Script


// Define type for FAQ item based on locale structure
interface FaqItem {
  question: string;
  answer: string;
}

const Faq = () => {
  const currentLocale = useCurrentLocale();
  const [isMounted, setIsMounted] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Select the correct locale object
  const locale = pickLocale(currentLocale);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!isMounted) {
    return null; // Prevent hydration mismatch
  }

  // Get FAQ data from the selected locale - Use readonly type
  const faqData: readonly FaqItem[] = locale.faq.items;

  // Generate JSON-LD structured data
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-gray-50"> {/* Added id and bg color */}
      {/* Add JSON-LD Script for FAQ Schema */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl"> {/* Centered content */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
          {locale.faq.sectionTitle} {/* Use translated title */}
        </h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              {/* Question Button */}
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex justify-between items-center p-4 md:p-5 text-left bg-white hover:bg-gray-50 focus:outline-none"
              >
                <span className="text-lg md:text-xl font-medium text-gray-800">{item.question}</span>
                {/* Simple Plus/Minus Icon */}
                <span className="text-2xl text-gray-500 transition-transform duration-200 transform">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {/* Answer Panel (conditionally rendered) */}
              {openIndex === index && (
                <div className="p-4 md:p-5 border-t border-gray-200 bg-white">
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq; 