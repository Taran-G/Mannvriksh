import React from 'react';
import { MapPin, Phone, Mail, Instagram, Youtube, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-stone-950 text-stone-400 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-8">
              <img 
                src="https://mannvriksh.com/wp-content/uploads/2025/06/logo_png-1.png" 
                alt="MannVriksh Logo" 
                className="h-14 brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
            <p className="max-w-md leading-relaxed mb-8 text-lg">
              A movement toward mindful, meaningful living. We provide professional counselling, coaching, and corporate training to help you heal and grow.
            </p>
            
            <div className="space-y-4">
              <h4 className="text-white font-bold tracking-widest uppercase text-xs">Follow Us</h4>
              <div className="flex gap-4">
                <a href="https://instagram.com/mannvriksh" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-stone-900 flex items-center justify-center hover:bg-emerald-800 transition-all border border-stone-800 shadow-lg group">
                  <Instagram className="w-5 h-5 group-hover:text-white" />
                </a>
                <a href="https://www.youtube.com/@choiceisours_" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-stone-900 flex items-center justify-center hover:bg-rose-800 transition-all border border-stone-800 shadow-lg group">
                  <Youtube className="w-5 h-5 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="text-white font-bold mb-8 uppercase text-xs tracking-widest">Explore</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Home</a></li>
              <li><a href="#philosophy" className="hover:text-emerald-400 transition-colors">Philosophy</a></li>
              <li><a href="#solutions" className="hover:text-emerald-400 transition-colors">Solutions</a></li>
              <li><a href="#reviews" className="hover:text-emerald-400 transition-colors">Testimonials</a></li>
              <li><a href="#faq" className="hover:text-emerald-400 transition-colors">Support</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-white font-bold mb-8 uppercase text-xs tracking-widest">Get in Touch</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-emerald-600 shrink-0 mt-1" />
                <span className="text-stone-300">407, Emerald Plaza,<br/>Sector 65, Gurugram,<br/>Haryana 122018</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-emerald-600 shrink-0" />
                <span className="text-stone-300">+91 9818840130</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-emerald-600 shrink-0" />
                <span className="text-stone-300 underline underline-offset-4 decoration-stone-800">hello@mannvriksh.com</span>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
          <h4 className="text-white font-bold mb-8 tracking-widest uppercase text-xs">Find Our Clinic</h4>
          <div className="w-full h-56 rounded-2xl overflow-hidden border border-stone-800 shadow-xl relative bg-stone-900">
            <iframe src="https://maps.google.com/maps?q=Emerald+Plaza,+Sector+65,+Gurugram&t=&z=15&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
          </div>
          </div>
        </div>

        




        
        <div className="border-t border-stone-900 pt-8 flex flex-col md:flex-row justify-between items-center text-stone-600 text-sm font-medium">
          <p>&copy; {new Date().getFullYear()} MannVriksh Wellness. Dedicated to healing.</p>
          <div className="mt-4 md:mt-0 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-800 animate-pulse"></span>
            Follow us for daily wellness tips
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;