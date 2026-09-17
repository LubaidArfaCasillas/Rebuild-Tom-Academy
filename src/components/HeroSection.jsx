import { ArrowRight, Cpu, Leaf, Zap, RefreshCw } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 bg-gradient-to-b from-slate-50/70 via-white to-white overflow-hidden">
      {/* Background subtle radial glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-emerald-50/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[56px] font-bold text-slate-950 tracking-tight leading-[1.12]">
              Inkubator Riset &amp; Inovasi Siswa Mandiri
            </h1>
            
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl font-normal">
              Membimbing siswa SMA mengubah gagasan ilmiah menjadi prototipe teknologi dan startup berbasis riset.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#kontak"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-950 text-white font-semibold text-sm shadow-sm hover:bg-slate-800 active:scale-98 transition group"
              >
                <span>Bergabung Sekarang</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="#layanan"
                className="inline-flex items-center px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200/80 border border-slate-200/60 text-slate-800 font-semibold text-sm transition"
              >
                Lihat Program &amp; Kurikulum
              </a>
            </div>

            {/* Stats Card */}
            <div className="mt-10 p-6 rounded-2xl bg-white/90 border border-slate-200/80 shadow-xs backdrop-blur-sm">
              <div className="grid grid-cols-3 divide-x divide-slate-200 text-center">
                <div className="px-2">
                  <div className="font-sans text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                    120+
                  </div>
                  <div className="mt-1 text-[11px] sm:text-xs uppercase font-bold tracking-wider text-slate-500">
                    Siswa Dibimbing
                  </div>
                </div>

                <div className="px-2">
                  <div className="font-sans text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                    47+
                  </div>
                  <div className="mt-1 text-[11px] sm:text-xs uppercase font-bold tracking-wider text-slate-500">
                    Prestasi Lomba
                  </div>
                </div>

                <div className="px-2">
                  <div className="font-sans text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                    18+
                  </div>
                  <div className="mt-1 text-[11px] sm:text-xs uppercase font-bold tracking-wider text-slate-500">
                    Startup Inkubasi
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Photo */}
          <div className="lg:col-span-6">
            <div className="relative rounded-[32px] overflow-hidden shadow-2xl border border-slate-200/60 bg-slate-100 group">
              <img
                src="/dokum/dokum23.jpeg"
                alt="Siswa dan mentor TOM Academy di laboratorium riset"
                className="w-full h-[400px] sm:h-[480px] lg:h-[520px] object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60" />
            </div>
          </div>
        </div>

        {/* Bottom Focus Clusters */}
        <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 shrink-0">
            Fokus Klaster:
          </span>
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-100">
              <Cpu className="w-3.5 h-3.5 text-blue-600" />
              Teknologi: IoT &amp; AI
            </span>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-100">
              <Leaf className="w-3.5 h-3.5 text-emerald-600" />
              Pangan: Presisi &amp; Fortifikasi
            </span>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-sky-50 text-sky-800 border border-sky-100">
              <Zap className="w-3.5 h-3.5 text-sky-600" />
              Energi: Terbarukan
            </span>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-teal-50 text-teal-800 border border-teal-100">
              <RefreshCw className="w-3.5 h-3.5 text-teal-600" />
              Keberlanjutan: Circular Tech
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
