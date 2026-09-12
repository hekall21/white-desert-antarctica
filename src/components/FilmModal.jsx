import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Volume2, Sparkles, Compass } from "lucide-react";

export default function FilmModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-2xl transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4 }}
          className="relative w-full max-w-5xl bg-[#0b1325] border border-white/20 rounded-3xl overflow-hidden shadow-2xl z-10 text-white"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#070b14]/80">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-[#38bdf8] animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#38bdf8]">
                White Desert Cinematic Archive // 4K HDR
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Video Container */}
          <div className="relative aspect-video w-full bg-black overflow-hidden flex items-center justify-center">
            {/* Embedded Antarctica polar 4K landscape reel */}
            <iframe
              className="w-full h-full object-cover"
              src="https://www.youtube-nocookie.com/embed/HhF_Yyv9x3w?autoplay=1&mute=0&controls=1&rel=0&modestbranding=1"
              title="White Desert Antarctica Expedition Film"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Film Description Footer */}
          <div className="p-6 bg-[#070b14] border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-base font-serif text-white">White Desert: The Seventh Continent</h4>
              <p className="text-xs text-slate-400 font-light mt-0.5">
                Filmed on location at Wolf's Fang Runway, Whichaway Camp, and Geographic South Pole 90°S.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300">
                Resolution: 3840 x 2160
              </span>
              <span className="px-3 py-1 rounded-full bg-[#38bdf8]/10 border border-[#38bdf8]/30 text-[11px] font-mono text-[#38bdf8]">
                Original Master
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
