import React from "react";
import { FaGraduationCap, FaSchool } from "react-icons/fa";
import { BiSolidSchool } from "react-icons/bi";

const Education = () => {
  return (
    <section className="education my-14 py-14 ">
      <div className="max-width">
        <h2 className="title tracking-wide">My Education</h2>
        <div className="serv-content flex gap-4 items-center justify-center">
          <div className="card" data-aos="fade-right">
            <div className="box eng flex items-center flex-col justify-between">
              <FaGraduationCap className="i text-6xl" />
              <div className="text">Engineering</div>
              <p>Dr. DYPCOE, Akurdi Pune</p>
              <p>persuing last Year with 8.2 CGPA</p>
            </div>
          </div>
          <div className="card" data-aos="fade-up">
            <div className="box  flex items-center flex-col justify-between">
              <BiSolidSchool className="i text-6xl" />
              <div className="text">Junior College</div>
              <p>New English Junior College, Wardha </p>
              <p>Completed with 82% </p>
            </div>
          </div>
          <div className="card" data-aos="fade-left">
            <div className="box  flex items-center flex-col justify-between">
              <FaSchool className="i text-6xl" />

              <div className="text">Schooling</div>
              <p>New English Convent, Wardha</p>
              <p>Completed with 86% </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
