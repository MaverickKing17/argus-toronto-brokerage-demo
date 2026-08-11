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
    <section id="calculator" className="py-16 bg-neutral-950 text-neutral-100 border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <span className="text-xs font-mono tracking-widest text-amber-400 uppercase">
            // FINANCIAL MODELING & CARRY ANALYSIS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-semibold mt-2">
            $4.5M Investment & Capital Breakdown
          </h2>
          <p className="text-neutral-400 text-sm mt-1 font-light max-w-2xl">
            Simulate custom acquisition structures, down payment allocations, and estimated monthly carries for Suite 5200.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-6">
            
            {/* Purchase Price Display */}
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
              <span className="text-xs font-semibold text-neutral-300">Purchase Price (CAD):</span>
              <span className="font-serif text-2xl text-amber-400 font-bold">$4,500,000</span>
            </div>

            {/* Down Payment Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-neutral-300 font-medium">Down Payment ({downPaymentPercent}%):</span>
                <span className="font-mono text-amber-300 font-semibold">${downPaymentAmount.toLocaleString()} CAD</span>
              </div>
              <input
                type="range"
                min={20}
                max={50}
                step={5}
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                className="w-full accent-amber-500 bg-neutral-800 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-neutral-500 font-mono">
                <span>20% ($900k)</span>
                <span>35% ($1.575M)</span>
                <span>50% ($2.25M)</span>
              </div>
            </div>

            {/* Interest Rate Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-neutral-300 font-medium">Interest Rate:</span>
                <span className="font-mono text-amber-300 font-semibold">{interestRate.toFixed(1)}%</span>
              </div>
              <input
                type="range"
                min={4.0}
                max={7.5}
                step={0.1}
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full accent-amber-500 bg-neutral-800 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-neutral-500 font-mono">
                <span>4.0% Prime</span>
                <span>5.5% Benchmark</span>
                <span>7.5%</span>
              </div>
            </div>

            {/* Amortization Term */}
            <div className="space-y-2">
              <label className="block text-xs font-medium text-neutral-300">Amortization Period:</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setAmortizationYears(25)}
                  className={`py-2.5 rounded-lg border text-xs font-semibold font-mono transition-all ${
                    amortizationYears === 25 
                      ? 'bg-amber-500/20 border-amber-400 text-amber-300' 
                      : 'bg-neutral-950 border-neutral-800 text-neutral-400'
                  }`}
                >
                  25 Years (Standard)
                </button>
                <button
                  onClick={() => setAmortizationYears(30)}
                  className={`py-2.5 rounded-lg border text-xs font-semibold font-mono transition-all ${
                    amortizationYears === 30 
                      ? 'bg-amber-500/20 border-amber-400 text-amber-300' 
                      : 'bg-neutral-950 border-neutral-800 text-neutral-400'
                  }`}
                >
                  30 Years (Extended)
                </button>
              </div>
            </div>

            {/* Closing Costs Callout */}
            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-xs space-y-1.5">
              <span className="font-mono text-amber-400 text-[10px] uppercase block">
                TORONTO CLOSING CAPITAL ESTIMATE
              </span>
              <div className="flex justify-between text-neutral-300">
                <span>Combined ON/Toronto Land Transfer Tax:</span>
                <span className="font-mono text-white font-semibold">~${estimatedLTT.toLocaleString()} CAD</span>
              </div>
              <p className="text-[10px] text-neutral-400 font-light">
                *Subject to lawyer verification. Our private wealth division assists with structure optimization.
              </p>
            </div>

          </div>

          {/* Monthly Output Summary Card */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-950 border border-amber-500/30 space-y-6 shadow-2xl">
            <div>
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block">
                ESTIMATED MONTHLY CARRY
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-amber-300 font-bold mt-1">
                ${Math.round(totalMonthlyCarry).toLocaleString()} <span className="text-xs font-sans text-neutral-400 font-normal">/ mo</span>
              </h3>
              <span className="text-[11px] text-neutral-400 font-light block mt-1">
                Total combined principal, interest, taxes, and building maintenance.
              </span>
            </div>

            <div className="space-y-3 pt-4 border-t border-neutral-800">
              <div className="flex items-center justify-between text-xs py-2 border-b border-neutral-800/80">
                <span className="text-neutral-300">Mortgage Principal & Interest:</span>
                <span className="font-mono text-amber-300 font-semibold">${Math.round(monthlyMortgage).toLocaleString()}/mo</span>
              </div>

              <div className="flex items-center justify-between text-xs py-2 border-b border-neutral-800/80">
                <span className="text-neutral-300">Building Maintenance Fee:</span>
                <span className="font-mono text-white font-semibold">${monthlyMaintenance.toLocaleString()}/mo</span>
              </div>

              <div className="flex items-center justify-between text-xs py-2 border-b border-neutral-800/80">
                <span className="text-neutral-300">Annual Property Tax (Est. Monthly):</span>
                <span className="font-mono text-white font-semibold">${Math.round(monthlyPropertyTax).toLocaleString()}/mo</span>
              </div>

              <div className="flex items-center justify-between text-xs py-2">
                <span className="text-neutral-300 font-semibold">Financed Balance:</span>
                <span className="font-mono text-amber-400 font-bold">${loanAmount.toLocaleString()} CAD</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
