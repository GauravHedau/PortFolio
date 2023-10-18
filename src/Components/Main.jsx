import React, { useEffect, useRef } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";
import Typed from "typed.js";

const Main = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Full Stack Developer",
        "Web Developer",
        "UI-UX Designer",
        "Backend Developer",
        "Coder",
      ],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1000,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="w-full  flex flex-col items-center justify-center gap-3  my-10 ">
      <h2 class="text-5xl  text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
        Gaurav Hedau
      </h2>
      <div className="text-3xl font-semibold flex items-center gap-1">
        <span ref={typedRef}></span>
      </div>
      <p className="text-md py-5 leading-8 max-w-xl mx-auto md:text-xl text-center">
        Hi! I worked as a software developer intern at Reclimate with 2 months
        of IT industry experience and have a decent knowledge of building and
        managing web applications. I am seeking an internship or job role where
        I can contribute my skills toward company success.
      </p>
      <div>
        <ul className="flex gap-4 items-center justify-center">
          <li className="p-3 rounded-full flex text-white bg-gray-500 items-center justify-center transition duration-300 ease-in-out hover:scale-110 hover:bg-teal-400">
            <a
              href="https://linkedin.com/in/gaurav-hedau-2332661a6"
              target="_blank"
            >
              <FaLinkedinIn className="text-xl hover:text-blue-500" />
            </a>
          </li>
          <li className="p-3 rounded-full flex text-white bg-gray-500 items-center justify-center transition duration-300 ease-in-out hover:scale-110 hover:bg-teal-400">
            <a href="https://github.com/GauravHedau" target="_blank">
              <AiFillGithub className="text-xl hover:text-black" />
            </a>
          </li>
          <li className="p-3 rounded-full flex text-white bg-gray-500 items-center justify-center transition duration-300 ease-in-out hover:scale-110 hover:bg-teal-400">
            <a
              href="https://auth.geeksforgeeks.org/user/gauravh1urq"
              target="_blank"
            >
              <SiGeeksforgeeks className="text-xl hover:text-green-500" />
            </a>
          </li>

          <li className="p-3 rounded-full flex text-white bg-gray-500 items-center justify-center transition duration-300 ease-in-out hover:scale-110 hover:bg-teal-400">
            <a href="https://leetcode.com/gauravhedau/" target="_blank">
              <SiLeetcode className="text-xl hover:text-yellow-500" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Main;
