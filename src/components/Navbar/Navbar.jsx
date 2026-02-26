import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
          ? "bg-[#f5f5f5] bg-opacity-85 backdrop-blur-md shadow-md border-b border-gray-300"
          : "bg-gradient-to-r from-[#f5f5f5]/10 to-transparent backdrop-blur-sm"
      }`}
      style={{ WebkitBackdropFilter: "blur(6px)", backdropFilter: "blur(6px)" }}
    >
      <div className="text-[#1f2937] py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-semibold cursor-pointer">
          <span className="text-[#2563eb]">&lt;</span>
          <span className="text-[#1f2937]">Payal</span>
          <span className="text-[#2563eb]">/</span>
          <span className="text-[#1f2937]">Rattan</span>
          <span className="text-[#2563eb]">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-[#6b7280] text-base md:text-lg">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#2563eb] ${
                activeSection === item.id ? "text-[#2563eb]" : ""
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
            className="text-[#6b7280] hover:text-[#2563eb]"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/payal-rattan/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6b7280] hover:text-[#2563eb]"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#2563eb] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#2563eb] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#f5f5f5] bg-opacity-95 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-[#6b7280] text-base">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-[#1f2937] ${
                  activeSection === item.id ? "text-[#2563eb]" : ""
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
                className="text-[#6b7280] hover:text-[#1f2937]"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/payal-rattan/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6b7280] hover:text-[#1f2937]"
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
