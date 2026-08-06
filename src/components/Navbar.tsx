import { useEffect, useState } from 'react';
import { Menu, X, MessageCircle, Zap } from 'lucide-react';
import { WHATSAPP_NUMBER } from '@/data';

const navLinks = [
  { label: 'Templates', href: '#templates' },
  { label: 'Categories', href: '#categories' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Blog', href: '#blog' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass py-3' : 'py-5 bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-5 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red to-red-dark flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
              <span className="text-white font-black text-lg">K</span>
            </div>
            <span className="text-xl font-black tracking-tight text-snow">
              KROY
            </span>
          </a>

          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-ash hover:text-snow transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-red group-hover:w-3/4 transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#free-demo"
              className="px-5 py-2.5 text-sm font-semibold text-snow border border-line hover:border-red/50 rounded-full transition-colors"
            >
              Free Demo
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener"
              className="px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-red to-red-dark rounded-full hover:shadow-glow transition-shadow flex items-center gap-2"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>

          <button
            className="lg:hidden text-snow p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-ink/80 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-72 glass p-6 pt-24 animate-slide-up">
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 text-sm font-medium text-ash hover:text-snow hover:bg-white/5 rounded-lg transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-3">
              <a
                href="#free-demo"
                onClick={() => setOpen(false)}
                className="block w-full text-center px-5 py-3 text-sm font-semibold text-snow border border-line rounded-full"
              >
                Free Demo
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener"
                className="flex items-center justify-center gap-2 w-full px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-red to-red-dark rounded-full"
              >
                <MessageCircle size={16} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
