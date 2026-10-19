import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { ADVANTAGES_DATA } from '../data/landingData';
import { IconArrowRight, IconDiamond, IconHeart, IconTruck, IconLeaf } from './Icons';

export default function Advantages({ onDiscoverAdvantages }) {
  const getIcon = (type) => {
    switch (type) {
      case 'diamond':
        return <IconDiamond size={30} color="#2b4923" />;
      case 'heart':
        return <IconHeart size={30} color="#2b4923" />;
      case 'truck':
        return <IconTruck size={30} color="#2b4923" />;
      case 'flexible':
        return <IconLeaf size={30} color="#2b4923" />;
      default:
        return <IconLeaf size={30} color="#2b4923" />;
    }
  };

  return (
    <section id="advantages" className="py-20 lg:py-24 bg-[#F5F2E9] border-y border-[#e7e1d2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading and Description */}
          <div className="lg:col-span-4 space-y-5">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#57744a] uppercase">
              OUR ADVANTAGES
            </span>
            
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[44px] leading-tight font-bold text-[#142316]">
              Why Choose Healthify
            </h2>

            <p className="text-base text-[#556356] leading-relaxed">
              More than just meals — we deliver a healthier, happier you with benefits that fit your lifestyle.
            </p>

            <div className="pt-2">
              <button
                onClick={onDiscoverAdvantages}
                id="discover-advantages-btn"
                className="group inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#2b4923] hover:bg-[#1e3617] text-white text-sm sm:text-base font-medium shadow-md hover:shadow-lg transition-all duration-200 active:scale-95"
              >
                <span>Discover All Advantages</span>
                <IconArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column: 4 Clean White Benefit Cards */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {ADVANTAGES_DATA.map((card) => (
                <div
                  key={card.id}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center flex flex-col items-center justify-center border border-[#ece6d8]"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#2b4923]/10 flex items-center justify-center text-[#2b4923] mb-4">
                    {getIcon(card.iconType)}
                  </div>

                  <h3 className="text-base font-bold text-[#19271c] mb-2">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5f6e61] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
