import { useMemo, useState } from 'react';
import { Search, Eye, Heart, Star, TrendingUp, Sparkles, Zap } from 'lucide-react';
import { templates, categories, WHATSAPP_NUMBER } from '@/data';

const badgeStyles: Record<string, { bg: string; text: string; icon?: React.ElementType }> = {
  Premium: { bg: 'bg-gradient-to-r from-red to-red-dark', text: 'text-white', icon: Sparkles },
  Trending: { bg: 'bg-gradient-to-r from-orange-500 to-red-600', text: 'text-white', icon: TrendingUp },
  New: { bg: 'bg-gradient-to-r from-green-500 to-emerald-600', text: 'text-white', icon: Zap },
  Popular: { bg: 'bg-white/10 border border-white/20', text: 'text-snow' },
};

export default function TemplateMarketplace() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [wishlist, setWishlist] = useState<string[]>([]);

  const filtered = useMemo(() => {
    return templates.filter((t) => {
      const matchSearch =
        t.name.toLowerCase().includes(search.toLowerCase()) ||
        t.description.toLowerCase().includes(search.toLowerCase());
      const matchCat = activeCategory === 'all' || t.category === activeCategory;
      return matchSearch && matchCat;
    });
  }, [search, activeCategory]);

  const toggleWishlist = (id: string) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <section id="templates" className="relative py-24">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-red/10 rounded-full blur-[120px]" />
      <div className="relative max-w-7xl mx-auto px-5">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block glass-red px-4 py-1.5 rounded-full text-xs font-bold text-red uppercase tracking-wider mb-4">
            Featured Marketplace
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-snow mb-4">
            Premium Template <span className="text-gradient-red">Collection</span>
          </h2>
          <p className="text-ash text-lg">
            Browse, filter, and preview our handcrafted website templates.
          </p>
        </div>

        {/* Search + Filters */}
        <div className="mb-10 space-y-4">
          <div className="relative max-w-xl mx-auto">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-ash" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search templates..."
              className="w-full glass pl-12 pr-4 py-3.5 rounded-full text-sm text-snow placeholder:text-ash focus:outline-none focus:border-red/50 transition-colors"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                activeCategory === 'all'
                  ? 'bg-gradient-to-r from-red to-red-dark text-white shadow-glow'
                  : 'glass text-ash hover:text-snow hover:border-red/30'
              }`}
            >
              All Templates
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-red to-red-dark text-white shadow-glow'
                    : 'glass text-ash hover:text-snow hover:border-red/30'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Template grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((tpl) => {
            const badge = badgeStyles[tpl.badge];
            const BadgeIcon = badge.icon;
            const isWishlisted = wishlist.includes(tpl.id);
            return (
              <div
                key={tpl.id}
                className="group glass rounded-2xl overflow-hidden hover:border-red/40 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={tpl.image}
                    alt={tpl.name}
                    loading="lazy"
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                  {BadgeIcon && (
                    <div className={`absolute top-4 left-4 ${badge.bg} ${badge.text} px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5`}>
                      <BadgeIcon size={12} />
                      {tpl.badge}
                    </div>
                  )}
                  <button
                    onClick={() => toggleWishlist(tpl.id)}
                    className="absolute top-4 right-4 w-9 h-9 glass rounded-full flex items-center justify-center hover:bg-red/20 transition-colors"
                    aria-label="Add to wishlist"
                  >
                    <Heart
                      size={16}
                      className={isWishlisted ? 'text-red fill-red' : 'text-snow'}
                    />
                  </button>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-5 gap-3">
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`I want to order "${tpl.name}" template`)}`}
                      target="_blank"
                      rel="noopener"
                      className="px-4 py-2 bg-gradient-to-r from-red to-red-dark rounded-full text-xs font-bold text-white flex items-center gap-1.5"
                    >
                      <Eye size={14} />
                      Live Demo
                    </a>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`I want to order "${tpl.name}" template`)}`}
                      target="_blank"
                      rel="noopener"
                      className="px-4 py-2 glass border border-white/20 rounded-full text-xs font-bold text-snow flex items-center gap-1.5"
                    >
                      Order Now
                    </a>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-red uppercase tracking-wider">
                      {categories.find((c) => c.id === tpl.category)?.name || tpl.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-ash">
                      <Star size={12} className="text-yellow-500 fill-yellow-500" />
                      {tpl.rating}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-snow mb-1">{tpl.name}</h3>
                  <p className="text-sm text-ash line-clamp-2 mb-4">{tpl.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-black text-snow">
                      ৳{tpl.price.toLocaleString()}
                    </span>
                    <span className="text-xs text-ash">{tpl.views.toLocaleString()} views</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-ash">
            <p className="text-lg">No templates found. Try a different search or filter.</p>
          </div>
        )}
      </div>
    </section>
  );
}
