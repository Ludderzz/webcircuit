import Link from 'next/link'
import { Facebook, Linkedin, ArrowUpRight, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-32 px-6 border-t border-white/5 bg-[#020203]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-20">
        
        {/* BRAND & DESCRIPTION */}
        <div className="col-span-2">
          <h3 className="text-3xl font-black italic tracking-tighter mb-8 uppercase text-slate-50">
            WebCircuit <span className="text-blue-600">UK</span>
          </h3>
          <p className="text-slate-500 text-lg max-w-sm mb-10 font-bold leading-relaxed">
            Engineering the next generation of digital infrastructure for high-growth businesses in North Somerset and the UK.
          </p>
          
          <div className="flex gap-8">
            <a 
              href="https://facebook.com/webcircuituk" 
              target="_blank" 
              className="group flex items-center gap-2 text-[10px] font-black text-slate-400 hover:text-white transition-colors uppercase tracking-[0.3em]"
            >
              <Facebook className="w-4 h-4 text-blue-600" /> Facebook
            </a>
            <a 
              href="https://www.instagram.com/webcircuituk/" 
              className="group flex items-center gap-2 text-[10px] font-black text-slate-400 hover:text-white transition-colors uppercase tracking-[0.3em]"
            >
              <Instagram className="w-4 h-4 text-blue-600" /> Instagram
            </a>
            <Link 
              href="/showcase" 
              className="text-[10px] font-black text-slate-400 hover:text-white transition-colors uppercase tracking-[0.3em]"
            >
              Showcase
            </Link>
          </div>
        </div>

        {/* CORE SERVICES (SEO DRIVERS) */}
        <div>
          <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white mb-10 border-b border-blue-600 pb-4 inline-block">
            Core Services
          </h4>
          <ul className="space-y-4 text-slate-500 text-sm font-black italic uppercase">
            <li className="hover:text-blue-500 transition-colors flex items-center gap-2 group cursor-pointer">
              Next.js Development <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </li>
            <li className="hover:text-blue-500 transition-colors flex items-center gap-2 group cursor-pointer">
              SaaS Engineering <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </li>
            <li className="hover:text-blue-500 transition-colors flex items-center gap-2 group cursor-pointer">
              SEO Strategy Clevedon <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </li>
            <li className="hover:text-blue-500 transition-colors flex items-center gap-2 group cursor-pointer">
              Database Design <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </li>
          </ul>
        </div>

        {/* THE STUDIO (LOCAL SIGNALS) */}
        <div>
          <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white mb-10 border-b border-blue-600 pb-4 inline-block">
            The Studio
          </h4>
          <ul className="space-y-4 text-slate-500 text-sm font-black italic uppercase">
            <li className="text-slate-400">Clevedon, North Somerset</li>
            <li className="text-slate-400">Bristol Service Area</li>
            <li className="pt-4 flex justify-between">
              <span>Monday — Friday</span>
            </li>
            <li className="flex justify-between">
              <span>09:00 — 17:00</span>
            </li>
          </ul>
        </div>
      </div>

      {/* SUB-FOOTER */}
      <div className="max-w-7xl mx-auto mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 italic">
          © 2026 WebCircuit UK — All Rights Reserved
        </p>
        <div className="flex gap-8">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 italic">
            Built for Speed
          </p>
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 italic">
            Next.js 15 & Vercel
          </p>
        </div>
      </div>
    </footer>
  )
}