import { useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const [cluster, setCluster] = useState('IoT & Hardware');
  const [level, setLevel] = useState('Siswa SMA');
  const [target, setTarget] = useState('LKIR BRIN / OPSI');

  const clusters = [
    'IoT & Hardware',
    'Bioteknologi Pangan',
    'Energi Terbarukan',
    'Karya Tulis Ilmiah',
    'Kecerdasan Buatan (AI)',
  ];

  const levels = [
    'Siswa SMA',
    'Siswa SMK',
    'Madrasah Aliyah (MA)',
    'Alumni / Pra-Kuliah',
  ];

  const targets = [
    'LKIR BRIN / OPSI',
    'Kompetisi Internasional (ISEF/MTE)',
    'Publikasi Jurnal & HAKI',
    'Inkubasi Startup Siswa',
  ];

  return (
    <section className="relative min-h-[760px] lg:min-h-[840px] flex flex-col justify-between overflow-hidden bg-slate-950 text-white">
      {/* Background Cinematic Photo with Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.jpg"
          alt="Laboratorium Riset Siswa TOM Academy"
          className="w-full h-full object-cover object-center scale-102 transition-transform duration-1000"
        />
        {/* Dark Cinematic Vignette & Deep Blue Ambient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070c18]/95 via-[#081022]/85 to-[#081022]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070c18] via-transparent to-[#070c18]/75" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12 sm:pt-32 sm:pb-14 lg:pt-36 lg:pb-16 relative z-10 w-full flex-1 flex flex-col justify-between text-left">
        {/* Top Hero Text Column */}
        <div className="max-w-3xl">
          {/* Accreditation Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-950/70 border border-blue-500/30 text-blue-300 text-[11px] sm:text-xs font-bold tracking-widest uppercase backdrop-blur-md shadow-xs">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span>AKREDITASI STANDAR LEMBAGA RISET NASIONAL</span>
          </div>

          {/* Headline */}
          <h1 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-[58px] font-bold text-white tracking-tight leading-[1.12]">
            Inkubator Riset &amp;<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-blue-200">
              Inovasi Siswa Mandiri
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
            Membimbing siswa SMA mengubah gagasan ilmiah menjadi prototipe teknologi dan startup berbasis riset dengan standardisasi laboratorium komputasional modern.
          </p>

          {/* Action Buttons */}
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <a
              href="#kontak"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 active:scale-98 transition group"
            >
              <span>Bergabung Sekarang</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#layanan"
              className="inline-flex items-center px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white font-medium text-sm backdrop-blur-md transition"
            >
              Lihat Program &amp; Kurikulum
            </a>
          </div>

          {/* Metrics Row with Dividers */}
          <div className="mt-9 flex flex-wrap items-center gap-8 sm:gap-12 pt-6 border-t border-white/10">
            <div>
              <div className="font-sans text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                120+
              </div>
              <div className="mt-1 text-[11px] sm:text-xs uppercase font-bold tracking-wider text-slate-400">
                Siswa Dibimbing
              </div>
            </div>

            <div className="hidden sm:block w-px h-10 bg-white/15" />

            <div>
              <div className="font-sans text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                47+
              </div>
              <div className="mt-1 text-[11px] sm:text-xs uppercase font-bold tracking-wider text-slate-400">
                Prestasi Lomba
              </div>
            </div>

            <div className="hidden sm:block w-px h-10 bg-white/15" />

            <div>
              <div className="font-sans text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                18+
              </div>
              <div className="mt-1 text-[11px] sm:text-xs uppercase font-bold tracking-wider text-slate-400">
                Startup Inkubasi
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Floating Research Discovery Capsule (WoodNest / Nixtio Style) */}
        <div className="mt-8 lg:mt-10 w-full">
          <div className="p-4 sm:p-5 rounded-3xl bg-[#0e1628]/90 border border-slate-700/50 backdrop-blur-xl shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
              {/* Segment 1: Klaster Keilmuan */}
              <div className="md:col-span-3">
                <label className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-1.5 block">
                  KLASTER KEILMUAN
                </label>
                <div className="relative">
                  <select
                    value={cluster}
                    onChange={(e) => setCluster(e.target.value)}
                    className="w-full appearance-none bg-slate-800/80 border border-slate-700/50 rounded-xl px-4 py-3 text-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 transition cursor-pointer pr-10"
                  >
                    {clusters.map((item) => (
                      <option key={item} value={item} className="bg-slate-900 text-white">
                        {item}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Segment 2: Jenjang Pendidikan */}
              <div className="md:col-span-3">
                <label className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-1.5 block">
                  JENJANG PENDIDIKAN
                </label>
                <div className="relative">
                  <select
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                    className="w-full appearance-none bg-slate-800/80 border border-slate-700/50 rounded-xl px-4 py-3 text-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 transition cursor-pointer pr-10"
                  >
                    {levels.map((item) => (
                      <option key={item} value={item} className="bg-slate-900 text-white">
                        {item}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Segment 3: Target Capaian */}
              <div className="md:col-span-3">
                <label className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-1.5 block">
                  TARGET CAPAIAN
                </label>
                <div className="relative">
                  <select
                    value={target}
                    onChange={(e) => setTarget(e.target.value)}
                    className="w-full appearance-none bg-slate-800/80 border border-slate-700/50 rounded-xl px-4 py-3 text-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 transition cursor-pointer pr-10"
                  >
                    {targets.map((item) => (
                      <option key={item} value={item} className="bg-slate-900 text-white">
                        {item}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Action Button */}
              <div className="md:col-span-3">
                <a
                  href="#layanan"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 active:scale-98 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/30 transition group"
                >
                  <span>EKSPLORASI PROGRAM</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
