"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Layout, MessageSquare, User, Home, Zap } from 'lucide-react'

export default function Navbar() {
  const pathname = usePathname()

  const navLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Showcase', href: '/showcase', icon: Layout },
    { name: 'About', href: '/about', icon: User },
    { name: 'Contact', href: '/contact', icon: MessageSquare },
  ]

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl">
      <div className="bg-slate-950/60 backdrop-blur-md border border-white/10 rounded-full px-3 py-2 flex items-center justify-between shadow-2xl">
        
        {/* Logo/Icon */}
        <Link href="/" className="flex items-center gap-2 ml-2 group">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center group-hover:rotate-12 transition-transform">
            <Zap className="w-4 h-4 text-white fill-white" />
          </div>
          <span className="hidden sm:block font-black tracking-tighter text-sm">WEBCIRCUIT</span>
        </Link>

        {/* Links */}
        <div className="flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`
                  relative flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all
                  ${isActive 
                    ? 'bg-white/10 text-white' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }
                `}
              >
                <link.icon className={`w-3.5 h-3.5 ${isActive ? 'text-blue-400' : ''}`} />
                <span className={isActive ? 'block' : 'hidden md:block'}>{link.name}</span>
                
                {/* Active Indicator Dot */}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                )}
              </Link>
            )
          })}
        </div>

        {/* Action Button */}
        <Link 
          href="/contact" 
          className="hidden sm:flex bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full transition-colors"
        >
          Hire Us
        </Link>
      </div>
    </nav>
  )
}