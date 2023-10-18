import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { ImCross } from "react-icons/im";

const EachProject = ({
  image,
  title,
  githubLink,
  liveLink,
  description,
  TechUsed,
}) => {
  const [liked, setLiked] = useState(false);

  function toogleliked() {
    setLiked(!liked);

    !liked
      ? toast.success("Thanks for your feedback")
      : toast.error("Liked remove");
  }
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="bg-[#222] flex flex-col items-center w-[300px] h-[400px] rounded-lg cursor-pointer hover:scale-110 text-center overflow-hidden transition-all duration-300 ease-in relative hover:bg-teal-600 hover:font-semibold">
        <div
          className="bg-white p-1.5 rounded-full absolute top-2 text-2xl right-4"
          onClick={toogleliked}
        >
          {liked ? <FcLike /> : <FcLikePlaceholder />}
        </div>
        <img src={image} alt="projectIMage" className="w-full" />
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-xl font-semibold mt-2 m-0.5 ">{title}</h1>
          <p className="text-xs mx-4">{description.substring(1, 80)}...</p>
          <div className="flex justify-center items-center gap-8 text-2xl">
            <a
              className="p-2 bg-gray-400 rounded-full text-black transition duration-300 ease-in-out hover:scale-110 hover:bg-teal-400"
              href={githubLink}
              target="blank"
            >
              <AiFillGithub />
            </a>
            <a
              className="p-2 bg-gray-400 rounded-full text-black transition duration-300 ease-in-out hover:scale-110 hover:bg-teal-400"
              href={liveLink}
              target="blank"
            >
              <AiOutlineLink />
            </a>
          </div>
          <div className="w-fit p-2 px-3 rounded-full text-sm border-white border mb-4 transition duration-300 ease-in-out hover:scale-110 hover:bg-gray-400">
            <button onClick={openModal}>View Detail</button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] bg-gray-700 text-white mx-auto rounded shadow-lg z-50 overflow-y-auto">
            <div className="text-left p-4 sm:p-8 mb-4 sm:mb-10">
              {/* Modal Header */}
              <div className="flex justify-between items-center pb-2 sm:pb-6">
                <p className="text-2xl sm:text-4xl font-bold text-teal-600">
                  Project Details
                </p>
                <ImCross className="cursor-pointer" onClick={closeModal} />
              </div>

              {/* card detail  */}
              <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-6">
                <div className="w-full sm:w-[60%] flex flex-col justify-between gap-2 sm:gap-6">
                  <h1 className="text-lg sm:text-2xl font-semibold">{title}</h1>
                  <div className="flex items-center gap-2 sm:gap-8 text-lg sm:text-2xl">
                    <a
                      className="p-2 bg-white border-2 border-teal-400 rounded-full text-black transition duration-300 ease-in-out hover:scale-110 hover:bg-teal-400"
                      href={githubLink}
                      target="blank"
                    >
                      <AiFillGithub />
                    </a>
                    <a
                      className="p-2 bg-white border-2 border-teal-400 rounded-full text-black transition duration-300 ease-in-out hover:scale-110 hover:bg-teal-400"
                      href={liveLink}
                      target="blank"
                    >
                      <AiOutlineLink />
                    </a>
                  </div>
                  <p className="text-xs sm:text-sm">{description}</p>
                  <div className="flex flex-col gap-2 sm:gap-4">
                    <h1 className="text-lg sm:text-2xl font-semibold">
                      Tech Used
                    </h1>
                    <div className="flex gap-2 sm:gap-4">
                      {TechUsed.map((item, index) => (
                        <div className="flex items-center justify-center cursor-pointer p-2 rounded-full bg-white border-2 border-teal-400 transition duration-300 ease-in-out hover:scale-110 hover:bg-teal-400">
                          <img
                            src={item}
                            key={index}
                            alt="imagge"
                            width={25}
                            className="m-0.5"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-[40%]">
                  <img
                    className="rounded-xl border-teal-600 border-2 transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
                    src={image}
                    alt="projectImage"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EachProject;
