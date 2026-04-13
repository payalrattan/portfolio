
import { useState } from "react";
import MatterBackground from "./components/MatterBackground";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [activeSection, setActiveSection] = useState("about");

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <About />;
      case "skills":
        return <Skills />;
      case "work":
        return <Work />;
      case "education":
        return <Education />;
      case "contact":
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className="bg-black min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:20px_20px] opacity-10"></div>
      <div className="absolute inset-0 pointer-events-none z-0">
        <MatterBackground />
      </div>
      <div className="relative z-10 pt-20">
        <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
        {renderSection()}
        <Footer setActiveSection={setActiveSection} />
      </div>
    </div>
  );
};

export default App;
