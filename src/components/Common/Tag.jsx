import PropTypes from 'prop-types';

const Tag = ({ label }) => {
  return (
    <span className="inline-block bg-olive/20 text-xs font-semibold text-olive rounded-full px-3 py-1 mr-2 mb-2 border border-olive/50 hover:bg-olive hover:text-white transition-colors duration-200">
      {label}
    </span>
  );
};

Tag.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Tag;
