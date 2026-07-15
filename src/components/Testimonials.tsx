import { BusinessPreset } from '../types';

type Props = {
  preset: BusinessPreset;
};

export function Testimonials({ preset }: Props) {
  return (
    <section id="testimonials" className="container-wrap py-12">
      <h2 className="section-title">Customer Testimonials</h2>
      <p className="section-subtitle">Social proof that works for every gig industry template.</p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {preset.testimonials.map((t) => (
          <blockquote key={t.name} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <p className="text-slate-700">“{t.quote}”</p>
            <footer className="mt-4 text-sm font-semibold text-slate-900">— {t.name}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
