import { useState } from 'react';
import { Rocket, CheckCircle2, Mail, Phone, MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER, CONTACT_EMAIL } from '@/data';

export default function FreeDemo() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    type: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `New Demo Request:%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AType: ${form.type}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="free-demo" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-red/15 rounded-full blur-[120px]" />

      <div className="relative max-w-5xl mx-auto px-5">
        <div className="glass rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red via-red-dark to-red" />

          {submitted ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-700 flex items-center justify-center animate-slide-up">
                <CheckCircle2 size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-black text-snow mb-3">Request Sent!</h3>
              <p className="text-ash">
                We will contact you on WhatsApp shortly to set up your free demo.
              </p>
            </div>
          ) : (
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-block glass-red px-4 py-1.5 rounded-full text-xs font-bold text-red uppercase tracking-wider mb-4">
                  Free Demo
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-snow mb-4">
                  Get a <span className="text-gradient-red">Free Website Demo</span> Before Ordering
                </h2>
                <p className="text-ash text-lg mb-6">
                  Not sure yet? Let us build a free demo of your website so you can see
                  exactly what you are getting before making any payment.
                </p>
                <div className="space-y-3">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener"
                    className="flex items-center gap-3 text-snow hover:text-red transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl glass flex items-center justify-center">
                      <MessageCircle size={18} className="text-red" />
                    </div>
                    <span className="text-sm font-medium">WhatsApp: 01753905587</span>
                  </a>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="flex items-center gap-3 text-snow hover:text-red transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl glass flex items-center justify-center">
                      <Mail size={18} className="text-red" />
                    </div>
                    <span className="text-sm font-medium">{CONTACT_EMAIL}</span>
                  </a>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-ash mb-2">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full bg-ink/60 border border-line rounded-xl px-4 py-3 text-sm text-snow placeholder:text-ash focus:outline-none focus:border-red/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-ash mb-2">WhatsApp / Phone *</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="01XXXXXXXXX"
                    className="w-full bg-ink/60 border border-line rounded-xl px-4 py-3 text-sm text-snow placeholder:text-ash focus:outline-none focus:border-red/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-ash mb-2">Website Type *</label>
                  <select
                    required
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                    className="w-full bg-ink/60 border border-line rounded-xl px-4 py-3 text-sm text-snow focus:outline-none focus:border-red/50 transition-colors"
                  >
                    <option value="" disabled>Select type</option>
                    <option value="Business">Business Website</option>
                    <option value="Portfolio">Portfolio Website</option>
                    <option value="Wedding">Wedding Website</option>
                    <option value="Birthday">Birthday Surprise</option>
                    <option value="E-commerce">E-commerce Website</option>
                    <option value="Restaurant">Restaurant Website</option>
                    <option value="Custom">Custom Project</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-ash mb-2">Message</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={3}
                    placeholder="Tell us about your project..."
                    className="w-full bg-ink/60 border border-line rounded-xl px-4 py-3 text-sm text-snow placeholder:text-ash focus:outline-none focus:border-red/50 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-red to-red-dark rounded-xl text-sm font-bold text-white flex items-center justify-center gap-2 hover:shadow-glow transition-shadow"
                >
                  <Rocket size={16} />
                  Request Free Demo
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
