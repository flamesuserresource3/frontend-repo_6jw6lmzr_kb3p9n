import React from 'react';
import { Mountain, Clock, MapPin, Train } from 'lucide-react';

const spots = [
  { name: 'Botanical Garden', timing: '8:00 AM – 6:00 PM', price: '₹30-50', travel: '10-15 min', photo: 'https://images.unsplash.com/photo-1558980664-10cc4b095563?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Ooty Lake', timing: '9:00 AM – 6:00 PM', price: '₹20-40', travel: '10-20 min', photo: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Doddabetta Peak', timing: '9:00 AM – 6:00 PM', price: '₹20-50', travel: '30-40 min', photo: 'https://images.unsplash.com/photo-1520565585133-992a20e63f78?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Pykara', timing: '9:00 AM – 5:30 PM', price: 'Varies', travel: '45-60 min', photo: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Glenmorgan', timing: 'Daytime', price: 'Free', travel: '45-60 min', photo: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop' },
];

const trainSections = [
  {
    title: 'Toy Train from Mettupalayam to Ooty',
    rows: [
      { no: '56136', name: 'Mettupalayam-Ooty Passenger', from: 'Mettupalayam (MTP)', dep: '7:10', to: 'Ooty (UAM)', arr: '11:55', dur: '4h 45m / 46 km' },
    ],
  },
  {
    title: 'Toy Train from Coonoor to Ooty',
    rows: [
      { no: '56141', name: 'Coonoor-Udagamandalam Passenger', from: 'Coonoor (ONR)', dep: '7:45', to: 'Ooty (UAM)', arr: '9:00', dur: '1h 15m / 19 km' },
      { no: '56136', name: 'Mettupalayam-Ooty Passenger', from: 'Coonoor (ONR)', dep: '10:40', to: 'Ooty (UAM)', arr: '11:55', dur: '1h 15m / 19 km' },
      { no: '56143', name: 'Coonoor-Udagamandalam Passenger', from: 'Coonoor (ONR)', dep: '12:35', to: 'Ooty (UAM)', arr: '13:45', dur: '1h 10m / 19 km' },
      { no: '56138', name: 'Coonoor-Udagamandalam Passenger', from: 'Coonoor (ONR)', dep: '16:00', to: 'Ooty (UAM)', arr: '17:10', dur: '1h 10m / 19 km' },
    ],
  },
  {
    title: 'Toy Train from Ooty to Mettupalayam',
    rows: [
      { no: '56137', name: 'Ooty-Mettupalayam Passenger', from: 'Ooty (UAM)', dep: '14:00', to: 'Mettupalayam (MTP)', arr: '17:30', dur: '3h 30m / 46 km' },
    ],
  },
  {
    title: 'Toy Train from Ooty to Coonoor',
    rows: [
      { no: '56139', name: 'Udagamandalam-Coonoor Passenger', from: 'Ooty (UAM)', dep: '9:15', to: 'Coonoor (ONR)', arr: '10:20', dur: '1h 5m / 19 km' },
      { no: '56142', name: 'Udagamandalam-Coonoor Passenger', from: 'Ooty (UAM)', dep: '12:15', to: 'Coonoor (ONR)', arr: '13:15', dur: '1h / 19 km' },
      { no: '56137', name: 'Udagamandalam-Mettupalayam Passenger', from: 'Ooty (UAM)', dep: '14:00', to: 'Coonoor (ONR)', arr: '15:05', dur: '1h 5m / 19 km' },
      { no: '56140', name: 'Udagamandalam-Coonoor Passenger', from: 'Ooty (UAM)', dep: '17:30', to: 'Coonoor (ONR)', arr: '18:35', dur: '1h 5m / 19 km' },
    ],
  },
];

const TouristSpots = () => {
  return (
    <section id="tourist" className="bg-gradient-to-b from-white to-sky-50 py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 text-center">
          <h2 className="font-manrope text-3xl font-extrabold text-slate-900 sm:text-4xl">Tourist Spots & Toy Train</h2>
          <p className="mt-2 text-slate-600">Highlights, timings, and travel tips.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {spots.map((s) => (
            <div key={s.name} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="h-40 w-full overflow-hidden">
                <img src={s.photo} alt={s.name} className="h-full w-full object-cover transition will-change-transform hover:scale-105" />
              </div>
              <div className="p-4">
                <div className="mb-2 flex items-center gap-2 text-slate-900">
                  <Mountain size={16} /> <span className="font-semibold">{s.name}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600"><Clock size={14} /> {s.timing}</div>
                <div className="flex items-center gap-2 text-sm text-slate-600"><MapPin size={14} /> Travel time: {s.travel}</div>
                <div className="mt-1 text-sm text-slate-600">Price: {s.price}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 space-y-6">
          {trainSections.map((sec) => (
            <div key={sec.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-3">
                <Train size={16} />
                <h3 className="font-semibold text-slate-900">{sec.title}</h3>
              </div>
              <div className="divide-y divide-slate-100">
                {sec.rows.map((r, i) => (
                  <div key={i} className="grid grid-cols-1 gap-2 px-4 py-3 text-sm text-slate-700 sm:grid-cols-6">
                    <div className="font-medium">{r.no} / {r.name}</div>
                    <div>From: {r.from}</div>
                    <div>Dep: {r.dep}</div>
                    <div>To: {r.to}</div>
                    <div>Arr: {r.arr}</div>
                    <div>Duration: {r.dur}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TouristSpots;
