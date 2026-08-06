import { useEffect, useState } from 'react';
import { MessageCircle, X, Sparkles, Zap } from 'lucide-react';
import { WHATSAPP_NUMBER } from '@/data';

export default function ConversionFeatures() {
  const [showPopup, setShowPopup] = useState(false);
  const [showSocialProof, setShowSocialProof] = useState(false);
  const [proofIndex, setProofIndex] = useState(0);

  // Exit intent popup
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !sessionStorage.getItem('kroy_popup_shown')) {
        setShowPopup(true);
        sessionStorage.setItem('kroy_popup_shown', '1');
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  // Social proof notifications
  useEffect(() => {
    const proofs = [
      { name: 'Rahim from Dhaka', action: 'ordered a Business Website', time: '2 min ago' },
      { name: 'Sadia from Chittagong', action: 'ordered a Portfolio Website', time: '5 min ago' },
      { name: 'Tanvir from Sylhet', action: 'ordered an E-commerce Website', time: 'just now' },
      { name: 'Nusrat from Khulna', action: 'requested a free demo', time: '1 min ago' },
      { name: 'Karim from Rajshahi', action: 'ordered a Wedding Website', time: '3 min ago' },
    ];

    let idx = 0;
    const showTimer = setTimeout(() => {
      setShowSocialProof(true);
      setProofIndex(0);
    }, 4000);

    const interval = setInterval(() => {
      setShowSocialProof(false);
      setTimeout(() => {
        idx = (idx + 1) % proofs.length;
        setProofIndex(idx);
        setShowSocialProof(true);
      }, 500);
    }, 6000);

    return () => {
      clearTimeout(showTimer);
      clearInterval(interval);
    };
  }, []);

  const proofs = [
    { name: 'Rahim from Dhaka', action: 'ordered a Business Website', time: '2 min ago' },
    { name: 'Sadia from Chittagong', action: 'ordered a Portfolio Website', time: '5 min ago' },
    { name: 'Tanvir from Sylhet', action: 'ordered an E-commerce Website', time: 'just now' },
    { name: 'Nusrat from Khulna', action: 'requested a free demo', time: '1 min ago' },
    { name: 'Karim from Rajshahi', action: 'ordered a Wedding Website', time: '3 min ago' },
  ];

  return (
    <>
      {/* Urgency banner */}
      <div className="relative z-30 bg-gradient-to-r from-red-dark via-red to-red-dark text-white py-2.5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold">
          <Zap size={14} className="animate-pulse" />
          <span className="text-center">
            Limited Time Offer: 20% OFF on all Premium templates · Free hosting included
          </span>
        </div>
      </div>

      {/* Social proof notification */}
      <div
        className={`fixed bottom-24 left-5 z-40 transition-all duration-300 ${
          showSocialProof ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
        }`}
      >
        <div className="glass rounded-2xl p-4 flex items-center gap-3 max-w-xs shadow-lg">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red to-red-dark flex items-center justify-center flex-shrink-0">
            <Sparkles size={18} className="text-white" />
          </div>
          <div>
            <p className="text-xs text-snow font-medium">
              <span className="text-red font-bold">{proofs[proofIndex].name}</span> {proofs[proofIndex].action}
            </p>
            <p className="text-xs text-ash">{proofs[proofIndex].time}</p>
          </div>
        </div>
      </div>

      {/* Sticky WhatsApp button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener"
        className="fixed bottom-6 right-6 z-40 group"
        aria-label="WhatsApp"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20" />
          <div className="relative w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <MessageCircle size={26} className="text-white" />
          </div>
          <div className="absolute right-16 top-1/2 -translate-y-1/2 glass px-3 py-2 rounded-lg text-xs font-semibold text-snow whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Chat with us!
          </div>
        </div>
      </a>

      {/* Exit intent popup */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-5">
          <div className="absolute inset-0 bg-ink/80 backdrop-blur-sm" onClick={() => setShowPopup(false)} />
          <div className="relative glass rounded-3xl p-8 max-w-md w-full animate-slide-up">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 w-9 h-9 glass rounded-full flex items-center justify-center text-ash hover:text-snow transition-colors"
              aria-label="Close"
            >
              <X size={18} />
            </button>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-red to-red-dark flex items-center justify-center shadow-glow">
                <Sparkles size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-black text-snow mb-3">
                Wait! Get <span className="text-gradient-red">20% OFF</span>
              </h3>
              <p className="text-ash mb-6">
                Don't leave empty-handed. Get an exclusive 20% discount on your first website order.
                Offer expires soon!
              </p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('I want to claim the 20% OFF discount!')}`}
                target="_blank"
                rel="noopener"
                className="block w-full py-3.5 bg-gradient-to-r from-red to-red-dark rounded-full text-sm font-bold text-white hover:shadow-glow transition-shadow mb-3"
              >
                Claim 20% Discount
              </a>
              <button
                onClick={() => setShowPopup(false)}
                className="text-xs text-ash hover:text-snow transition-colors"
              >
                No thanks, I'll pay full price
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
