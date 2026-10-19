import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { SERVICES_DATA } from '../data/landingData';
import { IconArrowRight } from './Icons';

export default function Services({ onSelectService }) {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FAF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-4">
          <div className="space-y-2">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#57744a] uppercase">
              OUR SERVICES
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[44px] leading-tight font-bold text-[#142316]">
              Healthy Meal Plans for Every Lifestyle
            </h2>
          </div>

          <a
            href="#plans"
            className="group inline-flex items-center gap-1.5 text-sm sm:text-base font-semibold text-[#2b4923] hover:text-[#193014] transition-colors"
          >
            <span>View All Services</span>
            <IconArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>

        {/* 4 Cards Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {SERVICES_DATA.map((meal) => (
            <div
              key={meal.id}
              onClick={() => onSelectService(meal)}
              className="group bg-white rounded-3xl p-4 shadow-sm hover:shadow-xl border border-[#ede7d8] transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Card Image */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-5 bg-[#f4f1ea]">
                  <img
                    src={meal.image}
                    alt={meal.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                </div>

                {/* Card Title */}
                <h3 className="text-lg font-bold text-[#1a281c] mb-2 leading-snug group-hover:text-[#2b4923] transition-colors">
                  {meal.title}
                </h3>

                {/* Card Subtext */}
                <p className="text-sm text-[#5f6e61] leading-relaxed mb-6">
                  {meal.description}
                </p>
              </div>

              {/* Bottom Circular Arrow Button */}
              <div className="flex justify-end pt-2">
                <div className="w-9 h-9 rounded-full bg-[#f2efe6] group-hover:bg-[#2b4923] group-hover:text-white flex items-center justify-center text-[#2b4923] transition-all duration-200 shadow-sm">
                  <IconArrowRight size={15} />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
