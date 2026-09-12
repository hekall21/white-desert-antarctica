import { useState } from "react";
import { expeditionsData } from "../data/expeditions";
import { ArrowUpRight, Clock, MapPin, Check, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function ExpeditionsGrid({ onSelectExpedition }) {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="expeditions" className="relative py-28 bg-[#070b14] overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 rounded-full bg-[#38bdf8]/5 filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-['JetBrains_Mono'] tracking-[0.2em] text-[#38bdf8] uppercase mb-3">
              <Sparkles size={14} />
              <span>THE EXPEDITIONS // 2026-2027 CALENDAR</span>
            </div>
            <h2 className="font-['Cinzel'] text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Signature Polar <span className="italic font-['Cormorant_Garamond'] text-[#38bdf8]">Voyages.</span>
            </h2>
          </div>
          <p className="font-['Plus_Jakarta_Sans'] text-sm text-slate-400 max-w-md leading-relaxed font-light">
            Each expedition is strictly limited to 12 guests per departure to preserve the fragile Antarctic interior and provide unmatched personalized service.
          </p>
        </div>

        {/* 4-Card Luxury Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expeditionsData.map((exp) => (
            <motion.div
              key={exp.id}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setHoveredId(exp.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative rounded-2xl overflow-hidden glass-polar border border-white/10 hover:border-[#38bdf8]/40 shadow-2xl transition-all duration-500 flex flex-col justify-between"
            >
              {/* Image with Parallax / Zoom */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.88]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1325] via-transparent to-black/40 pointer-events-none" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="font-['JetBrains_Mono'] text-[0.65rem] tracking-wider font-bold bg-[#070b14]/80 text-[#38bdf8] px-3 py-1 rounded-full border border-[#38bdf8]/30 backdrop-blur-md">
                    {exp.tag}
                  </span>
                  <span className="font-['JetBrains_Mono'] text-[0.65rem] text-slate-300 bg-black/60 px-2.5 py-1 rounded-full backdrop-blur-md">
                    {exp.coordinates}
                  </span>
                </div>

                {/* Duration Overlay Pill */}
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-xs font-['JetBrains_Mono'] text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-md border border-white/10">
                  <Clock size={12} className="text-[#38bdf8]" />
                  <span>{exp.duration}</span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <span className="font-['JetBrains_Mono'] text-xs text-[#38bdf8] tracking-widest block mb-1">
                    {exp.subtitle}
                  </span>
                  <h3 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold text-white mb-3">
                    {exp.title}
                  </h3>
                  <p className="font-['Plus_Jakarta_Sans'] text-sm text-slate-300 leading-relaxed font-light mb-6">
                    {exp.description}
                  </p>

                  {/* Highlights checklist */}
                  <ul className="space-y-2 mb-8 border-t border-white/5 pt-4">
                    {exp.highlights.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 font-['Plus_Jakarta_Sans']">
                        <Check size={14} className="text-[#38bdf8] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Pricing & CTA */}
                <div className="flex items-center justify-between pt-5 border-t border-white/10">
                  <div>
                    <span className="font-['JetBrains_Mono'] text-[0.65rem] uppercase tracking-widest text-slate-400 block">
                      ALL-INCLUSIVE FROM CAPE TOWN
                    </span>
                    <span className="font-['Cormorant_Garamond'] text-2xl font-bold text-white">
                      {exp.rates}
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectExpedition(exp)}
                    className="group/btn flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.08] hover:bg-white text-white hover:text-[#070b14] border border-white/20 text-xs font-bold font-['Plus_Jakarta_Sans'] tracking-wider transition-all duration-300 cursor-pointer"
                  >
                    <span>VIEW ITINERARY</span>
                    <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
