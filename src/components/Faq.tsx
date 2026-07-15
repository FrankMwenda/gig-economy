import { BusinessPreset } from '../types';

type Props = {
  preset: BusinessPreset;
};

export function Faq({ preset }: Props) {
  return (
    <section id="faq" className="container-wrap py-12">
      <h2 className="section-title">FAQ</h2>
      <p className="section-subtitle">Answer common questions before customers even ask.</p>

      <div className="mt-8 space-y-3">
        {preset.faqs.map((item) => (
          <details key={item.q} className="rounded-xl bg-white p-4 ring-1 ring-slate-200">
            <summary className="cursor-pointer font-semibold text-slate-900">{item.q}</summary>
            <p className="mt-2 text-slate-600">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
