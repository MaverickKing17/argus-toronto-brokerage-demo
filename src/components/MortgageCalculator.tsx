import React, { useState } from 'react';
import { Calculator, DollarSign, Percent, Calendar, FileCheck, ArrowRight } from 'lucide-react';

export const MortgageCalculator: React.FC = () => {
  const listingPrice = 4500000;
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(25);
  const [interestRate, setInterestRate] = useState<number>(5.2);
  const [amortizationYears, setAmortizationYears] = useState<number>(25);

  const downPaymentAmount = (listingPrice * downPaymentPercent) / 100;
  const loanAmount = listingPrice - downPaymentAmount;

  // Monthly interest rate calculation
  const monthlyRate = interestRate / 100 / 12;
  const totalPayments = amortizationYears * 12;
  
  const monthlyMortgage = loanAmount > 0 
    ? (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) / (Math.pow(1 + monthlyRate, totalPayments) - 1)
    : 0;

  const monthlyMaintenance = 2850;
  const monthlyPropertyTax = 34200 / 12; // 2,850/mo
  const totalMonthlyCarry = monthlyMortgage + monthlyMaintenance + monthlyPropertyTax;

  // Toronto Land Transfer Tax calculation (Provincial + Municipal)
  const estimatedLTT = 210000; // Approx LTT for $4.5M in Toronto

  return (
    <section id="calculator" className="relative py-24 bg-[#ECEEF2] text-slate-900 border-b border-slate-300/80 overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-amber-500/8 blur-[140px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-amber-300/80 text-amber-900 text-[11px] font-mono font-bold uppercase tracking-widest mb-3 shadow-sm">
            <Calculator className="w-3.5 h-3.5 text-amber-600" />
            FINANCIAL MODELING & CARRY ANALYSIS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-slate-950 font-bold mt-1 tracking-tight">
            $4.5M Investment & Capital Breakdown
          </h2>
          <p className="text-slate-700 text-sm sm:text-base mt-2 font-normal max-w-2xl leading-relaxed">
            Simulate custom acquisition structures, down payment allocations, and estimated monthly carries for Suite 5200.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 p-7 sm:p-9 rounded-2xl bg-white border-2 border-slate-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.12)] transition-all duration-300 space-y-6 relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400"></div>
            
            {/* Purchase Price Display */}
            <div className="flex items-center justify-between pb-5 border-b border-slate-200">
              <span className="text-xs font-bold font-mono text-slate-600 uppercase tracking-wider">Purchase Price (CAD):</span>
              <span className="font-serif text-3xl text-slate-950 font-bold">$4,500,000</span>
            </div>

            {/* Down Payment Slider */}
            <div className="space-y-2.5">
              <div className="flex justify-between text-xs sm:text-sm">
                <span className="text-slate-950 font-bold">Down Payment ({downPaymentPercent}%):</span>
                <span className="font-mono text-amber-700 font-bold text-sm sm:text-base">${downPaymentAmount.toLocaleString()} CAD</span>
              </div>
              <input
                type="range"
                min={20}
                max={50}
                step={5}
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                className="w-full accent-amber-500 bg-slate-200 h-2.5 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] sm:text-[11px] text-slate-500 font-mono font-semibold">
                <span>20% ($900k)</span>
                <span>35% ($1.575M)</span>
                <span>50% ($2.25M)</span>
              </div>
            </div>

            {/* Interest Rate Slider */}
            <div className="space-y-2.5">
              <div className="flex justify-between text-xs sm:text-sm">
                <span className="text-slate-950 font-bold">Interest Rate:</span>
                <span className="font-mono text-amber-700 font-bold text-sm sm:text-base">{interestRate.toFixed(1)}%</span>
              </div>
              <input
                type="range"
                min={4.0}
                max={7.5}
                step={0.1}
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full accent-amber-500 bg-slate-200 h-2.5 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] sm:text-[11px] text-slate-500 font-mono font-semibold">
                <span>4.0% Prime</span>
                <span>5.5% Benchmark</span>
                <span>7.5%</span>
              </div>
            </div>

            {/* Amortization Term */}
            <div className="space-y-2.5">
              <label className="block text-xs font-bold text-slate-950 uppercase tracking-wider font-mono">Amortization Period:</label>
              <div className="grid grid-cols-2 gap-3.5">
                <button
                  onClick={() => setAmortizationYears(25)}
                  className={`py-3.5 rounded-xl border-2 text-xs font-bold font-mono transition-all shadow-xs cursor-pointer ${
                    amortizationYears === 25 
                      ? 'bg-amber-500 text-zinc-950 border-amber-500 shadow-md font-bold' 
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:text-slate-950 hover:bg-slate-100 hover:border-slate-300'
                  }`}
                >
                  25 Years (Standard)
                </button>
                <button
                  onClick={() => setAmortizationYears(30)}
                  className={`py-3.5 rounded-xl border-2 text-xs font-bold font-mono transition-all shadow-xs cursor-pointer ${
                    amortizationYears === 30 
                      ? 'bg-amber-500 text-zinc-950 border-amber-500 shadow-md font-bold' 
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:text-slate-950 hover:bg-slate-100 hover:border-slate-300'
                  }`}
                >
                  30 Years (Extended)
                </button>
              </div>
            </div>

            {/* Closing Costs Callout */}
            <div className="p-4.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1.5 shadow-inner">
              <span className="font-mono text-amber-800 text-[10px] uppercase block font-bold">
                TORONTO CLOSING CAPITAL ESTIMATE
              </span>
              <div className="flex justify-between text-slate-700 font-semibold">
                <span>Combined ON/Toronto Land Transfer Tax:</span>
                <span className="font-mono text-slate-950 font-bold">~${estimatedLTT.toLocaleString()} CAD</span>
              </div>
              <p className="text-[10px] text-slate-500 font-normal">
                *Subject to lawyer verification. Our private wealth division assists with structure optimization.
              </p>
            </div>

          </div>

          {/* Monthly Output Summary Card (Luxury Obsidian Card) */}
          <div className="lg:col-span-5 p-7 sm:p-9 rounded-2xl bg-gradient-to-b from-slate-950 via-[#111319] to-black border-2 border-amber-500/40 text-white space-y-6 shadow-[0_12px_40px_rgba(0,0,0,0.4)] hover:shadow-[0_16px_45px_rgba(245,158,11,0.2)] hover:border-amber-400 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400"></div>
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-amber-500/10 blur-[60px] pointer-events-none rounded-full"></div>

            <div>
              <span className="text-[10px] font-mono text-amber-300 uppercase tracking-widest block font-bold mb-1.5">
                ESTIMATED MONTHLY CARRY
              </span>
              <h3 className="font-serif text-3xl sm:text-5xl text-white font-bold tracking-tight">
                ${Math.round(totalMonthlyCarry).toLocaleString()} <span className="text-xs sm:text-sm font-sans text-slate-400 font-normal">/ mo</span>
              </h3>
              <span className="text-xs text-slate-300 font-medium block mt-2 leading-relaxed">
                Total combined principal, interest, taxes, and building maintenance.
              </span>
            </div>

            <div className="space-y-3.5 pt-5 border-t border-white/15">
              <div className="flex items-center justify-between text-xs sm:text-sm py-2 border-b border-white/10">
                <span className="text-slate-300 font-medium">Mortgage Principal & Interest:</span>
                <span className="font-mono text-white font-bold">${Math.round(monthlyMortgage).toLocaleString()}/mo</span>
              </div>

              <div className="flex items-center justify-between text-xs sm:text-sm py-2 border-b border-white/10">
                <span className="text-slate-300 font-medium">Building Maintenance Fee:</span>
                <span className="font-mono text-white font-bold">${monthlyMaintenance.toLocaleString()}/mo</span>
              </div>

              <div className="flex items-center justify-between text-xs sm:text-sm py-2 border-b border-white/10">
                <span className="text-slate-300 font-medium">Annual Property Tax (Est. Monthly):</span>
                <span className="font-mono text-white font-bold">${Math.round(monthlyPropertyTax).toLocaleString()}/mo</span>
              </div>

              <div className="flex items-center justify-between text-xs sm:text-sm py-2 pt-3">
                <span className="text-amber-300 font-bold uppercase tracking-wider text-[11px] font-mono">Financed Balance:</span>
                <span className="font-mono text-amber-300 font-bold text-base sm:text-lg">${loanAmount.toLocaleString()} CAD</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
