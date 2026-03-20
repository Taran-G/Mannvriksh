import React from "react";
import { X, CheckCircle2, ShieldAlert } from "lucide-react";
import useSendEmail from "../hooks/useSendEmail";

const BookingModal = ({ isOpen, onClose, isSubmitted, onSubmit }) => {
  if (!isOpen) return null;

  const { formRef, sendEmail } = useSendEmail();

  const handleSubmit = (e) => {
    sendEmail(e);
    onSubmit();
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6">
      <div
        className="absolute inset-0 bg-stone-950/70 backdrop-blur-md"
        onClick={onClose}
      ></div>
      <div className="bg-white rounded-[2.5rem] p-3 max-w-lg w-full shadow-2xl relative animate-in fade-in zoom-in duration-300 max-h-[92vh] flex flex-col border border-white/20">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 sm:top-8 sm:right-8 w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center text-stone-500 hover:bg-stone-200 hover:text-stone-900 transition-all z-20 shadow-sm"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="overflow-y-auto px-6 sm:px-10 py-8 sm:py-12 flex-1">
          {isSubmitted ? (
            <div className="text-center py-10">
              <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-emerald-600" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-stone-900 mb-4">
                Request Received
              </h3>
              <p className="text-stone-600 text-base sm:text-lg">
                Our team will contact you shortly to confirm your session.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-10 text-center">
                <div className="flex justify-center items-center mb-6">
                  <img
                    src="https://mannvriksh.com/wp-content/uploads/2025/06/logo_png-1.png"
                    alt="Logo"
                    className="h-12 sm:h-14 w-auto object-contain"
                  />
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mb-2">
                  Begin Your Journey
                </h3>
                <p className="text-stone-500 text-sm">
                  Leave your details and we'll reach out to schedule your time.
                </p>
              </div>
              <form className="space-y-5" onSubmit={handleSubmit} ref={formRef}
              >
                <div>
                  <label className="block text-[10px] font-bold tracking-[0.15em] text-stone-400 mb-2 uppercase">
                    Full Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Jane Doe"
                    className="w-full px-5 py-4 bg-stone-50 border border-stone-200 rounded-2xl outline-none transition-all text-base focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold tracking-[0.15em] text-stone-400 mb-2 uppercase">
                    Contact Number
                  </label>
                  <input
                    name="contact"
                    type="tel"
                    required
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-5 py-4 bg-stone-50 border border-stone-200 rounded-2xl outline-none transition-all text-base focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold tracking-[0.15em] text-stone-400 mb-2 uppercase">
                    How can we support you?
                  </label>
                  <textarea
                    name="message"
                    required
                    placeholder="Describe your needs..."
                    className="w-full px-5 py-4 bg-stone-50 border border-stone-200 rounded-2xl outline-none transition-all resize-none text-base focus:ring-2 focus:ring-emerald-600 focus:bg-white"
                    rows="3"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-emerald-800 text-white py-5 rounded-2xl font-bold text-lg hover:bg-emerald-900 transition-all shadow-lg active:scale-95"
                >
                  Request Appointment
                </button>
                <p className="text-[11px] text-center text-stone-400 mt-6 flex items-center justify-center gap-2">
                  <ShieldAlert className="w-3.5 h-3.5" /> Your data is strictly
                  protected and confidential.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
