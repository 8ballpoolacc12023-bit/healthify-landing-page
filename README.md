# Healthify - Healthy Meals Landing Page 🥗

> **Frontend Development Assessment**  
> Pixel-perfect UI implementation built with **React Native for Web**, **Tailwind CSS**, and modern web best practices.

Live Preview Local: `http://localhost:5173/`  
Vercel Deployment Ready: Zero-config static output (`dist/`)

---

## 🌟 Project Overview

**Healthify** is a premier healthy meal prep and delivery landing page designed for health-conscious individuals and families across Dubai, UAE. This project faithfully reproduces the supplied design specifications with 100% visual fidelity, responsive layouts, accessible typography, and interactive components.

### 🎯 Key Sections Implemented

1. **Top Navigation & Header**:
   - Bilingual Arabic ("صحي") and English branding.
   - Smooth anchor navigation links.
   - Responsive mobile drawer menu with animated hamburger toggle.
   - Primary `Get Started` CTA button.
2. **Hero Section**:
   - Editorial serif headlines (*"Healthy Meals / Happier Lives"*).
   - Value proposition copy and dual CTA buttons (`Explore Meal Plans` & `Learn More`).
   - 3 trust indicator badges (*Fresh Ingredients*, *Nutritionist Approved*, *Delivered to Your Door*).
   - High-resolution hero food bowl with handwritten note (*"Good Food Brightens You"*) and floating animated benefit badge.
3. **Trust Statistics Banner**:
   - 1M+ Meals Delivered, 30K+ Happy Customers, 4.8/5 Satisfaction, 550+ Corporate Clients.
4. **About Healthify ("Your Trusted Healthy Food Partner")**:
   - Layered visual composition (main gourmet bowl + overlapping chef garnishing image + floating "Nourishing Lives Daily" badge).
   - Value proposition with 3 core pillars (*Freshly Prepared Daily*, *Balanced Nutrition*, *Great Taste*).
5. **Our Services**:
   - 4 card grid (*Healthy Ready-To-Eat Meals*, *Customized Meal Plans*, *Weight Management Plans*, *High-Protein Meal Plans*).
   - Interactive hover elevation and circular directional action buttons.
6. **Our Advantages ("Why Choose Healthify")**:
   - 4 benefit feature cards (*Premium Quality*, *Health Focused*, *Convenient Delivery*, *Flexible Plans*).
7. **Growth Plans & Pricing**:
   - 3 Plan tiers: **Essential Plan** (AED 299/mo), **Balanced Plan** (AED 499/mo, with *MOST POPULAR ★* badge), and **Performance Plan** (AED 699/mo).
   - 4th Visual Promo card (*"Invest in a Healthier You"*).
8. **Our Process ("Healthy Eating in 3 Simple Steps")**:
   - Numbered steps (1. Choose Plan, 2. We Prepare Fresh Meals, 3. Enjoy Convenient Delivery) with connecting directional cues.
9. **Customer Testimonials**:
   - Verified customer stories from Dubai (Sara M., Ahmed R., Fatima K.) with 5-star ratings and profile avatars.
10. **Frequently Asked Questions (FAQ)**:
    - Interactive accordion with smooth expandable answers and `+`/`−` state transitions.
11. **Bottom CTA Area**:
    - Lush forest green banner (*"Transform Your Health, One Meal At A Time"*) with organic leaf textures.
12. **Complete Footer**:
    - Social links (Facebook, X, Instagram, YouTube), Quick Links, 8 Meal Services, Dubai Contact Details, and Copyright / Legal links.
13. **Floating WhatsApp Button**:
    - Sticky pulsing WhatsApp button for instant support inquiry.
14. **Interactive Consultation Modal**:
    - Modal dialog triggered by CTA buttons allowing users to select plans, fill in contact details, and submit consultation inquiries.

---

## 🛠️ Technology Stack

- **Framework**: React 18 + React Native for Web (`react-native-web`)
- **Styling**: Tailwind CSS 3 + Custom Design Tokens (editorial serif typography, brand color palette)
- **Build Tool**: Vite 6 (ultra-fast compilation and static asset bundling)
- **Icons**: Custom SVG icons tailored to design specification
- **Deployment Target**: Vercel (`dist/` directory)

---

## 🚀 Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm`

### Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd healthify-landing-page
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview production build**:
   ```bash
   npm run preview
   ```

---

## 🚢 Deploying to Vercel

1. Push this repository to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "feat: complete Healthy Meals landing page implementation"
   git remote add origin <your-github-repo-url>
   git branch -M main
   git push -u origin main
   ```
2. Go to [Vercel Dashboard](https://vercel.com/dashboard) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Vercel automatically detects the Vite framework preset:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**. Your live landing page will be deployed in seconds!

---

## 📱 Responsive Testing Matrix

Tested and optimized across:
- **Desktop**: 1440px / 1920px (Full multi-column layout)
- **Laptop / Tablet**: 1024px / 768px (2-column adaptive layout)
- **Mobile**: 375px / 414px / 430px (Single-column layout with mobile hamburger navigation and zero horizontal overflow)

---

## 📄 License
This project was developed for the Frontend Development Assessment.
