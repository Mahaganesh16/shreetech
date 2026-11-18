import type { Metadata, Viewport } from 'next';
import Image from 'next/image';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'Shree Tech | Software Engineering & Cloud Solutions',
  description:
    'Building Digital Solutions That Move Businesses Forward. Shree Tech is an enterprise software engineering and technical consulting firm delivering modern web platforms, mobile apps, and cloud architectures.',
  keywords: [
    'Shree Tech',
    'Software Development Company',
    'Next.js Development',
    'Enterprise Web Applications',
    'Mobile Application Development',
    'Cloud and DevOps',
  ],
  authors: [{ name: 'Shree Tech' }],
  creator: 'Shree Tech',
  openGraph: {
    title: 'Shree Tech | Software Engineering & Cloud Solutions',
    description:
      'We help businesses transform ideas into scalable digital products through innovative software engineering, modern technologies, and thoughtful design.',
    url: 'https://shreetech.com',
    siteName: 'Shree Tech',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shree Tech | Software Engineering',
    description:
      'Building Digital Solutions That Move Businesses Forward. Enterprise software engineering & consulting.',
  },
  icons: {
    icon: '/images/logo-icon.png',
    apple: '/images/logo-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-[#475569] min-h-screen flex flex-col antialiased selection:bg-[#FF6B00]/15 selection:text-[#C01858]">
        {/* Subtle Brand Watermark Behind Layers (Using authentic logo without altering colors) */}
        <div
          aria-hidden="true"
          className="fixed inset-x-0 top-20 bottom-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden"
        >
          <div className="relative flex items-center justify-center w-[min(76vw,540px)] h-[min(76vw,540px)]">
            <div className="absolute inset-12 rounded-full bg-gradient-to-tr from-[#FF6B00]/8 via-[#C01858]/6 to-[#8B5CF6]/6 blur-[90px]" />
            <Image
              src="/images/logo-icon.png"
              alt=""
              width={412}
              height={412}
              sizes="(max-width: 768px) 76vw, 540px"
              loading="eager"
              unoptimized
              className="relative w-full h-full object-contain opacity-[0.12] select-none"
            />
          </div>
        </div>

        {/* Top White Navbar */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-1 relative z-10">{children}</main>

        {/* Clean Footer */}
        <Footer />
      </body>
    </html>
  );
}
