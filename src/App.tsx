import { useMemo, useState } from 'react';
import { presets } from './data/presets';
import { PresetSwitcher } from './components/PresetSwitcher';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Pricing } from './components/Pricing';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Faq } from './components/Faq';
import { Contact } from './components/Contact';

export default function App() {
  const [presetId, setPresetId] = useState('lawn');

  const preset = useMemo(() => presets.find((p) => p.id === presetId) ?? presets[0], [presetId]);

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-10 border-b border-slate-200/80 bg-slate-50/90 backdrop-blur">
        <div className="container-wrap py-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-slate-500">Gig Economy Template</p>
            <p className="font-bold text-slate-900">{preset.businessName}</p>
          </div>
          <PresetSwitcher
            options={presets.map((p) => ({ id: p.id, label: p.label }))}
            value={presetId}
            onChange={setPresetId}
          />
        </div>
      </header>

      <main>
        <Hero preset={preset} />
        <Services preset={preset} />
        <Pricing preset={preset} />
        <Gallery />
        <Testimonials preset={preset} />
        <Faq preset={preset} />
        <Contact />
      </main>

      <footer className="border-t border-slate-200 py-8">
        <div className="container-wrap text-sm text-slate-500">
          © {new Date().getFullYear()} {preset.businessName}. Template built for gig economy businesses.
        </div>
      </footer>
    </div>
  );
}
