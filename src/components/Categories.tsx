import { Briefcase, Camera, Heart, Gift, UtensilsCrossed, ShoppingCart, CalendarDays, Building2, ArrowRight } from 'lucide-react';
import { categories } from '@/data';

const iconMap: Record<string, React.ElementType> = {
  Briefcase,
  Camera,
  Heart,
  Gift,
  UtensilsCrossed,
  ShoppingCart,
  CalendarDays,
  Building2,
};

export default function Categories() {
  return (
    <section id="categories" className="relative py-24">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block glass-red px-4 py-1.5 rounded-full text-xs font-bold text-red uppercase tracking-wider mb-4">
            Popular Categories
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-snow mb-4">
            Find Your Perfect <span className="text-gradient-red">Website Type</span>
          </h2>
          <p className="text-ash text-lg">
            Explore our premium collection of website templates designed for every business need.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat) => {
            const Icon = iconMap[cat.icon] || Briefcase;
            return (
              <a
                key={cat.id}
                href="#templates"
                className="group relative glass rounded-2xl overflow-hidden hover:border-red/40 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    loading="lazy"
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-gradient-to-br from-red to-red-dark flex items-center justify-center shadow-glow">
                    <Icon size={20} className="text-white" />
                  </div>
                  <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full text-xs font-semibold text-snow">
                    {cat.count}+ Templates
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-snow mb-1 group-hover:text-red transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-ash line-clamp-2 mb-3">{cat.description}</p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-red">
                    Browse Templates
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
