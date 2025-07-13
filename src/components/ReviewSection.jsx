import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ReviewSection = () => {
  const testimonials = [
    {
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Kiran",
      location: "Product Manager",
      rating: 4,
      text: "Exceptional service and user-friendly design! Highly recommended.",
    },
    {
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      name: "Rahul Mehta",
      location: "UI Designer",
      rating: 5,
      text: "Great overall experience, but some features could be more intuitive.",
    },
    {
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      name: "Thomas",
      location: "UX Designer",
      rating: 5,
      text: "Great overall experience, but some features could be more intuitive.",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: Math.min(testimonials.length, 3),
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const renderStars = (rating) => {
    return (
      <div className="flex text-green-600 mb-2">
        {[...Array(5)].map((_, i) => (
          <span key={i}>
            {i < rating ? (
              <svg
                className="w-4 h-4 fill-current"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.036 3.186a1 1 0 00.95.69h3.356c.969 0 1.371 1.24.588 1.81l-2.716 1.97a1 1 0 00-.364 1.118l1.036 3.186c.3.921-.755 1.688-1.538 1.118l-2.716-1.97a1 1 0 00-1.175 0l-2.716 1.97c-.783.57-1.838-.197-1.538-1.118l1.036-3.186a1 1 0 00-.364-1.118l-2.716-1.97c-.783-.57-.38-1.81.588-1.81h3.356a1 1 0 00.95-.69l1.036-3.186z" />
              </svg>
            ) : (
              <svg
                className="w-4 h-4 text-gray-300 fill-current"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.036 3.186a1 1 0 00.95.69h3.356c.969 0 1.371 1.24.588 1.81l-2.716 1.97a1 1 0 00-.364 1.118l1.036 3.186c.3.921-.755 1.688-1.538 1.118l-2.716-1.97a1 1 0 00-1.175 0l-2.716 1.97c-.783.57-1.838-.197-1.538-1.118l1.036-3.186a1 1 0 00-.364-1.118l-2.716-1.97c-.783-.57-.38-1.81.588-1.81h3.356a1 1 0 00.95-.69l1.036-3.186z" />
              </svg>
            )}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-[1200px] mx-auto px-5 bg-white py-10">
      {/* Header */}
      <div className="flex justify-center gap-[30px] py-5 border-b border-[#e0e0e0]">
        {[
          "https://ez-common-files.s3.ap-south-1.amazonaws.com/fe-images/TVS_grey.svg",
          "https://ez-common-files.s3.ap-south-1.amazonaws.com/fe-images/ather_grey.svg",
          "https://ez-common-files.s3.ap-south-1.amazonaws.com/fe-images/chetak_grey.svg",
        ].map((logo, index) => (
          <div key={index} className="h-[30px]">
            <img src={logo} alt={`Brand ${index}`} className="h-full w-auto" />
          </div>
        ))}
      </div>
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-[#2a1c4d] mb-5">
          What{" "}
          <span className="text-[#2a1c4d] font-extrabold">
            People are saying about us!
          </span>
        </h2>
        <div className="flex justify-center gap-4">
          <button className="bg-green-600 text-white font-semibold text-sm py-2 px-6 rounded-md min-w-[140px] hover:bg-green-700 transition">
            Get all Reviews
          </button>
          <button className="border border-[#2a1c4d] text-[#2a1c4d] bg-white font-semibold text-sm py-2 px-6 rounded-md min-w-[140px] hover:bg-gray-100 transition">
            Explore
          </button>
        </div>
      </div>

      {/* Testimonials */}
      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <div key={index} className="px-2 md:px-3">
            <div className="bg-white p-5 md:p-6 border border-gray-200 rounded-lg shadow-md h-full flex flex-col justify-between text-left min-h-[240px]">
              {renderStars(item.rating)}
              <p className="text-sm text-gray-700 mb-4">{item.text}</p>
              <div className="flex items-center gap-3 mt-auto">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover border"
                />
                <div>
                  <div className="font-bold text-[#2a1c4d]">{item.name}</div>
                  <div className="text-xs text-gray-500">{item.location}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewSection;
