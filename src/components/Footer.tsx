import { Mail, Phone, MessageCircle, Send, ArrowUp, Globe } from 'lucide-react';
import { WHATSAPP_NUMBER, CONTACT_EMAIL } from '@/data';

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative pt-20 pb-8 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red via-red-dark to-red" />
      <div className="absolute bottom-0 left-0 w-full h-64 bg-red/5 blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-5">
        <div className="grid lg:grid-cols-12 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <a href="#home" className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red to-red-dark flex items-center justify-center shadow-glow">
                <span className="text-white font-black text-lg">K</span>
              </div>
              <span className="text-xl font-black text-snow">KROY</span>
            </a>
            <p className="text-sm text-ash leading-relaxed mb-6 max-w-sm">
              Bangladesh's premium website marketplace. We deliver professional, conversion-focused
              websites within 24 hours — templates, business sites, wedding pages, and custom development.
            </p>
            <div className="flex gap-3">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener"
                className="w-10 h-10 glass rounded-xl flex items-center justify-center text-ash hover:text-red hover:border-red/30 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 glass rounded-xl flex items-center justify-center text-ash hover:text-red hover:border-red/30 transition-colors"
                aria-label="Facebook"
              >
                <Globe size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 glass rounded-xl flex items-center justify-center text-ash hover:text-red hover:border-red/30 transition-colors"
                aria-label="Telegram"
              >
                <Send size={18} />
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="w-10 h-10 glass rounded-xl flex items-center justify-center text-ash hover:text-red hover:border-red/30 transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-snow mb-4 uppercase tracking-wider">Services</h4>
            <ul className="space-y-2.5">
              {['Landing Page Design', 'Business Website', 'Portfolio Website', 'Wedding Website', 'E-commerce Setup', 'Custom Development'].map((s) => (
                <li key={s}>
                  <a href="#templates" className="text-sm text-ash hover:text-red transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Templates */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-snow mb-4 uppercase tracking-wider">Templates</h4>
            <ul className="space-y-2.5">
              {['Business', 'Portfolio', 'Wedding', 'Birthday', 'Restaurant', 'E-commerce'].map((t) => (
                <li key={t}>
                  <a href="#templates" className="text-sm text-ash hover:text-red transition-colors">
                    {t}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h4 className="text-sm font-bold text-snow mb-4 uppercase tracking-wider">Get in Touch</h4>
            <div className="space-y-3">
              <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-3 text-sm text-ash hover:text-red transition-colors">
                <Mail size={16} className="text-red" />
                {CONTACT_EMAIL}
              </a>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener" className="flex items-center gap-3 text-sm text-ash hover:text-red transition-colors">
                <Phone size={16} className="text-red" />
                01753905587
              </a>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener" className="flex items-center gap-3 text-sm text-ash hover:text-red transition-colors">
                <MessageCircle size={16} className="text-red" />
                WhatsApp Us
              </a>
            </div>
            <a
              href="#free-demo"
              className="inline-block mt-5 px-6 py-3 bg-gradient-to-r from-red to-red-dark rounded-full text-sm font-bold text-white hover:shadow-glow transition-shadow"
            >
              Get Free Demo
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-ash">
            © 2026 <span className="text-red font-semibold">KROY</span>. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm text-ash">
            <a href="#" className="hover:text-red transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-red transition-colors">Terms</a>
            <a href="#faq" className="hover:text-red transition-colors">FAQ</a>
          </div>
          <button
            onClick={scrollTop}
            className="w-10 h-10 glass rounded-full flex items-center justify-center text-ash hover:text-red hover:border-red/30 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
