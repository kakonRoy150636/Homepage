import { useState } from 'react';
import { Plus } from 'lucide-react';
import { faqItems } from '@/data';

export default function FAQ() {
  const [open, setOpen] = useState<string | null>('f1');

  const toggle = (id: string) => setOpen(open === id ? null : id);

  return (
    <section id="faq" className="relative py-24">
      <div className="max-w-3xl mx-auto px-5">
        <div className="text-center mb-14">
          <span className="inline-block glass-red px-4 py-1.5 rounded-full text-xs font-bold text-red uppercase tracking-wider mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-snow mb-4">
            Frequently Asked <span className="text-gradient-red">Questions</span>
          </h2>
          <p className="text-ash text-lg">
            Everything you need to know about KROY's website services.
          </p>
        </div>

        <div className="space-y-3">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className={`glass rounded-2xl overflow-hidden transition-all duration-300 ${
                open === item.id ? 'border-red/30' : 'hover:border-white/10'
              }`}
            >
              <button
                onClick={() => toggle(item.id)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
              >
                <span className={`text-sm font-semibold ${open === item.id ? 'text-snow' : 'text-ash'}`}>
                  {item.question}
                </span>
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                    open === item.id
                      ? 'bg-gradient-to-br from-red to-red-dark text-white rotate-45'
                      : 'glass text-ash'
                  }`}
                >
                  <Plus size={16} />
                </span>
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  open === item.id ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-sm text-ash leading-relaxed">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
