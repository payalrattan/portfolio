import PropTypes from 'prop-types';

const Button = ({ children, href, onClick, type = "button", variant = "primary" }) => {
  const baseClass = `py-3 px-8 rounded-full transition duration-300 transform hover:scale-110 font-semibold text-sm md:text-base`;

  const variants = {
    primary: "bg-olive hover:bg-lightOlive text-white shadow-lg hover:shadow-olive/50",
    secondary: "bg-transparent border-2 border-olive text-olive hover:bg-olive hover:text-white",
    gradient: "text-white bg-gradient-to-r from-olive to-lightOlive hover:from-lightOlive hover:to-olive shadow-lg hover:shadow-lightOlive/50",
  };

  const buttonClass = `${baseClass} ${variants[variant]}`;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClass}
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
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  variant: PropTypes.string,
};

export default Button;
