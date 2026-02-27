import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";
import SectionHeader from "../Common/SectionHeader";

const Skills = () => (
  <section
    id="skills"
    className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-[#1B211A] clip-path-custom"
  >
    <SectionHeader 
      title="SKILLS" 
      description="A collection of my technical skills and expertise honed through various projects and experiences"
    />

    {/* Skill Categories */}
    <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="bg-darkGrey backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-olive 
          shadow-[0_0_20px_1px_rgba(140,136,96,0.3)]"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold font-manrope text-beige mb-4 text-center">
            {category.title}
          </h3>

          {/* Skill Items - 3 per row on larger screens */}
          <Tilt
            key={category.title}
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-center space-x-2 bg-transparent border-2 border-olive rounded-3xl py-2 px-2 sm:py-2 sm:px-2 text-center"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-6 h-6 sm:w-8 sm:h-8"
                  />
                  <span className="text-xs sm:text-sm text-beige">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </Tilt>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
