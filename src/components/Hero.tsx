import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Eye, MessageCircle, Zap, ShieldCheck, Star } from 'lucide-react';
import { WHATSAPP_NUMBER } from '@/data';

export default function Hero() {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let current = 0;
          const target = 850;
          const inc = target / 60;
          const timer = setInterval(() => {
            current += inc;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.ceil(current));
            }
          }, 20);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red/20 rounded-full blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-red-dark/15 rounded-full blur-[100px] animate-float" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-red/10 rounded-full blur-[80px] animate-float-rev" />

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-red/40 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${5 + Math.random() * 5}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-5 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div ref={ref} className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 glass-red px-4 py-2 rounded-full mb-6 animate-slide-up">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-success opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
              </span>
              <span className="text-xs font-semibold text-snow">
                Live · 24 Hour Express Delivery
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Bangladesh's Premium
              <br />
              <span className="text-gradient-red">Website Marketplace</span>
            </h1>

            <p className="text-lg text-ash max-w-xl mx-auto lg:mx-0 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Ready-Made Templates, Business Websites, Portfolio Websites,
              Wedding Websites & Custom Development — Delivered Within 24 Hours.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <a
                href="#templates"
                className="group px-7 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-red to-red-dark rounded-full hover:shadow-glow transition-all flex items-center gap-2"
              >
                Browse Templates
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#free-demo"
                className="px-7 py-3.5 text-sm font-bold text-snow glass hover:border-red/50 rounded-full transition-colors flex items-center gap-2"
              >
                <Eye size={16} />
                Get Free Demo
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener"
                className="px-7 py-3.5 text-sm font-bold text-snow border border-line hover:border-red/50 rounded-full transition-colors flex items-center gap-2"
              >
                <MessageCircle size={16} />
                WhatsApp Consultation
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-ash animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <span className="flex items-center gap-2">
                <Zap size={16} className="text-red" />
                24h Delivery
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-red" />
                Secure Hosting
              </span>
              <span className="flex items-center gap-2">
                <Star size={16} className="text-red" />
                4.9/5 Rating
              </span>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative animate-slide-up" style={{ animationDelay: '0.3s' }}>
            {/* Browser mockup */}
            <div className="relative glass rounded-2xl overflow-hidden shadow-glow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-red/5 to-transparent" />
              <div className="relative flex items-center gap-2 px-4 py-3 border-b border-line">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 ml-3 bg-ink/60 rounded-md px-3 py-1.5 text-xs text-ash flex items-center gap-1.5">
                  <ShieldCheck size={10} className="text-success" />
                  kroy.com
                </div>
              </div>
              <div className="relative p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <div className="w-12 h-7 rounded-lg bg-gradient-to-r from-red to-red-dark" />
                  <div className="flex gap-2">
                    <div className="w-10 h-2 rounded bg-white/10" />
                    <div className="w-10 h-2 rounded bg-white/10" />
                    <div className="w-10 h-2 rounded bg-white/10" />
                  </div>
                </div>
                <div className="text-center py-6 space-y-3">
                  <div className="h-5 rounded-lg bg-gradient-to-r from-red/60 to-red-dark/60 mx-auto w-3/4 shimmer" />
                  <div className="h-5 rounded-lg bg-white/10 mx-auto w-1/2 shimmer" />
                  <div className="inline-block px-6 py-2.5 rounded-full bg-gradient-to-r from-red to-red-dark mt-2" />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="h-20 rounded-xl glass border-t-2 border-red/40" />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating stat cards */}
            <div className="absolute -top-5 -right-3 glass rounded-xl px-4 py-3 flex items-center gap-3 animate-float shadow-lg">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red to-red-dark flex items-center justify-center">
                <Zap size={18} className="text-white" />
              </div>
              <div>
                <div className="text-xl font-black text-snow">{count}+</div>
                <div className="text-xs text-ash">Projects Delivered</div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-3 glass rounded-xl px-4 py-3 flex items-center gap-3 animate-float shadow-lg" style={{ animationDelay: '2s' }}>
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
                <Star size={18} className="text-white" />
              </div>
              <div>
                <div className="text-xl font-black text-snow">4.9/5</div>
                <div className="text-xs text-ash">Client Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ink to-transparent" />
    </section>
  );
}
