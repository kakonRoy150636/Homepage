import { useState } from 'react';
import { Bot, Sparkles, X, Send, Wand2, Calculator, Search, MessageSquare } from 'lucide-react';

const aiTools = [
  {
    icon: Wand2,
    title: 'AI Website Recommendation',
    description: 'Describe your business and our AI suggests the perfect template for you.',
    status: 'Coming Soon',
  },
  {
    icon: Search,
    title: 'AI Template Finder',
    description: 'Write your requirements and AI finds the best matching template instantly.',
    status: 'Coming Soon',
  },
  {
    icon: Calculator,
    title: 'AI Price Estimator',
    description: 'Select your features and get an instant AI-powered price estimate.',
    status: 'Coming Soon',
  },
  {
    icon: MessageSquare,
    title: 'AI Business Assistant',
    description: 'Chat with our AI assistant to find the right service for your needs.',
    status: 'Coming Soon',
  },
];

export default function AIAssistant() {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: 'Hi! I am KROY AI Assistant. I can help you find the perfect website template. What type of business do you have?' },
  ]);
  const [input, setInput] = useState('');

  const send = () => {
    if (!input.trim()) return;
    const userMsg = input;
    setMessages((prev) => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: 'ai',
          text: `Great! Based on "${userMsg}", I recommend checking out our Business and Portfolio templates. Would you like me to show you the best options? (Note: Full AI features coming soon — for now, contact us on WhatsApp for personalized recommendations!)`,
        },
      ]);
    }, 1000);
  };

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red/10 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-5">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 glass-red px-4 py-1.5 rounded-full text-xs font-bold text-red uppercase tracking-wider mb-4">
            <Sparkles size={14} />
            AI-Powered Future
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-snow mb-4">
            Meet the <span className="text-gradient-red">Future of Web Design</span>
          </h2>
          <p className="text-ash text-lg">
            We are building AI tools that will revolutionize how you find and order websites.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {aiTools.map((tool) => (
            <div
              key={tool.title}
              className="group glass rounded-2xl p-6 hover:border-red/40 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 text-xs font-semibold text-ash glass px-2.5 py-1 rounded-full">
                {tool.status}
              </div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red to-red-dark flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-glow">
                <tool.icon size={24} className="text-white" />
              </div>
              <h3 className="text-base font-bold text-snow mb-2">{tool.title}</h3>
              <p className="text-sm text-ash leading-relaxed">{tool.description}</p>
            </div>
          ))}
        </div>

        {/* AI Chat Preview */}
        <div className="text-center">
          <button
            onClick={() => setChatOpen(true)}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-red to-red-dark rounded-full text-sm font-bold text-white hover:shadow-glow transition-shadow"
          >
            <Bot size={18} />
            Try AI Assistant (Preview)
          </button>
        </div>
      </div>

      {/* Chat modal */}
      {chatOpen && (
        <div className="fixed bottom-6 left-6 z-50 w-[340px] max-w-[calc(100vw-3rem)]">
          <div className="glass rounded-2xl overflow-hidden shadow-glow-lg">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-line bg-gradient-to-r from-red/10 to-transparent">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red to-red-dark flex items-center justify-center">
                  <Bot size={20} className="text-white" />
                </div>
                <div>
                  <div className="text-sm font-bold text-snow">KROY AI Assistant</div>
                  <div className="text-xs text-success flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                    Online
                  </div>
                </div>
              </div>
              <button
                onClick={() => setChatOpen(false)}
                className="w-8 h-8 glass rounded-lg flex items-center justify-center text-ash hover:text-snow transition-colors"
                aria-label="Close chat"
              >
                <X size={16} />
              </button>
            </div>

            {/* Messages */}
            <div className="p-4 h-64 overflow-y-auto space-y-3">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm ${
                      msg.role === 'user'
                        ? 'bg-gradient-to-r from-red to-red-dark text-white rounded-br-sm'
                        : 'glass text-ash rounded-bl-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-line flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && send()}
                placeholder="Type your message..."
                className="flex-1 bg-ink/60 border border-line rounded-xl px-3 py-2.5 text-sm text-snow placeholder:text-ash focus:outline-none focus:border-red/50 transition-colors"
              />
              <button
                onClick={send}
                className="w-10 h-10 bg-gradient-to-br from-red to-red-dark rounded-xl flex items-center justify-center text-white hover:shadow-glow transition-shadow flex-shrink-0"
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
