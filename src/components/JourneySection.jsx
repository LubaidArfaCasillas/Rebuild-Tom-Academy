export default function JourneySection() {
  const steps = [
    {
      num: '01',
      tag: 'TAHAP AWAL',
      title: 'Discovery & Ideasi',
      desc: 'Eksplorasi isu lokal, identifikasi masalah, dan kajian pustaka komparatif.',
    },
    {
      num: '02',
      tag: 'EKSPERIMEN',
      title: 'Validasi & Desain',
      desc: 'Perancangan metodologi ilmiah, uji coba variabel, dan olah data laboratorium.',
    },
    {
      num: '03',
      tag: 'KOMPETISI',
      title: 'Prototipe & Lomba',
      desc: 'Penyusunan naskah final, simulasi presentasi juri, dan pameran inovasi.',
    },
    {
      num: '04',
      tag: 'DAMPAK LANJUT',
      title: 'Inkubasi & HAKI',
      desc: 'Pendaftaran hak cipta inovasi, pilot project komersial, dan ekspansi dampak.',
    },
  ];

  return (
    <section id="tahapan" className="py-20 bg-slate-50/50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
            METODOLOGI RISET
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-950 leading-tight">
            Perjalanan dari Ide ke Dampak
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Alur terukur dan teruji mengantarkan gagasan siswa menjadi capaian nyata.
          </p>
        </div>

        {/* 4 Steps Horizontal Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between text-left group"
            >
              <div>
                <div className="font-sans text-5xl font-extrabold text-blue-200 group-hover:text-blue-300 transition-colors tracking-tighter">
                  {step.num}
                </div>
                
                <div className="mt-6">
                  <span className="text-xs font-bold tracking-wider text-emerald-700 uppercase">
                    {step.tag}
                  </span>
                  <h3 className="mt-2 text-xl font-bold text-slate-950 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
