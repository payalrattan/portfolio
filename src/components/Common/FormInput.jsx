const FormInput = ({ type = "text", name, placeholder, required = false, rows }) => {
  const baseClass = "w-full p-3 rounded-md bg-gray-50 text-[#1f2937] border border-gray-300 focus:outline-none focus:border-[#2563eb]";

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

export default FormInput;
