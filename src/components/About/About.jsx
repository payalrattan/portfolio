import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile.jpg";
import Button from "../Common/Button";
import SectionHeader from "../Common/SectionHeader";
import { textStyles } from '../../config/textStyles';

const About = () => {
  return (
    <section
      id="about"
      className="relative py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-8 md:mt-12 lg:mt-16 overflow-hidden"
    >
      <SectionHeader
        title="About Me"
        description="Learn more about my work, values, and the kind of problems I love to solve."
      />
      <div className="relative overflow-hidden rounded-[2rem] border border-olive/20 bg-[#111416] bg-opacity-80 p-6 md:p-10 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.8)]">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_top_right,_rgba(140,136,96,0.20),_transparent_40%)]"></div>
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div className="space-y-6 relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-olive/30 bg-olive/10 px-4 py-2 text-sm text-lightOlive">
              <span className="h-2 w-2 rounded-full bg-olive"></span>
              Frontend Developer • React / Node.js
            </span>
            <h6 className={textStyles.heading.h2 + " text-white leading-tight md:text-[2.2rem] lg:text-[2.5rem]"}>
              {`Hi, I'm Payal`}
            </h6>
            <p className="text-base md:text-md text-lightOlive max-w-xl leading-relaxed text-justify">
              I came to coding from teaching, and that background shapes how I build - I care about interfaces that are clear, intuitive, and actually useful. I work with React, Node.js, and modern JavaScript to create responsive web apps that make sense to the people using them.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="https://drive.google.com/file/d/1NKfKgYBri0Dy-c8D2BDtH3yww_P72swo/view?usp=sharing" variant="gradient">
                Download CV
              </Button>
            </div>
          </div>
          <div className="relative z-10 flex justify-center md:justify-end">
            <Tilt
              className="w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 border-4 border-olive rounded-full shadow-2xl shadow-olive/20"
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
      </div>
    </section>
  );
};

export default About;
