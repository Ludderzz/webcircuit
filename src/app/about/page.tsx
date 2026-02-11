import { Code2, Cpu, Globe2, Layers, MapPin, Rocket, Users } from 'lucide-react'

export default function AboutPage() {
  const stack = [
    { name: 'Next.js 15', desc: 'The React Framework for the Web' },
    { name: 'TypeScript', desc: 'Type-safe code for scaling projects' },
    { name: 'Tailwind CSS', desc: 'Modern utility-first styling' },
    { name: 'Supabase', desc: 'Open source Firebase alternative' },
    { name: 'PostgreSQL', desc: 'The world’s most advanced database' },
    { name: 'Framer Motion', desc: 'Cinematic layout animations' },
  ]

  const areas = [
    { region: 'Primary Hub', towns: 'Clevedon, North Somerset' },
    { region: 'North Somerset Core', towns: 'Portishead, Nailsea, Yatton, Backwell, Long Ashton' },
    { region: 'Greater Somerset', towns: 'Weston-super-Mare, Bridgwater, Taunton, Glastonbury' },
    { region: 'South West & Beyond', towns: 'Bristol, Bath, Cheltenham, Gloucester, Exeter' },
  ]

  return (
    <div className="min-h-screen bg-[#020203] text-slate-50 pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* 1. VISION SECTION */}
        <section className="max-w-3xl mb-32">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-tight">
            WE ARE <br />
            <span className="text-slate-500 underline decoration-blue-600 decoration-4 underline-offset-8">WEBCIRCUIT.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-medium">
            A specialized digital studio focused on high-conversion engineering. 
            We don't just "make websites"—we build scalable infrastructure for the modern web.
          </p>
        </section>

        {/* 2. CORE VALUES / STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          <div className="p-8 border-l border-blue-600 bg-white/5">
            <h3 className="text-4xl font-bold mb-2">99/100</h3>
            <p className="text-slate-500 uppercase tracking-widest text-xs font-bold">Lighthouse Performance</p>
          </div>
          <div className="p-8 border-l border-purple-600 bg-white/5">
            <h3 className="text-4xl font-bold mb-2">100%</h3>
            <p className="text-slate-500 uppercase tracking-widest text-xs font-bold">Type-Safe Deliverables</p>
          </div>
          <div className="p-8 border-l border-green-600 bg-white/5">
            <h3 className="text-4xl font-bold mb-2">24/7</h3>
            <p className="text-slate-500 uppercase tracking-widest text-xs font-bold">System Reliability</p>
          </div>
        </div>

        {/* 3. THE STACK (Grid) */}
        <section className="space-y-12 mb-40">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-4xl font-bold tracking-tight">The Arsenal</h2>
            <p className="text-slate-500 max-w-sm">We use the most advanced tools to ensure your product stays relevant for years, not months.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {stack.map((item) => (
              <div key={item.name} className="p-6 rounded-2xl border border-slate-800 bg-slate-900/20 hover:bg-slate-900/50 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                  <Code2 className="w-5 h-5 text-blue-400" />
                </div>
                <h4 className="font-bold text-lg mb-1">{item.name}</h4>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICE AREA SECTION - SEO ENGINE */}
        <section className="mb-40 p-8 md:p-16 rounded-[3rem] bg-gradient-to-b from-blue-600/5 to-transparent border border-slate-800/50">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black tracking-[0.2em] uppercase mb-6">
                <MapPin className="w-3 h-3" /> Service Network
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">SOUTH WEST <br /><span className="text-slate-500">COVERAGE.</span></h2>
              <p className="text-slate-400 leading-relaxed mb-8 max-w-md">
                While our code is global, our roots are local. We provide on-site consultation and elite web development across the South West, ensuring Somerset businesses have access to world-class engineering.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {areas.map((area, i) => (
                <div key={i} className="p-6 rounded-2xl border border-slate-800 bg-black/40 hover:border-blue-500/30 transition-all">
                  <h4 className="text-blue-400 text-[10px] font-black uppercase tracking-widest mb-1">{area.region}</h4>
                  <p className="text-slate-200 font-bold leading-tight">{area.towns}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. PROCESS SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">The Blueprint</h2>
            
            <div className="space-y-6">
              {[
                { icon: <Layers />, title: "Strategy", body: "We map out the user journey and data architecture before a single line of code is written." },
                { icon: <Cpu />, title: "Development", body: "Clean, modular code built on Next.js 15 for lightning-fast server-side rendering." },
                { icon: <Rocket />, title: "Deployment", body: "Global edge distribution via Vercel, ensuring your site is fast from London to Tokyo." }
              ].map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-slate-800 flex items-center justify-center text-blue-500">
                    {step.icon}
                  </div>
                  <div>
                    <h5 className="font-bold text-xl">{step.title}</h5>
                    <p className="text-slate-500 leading-relaxed">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative aspect-square rounded-[40px] overflow-hidden border border-slate-800">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20" />
            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" 
              className="w-full h-full object-cover grayscale opacity-50"
              alt="Server Room"
            />
          </div>
        </section>
      </div>
    </div>
  )
}