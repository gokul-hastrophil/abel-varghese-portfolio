
import React, { useState, useEffect } from 'react';
import { COLORS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Research', href: '#research' },
    { name: 'Publications', href: '#publications' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Books', href: '#books' },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${isScrolled || isMobileMenuOpen
        ? 'bg-white/95 backdrop-blur-sm shadow-sm py-4 border-b border-gray-100'
        : 'bg-transparent py-6 md:py-8'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 relative z-50">
          <span
            className={`text-xl md:text-2xl font-bold tracking-widest uppercase font-montserrat transition-colors duration-500 ${isScrolled || isMobileMenuOpen ? 'text-green-900' : 'text-white'
              }`}
          >
            ABEL <span className="font-light">VARGHESE</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 lg:gap-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:text-green-600 ${isScrolled ? 'text-gray-800' : 'text-white/90 hover:text-white'
                }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button - Added margin and padding for spacing */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden relative z-[101] text-2xl focus:outline-none p-3 mr-4 translate-y-[-2px] transition-colors duration-300 ${isMobileMenuOpen ? 'text-green-900' : 'text-current'}`}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col justify-center items-center gap-2 w-8">
            <span className={`h-1 w-full rounded-full transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-green-900' : 'bg-white shadow-sm'} ${isMobileMenuOpen ? 'rotate-45 translate-y-3' : ''}`} />
            <span className={`h-1 w-full rounded-full transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-green-900' : 'bg-white shadow-sm'} ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`h-1 w-full rounded-full transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-green-900' : 'bg-white shadow-sm'} ${isMobileMenuOpen ? '-rotate-45 -translate-y-3' : ''}`} />
          </div>
        </button>

        {/* Mobile Nav Overlay */}
        <div
          className={`fixed inset-0 z-[100] h-screen w-screen flex flex-col items-center justify-start pt-32 gap-6 transition-transform duration-500 ease-in-out md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} !bg-white`}
          style={{ backgroundColor: '#ffffff', opacity: 1 }}
        >
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-100 rounded-full blur-[80px] opacity-40 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-100 rounded-full blur-[80px] opacity-40 translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-2xl font-black uppercase tracking-[0.2em] text-green-900 hover:text-green-600 transition-colors z-10 group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-1 bg-green-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
