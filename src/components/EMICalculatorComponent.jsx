import React, { useState, useEffect } from "react";

function EMICalculatorComponent() {
  const [loanAmount, setLoanAmount] = useState(50000);
  const [interestRate, setInterestRate] = useState(1);
  const [tenure, setTenure] = useState(12);
  const [emi, setEmi] = useState(0);
  const [totalPayable, setTotalPayable] = useState(0);
  const [interestComponent, setInterestComponent] = useState(0);

  useEffect(() => {
    const r = interestRate / 100 / 12;
    const n = tenure;
    const emiCalc =
      (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const total = emiCalc * n;
    const interestAmt = total - loanAmount;

    setEmi(Math.round(emiCalc));
    setTotalPayable(Math.round(total));
    setInterestComponent(Math.round(interestAmt));
  }, [loanAmount, interestRate, tenure]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 font-sans">
      <h2 className="text-3xl font-bold text-[#2a1c4d] mb-6">
        Your EMI Calculator
      </h2>

      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left: Input Section */}
          <div className="flex-1 space-y-6">
            {/* Loan Amount */}
            <div>
              <label className="font-semibold text-gray-700 block mb-1">
                Loan Amount
              </label>
              <span className="text-sm text-gray-500">
                (select your required loan amount)
              </span>
              <input
                type="range"
                min="50000"
                max="2000000"
                step="10000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full mt-2 slider-thumb"
                style={{
                  background: `linear-gradient(to right, #00c853 0%, #00e676 ${
                    ((loanAmount - 50000) / (2000000 - 50000)) * 100
                  }%, #e5e7eb ${
                    ((loanAmount - 50000) / (2000000 - 50000)) * 100
                  }%, #e5e7eb 100%)`,
                }}
              />
              <div className="text-white inline-block mt-2 px-3 py-1 bg-[#2a1c4d] rounded-lg font-semibold">
                ₹{loanAmount.toLocaleString()}
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>₹50,000</span>
                <span>₹20,00,000</span>
              </div>
            </div>

            {/* Interest */}
            <div>
              <label className="font-semibold text-gray-700 block mb-1">
                Interest
              </label>
              <span className="text-sm text-gray-500">
                (select your interest)
              </span>
              <input
                type="range"
                min="1"
                max="30"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full mt-2 slider-thumb"
                style={{
                  background: `linear-gradient(to right, #00c853 0%, #00e676 ${
                    ((interestRate - 1) / (30 - 1)) * 100
                  }%, #e5e7eb ${
                    ((interestRate - 1) / (30 - 1)) * 100
                  }%, #e5e7eb 100%)`,
                }}
              />
              <div className="text-white inline-block mt-2 px-3 py-1 bg-[#2a1c4d] rounded-lg font-semibold">
                {interestRate}%
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>1%</span>
                <span>30%</span>
              </div>
            </div>

            {/* Tenure */}
            <div>
              <label className="font-semibold text-gray-700 block mb-2">
                Tenure in Months
              </label>
              <div className="flex flex-wrap gap-2">
                {[12, 18, 24, 30, 36, 48, 60].map((t) => (
                  <button
                    key={t}
                    onClick={() => setTenure(t)}
                    className={`px-4 py-2 rounded-lg font-semibold ${
                      tenure === t
                        ? "bg-[#2a1c4d] text-white"
                        : "bg-gray-200 text-black"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Result Section */}
          <div className="bg-blue-50 p-6 rounded-2xl flex-1">
            <p className="text-center text-lg font-semibold text-[#2a1c4d]">
              EMI
            </p>
            <h3 className="text-3xl font-bold text-center text-green-600 mb-4">
              ₹{emi.toLocaleString()}
            </h3>
            <p className="text-sm text-center text-gray-600 mb-4">
              As per the loan amount selected, please check breakdown
            </p>

            <div className="border-t border-dashed border-gray-300 my-4" />

            <div className="mb-4">
              <p className="text-sm font-medium text-gray-600">Total Payable</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-lg font-bold text-[#2a1c4d]">
                  ₹{totalPayable.toLocaleString()}
                </span>
              </div>
            </div>

            <div className="border-t border-dashed border-gray-300 my-4" />

            <div>
              <p className="text-sm font-medium text-gray-600">
                Interest Component
              </p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-lg font-bold text-[#2a1c4d]">
                  ₹{interestComponent.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EMICalculatorComponent;
