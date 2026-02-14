"use client";

import React, { useState } from 'react';
import { Mail, Send, Zap, CheckCircle2, Heart } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [isCharity, setIsCharity] = useState(false);

  const onWhatsAppSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');
    
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const company = formData.get('company');
    const budget = formData.get('budget');
    const service = formData.get('service'); 
    const message = formData.get('message');
    const charityNumber = formData.get('charityNumber');

    const myNumber = "447552384420";

    const charityInfo = isCharity ? `%0A*Charity Registered:* Yes%0A*Reg Number:* ${charityNumber}` : '';

    const text = `Hi WebCircuit! I'd like to discuss a new project.%0A%0A` +
                 `*Name:* ${name}%0A` +
                 `*Email:* ${email}%0A` +
                 `*Company:* ${company}${charityInfo}%0A` +
                 `*Project Type:* ${service}%0A` +
                 `*Budget Range:* ${budget}%0A` +
                 `*Message:* ${message}`;

    const whatsappUrl = `https://wa.me/${myNumber}?text=${text}`;
    window.open(whatsappUrl, '_blank');
    setStatus('success');
  };

  return (
    <section id="contact" className="min-h-screen pt-40 pb-24 bg-[#020203] text-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black tracking-[0.2em] uppercase mb-6">
                <Zap className="w-3 h-3" /> Connection Point
              </div>
              <h1 className="text-6xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-8">
                READY TO <br />
                <span className="text-slate-500">UPGRADE?</span>
              </h1>
              
              {status === 'success' ? (
                <div className="bg-blue-600/10 border border-blue-500/50 p-8 rounded-[2rem] animate-in fade-in zoom-in duration-500">
                  <CheckCircle2 className="w-12 h-12 text-blue-400 mb-4" />
                  <h4 className="text-2xl font-black mb-2 uppercase">Protocol Initiated.</h4>
                  <p className="text-slate-400 font-medium">WhatsApp has been opened with your project brief. If not, click below to retry.</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-xs font-bold uppercase tracking-widest border-b border-blue-400 text-blue-400 pb-1 hover:text-blue-300 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <p className="text-lg text-slate-400 leading-relaxed max-w-md font-medium">
                  Skip the back-and-forth emails. Fill out the brief and secure a direct line to our engineering team via WhatsApp.
                </p>
              )}
            </div>
            
            {!status.includes('success') && (
              <div className="space-y-6">
                <div className="flex items-center gap-5 group">
                  <div className="w-14 h-14 bg-slate-900 border border-slate-800 rounded-2xl flex-shrink-0 flex items-center justify-center text-blue-400 group-hover:border-blue-500/50 transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Email Interface</p>
                    <p className="font-black text-xl text-slate-200">info@webcircuituk.com</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className={`relative transition-all duration-500 ${status === 'success' ? 'opacity-20 blur-md pointer-events-none' : 'opacity-100'}`}>
            <div className="bg-slate-900/50 backdrop-blur-sm p-8 md:p-12 rounded-[2.5rem] border border-slate-800 shadow-2xl relative z-10">
              <form onSubmit={onWhatsAppSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div className="space-y-2 md:col-span-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-blue-400 ml-1">Your Name</label>
                  <input required name="name" type="text" placeholder="John Doe" className="w-full p-4 rounded-xl bg-black border border-slate-800 text-white outline-none focus:border-blue-500 transition-all placeholder:text-slate-700" />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-blue-400 ml-1">Email Address</label>
                  <input required name="email" type="email" placeholder="john@example.com" className="w-full p-4 rounded-xl bg-black border border-slate-800 text-white outline-none focus:border-blue-500 transition-all placeholder:text-slate-700" />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-blue-400 ml-1">Company / Brand</label>
                  <input required name="company" type="text" placeholder="Acme Corp" className="w-full p-4 rounded-xl bg-black border border-slate-800 text-white outline-none focus:border-blue-500 transition-all placeholder:text-slate-700" />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-blue-400 ml-1">Budget Range</label>
                  <div className="relative">
                    <select name="budget" className="w-full p-4 rounded-xl bg-black border border-slate-800 text-white focus:border-blue-500 outline-none appearance-none cursor-pointer">
                      <option className="bg-slate-900">£500 — £1k</option>
                      <option className="bg-slate-900">£1k — £3k</option>
                      <option className="bg-slate-900">£3k — £10k</option>
                      <option className="bg-slate-900">£10k+</option>
                      <option className="bg-slate-900">Custom</option>
                    </select>
                  </div>
                </div>

                {/* CHARITY SECTION */}
                <div className="md:col-span-2 p-4 rounded-xl bg-blue-500/5 border border-blue-500/20">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      className="w-5 h-5 rounded border-slate-800 bg-black text-blue-600 focus:ring-blue-500"
                      onChange={(e) => setIsCharity(e.target.checked)}
                    />
                    <div className="flex items-center gap-2">
                      <Heart className={`w-4 h-4 transition-colors ${isCharity ? 'text-pink-500 fill-pink-500' : 'text-slate-500'}`} />
                      <span className="text-sm font-bold text-slate-300 group-hover:text-white transition-colors">Apply for Charity Discount</span>
                    </div>
                  </label>
                  
                  {isCharity && (
                    <div className="mt-4 animate-in slide-in-from-top-2 duration-300">
                      <label className="text-[10px] font-black uppercase tracking-widest text-blue-400 ml-1">Charity Registration Number</label>
                      <input 
                        required={isCharity} 
                        name="charityNumber" 
                        type="text" 
                        placeholder="e.g. 1234567" 
                        className="w-full mt-2 p-4 rounded-xl bg-black border border-blue-500/30 text-white outline-none focus:border-blue-500 transition-all" 
                      />
                      <p className="text-[10px] text-slate-500 mt-2 italic">*Reduced rates apply for verified non-profit organizations.</p>
                    </div>
                  )}
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-blue-400 ml-1">Service Required</label>
                  <div className="relative">
                    <select name="service" className="w-full p-4 rounded-xl bg-black border border-slate-800 text-white focus:border-blue-500 outline-none appearance-none cursor-pointer">
                      <option className="bg-slate-900">Full Website Build</option>
                      <option className="bg-slate-900">UI/UX Design Only</option>
                      <option className="bg-slate-900">Custom Web App / Saas</option>
                      <option className="bg-slate-900">Monthly Maintenance</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-blue-400 ml-1">Project Brief</label>
                  <textarea required name="message" rows={4} placeholder="Describe your vision and any specific goals..." className="w-full p-4 rounded-xl bg-black border border-slate-800 text-white outline-none focus:border-blue-500 transition-all resize-none placeholder:text-slate-700"></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={status === 'sending'}
                  className="md:col-span-2 bg-blue-600 text-white py-5 rounded-xl font-black uppercase tracking-widest hover:bg-blue-500 disabled:bg-slate-800 transition-all flex items-center justify-center gap-3 active:scale-95 shadow-lg shadow-blue-600/20"
                >
                  {status === 'sending' ? "Syncing..." : "Transmit via WhatsApp"}
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}