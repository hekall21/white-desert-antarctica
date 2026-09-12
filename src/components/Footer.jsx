import React from "react";
import { ArrowUp, Mail, Phone, MapPin, ShieldCheck, Sparkles } from "lucide-react";

export default function Footer({ onOpenEnquiry }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#05080e] text-white border-t border-white/10 pt-20 pb-12 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[#38bdf8]/40 to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#38bdf8]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#38bdf8] to-blue-600 flex items-center justify-center text-[#070b14] font-serif font-black text-base shadow-[0_0_15px_rgba(56,189,248,0.4)]">
                W
              </div>
              <div>
                <span className="font-serif tracking-[0.25em] text-lg font-bold block text-white">
                  WHITE DESERT
                </span>
                <span className="text-[9px] font-mono tracking-[0.3em] text-[#38bdf8] block uppercase">
                  Antarctica // Est. 2005
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-sm font-light leading-relaxed">
              The world's only luxury expedition operator providing private jet access directly into the Antarctic interior. Certified 100% Carbon Neutral and founding stewards of zero-trace polar exploration.
            </p>

            <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-white">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                IAATO Full Member
              </span>
              <span>•</span>
              <span className="text-[#38bdf8]">Climate Neutral</span>
            </div>
          </div>

          {/* Expedition Routes */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-300">
              Expedition Portfolios
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400 font-light">
              <li>
                <a href="#expeditions" className="hover:text-[#38bdf8] transition-colors">
                  Emperor Penguins Colony (8 Days)
                </a>
              </li>
              <li>
                <a href="#expeditions" className="hover:text-[#38bdf8] transition-colors">
                  The South Pole & Emperors (7 Days)
                </a>
              </li>
              <li>
                <a href="#expeditions" className="hover:text-[#38bdf8] transition-colors">
                  Glacier Ice Tunnels & Blue River (6 Days)
                </a>
              </li>
              <li>
                <a href="#expeditions" className="hover:text-[#38bdf8] transition-colors">
                  Greatest Day: 24h Antarctica
                </a>
              </li>
              <li>
                <button onClick={onOpenEnquiry} className="text-[#38bdf8] hover:underline cursor-pointer text-left">
                  Private Jet Camp Buyout →
                </button>
              </li>
            </ul>
          </div>

          {/* Global Operations Offices */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-300">
              Private Offices
            </h4>
            <div className="space-y-4 text-xs text-slate-400 leading-relaxed font-mono">
              <div>
                <div className="text-white font-semibold">LONDON HEADQUARTERS</div>
                <div>St. James's, SW1A 1ES</div>
                <div className="text-slate-500">+44 (0)20 7408 0900</div>
              </div>
              <div>
                <div className="text-white font-semibold">CAPE TOWN BASE</div>
                <div>V&A Waterfront, 8001</div>
                <div className="text-slate-500">+27 (0)21 001 0284</div>
              </div>
            </div>
          </div>

          {/* Manifest Inquiries */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-300">
              Flight Manifest Alerts
            </h4>
            <p className="text-xs text-slate-400 font-light">
              Receive confidential alerts when private jet charter seats open for the 2026/2027 season.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); onOpenEnquiry(); }} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="vip@privateoffice.com"
                  className="w-full px-3 py-2.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#38bdf8]"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-lg bg-[#38bdf8] text-[#070b14] font-semibold text-xs hover:bg-white transition-colors cursor-pointer shrink-0"
                >
                  Join
                </button>
              </div>
              <span className="text-[10px] text-slate-500 block font-mono">
                Encrypted & VIP Confidential
              </span>
            </form>
          </div>
        </div>

        {/* Bottom credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} White Desert Ltd. All rights reserved. Designed for Ultra-Luxury Polar Expeditions.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-slate-400">Wolf's Fang Runway: 71°31'S, 8°48'E</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Summit</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
