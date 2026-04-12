import { useState } from "react";
import { projects } from "../../constants";
import SectionHeader from "../Common/SectionHeader";
import ProjectCard from "../Common/ProjectCard";
import { textStyles } from '../../config/textStyles';

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="work"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      <SectionHeader
        title="PROJECTS"
        description="A showcase of the projects I have worked on, highlighting my skills and experience in various technologies"
      />

      {/* Projects Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard 
            key={project.id}
            project={project}
            onClick={() => handleOpenModal(project)}
          />
        ))}
      </div>

      {/* Modal Container */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <div className="bg-darkGrey rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative border border-olive">
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="text-beige text-3xl font-bold hover:text-olive"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col">
              <div className="w-full flex justify-center bg-[#1B211A] px-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="lg:w-full w-[95%] object-contain rounded-xl shadow-2xl"
                />
              </div>
              <div className="lg:p-8 p-6">
                <h3 className={textStyles.heading.h3 + " mb-4 text-olive"}>
                  {selectedProject.title}
                </h3>
                <p className={textStyles.body.small + " mb-6 text-lightOlive"}>
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={textStyles.label.default + " bg-olive-30 text-beige rounded-full px-2 py-1 border border-olive"}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-beige hover:bg-lightOlive text-darkGrey lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center transition-colors"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-olive hover:bg-darkGrey text-white lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center transition-colors"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
