import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from 'next/script';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ssw.ridejob.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "RIDE JOB FOR SSW",
    template: `%s | RIDE JOB FOR SSW`,
  },
  description: "特定技能合格者向けタクシードライバー専門求人サービス",
  openGraph: {
    title: "RIDE JOB FOR SSW",
    description: "特定技能合格者向けタクシードライバー専門求人サービス",
    url: siteUrl,
    siteName: "RIDE JOB FOR SSW",
    images: [
      {
        url: "/ogp-image.png",
        width: 1200,
        height: 630,
        alt: "RIDE JOB FOR SSW OGP Image",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RIDE JOB FOR SSW",
    description: "特定技能合格者向けタクシードライバー専門求人サービス",
    images: ["/ogp-image.png"],
  },
  icons: {
    icon: "/ssw-favicon.png",
  },
};

// No generateStaticParams needed here if handled by locale layout

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'RIDE JOB FOR SSW',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
  };

  return (
    <html lang="ja">
      <head>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
