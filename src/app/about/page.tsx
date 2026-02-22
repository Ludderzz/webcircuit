import { 
  Code2, Cpu, Globe2, Layers, MapPin, Rocket, Users, 
  ShieldCheck, Zap, BarChart3, ChevronDown, CheckCircle2 
} from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  const stack = [
    { name: 'Next.js 15', desc: 'App Router & React Server Components for SEO dominance.' },
    { name: 'TypeScript', desc: 'Industrial-grade type safety for zero-runtime errors.' },
    { name: 'Tailwind CSS', desc: 'Atomic CSS architecture for lightning-fast paint times.' },
    { name: 'Supabase', desc: 'Real-time PostgreSQL infrastructure & secure Auth.' },
    { name: 'Vercel Edge', desc: 'Global content delivery with 99.9% uptime.' },
    { name: 'Framer Motion', desc: 'Purposeful animations that enhance user retention.' },
  ]

  const areas = [
    { region: 'Primary Hub', towns: 'Clevedon, North Somerset' },
    { region: 'North Somerset Core', towns: 'Portishead, Nailsea, Yatton, Backwell, Long Ashton' },
    { region: 'Greater Somerset', towns: 'Weston-super-Mare, Bridgwater, Taunton, Glastonbury' },
    { region: 'South West & Beyond', towns: 'Bristol, Bath, Cheltenham, Gloucester, Exeter' },
  ]

  const faqs = [
    { q: "Why choose Next.js for local SEO?", a: "Unlike standard builders, Next.js generates static pages with optimized metadata, resulting in significantly higher search rankings for local North Somerset businesses." },
    { q: "Do you offer ongoing maintenance?", a: "Yes. We provide 'WebCircuit Care' packages including security patching, uptime monitoring, and monthly performance audits." },
    { q: "How long does a typical build take?", a: "Enterprise-grade landing pages ship in 2 weeks. Complex SaaS or E-commerce ecosystems typically range from 4-8 weeks." }
  ]

  return (
    <div className="min-h-screen bg-[#020203] text-slate-50 pt-32 pb-20 px-6 selection:bg-blue-500/30">
      <div className="max-w-7xl mx-auto">
        
        {/* 1. VISION SECTION (H1 for SEO) */}
        <section className="max-w-4xl mb-32">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black tracking-[0.2em] uppercase mb-8">
            <ShieldCheck className="w-3 h-3" /> Digital Engineering Studio
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.85] uppercase italic">
            ENGINEERING <br />
            <span className="text-slate-800 bg-gradient-to-r from-slate-600 to-slate-400 bg-clip-text text-transparent underline decoration-blue-600/50 decoration-8 underline-offset-[12px]">AUTHORITY.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-medium max-w-2xl">
            WebCircuit is a specialized technical laboratory. We bridge the gap between 
            <span className="text-white"> creative design</span> and <span className="text-white">hardcore infrastructure</span>, 
            delivering SEO-first ecosystems for Clevedon and Bristol's most ambitious brands.
          </p>
        </section>

        {/* 2. CORE PERFORMANCE METRICS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-32">
          {[
            { val: "99/100", label: "Core Web Vitals", color: "border-blue-600" },
            { val: "0.8s", label: "Avg. Load Time", color: "border-emerald-600" },
            { val: "100%", label: "Mobile Responsive", color: "border-purple-600" },
            { val: "SEO+", label: "Search Optimized", color: "border-orange-600" },
          ].map((stat, i) => (
            <div key={i} className={`p-8 border-t-2 ${stat.color} bg-white/[0.02] backdrop-blur-sm`}>
              <h3 className="text-4xl font-black italic mb-1">{stat.val}</h3>
              <p className="text-slate-500 uppercase tracking-widest text-[10px] font-black">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* 3. THE ARSENAL (H2) */}
        <section className="space-y-12 mb-40">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-12">
            <div>
              <h2 className="text-4xl font-black tracking-tight uppercase italic">The Technical Arsenal</h2>
              <p className="text-slate-500 mt-2">Zero technical debt. Maximum scalability.</p>
            </div>
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-[#020203] bg-slate-800" />
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-[#020203] bg-blue-600 flex items-center justify-center text-[10px] font-bold">+20</div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stack.map((item) => (
              <div key={item.name} className="group p-8 rounded-3xl border border-white/5 bg-gradient-to-br from-white/5 to-transparent hover:border-blue-500/50 transition-all duration-500">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Code2 className="w-6 h-6 text-blue-400" />
                </div>
                <h4 className="font-black text-xl mb-2 tracking-tight uppercase italic">{item.name}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. SERVICE AREA - LOCAL SEO ENGINE */}
        <section className="mb-40 p-1 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 rounded-[4rem]">
          <div className="bg-[#020203] rounded-[3.9rem] p-8 md:p-20 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[100px] -z-10" />
            
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-8 leading-none">
                  DOMINATING THE <br />
                  <span className="text-blue-500">SOUTH WEST.</span>
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-10">
                  We are headquartered in Clevedon, but our infrastructure serves the entire region. From 
                  <span className="text-white font-bold"> Web Design in North Somerset</span> to 
                  <span className="text-white font-bold"> Software Development in Bristol</span>, 
                  we provide the local proximity you want with the enterprise quality you need.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="px-8 py-4 bg-white text-black font-black uppercase text-xs tracking-widest rounded-full hover:bg-blue-600 hover:text-white transition-all">
                    Book a call
                  </Link>
                </div>
              </div>
              <div className="space-y-4">
                {areas.map((area, i) => (
                  <div key={i} className="flex items-start gap-6 p-6 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors">
                    <MapPin className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-black uppercase text-xs tracking-widest mb-2">{area.region}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed font-medium">{area.towns}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. PROCESS SECTION (Visual Blueprint) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-40">
          <div className="relative">
             <div className="absolute -inset-4 bg-blue-600/20 blur-3xl rounded-full opacity-20" />
             <div className="relative aspect-square rounded-[60px] overflow-hidden border border-white/10 shadow-2xl">
               <img 
                 src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" 
                 className="w-full h-full object-cover grayscale brightness-50"
                 alt="Hardware Engineering"
               />
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="p-8 bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl text-center">
                    <BarChart3 className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                    <span className="block text-2xl font-black italic tracking-tighter uppercase">Data Driven</span>
                    <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Optimized for Conversion</span>
                  </div>
               </div>
             </div>
          </div>
          
          <div className="space-y-12">
            <h2 className="text-5xl font-black tracking-tight uppercase italic">The Deployment Pipeline</h2>
            <div className="space-y-10">
              {[
                { title: "Discovery & UX Logic", body: "We define the technical scope and user flows. No templates, just bespoke strategy.", icon: <Layers /> },
                { title: "Hyper-Performance Build", body: "Next.js 15 integration with custom CSS architectures for < 1s load times.", icon: <Cpu /> },
                { title: "Edge Deployment", body: "Lighthouse optimization and global CDN distribution for instant access anywhere.", icon: <Rocket /> }
              ].map((step, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl border border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-blue-500 group-hover:border-blue-500 transition-all">
                    {step.icon}
                  </div>
                  <div>
                    <h5 className="font-black text-xl uppercase italic tracking-tight mb-2">{step.title}</h5>
                    <p className="text-slate-500 leading-relaxed text-sm">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. FAQ - SEO RICH SNIPPETS */}
        <section className="max-w-3xl mx-auto mb-40">
          <h2 className="text-3xl font-black uppercase italic text-center mb-16 tracking-widest">Knowledge Base</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group p-6 rounded-3xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all cursor-pointer">
                <summary className="list-none flex justify-between items-center font-bold text-lg">
                  {faq.q}
                  <ChevronDown className="w-5 h-5 text-slate-600 group-open:rotate-180 transition-transform" />
                </summary>
                <p className="mt-4 text-slate-400 leading-relaxed text-sm">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* 7. FINAL CTA */}
        <section className="text-center p-20 rounded-[4rem] bg-blue-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase italic mb-8 relative z-10">
            Ready to <br /> Upgrade?
          </h2>
          <p className="text-blue-100 mb-12 text-lg font-medium relative z-10">Stop losing traffic to inferior tech. Secure your digital dominance today.</p>
          <Link href="/contact" className="inline-flex items-center gap-4 px-12 py-6 bg-black text-white rounded-full font-black uppercase text-sm tracking-[0.2em] hover:scale-105 transition-transform relative z-10">
            Start Your Build <Rocket className="w-5 h-5" />
          </Link>
        </section>

      </div>
    </div>
  )
}