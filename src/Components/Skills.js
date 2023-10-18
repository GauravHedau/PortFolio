import React from "react";
import EachSkill from "./EachSkill";


const Skills = ({skills}) => {
  

  return (
    <div className="flex flex-col gap-8 items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-teal-600 text-4xl font-semibold tracking-wide">
          My Skills
        </h1>
        <div className="flex items-baseline gap-2">
          <div className="w-8 h-1 bg-teal-600"></div>
          <p className="text-2xl font">what I know</p>
          <div className="w-8 h-1 bg-teal-600"></div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 m-16">
        {skills.map((skill) => (
          <EachSkill key={skill.id} {...skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
