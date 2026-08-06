export type Category = {
  id: string;
  name: string;
  nameBn: string;
  description: string;
  image: string;
  icon: string;
  count: number;
};

export type Template = {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  badge: 'Premium' | 'Trending' | 'New' | 'Popular';
  price: number;
  rating: number;
  views: number;
};

export type Review = {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  avatar: string;
};

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
};

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export type PricingPlan = {
  id: string;
  name: string;
  price: number;
  tagline: string;
  features: string[];
  popular: boolean;
  delivery: string;
  support: string;
};

export const categories: Category[] = [
  {
    id: 'business',
    name: 'Business Website',
    nameBn: 'বিজনেস ওয়েবসাইট',
    description: 'Professional corporate sites that build trust and convert visitors.',
    image: 'https://images.pexels.com/photos/6476257/pexels-photo-6476257.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'Briefcase',
    count: 24,
  },
  {
    id: 'portfolio',
    name: 'Portfolio Website',
    nameBn: 'পোর্টফোলিও ওয়েবসাইট',
    description: 'Showcase your work with stunning visual galleries.',
    image: 'https://images.pexels.com/photos/7610529/pexels-photo-7610529.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'Camera',
    count: 18,
  },
  {
    id: 'wedding',
    name: 'Wedding Website',
    nameBn: 'ওয়েডিং ওয়েবসাইট',
    description: 'Elegant invitation pages for your special day.',
    image: 'https://images.pexels.com/photos/31517332/pexels-photo-31517332.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'Heart',
    count: 12,
  },
  {
    id: 'birthday',
    name: 'Birthday Surprise',
    nameBn: 'বার্থডে সারপ্রাইজ',
    description: 'Memorable surprise pages for birthdays.',
    image: 'https://images.pexels.com/photos/25956380/pexels-photo-25956380.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'Gift',
    count: 9,
  },
  {
    id: 'restaurant',
    name: 'Restaurant Website',
    nameBn: 'রেস্টুরেন্ট ওয়েবসাইট',
    description: 'Appetizing menus and reservation systems.',
    image: 'https://images.pexels.com/photos/12181619/pexels-photo-12181619.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'UtensilsCrossed',
    count: 15,
  },
  {
    id: 'ecommerce',
    name: 'E-commerce Website',
    nameBn: 'ই-কমার্স ওয়েবসাইট',
    description: 'Conversion-focused online store landing pages.',
    image: 'https://images.pexels.com/photos/11952304/pexels-photo-11952304.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'ShoppingCart',
    count: 21,
  },
  {
    id: 'event',
    name: 'Event Website',
    nameBn: 'ইভেন্ট ওয়েবসাইট',
    description: 'Event landing pages with RSVP and schedules.',
    image: 'https://images.pexels.com/photos/7869068/pexels-photo-7869068.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'CalendarDays',
    count: 11,
  },
  {
    id: 'agency',
    name: 'Agency Website',
    nameBn: 'এজেন্সি ওয়েবসাইট',
    description: 'Bold agency portfolios that win clients.',
    image: 'https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'Building2',
    count: 16,
  },
];

export const templates: Template[] = [
  {
    id: 't1',
    name: 'Corporate Pro',
    category: 'business',
    description: 'Sleek corporate landing page with animated hero and team section.',
    image: 'https://images.pexels.com/photos/326514/pexels-photo-326514.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    badge: 'Premium',
    price: 12000,
    rating: 4.9,
    views: 2400,
  },
  {
    id: 't2',
    name: 'Studio Folio',
    category: 'portfolio',
    description: 'Minimalist portfolio with masonry gallery and smooth transitions.',
    image: 'https://images.pexels.com/photos/7610529/pexels-photo-7610529.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    badge: 'Trending',
    price: 8500,
    rating: 4.8,
    views: 3100,
  },
  {
    id: 't3',
    name: 'Forever Vows',
    category: 'wedding',
    description: 'Romantic wedding invitation with countdown and RSVP form.',
    image: 'https://images.pexels.com/photos/31517332/pexels-photo-31517332.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    badge: 'Popular',
    price: 6000,
    rating: 5.0,
    views: 1800,
  },
  {
    id: 't4',
    name: 'Surprise Box',
    category: 'birthday',
    description: 'Interactive birthday surprise with confetti and memory gallery.',
    image: 'https://images.pexels.com/photos/25956380/pexels-photo-25956380.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    badge: 'New',
    price: 4500,
    rating: 4.7,
    views: 950,
  },
  {
    id: 't5',
    name: 'Savor Bistro',
    category: 'restaurant',
    description: 'Restaurant site with menu cards, gallery, and reservation.',
    image: 'https://images.pexels.com/photos/12181619/pexels-photo-12181619.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    badge: 'Trending',
    price: 9000,
    rating: 4.9,
    views: 2200,
  },
  {
    id: 't6',
    name: 'ShopWave',
    category: 'ecommerce',
    description: 'E-commerce landing page with product grid and cart preview.',
    image: 'https://images.pexels.com/photos/11952304/pexels-photo-11952304.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    badge: 'Premium',
    price: 14000,
    rating: 4.8,
    views: 2800,
  },
  {
    id: 't7',
    name: 'Eventify',
    category: 'event',
    description: 'Event page with schedule, speakers, and ticket CTA.',
    image: 'https://images.pexels.com/photos/7869068/pexels-photo-7869068.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    badge: 'New',
    price: 7500,
    rating: 4.6,
    views: 1100,
  },
  {
    id: 't8',
    name: 'Agency X',
    category: 'agency',
    description: 'Bold agency site with case studies and animated stats.',
    image: 'https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&h=650&w=940',
    badge: 'Popular',
    price: 11000,
    rating: 4.9,
    views: 2600,
  },
  {
    id: 't9',
    name: 'CodeCraft',
    category: 'business',
    description: 'Tech startup landing page with feature grid and pricing.',
    image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    badge: 'Premium',
    price: 13000,
    rating: 4.9,
    views: 3400,
  },
];

export const reviews: Review[] = [
  {
    id: 'r1',
    name: 'Rahim Uddin',
    role: 'Restaurant Owner, Dhaka',
    text: 'KROY delivered my restaurant website in under 24 hours. The design was stunning and reservations started coming in the same day. Absolutely brilliant service!',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/8476601/pexels-photo-8476601.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
  },
  {
    id: 'r2',
    name: 'Sadia Islam',
    role: 'Freelance Designer',
    text: 'My portfolio website looks like it cost a fortune but was incredibly affordable. The animations are smooth and professional. Highly recommend KROY!',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/8867235/pexels-photo-8867235.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
  },
  {
    id: 'r3',
    name: 'Tanvir Ahmed',
    role: 'E-commerce Entrepreneur',
    text: 'The landing page KROY built for my online store increased my conversion rate by 40%. The 24-hour delivery promise is real. Best investment I made.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/29810657/pexels-photo-29810657.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
  },
  {
    id: 'r4',
    name: 'Nusrat Jahan',
    role: 'Event Planner',
    text: 'I needed an event website urgently and KROY came through. The RSVP system worked flawlessly and the design was elegant. Will use again!',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/8867235/pexels-photo-8867235.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 'b1',
    title: '10 Best Website Templates for Bangladeshi Businesses in 2026',
    excerpt: 'Discover the top-performing website templates that are helping Bangladeshi businesses grow online.',
    category: 'Templates',
    date: 'Jan 15, 2026',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/326514/pexels-photo-326514.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'b2',
    title: 'Portfolio Design Ideas That Win Clients in 2026',
    excerpt: 'Creative portfolio design strategies to showcase your work and attract high-paying clients.',
    category: 'Design',
    date: 'Jan 10, 2026',
    readTime: '4 min read',
    image: 'https://images.pexels.com/photos/7610529/pexels-photo-7610529.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'b3',
    title: 'Wedding Website Ideas: Make Your Big Day Unforgettable',
    excerpt: 'From countdown timers to RSVP forms, here is how to create the perfect wedding website.',
    category: 'Wedding',
    date: 'Jan 5, 2026',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/31517332/pexels-photo-31517332.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'b4',
    title: 'Landing Page Optimization: 7 Tips to Boost Conversions',
    excerpt: 'Proven techniques to turn your landing page visitors into paying customers.',
    category: 'Optimization',
    date: 'Dec 28, 2025',
    readTime: '7 min read',
    image: 'https://images.pexels.com/photos/11952304/pexels-photo-11952304.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'b5',
    title: 'Business Website Tips for Small Businesses in Bangladesh',
    excerpt: 'Essential features every small business website needs to succeed online.',
    category: 'Business',
    date: 'Dec 20, 2025',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/6476257/pexels-photo-6476257.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'b6',
    title: 'Complete SEO Guide for Bangladesh: Rank Higher on Google',
    excerpt: 'A step-by-step SEO guide tailored for Bangladeshi businesses to dominate search rankings.',
    category: 'SEO',
    date: 'Dec 15, 2025',
    readTime: '10 min read',
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export const faqItems: FAQItem[] = [
  { id: 'f1', question: 'What is KROY and what services do you offer?', answer: 'KROY is a premium website marketplace in Bangladesh offering ready-made website templates, landing pages, portfolio websites, business websites, wedding invitation websites, birthday surprise websites, and custom website development — all delivered within 24 hours.' },
  { id: 'f2', question: 'How fast can you deliver my website?', answer: 'We guarantee delivery within 24 hours of receiving all your content (text, images, logo). In many cases, we deliver even faster depending on the complexity of the project.' },
  { id: 'f3', question: 'Do I need to buy a domain and hosting separately?', answer: 'No, you do not need separate hosting. All our packages include free hosting. You can use a free subdomain (yourbrand.kroy.com) or connect your own custom domain (yourbrand.com).' },
  { id: 'f4', question: 'How much does a website cost?', answer: 'Our pricing starts at ৳3,000 for the Starter package, ৳8,000 for the Standard package, and ৳15,000 for the Premium package. Custom projects are quoted based on your requirements.' },
  { id: 'f5', question: 'Can I customize the templates?', answer: 'Yes! All templates are fully customizable. You can change colors, text, images, and layout. Our team handles the customization for you based on your brand and content.' },
  { id: 'f6', question: 'Are the websites mobile-friendly?', answer: 'Absolutely. Every website we build is 100% responsive and looks perfect on all devices — mobile phones, tablets, and desktop computers.' },
  { id: 'f7', question: 'Do you provide SEO optimization?', answer: 'Yes, all our websites come with basic SEO optimization including meta tags, fast loading speeds, and clean code. Premium packages include advanced SEO with schema markup and keyword optimization.' },
  { id: 'f8', question: 'Can I get a free demo before ordering?', answer: 'Yes! We offer a free website demo so you can see how your website will look before making a payment. Just fill out the demo request form and we will set it up for you.' },
  { id: 'f9', question: 'What payment methods do you accept?', answer: 'We accept bKash, Nagad, Rocket, bank transfers, and cash on delivery for local clients. For international clients, we accept PayPal and international bank transfers.' },
  { id: 'f10', question: 'Do you offer ongoing support after delivery?', answer: 'Yes, all packages include free support. Starter includes 7 days, Standard includes 30 days, and Premium includes 90 days of free support after delivery. Extended support plans are also available.' },
  { id: 'f11', question: 'Can I order a completely custom website?', answer: 'Absolutely! We offer custom website development for businesses with unique requirements. Contact us via WhatsApp or fill out the custom request form with your details.' },
  { id: 'f12', question: 'What if I am not satisfied with the design?', answer: 'We offer unlimited revisions during the development process. We work with you until you are 100% satisfied with the result. Your happiness is our priority.' },
  { id: 'f13', question: 'Do you provide website analytics?', answer: 'Yes, we integrate Google Analytics and Search Console with all Premium packages so you can track visitors, conversions, and performance in real time.' },
  { id: 'f14', question: 'Can you redesign my existing website?', answer: 'Yes, we can redesign and upgrade your existing website to a modern, premium design while preserving your content and SEO rankings.' },
  { id: 'f15', question: 'What technologies do you use?', answer: 'We use modern technologies including React, Next.js, Tailwind CSS, and optimized hosting infrastructure to ensure your website is fast, secure, and scalable.' },
  { id: 'f16', question: 'How do I place an order?', answer: 'You can place an order by browsing our templates and clicking the WhatsApp order button, or by filling out the custom request form on our website. Our team will guide you through the process.' },
  { id: 'f17', question: 'Do you offer discounts for bulk orders?', answer: 'Yes, we offer special pricing for agencies and clients ordering multiple websites. Contact us via WhatsApp for a custom quote.' },
  { id: 'f18', question: 'Is my data and content safe with KROY?', answer: 'Absolutely. We take data security seriously. Your content, images, and business information are kept confidential and never shared with third parties.' },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: 3000,
    tagline: 'Perfect for personal projects and small events',
    features: [
      '1-Page Landing Website',
      'Mobile Responsive Design',
      'Free Subdomain (yourname.kroy.com)',
      'Free Hosting Included',
      'Basic SEO Setup',
      'WhatsApp Contact Button',
      '7 Days Free Support',
    ],
    popular: false,
    delivery: '24 Hours',
    support: '7 Days',
  },
  {
    id: 'standard',
    name: 'Standard',
    price: 8000,
    tagline: 'Best for growing businesses and e-commerce',
    features: [
      'Up to 5 Pages Website',
      'Premium Responsive Design',
      'Custom Domain Support',
      'Free Hosting Included',
      'Advanced SEO Optimization',
      'Contact Form Integration',
      'Social Media Integration',
      'Google Analytics Setup',
      '30 Days Free Support',
    ],
    popular: true,
    delivery: '24 Hours',
    support: '30 Days',
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 15000,
    tagline: 'Full-featured website with advanced functionality',
    features: [
      'Unlimited Pages Website',
      'Luxury Custom Design',
      'Custom Domain Support',
      'Premium Hosting Included',
      'Advanced SEO + Schema Markup',
      'E-commerce Functionality',
      'Payment Gateway Integration',
      'Admin Dashboard Access',
      'Analytics + Search Console',
      '90 Days Free Support',
    ],
    popular: false,
    delivery: '24 Hours',
    support: '90 Days',
  },
];

export const stats = [
  { label: 'Happy Clients', value: 500, suffix: '+' },
  { label: 'Completed Projects', value: 850, suffix: '+' },
  { label: 'Average Rating', value: 4.9, suffix: '', decimals: 1 },
  { label: 'Delivery Success Rate', value: 99, suffix: '%' },
];

export const features = [
  { icon: 'Zap', title: 'Ultra Fast Loading', description: 'Optimized code and CDN delivery for lightning-fast page speeds.' },
  { icon: 'Smartphone', title: 'Mobile Optimized', description: 'Pixel-perfect responsive design on every device size.' },
  { icon: 'Search', title: 'SEO Ready', description: 'Clean structure, meta tags, and schema markup built in.' },
  { icon: 'Target', title: 'Conversion Focused', description: 'Strategic CTAs and layouts designed to convert visitors.' },
  { icon: 'Sparkles', title: 'Premium UI', description: 'Apple-grade aesthetics with smooth micro-interactions.' },
  { icon: 'ShieldCheck', title: 'Secure Hosting', description: 'SSL-secured hosting with regular backups and monitoring.' },
  { icon: 'MessageCircle', title: 'WhatsApp Integration', description: 'Direct WhatsApp ordering and customer chat built in.' },
  { icon: 'BarChart3', title: 'Analytics Ready', description: 'Google Analytics and Search Console integration included.' },
];

export const processSteps = [
  { step: '01', title: 'Choose Template', description: 'Browse our premium collection and pick the design that fits your brand.', icon: 'LayoutTemplate' },
  { step: '02', title: 'Send Content', description: 'Share your text, images, logo, and brand details with our team.', icon: 'Upload' },
  { step: '03', title: 'Customization', description: 'We customize your chosen template with your content and brand colors.', icon: 'Palette' },
  { step: '04', title: 'Launch', description: 'Your website goes live within 24 hours on your domain.', icon: 'Rocket' },
];

export const WHATSAPP_NUMBER = '8801753905587';
export const CONTACT_EMAIL = 'kroybd573@gmail.com';
