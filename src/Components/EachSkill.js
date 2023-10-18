import React from "react";

const EachSkill = (props) => {
  const img = props.img;
  const title = props.title;

  return (
    <div className="shadow-md flex flex-col md:flex-row items-center gap-3 cursor-pointer p-3 px-4 transition duration-500 ease-in-out hover:scale-105 rounded-xl hover:bg-gray-500 hover:text-white">
      <img src={img} alt="skillimage" className="w-10 h-10 md:w-14 md:h-14" />
      <h1 className="text-lg md:text-2xl font-semibold text-center md:text-left">
        {title}
      </h1>
    </div>
  );
};

export default EachSkill;
