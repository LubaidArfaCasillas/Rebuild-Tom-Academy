import { useState } from 'react';
import { MapPin, Mail, Phone, Send, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    school: '',
    whatsapp: '',
    program: 'Bimbingan Lomba Intensif (LKIR/ISEF)',
    topic: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="kontak" className="py-20 bg-slate-50/50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Info & Details */}
          <div className="lg:col-span-5 text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
              HUBUNGI KAMI
            </span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-950 leading-tight">
              Konsultasi Rencana Riset
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              Diskusikan minat ilmiah dan persiapan kompetisi target dengan tim kurikulum kami.
            </p>

            <div className="mt-10 space-y-4">
              {/* Card 1 */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    Yogyakarta Research Hub
                  </h3>
                  <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                    Gedung Riset Sains Terpadu, Bulaksumur, Sleman, D.I. Yogyakarta
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    Surel Korespondensi
                  </h3>
                  <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                    contact@tomacademy.id • info@tomacademy.id
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    Hotline Konsultasi
                  </h3>
                  <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                    +62 812–3456–7890 (Senin - Sabtu, 08.00 - 17.00 WIB)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Assessment Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-sm text-left">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
                Formulir Asesmen Awal Siswa
              </h3>

              {submitted ? (
                <div className="mt-8 p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                  <h4 className="text-lg font-bold text-emerald-950">
                    Formulir Berhasil Dikirim!
                  </h4>
                  <p className="text-sm text-emerald-800 mt-2 max-w-md mx-auto">
                    Terima kasih telah mendaftar. Tim kurikulum TOM Academy akan segera menghubungi Anda melalui WhatsApp untuk jadwal sesi konsultasi privat.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm transition"
                  >
                    Kirim Formulir Lain
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Nama Lengkap Siswa
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: Arya Daniswara"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-50/80 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Asal Sekolah &amp; Kelas
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: SMAN 1 Yogyakarta - Kelas XI"
                        value={formData.school}
                        onChange={(e) => setFormData({ ...formData, school: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-50/80 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Nomor WhatsApp Aktif
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="0812xxxxxxx"
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-50/80 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Pilihan Program
                      </label>
                      <select
                        value={formData.program}
                        onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-50/80 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition"
                      >
                        <option value="Bimbingan Lomba Intensif (LKIR/ISEF)">Bimbingan Lomba Intensif (LKIR/ISEF)</option>
                        <option value="Pendampingan Riset Mandiri">Pendampingan Riset Mandiri</option>
                        <option value="Pengembangan Prototipe & IoT">Pengembangan Prototipe &amp; IoT</option>
                        <option value="Inkubasi Bisnis Siswa">Inkubasi Bisnis Siswa</option>
                        <option value="Bootcamp & Lab Immersion">Bootcamp &amp; Lab Immersion</option>
                        <option value="Mentoring 1-on-1 Personal">Mentoring 1-on-1 Personal</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Gagasan atau Topik yang Ingin Diteliti (Opsional)
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Ceritakan secara singkat ide atau bidang minat yang ingin Anda kembangkan..."
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50/80 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-semibold text-sm shadow-sm active:scale-99 transition flex items-center justify-center gap-2 group"
                  >
                    <span>Kirim Formulir &amp; Jadwalkan Konsultasi</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
