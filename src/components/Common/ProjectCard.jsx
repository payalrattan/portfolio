import PropTypes from 'prop-types';
import Tag from "./Tag";
import { textStyles } from '../../config/textStyles';

const ProjectCard = ({ project, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="border border-olive/50 bg-gray-900/50 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-olive/30 hover:-translate-y-2 transition-all duration-300 hover:border-olive"
    >
      <div className="p-4">
        <div className="overflow-hidden rounded-3xl bg-[#111319] shadow-lg border border-olive/20">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover"
          />
        </div>
      </div>
      <div className="p-6">
        <h3 className={textStyles.heading.h4 + " mb-2 text-olive"}>
          {project.title}
        </h3>
        <p className={textStyles.body.small + " mb-4 pt-4 line-clamp-3 text-lightOlive"}>
          {project.description}
        </p>
        <div className="mb-4">
          {project.tags.map((tag, index) => (
            <Tag key={index} label={tag} />
          ))}
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ProjectCard;
