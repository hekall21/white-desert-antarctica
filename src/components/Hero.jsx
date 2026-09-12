import { useState } from "react";
import { Play, ArrowDown, Compass, Shield, Sparkles, Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero({ onOpenEnquiry, onOpenFilm }) {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-between pt-32 pb-12 overflow-hidden">
      {/* Background Image / Atmosphere with slow cinematic zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          src="./assets/hero-mockup.jpg"
          alt="Antarctica Luxury Expedition White Desert"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1.0 }}
          transition={{ duration: 12, ease: "easeOut" }}
          className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.08]"
        />

        {/* Cinematic Vignette & Deep Navy Gradient Wash */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-[#070b14]/40 to-[#070b14]/70 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(7,11,20,0.75)_100%)] pointer-events-none" />

        {/* Subtle Horizontal Polar Ice Mist Glow */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#070b14] to-transparent pointer-events-none" />
      </div>

      {/* Top Polar Badge */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.07] backdrop-blur-xl border border-white/15 text-[#38bdf8] text-xs tracking-[0.25em] font-['JetBrains_Mono'] mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-[#38bdf8] shadow-[0_0_12px_#38bdf8]"></span>
          <span>ESTABLISHED 2005 // CARBON NEUTRAL PIONEER</span>
        </motion.div>

        {/* Monumental Editorial Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.4 }}
          className="font-['Cinzel'] text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white max-w-6xl mx-auto leading-[1.08]"
        >
          Luxury and adventure in the most <span className="italic font-['Cormorant_Garamond'] text-[#38bdf8] font-normal">remote place</span> on Earth.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="font-['Plus_Jakarta_Sans'] text-base sm:text-lg md:text-xl text-[#cbd5e1] max-w-2xl mx-auto mt-6 font-light leading-relaxed tracking-wide"
        >
          Fly by private jet onto the blue ice runway of interior Antarctica. Experience heated luxury pods, Emperor penguin colonies, and the Geographic South Pole.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-10"
        >
          <a
            href="#expeditions"
            className="px-8 py-4 rounded-full bg-[#38bdf8] text-[#070b14] font-['Plus_Jakarta_Sans'] font-bold text-xs tracking-[0.15em] hover:bg-white hover:shadow-[0_0_35px_rgba(56,189,248,0.5)] transition-all duration-300"
          >
            EXPLORE EXPEDITIONS
          </a>

          <button
            onClick={onOpenFilm}
            className="group px-7 py-4 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-white font-['Plus_Jakarta_Sans'] text-xs tracking-[0.15em] backdrop-blur-xl border border-white/20 transition-all flex items-center gap-3 cursor-pointer"
          >
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-[#38bdf8] group-hover:text-[#070b14] transition-colors">
              <Play size={10} fill="currentColor" className="ml-0.5" />
            </div>
            <span>WATCH FILM (2:45)</span>
          </button>
        </motion.div>
      </div>

      {/* Bottom Telemetry HUD Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full mt-12">
        <div className="glass-polar rounded-2xl p-4 md:px-8 md:py-4 flex flex-wrap items-center justify-between gap-4 border border-white/10 shadow-2xl">
          <div className="flex items-center gap-8 text-[0.72rem] font-['JetBrains_Mono'] text-slate-400">
            <div>
              <span className="text-white font-bold block">71°32'47" S</span>
              <span className="text-xs text-[#38bdf8]">COORDINATES</span>
            </div>
            <div className="hidden sm:block h-6 w-px bg-white/10"></div>
            <div className="hidden sm:block">
              <span className="text-white font-bold block">8°50'11" E</span>
              <span className="text-xs text-[#38bdf8]">WOLF'S FANG BASE</span>
            </div>
            <div className="hidden md:block h-6 w-px bg-white/10"></div>
            <div className="hidden md:block">
              <span className="text-white font-bold block">-18°C // SUNNY</span>
              <span className="text-xs text-amber-400">POLAR ATMOSPHERE</span>
            </div>
            <div className="hidden lg:block h-6 w-px bg-white/10"></div>
            <div className="hidden lg:block">
              <span className="text-white font-bold block">100% CARBON NEUTRAL</span>
              <span className="text-xs text-emerald-400">CERTIFIED SINCE 2007</span>
            </div>
          </div>

          <a
            href="#expeditions"
            className="flex items-center gap-2 text-xs font-['Plus_Jakarta_Sans'] tracking-widest text-[#38bdf8] hover:text-white transition-colors"
          >
            <span>SCROLL TO DISCOVER</span>
            <ArrowDown size={14} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
