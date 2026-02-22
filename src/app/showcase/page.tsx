import { createClient } from '@supabase/supabase-js'
import { 
  ExternalLink, Layout, Code2, Globe, Cpu, ArrowUpRight, 
  Terminal, Activity, Zap, Shield, Database, Cloud, Lock, Server, BarChart3
} from 'lucide-react'
import Link from 'next/link'

export const revalidate = 0;
export const dynamic = 'force-dynamic';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default async function ShowcasePage() {
  let { data: projects, error } = await supabase
    .from('jobs')
    .select('business_name, website_url, screenshot_url, details, created_at')
    .eq('status', 'complete')
    .not('screenshot_url', 'is', null)
    .not('website_url', 'is', null)
    .neq('website_url', '')
    .order('created_at', { ascending: false })

  if (projects) {
    projects = projects.filter(project => {
      const desc = project.details?.toLowerCase() || "";
      return !(desc.includes('hosting') || desc.includes('maintenance') || desc.includes('recurring'));
    });
  }

  // REUSABLE SIDEBAR COMPONENT (Local)
  const SidebarContent = () => (
    <div className="space-y-8 pb-10">
      {/* BUILD STATS */}
      <div className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-md shadow-2xl">
        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-10 flex items-center gap-2">
          <Zap className="w-4 h-4 fill-blue-500" /> Infrastructure Node
        </h4>
        <div className="space-y-8">
          {[
            { label: "Total Builds", val: projects?.length || 0, icon: Cloud },
            { label: "Environment", val: "Production", icon: Cpu },
            { label: "Security", val: "SSL/AES-256", icon: Shield },
            { label: "Uptime", val: "99.99%", icon: Activity },
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-5">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                <stat.icon className="w-5 h-5 text-slate-400" />
              </div>
              <div>
                <div className="text-[10px] font-black uppercase text-slate-600 tracking-widest">{stat.label}</div>
                <div className="text-lg font-black italic tracking-tight">{stat.val}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-white/5">
          <Link href="/contact" className="flex items-center justify-center gap-2 w-full py-4 bg-white text-black hover:bg-blue-600 hover:text-white rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all">
            Initiate New Build
          </Link>
        </div>
      </div>

      {/* NETWORK FEED */}
      <div className="p-8 rounded-[2.5rem] bg-[#050506] border border-white/5">
         <div className="flex items-center justify-between mb-6">
           <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest flex items-center gap-2">
             <Terminal className="w-3 h-3" /> Console_Logs
           </span>
           <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
         </div>
         <div className="space-y-3 font-mono text-[9px] text-slate-600">
            <p className="flex justify-between"><span>{'>'} GET_PROJECTS</span> <span className="text-emerald-500">200_OK</span></p>
            <p className="flex justify-between"><span>{'>'} CACHE_STATUS</span> <span className="text-blue-500">HIT</span></p>
            <p className="flex justify-between"><span>{'>'} DB_LATENCY</span> <span className="text-blue-500">22ms</span></p>
            <div className="pt-4 text-slate-800 text-[8px] uppercase font-black tracking-tighter">
               Streaming real-time data from WebCircuit DB
            </div>
         </div>
      </div>
    </div>
  );

  if (error) {
    return (
      <div className="min-h-screen bg-[#020203] flex items-center justify-center">
        <div className="text-center space-y-4">
          <Terminal className="w-12 h-12 text-red-500 mx-auto animate-pulse" />
          <p className="text-slate-500 font-mono tracking-tighter uppercase">Connection_Failure: DB_SYNC_ERROR</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#020203] text-slate-50 pt-32 pb-40 px-4 md:px-8 selection:bg-blue-500/30">
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full -z-10" />
      <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] rounded-full -z-10" />

      <main className="max-w-[1600px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start relative">
          
          <div className="flex-1 w-full min-w-0">
            <header className="max-w-3xl mb-24 px-2">
              <div className="flex items-center gap-4 mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black tracking-[0.2em] uppercase">
                  <Activity className="w-3 h-3" /> System Live
                </div>
                <div className="h-px w-20 bg-white/10" />
                <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Archive v4.2</span>
              </div>

              <h1 className="text-6xl md:text-[7.5rem] font-black tracking-tighter mb-8 leading-[0.8] uppercase italic">
                PROVEN <br />
                <span className="text-slate-800 bg-gradient-to-r from-slate-600 to-slate-400 bg-clip-text text-transparent italic">CONCEPT.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl font-medium">
                Every project below represents a custom-engineered digital asset. We bypass standard builders to deliver <span className="text-white">high-performance, edge-rendered ecosystems</span> that dominate search rankings.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-20">
              {projects && projects.length > 0 ? (
                projects.map((project, idx) => (
                  <div key={project.business_name} className="group relative">
                    <div className="absolute -top-10 -left-2 text-[8rem] font-black text-white/[0.02] pointer-events-none group-hover:text-blue-500/[0.03] transition-colors uppercase italic">
                      0{idx + 1}
                    </div>
                    <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-white/5 bg-slate-900 transition-all duration-700 group-hover:border-blue-500/40 group-hover:shadow-[0_0_80px_-20px_rgba(59,130,246,0.2)]">
                      <img 
                        src={project.screenshot_url} 
                        alt={project.business_name}
                        className="w-full h-full object-cover object-top pt-8 transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-[#020203]/90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center gap-6 px-8 text-center">
                         <a href={project.website_url} target="_blank" className="flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-2xl font-black transition-all hover:bg-blue-500">
                          LAUNCH ASSET <ExternalLink className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                    <div className="mt-8 flex justify-between items-start">
                       <h3 className="text-3xl font-black tracking-tighter uppercase italic">{project.business_name}</h3>
                       <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                        <ArrowUpRight className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                ))
              ) : null}
            </div>

            {/* MOBILE SIDEBAR VERSION: Appears after the grid on small/medium screens only */}
            <div className="mt-24 lg:hidden w-full">
               <SidebarContent />
            </div>
          </div>

          {/* DESKTOP SIDEBAR VERSION: Sticky on the right for large screens only */}
          <aside className="lg:w-96 hidden lg:block self-stretch">
            <div className="sticky top-32">
              <SidebarContent />
            </div>
          </aside>

        </div>
      </main>
    </div>
  )
}