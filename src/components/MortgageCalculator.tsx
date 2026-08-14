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
    <section id="calculator" className="relative py-20 bg-[#F4F5F7] text-slate-900 border-b border-slate-200/90 overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-amber-500/5 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-[11px] font-mono font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Calculator className="w-3.5 h-3.5 text-amber-600" />
            FINANCIAL MODELING & CARRY ANALYSIS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 font-bold mt-1">
            $4.5M Investment & Capital Breakdown
          </h2>
          <p className="text-slate-600 text-sm mt-2 font-normal max-w-2xl leading-relaxed">
            Simulate custom acquisition structures, down payment allocations, and estimated monthly carries for Suite 5200.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-md hover:shadow-lg transition-all duration-300 space-y-6">
            
            {/* Purchase Price Display */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-200/90">
              <span className="text-xs font-bold text-slate-600">Purchase Price (CAD):</span>
              <span className="font-serif text-2xl text-slate-900 font-bold">$4,500,000</span>
            </div>

            {/* Down Payment Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-900 font-bold">Down Payment ({downPaymentPercent}%):</span>
                <span className="font-mono text-amber-700 font-bold">${downPaymentAmount.toLocaleString()} CAD</span>
              </div>
              <input
                type="range"
                min={20}
                max={50}
                step={5}
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                className="w-full accent-amber-500 bg-slate-200 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono font-semibold">
                <span>20% ($900k)</span>
                <span>35% ($1.575M)</span>
                <span>50% ($2.25M)</span>
              </div>
            </div>

            {/* Interest Rate Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-900 font-bold">Interest Rate:</span>
                <span className="font-mono text-amber-700 font-bold">{interestRate.toFixed(1)}%</span>
              </div>
              <input
                type="range"
                min={4.0}
                max={7.5}
                step={0.1}
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full accent-amber-500 bg-slate-200 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono font-semibold">
                <span>4.0% Prime</span>
                <span>5.5% Benchmark</span>
                <span>7.5%</span>
              </div>
            </div>

            {/* Amortization Term */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-900">Amortization Period:</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setAmortizationYears(25)}
                  className={`py-3 rounded-xl border text-xs font-bold font-mono transition-all shadow-sm cursor-pointer ${
                    amortizationYears === 25 
                      ? 'bg-amber-500 text-zinc-950 border-amber-500 shadow-sm' 
                      : 'bg-slate-50 border-slate-200/90 text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  25 Years (Standard)
                </button>
                <button
                  onClick={() => setAmortizationYears(30)}
                  className={`py-3 rounded-xl border text-xs font-bold font-mono transition-all shadow-sm cursor-pointer ${
                    amortizationYears === 30 
                      ? 'bg-amber-500 text-zinc-950 border-amber-500 shadow-sm' 
                      : 'bg-slate-50 border-slate-200/90 text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  30 Years (Extended)
                </button>
              </div>
            </div>

            {/* Closing Costs Callout */}
            <div className="p-4.5 rounded-xl bg-slate-50 border border-slate-200/90 text-xs space-y-1.5 shadow-inner">
              <span className="font-mono text-amber-800 text-[10px] uppercase block font-bold">
                TORONTO CLOSING CAPITAL ESTIMATE
              </span>
              <div className="flex justify-between text-slate-700 font-semibold">
                <span>Combined ON/Toronto Land Transfer Tax:</span>
                <span className="font-mono text-slate-900 font-bold">~${estimatedLTT.toLocaleString()} CAD</span>
              </div>
              <p className="text-[10px] text-slate-500 font-normal">
                *Subject to lawyer verification. Our private wealth division assists with structure optimization.
              </p>
            </div>

          </div>

          {/* Monthly Output Summary Card */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-white border border-amber-300/90 space-y-6 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden">
            <div>
              <span className="text-[10px] font-mono text-amber-800 uppercase tracking-widest block font-bold mb-1">
                ESTIMATED MONTHLY CARRY
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-slate-900 font-bold">
                ${Math.round(totalMonthlyCarry).toLocaleString()} <span className="text-xs font-sans text-slate-600 font-normal">/ mo</span>
              </h3>
              <span className="text-[11px] text-slate-600 font-medium block mt-1.5">
                Total combined principal, interest, taxes, and building maintenance.
              </span>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-200/90">
              <div className="flex items-center justify-between text-xs py-2 border-b border-slate-200/90">
                <span className="text-slate-600 font-medium">Mortgage Principal & Interest:</span>
                <span className="font-mono text-slate-900 font-bold">${Math.round(monthlyMortgage).toLocaleString()}/mo</span>
              </div>

              <div className="flex items-center justify-between text-xs py-2 border-b border-slate-200/90">
                <span className="text-slate-600 font-medium">Building Maintenance Fee:</span>
                <span className="font-mono text-slate-900 font-bold">${monthlyMaintenance.toLocaleString()}/mo</span>
              </div>

              <div className="flex items-center justify-between text-xs py-2 border-b border-slate-200/90">
                <span className="text-slate-600 font-medium">Annual Property Tax (Est. Monthly):</span>
                <span className="font-mono text-slate-900 font-bold">${Math.round(monthlyPropertyTax).toLocaleString()}/mo</span>
              </div>

              <div className="flex items-center justify-between text-xs py-2 pt-3">
                <span className="text-amber-800 font-bold">Financed Balance:</span>
                <span className="font-mono text-slate-900 font-bold text-sm">${loanAmount.toLocaleString()} CAD</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
