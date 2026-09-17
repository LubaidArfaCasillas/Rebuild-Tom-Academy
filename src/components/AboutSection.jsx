import { ArrowRight, CheckCircle2, FlaskConical, Cpu, Rocket, Globe } from 'lucide-react';

export default function AboutSection() {
  const features = [
    {
      icon: FlaskConical,
      title: 'End-to-end Bimbingan Riset',
      desc: 'Pendampingan terstruktur mulai dari ideasi hingga publikasi ilmiah.',
      iconBg: 'bg-blue-50 text-blue-700',
    },
    {
      icon: Cpu,
      title: 'Kolaborasi Prototipe Lab',
      desc: 'Akses sensor presisi, mikrokontroler, dan pengujian laboratorium.',
      iconBg: 'bg-sky-50 text-sky-700',
    },
    {
      icon: Rocket,
      title: 'Inkubasi Bisnis Siswa',
      desc: 'Transformasi riset ke validasi pasar awal dan registrasi HAKI.',
      iconBg: 'bg-emerald-50 text-emerald-700',
    },
    {
      icon: Globe,
      title: 'Jejaring Industri & Alumni',
      desc: 'Koneksi strategis beasiswa universitas terkemuka dunia.',
      iconBg: 'bg-amber-50 text-amber-700',
    },
  ];

  return (
    <section id="tentang" className="py-20 bg-slate-50/50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5 text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
              STANDAR UNGGUL RISET
            </span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-950 leading-tight">
              Mencetak Peneliti Muda Berdaya Saing Global
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              Metode inkubasi saintifik terarah mempersiapkan pelajar menembus kompetisi riset paling kompetitif tingkat internasional.
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-slate-800 font-medium text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Jejaring BRIN, ISEF, &amp; MTE Malaysia</span>
              </div>
              <div className="flex items-center gap-3 text-slate-800 font-medium text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Mentor Ahli BRIN &amp; Dosen PTN Unggulan</span>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="#kontak"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-950 text-white font-semibold text-sm hover:bg-slate-800 active:scale-98 transition shadow-xs group"
              >
                <span>Konsultasi Gratis</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column (2x2 Grid) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {features.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-slate-300 transition group text-left"
                  >
                    <div className={`w-11 h-11 rounded-xl ${item.iconBg} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
