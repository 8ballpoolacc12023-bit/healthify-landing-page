import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TESTIMONIALS_DATA } from '../data/landingData';
import { IconArrowRight, IconStar } from './Icons';

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-24 bg-[#FAF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-4">
          <div className="space-y-2">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#57744a] uppercase">
              CUSTOMER STORIES
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[44px] leading-tight font-bold text-[#142316]">
              What Our Customers Say
            </h2>
          </div>

          <a
            href="#reviews"
            className="group inline-flex items-center gap-1.5 text-sm sm:text-base font-semibold text-[#2b4923] hover:text-[#193014] transition-colors"
          >
            <span>View More Reviews</span>
            <IconArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>

        {/* 3 Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-7 shadow-sm hover:shadow-xl border border-[#ede7d8] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              {/* Review Quote */}
              <p className="text-sm sm:text-base text-[#414f43] leading-relaxed italic mb-8">
                {item.quote}
              </p>

              {/* Reviewer Meta + Star Rating */}
              <div className="flex items-center justify-between pt-4 border-t border-[#f4f0e7]">
                
                {/* Avatar and Name */}
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover border border-[#e2dbce]"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-[#172519]">
                      {item.name}
                    </h4>
                    <p className="text-xs text-[#758477]">
                      {item.location}
                    </p>
                  </div>
                </div>

                {/* Star Rating (5 Gold Stars) */}
                <div className="flex items-center gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <IconStar key={i} size={15} color="#F59E0B" fill="#F59E0B" />
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
