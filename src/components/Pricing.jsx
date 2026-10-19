import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { PRICING_PLANS } from '../data/landingData';
import { IconArrowRight, IconCheck, IconLeaf, IconStar, IconChartBars } from './Icons';

export default function Pricing({ onSelectPlan }) {
  const getPlanIcon = (type) => {
    switch (type) {
      case 'leaf':
        return <IconLeaf size={24} color="#2b4923" />;
      case 'starBadge':
        return <IconStar size={24} color="#2b4923" fill="#2b4923" />;
      case 'bars':
        return <IconChartBars size={24} color="#2b4923" />;
      default:
        return <IconLeaf size={24} color="#2b4923" />;
    }
  };

  return (
    <section id="plans" className="py-20 lg:py-28 bg-[#FAF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-4">
          <div className="space-y-2">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#57744a] uppercase">
              GROWTH PLANS
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[44px] leading-tight font-bold text-[#142316]">
              Find the Perfect Plan for You
            </h2>
          </div>

          <a
            href="#plans"
            className="group inline-flex items-center gap-1.5 text-sm sm:text-base font-semibold text-[#2b4923] hover:text-[#193014] transition-colors"
          >
            <span>View All Plans</span>
            <IconArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>

        {/* 4 Cards Grid (3 Pricing Tiers + 1 Visual Promo Banner Card) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-3xl transition-all duration-300 hover:shadow-xl flex flex-col justify-between relative ${
                plan.popular
                  ? 'bg-white border-2 border-[#2b4923] shadow-lg -translate-y-2'
                  : 'bg-white border border-[#eae3d5] shadow-sm hover:-translate-y-1'
              }`}
            >
              {/* Popular Top Banner */}
              {plan.popular && (
                <div className="bg-[#2b4923] text-white text-xs font-bold py-2 px-4 rounded-t-[22px] text-center tracking-wider uppercase flex items-center justify-center gap-1.5">
                  <span>{plan.badgeText}</span>
                </div>
              )}

              <div className={`p-6 sm:p-7 ${plan.popular ? 'pt-5' : ''}`}>
                {/* Plan Icon */}
                <div className="w-12 h-12 rounded-2xl bg-[#2b4923]/10 flex items-center justify-center text-[#2b4923] mb-4">
                  {getPlanIcon(plan.iconType)}
                </div>

                {/* Plan Name */}
                <h3 className="text-xl font-bold text-[#162418] mb-1">
                  {plan.name}
                </h3>

                {/* Subtitle */}
                <p className="text-xs text-[#667468] min-h-[34px] leading-relaxed mb-6">
                  {plan.subtitle}
                </p>

                {/* Price Display */}
                <div className="flex items-baseline gap-1.5 pb-6 border-b border-[#eee8db] mb-6">
                  <span className="font-editorial text-2xl sm:text-3xl font-extrabold text-[#152317]">
                    {plan.price}
                  </span>
                  <span className="text-sm font-medium text-[#778579]">
                    {plan.period}
                  </span>
                </div>

                {/* Features List */}
                <ul className="space-y-3.5 mb-8">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-sm text-[#38463a]">
                      <IconCheck size={16} color="#2b4923" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="p-6 sm:p-7 pt-0">
                <button
                  onClick={() => onSelectPlan(plan)}
                  id={`plan-btn-${plan.id}`}
                  className={`w-full py-3 rounded-full text-sm font-semibold transition-all duration-200 active:scale-95 ${
                    plan.popular
                      ? 'bg-[#2b4923] hover:bg-[#1f3718] text-white shadow-md'
                      : 'border border-[#7d9078] hover:border-[#2b4923] hover:bg-[#2b4923]/5 text-[#2b4923]'
                  }`}
                >
                  Get Started
                </button>
              </div>

            </div>
          ))}

          {/* 4th Card: Visual Lifestyle / Brand Promo Card */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg group min-h-[420px] flex flex-col justify-end p-7 transition-all duration-300 hover:shadow-2xl">
            {/* Background Image */}
            <img
              src="/assets/pricing_promo.png"
              alt="Invest in a Healthier You"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

            {/* Content overlay */}
            <div className="relative z-10 text-white space-y-3">
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                <IconLeaf size={20} color="#ffffff" />
              </div>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold leading-tight">
                Invest in <br />a Healthier <br />You
              </h3>
              <div className="w-16 h-1 bg-[#c29a4a] rounded-full" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
