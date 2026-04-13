import PropTypes from 'prop-types';
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Set active section function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled
          ? "bg-black/95 backdrop-blur-md shadow-lg border-b border-olive/50"
          : "bg-black/20 backdrop-blur-sm"
      }`}
      style={{ WebkitBackdropFilter: "blur(6px)", backdropFilter: "blur(6px)" }}
    >
      <div className="text-white py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-semibold font-['Spartan'] cursor-pointer" onClick={() => setActiveSection("about")}>
          <span className="text-olive">&lt;</span>
          <span className="text-white">Payal</span>
          <span className="text-olive">/</span>
          <span className="text-white">Rattan</span>
          <span className="text-olive">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white/80 text-base md:text-lg font-['Merriweather'] hover:text-white transition-colors">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-olive transition-colors ${
                activeSection === item.id ? "text-olive font-semibold" : ""
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/payalrattan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-olive transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/payal-rattan/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-olive transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-olive cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-olive cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-black/95 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden border border-olive/50">
          <ul className="flex flex-col items-center space-y-4 py-4 text-white/80 text-base font-['Merriweather']">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-olive transition-colors ${
                  activeSection === item.id ? "text-olive font-semibold" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex space-x-4">
              <a
                href="https://github.com/payalrattan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-olive transition-colors"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/payal-rattan/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-olive transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  activeSection: PropTypes.string.isRequired,
  setActiveSection: PropTypes.func.isRequired,
};

export default Navbar;
