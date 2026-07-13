'use client';

import Image from 'next/image';
import { useCurrentLocale } from '@/locales/client';
import { useState, useEffect } from 'react';
import { pickLocale } from '@/locales/all';
import problemJob from '../../assets/images/problem-job.jpg';
import problemInterview from '../../assets/images/problem-interview.jpg';
import problemLife from '../../assets/images/problem-life.jpg';

interface ProblemCard {
  title: string;
  description: string;
  alt: string;
}


const ProblemAppeal = () => {
  const currentLocale = useCurrentLocale();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const locale = pickLocale(currentLocale);

  const problemsDataObject = locale.problemAppeal.cards;

  const imageUrls = [
    problemJob,
    problemInterview,
    problemLife,
  ];

  const problems: ProblemCard[] = (typeof problemsDataObject === 'object' && problemsDataObject !== null)
                                    ? Object.values(problemsDataObject)
                                    : [];

  if (!isMounted) {
    return null;
  }

  return (
    <section className="bg-gray-100 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
          {locale.problemAppeal.sectionTitle.line1}
          <br className="sm:hidden" />
          {locale.problemAppeal.sectionTitle.line2}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.length > 0 ? (
              problems.map((problem: ProblemCard, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative w-full aspect-video">
                    <Image
                      src={imageUrls[index % imageUrls.length]}
                      alt={problem.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-3xl font-semibold text-gray-800 mb-3">{problem.title}</h3>
                    <p className="text-gray-600 text-lg">{problem.description}</p>
                  </div>
                </div>
              ))
          ) : (
              <p>Error loading problems or no problems defined.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProblemAppeal; 