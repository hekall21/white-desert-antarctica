import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ExpeditionsGrid from "./components/ExpeditionsGrid";
import LuxuryCamps from "./components/LuxuryCamps";
import FlightJourney from "./components/FlightJourney";
import FounderMission from "./components/FounderMission";
import PolarDossiers from "./components/PolarDossiers";
import Footer from "./components/Footer";
import { CinematicFooter } from "./components/ui/motion-footer";
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

        {/* 3D Frosted Glass Polar Dossiers */}
        <PolarDossiers onOpenEnquiry={() => handleOpenEnquiry()} />
      </main>

      {/* Cinematic Curtain-Reveal Footer with GSAP ScrollTrigger & Magnetic Buttons */}
      <CinematicFooter
        brandTitle="WHITE DESERT"
        giantText="ANTARCTICA"
        tagline="Ready for the great white continent?"
        onOpenEnquiry={() => handleOpenEnquiry()}
      />

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
