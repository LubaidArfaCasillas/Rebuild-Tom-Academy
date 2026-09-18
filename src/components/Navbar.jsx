import { useState, useEffect } from 'react';
import { User, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Tentang');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tentang', href: '#tentang' },
    { name: 'Layanan', href: '#layanan' },
    { name: 'Tahapan', href: '#tahapan' },
    { name: 'Prestasi', href: '#prestasi' },
    { name: 'Kontak', href: '#kontak' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs'
          : 'bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-transparent border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center group">
          <img
            src="/logo.svg"
            alt="TOM Academy"
            className={`h-11 sm:h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105 ${
              !isScrolled ? 'brightness-0 invert drop-shadow-md' : ''
            }`}
          />
        </a>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeTab === link.name;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveTab(link.name)}
                className={`relative py-2 text-sm font-medium transition-colors ${
                  isScrolled
                    ? isActive
                      ? 'text-slate-950 font-semibold'
                      : 'text-slate-600 hover:text-slate-950'
                    : isActive
                    ? 'text-white font-semibold'
                    : 'text-slate-200 hover:text-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[2px] rounded-full ${
                      isScrolled ? 'bg-slate-900' : 'bg-blue-500 shadow-sm shadow-blue-500'
                    }`}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#kontak"
            className={`inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold active:scale-98 transition ${
              isScrolled
                ? 'bg-slate-950 text-white hover:bg-slate-800 shadow-xs'
                : 'bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/30'
            }`}
          >
            Daftar Sekarang
          </a>
          <button
            type="button"
            aria-label="User Account"
            className={`w-10 h-10 rounded-full flex items-center justify-center transition ${
              isScrolled
                ? 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                : 'bg-white/10 hover:bg-white/20 text-white border border-white/15 backdrop-blur-sm'
            }`}
          >
            <User className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 rounded-lg transition ${
              isScrolled
                ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div
          className={`md:hidden border-b px-4 pt-2 pb-6 space-y-3 ${
            isScrolled
              ? 'bg-white border-slate-200 text-slate-900'
              : 'bg-slate-950/95 backdrop-blur-xl border-slate-800 text-white'
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                setActiveTab(link.name);
                setIsOpen(false);
              }}
              className={`block px-3 py-2 rounded-lg text-base font-medium ${
                isScrolled
                  ? activeTab === link.name
                    ? 'bg-slate-100 text-slate-900'
                    : 'text-slate-600 hover:bg-slate-50'
                  : activeTab === link.name
                  ? 'bg-white/10 text-white'
                  : 'text-slate-300 hover:bg-white/5'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <a
              href="#kontak"
              onClick={() => setIsOpen(false)}
              className="w-full text-center px-4 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition"
            >
              Daftar Sekarang
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
