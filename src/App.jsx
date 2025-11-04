import React, { useRef, useState } from 'react';
import HeroScene from './components/HeroScene';
import ServicesGrid from './components/ServicesGrid';
import TouristSpots from './components/TouristSpots';
import MascotAssistant from './components/MascotAssistant';

function App() {
  const servicesRef = useRef(null);
  const [entered, setEntered] = useState(false);

  const handleEnter = () => {
    setEntered(true);
    setTimeout(() => {
      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Simple navigation */}
      <header className="fixed inset-x-0 top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🚞</span>
            <span className="font-manrope text-lg font-extrabold">Easy to Ooty</span>
          </div>
          <nav className="hidden gap-6 text-sm text-slate-700 sm:flex">
            <a href="#services" className="hover:text-emerald-600">Services</a>
            <a href="#tourist" className="hover:text-emerald-600">Tourist Spots</a>
            <a href="#contact" className="hover:text-emerald-600">Contact</a>
          </nav>
        </div>
      </header>

      <main className="pt-14">
        <HeroScene onEnter={handleEnter} />
        <ServicesGrid ref={servicesRef} />
        <TouristSpots />

        <section id="contact" className="bg-slate-900 py-14 text-slate-100">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-2xl font-bold">About</h3>
                <p className="mt-2 text-slate-300">A magical, calm and travel‑friendly way to discover Ooty. We connect you to local stays, taxis, home food, repairs, groceries, and more — all via WhatsApp.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Contact</h3>
                <p className="mt-2 text-slate-300">Prefer WhatsApp? Tap any service above and send us details instantly.</p>
                <a href="https://wa.me/?text=Hello%20Easy%20to%20Ooty!" target="_blank" className="mt-4 inline-flex rounded-full bg-emerald-500 px-5 py-2.5 font-semibold text-white shadow-md transition hover:bg-emerald-600">Message on WhatsApp</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <MascotAssistant onQuickAction={(q)=>{
        if (q.toLowerCase().includes('food')) document.querySelector('#services')?.scrollIntoView({behavior:'smooth'});
      }} />

      <footer className="bg-white py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Easy to Ooty. Made with calm vibes.
      </footer>
    </div>
  );
}

export default App;
