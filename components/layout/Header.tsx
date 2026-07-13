'use client'; // Add this directive for client-side interactivity

import Link from 'next/link';
import Image from 'next/image'; // Import Image component
import { useState } from 'react'; // Import useState
import { useI18n, useChangeLocale, useCurrentLocale } from '@/locales/client'; // Import hooks
import { LOCALE_OPTIONS, type AppLocale } from '@/locales/all';
import logo from '../../assets/images/logo.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false); // State for language dropdown
  const t = useI18n(); // Initialize the hook
  const changeLocale = useChangeLocale(); // Hook for changing locale
  const currentLocale = useCurrentLocale(); // Hook to get current locale

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsLanguageDropdownOpen(false); // Close language dropdown when mobile menu toggles
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  // Updated language selection handler
  const handleLanguageSelect = (lang: AppLocale) => {
    changeLocale(lang); // Change the locale
    setIsLanguageDropdownOpen(false);
  };

  // Function to close menus and change locale for mobile
  const handleMobileLanguageSelect = (lang: AppLocale) => {
    changeLocale(lang);
    toggleMobileMenu(); // Close menu after selection
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-stretch justify-between py-6">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center">
          <Link href={`/${currentLocale}`} className="flex items-center">
            <Image
              src={logo}
              alt="RIDE JOB FOR SSW" // Updated alt text
              width={180}  // Adjusted width
              height={60} // Adjusted height
              priority // Add priority if logo is above the fold
              style={{ height: 'auto' }} // Added style for aspect ratio
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-stretch space-x-4">
          {/* Navigation Links (Placeholder IDs for now) */}
          <Link href="#service" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-base font-bold flex items-center">
            {/* @ts-ignore */} 
            {t('header.service')} 
          </Link>
          <Link href="#flow" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-base font-bold flex items-center">
            {/* @ts-ignore */} 
            {t('header.flow')} 
          </Link>
          <Link href="#faq" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-base font-bold flex items-center">
            {/* @ts-ignore */} 
            {t('header.faq')} 
          </Link>
          {/* Language Switch with Dropdown */}
          <div className="relative h-full"> {/* Added relative positioning and h-full */}
            <button
              onClick={toggleLanguageDropdown} // Toggle dropdown on click
              className="bg-teal-500 text-white px-3 rounded-md text-lg font-bold hover:bg-teal-600 h-full flex items-center" /* Added h-full, flex, items-center, removed py-1 */
              aria-haspopup="true"
              aria-expanded={isLanguageDropdownOpen}
            >
              {/* @ts-ignore */} 
              {t('header.language')} 
          </button>
            {isLanguageDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 max-h-96 overflow-y-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  {LOCALE_OPTIONS.map((opt) => (
                    <div
                      key={opt.code}
                      onClick={() => handleLanguageSelect(opt.code)}
                      className={`block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900 cursor-pointer ${opt.code === currentLocale ? 'font-bold text-teal-600' : 'text-gray-700'}`}
                      role="menuitem"
                    >
                      {opt.label}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          {/* Line Button Placeholder */}
          <div className="block cursor-pointer h-full"> {/* Removed onClick={toggleMobileMenu} */}
            <Link href="https://lin.ee/aHr6WDJ" target="_blank" rel="noopener noreferrer" className="bg-red-500 text-white px-4 rounded-md text-lg font-bold hover:bg-red-600 flex items-center justify-center h-full">
              {/* @ts-ignore */}
              {t('header.contactLine')}
          </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
            // @ts-ignore
            aria-label={t('header.menuAlt')}
            aria-expanded={isMobileMenuOpen}
          >
            <svg className="h-10 w-10" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-2 z-40">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div onClick={toggleMobileMenu} className="block cursor-pointer">
              <Link href="#service" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-bold">
                {/* @ts-ignore */} 
                {t('header.service')} 
              </Link>
            </div>
            <div onClick={toggleMobileMenu} className="block cursor-pointer">
              <Link href="#flow" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-bold">
                {/* @ts-ignore */} 
                {t('header.flow')} 
              </Link>
            </div>
            <div onClick={toggleMobileMenu} className="block cursor-pointer">
              <Link href="#faq" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-bold">
                {/* @ts-ignore */} 
                {t('header.faq')} 
              </Link>
            </div>
            {/* Language Links（全ロケールをデータ駆動で表示） */}
            <div className="pt-2">
              {LOCALE_OPTIONS.map((opt) => (
                <div key={opt.code} onClick={() => handleMobileLanguageSelect(opt.code)} className="block cursor-pointer">
                  <span className={`hover:bg-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium ${opt.code === currentLocale ? 'font-bold text-teal-600' : 'text-gray-600'}`}>
                    {opt.label}
                  </span>
                </div>
              ))}
            </div>
            {/* Line Button */}
            <div className="block cursor-pointer mt-4">
              <Link href="https://lin.ee/aHr6WDJ" target="_blank" rel="noopener noreferrer" className="bg-red-500 text-white block w-full text-center px-4 py-2 rounded-md text-lg font-bold hover:bg-red-600">
                {/* @ts-ignore */}
                {t('header.contactLine')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 