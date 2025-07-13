import { useState, useEffect } from "react";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const evScootersOptions = [
    "OLA",
    "Ather",
    "Chetak",
    "TVS",
    "HONDA",
    "Savings Calculator",
  ];

  const rooftopSolarOptions = [
    "Tata Power",
    "Australian Premium",
    "Waree",
    "Adani Solar",
    "Pahal Solar",
    "Solar Calculator",
  ];

  const staticLinks = [
    { label: "Comparisons", id: "compare" },
    { label: "Exchange", id: "exchange" },
    { label: "Check Loan Eligibility", id: "calculator" },
    { label: "Subscription", id: "emi-calculator" },
    { label: "Calculators", id: "calculator" },
    { label: "Blogs", id: "review" },
  ];

  const toggleDropdown = (name) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <div className="sticky-header-container">
      {/* Main Header */}
      <header
        className={`bg-white py-3 border-b border-gray-200 sticky top-0 z-50 transition-all duration-300 ${
          isSticky ? "shadow-md py-2" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Location */}
          <div className="flex items-center gap-4">
            <img
              src="/assets/Logo.png"
              alt="Ecozaar Logo"
              className={`transition-all duration-300 ${
                isSticky ? "h-10" : "h-14"
              }`}
            />
            <div className="hidden md:flex items-center border border-gray-300 rounded-full px-4 py-1 bg-white shadow-sm">
              <span className="text-sm font-medium mr-2">560055</span>
              <div className="w-8 h-8 border-2 border-green-500 rounded-full flex items-center justify-center">
                {/* location icon SVG */}
                <svg
                  width="13"
                  height="18"
                  viewBox="0 0 13 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.45308 1C3.19397 1 0.542603 3.65137 0.542603 6.91047C0.542603 7.9834 1.02378 9.13733 1.04395 9.18601C1.19936 9.55489 1.50601 10.1279 1.72713 10.4637L5.77963 16.604C5.94547 16.8557 6.19093 17 6.45308 17C6.71522 17 6.96068 16.8557 7.12652 16.6043L11.1794 10.4637C11.4008 10.1279 11.7071 9.55489 11.8625 9.18601C11.8827 9.13768 12.3636 7.98375 12.3636 6.91047C12.3636 3.65137 9.71218 1 6.45308 1ZM11.2214 8.91621C11.0827 9.24685 10.7973 9.77983 10.5988 10.0809L6.54591 16.2216C6.46594 16.3429 6.44056 16.3429 6.36059 16.2216L2.30775 10.0809C2.10923 9.77983 1.82378 9.2465 1.68506 8.91586C1.67915 8.90161 1.23795 7.83946 1.23795 6.91047C1.23795 4.03485 3.57746 1.69535 6.45308 1.69535C9.3287 1.69535 11.6682 4.03485 11.6682 6.91047C11.6682 7.84085 11.226 8.90578 11.2214 8.91621Z"
                    fill="#2A1C4D"
                    stroke="#2A1C4D"
                  />
                  <path
                    d="M6.45305 3.78175C4.72754 3.78175 3.32397 5.18566 3.32397 6.91083C3.32397 8.63599 4.72754 10.0399 6.45305 10.0399C8.17856 10.0399 9.58212 8.63599 9.58212 6.91083C9.58212 5.18566 8.17856 3.78175 6.45305 3.78175ZM6.45305 9.34455C5.11137 9.34455 4.01932 8.25285 4.01932 6.91083C4.01932 5.5688 5.11137 4.4771 6.45305 4.4771C7.79473 4.4771 8.88677 5.5688 8.88677 6.91083C8.88677 8.25285 7.79473 9.34455 6.45305 9.34455Z"
                    fill="#2A1C4D"
                    stroke="#2A1C4D"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="hidden lg:flex flex-1 max-w-lg mx-6">
            <input
              type="text"
              placeholder="Search Product, type or brand"
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 text-sm"
            />
          </div>

          {/* Icons */}
          <div className="flex items-center gap-2 md:gap-3">
            {["❤️", "🛒", "👤"].map((icon, i) => (
              <button
                key={i}
                className="w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-green-500 flex items-center justify-center hover:bg-green-50 text-lg"
              >
                {icon}
              </button>
            ))}

            {/* Hamburger */}
            <button
              className="lg:hidden ml-2 text-2xl"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav
        className={`bg-green-50 sticky top-[64px] z-40 transition-all duration-300 ${
          isSticky ? "top-[56px]" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 hidden lg:flex justify-between items-center py-2 text-sm">
          {/* EV Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => !isMobileView && setActiveDropdown("ev")}
            onMouseLeave={() => !isMobileView && setActiveDropdown(null)}
          >
            <span className="cursor-pointer font-medium hover:text-green-600 text-[#2a1c4d] flex items-center">
              EV Scooters ▾
            </span>
            {activeDropdown === "ev" && (
              <div className="absolute left-0 top-full bg-white shadow-lg mt-2 rounded w-48 text-gray-800 z-50">
                {evScootersOptions.map((item, idx) => (
                  <a
                    key={idx}
                    href="#ev-and-rts"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Solar Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("solar")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <span className="cursor-pointer font-medium hover:text-green-600 text-[#2a1c4d] flex items-center">
              Rooftop Solar ▾
            </span>
            {activeDropdown === "solar" && (
              <div className="absolute left-0 top-full bg-white shadow-lg mt-2 rounded w-48 text-gray-800 z-50">
                {rooftopSolarOptions.map((item, idx) => (
                  <a
                    key={idx}
                    href="#ev-and-rts"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Static Links */}
          {staticLinks.map((link, idx) => (
            <a
              key={idx}
              href={`#${link.id}`}
              className="font-medium hover:text-green-600 text-[#2a1c4d]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-6 py-4 text-sm space-y-4">
          {/* EV Dropdown */}
          <div>
            <button
              className="w-full text-left font-medium text-[#2a1c4d] hover:text-green-600"
              onClick={() => toggleDropdown("ev")}
            >
              EV Scooters {activeDropdown === "ev" ? "▴" : "▾"}
            </button>
            {activeDropdown === "ev" && (
              <ul className="pl-4 mt-1 space-y-1 text-gray-700">
                {evScootersOptions.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      onClick={(e) => e.stopPropagation()}
                      className="block py-1 hover:text-green-600"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Solar Dropdown */}
          <div>
            <button
              className="w-full text-left font-medium text-[#2a1c4d] hover:text-green-600"
              onClick={() => toggleDropdown("solar")}
            >
              Rooftop Solar {activeDropdown === "solar" ? "▴" : "▾"}
            </button>
            {activeDropdown === "solar" && (
              <ul className="pl-4 mt-1 space-y-1 text-gray-700">
                {rooftopSolarOptions.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href="#ev-and-rts"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setActiveDropdown(null);
                      }}
                      className="block py-1 hover:text-green-600"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Static Links in mobile */}
          {staticLinks.map((link, idx) => (
            <a
              key={idx}
              href={`#${link.id}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block font-medium text-[#2a1c4d] hover:text-green-600"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
