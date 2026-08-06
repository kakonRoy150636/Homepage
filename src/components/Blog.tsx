import { CalendarDays, Clock, ArrowRight } from 'lucide-react';
import { blogPosts } from '@/data';

export default function Blog() {
  return (
    <section id="blog" className="relative py-24">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block glass-red px-4 py-1.5 rounded-full text-xs font-bold text-red uppercase tracking-wider mb-4">
            Latest Articles
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-snow mb-4">
            Insights & <span className="text-gradient-red">Guides</span>
          </h2>
          <p className="text-ash text-lg">
            Expert tips on web design, SEO, and growing your business online in Bangladesh.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group glass rounded-2xl overflow-hidden hover:border-red/40 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                <div className="absolute top-4 left-4 glass-red px-3 py-1 rounded-full text-xs font-semibold text-red">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-ash mb-3">
                  <span className="flex items-center gap-1.5">
                    <CalendarDays size={12} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-snow mb-2 group-hover:text-red transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-ash line-clamp-2 mb-4">{post.excerpt}</p>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-red">
                  Read More
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
