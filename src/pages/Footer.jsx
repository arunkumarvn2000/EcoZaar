import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-10 sm:px-8 lg:px-20 font-sans">
      {/* Main Footer Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        {/* Logo Section */}
        <div>
          <img
            src="/assets/Logo.png"
            alt="Ecozaar Logo"
            className="h-12 object-contain"
          />
          <p className="mt-2 text-xs text-gray-400">
            India's one-stop green shop
          </p>
        </div>

        {/* Resource Links */}
        <div>
          <h3 className="text-lg font-bold mb-3">Resource</h3>
          <ul>
            {[
              "About us",
              "FAQs",
              "Offers T & C",
              "Calculator",
              "Service Centers Nearby",
              "Blogs",
              "Privacy Policy",
              "Sell-on-Ecozaar",
              "Refer And Earn",
            ].map((item, idx) => (
              <li
                key={idx}
                className="mb-2 text-sm cursor-pointer hover:text-green-500 transition-colors"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-lg font-bold mb-3">Products</h3>
          <ul>
            <li className="mb-2 text-sm cursor-pointer hover:text-green-500 transition-colors">
              Rooftop Solar
            </li>
            <li className="mb-2 text-sm cursor-pointer hover:text-green-500 transition-colors">
              2 Wheeler EVs
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold mb-3">Contact Us</h3>
          <p className="text-sm mb-1">Autovert Technologies Pvt Ltd</p>
          <p className="text-sm mb-1">
            1082, 2nd Floor, 12th Main Rd,
            <br />
            Indiranagar, Bangalore 560008
          </p>
          <p className="text-sm mb-1">📞 (+91) 6366303807</p>
          <p className="text-sm mb-1">📧 support@ecozaar.in</p>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="border-t border-gray-700 pt-5 flex flex-col md:flex-row justify-between items-center text-sm gap-4">
        <p className="text-center">© 2025 Autovert® Technologies Pvt Ltd</p>

        <div className="flex items-center gap-3 flex-wrap justify-center">
          <span className="text-white">Join Us</span>
          <div className="flex gap-3 mt-1">
            <a href="#" aria-label="Facebook" className="hover:text-green-500">
              <img src="/assets/facebook.svg" alt="Facebook" className="h-5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-green-500">
              <img src="/assets/linkedin.svg" alt="LinkedIn" className="h-5" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-green-500">
              <img
                src="/assets/instagram.svg"
                alt="Instagram"
                className="h-5"
              />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-green-500">
              <img src="/assets/youtube.svg" alt="YouTube" className="h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
