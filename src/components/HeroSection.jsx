import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[700px] lg:min-h-[800px] flex flex-col justify-center overflow-hidden bg-slate-950 text-white">
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 relative z-10 w-full text-left">
        {/* Top Hero Text Column */}
        <div className="max-w-3xl">
          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[62px] font-bold text-white tracking-tight leading-[1.12]">
            Inkubator Riset &amp;<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-blue-200">
              Inovasi Siswa Mandiri
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
            Membimbing siswa SMA mengubah gagasan ilmiah menjadi prototipe teknologi dan startup berbasis riset dengan standardisasi laboratorium komputasional modern.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
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
          <div className="mt-12 flex flex-wrap items-center gap-8 sm:gap-12 pt-8 border-t border-white/10">
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
      </div>
    </section>
  );
}
