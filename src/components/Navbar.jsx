import { useState, useEffect } from "react";
import { Compass, Menu, X, ArrowUpRight, ShieldCheck, Sparkles } from "lucide-react";

export default function Navbar({ onOpenEnquiry }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "EXPEDITIONS", href: "#expeditions" },
    { label: "CAMPS & PODS", href: "#camps" },
    { label: "JOURNEY", href: "#journey" },
    { label: "FOUNDER", href: "#mission" },
    { label: "SUSTAINABILITY", href: "#sustainability" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-[#070b14]/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/60"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Monogram */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-md group-hover:border-[#38bdf8] transition-colors">
            <Compass size={18} className="text-[#38bdf8] group-hover:rotate-45 transition-transform duration-500" />
          </div>
          <div className="flex flex-col">
            <span className="font-['Cinzel'] tracking-[0.25em] text-sm md:text-base font-bold text-white group-hover:text-[#38bdf8] transition-colors">
              WHITE DESERT
            </span>
            <span className="font-['JetBrains_Mono'] text-[0.6rem] tracking-[0.3em] text-[#94a3b8] -mt-0.5">
              ANTARCTICA // 71°S
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 bg-white/[0.04] backdrop-blur-md px-6 py-2 rounded-full border border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-['Plus_Jakarta_Sans'] text-xs tracking-[0.18em] text-[#e2e8f0] hover:text-[#38bdf8] transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTAs */}
        <div className="hidden sm:flex items-center gap-4">
          <div className="hidden xl:flex items-center gap-2 font-['JetBrains_Mono'] text-[0.65rem] text-[#94a3b8] bg-white/[0.03] px-3 py-1.5 rounded-md border border-white/5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse"></span>
            <span>POLAR SEASON OPEN</span>
          </div>

          <button
            onClick={onOpenEnquiry}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider font-['Plus_Jakarta_Sans'] bg-white text-[#070b14] hover:bg-[#38bdf8] hover:text-[#070b14] transition-all duration-300 shadow-lg shadow-white/10 hover:shadow-[#38bdf8]/30 cursor-pointer"
          >
            <span>ENQUIRE VIP</span>
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-white"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#070b14]/95 backdrop-blur-2xl border-b border-white/10 p-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-['Plus_Jakarta_Sans'] tracking-widest text-slate-200 hover:text-[#38bdf8] py-2 border-b border-white/5"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenEnquiry();
            }}
            className="w-full mt-2 py-3 rounded-xl bg-[#38bdf8] text-[#070b14] font-bold text-xs tracking-wider"
          >
            START BESPOKE INQUIRY
          </button>
        </div>
      )}
    </header>
  );
}
