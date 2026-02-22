"use client"

import Link from 'next/link'
import { 
  ArrowRight, Zap, Shield, BarChart3, ChevronRight, Code2, Rocket, 
  MessageSquare, Layers, X, Check, Timer, TrendingUp, DollarSign, 
  MapPin, Monitor, Smartphone, Globe, Cpu, MousePointer2, Terminal,
  Server, Lock, FastForward, Database, Search
} from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#020203] text-slate-50 overflow-x-hidden selection:bg-blue-500/30">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden" aria-label="Web Design Clevedon Hero">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-blue-600/10 blur-[160px] rounded-full opacity-50 -z-10" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full -z-10 animate-pulse" />
        
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: Text & CTA */}
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs font-bold mb-8 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="tracking-[0.2em] uppercase">Engineering South West Digital Infrastructure</span>
              </div>
              
              <h1 className="text-6xl md:text-[5.5rem] font-black tracking-tighter mb-8 leading-[0.85] uppercase">
                WE BUILD THE <br />
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent italic">
                  FASTEST WEB
                </span>
              </h1>
              
              <p className="max-w-xl text-lg md:text-xl text-slate-400 mb-10 leading-relaxed font-medium">
                High-performance digital products for founders in <span className="text-blue-400 font-bold">Clevedon</span>, <span className="text-blue-400 font-bold">Bristol</span>, and across the <span className="text-blue-400 font-bold">South West</span>. Pure speed, no fluff.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
                <Link href="/showcase" className="group w-full sm:w-auto h-16 px-10 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black transition-all shadow-xl shadow-blue-600/20 active:scale-95">
                  VIEW SHOWCASE
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="#process" className="w-full sm:w-auto h-16 px-10 flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl font-black transition-all backdrop-blur-sm">
                  OUR METHODS
                </Link>
              </div>

              {/* Mini Trust Row */}
              <div className="flex items-center gap-8 border-t border-white/5 pt-8">
                <div>
                  <div className="text-2xl font-black text-white italic">2026</div>
                  <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Latest Stack</div>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div>
                  <div className="text-2xl font-black text-white italic">0.4s</div>
                  <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Avg LCP</div>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#020203] bg-slate-800 flex items-center justify-center">
                      <Check className="w-4 h-4 text-blue-500" />
                    </div>
                  ))}
                  <span className="pl-4 text-[10px] uppercase tracking-widest text-slate-500 font-bold self-center">Trusted Locally</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Code Engine Mockup */}
            <div className="relative group lg:block hidden">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-[#0a0a0c] border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl">
                {/* Window Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/[0.02]">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="text-[10px] font-bold text-slate-500 tracking-widest uppercase flex items-center gap-2">
                    <Terminal className="w-3 h-3" /> engine.config.ts
                  </div>
                </div>
                {/* Code Body */}
                <div className="p-8 font-mono text-sm leading-relaxed">
                  <div className="flex gap-4">
                    <span className="text-slate-600 select-none">01</span>
                    <p><span className="text-purple-400">export const</span> <span className="text-blue-400">WebCircuitConfig</span> = &#123;</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-slate-600 select-none">02</span>
                    <p className="pl-4"><span className="text-slate-400">region:</span> <span className="text-green-400">'UK_SOUTH_WEST'</span>,</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-slate-600 select-none">03</span>
                    <p className="pl-4"><span className="text-slate-400">rendering:</span> <span className="text-green-400">'EDGE_DYNAMIC'</span>,</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-slate-600 select-none">04</span>
                    <p className="pl-4"><span className="text-slate-400">caching:</span> &#123; <span className="text-blue-400">strategy</span>: <span className="text-green-400">'stale-while-revalidate'</span> &#125;,</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-slate-600 select-none">05</span>
                    <p className="pl-4"><span className="text-slate-400">optimizationLevel:</span> <span className="text-orange-400">100</span>,</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-slate-600 select-none">06</span>
                    <p><span className="text-purple-400">&#125;</span></p>
                  </div>
                  {/* Performance Overlay */}
                  <div className="mt-8 pt-8 border-t border-white/5 grid grid-cols-2 gap-4">
                    <div className="bg-white/[0.03] p-4 rounded-xl border border-white/5">
                      <div className="text-blue-500 font-bold text-xs mb-1">LIGHTHOUSE</div>
                      <div className="text-3xl font-black text-white">100</div>
                    </div>
                    <div className="bg-white/[0.03] p-4 rounded-xl border border-white/5">
                      <div className="text-green-500 font-bold text-xs mb-1">TTFB</div>
                      <div className="text-3xl font-black text-white">18ms</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METRIC MARQUEE (New Hero Extension) */}
      <div className="bg-blue-600 py-4 overflow-hidden whitespace-nowrap border-y border-white/10">
        <div className="flex animate-marquee gap-12 items-center">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 text-white font-black italic text-sm tracking-widest uppercase">
              <span>Next.js 15 Ready</span>
              <Zap className="w-4 h-4" />
              <span>Edge Optimized</span>
              <Shield className="w-4 h-4" />
              <span>Type-Safe Engineering</span>
              <Globe className="w-4 h-4" />
            </div>
          ))}
        </div>
      </div>

      {/* 2. THE "WHY US" COMPARISON */}
      <section className="py-32 px-6 max-w-7xl mx-auto" id="why-web-circuit">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <div className="w-12 h-1 px-1 bg-blue-600 mb-8" />
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-8 uppercase italic leading-none">Why founders <br /><span className="text-blue-500">choose WebCircuit</span></h2>
            <p className="text-slate-400 mb-10 text-xl leading-relaxed">We provide <span className="text-white font-bold underline decoration-blue-500 underline-offset-8 decoration-4">elite web design in Clevedon</span> and custom software engineering for North Somerset's most ambitious businesses.</p>
            
            <div className="grid grid-cols-1 gap-6">
              {[
                { text: "Proprietary Edge-Rendering Architecture", icon: Cpu, desc: "Faster than standard hosting." },
                { text: "Local support across North Somerset & Bristol", icon: MapPin, desc: "We're in Clevedon, not overseas." },
                { text: "Zero technical debt or bloated plugins", icon: Code2, desc: "Clean code that scales forever." },
              ].map((item, i) => (
                <div key={i} className="flex gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500 transition-colors">
                    <item.icon className="w-6 h-6 text-blue-400 group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-black italic text-white uppercase tracking-tight">{item.text}</h4>
                    <p className="text-slate-500 text-sm font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-blue-500/5 blur-3xl rounded-full" />
            <div className="relative bg-slate-900/50 border border-slate-800 rounded-[2.5rem] overflow-hidden p-2 shadow-2xl backdrop-blur-sm">
              <div className="grid grid-cols-2">
                <div className="p-10 border-r border-slate-800 bg-black/40">
                  <p className="text-[10px] font-black text-slate-500 uppercase mb-8 tracking-[0.3em]">Generic Agency</p>
                  <ul className="space-y-6">
                    <li className="flex items-start gap-3 text-slate-500 text-sm font-bold line-through decoration-red-500/50"><X className="w-5 h-5 mt-0.5 flex-shrink-0 text-red-500" /> Slow Wordpress</li>
                    <li className="flex items-start gap-3 text-slate-500 text-sm font-bold line-through decoration-red-500/50"><X className="w-5 h-5 mt-0.5 flex-shrink-0 text-red-500" /> Outsourced Dev</li>
                    <li className="flex items-start gap-3 text-slate-500 text-sm font-bold line-through decoration-red-500/50"><X className="w-5 h-5 mt-0.5 flex-shrink-0 text-red-500" /> Hidden Fees</li>
                    <li className="flex items-start gap-3 text-slate-500 text-sm font-bold line-through decoration-red-500/50"><X className="w-5 h-5 mt-0.5 flex-shrink-0 text-red-500" /> 3-Month Delay</li>
                  </ul>
                </div>
                <div className="p-10 bg-blue-600/10">
                  <p className="text-[10px] font-black text-blue-400 uppercase mb-8 tracking-[0.3em]">WebCircuit UK</p>
                  <ul className="space-y-6">
                    <li className="flex items-start gap-3 text-blue-100 text-sm font-black italic"><Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-blue-400" /> Next.js 15 Speed</li>
                    <li className="flex items-start gap-3 text-blue-100 text-sm font-black italic"><Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-blue-400" /> 100% In-House</li>
                    <li className="flex items-start gap-3 text-blue-100 text-sm font-black italic"><Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-blue-400" /> Flat Fixed Price</li>
                    <li className="flex items-start gap-3 text-blue-100 text-sm font-black italic"><Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-blue-400" /> Rapid Delivery</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TECH STACK BENTO GRID (Increased Detail) */}
      <section className="py-24 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <p className="text-blue-500 font-black tracking-[0.3em] uppercase text-xs mb-4">The Stack</p>
              <h3 className="text-4xl md:text-5xl font-black italic tracking-tighter uppercase">Elite Technology<br />By Default.</h3>
            </div>
            <p className="max-w-xs text-slate-500 text-sm font-bold leading-relaxed">
              We don't use templates. We build on enterprise-grade infrastructure used by the world's leading tech companies.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {[
              { name: 'Next.js', icon: Zap, color: 'text-white' },
              { name: 'TypeScript', icon: Code2, color: 'text-blue-400' },
              { name: 'Supabase', icon: Database, color: 'text-green-400' },
              { name: 'Tailwind', icon: Layers, color: 'text-cyan-400' },
              { name: 'Vercel', icon: Server, color: 'text-slate-300' },
              { name: 'Search', icon: Search, color: 'text-orange-400' },
            ].map((tech) => (
              <div key={tech.name} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center gap-4 hover:bg-white/[0.05] transition-all group">
                <tech.icon className={`w-8 h-8 ${tech.color} group-hover:scale-110 transition-transform`} />
                <span className="text-xs font-black uppercase tracking-widest text-slate-400">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BUDGET FLEXIBILITY NOTE */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto p-12 md:p-20 rounded-[3rem] bg-gradient-to-br from-blue-600/10 to-transparent border border-blue-500/20 text-center relative overflow-hidden shadow-inner">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
            <div className="inline-flex items-center gap-2 text-blue-400 font-black mb-8 uppercase tracking-[0.2em] text-xs">
              <DollarSign className="w-5 h-5" /> Capital Efficiency
            </div>
            <h3 className="text-4xl md:text-6xl font-black mb-6 text-white tracking-tight uppercase italic">Flexible for your budget</h3>
            <p className="text-slate-400 text-lg md:text-2xl leading-relaxed max-w-2xl mx-auto font-medium">
              Whether you have £500 or £50,000, we prioritize features based on your available capital. 
              Our goal is to build the highest value version of your vision.
            </p>
          </div>
        </div>
      </section>

      {/* 5. PERFORMANCE BENTO GRID */}
      <section className="py-32 px-6 max-w-7xl mx-auto" aria-labelledby="web-performance-features">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 row-span-2 p-10 md:p-16 rounded-[3rem] bg-slate-900/40 border border-slate-800 flex flex-col justify-between group hover:border-blue-500/40 transition-all shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5">
                <Zap className="w-64 h-64 text-blue-500" />
            </div>
            <div className="space-y-6 relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <Zap className="text-blue-400 w-8 h-8" />
              </div>
              <h2 id="web-performance-features" className="text-5xl font-black tracking-tight italic uppercase">Vercel Edge <br />Performance</h2>
              <p className="text-slate-400 text-xl max-w-md leading-relaxed font-medium">
                We optimize every millisecond. Our deployments leverage Edge Runtime to ensure sub-100ms load times globally.
              </p>
            </div>
            <div className="mt-16 flex flex-wrap gap-4 relative z-10">
                {['99 Lighthouse', 'SSR', 'SEO Optimized', 'UK Data Centers', 'Edge Caching'].map((tag) => (
                  <span key={tag} className="px-5 py-2.5 rounded-xl bg-black border border-slate-800 text-[10px] font-black uppercase text-slate-400 tracking-widest">
                    {tag}
                  </span>
                ))}
            </div>
          </div>

          <div className="p-10 rounded-[3rem] bg-slate-900/40 border border-slate-800 group hover:border-purple-500/30 transition-all shadow-lg flex flex-col justify-between">
            <div>
              <BarChart3 className="text-purple-400 w-10 h-10 mb-8" />
              <h3 className="text-2xl font-black italic uppercase mb-4">Data Driven</h3>
              <p className="text-slate-500 text-lg leading-relaxed font-medium">Real-time dashboards and analytics built directly into your platform.</p>
            </div>
          </div>

          <div className="p-10 rounded-[3rem] bg-slate-900/40 border border-slate-800 group hover:border-green-500/30 transition-all shadow-lg flex flex-col justify-between">
            <div>
              <Shield className="text-green-400 w-10 h-10 mb-8" />
              <h3 className="text-2xl font-black italic uppercase mb-4">Secure</h3>
              <p className="text-slate-500 text-lg leading-relaxed font-medium">Row Level Security (RLS) and end-to-end encryption via Supabase.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. GLOBAL NETWORK (New Heavy Feature Section) */}
      <section className="py-32 bg-white/[0.02] border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase mb-6">Global Scale. <br /><span className="text-blue-600">Local Heart.</span></h2>
            <p className="text-slate-500 text-xl max-w-2xl mx-auto font-medium leading-relaxed">We deploy to 100+ edge locations globally, but we're based right here in Clevedon. You get enterprise speed with local accountability.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: FastForward, title: "Latency Zero", desc: "Your site loads instantly whether the user is in Bristol or Brisbane." },
              { icon: Lock, title: "Hardened", desc: "Enterprise-grade DDoS protection and WAF firewalling on every build." },
              { icon: Rocket, title: "Next Gen", desc: "Utilizing Server Components and Streaming for the ultimate UX." },
            ].map((f, i) => (
              <div key={i} className="text-center p-8">
                <div className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <f.icon className="w-8 h-8 text-blue-500" />
                </div>
                <h4 className="text-2xl font-black italic uppercase mb-4">{f.title}</h4>
                <p className="text-slate-500 font-medium leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PROCESS SECTION */}
      <section className="py-32 px-6" id="process">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 uppercase italic leading-none">The WebCircuit <br />Process</h2>
            <div className="w-24 h-2 bg-blue-600 mx-auto mb-6" />
            <p className="text-slate-500 text-xl font-bold uppercase tracking-widest">Engineering excellence for the South West</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: MessageSquare, title: 'Discovery', desc: 'Strategy sessions to align your business goals with the right tech stack.' },
              { icon: Layers, title: 'Architecture', desc: 'Designing type-safe database schemas and scalable edge infrastructure.' },
              { icon: Code2, title: 'Production', desc: 'Rapid development cycles with weekly staging updates for transparency.' },
              { icon: Rocket, title: 'Launch', desc: 'Edge deployment and SEO indexing for maximum visibility from day one.' },
            ].map((step, i) => (
              <div key={i} className="relative p-10 rounded-[2.5rem] bg-slate-900/20 border border-white/5 group hover:bg-slate-900/40 transition-all">
                <div className="absolute -top-5 -left-5 w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center font-black italic shadow-xl shadow-blue-600/40 group-hover:rotate-12 transition-transform">
                  {i + 1}
                </div>
                <step.icon className="w-12 h-12 text-blue-500 mb-8" />
                <h4 className="text-2xl font-black mb-4 uppercase italic">{step.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed font-bold">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SOUTH WEST SERVICE AREA ENGINE */}
      <section className="py-32 px-6 border-y border-white/5 bg-blue-600/[0.02]" id="service-areas">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black tracking-[0.2em] uppercase mb-8">
              <MapPin className="w-4 h-4" /> South West Digital Network
            </div>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-10 leading-[0.85] italic uppercase">
              CLEVEDON <br />
              <span className="text-slate-500">& BEYOND.</span>
            </h2>
            <p className="text-slate-400 text-xl leading-relaxed mb-10 font-medium">
              Based in <strong>Clevedon</strong>, we provide elite web development and software engineering to the entire <strong>South West</strong>. We build local success stories through technical dominance.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                'North Somerset Web Development', 'Bristol SEO', 'Portishead Web Design', 
                'Nailsea Software Engineering', 'Weston Business Websites', 'Bath SaaS', 
                'Gloucester Apps', 'Taunton E-commerce'
              ].map((area) => (
                <span key={area} className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-[10px] font-black uppercase text-slate-500 tracking-widest hover:border-blue-500/50 transition-colors">
                  {area}
                </span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-10 rounded-[2.5rem] bg-slate-900/40 border border-slate-800 transition-all hover:bg-slate-900/60 hover:-translate-y-2">
              <h4 className="font-black text-blue-400 mb-4 uppercase text-xs tracking-[0.3em]">Local Advantage</h4>
              <p className="text-slate-500 leading-relaxed font-bold">On-site meetings and direct physical support for businesses in the North Somerset and Bristol region.</p>
            </div>
            <div className="p-10 rounded-[2.5rem] bg-slate-900/40 border border-slate-800 transition-all hover:bg-slate-900/60 hover:-translate-y-2">
              <h4 className="font-black text-purple-400 mb-4 uppercase text-xs tracking-[0.3em]">Regional Scale</h4>
              <p className="text-slate-500 leading-relaxed font-bold">Deploying world-class software that puts South West founders on the global map with reliability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CTA SECTION */}
      <section className="py-40 px-6">
        <div className="max-w-6xl mx-auto p-16 md:p-32 rounded-[4rem] bg-gradient-to-br from-blue-600 to-indigo-800 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl -mr-64 -mt-64 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-black/20 rounded-full blur-3xl -ml-64 -mb-64" />
          
          <h2 className="text-6xl md:text-8xl font-black mb-10 relative z-10 italic uppercase leading-none tracking-tighter">
            Ready to <br />scale?
          </h2>
          <p className="text-blue-100 mb-16 text-xl md:text-2xl max-w-2xl mx-auto relative z-10 leading-relaxed font-medium">
            Partner with the leading <span className="font-black border-b-4 border-blue-400">Clevedon web agency</span>. We're currently taking on new projects for Q2 2026.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-4 bg-white text-blue-600 px-16 py-7 rounded-[2rem] font-black text-2xl hover:scale-105 transition-all shadow-2xl relative z-10 active:scale-95 uppercase tracking-tighter">
            Get Started <ChevronRight className="w-8 h-8" />
          </Link>
        </div>
      </section>

      {/* FOOTER SECTION */}
 
      {/* Tailwind Custom Keyframes (Add to globals.css) */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  )
}