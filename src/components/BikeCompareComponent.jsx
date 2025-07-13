import React, { useRef } from "react";

const bikePairs = [
  [
    {
      name: "Chetak 2903",
      price: "₹1,99,999",
      img: "https://imgd.aeplcdn.com/1280x720/n/cw/ec/194471/chetak-2025-right-side-view-2.jpeg?isig=0",
    },
    {
      name: "ATHER RIZTA Z 2.9kWh",
      price: "₹1,99,999",
      img: "https://assets.electricpe.com/shop-electric/vehicles/ather/rizta/z/cardamom-green-A8BAA9.webp",
    },
  ],
  [
    {
      name: "Ather 450S 2.9kWh",
      price: "₹1,99,999",
      img: "https://rukminim2.flixcart.com/image/850/1000/xif0q/electric-bike-scooter/m/w/k/s-portable-charger-450s-s-disc-booking-for-ex-showroom-price-pan-original-imah3j23zgep694k.jpeg?q=90&crop=false",
    },
    {
      name: "ATHER RIZTA Z 2.9kWh",
      price: "₹1,99,999",
      img: "https://rukminim3.flixcart.com/image/850/1000/xif0q/electric-bike-scooter/t/x/c/-original-imah6rwfzrrgzsny.jpeg?q=90&crop=false",
    },
  ],
  [
    {
      name: "Chetak 2903",
      price: "₹1,99,999",
      img: "https://imgd.aeplcdn.com/1280x720/n/cw/ec/194471/chetak-2025-right-side-view-2.jpeg?isig=0",
    },
    {
      name: "ATHER RIZTA Z 2.9kWh",
      price: "₹1,99,999",
      img: "https://rukminim3.flixcart.com/image/850/1000/xif0q/electric-bike-scooter/t/x/c/-original-imah6rwfzrrgzsny.jpeg?q=90&crop=false",
    },
  ],
  [
    {
      name: "Ather 450S 2.9kWh",
      price: "₹1,99,999",
      img: "https://rukminim2.flixcart.com/image/850/1000/xif0q/electric-bike-scooter/m/w/k/s-portable-charger-450s-s-disc-booking-for-ex-showroom-price-pan-original-imah3j23zgep694k.jpeg?q=90&crop=false",
    },
    {
      name: "ATHER RIZTA Z 2.9kWh",
      price: "₹1,99,999",
      img: "https://rukminim3.flixcart.com/image/850/1000/xif0q/electric-bike-scooter/t/x/c/-original-imah6rwfzrrgzsny.jpeg?q=90&crop=false",
    },
  ],
];
const CompareTwoBikeCards = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const scrollAmount =
      direction === "left" ? -window.innerWidth * 0.8 : window.innerWidth * 0.8;
    scrollRef.current?.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="bg-[#121212] text-white py-10 px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 uppercase text-gray-300 leading-snug">
        Start Compare Your <br className="md:hidden" />
        Bike with <span className="text-green-500">precision</span>
      </h2>

      <div className="relative">
        {/* Left Scroll Button */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-1 top-1/2 -translate-y-1/2 z-10 bg-white border border-[#4b2673] text-[#4b2673] hover:bg-[#f3edfd] rounded-full p-2 shadow-lg transition-all duration-300"
          aria-label="Scroll Left"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Scrollable Bike Cards */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 md:gap-6 px-2 md:px-6 py-4 scroll-smooth snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
        >
          {bikePairs.map((pair, index) => (
            <div
              key={index}
              className="min-w-[90vw] md:min-w-[500px] bg-white text-black rounded-xl shadow-md overflow-hidden snap-start"
            >
              <div className="grid grid-cols-2 border-b">
                {pair.map((bike, idx) => (
                  <div
                    key={idx}
                    className="p-4 flex flex-col items-center text-center border-r last:border-r-0"
                  >
                    <img
                      src={bike.img}
                      alt={bike.name}
                      className="h-[100px] md:h-[120px] object-contain bg-gray-50 rounded mb-2"
                    />
                    <h3 className="font-semibold text-xs md:text-sm">
                      {bike.name}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-700">
                      {bike.price}
                    </p>
                  </div>
                ))}
              </div>
              <div className="bg-[#2a1c4d] hover:bg-[#20113c] text-white text-center py-3 font-medium cursor-pointer transition">
                Compare
              </div>
            </div>
          ))}
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-1 top-1/2 -translate-y-1/2 z-10 bg-white border border-[#4b2673] text-[#4b2673] hover:bg-[#f3edfd] rounded-full p-2 shadow-lg transition-all duration-300"
          aria-label="Scroll Right"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CompareTwoBikeCards;
