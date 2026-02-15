import { createClient } from '@supabase/supabase-js'
import { ExternalLink, Layout } from 'lucide-react'

// FORCE DYNAMIC DATA: This tells Next.js to bypass the cache 
// and fetch fresh projects from Supabase on every visit.
export const revalidate = 0;
export const dynamic = 'force-dynamic';

// Initialize the client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default async function ShowcasePage() {
  // 1. Fetch data that is complete and has URLs
  let { data: projects, error } = await supabase
    .from('jobs')
    .select('business_name, website_url, screenshot_url, details')
    .eq('status', 'complete')
    .not('screenshot_url', 'is', null)
    .not('website_url', 'is', null)
    .neq('website_url', '')
    .order('created_at', { ascending: false })

  // 2. The No-SQL Filter: Exclude hosting/maintenance from appearing
  if (projects) {
    projects = projects.filter(project => {
      const desc = project.details?.toLowerCase() || "";
      const isRecurring = desc.includes('hosting') || 
                          desc.includes('maintenance') || 
                          desc.includes('recurring');
      return !isRecurring;
    });
  }

  if (error) {
    console.error("Supabase error:", error.message)
    return (
      <div className="min-h-screen bg-[#020203] flex items-center justify-center">
        <p className="text-slate-500 italic">Failed to sync with the WebCircuit database.</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#020203] text-slate-50 pt-32 pb-20 px-4 md:px-8 selection:bg-blue-500/30">
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-blue-600/10 blur-[120px] rounded-full -z-10" />

      <main className="max-w-[1600px] mx-auto">
        <header className="max-w-3xl mb-16 px-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black tracking-[0.2em] uppercase mb-6">
            <Layout className="w-3 h-3" /> Digital Archive
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-none">
            PROOF OF <br />
            <span className="text-slate-500">CONCEPT.</span>
          </h1>
          <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-xl">
            A curated selection of platforms, interfaces, and ecosystems we've engineered from the ground up. All projects are custom coded and this page is being updated as my projects get going though a admin panel
          </p>
        </header>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 md:gap-x-8 gap-y-12 md:gap-y-16">
          {projects && projects.length > 0 ? (
            projects.map((project) => (
              <div key={project.business_name} className="group cursor-default">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl md:rounded-[2rem] border border-slate-800 bg-slate-900 transition-all duration-500 group-hover:border-blue-500/50 group-hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)]">
                  
                  {/* LIVE BADGE */}
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-bold tracking-widest text-white uppercase">Live</span>
                  </div>

                  <img 
                    src={project.screenshot_url} 
                    alt={project.business_name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 px-4">
                    <a 
                      href={project.website_url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-white text-black px-4 py-2 md:px-6 md:py-3 rounded-full text-xs md:text-sm font-bold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:scale-105 active:scale-95 text-center"
                    >
                      Visit Site <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                    </a>
                  </div>
                </div>

                <div className="mt-4 md:mt-6 flex justify-between items-start px-1 md:px-2">
                  <div className="space-y-1 md:space-y-2">
                    <h3 className="text-lg md:text-2xl font-bold tracking-tight group-hover:text-blue-400 transition-colors line-clamp-1">
                      {project.business_name}
                    </h3>
                    <p className="text-slate-500 leading-relaxed text-[11px] md:text-sm line-clamp-2 md:line-clamp-none">
                      {project.details || "Full-stack web application developed for WebCircuit clients."}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center border border-dashed border-slate-800 rounded-3xl">
              <p className="text-slate-500 italic">No completed projects have been added to the showcase yet.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}