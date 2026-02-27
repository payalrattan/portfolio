import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { textStyles } from '../../config/textStyles';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled
          ? "bg-darkGrey bg-opacity-95 backdrop-blur-md shadow-md border-b border-olive"
          : "bg-gradient-to-r from-[#1B211A]/50 to-transparent backdrop-blur-sm"
      }`}
      style={{ WebkitBackdropFilter: "blur(6px)", backdropFilter: "blur(6px)" }}
    >
      <div className="text-beige py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-semibold font-manrope cursor-pointer">
          <span className="text-olive">&lt;</span>
          <span className="text-beige">Payal</span>
          <span className="text-olive">/</span>
          <span className="text-beige">Rattan</span>
          <span className="text-olive">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lightOlive text-base md:text-lg font-sans">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-beige transition-colors ${
                activeSection === item.id ? "text-beige font-semibold" : ""
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
            className="text-lightOlive hover:text-beige transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/payal-rattan/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lightOlive hover:text-beige transition-colors"
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
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-darkGrey bg-opacity-95 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden border border-olive">
          <ul className="flex flex-col items-center space-y-4 py-4 text-lightOlive text-base font-sans">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-beige transition-colors ${
                  activeSection === item.id ? "text-beige font-semibold" : ""
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
                className="text-lightOlive hover:text-beige transition-colors"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/payal-rattan/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lightOlive hover:text-beige transition-colors"
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

export default Navbar;
