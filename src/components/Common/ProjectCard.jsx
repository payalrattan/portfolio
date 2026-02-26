import Tag from "./Tag";

const ProjectCard = ({ project, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="border border-gray-300 bg-white backdrop-blur-md rounded-2xl shadow-md overflow-hidden cursor-pointer hover:shadow-blue-300/50 hover:-translate-y-2 transition-transform duration-300"
    >
      <div className="p-4">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover rounded-xl"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-[#1f2937] mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4 pt-4 line-clamp-3">
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
