import { useEffect, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { reviews } from '@/data';

export default function Reviews() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setActive((prev) => (prev - 1 + reviews.length) % reviews.length);
  const next = () => setActive((prev) => (prev + 1) % reviews.length);

  return (
    <section id="reviews" className="relative py-24 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red/10 rounded-full blur-[120px]" />
      <div className="relative max-w-5xl mx-auto px-5">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block glass-red px-4 py-1.5 rounded-full text-xs font-bold text-red uppercase tracking-wider mb-4">
            Customer Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-snow mb-4">
            Loved by <span className="text-gradient-red">500+ Clients</span>
          </h2>
          <p className="text-ash text-lg">
            Real stories from real clients who grew their businesses with KROY.
          </p>
        </div>

        <div className="relative">
          <div className="glass rounded-3xl p-8 sm:p-12 relative overflow-hidden">
            <Quote size={80} className="absolute top-6 right-6 text-red/10" />
            <div className="relative">
              <div className="flex gap-1 mb-6">
                {[...Array(reviews[active].rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-lg sm:text-xl text-snow leading-relaxed mb-8 min-h-[100px]">
                "{reviews[active].text}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={reviews[active].avatar}
                  alt={reviews[active].name}
                  loading="lazy"
                  className="w-14 h-14 rounded-full object-cover border-2 border-red/30"
                />
                <div>
                  <div className="font-bold text-snow">{reviews[active].name}</div>
                  <div className="text-sm text-ash">{reviews[active].role}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-11 h-11 glass rounded-full flex items-center justify-center text-snow hover:border-red/50 hover:text-red transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === active ? 'w-8 bg-red' : 'w-2 bg-white/20'
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-11 h-11 glass rounded-full flex items-center justify-center text-snow hover:border-red/50 hover:text-red transition-colors"
              aria-label="Next review"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
