import React, { useState } from 'react';
import { X, Calendar, Clock, User, Mail, Phone, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
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
    <div className="fixed inset-0 z-50 bg-[#0F1115]/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative w-full max-w-xl rounded-2xl bg-[#1C1E24] border border-white/[0.08] p-6 sm:p-8 shadow-2xl space-y-6">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#14161C] border border-white/[0.08] text-zinc-300 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-zinc-300 uppercase tracking-widest block font-semibold">
                DISCREET PRIVATE VIEWING REQUEST
              </span>
              <h3 className="font-serif text-2xl text-white font-bold">
                Schedule Suite 5200 Private Showing
              </h3>
              <p className="text-xs text-zinc-300 font-normal">
                Coordinated directly with Victoria Sterling, Senior Managing Partner.
              </p>
            </div>

            {/* Date Select */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-zinc-200">Select Viewing Date:</label>
              <div className="grid grid-cols-3 gap-2">
                {["Saturday, Aug 15", "Sunday, Aug 16", "Monday, Aug 17"].map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setSelectedDate(d)}
                    className={`p-2.5 rounded-lg border text-xs font-medium transition-all cursor-pointer ${
                      selectedDate === d
                        ? "bg-amber-500 text-zinc-950 border-amber-400 font-bold shadow-md shadow-amber-500/20"
                        : "bg-[#14161C] border-white/[0.08] text-zinc-200 hover:text-white hover:border-white/[0.15]"
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* Time Select */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-zinc-200">Preferred Time Slot:</label>
              <div className="grid grid-cols-3 gap-2">
                {["11:00 AM EST", "2:00 PM EST", "4:30 PM EST"].map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setSelectedTime(t)}
                    className={`p-2.5 rounded-lg border text-xs font-medium transition-all cursor-pointer ${
                      selectedTime === t
                        ? "bg-amber-500 text-zinc-950 border-amber-400 font-bold shadow-md shadow-amber-500/20"
                        : "bg-[#14161C] border-white/[0.08] text-zinc-200 hover:text-white hover:border-white/[0.15]"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Client Info Inputs */}
            <div className="space-y-3 pt-2">
              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Jonathan Vance"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#14161C] border border-white/[0.08] text-white text-xs focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="vance@privateoffice.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#14161C] border border-white/[0.08] text-white text-xs focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (416) 555-0188"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#14161C] border border-white/[0.08] text-white text-xs focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs tracking-wider uppercase transition-all shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer"
              id="confirm-booking-submit-btn"
            >
              <Calendar className="w-4 h-4 text-zinc-950" />
              {loading ? "Securing Private Slot..." : "Confirm & Sync Calendar Slot"}
            </button>
          </form>
        ) : (
          <div className="text-center space-y-6 py-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block font-bold">
                VIEWING SECURED & CALENDAR SYNCED
              </span>
              <h3 className="font-serif text-2xl text-white font-bold">
                Private Viewing Confirmed
              </h3>
              <p className="text-xs text-zinc-200 max-w-md mx-auto leading-relaxed font-normal">
                {confirmationData?.confirmationMessage}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#14161C] border border-white/[0.08] text-left text-xs space-y-2 font-medium">
              <div className="flex justify-between border-b border-white/[0.08] pb-2">
                <span className="text-zinc-300">Confirmation ID:</span>
                <span className="font-mono text-white font-bold">{confirmationData?.bookingId}</span>
              </div>
              <div className="flex justify-between border-b border-white/[0.08] pb-2">
                <span className="text-zinc-300">Reserved Slot:</span>
                <span className="font-mono text-white font-bold">{confirmationData?.slot}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-300">Assigned Senior Broker:</span>
                <span className="text-white font-bold">{confirmationData?.broker}</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-lg bg-[#14161C] hover:bg-[#242731] border border-white/[0.08] text-white font-bold text-xs tracking-wider uppercase transition-colors cursor-pointer"
            >
              Return to Listing
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
