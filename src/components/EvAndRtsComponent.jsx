import React, { useState, useRef } from "react";

const EvAndRtsComponent = () => {
  const scrollRefEV = useRef();
  const scrollRefSolar = useRef();
  const [wishlist, setWishlist] = useState([]);

  const seedEvProducts = [
    {
      _id: 1,
      name: "ATHER RIZTA Z 2.9kWh",
      description: "120 KM Range | 7.5 Hrs Charging",
      price: 199999,
      emi: 4999,
      imageUrl:
        "https://www.atherenergy.com/_next/image?url=https%3A%2F%2Fmedia.atherenergy.com%2FBlue-Mono.png&w=3840&q=75", // Black variant
    },

    {
      _id: 2,
      name: "ATHER RIZTA Z 2.9kWh",
      description: "120 KM Range | 7.5 Hrs Charging",
      price: 199999,
      emi: 4999,
      imageUrl:
        "https://bikekharido.s3.ap-south-1.amazonaws.com/wp-content/uploads/2022/01/1-12.jpg?v=1691130722", // Red variant
    },
    {
      _id: 3,
      name: "ATHER RIZTA Z 2.9kWh",
      description: "120 KM Range | 7.5 Hrs Charging",
      price: 199999,
      emi: 4999,
      imageUrl:
        "https://rukminim2.flixcart.com/image/750/900/xif0q/electric-bike-scooter/o/d/k/-original-imah6rweezutvydy.jpeg?q=90&crop=false", // Yellow variant
    },
    {
      _id: 4,
      name: "ATHER RIZTA Z 2.9kWh",
      description: "120 KM Range | 7.5 Hrs Charging",
      price: 199999,
      emi: 4999,
      imageUrl:
        "https://rukminim2.flixcart.com/image/850/1000/xif0q/electric-bike-scooter/d/p/f/-original-imah6rwehxuqjkzk.jpeg?q=90&crop=false", // Mint Green
    },
    {
      _id: 5,
      name: "ATHER RIZTA Z 2.9kWh",
      description: "120 KM Range | 7.5 Hrs Charging",
      price: 199999,
      emi: 4999,
      imageUrl:
        "    https://akm-img-a-in.tosshub.com/indiatoday/images/story/202404/ather-rizta-06095830-16x9_0.jpg?VersionId=XfRtE38Tjq.BYlNmCRQ.CRcJgHtnTkNj&size=690:388",
    },
  ];

  const solarData = [
    {
      _id: 11,
      name: "Pahal Solar Bundle 8kW (7.91kW) VVK",
      price: 419930,
      range: "120 KM Range",
      chargeTime: "7.5 Hrs Charging",
      imageUrl: "/assets/Solar.png",
    },
    {
      _id: 12,
      name: "Pahal Solar Bundle 6.5kW (6.78kW) VVK",
      price: 363800,
      range: "120 KM Range",
      chargeTime: "7.5 Hrs Charging",
      imageUrl: "/assets/Solar.png",
    },
    {
      _id: 13,
      name: "Pahal Solar Bundle 5.5kW (5.65kW) VVK",
      price: 303160,
      range: "120 KM Range",
      chargeTime: "7.5 Hrs Charging",
      imageUrl: "/assets/Solar.png",
    },
    {
      _id: 14,
      name: "Pahal Solar Bundle 5kW (5.09kW) VVK",
      price: 278880,
      range: "120 KM Range",
      chargeTime: "7.5 Hrs Charging",
      imageUrl: "/assets/Solar.png",
    },
    {
      _id: 15,
      name: "Pahal Solar Bundle 4.5kW (5.09kW) VVK",
      price: 247680,
      range: "120 KM Range",
      chargeTime: "7.5 Hrs Charging",
      imageUrl: "/assets/Solar.png",
    },
    {
      _id: 16,
      name: "Pahal Solar Bundle 4.9kW (5.09kW) VVK",
      price: 297680,
      range: "120 KM Range",
      chargeTime: "7.5 Hrs Charging",
      imageUrl: "/assets/Solar.png",
    },
  ];

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const scroll = (ref, direction) => {
    const { current } = ref;
    if (!current) return;
    const scrollAmount = direction === "left" ? -300 : 300;
    current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const renderCarousel = (title, data, ref, isSolar = false) => (
    <div className="p-5 relative">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-bold">{title}</h2>
        <button className="text-blue-600 font-bold hover:underline">
          View All
        </button>
      </div>
      <div className="relative">
        <button
          className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 bg-gray-100 border-none text-2xl p-1 rounded-full cursor-pointer shadow-sm z-10 hover:bg-gray-200"
          onClick={() => scroll(ref, "left")}
        >
          ‹
        </button>
        <div
          className="flex gap-4 overflow-x-auto scroll-smooth py-2 [&::-webkit-scrollbar]:hidden"
          ref={ref}
        >
          {data.map((item) => (
            <div
              key={item._id}
              className="min-w-[250px] bg-white rounded-lg p-3 border border-gray-200 shadow-sm relative"
            >
              <div className="absolute top-[-10px] left-2 bg-green-600 text-white text-xs px-2 py-0.5 rounded">
                {isSolar ? "Recommended" : "Fast Selling"}
              </div>
              <div className="flex justify-between mb-2">
                <label className="text-xs flex items-center">
                  <input type="checkbox" className="mr-1" /> Compare
                </label>
                <span
                  className="text-xl cursor-pointer text-red-500"
                  onClick={() => toggleWishlist(item._id)}
                >
                  {wishlist.includes(item._id) ? "♥" : "♡"}
                </span>
              </div>
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full h-[140px] object-cover rounded"
              />
              <h3 className="text-base font-medium mt-2">{item.name}</h3>
              {isSolar && (
                <p className="text-sm text-gray-600">
                  {item.range} | {item.chargeTime}
                </p>
              )}
              {!isSolar && (
                <p className="text-sm text-gray-600 min-h-[38px]">
                  {item.description}
                </p>
              )}
              <p className="text-sm mt-2">
                EMI: ₹{Math.round(item.price / 36).toLocaleString()}
                <br />
                <span className="text-xs text-gray-500">
                  or ₹{item.price.toLocaleString()}
                </span>
              </p>
              <button className="w-full mt-2 py-1.5 bg-[#2a1c4d] text-gray-100 rounded hover:bg-[#3a2c5d]">
                Explore
              </button>
            </div>
          ))}
        </div>
        <button
          className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 bg-gray-100 border-none text-2xl p-1 rounded-full cursor-pointer shadow-sm z-10 hover:bg-gray-200"
          onClick={() => scroll(ref, "right")}
        >
          ›
        </button>
      </div>
    </div>
  );

  return (
    <>
      {renderCarousel("Popular EV Scooters", seedEvProducts, scrollRefEV)}
      {renderCarousel("Popular Rooftop Solar", solarData, scrollRefSolar, true)}
    </>
  );
};

export default EvAndRtsComponent;
