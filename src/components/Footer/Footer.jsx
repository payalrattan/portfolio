import PropTypes from 'prop-types';
import {
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { textStyles } from '../../config/textStyles';

const Footer = ({ setActiveSection }) => {
  // Set active section function
  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <footer className="text-beige py-8 px-[12vw] md:px-[7vw] lg:px-[20vw] bg-[#1B211A] border-t border-olive">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className={textStyles.heading.h4 + " text-lightOlive"}>Payal Rattan</h2>

        {/* Navigation Links - Responsive */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
            { name: "Contact", id: "contact" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleSectionClick(item.id)}
              className={textStyles.link.default + " my-1"}
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/payal-rattan/",
            },
            {
              icon: <FaGithub />,
              link: "https://github.com/payalrattan/portfolio",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-olive transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-beige-80 mt-6">
          © 2025 Payal Rattan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  setActiveSection: PropTypes.func.isRequired,
};

export default Footer;
