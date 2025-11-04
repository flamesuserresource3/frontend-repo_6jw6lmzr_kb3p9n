import React, { useState } from 'react';
import { Home, Car, Utensils, Wrench, ShoppingBasket, Pill, Package, Briefcase, Megaphone, AlertTriangle, Train } from 'lucide-react';

const SERVICES = [
  { key: 'stay', label: 'Book Stay', icon: Home, color: 'from-emerald-500 to-emerald-600' },
  { key: 'taxi', label: 'Book Taxi', icon: Car, color: 'from-sky-500 to-sky-600' },
  { key: 'food', label: 'Order Food', icon: Utensils, color: 'from-amber-500 to-amber-600' },
  { key: 'repair', label: 'Vehicle Repair', icon: Wrench, color: 'from-slate-500 to-slate-700' },
  { key: 'groceries', label: 'Groceries', icon: ShoppingBasket, color: 'from-lime-500 to-lime-600' },
  { key: 'meds', label: 'Medicines', icon: Pill, color: 'from-rose-500 to-rose-600' },
  { key: 'products', label: 'Ooty Products', icon: Package, color: 'from-fuchsia-500 to-violet-600' },
  { key: 'jobs', label: 'Jobs in Ooty', icon: Briefcase, color: 'from-indigo-500 to-indigo-600' },
  { key: 'marketing', label: 'Digital Marketing', icon: Megaphone, color: 'from-cyan-500 to-cyan-600' },
  { key: 'emergency', label: 'Emergency Help', icon: AlertTriangle, color: 'from-red-500 to-red-600' },
  { key: 'toytrain', label: 'Toy Train Timings', icon: Train, color: 'from-teal-500 to-teal-600' },
];

function buildWhatsAppLink(text) {
  return `https://wa.me/?text=${encodeURIComponent(text)}`;
}

const ServicesGrid = () => {
  const [active, setActive] = useState(null);
  const [form, setForm] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    if (!active) return;

    let text = '';

    if (active === 'stay') {
      const {
        name = '', phone = '', members = '', rooms = '', checkin = '', checkout = '', budget = '', request = '', category = ''
      } = form;
      text = `Booking Request – Stay\nName: ${name}\nPhone: ${phone}\nMembers: ${members}\nRooms: ${rooms}\nCheck-in: ${checkin}\nCheck-out: ${checkout}\nBudget: ${category || budget}\nSpecial Req: ${request}`;
    }

    if (active === 'taxi') {
      const { name = '', pickup = '', drop = '', trip = '', datetime = '', vehicle = '', luggage = '', message = '' } = form;
      text = `Taxi Request\nName: ${name}\nPickup: ${pickup}\nDrop: ${drop}\nTrip: ${trip}\nDate & Time: ${datetime}\nVehicle: ${vehicle}\nLuggage: ${luggage}\nMessage: ${message}`;
    }

    if (active === 'food') {
      const { name = '', location = '', type = '', servings = '', time = '', request = '' } = form;
      text = `Food Order\nName: ${name}\nLocation: ${location}\nType: ${type}\nServings: ${servings}\nTime: ${time}\nSpecial Request: ${request}`;
    }

    if (active === 'repair') {
      const { name = '', location = '', vehicle = '', issue = '', urgency = '' } = form;
      text = `Vehicle Repair\nName: ${name}\nLocation: ${location}\nVehicle: ${vehicle}\nIssue: ${issue}\nUrgency: ${urgency}`;
    }

    if (active === 'groceries') {
      const items = form.items || {};
      const summary = Object.entries(items)
        .filter(([_, qty]) => Number(qty) > 0)
        .map(([k, qty]) => `${k}: ${qty}`)
        .join(', ');
      text = `Grocery Order\n${summary || 'No items selected'}`;
    }

    if (active === 'meds') {
      const items = form.items || {};
      const summary = Object.entries(items)
        .filter(([_, qty]) => Number(qty) > 0)
        .map(([k, qty]) => `${k}: ${qty}`)
        .join(', ');
      text = `Medicine Request\n${summary || 'No items selected'}`;
    }

    if (active === 'products') {
      const items = form.items || {};
      const summary = Object.entries(items)
        .filter(([_, qty]) => Number(qty) > 0)
        .map(([k, qty]) => `${k}: ${qty}`)
        .join(', ');
      text = `Ooty Products Order\n${summary || 'No items selected'}`;
    }

    if (active === 'jobs') {
      const { intent = 'Apply', name = '', role = '', phone = '', note = '' } = form;
      text = `Jobs – ${intent}\nName: ${name}\nPhone: ${phone}\nRole: ${role}\nNote: ${note}`;
    }

    if (active === 'marketing') {
      const { business = '', type = '', link = '', phone = '', requirements = '' } = form;
      text = `Digital Marketing Enquiry\nBusiness: ${business}\nType: ${type}\nLink: ${link}\nPhone: ${phone}\nRequirements: ${requirements}`;
    }

    if (active === 'emergency') {
      const { name = '', location = '', message = '' } = form;
      text = `Emergency Help\nName: ${name}\nLocation: ${location}\nMessage: ${message}`;
    }

    if (active === 'toytrain') {
      text = 'Toy Train timings request';
    }

    window.open(buildWhatsAppLink(text), '_blank');
    setActive(null);
    setForm({});
  };

  const groceryList = ['Onion', 'Tomato', 'Potato', 'Cabbage', 'Milk', 'Curd'];
  const medsList = ['Paracetamol', 'Cold tablets', 'Bandages', 'Pain spray'];
  const productsList = ['Tea', 'Oils', 'Fruits', 'Chocolates', 'Varkey'];

  const renderForm = () => {
    if (!active) return null;

    if (active === 'stay') {
      return (
        <form onSubmit={onSubmit} className="space-y-3">
          <div className="grid gap-3 sm:grid-cols-2">
            <input className="input" placeholder="Name" onChange={(e)=>setForm({...form, name:e.target.value})} />
            <input className="input" placeholder="Phone" onChange={(e)=>setForm({...form, phone:e.target.value})} />
            <input className="input" placeholder="Members count" onChange={(e)=>setForm({...form, members:e.target.value})} />
            <input className="input" placeholder="Rooms needed" onChange={(e)=>setForm({...form, rooms:e.target.value})} />
            <input type="date" className="input" placeholder="Check-in" onChange={(e)=>setForm({...form, checkin:e.target.value})} />
            <input type="date" className="input" placeholder="Check-out" onChange={(e)=>setForm({...form, checkout:e.target.value})} />
          </div>
          <div className="flex flex-wrap gap-2">
            {['Low', 'Medium', 'High'].map((c)=> (
              <button type="button" key={c} onClick={()=>setForm({...form, category:c})} className={`rounded-full px-3 py-1 text-sm ring-1 ${form.category===c? 'bg-emerald-600 text-white ring-emerald-600':'bg-emerald-50 text-emerald-700 ring-emerald-200'}`}>{c}</button>
            ))}
          </div>
          <input className="input" placeholder="Budget (optional)" onChange={(e)=>setForm({...form, budget:e.target.value})} />
          <textarea className="input" placeholder="Any special request?" onChange={(e)=>setForm({...form, request:e.target.value})} />
          <button className="rounded-full bg-emerald-600 px-5 py-2.5 font-semibold text-white shadow-md transition hover:bg-emerald-700" type="submit">Send on WhatsApp</button>
        </form>
      );
    }

    if (active === 'taxi') {
      return (
        <form onSubmit={onSubmit} className="space-y-3">
          <div className="grid gap-3 sm:grid-cols-2">
            <input className="input" placeholder="Name" onChange={(e)=>setForm({...form, name:e.target.value})} />
            <select className="input" onChange={(e)=>setForm({...form, trip:e.target.value})}>
              <option value="">Trip type</option>
              <option>One-way</option>
              <option>Round trip</option>
            </select>
            <input className="input" placeholder="Pickup location" onChange={(e)=>setForm({...form, pickup:e.target.value})} />
            <input className="input" placeholder="Drop location" onChange={(e)=>setForm({...form, drop:e.target.value})} />
            <input type="datetime-local" className="input" onChange={(e)=>setForm({...form, datetime:e.target.value})} />
            <select className="input" onChange={(e)=>setForm({...form, vehicle:e.target.value})}>
              <option value="">Vehicle choice</option>
              <option>Car</option>
              <option>Van</option>
              <option>Mini-Bus</option>
              <option>Auto</option>
            </select>
            <input className="input" placeholder="Luggage count" onChange={(e)=>setForm({...form, luggage:e.target.value})} />
            <input className="input sm:col-span-2" placeholder="Message" onChange={(e)=>setForm({...form, message:e.target.value})} />
          </div>
          <button className="rounded-full bg-emerald-600 px-5 py-2.5 font-semibold text-white shadow-md transition hover:bg-emerald-700" type="submit">Send on WhatsApp</button>
        </form>
      );
    }

    if (active === 'food') {
      return (
        <form onSubmit={onSubmit} className="space-y-3">
          <div className="grid gap-3 sm:grid-cols-2">
            <input className="input" placeholder="Name" onChange={(e)=>setForm({...form, name:e.target.value})} />
            <input className="input" placeholder="Location" onChange={(e)=>setForm({...form, location:e.target.value})} />
            <select className="input" onChange={(e)=>setForm({...form, type:e.target.value})}>
              <option value="">Preferred type</option>
              <option>Veg</option>
              <option>Non-Veg</option>
            </select>
            <input className="input" placeholder="No. of servings" onChange={(e)=>setForm({...form, servings:e.target.value})} />
            <input type="time" className="input" onChange={(e)=>setForm({...form, time:e.target.value})} />
            <input className="input sm:col-span-2" placeholder="Special request" onChange={(e)=>setForm({...form, request:e.target.value})} />
          </div>
          <button className="rounded-full bg-emerald-600 px-5 py-2.5 font-semibold text-white shadow-md transition hover:bg-emerald-700" type="submit">Send on WhatsApp</button>
        </form>
      );
    }

    if (active === 'repair') {
      return (
        <form onSubmit={onSubmit} className="space-y-3">
          <div className="grid gap-3 sm:grid-cols-2">
            <input className="input" placeholder="Name" onChange={(e)=>setForm({...form, name:e.target.value})} />
            <input className="input" placeholder="Location" onChange={(e)=>setForm({...form, location:e.target.value})} />
            <select className="input" onChange={(e)=>setForm({...form, vehicle:e.target.value})}>
              <option value="">Vehicle Type</option>
              <option>Two-wheeler</option>
              <option>Car</option>
              <option>Others</option>
            </select>
            <input className="input" placeholder="Breakdown issue" onChange={(e)=>setForm({...form, issue:e.target.value})} />
            <select className="input" onChange={(e)=>setForm({...form, urgency:e.target.value})}>
              <option value="">Urgency</option>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>
          <button className="rounded-full bg-emerald-600 px-5 py-2.5 font-semibold text-white shadow-md transition hover:bg-emerald-700" type="submit">Send on WhatsApp</button>
        </form>
      );
    }

    if (active === 'groceries' || active === 'meds' || active === 'products') {
      const list = active === 'groceries' ? groceryList : active === 'meds' ? medsList : productsList;
      return (
        <form onSubmit={onSubmit} className="space-y-3">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {list.map((i) => (
              <div key={i} className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white p-2">
                <span className="flex-1 text-sm">{i}</span>
                <input
                  type="number"
                  min="0"
                  className="w-20 rounded-md border border-slate-200 px-2 py-1 text-sm"
                  onChange={(e)=>setForm({
                    ...form,
                    items: { ...(form.items||{}), [i]: e.target.value }
                  })}
                  placeholder="0"
                />
              </div>
            ))}
          </div>
          <button className="rounded-full bg-emerald-600 px-5 py-2.5 font-semibold text-white shadow-md transition hover:bg-emerald-700" type="submit">Send on WhatsApp</button>
        </form>
      );
    }

    if (active === 'jobs') {
      return (
        <form onSubmit={onSubmit} className="space-y-3">
          <div className="flex gap-2">
            {['Apply', 'Post Job'].map((v) => (
              <button type="button" key={v} onClick={()=>setForm({...form, intent:v})} className={`rounded-full px-3 py-1 text-sm ring-1 ${form.intent===v? 'bg-emerald-600 text-white ring-emerald-600':'bg-emerald-50 text-emerald-700 ring-emerald-200'}`}>{v}</button>
            ))}
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <input className="input" placeholder="Name" onChange={(e)=>setForm({...form, name:e.target.value})} />
            <input className="input" placeholder="Phone" onChange={(e)=>setForm({...form, phone:e.target.value})} />
            <input className="input sm:col-span-2" placeholder="Role / Title" onChange={(e)=>setForm({...form, role:e.target.value})} />
            <input className="input sm:col-span-2" placeholder="Note" onChange={(e)=>setForm({...form, note:e.target.value})} />
          </div>
          <button className="rounded-full bg-emerald-600 px-5 py-2.5 font-semibold text-white shadow-md transition hover:bg-emerald-700" type="submit">Send on WhatsApp</button>
        </form>
      );
    }

    if (active === 'marketing') {
      return (
        <form onSubmit={onSubmit} className="space-y-3">
          <div className="grid gap-3 sm:grid-cols-2">
            <input className="input" placeholder="Business name" onChange={(e)=>setForm({...form, business:e.target.value})} />
            <input className="input" placeholder="Type" onChange={(e)=>setForm({...form, type:e.target.value})} />
            <input className="input" placeholder="Website / social link" onChange={(e)=>setForm({...form, link:e.target.value})} />
            <input className="input" placeholder="Phone" onChange={(e)=>setForm({...form, phone:e.target.value})} />
            <textarea className="input sm:col-span-2" placeholder="Requirements" onChange={(e)=>setForm({...form, requirements:e.target.value})} />
          </div>
          <button className="rounded-full bg-emerald-600 px-5 py-2.5 font-semibold text-white shadow-md transition hover:bg-emerald-700" type="submit">Send on WhatsApp</button>
        </form>
      );
    }

    if (active === 'emergency') {
      return (
        <form onSubmit={onSubmit} className="space-y-3">
          <input className="input" placeholder="Name" onChange={(e)=>setForm({...form, name:e.target.value})} />
          <input className="input" placeholder="Location" onChange={(e)=>setForm({...form, location:e.target.value})} />
          <textarea className="input" placeholder="Message" onChange={(e)=>setForm({...form, message:e.target.value})} />
          <button className="rounded-full bg-red-600 px-5 py-2.5 font-semibold text-white shadow-md transition hover:bg-red-700" type="submit">Request Help</button>
        </form>
      );
    }

    if (active === 'toytrain') {
      return (
        <div className="space-y-2 text-sm text-slate-700">
          <p>We also listed detailed Toy Train timings below. Share on WhatsApp if needed.</p>
          <button onClick={onSubmit} className="rounded-full bg-emerald-600 px-5 py-2.5 font-semibold text-white shadow-md transition hover:bg-emerald-700">Share timings on WhatsApp</button>
        </div>
      );
    }

    return null;
  };

  return (
    <section id="services" className="relative -mt-12 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="mb-8 text-center">
          <h2 className="font-manrope text-3xl font-extrabold text-slate-900 sm:text-4xl">Services</h2>
          <p className="mt-2 text-slate-600">Quick WhatsApp bookings for everything in Ooty.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {SERVICES.map(({ key, label, icon: Icon, color }) => (
            <button
              key={key}
              onClick={() => (key === 'toytrain' ? document.getElementById('tourist').scrollIntoView({behavior:'smooth'}) : setActive(key))}
              className={`group flex items-center gap-4 rounded-2xl bg-gradient-to-br ${color} p-5 text-left text-white shadow-lg transition hover:scale-[1.02]`}
            >
              <span className="grid h-12 w-12 place-content-center rounded-xl bg-white/20 backdrop-blur group-hover:rotate-6 transition"><Icon /></span>
              <div>
                <div className="text-lg font-semibold">{label}</div>
                <div className="text-white/90">Tap to {' '}{key==='toytrain'?'view timings':'fill & WhatsApp'}</div>
              </div>
            </button>
          ))}
        </div>

        {active && (
          <div className="fixed inset-0 z-30 grid place-items-center bg-black/30 p-4">
            <div className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-2xl">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-semibold capitalize text-slate-900">{active.replace('-', ' ')}</h3>
                <button className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700" onClick={()=>{setActive(null); setForm({});}}>Close</button>
              </div>
              <div className="[&_input.input]:w-full [&_input.input]:rounded-lg [&_input.input]:border [&_input.input]:border-slate-200 [&_input.input]:bg-white [&_input.input]:px-3 [&_input.input]:py-2 [&_textarea.input]:w-full [&_textarea.input]:rounded-lg [&_textarea.input]:border [&_textarea.input]:border-slate-200 [&_textarea.input]:bg-white [&_textarea.input]:px-3 [&_textarea.input]:py-2">
                {renderForm()}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesGrid;
