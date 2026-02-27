import { textStyles } from '../../config/textStyles';

const Button = ({ children, href, onClick, type = "button", variant = "primary" }) => {
  const baseClass = `py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 w-full ${textStyles.button.primary}`;
  
  const variants = {
    primary: "bg-olive hover:bg-darkGrey text-white",
    secondary: "bg-beige hover:bg-lightOlive text-darkGrey",
    gradient: "text-white",
  };

  const buttonClass = `${baseClass} ${variants[variant]}`;

  // Gradient style for primary button with shadow
  const gradientStyle = variant === "gradient" ? {
    background: "linear-gradient(90deg, #8C8860, #C3C186)",
    boxShadow: "0 0 2px #8C8860, 0 0 2px #8C8860, 0 0 40px #8C8860",
  } : {};

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClass}
        style={gradientStyle}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonClass}
      style={gradientStyle}
    >
      {children}
    </button>
  );
};

export default Button;
