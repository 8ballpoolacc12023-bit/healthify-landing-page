import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { IconArrowRight, IconLeaf, IconTruck, IconCheck } from './Icons';

export default function Hero({ onExplorePlans, onLearnMore }) {
  return (
    <section id="hero" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#FAF9F5]">
      {/* Decorative background blur elements */}
      <div className="absolute top-12 left-0 w-72 h-72 bg-[#2d4c24]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 right-10 w-96 h-96 bg-[#c29a4a]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Action Area */}
          <div className="lg:col-span-6 space-y-6 lg:space-y-7 z-10">
            
            {/* Main Editorial Headline */}
            <div className="space-y-1">
              <h1 className="font-editorial text-4xl sm:text-5xl lg:text-[62px] leading-[1.08] font-bold text-[#152317]">
                Healthy Meals
              </h1>
              <h2 className="font-editorial text-4xl sm:text-5xl lg:text-[62px] leading-[1.08] font-bold text-[#2d4c24]">
                Happier Lives
              </h2>
            </div>

            {/* Tagline Subtitle */}
            <p className="text-lg sm:text-xl font-semibold text-[#29382b] tracking-tight">
              Fresh. Nutritious. Convenient. Delivered to You.
            </p>

            {/* Value Proposition Body */}
            <p className="text-base sm:text-lg text-[#556356] leading-relaxed max-w-xl">
              At Healthify, we make healthy eating simple and enjoyable with chef-prepared meals, customized plans and a commitment to your wellness goals.
            </p>

            {/* CTA Button Group */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExplorePlans}
                id="hero-explore-plans-btn"
                className="group flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#2b4923] hover:bg-[#1e3617] text-white text-base font-medium shadow-md hover:shadow-lg transition-all duration-200 active:scale-95"
              >
                <span>Explore Meal Plans</span>
                <IconArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                onClick={onLearnMore}
                id="hero-learn-more-btn"
                className="px-8 py-3.5 rounded-full border border-[#7d9078] hover:border-[#2b4923] hover:bg-[#2b4923]/5 text-[#2b4923] text-base font-medium transition-all duration-200 active:scale-95"
              >
                Learn More
              </button>
            </div>

            {/* 3 Core Trust Badges */}
            <div className="pt-6 border-t border-[#eae5d8] grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#2b4923]/10 flex items-center justify-center text-[#2b4923] shrink-0">
                  <IconLeaf size={16} />
                </div>
                <span className="text-[14px] font-medium text-[#2d382f]">Fresh Ingredients</span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#2b4923]/10 flex items-center justify-center text-[#2b4923] shrink-0">
                  <IconCheck size={16} />
                </div>
                <span className="text-[14px] font-medium text-[#2d382f]">Nutritionist Approved</span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#2b4923]/10 flex items-center justify-center text-[#2b4923] shrink-0">
                  <IconTruck size={16} />
                </div>
                <span className="text-[14px] font-medium text-[#2d382f]">Delivered to Your Door</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            
            {/* Visual Container */}
            <div className="relative w-full max-w-[580px] lg:max-w-none">
              
              {/* Handwritten Note with Pointer */}
              <div className="absolute -top-6 left-8 sm:left-12 z-20 flex flex-col items-start select-none">
                <span className="font-script text-2xl sm:text-3xl font-bold text-[#4c6e3d] transform -rotate-6">
                  Good Food
                </span>
                <span className="font-script text-2xl sm:text-3xl font-bold text-[#4c6e3d] transform -rotate-3 pl-2">
                  Brightens You
                </span>
                {/* Curved arrow pointer SVG */}
                <svg
                  width="48"
                  height="40"
                  viewBox="0 0 60 50"
                  fill="none"
                  className="ml-14 -mt-1 text-[#4c6e3d]"
                >
                  <path
                    d="M10 5 C 25 15, 38 25, 45 42"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <polygon points="45,45 37,38 48,34" fill="currentColor" />
                </svg>
              </div>

              {/* Main Food Bowl Image with Soft Organic Mask */}
              <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl transition-transform duration-500 hover:scale-[1.01]">
                <img
                  src="/assets/hero_bowl.png"
                  alt="Delicious Healthy Meals Bowl with grilled chicken and avocado"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Floating Benefit Badge Card */}
              <div className="absolute -bottom-5 right-4 sm:right-8 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-xl border border-white/60 flex items-center gap-3.5 z-20 animate-float max-w-xs">
                <div className="w-12 h-12 rounded-xl bg-[#2b4923]/10 flex items-center justify-center text-[#2b4923] shrink-0">
                  <IconLeaf size={24} color="#2b4923" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-[#1f2b21] leading-tight">
                    Nutritious Meals
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5f6e61]">
                    A Healthier Tomorrow
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
