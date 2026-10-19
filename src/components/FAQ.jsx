import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { FAQ_DATA } from '../data/landingData';
import { IconArrowRight } from './Icons';

export default function FAQ({ onContactUs }) {
  // First item open by default or all closed
  const [openId, setOpenId] = useState(1);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#F6F4ED] border-t border-[#e8e2d4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading, Info, Button */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#57744a] uppercase">
              FREQUENTLY ASKED QUESTIONS
            </span>

            <div className="space-y-1">
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[46px] leading-[1.15] font-bold text-[#142316]">
                Have Questions?
              </h2>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[46px] leading-[1.15] font-bold text-[#142316]">
                We’ve Got Answers.
              </h2>
            </div>

            <p className="text-base text-[#556356] leading-relaxed max-w-md">
              Find quick answers to common questions about our meal plans, delivery, and more.
            </p>

            <div className="pt-2">
              <button
                onClick={onContactUs}
                id="view-all-faqs-btn"
                className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#2b4923] hover:bg-[#1e3617] text-white text-base font-medium shadow-md hover:shadow-lg transition-all duration-200 active:scale-95"
              >
                <span>View All FAQs</span>
                <IconArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column: Usable Accordion List */}
          <div className="lg:col-span-7 space-y-3.5">
            {FAQ_DATA.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-[#eae3d5] overflow-hidden transition-all duration-200 shadow-sm"
                >
                  <button
                    onClick={() => toggleFAQ(item.id)}
                    aria-expanded={isOpen}
                    className="w-full py-4.5 px-6 text-left flex items-center justify-between gap-4 hover:bg-[#faf8f3] transition-colors"
                  >
                    <span className="text-base sm:text-lg font-bold text-[#162518]">
                      {item.question}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-[#2b4923] bg-[#f0ece1] transition-transform duration-300 shrink-0 ${
                        isOpen ? 'rotate-45 bg-[#2b4923] text-white' : ''
                      }`}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </span>
                  </button>

                  {/* Animated Accordion Body */}
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-[#576458] leading-relaxed border-t border-[#f4f0e7] animate-in fade-in duration-200">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
