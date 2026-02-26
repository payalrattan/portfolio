const SectionHeader = ({ title, description }) => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-[#1f2937]">{title}</h2>
      <div className="w-32 h-1 bg-[#2563eb] mx-auto mt-4"></div>
      <p className="text-gray-600 mt-4 text-lg font-semibold">{description}</p>
    </div>
  );
};

export default SectionHeader;
