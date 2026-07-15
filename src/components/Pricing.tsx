import { BusinessPreset } from '../types';

type Props = {
  preset: BusinessPreset;
};

export function Pricing({ preset }: Props) {
  return (
    <section id="pricing" className="container-wrap py-12">
      <h2 className="section-title">Pricing Packages</h2>
      <p className="section-subtitle">Simple package options your customers can understand quickly.</p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {preset.packages.map((pkg) => (
          <article key={pkg.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-lg font-bold">{pkg.title}</h3>
            <p className="mt-2 text-2xl font-extrabold">{pkg.price}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {pkg.features.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>
            <button className="mt-6 w-full rounded-lg bg-slate-900 px-4 py-2.5 text-white font-semibold hover:bg-slate-800">
              Choose Plan
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
