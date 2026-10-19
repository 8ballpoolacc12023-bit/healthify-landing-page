export const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Services', href: '#services' },
  { label: 'Advantages', href: '#advantages' },
  { label: 'Growth Plans', href: '#plans' },
  { label: 'Blogs', href: '#blogs' },
  { label: 'Contact Us', href: '#contact' },
];

export const TRUST_STATS = [
  {
    value: '1M+',
    label: 'Meals Delivered',
    iconType: 'meal',
  },
  {
    value: '30K+',
    label: 'Happy Customers',
    iconType: 'customers',
  },
  {
    value: '4.8/5',
    label: 'Customer Satisfaction',
    iconType: 'star',
  },
  {
    value: '550+',
    label: 'Corporate Clients',
    iconType: 'corporate',
  },
];

export const ABOUT_FEATURES = [
  {
    title: 'Freshly Prepared Daily',
    iconType: 'fresh',
  },
  {
    title: 'Balanced Nutrition',
    iconType: 'nutrition',
  },
  {
    title: 'Great Taste',
    iconType: 'taste',
  },
];

export const SERVICES_DATA = [
  {
    id: 1,
    title: 'Healthy Ready-To-Eat Meals',
    description: 'Fresh, balanced meals prepared daily and ready to enjoy.',
    image: '/assets/service_1_ready_to_eat.png',
  },
  {
    id: 2,
    title: 'Customized Meal Plans',
    description: 'Personalized nutrition plans designed for your goals.',
    image: '/assets/service_2_customized.png',
  },
  {
    id: 3,
    title: 'Weight Management Plans',
    description: 'Delicious meals to support your weight loss or maintenance journey.',
    image: '/assets/service_3_weight_mgmt.png',
  },
  {
    id: 4,
    title: 'High-Protein Meal Plans',
    description: 'Nutrition-rich meals for active lifestyles and fitness goals.',
    image: '/assets/service_4_high_protein.png',
  },
];

export const ADVANTAGES_DATA = [
  {
    id: 1,
    title: 'Premium Quality',
    description: 'High-quality, fresh ingredients',
    iconType: 'diamond',
  },
  {
    id: 2,
    title: 'Health Focused',
    description: 'Nutritionist designed meals',
    iconType: 'heart',
  },
  {
    id: 3,
    title: 'Convenient Delivery',
    description: 'To your home or office',
    iconType: 'truck',
  },
  {
    id: 4,
    title: 'Flexible Plans',
    description: 'Options for every dietary need',
    iconType: 'flexible',
  },
];

export const PRICING_PLANS = [
  {
    id: 'essential',
    name: 'Essential Plan',
    subtitle: 'Great for individuals starting their healthy journey.',
    price: 'AED 299',
    period: '/ month',
    popular: false,
    iconType: 'leaf',
    features: [
      'Fresh daily meals',
      'Balanced nutrition',
      'Flexible delivery',
    ],
  },
  {
    id: 'balanced',
    name: 'Balanced Plan',
    subtitle: 'Our best value plan for a healthier lifestyle.',
    price: 'AED 499',
    period: '/ month',
    popular: true,
    badgeText: 'MOST POPULAR ★',
    iconType: 'starBadge',
    features: [
      'Customized meal options',
      'Wide variety of meals',
      'Nutritionist support',
      'Flexible delivery',
    ],
  },
  {
    id: 'performance',
    name: 'Performance Plan',
    subtitle: 'For fitness enthusiasts and active lifestyles.',
    price: 'AED 699',
    period: '/ month',
    popular: false,
    iconType: 'bars',
    features: [
      'High-protein meals',
      'Performance-focused nutrition',
      'Personalized plans',
      'Priority support',
    ],
  },
];

export const PROCESS_STEPS = [
  {
    step: 1,
    title: 'Choose Your Plan',
    description: 'Select the meal plan that fits your goals.',
    iconType: 'userCheck',
  },
  {
    step: 2,
    title: 'We Prepare Fresh Meals',
    description: 'Our chefs prepare nutritious meals with care.',
    iconType: 'chefBowl',
  },
  {
    step: 3,
    title: 'Enjoy Convenient Delivery',
    description: 'Receive your meals and enjoy a healthier you.',
    iconType: 'deliveryTruck',
  },
];

export const TESTIMONIALS_DATA = [
  {
    id: 1,
    quote:
      '“Healthify has completely changed my eating habits. The meals are delicious, fresh, and so convenient!”',
    name: 'Sara M.',
    location: 'Dubai, UAE',
    avatar: '/assets/avatar_sara.png',
    rating: 5,
  },
  {
    id: 2,
    quote:
      '“Finally a healthy meal service that tastes amazing! It fits perfectly into my busy lifestyle.”',
    name: 'Ahmed R.',
    location: 'Dubai, UAE',
    avatar: '/assets/avatar_ahmed.png',
    rating: 5,
  },
  {
    id: 3,
    quote:
      '“Great quality, variety, and customer service. I feel healthier and more energized every day.”',
    name: 'Fatima K.',
    location: 'Dubai, UAE',
    avatar: '/assets/avatar_fatima.png',
    rating: 5,
  },
];

export const FAQ_DATA = [
  {
    id: 1,
    question: 'What are your meal plans?',
    answer:
      'We offer fully customized meal plans including Healthy Ready-To-Eat Meals, Weight Management Plans, High-Protein Athletic Plans, and Balanced Lifestyle Plans. Each plan is designed by registered clinical nutritionists and prepared daily by professional chefs.',
  },
  {
    id: 2,
    question: 'How does delivery work?',
    answer:
      'We deliver fresh meals daily in temperature-controlled cooler bags across all areas in Dubai and selected UAE Emirates. You can choose morning or evening delivery slots directly to your doorstep or office.',
  },
  {
    id: 3,
    question: 'Can I customize my meals?',
    answer:
      'Yes, absolutely! Through your Healthify dashboard or by consulting our nutrition team, you can specify dietary restrictions, eliminate specific allergens or dislike ingredients, and customize your calorie and macronutrient targets.',
  },
  {
    id: 4,
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit and debit cards (Visa, MasterCard, American Express), Apple Pay, Tabby split-payments, and bank transfers.',
  },
  {
    id: 5,
    question: 'Do you have a mobile app?',
    answer:
      'Yes! The Healthify mobile app is available on iOS and Android for seamless meal selection, calendar pause/resume, nutritional macro tracking, and real-time delivery notifications.',
  },
];

export const FOOTER_SERVICES = [
  'Healthy ready-to-eat meals',
  'Customized meal plans',
  'Weight management meal',
  'High-protein meal plans',
  'Corporate meal solutions',
  'Fitness and wellness nutrition',
  'Healthy snacks and beverages',
  'Delivery and pickup services',
];
