import React from "react";
import GlassFolder from "./ui/glass-folder-cards";
import { Compass, Sparkles } from "lucide-react";

export default function PolarDossiers({ onOpenEnquiry }) {
  return (
    <section id="dossiers" className="relative py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Subtle Aurora Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-sky-500/10 via-indigo-500/5 to-transparent rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[#38bdf8] text-xs font-['JetBrains_Mono'] tracking-[0.2em] mb-4">
          <Compass className="w-3.5 h-3.5" />
          <span>INTERACTIVE FIELD DOSSIERS</span>
        </div>

        <h2 className="font-['Cinzel'] text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
          Frosted Polar Archives
        </h2>

        <p className="font-['Plus_Jakarta_Sans'] text-slate-300 text-sm sm:text-base font-light leading-relaxed">
          Hover to lean the glass hinge, click to fan open authentic route logs, expedition photography, and navigational waypoints.
        </p>
      </div>

      {/* 3D Glass Folders Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center items-end">
        {/* Dossier 1: South Pole Quest */}
        <GlassFolder
          label="South Pole Route"
          meta={'90°00\'00" S'}
          tone="dark"
          art="glacier"
          seed={7}
          action="more"
          labelPlacement="top-left"
          appearDelay={0}
          files={[
            {
              name: "Amundsen-Scott Route.pdf",
              meta: "Flight Path • 6.4 MB",
              art: "glacier",
            },
            {
              name: "Plateau Weather Window",
              meta: "-28°C • Zero Wind",
              art: "aurora",
            },
            {
              name: "Ceremonial Pole Marker",
              meta: "Waypoints Log",
              image: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=600&q=80",
            },
          ]}
          menu={[
            { label: "Request Route Map", onSelect: () => onOpenEnquiry?.() },
            { label: "Print Checklist" },
          ]}
        />

        {/* Dossier 2: Luxury Camp Living */}
        <GlassFolder
          label="Echo & Whichaway"
          meta="Luxury Pods"
          tone="light"
          art="aurora"
          seed={14}
          action="add"
          labelPlacement="bottom-left"
          appearDelay={150}
          files={[
            {
              name: "Echo Space Pods",
              meta: "Heated • Solar Power",
              image: "https://images.unsplash.com/photo-1548777123-e216912df7d8?auto=format&fit=crop&w=600&q=80",
            },
            {
              name: "South African Wine Cellar",
              meta: "Private Chef Menu",
              art: "ember",
            },
            {
              name: "Sauna & Blue Ice Bluff",
              meta: "Panoramic View",
              art: "verdant",
            },
          ]}
        />

        {/* Dossier 3: Emperor Penguin Colony */}
        <GlassFolder
          label="Emperor Sanctuary"
          meta="Atka Bay"
          tone="dark"
          art="ember"
          seed={21}
          action="more"
          labelPlacement="top-right"
          appearDelay={300}
          files={[
            {
              name: "Atka Colony Survey",
              meta: "14,000 Breeding Pairs",
              image: "https://images.unsplash.com/photo-1598439210625-5067c578f3f6?auto=format&fit=crop&w=600&q=80",
            },
            {
              name: "Hatching Season Log",
              meta: "Chick Activity Index",
              art: "dusk",
            },
            {
              name: "Wildlife Distance Protocol",
              meta: "IAATO Mandate",
            },
          ]}
          menu={[
            { label: "Expedition Dates", onSelect: () => onOpenEnquiry?.() },
            { label: "Wildlife Guidelines" },
          ]}
        />
      </div>

      <div className="mt-14 text-center">
        <p className="font-['JetBrains_Mono'] text-xs text-slate-500 tracking-[0.2em] uppercase">
          ✦ Hover to lean glass • Click to fan out sheets • + to add notes ✦
        </p>
      </div>
    </section>
  );
}
