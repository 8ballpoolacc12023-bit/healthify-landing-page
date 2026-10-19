import React, { useState } from 'react';
import { IconCheck, IconLeaf } from './Icons';

export default function OrderModal({ isOpen, onClose, selectedItem }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plan: selectedItem?.name || 'Balanced Plan',
    goal: 'Weight Loss & Healthy Living',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Auto close after success
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 2000);
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#ede7d8] relative animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Modal"
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#f4f0e7] hover:bg-[#e6e0d3] flex items-center justify-center text-[#2b4923] transition-colors"
        >
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#2b4923]/15 text-[#2b4923] flex items-center justify-center mx-auto">
              <IconCheck size={32} color="#2b4923" />
            </div>
            <h3 className="font-editorial text-2xl font-bold text-[#142316]">
              Thank You!
            </h3>
            <p className="text-sm text-[#556356] max-w-sm mx-auto">
              Your consultation request for <strong>{formData.plan}</strong> has been received. Our nutrition consultant in Dubai will reach out to you within 30 minutes!
            </p>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-full bg-[#2b4923]/10 flex items-center justify-center text-[#2b4923]">
                <IconLeaf size={16} />
              </div>
              <span className="text-xs font-bold tracking-wider text-[#57744a] uppercase">
                HEALTHIFY CONSULTATION
              </span>
            </div>

            <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#142316] mb-1">
              Start Your Healthy Journey
            </h3>
            <p className="text-xs sm:text-sm text-[#647466] mb-6">
              Get chef-crafted, customized nutrition meals delivered right to your door in Dubai.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#304032] mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sara Al Mansoori"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#d8d2c4] text-sm focus:outline-none focus:border-[#2b4923] focus:ring-2 focus:ring-[#2b4923]/15"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#304032] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="sara@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#d8d2c4] text-sm focus:outline-none focus:border-[#2b4923] focus:ring-2 focus:ring-[#2b4923]/15"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#304032] mb-1">
                    Phone / WhatsApp (UAE)
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+971 50 123 4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#d8d2c4] text-sm focus:outline-none focus:border-[#2b4923] focus:ring-2 focus:ring-[#2b4923]/15"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#304032] mb-1">
                  Select Meal Plan
                </label>
                <select
                  value={formData.plan}
                  onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#d8d2c4] text-sm focus:outline-none focus:border-[#2b4923] focus:ring-2 focus:ring-[#2b4923]/15 bg-white"
                >
                  <option value="Essential Plan (AED 299/mo)">Essential Plan (AED 299/mo)</option>
                  <option value="Balanced Plan (AED 499/mo)">Balanced Plan (AED 499/mo) - Most Popular</option>
                  <option value="Performance Plan (AED 699/mo)">Performance Plan (AED 699/mo)</option>
                  <option value="Custom VIP Nutrition Plan">Custom VIP Nutrition Plan</option>
                </select>
              </div>

              <button
                type="submit"
                id="modal-submit-btn"
                className="w-full py-3.5 rounded-full bg-[#2b4923] hover:bg-[#1e3617] text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 mt-2"
              >
                Confirm & Speak with Nutritionist
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
