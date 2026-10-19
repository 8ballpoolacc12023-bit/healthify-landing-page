import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { IconLeaf, IconStar, IconUsers, IconChefBowl } from './Icons';

export default function Stats() {
  const statsList = [
    {
      value: '1M+',
      label: 'Meals Delivered',
      icon: <IconChefBowl size={28} color="#2b4923" />,
    },
    {
      value: '30K+',
      label: 'Happy Customers',
      icon: <IconLeaf size={28} color="#2b4923" />,
    },
    {
      value: '4.8/5',
      label: 'Customer Satisfaction',
      icon: <IconStar size={26} color="#2b4923" fill="#2b4923" />,
    },
    {
      value: '550+',
      label: 'Corporate Clients',
      icon: <IconUsers size={28} color="#2b4923" />,
    },
  ];

  return (
    <section className="bg-[#F6F3EC] border-y border-[#e9e3d5] py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#e2dcce]">
          {statsList.map((stat, idx) => (
            <div
              key={idx}
              className={`flex items-center justify-center gap-4 py-4 md:py-2 px-3 sm:px-6 transition-all duration-300 hover:translate-y-[-2px]`}
            >
              <div className="w-12 h-12 rounded-full bg-[#2b4923]/10 flex items-center justify-center shrink-0">
                {stat.icon}
              </div>
              <div>
                <span className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1a281c] tracking-tight block">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-medium text-[#5e6b5f] block">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
