import { Check, Crown, Star } from 'lucide-react';
import { pricingPlans, WHATSAPP_NUMBER } from '@/data';

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-red/10 rounded-full blur-[120px]" />
      <div className="relative max-w-7xl mx-auto px-5">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block glass-red px-4 py-1.5 rounded-full text-xs font-bold text-red uppercase tracking-wider mb-4">
            Pricing Plans
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-snow mb-4">
            Simple, Transparent <span className="text-gradient-red">Pricing</span>
          </h2>
          <p className="text-ash text-lg">
            Choose the plan that fits your needs. All prices include free hosting and 24-hour delivery.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? 'glass border-2 border-red/50 shadow-glow-lg scale-105'
                  : 'glass hover:border-red/30'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red to-red-dark px-5 py-1.5 rounded-full text-xs font-bold text-white flex items-center gap-1.5 shadow-glow">
                  <Crown size={14} />
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-black text-snow mb-2">{plan.name}</h3>
                <p className="text-sm text-ash mb-4">{plan.tagline}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-2xl font-bold text-red">৳</span>
                  <span className="text-5xl font-black text-snow">{plan.price.toLocaleString()}</span>
                </div>
              </div>

              <div className="flex justify-center gap-4 mb-6 text-xs">
                <span className="glass-red px-3 py-1.5 rounded-full text-snow flex items-center gap-1.5">
                  <Star size={12} className="text-red" />
                  {plan.delivery}
                </span>
                <span className="glass px-3 py-1.5 rounded-full text-ash">
                  {plan.support} Support
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-ash">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-red/15 flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-red" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`I want to order the ${plan.name} plan (৳${plan.price.toLocaleString()})`)}`}
                target="_blank"
                rel="noopener"
                className={`block w-full text-center py-3.5 rounded-full text-sm font-bold transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-red to-red-dark text-white hover:shadow-glow'
                    : 'glass border border-line text-snow hover:border-red/50'
                }`}
              >
                Get {plan.name}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-ash mt-8">
          Need something custom? <a href="#free-demo" className="text-red font-semibold hover:underline">Request a custom quote →</a>
        </p>
      </div>
    </section>
  );
}
