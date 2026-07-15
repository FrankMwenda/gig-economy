import { BusinessPreset } from '../types';

export const presets: BusinessPreset[] = [
  {
    id: 'lawn',
    label: 'Lawn Care',
    businessName: 'GreenCut Pro Lawn Care',
    tagline: 'Reliable mowing, edging, and yard cleanups',
    heroDescription:
      'We help homeowners and rentals keep clean, healthy, and beautiful lawns with affordable recurring plans.',
    primaryColor: 'emerald',
    services: [
      { name: 'Lawn Mowing', description: 'Weekly or bi-weekly grass cutting with clean lines.', priceHint: 'From $35' },
      { name: 'Edging & Trimming', description: 'Sharp edges around walkways, flower beds, and fences.', priceHint: 'From $20' },
      { name: 'Seasonal Cleanup', description: 'Leaf removal, debris cleanup, and haul-away.', priceHint: 'From $90' },
    ],
    packages: [
      { title: 'Basic Yard', price: '$79/mo', features: ['2 visits/month', 'Mowing', 'Basic trim'] },
      { title: 'Standard', price: '$129/mo', features: ['4 visits/month', 'Mowing + edging', 'Blow-off finish'] },
      { title: 'Premium', price: '$189/mo', features: ['4 visits/month', 'Priority scheduling', 'Seasonal cleanup discount'] },
    ],
    testimonials: [
      { name: 'A. Kimani', quote: 'Always on time and the yard looks fantastic.' },
      { name: 'J. Njeri', quote: 'Best lawn team we have hired. Very professional.' },
    ],
    faqs: [
      { q: 'Do you bring your own equipment?', a: 'Yes, we come fully equipped for every booking.' },
      { q: 'Can I pause service?', a: 'Absolutely. You can pause or reschedule with 24h notice.' },
    ],
  },
  {
    id: 'plumber',
    label: 'Plumber',
    businessName: 'FlowFix Plumbing',
    tagline: 'Fast, clean, and dependable plumbing help',
    heroDescription: 'From leaks to installations, we deliver trusted plumbing services with transparent pricing.',
    primaryColor: 'blue',
    services: [
      { name: 'Leak Repair', description: 'Detect and repair kitchen, bathroom, and underground leaks.', priceHint: 'From $45' },
      { name: 'Drain Unclogging', description: 'Sink, shower, and toilet blockage removal.', priceHint: 'From $60' },
      { name: 'Fixture Installation', description: 'Install taps, showers, toilets, and water heaters.', priceHint: 'From $80' },
    ],
    packages: [
      { title: 'Home Basic', price: '$99', features: ['Inspection', 'Minor repairs', 'Service report'] },
      { title: 'Home Plus', price: '$179', features: ['Inspection', 'Repairs + unclogging', 'Priority support'] },
      { title: 'Business Care', price: '$299', features: ['Quarterly checks', 'Emergency response', 'Discounted labor'] },
    ],
    testimonials: [
      { name: 'M. Otieno', quote: 'Quick diagnosis and no hidden charges.' },
      { name: 'S. Achieng', quote: 'Very respectful technicians and quality work.' },
    ],
    faqs: [
      { q: 'Do you provide emergency service?', a: 'Yes, emergency slots are available based on location.' },
      { q: 'Do you issue invoices?', a: 'Yes, every job includes a detailed invoice.' },
    ],
  },
  {
    id: 'nails',
    label: 'Nail Salon',
    businessName: 'Polish & Glow Studio',
    tagline: 'Nail artistry with premium care',
    heroDescription: 'Book clean, stylish, and long-lasting nail services for everyday elegance and events.',
    primaryColor: 'pink',
    services: [
      { name: 'Gel Manicure', description: 'Long-lasting shine with careful cuticle prep.', priceHint: 'From $25' },
      { name: 'Acrylic Sets', description: 'Custom length, shape, and design options.', priceHint: 'From $40' },
      { name: 'Nail Art', description: 'Minimalist to bold art tailored to your style.', priceHint: 'From $10' },
    ],
    packages: [
      { title: 'Classic', price: '$35', features: ['Manicure', 'Polish', 'Quick dry'] },
      { title: 'Signature', price: '$55', features: ['Gel manicure', 'Simple nail art', 'Aftercare kit'] },
      { title: 'Luxury', price: '$85', features: ['Full set', 'Detailed art', 'Hand treatment'] },
    ],
    testimonials: [
      { name: 'L. Wanjiku', quote: 'My nails lasted over 3 weeks and looked amazing.' },
      { name: 'C. Mumbi', quote: 'Very clean studio and talented artists.' },
    ],
    faqs: [
      { q: 'Do you accept walk-ins?', a: 'Yes, but appointments are recommended on weekends.' },
      { q: 'How long does a session take?', a: 'Usually 45–90 minutes depending on service.' },
    ],
  },
  {
    id: 'cleaning',
    label: 'Cleaning Service',
    businessName: 'SparkNest Cleaning Co.',
    tagline: 'Spotless spaces, stress-free living',
    heroDescription: 'Residential and office cleaning services tailored to your schedule and priorities.',
    primaryColor: 'teal',
    services: [
      { name: 'Home Cleaning', description: 'Routine and deep cleaning for apartments and homes.', priceHint: 'From $50' },
      { name: 'Office Cleaning', description: 'Flexible after-hours cleaning for teams and offices.', priceHint: 'From $90' },
      { name: 'Move In/Out', description: 'Detailed cleaning for property transitions.', priceHint: 'From $120' },
    ],
    packages: [
      { title: 'Starter', price: '$99', features: ['2 rooms', 'Kitchen + bathroom', 'Vacuum & dusting'] },
      { title: 'Family', price: '$169', features: ['Up to 4 rooms', 'Deep kitchen clean', 'Laundry area'] },
      { title: 'Premium', price: '$249', features: ['Whole home deep clean', 'Appliance exterior', 'Priority slot'] },
    ],
    testimonials: [
      { name: 'P. Maina', quote: 'The team left every corner sparkling clean.' },
      { name: 'R. Chebet', quote: 'Professional, fast, and very detail-oriented.' },
    ],
    faqs: [
      { q: 'Do I provide cleaning supplies?', a: 'No, we bring all standard supplies and equipment.' },
      { q: 'Can I request eco-friendly products?', a: 'Yes, eco-friendly options are available on request.' },
    ],
  },
  {
    id: 'electrician',
    label: 'Electrician',
    businessName: 'BrightWire Electrical',
    tagline: 'Safe and certified electrical solutions',
    heroDescription: 'From troubleshooting to installations, we deliver safe electrical work for homes and businesses.',
    primaryColor: 'amber',
    services: [
      { name: 'Fault Diagnosis', description: 'Identify and resolve electrical faults quickly.', priceHint: 'From $55' },
      { name: 'Wiring & Rewiring', description: 'New installations and upgrades for safety.', priceHint: 'From $150' },
      { name: 'Lighting Installations', description: 'Indoor/outdoor lighting and smart controls.', priceHint: 'From $40' },
    ],
    packages: [
      { title: 'Safety Check', price: '$89', features: ['Panel inspection', 'Outlet checks', 'Report'] },
      { title: 'Home Upgrade', price: '$199', features: ['Lighting upgrade', 'Switch replacements', 'Testing'] },
      { title: 'Pro Service', price: '$349', features: ['Advanced diagnostics', 'Repairs', 'Priority support'] },
    ],
    testimonials: [
      { name: 'B. Kiplagat', quote: 'Explained everything clearly and fixed it right away.' },
      { name: 'T. Atieno', quote: 'Great workmanship and safety-first approach.' },
    ],
    faqs: [
      { q: 'Are you licensed?', a: 'Yes, we operate with qualified and certified technicians.' },
      { q: 'Do you handle emergency outages?', a: 'Yes, emergency response is available in covered areas.' },
    ],
  },
  {
    id: 'handyman',
    label: 'Handyman',
    businessName: 'FixRight Handyman',
    tagline: 'Small jobs done right, every time',
    heroDescription: 'General repairs and maintenance for busy homeowners, rentals, and small businesses.',
    primaryColor: 'orange',
    services: [
      { name: 'Furniture Assembly', description: 'Fast and secure assembly of home and office furniture.', priceHint: 'From $30' },
      { name: 'Wall Mounting', description: 'TVs, shelves, mirrors, and decor mounted safely.', priceHint: 'From $25' },
      { name: 'Minor Repairs', description: 'Doors, hinges, fixtures, and touch-up fixes.', priceHint: 'From $35' },
    ],
    packages: [
      { title: 'Quick Fix', price: '$69', features: ['Up to 1 hour', 'Basic tools', '1 task'] },
      { title: 'Half Day', price: '$149', features: ['Up to 4 hours', 'Multiple tasks', 'Cleanup included'] },
      { title: 'Full Day', price: '$269', features: ['Up to 8 hours', 'Priority booking', 'Best value'] },
    ],
    testimonials: [
      { name: 'D. Wairimu', quote: 'Handled three tasks in one visit perfectly.' },
      { name: 'F. Mwangi', quote: 'Very efficient and respectful in our home.' },
    ],
    faqs: [
      { q: 'What jobs do you not handle?', a: 'Major structural work and specialized licensed work are excluded.' },
      { q: 'Do you provide materials?', a: 'Yes, if needed we can source materials at agreed cost.' },
    ],
  },
];
