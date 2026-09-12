import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plane, Compass, Clock, MapPin, ArrowRight, ShieldCheck, Wind, Gauge, Sparkles } from "lucide-react";
import { flightJourneySteps } from "../data/expeditions";

export default function FlightJourney({ onOpenEnquiry }) {
  const [activeStepIndex, setActiveStepIndex] = useState(2); // default to blue ice runway
  const currentStep = flightJourneySteps[activeStepIndex];

  return (
    <section id="journey" className="relative py-32 bg-[#070b14] overflow-hidden border-t border-white/5">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-[#38bdf8]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 right-10 w-[400px] h-[400px] bg-[#f59e0b]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#38bdf8] text-xs font-mono tracking-widest uppercase mb-4 backdrop-blur-md">
            <Plane className="w-3.5 h-3.5" />
            <span>Private Aviation Logistics</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif tracking-tight text-white mb-6">
            The Journey to <span className="italic font-light text-[#38bdf8]">Wolf’s Fang</span>
          </h2>
          <p className="text-slate-400 font-light text-base sm:text-lg leading-relaxed">
            From the sunny shores of Cape Town to landing on a natural blue ice runway at 71° South. Fly aboard private Gulfstream jets and Basler ski-planes engineered for polar extremes.
          </p>
        </div>

        {/* Telemetry HUD Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-[#0b1325]/80 border border-white/10 backdrop-blur-xl mb-14"
        >
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02]">
            <Gauge className="w-5 h-5 text-[#38bdf8]" />
            <div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Cruising Speed</div>
              <div className="text-sm sm:text-base font-mono font-medium text-white">Mach 0.82 / 870 km/h</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02]">
            <Wind className="w-5 h-5 text-[#38bdf8]" />
            <div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Cruising Altitude</div>
              <div className="text-sm sm:text-base font-mono font-medium text-white">41,000 FT (FL410)</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02]">
            <Compass className="w-5 h-5 text-[#f59e0b]" />
            <div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Runway Specs</div>
              <div className="text-sm sm:text-base font-mono font-medium text-white">3,000m Glacial Blue Ice</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02]">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">IAATO Safety</div>
              <div className="text-sm sm:text-base font-mono font-medium text-white">100% Certified / Zero Trace</div>
            </div>
          </div>
        </motion.div>

        {/* Step Navigation Timeline */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-10">
          {flightJourneySteps.map((step, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`relative p-4 rounded-xl text-left transition-all duration-300 border cursor-pointer ${
                  isActive
                    ? "bg-white/10 border-[#38bdf8]/50 shadow-[0_0_25px_rgba(56,189,248,0.15)]"
                    : "bg-white/[0.03] border-white/5 hover:border-white/20 hover:bg-white/[0.06]"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeStepGlow"
                    className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#38bdf8]/10 via-transparent to-[#f59e0b]/10 pointer-events-none"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-mono text-xs font-bold ${isActive ? "text-[#38bdf8]" : "text-slate-400"}`}>
                    STAGE {step.step}
                  </span>
                  <div className={`w-2 h-2 rounded-full ${isActive ? "bg-[#38bdf8] shadow-[0_0_8px_#38bdf8]" : "bg-white/20"}`} />
                </div>
                <div className="text-sm font-medium text-white line-clamp-1">{step.title}</div>
                <div className="text-xs text-slate-400 font-mono mt-1">{step.duration}</div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStepIndex}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="rounded-3xl bg-gradient-to-b from-[#0b1325] to-[#070b14] border border-white/10 p-8 sm:p-12 relative overflow-hidden backdrop-blur-xl shadow-2xl"
          >
            {/* Background watermarked stage number */}
            <span className="absolute -right-6 -bottom-10 text-[180px] font-mono font-black text-white/[0.02] select-none pointer-events-none">
              {currentStep.step}
            </span>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#38bdf8]/10 border border-[#38bdf8]/30 text-[#38bdf8] text-xs font-mono">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{currentStep.location}</span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-serif text-white leading-tight">
                  {currentStep.title}
                </h3>

                <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
                  {currentStep.description}
                </p>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button
                    onClick={onOpenEnquiry}
                    className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-[#38bdf8] to-cyan-400 text-[#070b14] font-semibold text-sm hover:shadow-[0_0_25px_rgba(56,189,248,0.4)] transition-all cursor-pointer"
                  >
                    <span>Request Flight Manifest</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 px-4 py-3 rounded-full bg-white/5 border border-white/10">
                    <Clock className="w-3.5 h-3.5 text-[#38bdf8]" />
                    <span>Duration: {currentStep.duration}</span>
                  </div>
                </div>
              </div>

              {/* Graphic Runway / Aircraft Radar Card */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-black/40 p-6 shadow-inner">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                    <span className="text-xs font-mono text-[#38bdf8] uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      Flight Radar Profile
                    </span>
                    <span className="text-xs font-mono text-emerald-400">SYS: ONLINE</span>
                  </div>

                  <div className="space-y-4 font-mono text-xs text-slate-300">
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400">Departure Airport</span>
                      <span className="text-white font-medium">Cape Town FBO (CPT / FACT)</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400">Arrival Destination</span>
                      <span className="text-white font-medium">Wolf's Fang Blue Ice (WFR)</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400">Aircraft Type</span>
                      <span className="text-white font-medium">Gulfstream G550 / Basler BT-67</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400">Runway Surface</span>
                      <span className="text-white font-medium">Blue Glacial Ice (3,000m x 60m)</span>
                    </div>
                    <div className="flex justify-between py-1.5">
                      <span className="text-slate-400">Emissions Offset</span>
                      <span className="text-[#38bdf8] font-bold">100% Certified Carbon Neutral</span>
                    </div>
                  </div>

                  <div className="mt-5 p-3 rounded-lg bg-[#38bdf8]/5 border border-[#38bdf8]/20 text-[11px] text-[#38bdf8] font-mono leading-relaxed">
                    * White Desert operates the world's only private blue ice runway certified for intercontinental jet charter in Antarctica.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
