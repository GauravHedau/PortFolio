import React, { useState, useRef } from "react";
import Heading from "./Components/Heading";
import Main from "./Components/Main";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import ContactForm from "./Components/ContactForm";
import Footer from "./Components/Footer";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { skills, projects } from "./data";

const App = () => {
  const [dark, setDark] = useState(false);
  const sectionRef = useRef(null);

  const scrollToSection = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div ref={sectionRef} className={dark ? "dark" : "white"}>
      <IoIosArrowDropupCircle
        className="text-6xl text-teal-600 fixed bottom-6 cursor-pointer right-6"
        onClick={scrollToSection}
      />
      <Heading dark={dark} setDark={setDark} />
      <Main />
      <Education />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <ContactForm />
      <Footer dark={dark} />
    </div>
  );
};

export default App;
