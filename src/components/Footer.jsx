import { ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#FAF7F2] border-t border-[#EAE4D9] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand Info Column */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center">
                <img
                  src="/logo.svg"
                  alt="TOM Academy"
                  className="h-12 w-auto object-contain"
                />
              </div>

              <p className="mt-4 text-sm text-stone-600 leading-relaxed max-w-sm">
                Lembaga akselerasi akademik dan riset terapan prestisius untuk talenta unggul Indonesia menuju institusi global terbaik.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-2 text-xs font-semibold text-stone-600">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Terakreditasi Akademik Nasional</span>
            </div>
          </div>

          {/* Campus Location Column */}
          <div className="md:col-span-4">
            <span className="text-xs font-bold uppercase tracking-widest text-stone-400">
              KAMPUS &amp; SEKRETARIAT UTAMA
            </span>
            <div className="mt-4 text-sm text-stone-700 leading-relaxed space-y-1">
              <p className="font-semibold text-stone-900">Gedung Riset Sains &amp; Teknologi Terpadu, Lt. 3</p>
              <p>Kawasan Bulaksumur, Caturtunggal, Depok, Sleman</p>
              <p>Daerah Istimewa Yogyakarta 55281</p>
              <p className="pt-2 text-stone-500">Telepon: (0274) 551–890 • info@tomacademy.id</p>
            </div>
          </div>

          {/* Links Column */}
          <div className="md:col-span-3">
            <span className="text-xs font-bold uppercase tracking-widest text-stone-400">
              JEJARING RESMI
            </span>
            <ul className="mt-4 space-y-2.5 text-sm text-stone-600">
              <li>
                <a href="#tentang" className="hover:text-stone-950 transition-colors">
                  Direktorat Akademik
                </a>
              </li>
              <li>
                <a href="#prestasi" className="hover:text-stone-950 transition-colors">
                  Jurnal Riset Siswa
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-stone-950 transition-colors">
                  Pusat Pengujian &amp; Sertifikasi
                </a>
              </li>
              <li>
                <a href="#prestasi" className="hover:text-stone-950 transition-colors">
                  Verifikasi Alumni
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal / Copyright Bar */}
        <div className="mt-16 pt-8 border-t border-[#EAE4D9] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© 2025 TOM Academy Foundation. Seluruh hak cipta dilindungi.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-stone-800 transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-stone-800 transition-colors">Pakta Integritas</a>
            <a href="#" className="hover:text-stone-800 transition-colors">Aksesibilitas</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

