import PropTypes from 'prop-types';

const FormInput = ({ type = "text", name, placeholder, required = false, rows }) => {
  const baseClass = "w-full p-3 rounded-md bg-[#1B211A] text-beige border border-olive focus:outline-none focus:border-lightOlive placeholder-olive-50";

  if (type === "textarea") {
    return (
      <textarea
        name={name}
        placeholder={placeholder}
        rows={rows || 4}
        required={required}
        className={baseClass}
      />
    );
  }

  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      className={baseClass}
    />
  );
};

FormInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  rows: PropTypes.number,
};

export default FormInput;
