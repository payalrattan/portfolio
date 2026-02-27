import Tag from "./Tag";
import { textStyles } from '../../config/textStyles';

const ProjectCard = ({ project, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="border border-olive bg-darkGrey backdrop-blur-md rounded-2xl shadow-md overflow-hidden cursor-pointer hover:shadow-olive/50 hover:-translate-y-2 transition-transform duration-300"
    >
      <div className="p-4">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover rounded-xl"
        />
      </div>
      <div className="p-6">
        <h3 className={textStyles.heading.h3 + " mb-2"}>
          {project.title}
        </h3>
        <p className={textStyles.body.normal + " mb-4 pt-4 line-clamp-3"}>
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

export default ProjectCard;
