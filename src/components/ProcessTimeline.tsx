import { LayoutTemplate, Upload, Palette, Rocket } from 'lucide-react';
import { processSteps } from '@/data';

const iconMap: Record<string, React.ElementType> = {
  LayoutTemplate,
  Upload,
  Palette,
  Rocket,
};

export default function ProcessTimeline() {
  return (
    <section id="how-it-works" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-red/10 rounded-full blur-[120px]" />
      <div className="relative max-w-7xl mx-auto px-5">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block glass-red px-4 py-1.5 rounded-full text-xs font-bold text-red uppercase tracking-wider mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-snow mb-4">
            Your Website Live in <span className="text-gradient-red">4 Simple Steps</span>
          </h2>
          <p className="text-ash text-lg">
            From choosing a template to launching your website — it takes less than 24 hours.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-24 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-red via-red-dark to-red opacity-30" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => {
              const Icon = iconMap[step.icon] || LayoutTemplate;
              return (
                <div
                  key={step.step}
                  className="group relative glass rounded-2xl p-7 text-center hover:border-red/40 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="absolute -top-4 right-5 text-6xl font-black text-white/5 select-none">
                    {step.step}
                  </div>
                  <div className="relative w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-red to-red-dark flex items-center justify-center shadow-glow group-hover:scale-110 group-hover:rotate-6 transition-transform">
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-snow mb-2">{step.title}</h3>
                  <p className="text-sm text-ash leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
