import React, { useState, useEffect } from 'react';
import { 
  Heart, Brain, Users, BookOpen, Calendar, Phone, Mail, MapPin, 
  Menu, X, Leaf, ArrowRight, ShieldAlert, CheckCircle2, Star, 
  Quote, Plus, Minus, Instagram, Youtube 
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans text-stone-800 selection:bg-emerald-200 selection:text-emerald-900 overflow-x-hidden">
      
      {/* 1. Emergency Banner */}
      <div className="bg-rose-50 border-b border-rose-100 text-rose-800 px-4 py-2.5 text-sm text-center flex items-center justify-center gap-2 font-medium z-50 relative">
        <ShieldAlert className="w-4 h-4 shrink-0" />
        <span>If you are in a crisis, call <strong>Kiran Helpline at 1800-599-0019</strong></span>
      </div>

      {/* 2. Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-stone-200' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-full">
            <div className="flex items-center h-full">
              <img 
                src="https://mannvriksh.com/wp-content/uploads/2025/06/logo_png-1.png" 
                alt="MannVriksh Logo" 
                className="h-12 sm:h-14 w-auto object-contain cursor-pointer self-center"
              />
            </div>
            
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <a href="#" className={`font-bold transition-all ${scrolled ? 'text-stone-700 hover:text-emerald-700' : 'text-white hover:text-emerald-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]'}`}>Home</a>
              <a href="#philosophy" className={`font-bold transition-all ${scrolled ? 'text-stone-700 hover:text-emerald-700' : 'text-white hover:text-emerald-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]'}`}>Philosophy</a>
              <a href="#solutions" className={`font-bold transition-all ${scrolled ? 'text-stone-700 hover:text-emerald-700' : 'text-white hover:text-emerald-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]'}`}>Solutions</a>
              <a href="#team" className={`font-bold transition-all ${scrolled ? 'text-stone-700 hover:text-emerald-700' : 'text-white hover:text-emerald-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]'}`}>Team</a>
              <a href="#contact" className={`font-bold transition-all ${scrolled ? 'text-stone-700 hover:text-emerald-700' : 'text-white hover:text-emerald-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]'}`}>Contact</a>
            </div>

            <div className="hidden md:block">
              <button onClick={() => setIsModalOpen(true)} className={`px-7 py-3 rounded-full font-bold transition-all shadow-lg ${scrolled ? 'bg-emerald-800 text-white hover:bg-emerald-900' : 'bg-white text-emerald-900 hover:bg-stone-50'}`}>
                Book Session
              </button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`p-2 rounded-full border ${scrolled ? 'bg-stone-100 text-stone-900' : 'bg-white/20 text-white'}`}>
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* 3. Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center pt-20 overflow-hidden bg-stone-900">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1600&q=75" className="w-full h-full object-cover" alt="Hero" />
          <div className="absolute inset-0 bg-stone-900/30 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-linear-to-r from-[#FDFBF7] via-[#FDFBF7]/90 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-stone-900 mb-8">
              For every mind that needs a <span className="text-emerald-800">little shade & a lot of care.</span>
            </h1>
            <button onClick={() => setIsModalOpen(true)} className="bg-emerald-800 text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-900 flex items-center gap-3">
              Start Healing Today <ArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* ... Other Sections ... */}

      {/* 9. Footer with Map & Socials */}
      <footer id="contact" className="bg-stone-950 text-stone-400 pt-24 pb-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            <div className="md:col-span-4">
              <img src="https://mannvriksh.com/wp-content/uploads/2025/06/logo_png-1.png" className="h-14 brightness-0 invert opacity-90 mb-8" alt="Logo" />
              <div className="space-y-4">
                <h4 className="text-white font-bold uppercase text-xs">Follow Us</h4>
                <div className="flex gap-4">
                  <a href="https://instagram.com/mannvriksh" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-stone-900 flex items-center justify-center hover:bg-emerald-800 transition-all border border-stone-800">
                    <Instagram className="w-5 h-5 text-stone-300" />
                  </a>
                  <a href="https://youtube.com/@mannvriksh" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-stone-900 flex items-center justify-center hover:bg-rose-800 transition-all border border-stone-800">
                    <Youtube className="w-5 h-5 text-stone-300" />
                  </a>
                </div>
              </div>
            </div>

            <div className="md:col-span-4">
              <h4 className="text-white font-bold mb-8 uppercase text-xs">Contact</h4>
              <ul className="space-y-4">
                <li className="flex gap-4"><MapPin className="text-emerald-600" /> 407, Emerald Plaza, Sector 65, Gurugram</li>
                <li className="flex gap-4"><Phone className="text-emerald-600" /> +91 9818840130</li>
                <li className="flex gap-4"><Mail className="text-emerald-600" /> hello@mannvriksh.com</li>
              </ul>
            </div>

            <div className="md:col-span-4">
              <h4 className="text-white font-bold mb-8 uppercase text-xs">Our Location</h4>
              <div className="w-full h-56 rounded-2xl overflow-hidden shadow-xl">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.324!2d77.0673!3d28.4093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d226a31000001%3A0xc34a6e54c7d6c6e6!2sEmerald%20Plaza!5e0!3m2!1sen!2sin!4v1710940000000!5m2!1sen!2sin&q=Emerald+Plaza+Sector+65+Gurugram" 
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" title="Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}