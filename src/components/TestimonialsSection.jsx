import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: 'Pendampingan riset di TOM Academy membuka cakrawala berpikir kritis anak saya hingga berhasil membawa emas di kompetisi internasional.',
      name: 'Dr. Ir. Hendra Prasetyo',
      role: 'Orang Tua Siswa • Alumnus LKIR 2024',
      avatar: '/dokum/dokum6.jpeg',
    },
    {
      quote: 'Kemitraan strategis dengan TOM Academy membantu sekolah kami membangun budaya saintifik mandiri yang nyata, bukan sekadar hafalan teori.',
      name: 'Dra. Ratna Wardani, M.Pd.',
      role: 'Kepala Sekolah Mitra SMA Unggulan',
      avatar: '/dokum/dokum14.jpeg',
    },
    {
      quote: 'Dari sekadar corat-coret di buku catatan, mentor TOM membimbing kami sampai punya prototipe IoT fungsional dan lolos seleksi pameran dunia.',
      name: 'Alya Shafira',
      role: 'Alumni Penerima Beasiswa Global 2024',
      avatar: '/dokum/dokum21.jpeg',
    },
  ];

  return (
    <section className="py-20 bg-slate-50/50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
            SUARA KOMUNITAS
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-950 leading-tight">
            Kepercayaan Orang Tua &amp; Sekolah
          </h2>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between text-left"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 stroke-amber-400" />
                  ))}
                </div>

                <p className="text-slate-700 text-base leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-3.5">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <h4 className="text-base font-bold text-slate-950 leading-tight">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-normal">
                    {item.role}
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
