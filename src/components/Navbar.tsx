'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

const navLinks: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Technologies', href: '/technologies' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 25);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isLinkActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'glass-navbar-scrolled py-2.5 sm:py-3 shadow-[0_4px_20px_rgba(15,23,42,0.06)]'
          : 'glass-navbar-top py-3 sm:py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Company Logo on the Left */}
          <Link
            href="/"
            className="flex items-center gap-3 group cursor-pointer select-none"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md border border-white p-1 flex items-center justify-center shadow-[0_6px_18px_rgba(255,107,0,0.2),inset_0_1.5px_2px_rgba(255,255,255,0.95)] group-hover:scale-105 transition-all overflow-hidden">
              <Image
                src="/images/logo-icon.png"
                alt="Shree Tech Logo"
                width={412}
                height={412}
                sizes="44px"
                loading="eager"
                unoptimized
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-black text-slate-900 tracking-tight font-heading">
                Shree Tech
              </span>
              <span className="text-[9px] text-slate-500 font-semibold tracking-wider uppercase -mt-0.5 font-heading">
                Innovations 
              </span>
            </div>
          </Link>

          {/* Floating Frosted Glass Navigation Pill in the Center */}
          <nav className="hidden md:flex items-center gap-1 px-2.5 py-1 rounded-full glass-nav-pill">
            {navLinks.map((item) => {
              const isActive = isLinkActive(item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`px-3.5 lg:px-4 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-orange-950 bg-white/95 border border-white shadow-[0_2px_10px_rgba(255,107,0,0.12),inset_0_1px_1px_#ffffff] font-semibold'
                      : 'text-slate-600 hover:text-orange-950 hover:bg-white/60'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Contact Us Glassmorphic Button on the Right */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="glass-btn-primary inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs lg:text-sm font-semibold text-white cursor-pointer shadow-md"
            >
              <Sparkles className="w-3.5 h-3.5 text-white/90" />
              <span>Contact Us</span>
              <ArrowUpRight className="w-4 h-4 text-white/90" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 rounded-xl bg-white/60 border border-white/85 backdrop-blur-xl shadow-sm focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Floating Glassmorphism Mobile Overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-slate-200/60 flex flex-col gap-1.5 bg-white/95 backdrop-blur-xl p-3.5 rounded-2xl shadow-lg border border-white/80">
            {navLinks.map((item) => {
              const isActive = isLinkActive(item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 text-sm font-medium rounded-xl transition-all ${
                    isActive
                      ? 'text-orange-950 bg-white/95 border border-orange-200/60 font-semibold shadow-sm'
                      : 'text-slate-700 hover:text-orange-950 hover:bg-white/50'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-2 mt-1 border-t border-white/40">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="glass-btn-primary w-full py-2.5 px-4 text-center text-sm font-semibold text-white rounded-xl block"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
