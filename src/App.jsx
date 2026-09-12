import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ExpeditionsGrid from "./components/ExpeditionsGrid";
import LuxuryCamps from "./components/LuxuryCamps";
import FlightJourney from "./components/FlightJourney";
import FounderMission from "./components/FounderMission";
import Footer from "./components/Footer";
import EnquiryModal from "./components/EnquiryModal";
import FilmModal from "./components/FilmModal";

export default function App() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [selectedExpeditionId, setSelectedExpeditionId] = useState(null);
  const [filmOpen, setFilmOpen] = useState(false);

  const handleOpenEnquiry = (expeditionId = null) => {
    setSelectedExpeditionId(expeditionId);
    setEnquiryOpen(true);
  };

  const handleSelectExpedition = (expedition) => {
    setSelectedExpeditionId(expedition?.id || null);
    setEnquiryOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#070B14] text-[#F8FAFC] relative selection:bg-[#38BDF8] selection:text-[#070B14]">
      {/* Subtle Noise Texture Overlay */}
      <div className="polar-noise-overlay" />

      {/* Navigation */}
      <Navbar onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* Main Content Sections */}
      <main>
        {/* Full-bleed Hero */}
        <Hero
          onOpenEnquiry={() => handleOpenEnquiry()}
          onOpenFilm={() => setFilmOpen(true)}
        />

        {/* Signature Expeditions Calendar */}
        <ExpeditionsGrid onSelectExpedition={handleSelectExpedition} />

        {/* Luxury Heated Domes & Pods */}
        <LuxuryCamps onOpenEnquiry={() => handleOpenEnquiry()} />

        {/* Private Aviation Flight Logistics */}
        <FlightJourney onOpenEnquiry={() => handleOpenEnquiry()} />

        {/* Founders & Zero-Trace Mission */}
        <FounderMission />
      </main>

      {/* Luxury Footer */}
      <Footer onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* Concierge Reservation Modal */}
      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        defaultExpeditionId={selectedExpeditionId}
      />

      {/* Cinematic Film Modal */}
      <FilmModal
        isOpen={filmOpen}
        onClose={() => setFilmOpen(false)}
      />
    </div>
  );
}
