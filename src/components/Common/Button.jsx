const Button = ({ children, href, onClick, type = "button", variant = "primary" }) => {
  const baseClass = "py-3 px-8 rounded-full font-bold transition duration-300 transform hover:scale-105 w-full";
  
  const variants = {
    primary: "bg-[#2563eb] hover:bg-blue-700 text-white",
    secondary: "bg-gray-200 hover:bg-gray-300 text-[#1f2937]",
    gradient: "text-white",
  };

  const buttonClass = `${baseClass} ${variants[variant]}`;

  // Gradient style for primary button with shadow
  const gradientStyle = variant === "gradient" ? {
    background: "linear-gradient(90deg, #2563eb, #2563eb)",
    boxShadow: "0 0 2px #2563eb, 0 0 2px #2563eb, 0 0 40px #2563eb",
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
