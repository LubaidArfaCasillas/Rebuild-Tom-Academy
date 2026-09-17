import { useState } from 'react';
import { ArrowRight, Trophy, Medal, Rocket } from 'lucide-react';

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('Semua');

  const categories = ['Semua', 'Teknologi', 'Pangan', 'Energi'];

  const projects = [
    {
      id: 1,
      category: 'Teknologi',
      categoryLabel: 'AGROTEKNOLOGI PRESISI',
      title: 'AgroSense Hub',
      award: 'Juara 1 LKIR Nasional 2024',
      awardIcon: Trophy,
      image: '/dokum/dokum4.jpg',
      author: {
        name: 'Dr. Ir. Hendra Prasetyo',
        role: 'Orang Tua Siswa • Alumnus LKIR 2024',
        avatar: '/dokum/dokum6.jpeg',
      },
    },
    {
      id: 2,
      category: 'Pangan',
      categoryLabel: 'BIOTEKNOLOGI PANGAN',
      title: 'BioFortify Nano',
      award: 'Medali Perak INNOPA 2024',
      awardIcon: Medal,
      image: '/dokum/dokum12.jpeg',
      author: {
        name: 'Dra. Ratna Wardani, M.Pd.',
        role: 'Kepala Sekolah Mitra SMA Unggulan',
        avatar: '/dokum/dokum14.jpeg',
      },
    },
    {
      id: 3,
      category: 'Energi',
      categoryLabel: 'ENERGI TERBARUKAN',
      title: 'SolarRoof Mini',
      award: 'Best Student Startup 2024',
      awardIcon: Rocket,
      image: '/dokum/dokum16.jpeg',
      author: {
        name: 'Alya Shafra',
        role: 'Alumni Penerima Beasiswa Global 2024',
        avatar: '/dokum/dokum21.jpeg',
      },
    },
  ];

  const filteredProjects = activeCategory === 'Semua'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="prestasi" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
              BUKTI REKAM JEJAK
            </span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-950 leading-tight">
              Karya Nyata Siswa
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 bg-slate-100/80 p-1.5 rounded-full border border-slate-200/60 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
                  activeCategory === cat
                    ? 'bg-slate-950 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3 Showcase Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((item) => {
            const AwardIcon = item.awardIcon;
            return (
              <div
                key={item.id}
                className="rounded-3xl border border-slate-200/80 bg-white shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col group text-left"
              >
                {/* Image & Award Header */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 right-4">
                    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-xs font-bold text-slate-900 shadow-md">
                      <AwardIcon className="w-3.5 h-3.5 text-amber-500" />
                      {item.award}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {item.categoryLabel}
                    </span>
                    <h3 className="mt-1 font-serif text-2xl font-bold text-slate-950 tracking-tight">
                      {item.title}
                    </h3>
                  </div>

                  {/* Profile Author Footer */}
                  <div className="mt-8 pt-5 border-t border-slate-100 flex items-center gap-3.5">
                    <img
                      src={item.author.avatar}
                      alt={item.author.name}
                      className="w-11 h-11 rounded-full object-cover border border-slate-200"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 leading-tight">
                        {item.author.name}
                      </h4>
                      <p className="text-xs text-slate-500 leading-normal mt-0.5">
                        {item.author.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <a
            href="#kontak"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200/80 border border-slate-200/70 text-slate-900 font-semibold text-sm transition group"
          >
            <span>Lihat Semua 47+ Prestasi Siswa</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
