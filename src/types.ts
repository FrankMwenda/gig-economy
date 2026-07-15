export type ServiceItem = {
  name: string;
  description: string;
  priceHint: string;
};

export type PackageItem = {
  title: string;
  price: string;
  features: string[];
};

export type Testimonial = {
  name: string;
  quote: string;
};

export type FaqItem = {
  q: string;
  a: string;
};

export type BusinessPreset = {
  id: string;
  label: string;
  businessName: string;
  tagline: string;
  heroDescription: string;
  primaryColor: string;
  services: ServiceItem[];
  packages: PackageItem[];
  testimonials: Testimonial[];
  faqs: FaqItem[];
};
