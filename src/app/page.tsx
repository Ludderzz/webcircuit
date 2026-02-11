import Link from 'next/link'
import { ArrowRight, Zap, Shield, BarChart3, ChevronRight, Code2, Rocket, MessageSquare, Layers, X, Check, Timer, TrendingUp, DollarSign, MapPin } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#020203] text-slate-50 overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-40 pb-20 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-blue-600/20 blur-[120px] rounded-full opacity-50 -z-10" />
        
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Engineering South West Digital Infrastructure • Q2 2026
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
            WE BUILD THE <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              FASTEST WEB
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
            High-performance digital products for founders in <span className="text-blue-400 font-bold">Clevedon</span>, <span className="text-blue-400 font-bold">Bristol</span>, and across the <span className="text-blue-400 font-bold">South West</span>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/showcase" className="group h-14 px-8 flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold transition-all shadow-lg shadow-blue-600/20">
              View Showcase
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. THE "WHY US" COMPARISON */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 uppercase">Why founders <br /><span className="text-blue-500">choose WebCircuit</span></h2>
            <p className="text-slate-400 mb-8 text-lg">We provide <span className="text-white font-bold underline decoration-blue-500">elite web design in Clevedon</span> and custom software engineering for North Somerset's most ambitious businesses.</p>
            
            <div className="space-y-4">
              {[
                { text: "Proprietary Edge-Rendering Architecture", icon: Check },
                { text: "Local support across North Somerset & Bristol", icon: Check },
                { text: "Zero technical debt or bloated plugins", icon: Check },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-200 font-bold">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-blue-400" />
                  </div>
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 rounded-3xl overflow-hidden p-1">
            <div className="grid grid-cols-2">
              <div className="p-8 border-r border-slate-800">
                <p className="text-xs font-bold text-slate-500 uppercase mb-6 tracking-widest">Generic Agency</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2 text-slate-500 text-sm line-through"><X className="w-4 h-4 mt-1 flex-shrink-0" /> Slow Wordpress</li>
                  <li className="flex items-start gap-2 text-slate-500 text-sm line-through"><X className="w-4 h-4 mt-1 flex-shrink-0" /> No Local Knowledge</li>
                  <li className="flex items-start gap-2 text-slate-500 text-sm line-through"><X className="w-4 h-4 mt-1 flex-shrink-0" /> Hidden Fees</li>
                  <li className="flex items-start gap-2 text-slate-500 text-sm line-through"><X className="w-4 h-4 mt-1 flex-shrink-0" /> 3-Month Timelines</li>
                </ul>
              </div>
              <div className="p-8 bg-blue-600/5">
                <p className="text-xs font-bold text-blue-400 uppercase mb-6 tracking-widest">WebCircuit</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2 text-blue-100 text-sm font-bold"><Check className="w-4 h-4 mt-1 flex-shrink-0 text-blue-400" /> Next.js 15 Speed</li>
                  <li className="flex items-start gap-2 text-blue-100 text-sm font-bold"><Check className="w-4 h-4 mt-1 flex-shrink-0 text-blue-400" /> Clevedon-Based Support</li>
                  <li className="flex items-start gap-2 text-blue-100 text-sm font-bold"><Check className="w-4 h-4 mt-1 flex-shrink-0 text-blue-400" /> Flat Fixed Pricing</li>
                  <li className="flex items-start gap-2 text-blue-100 text-sm font-bold"><Check className="w-4 h-4 mt-1 flex-shrink-0 text-blue-400" /> Rapid Delivery</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TECH STACK MARQUEE */}
      <div className="py-10 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-600 mb-8">Engineering Stack</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all">
              {['Next.js', 'TypeScript', 'Supabase', 'Tailwind', 'Vercel', 'PostgreSQL'].map((tech) => (
               <span key={tech} className="text-xl md:text-2xl font-bold tracking-tighter">{tech}</span>
              ))}
          </div>
        </div>
      </div>

      {/* 4. BUDGET FLEXIBILITY NOTE */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto p-8 md:p-12 rounded-[2.5rem] bg-blue-500/5 border border-blue-500/20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
            <div className="inline-flex items-center gap-2 text-blue-400 font-bold mb-6 uppercase tracking-widest text-xs">
              <DollarSign className="w-4 h-4" /> Capital Efficiency
            </div>
            <h4 className="text-3xl md:text-4xl font-black mb-4 text-white tracking-tight uppercase">Flexible for your budget</h4>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Whether you have £500 or £50,000, we prioritize features based on your available capital. 
              Our goal is to build the highest value version of your vision that fits your wallet.
            </p>
          </div>
        </div>
      </section>

      {/* 5. BENTO GRID FEATURES */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2 row-span-2 p-8 md:p-12 rounded-3xl bg-slate-900/40 border border-slate-800 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <Zap className="text-blue-400 w-6 h-6" />
              </div>
              <h2 className="text-4xl font-bold tracking-tight">Vercel Edge Performance</h2>
              <p className="text-slate-400 text-lg max-w-md">
                We optimize every millisecond. Our deployments leverage Edge Runtime to ensure sub-100ms load times globally.
              </p>
            </div>
            <div className="mt-12 flex gap-3">
                {['99 Lighthouse', 'SSR', 'SEO Optimized'].map((tag) => (
                  <span key={tag} className="px-4 py-2 rounded-xl bg-black border border-slate-800 text-xs font-bold uppercase text-slate-500">
                    {tag}
                  </span>
                ))}
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800 group hover:border-purple-500/30 transition-all">
            <BarChart3 className="text-purple-400 w-8 h-8 mb-6" />
            <h3 className="text-xl font-bold mb-2">Data Driven</h3>
            <p className="text-slate-500 text-sm">Real-time dashboards and analytics built directly into your platform.</p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800 group hover:border-green-500/30 transition-all">
            <Shield className="text-green-400 w-8 h-8 mb-6" />
            <h3 className="text-xl font-bold mb-2">Secure by Default</h3>
            <p className="text-slate-500 text-sm">Row Level Security (RLS) and end-to-end encryption via Supabase.</p>
          </div>
        </div>
      </section>

      {/* 6. TRUST SIGNALS */}
      <section className="py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
                <Timer className="w-10 h-10 text-blue-500 mx-auto" />
                <h4 className="text-2xl font-black">As Quick As We Can Launch</h4>
                <p className="text-slate-500">We don't do 6-month cycles. We build fast so you can start selling fast.</p>
            </div>
            <div className="space-y-4">
                <TrendingUp className="w-10 h-10 text-purple-500 mx-auto" />
                <h4 className="text-2xl font-black">Scalable Tech</h4>
                <p className="text-slate-500">Built to handle 10 users or 10 million without changing a single line of code.</p>
            </div>
            <div className="space-y-4">
                <DollarSign className="w-10 h-10 text-green-500 mx-auto" />
                <h4 className="text-2xl font-black">High ROI</h4>
                <p className="text-slate-500">Custom software that pays for itself through performance and automation.</p>
            </div>
        </div>
      </section>

      {/* 7. PROCESS SECTION */}
      <section className="py-32 px-6 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 uppercase">The WebCircuit Process</h2>
            <p className="text-slate-500 italic">Engineering excellence for North Somerset and the South West</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: MessageSquare, title: 'Discovery', desc: 'Strategy sessions to align your business goals with the right tech stack.' },
              { icon: Layers, title: 'Architecture', desc: 'Designing type-safe database schemas and scalable edge infrastructure.' },
              { icon: Code2, title: 'Production', desc: 'Rapid development cycles with weekly staging updates for complete transparency.' },
              { icon: Rocket, title: 'Launch', desc: 'Edge deployment and SEO indexing for maximum visibility from day one.' },
            ].map((step, i) => (
              <div key={i} className="relative p-8 rounded-3xl bg-slate-900/20 border border-white/5">
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-black italic">
                  {i + 1}
                </div>
                <step.icon className="w-10 h-10 text-blue-500 mb-6" />
                <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: SOUTH WEST SERVICE AREA ENGINE */}
      <section className="py-24 px-6 border-y border-white/5 bg-blue-600/[0.02]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black tracking-[0.2em] uppercase mb-6">
              <MapPin className="w-3 h-3" /> South West Digital Network
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[0.9]">
              CLEVEDON <br />
              <span className="text-slate-500">& BEYOND.</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Based in <strong>Clevedon</strong>, we provide elite web development and software engineering to the entire <strong>South West</strong>. We don't just build sites; we build local success stories.
            </p>
            <div className="flex flex-wrap gap-2">
              {['North Somerset', 'Bristol', 'Portishead', 'Nailsea', 'Weston', 'Bath', 'Gloucester'].map((area) => (
                <span key={area} className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-[10px] font-bold uppercase text-slate-400">
                  {area}
                </span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800">
              <h4 className="font-bold text-blue-400 mb-2 uppercase text-xs tracking-widest">Local Advantage</h4>
              <p className="text-sm text-slate-500">On-site meetings and direct physical support for businesses in the North Somerset region.</p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800">
              <h4 className="font-bold text-purple-400 mb-2 uppercase text-xs tracking-widest">Regional Scale</h4>
              <p className="text-sm text-slate-500">Deploying world-class software that puts South West founders on the global map.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CTA SECTION */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto p-12 md:p-20 rounded-[40px] bg-gradient-to-br from-blue-600 to-indigo-700 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/20 rounded-full blur-3xl -ml-32 -mb-32" />
          
          <h2 className="text-5xl md:text-7xl font-black mb-8 relative z-10">
            Ready to scale?
          </h2>
          <p className="text-blue-100 mb-12 text-lg md:text-xl max-w-xl mx-auto relative z-10">
            Partner with the leading <span className="font-bold border-b border-blue-300">Clevedon web agency</span>. We're currently taking on new projects across the South West.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 bg-white text-blue-600 px-12 py-5 rounded-full font-black text-xl hover:scale-105 transition-all shadow-xl relative z-10">
            Get Started <ChevronRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  )
}