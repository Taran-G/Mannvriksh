import React, { useState } from 'react';
import { ShieldAlert } from 'lucide-react';

// 1. IMPORT DATA
import { DATA } from './data/data';

// 2. IMPORT CUSTOM HOOK
import { useScroll } from './hooks/useScroll';

// 3. IMPORT COMPONENTS
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Philosophy from './components/Philosophy';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

// Local Component for the top banner
const EmergencyBanner = ({ scrolled }) => (
<div className={`fixed top-0 left-0 right-0 bg-rose-50 border-b border-rose-100 text-rose-800 px-4 py-2.5 text-xs text-center flex items-center justify-center gap-2 font-medium z-50 transition-transform duration-300 ${scrolled ? '-translate-y-full' : 'translate-y-0'}`}><ShieldAlert className="w-4 h-4 shrink-0" />
<span>If you are in a crisis, call the <strong>Kiran Helpline at 1800-599-0019</strong>.</span>
</div>
);

export default function App() {
// --- STATE ---
const { scrolled } = useScroll(20);
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [isModalOpen, setIsModalOpen] = useState(false);
const [isSubmitted, setIsSubmitted] = useState(false);

// --- LOGIC ---
const handleBookingSubmit = () => {
  setIsSubmitted(true);
  
  setTimeout(() => {
    setIsModalOpen(false);
    setIsSubmitted(false);
  }, 3000);
};

// --- RENDER ---
return (
  <div className="min-h-screen bg-[#FDFBF7] font-sans text-stone-800 selection:bg-emerald-200 selection:text-emerald-900 overflow-x-hidden">
    <EmergencyBanner scrolled={scrolled} />
    <Navbar
      scrolled={scrolled}
      onBookClick={() => setIsModalOpen(true)}
      isMenuOpen={isMenuOpen}
      setIsMenuOpen={setIsMenuOpen}
    />

    <main
      className={`transition-all duration-300 ${scrolled ? "pt-0" : "pt-10"}`}
    >
      <Hero onBookClick={() => setIsModalOpen(true)} />
      <TrustBar />
      <Philosophy />
      <Services
        services={DATA.services}
        onBookClick={() => setIsModalOpen(true)}
      />
      <Reviews reviews={DATA.reviews} />
      <Team team={DATA.team} />
      <FAQ faqs={DATA.faqs} />
    </main>

    <Footer />

    <BookingModal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      isSubmitted={isSubmitted}
      onSubmit={handleBookingSubmit}
    />
  </div>
);
}