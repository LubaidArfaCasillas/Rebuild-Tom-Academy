import { ArrowRight, Trophy, FileText, Cpu, Lightbulb, Microscope, Users } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      image: '/dokum/dokum1.jpeg',
      icon: Trophy,
      badge: 'LKIR BRIN, ISEF',
      title: 'Bimbingan Lomba Intensif',
      desc: 'Strategi kompetisi dari bedah kriteria penilaian juri hingga simulasi tanya-jawab.',
    },
    {
      image: '/dokum/dokum10.jpeg',
      icon: FileText,
      badge: 'KARYA TULIS ILMIAH',
      title: 'Pendampingan Riset Mandiri',
      desc: 'Formulasi hipotesis terukur, pengolahan data statistik, dan penulisan naskah standar jurnal.',
    },
    {
      image: '/dokum/dokum4.jpg',
      icon: Cpu,
      badge: 'IOT, SENSOR, HARDWARE',
      title: 'Pengembangan Prototipe',
      desc: 'Fabrikasi model fisik, pemrograman embedded system, dan validasi fungsional di lab.',
    },
    {
      image: '/dokum/dokum8.jpeg',
      icon: Lightbulb,
      badge: 'SEED PITCH, HAKI',
      title: 'Inkubasi Bisnis Siswa',
      desc: 'Riset kelayakan komersial, perlindungan hak cipta inovasi, dan perancangan pitch deck.',
    },
    {
      image: '/dokum/dokum16.jpeg',
      icon: Microscope,
      badge: '3-HARI HANDS-ON',
      title: 'Bootcamp & Lab Immersion',
      desc: 'Pelatihan intensif alat uji laboratorium basah dan kalibrasi instrumentasi modern.',
    },
    {
      image: '/dokum/dokum23.jpeg',
      icon: Users,
      badge: 'MATCHMAKING AHLI',
      title: 'Mentoring 1-on-1 Personal',
      desc: 'Bimbingan mingguan privat bersama akademisi spesialis sesuai topik penelitian.',
    },
  ];

  return (
    <section id="layanan" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
            LAYANAN UTAMA
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-950 leading-tight">
            Program Unggulan
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Dukungan komprehensif dari laboratorium hingga panggung dunia.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/80 bg-white shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300 overflow-hidden flex flex-col group text-left"
              >
                {/* Photo banner */}
                <div className="h-52 w-full overflow-hidden bg-slate-100 relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-950/10 group-hover:bg-transparent transition-colors" />
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Icon & Badge Row */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-50/80 text-blue-800 border border-blue-100">
                        {service.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-950 tracking-tight leading-snug">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <a
                      href="#kontak"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors"
                    >
                      <span>Detail Modul</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
