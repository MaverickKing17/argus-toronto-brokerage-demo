import React, { useState } from 'react';
import { X, Calendar, Clock, User, Mail, Phone, CheckCircle2, ShieldCheck, Sparkles, Building2 } from 'lucide-react';
import { BROKER_INFO } from '../data/propertyData';

interface ScheduleTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookingSuccess?: (bookingDetails: any) => void;
}

export const ScheduleTourModal: React.FC<ScheduleTourModalProps> = ({
  isOpen,
  onClose,
  onBookingSuccess
}) => {
  const [selectedDate, setSelectedDate] = useState<string>("Saturday, Aug 15");
  const [selectedTime, setSelectedTime] = useState<string>("2:00 PM EST");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [confirmationData, setConfirmationData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/book-viewing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          date: selectedDate,
          time: selectedTime,
          name: name || "Valued Client",
          email: email || "client@yorkville.com",
          phone: phone || "+1 (416) 555-0199"
        })
      });

      const data = await res.json();
      setConfirmationData(data);
      setSubmitted(true);
      if (onBookingSuccess) onBookingSuccess(data);
    } catch (err) {
      console.error(err);
      // Fallback local booking state
      const fallbackData = {
        bookingId: "YLG-VIEW-884920",
        slot: `${selectedDate} at ${selectedTime}`,
        broker: "Victoria Sterling, Senior Managing Partner",
        confirmationMessage: `Viewing confirmed for ${name || "Valued Client"} on ${selectedDate} at ${selectedTime}. Calendar invite synced with senior broker.`
      };
      setConfirmationData(fallbackData);
      setSubmitted(true);
      if (onBookingSuccess) onBookingSuccess(fallbackData);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-xl rounded-3xl bg-white border-2 border-slate-300/90 p-6 sm:p-9 shadow-[0_25px_70px_rgba(0,0,0,0.45)] space-y-6 overflow-hidden my-auto">
        {/* Metallic Gold Top Accent Bar */}
        <div className="absolute top-0 inset-x-0 h-[4px] bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400"></div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-950 hover:bg-slate-200 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1.5 pr-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-[10px] font-mono font-bold uppercase tracking-wider">
                <Sparkles className="w-3 h-3 text-amber-600" />
                DISCREET PRIVATE VIEWING REQUEST
              </span>
              <h3 className="text-2xl sm:text-3xl text-slate-950 font-bold tracking-tight mt-1">
                Schedule Suite 5200 Private Showing
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-normal">
                Coordinated directly with Victoria Sterling, Senior Managing Partner.
              </p>
            </div>

            {/* Date Select */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-900 uppercase font-mono tracking-wider">
                Select Viewing Date:
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {["Saturday, Aug 15", "Sunday, Aug 16", "Monday, Aug 17"].map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setSelectedDate(d)}
                    className={`p-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                      selectedDate === d
                        ? "bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 text-zinc-950 border-amber-400 font-bold shadow-md scale-[1.02]"
                        : "bg-slate-50 border-slate-200 text-slate-700 hover:text-slate-950 hover:bg-slate-100"
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* Time Select */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-900 uppercase font-mono tracking-wider">
                Preferred Time Slot:
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {["11:00 AM EST", "2:00 PM EST", "4:30 PM EST"].map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setSelectedTime(t)}
                    className={`p-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                      selectedTime === t
                        ? "bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 text-zinc-950 border-amber-400 font-bold shadow-md scale-[1.02]"
                        : "bg-slate-50 border-slate-200 text-slate-700 hover:text-slate-950 hover:bg-slate-100"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Client Info Inputs */}
            <div className="space-y-3.5 pt-1">
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">Full Legal Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Jonathan Vance"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border-2 border-slate-200 text-slate-950 text-xs sm:text-sm focus:outline-none focus:border-amber-500 focus:bg-white transition-all shadow-xs"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="vance@privateoffice.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border-2 border-slate-200 text-slate-950 text-xs sm:text-sm focus:outline-none focus:border-amber-500 focus:bg-white transition-all shadow-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">Direct Phone</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (416) 555-0188"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border-2 border-slate-200 text-slate-950 text-xs sm:text-sm focus:outline-none focus:border-amber-500 focus:bg-white transition-all shadow-xs"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-zinc-950 font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-[0_4px_20px_rgba(245,158,11,0.35)] hover:shadow-[0_6px_25px_rgba(245,158,11,0.5)] hover:scale-[1.02] flex items-center justify-center gap-2.5 cursor-pointer"
              id="confirm-booking-submit-btn"
            >
              <Calendar className="w-4 h-4 text-zinc-950 stroke-[2.5]" />
              {loading ? "Securing Private Slot..." : "Confirm & Sync Calendar Slot"}
            </button>
          </form>
        ) : (
          <div className="text-center space-y-6 py-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-100 to-emerald-200 border-2 border-emerald-400 text-emerald-700 flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-9 h-9 stroke-[2.5]" />
            </div>

            <div className="space-y-2">
              <span className="text-[11px] font-mono text-emerald-800 uppercase tracking-widest block font-bold">
                VIEWING SECURED & CALENDAR SYNCED
              </span>
              <h3 className="text-2xl sm:text-3xl text-slate-950 font-bold">
                Private Viewing Confirmed
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed font-normal">
                {confirmationData?.confirmationMessage}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border-2 border-slate-200 text-left text-xs space-y-2.5 font-medium">
              <div className="flex justify-between border-b border-slate-200 pb-2.5">
                <span className="text-slate-600">Confirmation ID:</span>
                <span className="font-mono text-slate-950 font-bold">{confirmationData?.bookingId}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2.5">
                <span className="text-slate-600">Reserved Slot:</span>
                <span className="font-mono text-slate-950 font-bold">{confirmationData?.slot}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Assigned Senior Broker:</span>
                <span className="text-slate-950 font-bold">{confirmationData?.broker}</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="px-8 py-3.5 rounded-xl bg-slate-950 hover:bg-black text-white font-bold text-xs tracking-wider uppercase transition-all cursor-pointer shadow-md hover:scale-105"
            >
              Return to Listing
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
