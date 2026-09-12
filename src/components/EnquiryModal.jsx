import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ShieldCheck, Calendar, Users, Plane, Send, Sparkles, Phone, Mail } from "lucide-react";
import { expeditionsData } from "../data/expeditions";

export default function EnquiryModal({ isOpen, onClose, defaultExpeditionId }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    expeditionId: defaultExpeditionId || expeditionsData[0].id,
    campPreference: "echo",
    guests: "2",
    season: "Dec 2026",
    notes: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#070b14]/85 backdrop-blur-xl transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
          className="relative w-full max-w-2xl bg-[#0b1325] border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl z-10 my-8 overflow-hidden text-white"
        >
          {/* Subtle polar ambient highlight */}
          <div className="absolute -top-24 -right-24 w-60 h-60 bg-[#38bdf8]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-[#f59e0b]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#38bdf8]/10 border border-[#38bdf8]/30 text-[#38bdf8] text-xs font-mono uppercase tracking-wider mb-2">
                  <Sparkles className="w-3 h-3" />
                  <span>Private Expedition Concierge</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif tracking-tight text-white">
                  Request Bespoke Itinerary
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1 font-light">
                  Our polar mission planners in London & Cape Town will respond within 12 hours with a bespoke dossier and aircraft availability.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Expedition Select */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                    Select Expedition Program
                  </label>
                  <select
                    value={formData.expeditionId}
                    onChange={(e) => setFormData({ ...formData, expeditionId: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/15 text-white text-sm focus:outline-none focus:border-[#38bdf8] transition-all cursor-pointer"
                  >
                    {expeditionsData.map((exp) => (
                      <option key={exp.id} value={exp.id} className="bg-[#0b1325] text-white">
                        {exp.title} — {exp.rates}
                      </option>
                    ))}
                    <option value="private-buyout" className="bg-[#0b1325] text-white">
                      Full Camp Private Buyout (Up to 12 Guests)
                    </option>
                  </select>
                </div>

                {/* Season and Guests row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#38bdf8]" />
                      Preferred Season Window
                    </label>
                    <select
                      value={formData.season}
                      onChange={(e) => setFormData({ ...formData, season: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/15 text-white text-sm focus:outline-none focus:border-[#38bdf8] transition-all cursor-pointer"
                    >
                      <option value="Nov 2026" className="bg-[#0b1325]">November 2026 (Emperor Chicks Hatch)</option>
                      <option value="Dec 2026" className="bg-[#0b1325]">December 2026 (24h Midnight Sun)</option>
                      <option value="Jan 2027" className="bg-[#0b1325]">January 2027 (Peak Summer Season)</option>
                      <option value="2027/28 Season" className="bg-[#0b1325]">2027 / 2028 Advance Charter</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#38bdf8]" />
                      Party Size
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/15 text-white text-sm focus:outline-none focus:border-[#38bdf8] transition-all cursor-pointer"
                    >
                      <option value="1" className="bg-[#0b1325]">1 Solo Explorer</option>
                      <option value="2" className="bg-[#0b1325]">2 Guests (1 Heated Dome)</option>
                      <option value="4" className="bg-[#0b1325]">4 Guests (2 Pods)</option>
                      <option value="6+" className="bg-[#0b1325]">6 - 12 Guests (Private Wing / Camp)</option>
                    </select>
                  </div>
                </div>

                {/* Contact Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Lord / Lady / Dr. / Mr. / Ms."
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#38bdf8] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="client@privateoffice.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#38bdf8] transition-all"
                    />
                  </div>
                </div>

                {/* Phone & Country */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                      Phone / WhatsApp (with country code) *
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#38bdf8] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                      Country of Residence
                    </label>
                    <input
                      type="text"
                      placeholder="United Kingdom, Switzerland, USA, Indonesia..."
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#38bdf8] transition-all"
                    />
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                    Bespoke Requirements / Private Jet Connecting Logistics
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Tell us about your travel dates, private aviation transfers, dietary preferences, or custom activities..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#38bdf8] transition-all resize-none"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#38bdf8] via-cyan-400 to-[#38bdf8] text-[#070b14] font-semibold text-sm tracking-wide uppercase hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-[#070b14] border-t-transparent rounded-full animate-spin" />
                        Transmitting to Cape Town Operations...
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Private Itinerary Request</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-center gap-6 pt-2 text-[11px] text-slate-400 font-mono">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    Strict Confidentiality
                  </span>
                  <span>•</span>
                  <span>Direct FBO Logistics</span>
                  <span>•</span>
                  <span>100% Climate Neutral</span>
                </div>
              </form>
            </div>
          ) : (
            <div className="text-center py-8 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-serif text-white mb-2">
                  Expedition Dossier Reserved
                </h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-[#38bdf8] font-medium">{formData.name || "Explorer"}</span>. Our White Desert polar specialist has received your request and is preparing your tailored flight manifest.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 max-w-md mx-auto text-left font-mono text-xs space-y-2 text-slate-300">
                <div className="text-slate-400">MANIFEST REF: <span className="text-white font-bold">WD-{Math.floor(100000 + Math.random() * 900000)}</span></div>
                <div className="text-slate-400">TARGET SEASON: <span className="text-white">{formData.season}</span></div>
                <div className="text-slate-400">DESTINATION: <span className="text-white">Wolf's Fang Blue Ice / South Pole</span></div>
              </div>

              <button
                onClick={handleReset}
                className="px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-medium transition-all cursor-pointer"
              >
                Close Window
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
