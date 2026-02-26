import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile.jpg";
import Button from "../Common/Button";

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-8 md:mt-12 lg:mt-16"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl font-bold text-[#1f2937] mb-2 leading-tight">
            Hi, I am Payal Rattan
          </h1>

          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#2563eb] leading-tight md:whitespace-nowrap">
            <span className="text-[#1f2937]">I am a&nbsp;</span>
            <ReactTypingEffect
              text={["Fullstack Developer", "Problem Solver", "Code Enthusiast"]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#2563eb]">{cursor}</span>
              )}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-[#6b7280] mb-10 mt-8 leading-relaxed">
            I'm Payal Rattan, a passionate Fullstack Developer crafting responsive, user-friendly web solutions. Specialized in modern JavaScript, React, and Node.js, I transform complex problems into elegant code. When I'm not building, I'm exploring new technologies and best practices to stay ahead of the curve.
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
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 border-4 border-blue-500 rounded-full"
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
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
