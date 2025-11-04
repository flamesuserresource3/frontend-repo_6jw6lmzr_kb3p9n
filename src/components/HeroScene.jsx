import React from 'react';
import Spline from '@splinetool/react-spline';

const HeroScene = ({ onEnter }) => {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden bg-gradient-to-b from-sky-100 via-blue-100 to-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/6m0o9mJZf1O0p3l3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft mist overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/10 to-white/80" />

      {/* Floating clouds */}
      <div className="pointer-events-none absolute -top-10 left-10 h-28 w-48 rounded-full bg-white/60 blur-2xl animate-[float_8s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute top-20 right-20 h-24 w-40 rounded-full bg-white/50 blur-2xl animate-[float_10s_ease-in-out_infinite]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <h1 className="font-manrope text-4xl font-extrabold text-slate-800 drop-shadow-sm sm:text-5xl md:text-6xl">
          Easy to Ooty
        </h1>
        <p className="mt-3 max-w-2xl text-slate-600 sm:text-lg">
          Misty escapes, toy-train dreams, and a calm guide through Ooty.
        </p>
        <button
          onClick={onEnter}
          className="mt-8 rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:scale-105 hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-500/40"
        >
          Enter the Mist
        </button>

        {/* Toy-train track */}
        <div className="pointer-events-none absolute bottom-10 left-1/2 h-1 w-[120%] -translate-x-1/2 rotate-[-2deg] bg-slate-300/60" />
        {/* Toy-train */}
        <div className="pointer-events-none absolute bottom-7 left-[-10%] flex animate-[train_14s_linear_infinite] items-center gap-1">
          <div className="h-4 w-8 rounded-sm bg-rose-500 shadow-md" />
          <div className="h-4 w-6 rounded-sm bg-amber-500 shadow-md" />
          <div className="h-4 w-6 rounded-sm bg-sky-500 shadow-md" />
          <div className="h-4 w-6 rounded-sm bg-emerald-500 shadow-md" />
        </div>
      </div>

      <style>{`
        @keyframes float { 0%,100%{ transform: translateY(0)} 50%{ transform: translateY(-10px)} }
        @keyframes train { 0%{ transform: translateX(0) } 100%{ transform: translateX(140%) } }
      `}</style>
    </section>
  );
};

export default HeroScene;
