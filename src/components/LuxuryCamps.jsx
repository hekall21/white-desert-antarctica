import { useState } from "react";
import { luxuryCamps } from "../data/expeditions";
import { Shield, Sparkles, Flame, Utensils, Wifi, Compass, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function LuxuryCamps({ onOpenEnquiry }) {
  const [activeCampIdx, setActiveCampIdx] = useState(0);
  const camp = luxuryCamps[activeCampIdx];

  const amenityIcons = {
    "Heated aerodynamic fiberglass geodesic pods": Flame,
    "Private Michelin-trained chefs preparing 5-course dinners": Utensils,
    "Handcrafted polar bar with rare single-malt whiskeys": Sparkles,
    "Dedicated communications dome with satellite internet": Wifi,
    "Wood-paneled lounge & polar exploration library": Compass,
    "Heated lakeside sauna with plunge opportunity": Flame,
    "Private chef dining paired with South African estate wines": Utensils,
    "Wellness & massage sanctuary dome": Sparkles,
  };

  return (
    <section id="camps" className="relative py-28 bg-[#0b1325]/70 overflow-hidden border-t border-b border-white/10">
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-['JetBrains_Mono'] text-xs text-amber-400 tracking-[0.25em] uppercase block mb-3">
            ASTRONAUT-INSPIRED SANCTUARIES
          </span>
          <h2 className="font-['Cinzel'] text-3xl sm:text-5xl font-bold text-white mb-6">
            Luxury Heated <span className="italic font-['Cormorant_Garamond'] text-amber-300">Pods & Camps.</span>
          </h2>
          <p className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            Zero permanent footprint. 100% heated comfort. Two pioneering camps engineered like space stations on the lunar frontier of Queen Maud Land.
          </p>

          {/* Camp Selector Tabs */}
          <div className="inline-flex p-1.5 rounded-full bg-white/[0.06] border border-white/15 backdrop-blur-xl mt-8">
            {luxuryCamps.map((c, idx) => (
              <button
                key={c.name}
                onClick={() => setActiveCampIdx(idx)}
                className={`px-6 py-2.5 rounded-full text-xs font-['Plus_Jakarta_Sans'] font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
                  activeCampIdx === idx
                    ? "bg-white text-[#070b14] shadow-lg shadow-white/20"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {c.name.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Camp Showcase Bento */}
        <AnimatePresence mode="wait">
          <motion.div
            key={camp.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
          >
            {/* Left: Camp Photography Frame (7 cols) */}
            <div className="lg:col-span-7 rounded-3xl overflow-hidden glass-polar border border-white/15 relative min-h-[420px] shadow-2xl">
              <img
                src={camp.image}
                alt={camp.name}
                className="w-full h-full object-cover min-h-[420px] filter brightness-[0.9] contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-transparent to-black/30 pointer-events-none" />

              {/* Coordinates Pill */}
              <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                <span className="font-['JetBrains_Mono'] text-xs font-bold bg-[#070b14]/85 text-amber-300 px-3.5 py-1.5 rounded-full border border-amber-400/30 backdrop-blur-md">
                  GPS: {camp.coordinates}
                </span>
                <span className="font-['JetBrains_Mono'] text-xs text-slate-300 bg-black/60 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
                  ELEVATION: {camp.elevation}
                </span>
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-6 left-6 right-6">
                <span className="font-['JetBrains_Mono'] text-xs text-amber-400 tracking-widest block mb-1">
                  EXCLUSIVE SANCTUARY
                </span>
                <h3 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold text-white">
                  {camp.name} — {camp.tagline}
                </h3>
              </div>
            </div>

            {/* Right: Specifications & Amenities (5 cols) */}
            <div className="lg:col-span-5 rounded-3xl p-8 sm:p-10 glass-pod flex flex-col justify-between shadow-2xl">
              <div>
                <div className="flex items-center justify-between border-b border-amber-400/20 pb-4 mb-6">
                  <span className="font-['JetBrains_Mono'] text-xs text-amber-300 tracking-wider">
                    SPECIFICATIONS // ACCOMMODATION
                  </span>
                  <span className="font-['JetBrains_Mono'] text-xs text-white bg-amber-500/20 border border-amber-400/30 px-2.5 py-1 rounded">
                    {camp.capacity}
                  </span>
                </div>

                <p className="font-['Plus_Jakarta_Sans'] text-sm text-slate-200 leading-relaxed font-light mb-8">
                  {camp.description}
                </p>

                <h4 className="font-['Cinzel'] text-base font-bold text-white mb-4 tracking-wider">
                  CAMP AMENITIES & HIGHLIGHTS
                </h4>

                <div className="space-y-3.5">
                  {camp.amenities.map((item, idx) => {
                    const IconComp = amenityIcons[item] || Sparkles;
                    return (
                      <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                        <div className="w-6 h-6 rounded-md bg-amber-400/10 border border-amber-400/30 flex items-center justify-center shrink-0 mt-0.5 text-amber-300">
                          <IconComp size={13} />
                        </div>
                        <span className="font-light">{item}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-amber-400/20 flex items-center justify-between">
                <div>
                  <span className="font-['JetBrains_Mono'] text-[0.65rem] text-amber-400/80 block uppercase">
                    ENVIRONMENTAL IMPACT
                  </span>
                  <span className="text-xs text-slate-300 font-semibold">
                    100% Removable & Solar-Powered
                  </span>
                </div>

                <button
                  onClick={onOpenEnquiry}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-400 hover:bg-white text-[#070b14] font-bold text-xs tracking-wider transition-all cursor-pointer shadow-lg shadow-amber-400/20"
                >
                  <span>RESERVE POD</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
