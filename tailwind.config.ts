import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(99,102,241,0.35), rgba(10,10,15,0.9) 55%), linear-gradient(145deg, #0a0a0f, #111827)'
      }
    }
  },
  plugins: []
};

export default config;
