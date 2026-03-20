import React from 'react';
import { Calendar, Menu, X } from 'lucide-react';

const Navbar = ({ scrolled, onBookClick, isMenuOpen, setIsMenuOpen }) => {
  const navItems = ['Home', 'Philosophy', 'Solutions', 'Reviews', 'Team', 'Contact'];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-stone-200' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center h-full">
            <img 
              src="https://mannvriksh.com/wp-content/uploads/2025/06/logo_png-1.png" 
              alt="MannVriksh Logo" 
              className="h-10 sm:h-12 w-auto object-contain cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <a 
                key={item} 
                href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
                className={`font-bold tracking-wide transition-all ${scrolled ? 'text-stone-700 hover:text-emerald-700' : 'text-white hover:text-emerald-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]'}`}
              >
                {item}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <button 
              onClick={onBookClick}
              className={`px-7 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2 ${scrolled ? 'bg-emerald-800 text-white hover:bg-emerald-900' : 'bg-white text-emerald-900 hover:bg-stone-50'}`}
            >
              <Calendar className="w-4 h-4" />
              Book Session
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`p-2 rounded-full transition-colors border ${scrolled ? 'bg-stone-100 text-stone-900 border-stone-200' : 'bg-white/20 text-white border-white/30 backdrop-blur-md'}`}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-stone-100 px-4 py-6 space-y-3 shadow-2xl animate-in slide-in-from-top duration-300">
          {navItems.map((item) => (
            <a key={item} href={item === 'Home' ? '#' : `#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-lg font-medium text-stone-800 hover:bg-stone-50 rounded-xl">
              {item}
            </a>
          ))}
          <button 
            onClick={() => { setIsMenuOpen(false); onBookClick(); }}
            className="w-full mt-6 bg-emerald-800 text-white px-6 py-4 rounded-xl font-medium flex justify-center items-center gap-2 shadow-lg"
          >
            <Calendar className="w-5 h-5" />
            Book a Session
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;