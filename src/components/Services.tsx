import { BusinessPreset } from '../types';

type Props = {
  preset: BusinessPreset;
};

export function Services({ preset }: Props) {
  return (
    <section id="services" className="container-wrap py-12">
      <h2 className="section-title">Services</h2>
      <p className="section-subtitle">Pick from our most requested services, tailored for local customers.</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {preset.services.map((service) => (
          <article key={service.name} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-lg font-semibold text-slate-900">{service.name}</h3>
            <p className="mt-2 text-slate-600">{service.description}</p>
            <p className="mt-4 text-sm font-semibold text-slate-800">{service.priceHint}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
