import Link from 'next/link'
import { Facebook, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-20 border-t border-slate-900 bg-[#020203]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Brand */}
        <div className="flex items-center gap-2 font-black text-2xl tracking-tighter text-slate-50">
          WEBCIRCUIT<span className="text-blue-500">.</span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-8 text-slate-500 text-sm font-bold uppercase tracking-widest">
          <Link href="/showcase" className="hover:text-white transition-colors">Showcase</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          
          <div className="flex gap-4 ml-4 border-l border-slate-800 pl-8">
            <a 
              href="https://facebook.com/webcircuituk" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-blue-500 transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
           
          </div>
        </div>

        {/* Copyright */}
        <p className="text-slate-600 text-xs">
          © 2026 WebCircuit. Engineered in the UK.
        </p>
      </div>
    </footer>
  )
}