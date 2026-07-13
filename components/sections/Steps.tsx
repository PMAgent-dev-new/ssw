'use client'; // Add use client

import Image from 'next/image'; // Assuming steps might have icons/images later
import Link from 'next/link'; // Import Link for the button
import CtaSection from './CtaSection'; // Import CtaSection
import { useState, useEffect } from 'react';
import { useCurrentLocale } from '@/locales/client';
import { pickLocale } from '@/locales/all';
import step01 from '../../assets/images/step-01-line-register.png';
import step02 from '../../assets/images/step-02-online-interview.png';
import step03 from '../../assets/images/step-03-job-matching.png';
import step04 from '../../assets/images/step-04-company-visit.png';
import step05 from '../../assets/images/step-05-visa-support.png';
import step06 from '../../assets/images/step-06-life-start.png';


const Steps = () => {
  const currentLocale = useCurrentLocale();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Select the correct locale object
  const locale = pickLocale(currentLocale);

  const imageMap = {
    '/step-01-line-register.png': step01,
    '/step-02-online-interview.png': step02,
    '/step-03-job-matching.png': step03,
    '/step-04-company-visit.png': step04,
    '/step-05-visa-support.png': step05,
    '/step-06-life-start.png': step06,
  };

  if (!isMounted) {
    return null; // Prevent hydration mismatch
  }

  // Get steps from the selected locale
  const steps = locale.steps.items;

  return (
    <>
      <section id="flow" className="py-16 md:py-24 bg-white"> {/* Added id for navigation */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8"> {/* Use standard container */}
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16 md:mb-24"> {/* Reverted size */}
            {locale.steps.sectionTitle} {/* Use translated title */}
          </h2>
          {/* Removed flex flex-col */}          <div className="max-w-6xl mx-auto"> {/* Max width container for steps content */}
            {steps.map((step, index) => ( // Map over translated steps
              <div key={step.number} className={` ${index > 0 ? 'border-t border-gray-200' : ''}`}> {/* Separator line */}
                <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8 py-8 md:py-12">

                  {/* Number Column */}                  {/* Adjusted column span and order based on index */}                  <div className={`md:col-span-2 flex justify-center ${index % 2 === 0 ? 'md:order-1' : 'md:order-3'}`}>
                    <span className="text-8xl lg:text-9xl font-bold text-teal-500 opacity-70">
                      {step.number}
                    </span>
                  </div>

                  {/* Text Column */}                  {/* Adjusted column span */}                  <div className="md:col-span-6 text-center md:text-left md:order-2 px-4">
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3"> {/* Increased size */} 
                      {step.title} {/* Use translated title */}
                    </h3>
                    <p className="text-gray-600 text-lg md:text-xl leading-relaxed"> {/* Increased size */} 
                      {step.description} {/* Use translated description */}
                    </p>
                  </div>

                  {/* Image Column */}                  {/* Adjusted column span and order based on index */}                  <div className={`md:col-span-4 flex justify-center items-center ${index % 2 === 0 ? 'md:order-3' : 'md:order-1'}`}>
                    {/* Make parent relative and define aspect ratio or height for button */}                    <div className="relative w-full max-w-xs"> {/* Adjusted max-width for button */} 
                      {step.number === 1 ? (
                        // Replace Image Link with CTA Button
                        <Link
                          href="https://lin.ee/aHr6WDJ" // Updated LINE link
                          target="_blank" rel="noopener noreferrer" // Added for external link
                          className="inline-block bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
                        >
                          <div className="relative px-8 py-4">
                            <span className="absolute top-0 left-0 -mt-2 -ml-2 bg-yellow-400 text-red-600 text-xs font-bold px-2 py-0.5 rounded">
                              {locale.ctaSection.badge} {/* Use translated badge */}
                            </span>
                            <span className="block text-sm font-semibold">
                              {locale.ctaSection.buttonLine1} {/* Use translated button line 1 */}
                            </span>
                            <span className="block text-2xl">
                              {locale.ctaSection.buttonLine2} {/* Use translated button line 2 */}
                            </span>
                          </div>
                        </Link>
                      ) : (
                        // Keep Image for other steps
                        <div className="relative w-full max-w-sm aspect-[3/2]">
                          <Image
                            src={imageMap[step.imageUrl]}
                            alt={`${step.altPrefix} ${step.title}` as string}
                            fill
                            sizes="(max-width: 768px) 90vw, 40vw"
                            className="rounded-lg object-cover"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaSection /> {/* Add CtaSection below the steps section */}
    </>
  );
};

export default Steps; 