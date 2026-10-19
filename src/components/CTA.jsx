import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { IconArrowRight } from './Icons';

export default function CTA({ onGetStarted }) {
  return (
    <section className="relative py-20 lg:py-24 bg-[#1a381f] overflow-hidden">
      {/* Decorative botanical leaves overlay */}
      <div className="absolute inset-0 opacity-25 mix-blend-overlay pointer-events-none">
        <img
          src="/assets/cta_bg.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Subtle organic light reflections */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#4c7e3f]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#2d5828]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          
          {/* Headlines */}
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#9bc590] uppercase block">
              READY TO START?
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[46px] leading-[1.15] font-bold text-white">
              Transform Your Health, One Meal At A Time
            </h2>
            <p className="text-sm sm:text-base text-white/80">
              Fresh. Nutritious. Convenient. Join thousands of happy customers today.
            </p>
          </div>

          {/* White Pill Action Button */}
          <div className="shrink-0">
            <button
              onClick={onGetStarted}
              id="cta-get-started-today-btn"
              className="group inline-flex items-center gap-2.5 px-8 sm:px-10 py-4 rounded-full bg-white hover:bg-[#f2efe6] text-[#1b341c] text-base font-bold shadow-xl hover:shadow-2xl transition-all duration-200 active:scale-95"
            >
              <span>Get Started Today</span>
              <IconArrowRight size={17} color="#1b341c" className="transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
