import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { ABOUT_FEATURES } from '../data/landingData';
import { IconArrowRight, IconLeaf, IconNutrition, IconSmile } from './Icons';

export default function About({ onLearnMore }) {
  const getFeatureIcon = (type) => {
    switch (type) {
      case 'fresh':
        return <IconLeaf size={22} color="#2b4923" />;
      case 'nutrition':
        return <IconNutrition size={22} color="#2b4923" />;
      case 'taste':
        return <IconSmile size={22} color="#2b4923" />;
      default:
        return <IconLeaf size={22} color="#2b4923" />;
    }
  };

  return (
    <section id="about" className="relative py-20 lg:py-28 bg-[#FAF9F5] overflow-hidden">
      {/* Botanical leaves watermark in background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 lg:w-96 opacity-15 pointer-events-none select-none">
        <img
          src="/assets/botanical_leaves.png"
          alt=""
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Layered Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-[520px] lg:max-w-none">
              
              {/* Main Bowl Image */}
              <div className="relative overflow-hidden rounded-[2rem] shadow-xl border-4 border-white bg-white">
                <img
                  src="/assets/about_main_bowl.png"
                  alt="Healthy gourmet prepared meal bowl"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Smaller Overlapping Chef Garnishing Image */}
              <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-8 w-44 sm:w-56 overflow-hidden rounded-2xl shadow-2xl border-4 border-white z-20 bg-white">
                <img
                  src="/assets/about_chef.png"
                  alt="Chef preparing fresh meal"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Floating Badge Card: Nourishing Lives Daily */}
              <div className="absolute -bottom-4 left-32 sm:left-44 bg-white/95 backdrop-blur-md rounded-2xl py-3 px-5 shadow-xl border border-white/70 flex items-center gap-3 z-30 animate-float">
                <div className="w-10 h-10 rounded-full bg-[#2b4923]/10 flex items-center justify-center text-[#2b4923] shrink-0">
                  <IconLeaf size={20} color="#2b4923" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1a281c] leading-tight">
                    Nourishing
                  </h4>
                  <p className="text-xs text-[#5c695e]">
                    Lives Daily
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Overline Label */}
            <div className="inline-block">
              <span className="text-xs sm:text-sm font-bold tracking-widest text-[#57744a] uppercase">
                ABOUT HEALTHIFY
              </span>
            </div>

            {/* Section Headline */}
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[46px] leading-[1.15] font-bold text-[#142316]">
              Your Trusted Healthy Food Partner
            </h2>

            {/* Description Copy */}
            <p className="text-base sm:text-lg text-[#556356] leading-relaxed">
              At Healthify, we believe healthy eating should be convenient, affordable, and enjoyable. Based in Dubai, we prepare fresh, balanced meals using high-quality ingredients to help individuals and families achieve their health goals without sacrificing taste.
            </p>

            {/* Feature Icons Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {ABOUT_FEATURES.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#2b4923]/10 flex items-center justify-center shrink-0">
                    {getFeatureIcon(item.iconType)}
                  </div>
                  <span className="text-sm font-semibold text-[#28362a]">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>

            {/* Action CTA Button */}
            <div className="pt-4">
              <button
                onClick={onLearnMore}
                id="about-more-btn"
                className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#2b4923] hover:bg-[#1f3718] text-white text-base font-medium shadow-md hover:shadow-lg transition-all duration-200 active:scale-95"
              >
                <span>More About Us</span>
                <IconArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
