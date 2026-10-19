import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PROCESS_STEPS } from '../data/landingData';
import { IconArrowRight, IconUserCheck, IconChefBowl, IconTruck } from './Icons';

export default function Process({ onGetStarted }) {
  const getStepIcon = (type) => {
    switch (type) {
      case 'userCheck':
        return <IconUserCheck size={28} color="#2b4923" />;
      case 'chefBowl':
        return <IconChefBowl size={28} color="#2b4923" />;
      case 'deliveryTruck':
        return <IconTruck size={28} color="#2b4923" />;
      default:
        return <IconUserCheck size={28} color="#2b4923" />;
    }
  };

  return (
    <section className="py-20 lg:py-24 bg-[#FAF9F5] border-t border-[#ede7d8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 lg:mb-16 gap-4">
          <div className="space-y-2">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#57744a] uppercase">
              OUR PROCESS
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[44px] leading-tight font-bold text-[#142316]">
              Healthy Eating in 3 Simple Steps
            </h2>
          </div>

          <button
            onClick={onGetStarted}
            className="group inline-flex items-center gap-1.5 text-sm sm:text-base font-semibold text-[#2b4923] hover:text-[#183113] transition-colors self-start md:self-auto"
          >
            <span>It's Easy to Get Started</span>
            <IconArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>

        {/* 3 Steps Row with connecting arrows */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 relative items-center">
          {PROCESS_STEPS.map((item, idx) => (
            <div key={item.step} className="flex items-center">
              
              {/* Step Card Content */}
              <div className="flex items-start gap-4 flex-1 bg-white md:bg-transparent p-5 md:p-2 rounded-2xl md:rounded-none shadow-sm md:shadow-none border md:border-none border-[#eee8da]">
                
                {/* Step Circle Number */}
                <div className="w-12 h-12 rounded-full bg-[#EAE6DB] flex items-center justify-center text-[#1c291e] font-editorial text-xl font-bold shrink-0">
                  {item.step}
                </div>

                {/* Step Icon */}
                <div className="w-12 h-12 rounded-full bg-[#2b4923]/10 flex items-center justify-center shrink-0">
                  {getStepIcon(item.iconType)}
                </div>

                {/* Step Text Info */}
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-[#18261a]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5d6a5f] leading-relaxed">
                    {item.description}
                  </p>
                </div>

              </div>

              {/* Connecting arrow (hidden on last step & on mobile) */}
              {idx < PROCESS_STEPS.length - 1 && (
                <div className="hidden lg:flex items-center px-4 text-[#8a9b85]">
                  <IconArrowRight size={22} color="#8a9b85" />
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
