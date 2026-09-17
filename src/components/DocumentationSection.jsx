export default function DocumentationSection() {
  const moments = [
    {
      image: '/dokum/dokum2.jpeg',
      tag: 'MALAYSIA TECHNOLOGY EXPO',
      title: 'Presentasi Poster Internasional',
    },
    {
      image: '/dokum/dokum11.jpeg',
      tag: 'LAB RISET BIOSAINS PTN',
      title: 'Uji Validasi Sensor Mikroba',
    },
    {
      image: '/dokum/dokum3.jpeg',
      tag: 'PANGGUNG INOVASI INNOPA',
      title: 'Pitching Finalist di Hadapan Juri',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
            DOKUMENTASI PROGRAM
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-950 leading-tight">
            Momen Nyata di Lapangan
          </h2>
        </div>

        {/* 3 Photos Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {moments.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-slate-200/80 bg-white shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden group text-left"
            >
              <div className="h-64 w-full overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                  {item.tag}
                </span>
                <h3 className="mt-2 text-xl font-bold text-slate-950 tracking-tight leading-snug">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
