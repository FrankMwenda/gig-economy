export function Gallery() {
  const cards = ['Before / After #1', 'Project #2', 'Project #3', 'Project #4', 'Project #5', 'Project #6'];

  return (
    <section id="gallery" className="container-wrap py-12">
      <h2 className="section-title">Gallery</h2>
      <p className="section-subtitle">Show real customer work to build trust and win local leads.</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <div key={card} className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-200 to-slate-100 p-4 ring-1 ring-slate-200">
            <div className="h-full w-full rounded-xl border border-dashed border-slate-300 grid place-items-center text-slate-500 text-sm font-medium">
              {card}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
