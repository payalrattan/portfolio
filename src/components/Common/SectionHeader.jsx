import PropTypes from 'prop-types';
import { textStyles } from '../../config/textStyles';

const SectionHeader = ({ title, description }) => {
  return (
    <div className="text-center mb-16">
      <h2 className={textStyles.section.title}>{title}</h2>
      <div className="w-32 h-1 bg-olive mx-auto mt-4"></div>
      <p className={textStyles.section.description + " mt-4"}>{description}</p>
    </div>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default SectionHeader;
