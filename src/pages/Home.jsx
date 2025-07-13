import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import XchangeComponent from "../components/XchangeComponent";
import CalculatorComponent from "../components/CalculatorComponent";
import EMICalculatorComponent from "../components/EMICalculatorComponent";
import BikeCompareComponent from "../components/BikeCompareComponent";
import EvAndRtsComponent from "../components/EvAndRtsComponent";
import ReviewSection from "../components/ReviewSection";

const Home = () => {
  return (
    <div className="bg-[#f9f9f9] px-4 sm:px-6 md:px-8 py-8 overflow-x-hidden">
      <div className="product-details">
        {/* Top Banner Slider */}
        <div className="top-banner-slider relative">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
          >
            <SwiperSlide>
              <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
                <img
                  src="/assets/wall.jpg"
                  alt="EV Banner"
                  className="w-full h-full object-cover scale-[1.15] filter grayscale transition-transform duration-1000 ease-in-out"
                />
                <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center text-white p-4 z-10">
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-black">
                    THE RIDE THAT'S AS SMART <br /> AS YOU ARE,{" "}
                    <span className="font-bold text-[#2A1C4D]">
                      THE TVS iQUBE
                    </span>
                  </h2>
                  <div className="bg-[#2f2254] py-2 px-6 rounded-md mt-5 text-base md:text-lg font-semibold">
                    JUST ₹3499 / MONTH!
                  </div>
                  <img
                    src="/assets/scooter.png"
                    alt="TVS iQube"
                    className="mt-6 max-w-[160px] md:max-w-[240px] lg:max-w-[280px] w-full"
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          {/* Filter Bar */}
          <div className="filter-bar absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 bg-white rounded-xl shadow-md p-4 w-[95%] max-w-[1000px] flex flex-wrap gap-3 justify-center items-center z-20">
            <div className="flex gap-2 flex-wrap justify-center">
              <button className="bg-[#30a14e] text-white py-2 px-4 rounded-full text-sm font-semibold">
                EV Scooter
              </button>
              <button className="bg-white text-[#30a14e] py-2 px-4 rounded-full text-sm font-semibold border border-[#30a14e]">
                Rooftop Solar
              </button>
            </div>

            <select className="py-2 px-3 rounded-md border border-[#ccc] text-sm font-medium w-full sm:w-auto">
              <option>Select Your Budget</option>
              <option value="under-50k">Under ₹50,000</option>
              <option value="50k-1l">₹50,000 - ₹1,00,000</option>
            </select>

            <select className="py-2 px-3 rounded-md border border-[#ccc] text-sm font-medium w-full sm:w-auto">
              <option>Select Your Brand</option>
              <option value="tvs">TVS</option>
              <option value="ola">Ola</option>
            </select>

            <button className="bg-[#2f2254] p-2 rounded-full flex items-center justify-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtsLJlHAtkmhnk2DNBj3L_ZQEOnLaQJWAb2A&s"
                alt="Ecozaar Logo"
                className="w-4 h-4 object-contain"
              />
            </button>
          </div>
        </div>

        {/* Eco Smart Section */}
        <div className="eco-products-section py-10 px-4 text-center">
          <h2 className="text-xl md:text-2xl font-medium text-[#0f0f0f] mb-10">
            Eco–Smart Finds to{" "}
            <span className="text-[#2f2261] font-bold">
              Power Your Green Journey
            </span>
          </h2>

          <div className="card-container flex flex-col lg:flex-row gap-6 items-stretch justify-center">
            {/* EV Card */}
            <div
              className="w-full max-w-[580px] bg-cover bg-center rounded-xl shadow-md flex flex-col sm:flex-row items-center justify-between p-4 text-white"
              style={{ backgroundImage: 'url("/assets/EcoGreen.avif")' }}
            >
              <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
                <h3 className="text-lg font-bold mb-2">
                  Zap into the EV life!
                </h3>
                <p className="text-sm mb-4">
                  Subscribe or Buy, the choice is yours, ALWAYS!
                </p>
                <button className="bg-white text-[#2a2a76] py-2 px-4 text-sm font-semibold rounded-md">
                  EV Scooter
                </button>
              </div>
              <img
                src="/assets/rizta.avif"
                alt="EV Scooter"
                className="w-[120px] md:w-[150px] h-auto object-contain"
              />
            </div>

            {/* Solar Card */}
            <div
              className="w-full max-w-[580px] bg-cover bg-center rounded-xl shadow-md flex flex-col sm:flex-row items-center justify-between p-4 text-white"
              style={{ backgroundImage: 'url("/assets/rts_bg.avif")' }}
            >
              <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
                <h3 className="text-lg font-bold mb-2">
                  Rooftop Solar Purchase Made Easy
                </h3>
                <p className="text-sm mb-4">
                  Zero Electricity Bill! We simplify this process.
                </p>
                <button className="bg-white text-[#2a2a76] py-2 px-4 text-sm font-semibold rounded-md">
                  Rooftop Solar
                </button>
              </div>
              <img
                src="/assets/Resign-pattern_2.svg"
                alt="Solar Panel"
                className="w-[120px] md:w-[150px] h-auto object-contain"
              />
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-lg font-medium text-[#2c2c2c] mb-1">
              Electrify your life
            </h2>
            <p className="text-base font-bold text-[#2f2261]">
              Subscribe or Buy, the choice is yours, ALWAYS!
            </p>
          </div>
        </div>

        <div id="exchange" className="scroll-mt-24">
          <XchangeComponent />
        </div>
        <div id="calculator" className="scroll-mt-24">
          <CalculatorComponent />
        </div>
        <div id="emi-calculator" className="scroll-mt-24">
          <EMICalculatorComponent />
        </div>
        <div id="compare" className="scroll-mt-24">
          <BikeCompareComponent />
        </div>
        <div id="ev-and-rts" className="scroll-mt-24">
          <EvAndRtsComponent />
        </div>

        <div id="review" className="scroll-mt-24">
          <ReviewSection />
        </div>
      </div>
    </div>
  );
};

export default Home;
