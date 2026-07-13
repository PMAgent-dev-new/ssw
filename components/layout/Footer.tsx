import Link from 'next/link';
import Image from 'next/image';
import { useCurrentLocale } from '@/locales/client';
import { pickLocale } from '@/locales/all';
import footerBg from '../../assets/images/footer.png';
import logo from '../../assets/images/logo.png';


const Footer = () => {
  const currentYear = new Date().getFullYear();
  const currentLocale = useCurrentLocale();
  const locale = pickLocale(currentLocale);

  return (
    <footer className="bg-white pt-12 pb-8 border-t border-gray-200 relative overflow-hidden">
      {/* Faint background image */}
      <div className="absolute inset-0 opacity-10 z-0 pointer-events-none">
        <Image
          src={footerBg}
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-8">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <Link href={`/${currentLocale}`} className="flex items-center">
              <Image
                src={logo}
                alt={locale.footer.logoAlt}
                width={150}
                height={50}
              />
            </Link>
          </div>

          {/* Company Info */}
          <div className="text-center md:text-left text-base text-gray-600 space-y-1">
            <p className="font-semibold text-gray-800">{locale.footer.companyName}</p>
            <p>{locale.footer.addressLine1}</p>
            <p>{locale.footer.addressLine2}</p>
            <p>{locale.footer.addressLine3}</p>
            <p>{locale.footer.tel}</p>
          </div>

          {/* Links & Social */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            {/* Company Link */}
            {/* TODO: Add actual link for companies */}
            <Link href="#" className="inline-block border border-gray-300 px-4 py-2 text-base text-gray-700 hover:bg-gray-100 rounded whitespace-nowrap">
              {locale.footer.companyLinkLine1}<br/>{locale.footer.companyLinkLine2}
            </Link>
            {/* Social Media Icons */}
            <div className="flex space-x-4">
               {/* TODO: Replace with actual SVG icons and links */}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500 border-t border-gray-100 pt-4">
          ©{currentYear} {locale.footer.copyrightName}
        </div>
      </div>
    </footer>
  );
};

export default Footer; 