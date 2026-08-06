import { useEffect, useRef, useState } from 'react';
import { Users, CheckCircle2, Star, TrendingUp, ShieldCheck, Gauge, Lock } from 'lucide-react';
import { stats } from '@/data';

export default function TrustSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const icons = [Users, CheckCircle2, Star, TrendingUp];

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink-2 to-ink" />
      <div className="relative max-w-7xl mx-auto px-5" ref={ref}>
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => {
            const Icon = icons[i];
            return (
              <div
                key={stat.label}
                className="glass rounded-2xl p-6 text-center hover:border-red/30 transition-colors group"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-red/20 to-red-dark/10 border border-red/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon size={24} className="text-red" />
                </div>
                <div className="text-4xl font-black text-snow mb-1">
                  {visible ? (
                    <Counter
                      target={stat.value}
                      decimals={stat.decimals || 0}
                      suffix={stat.suffix}
                    />
                  ) : (
                    <span>0{stat.suffix}</span>
                  )}
                </div>
                <div className="text-sm text-ash">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { icon: ShieldCheck, label: 'SSL Secured' },
            { icon: Gauge, label: '99 PageSpeed Score' },
            { icon: Lock, label: 'Data Protected' },
            { icon: CheckCircle2, label: '24h Delivery Guaranteed' },
          ].map((badge) => (
            <div
              key={badge.label}
              className="glass-red px-5 py-2.5 rounded-full flex items-center gap-2 text-sm font-medium text-ash"
            >
              <badge.icon size={16} className="text-red" />
              {badge.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ target, decimals, suffix }: { target: number; decimals: number; suffix: string }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let current = 0;
    const inc = target / 60;
    const timer = setInterval(() => {
      current += inc;
      if (current >= target) {
        setVal(target);
        clearInterval(timer);
      } else {
        setVal(current);
      }
    }, 20);
    return () => clearInterval(timer);
  }, [target]);

  return (
    <span>
      {decimals > 0 ? val.toFixed(decimals) : Math.ceil(val)}
      {suffix}
    </span>
  );
}
