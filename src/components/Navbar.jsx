import React, { useState, useEffect } from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { NAV_LINKS } from '../data/landingData';
import { IconArrowRight } from './Icons';

export default function Navbar({ onOpenOrderModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (link) => {
    setActiveLink(link.label);
    setMobileMenuOpen(false);
    const element = document.querySelector(link.href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF9F5]/95 backdrop-blur-md shadow-sm py-3'
          : 'bg-[#FAF9F5] py-4 lg:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <img
              src="/assets/logo.png"
              alt="Healthify Healthy Meals Logo"
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 xl:space-x-9">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link);
                }}
                className={`text-[15px] font-medium transition-colors duration-200 relative py-1 ${
                  activeLink === link.label
                    ? 'text-[#243d1f] font-semibold'
                    : 'text-[#485348] hover:text-[#243d1f]'
                }`}
              >
                {link.label}
                {activeLink === link.label && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#2b4923] rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* Primary Call to Action */}
          <div className="hidden sm:flex items-center">
            <button
              onClick={onOpenOrderModal}
              id="nav-get-started-btn"
              className="group flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#2b4923] hover:bg-[#203919] text-white text-[15px] font-medium shadow-sm hover:shadow-md transition-all duration-200 active:scale-95"
            >
              <span>Get Started</span>
              <IconArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex sm:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="p-2 rounded-lg text-[#2b4923] hover:bg-[#f0ece1] transition-colors"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {mobileMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </>
                ) : (
                  <>
                    <line x1="4" y1="8" x2="20" y2="8"></line>
                    <line x1="4" y1="16" x2="20" y2="16"></line>
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#FAF9F5] border-b border-[#e5dfd1] px-5 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link);
              }}
              className={`block py-2 text-base font-medium ${
                activeLink === link.label ? 'text-[#2b4923] font-bold' : 'text-[#485348]'
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrderModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#2b4923] text-white font-medium shadow-sm"
            >
              <span>Get Started</span>
              <IconArrowRight size={16} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
