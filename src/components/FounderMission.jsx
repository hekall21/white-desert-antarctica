import React from "react";
import { motion } from "framer-motion";
import { Award, Leaf, Shield, Globe, Compass, Quote } from "lucide-react";

export default function FounderMission() {
  const commitments = [
    {
      icon: Leaf,
      title: "100% Carbon Neutral",
      description: "White Desert was the first Antarctic operator to be certified Climate Neutral in 2007. We fully offset all carbon footprint from jet fuel, camp energy, and supply flights."
    },
    {
      icon: Shield,
      title: "IAATO Leadership",
      description: "Full active member of the International Association of Antarctica Tour Operators. We adhere to the world's most stringent wildlife conservation and biosphere guidelines."
    },
    {
      icon: Globe,
      title: "Supporting Polar Science",
      description: "We utilize our private aviation network to transport international climate scientists, glaciologists, and research cargo into the deep interior at zero cost to academia."
    },
    {
      icon: Award,
      title: "Strict Zero-Trace Waste",
      description: "Every scrap of waste, grey water, and material brought onto the continent is carefully processed, sorted, and flown completely back to South Africa for recycling."
    }
  ];

  return (
    <section id="mission" className="relative py-32 bg-[#070b14] overflow-hidden border-t border-white/5">
      {/* Subtle background radial glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#38bdf8]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Founder Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#f59e0b] text-xs font-mono tracking-widest uppercase">
              <Compass className="w-3.5 h-3.5" />
              <span>Pioneered by Explorers</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif text-white leading-tight">
              “To glimpse Antarctica is to see Earth in its <span className="italic font-light text-[#38bdf8]">purest genesis</span>.”
            </h2>

            <div className="relative pl-6 border-l-2 border-[#f59e0b]/50 italic text-slate-300 font-serif text-lg leading-relaxed">
              <Quote className="w-8 h-8 text-white/10 absolute -top-4 -left-3 pointer-events-none" />
              After spending months man-hauling sleds across thousands of miles of frozen terrain during our record-breaking Antarctic crossing, we realized that true luxury isn't gold fixtures—it is standing in profound stillness on the edge of the world, with zero impact upon its pristine sanctity.
            </div>

            <div className="flex items-center gap-4 pt-2">
              <div className="w-14 h-14 rounded-full overflow-hidden border border-white/20 bg-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
                  alt="Patrick Woodhead"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="text-white font-medium tracking-wide">Patrick & Robyn Woodhead</div>
                <div className="text-xs font-mono text-slate-400">Guinness World Record Holders & Founders</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Environmental Commitments Matrix */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {commitments.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#0b1325]/70 border border-white/10 hover:border-white/25 transition-all duration-300 backdrop-blur-xl group hover:-translate-y-1 shadow-lg"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#38bdf8] mb-4 group-hover:scale-110 group-hover:bg-[#38bdf8]/10 transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Conservation Stats Banner */}
        <div className="mt-20 rounded-2xl p-8 bg-gradient-to-r from-[#0b1325] via-white/[0.03] to-[#0b1325] border border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center backdrop-blur-md">
          <div>
            <div className="text-2xl sm:text-4xl font-serif text-white font-bold">2007</div>
            <div className="text-xs font-mono text-slate-400 mt-1 uppercase tracking-wider">Carbon Neutral Since</div>
          </div>
          <div>
            <div className="text-2xl sm:text-4xl font-serif text-[#38bdf8] font-bold">0 kg</div>
            <div className="text-xs font-mono text-slate-400 mt-1 uppercase tracking-wider">Waste Left Behind</div>
          </div>
          <div>
            <div className="text-2xl sm:text-4xl font-serif text-white font-bold">12 Max</div>
            <div className="text-xs font-mono text-slate-400 mt-1 uppercase tracking-wider">Guests Per Departure</div>
          </div>
          <div>
            <div className="text-2xl sm:text-4xl font-serif text-[#f59e0b] font-bold">SAF Fuel</div>
            <div className="text-xs font-mono text-slate-400 mt-1 uppercase tracking-wider">Sustainable Aviation</div>
          </div>
        </div>
      </div>
    </section>
  );
}
