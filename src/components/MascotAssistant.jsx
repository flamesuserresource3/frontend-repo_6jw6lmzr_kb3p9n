import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const MascotAssistant = ({ onQuickAction }) => {
  const [open, setOpen] = useState(true);
  const [msg, setMsg] = useState('Looking for food? I can help!');

  const sendToWhatsApp = () => {
    const text = encodeURIComponent(msg.trim() || 'Hello from Ooty Buddy!');
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Bubble */}
      {open && (
        <div className="mb-3 max-w-[260px] rounded-2xl bg-white/90 p-4 text-sm text-slate-700 shadow-xl backdrop-blur">
          <div className="mb-2 font-semibold text-slate-900">Ooty Buddy</div>
          <div className="mb-3">How can I help you?</div>
          <div className="flex items-center gap-2">
            <input
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              className="flex-1 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Type your request"
            />
            <button
              onClick={sendToWhatsApp}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-white shadow-md transition hover:bg-emerald-700"
              title="Send to WhatsApp"
            >
              <Send size={16} />
            </button>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {['Book Stay', 'Book Taxi', 'Order Food'].map((q) => (
              <button
                key={q}
                onClick={() => {
                  setMsg(q);
                  onQuickAction?.(q);
                }}
                className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-200 hover:bg-emerald-100"
              >
                {q}
              </button>
            ))}
          </div>
          <button
            className="absolute right-2 top-2 text-slate-400 hover:text-slate-600"
            onClick={() => setOpen(false)}
            aria-label="Close"
          >
            <X size={16} />
          </button>
        </div>
      )}

      {/* Mascot */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-emerald-500 to-sky-600 px-4 py-3 text-white shadow-xl transition hover:scale-105"
      >
        <span className="inline-block h-8 w-8 rounded-full bg-white/90 text-center leading-8 text-xl">🌲</span>
        <span className="font-semibold">Ooty Buddy</span>
        <MessageCircle size={18} className="opacity-90" />
        <span className="absolute -right-1 -top-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 text-[10px] font-bold">i</span>
      </button>
    </div>
  );
};

export default MascotAssistant;
