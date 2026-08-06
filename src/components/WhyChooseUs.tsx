import { Zap, Smartphone, Search, Target, Sparkles, ShieldCheck, MessageCircle, BarChart3 } from 'lucide-react';
import { features } from '@/data';

const iconMap: Record<string, React.ElementType> = {
  Zap,
  Smartphone,
  Search,
  Target,
  Sparkles,
  ShieldCheck,
  MessageCircle,
  BarChart3,
};

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red/10 rounded-full blur-[120px]" />
      <div className="relative max-w-7xl mx-auto px-5">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block glass-red px-4 py-1.5 rounded-full text-xs font-bold text-red uppercase tracking-wider mb-4">
            Why Choose KROY
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-snow mb-4">
            Built for <span className="text-gradient-red">Performance</span> & Conversion
          </h2>
          <p className="text-ash text-lg">
            Every website we deliver is engineered with premium features that give your business an edge.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon] || Zap;
            return (
              <div
                key={feature.title}
                className="group glass rounded-2xl p-6 hover:border-red/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red to-red-dark flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-glow">
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-snow mb-2">{feature.title}</h3>
                <p className="text-sm text-ash leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
