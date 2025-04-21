import { useEffect, useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import logo from "../assets/datalogo.png";

// Define navigation items as a constant array for easier maintenance
const NAV_ITEMS = [
  { href: "#home", label: "Home" },
  { href: "#courses", label: "Courses" },
  { href: "#about", label: "About Us" },
  { href: "#testimonials", label: "Testimonials" },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scrolling effects
  useEffect(() => {
    const handleScroll = () => {
      // Update header styling based on scroll position
      setIsScrolled(window.scrollY > 10);

      // Update active section based on scroll position
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the section top is near the viewport top, set it as active
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    if (!isMenuOpen) return;

    const closeMenu = () => setIsMenuOpen(false);
    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [isMenuOpen]);

  // Handle navigation click
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4 md:py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img
            src={logo}
            alt="DataPoint Logo"
            className="h-10 md:h-12 w-auto object-contain"
          />
          <div
            className={`font-bold text-2xl md:text-3xl ${
              isScrolled ? "text-blue-600" : "text-white"
            }`}
          >
            DataPoint
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href.substring(1))}
              className={`px-3 py-2 rounded-md transition-colors duration-300 ${
                activeSection === item.href.substring(1)
                  ? "text-blue-600 font-semibold"
                  : `${
                      isScrolled ? "text-gray-800" : "text-white"
                    } hover:text-blue-500 font-medium`
              }`}
            >
              {item.label}
            </a>
          ))}
          <button className="ml-4 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md font-medium transition-all duration-300 transform hover:scale-105">
            Get Started
          </button>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={(e) => {
            e.stopPropagation();
            setIsMenuOpen(!isMenuOpen);
          }}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <BiX
              size={28}
              className={isScrolled ? "text-gray-800" : "text-white"}
            />
          ) : (
            <BiMenu
              size={28}
              className={isScrolled ? "text-gray-800" : "text-white"}
            />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 z-50 overflow-hidden transition-all duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="container mx-auto px-4 py-3 flex flex-col">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href.substring(1))}
                className={`py-3 px-4 rounded-md ${
                  activeSection === item.href.substring(1)
                    ? "bg-blue-50 text-blue-600 font-semibold"
                    : "text-gray-800 hover:bg-gray-50 font-medium"
                }`}
              >
                {item.label}
              </a>
            ))}
            <button className="mt-4 mb-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
