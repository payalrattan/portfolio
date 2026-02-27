const SectionHeader = ({ title, description }) => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl font-thin font-manrope tracking-tight text-beige">{title}</h2>
      <div className="w-32 h-1 bg-olive mx-auto mt-4"></div>
      <p className="text-lightOlive mt-4 text-base font-light font-sans leading-relaxed">{description}</p>
    </div>
  );
};

export default SectionHeader;
