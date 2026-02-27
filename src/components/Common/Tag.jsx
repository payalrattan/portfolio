const Tag = ({ label }) => {
  return (
    <span className="inline-block bg-olive-30 text-xs font-semibold text-beige rounded-full px-2 py-1 mr-2 mb-2 border border-olive">
      {label}
    </span>
  );
};

export default Tag;
