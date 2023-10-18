import React from "react";

import EachProject from "./EachProject";

const Projects = ({projects}) => {
 
  return (
    <div className="flex flex-col gap-8 items-center justify-center bg-black">
      <div className="flex flex-col items-center justify-center mt-10">
        <h1 className="text-white text-4xl font-semibold tracking-wide">
          My Projects
        </h1>
        <div className="flex items-baseline gap-2">
          <div className="w-8 h-1 bg-white"></div>
          <p className="text-2xl text-teal-600">what I do</p>
          <div className="w-8 h-1 bg-white"></div>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-evenly gap-6 m-16 text-white">
        {projects.map((project) => (
          <EachProject key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
