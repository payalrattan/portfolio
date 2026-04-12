import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile.jpg";
import MatterBackground from "../MatterBackground";
import Button from "../Common/Button";
import SectionHeader from "../Common/SectionHeader";
import { textStyles } from '../../config/textStyles';

const About = () => {
  return (
    <section
      id="about"
      className="relative py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-8 md:mt-12 lg:mt-16 overflow-hidden"
    >
      <MatterBackground />
      <SectionHeader
        title="ABOUT"
        description="Learn more about my work, values, and the kind of problems I love to solve."
      />
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className={textStyles.heading.h4 + " mb-2 text-olive"}>
            Hi, I am Payal Rattan
          </h1>

          {/* Skills Heading with Typing Effect */}
          <h3 className={textStyles.heading.h4 + " mb-4 text-olive md:whitespace-nowrap"}>
            <span className="text-lightOlive">I am a&nbsp;</span>
            <ReactTypingEffect
              text={["Fullstack Developer", "Problem Solver", "Code Enthusiast"]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-olive">{cursor}</span>
              )}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className={textStyles.body.small + " mb-10 mt-8 text-lightOlive"}>
            I&apos;m Payal Rattan, a passionate Fullstack Developer crafting responsive, user-friendly web solutions. Specialized in modern JavaScript, React, and Node.js, I transform complex problems into elegant code. When I&apos;m not building, I&apos;m exploring new technologies and best practices to stay ahead of the curve.
          </p>
          {/* Resume Button */}
          <Button 
            href="https://drive.google.com/file/d/1VdRGj2P--i4NteRVuyaHbwJGK1uNnaCP/view?usp=sharing"
            variant="gradient"
          >
            DOWNLOAD CV
          </Button>
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 border-4 border-olive rounded-full shadow-2xl shadow-olive/20"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Payal Rattan"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(140,136,96,0.45)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
