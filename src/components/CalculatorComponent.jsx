import React, { useState } from "react";

function CalculatorComponent() {
  const evOptions = [
    {
      name: "ATHER RIZTA Z 2.9kWh",
      baseCost: 130000,
      img: "https://images.ecozaar.in/wp-content/uploads/2024/12/20163123/Rizta-image-1024x1024.png",
    },
    {
      name: "TVS iQube S",
      baseCost: 125000,
      img: "https://www.tvsmotor.com/electric-scooters/tvs-iqube/-/media/Vehicles/Feature/Iqube/Variant/TVS-iQube-O9/Color_Images/Titanium-Grey-Glossy/right.webp",
    },
    {
      name: "OLA S1 Air",
      baseCost: 120000,
      img: "/assets/bike.png",
    },
  ];

  const [mode, setMode] = useState("EV");
  const [selectedEV, setSelectedEV] = useState(evOptions[0]);
  const [monthlyKm, setMonthlyKm] = useState(0);

  const evRunningCostPerKm = 0.25;
  const petrolRunningCostPerKm = 2.4;
  const petrolEmissionPerKm = 0.15;
  const totalYears = 5;
  const totalKm = monthlyKm * 12 * totalYears;

  const evCost = selectedEV.baseCost + totalKm * evRunningCostPerKm;
  const petrolCost = totalKm * petrolRunningCostPerKm;
  const savings = Math.max(0, petrolCost - evCost);
  const carbonSaved = Math.max(0, totalKm * petrolEmissionPerKm);

  return (
    <div className="bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto bg-black text-white rounded-xl p-4 md:p-8 flex flex-col md:flex-row gap-6">
        {/* Left Panel */}
        <div className="flex-1 min-w-0">
          <h2 className="text-xl md:text-2xl font-semibold mb-1">
            Savings Calculator
          </h2>
          <p className="text-gray-400 text-sm mb-6">
            Discover Your Savings with an Electric Two-Wheeler & Rooftop Solar
          </p>

          {/* Mode Toggle Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <button
              onClick={() => setMode("EV")}
              className={`w-full py-2 px-4 rounded-md font-bold border transition ${
                mode === "EV"
                  ? "bg-green-600 border-green-600"
                  : "bg-gray-800 border-gray-600"
              }`}
            >
              EV vs 2W Petrol
            </button>
            <button
              onClick={() => setMode("Solar")}
              className={`w-full py-2 px-4 rounded-md font-bold border transition ${
                mode === "Solar"
                  ? "bg-green-600 border-green-600"
                  : "bg-gray-800 border-gray-600"
              }`}
            >
              Rooftop Solar
            </button>
          </div>

          {/* EV Section */}
          {mode === "EV" && (
            <>
              {/* EV Dropdown */}
              <div className="mb-6">
                <label className="text-green-400 font-semibold block mb-2">
                  Preferred EV
                </label>
                <select
                  value={selectedEV.name}
                  onChange={(e) =>
                    setSelectedEV(
                      evOptions.find((ev) => ev.name === e.target.value)
                    )
                  }
                  className="w-full p-3 rounded-md bg-white text-black font-medium text-sm"
                >
                  {evOptions.map((ev) => (
                    <option key={ev.name} value={ev.name}>
                      {ev.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Monthly KM Slider */}
              <div className="mb-6">
                <label className="text-green-400 font-semibold block mb-2">
                  Average Monthly Running
                </label>
                <div className="bg-white rounded-md p-3">
                  <input
                    type="range"
                    min="0"
                    max="3000"
                    step="10"
                    value={monthlyKm}
                    onChange={(e) =>
                      setMonthlyKm(Math.max(0, Number(e.target.value)))
                    }
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #00c853 0%, #00e676 ${
                        (monthlyKm / 3000) * 100
                      }%, #e5e7eb ${(monthlyKm / 3000) * 100}%, #e5e7eb 100%)`,
                    }}
                  />

                  <div className="flex justify-between text-black text-xs mt-2">
                    <span>0 KM</span>
                    <span>{monthlyKm} KM</span>
                    <span>3000 KM</span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Right Panel */}
        {mode === "EV" && (
          <div className="flex-1 bg-gray-900 rounded-lg p-6 text-center min-w-0">
            <img
              src={selectedEV.img}
              alt={selectedEV.name}
              className="w-16 h-16 mx-auto object-contain mb-2"
            />
            <h3 className="text-lg font-semibold mb-2">{selectedEV.name}</h3>
            <h4 className="text-green-400 font-medium animate-pulse mb-4">
              Great Choice!
            </h4>

            <div className="bg-green-900 p-3 rounded-md text-white font-bold mb-4">
              You will save:{" "}
              <span className="text-green-300 text-xl">
                ₹{Math.round(savings).toLocaleString()}
              </span>
            </div>
            <p className="text-xs text-gray-400 mb-6">
              Comparing 5-year ownership costs — EV vs petrol
            </p>

            <div className="flex justify-between mb-4 text-sm">
              <div>
                <div className="text-green-300 text-lg font-bold">
                  ₹{Math.round(evCost).toLocaleString()}
                </div>
                <div className="text-gray-400">EV ownership costs</div>
              </div>
              <div className="font-bold text-gray-500 px-2">vs</div>
              <div>
                <div className="text-white text-lg font-bold">
                  ₹{Math.round(petrolCost).toLocaleString()}
                </div>
                <div className="text-gray-400">Petrol ownership costs</div>
              </div>
            </div>

            <div className="bg-green-100 text-green-800 p-3 rounded-md text-sm">
              🌱 Carbon Emission Savings:{" "}
              {Math.round(carbonSaved).toLocaleString()} kg for 5 years
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CalculatorComponent;
