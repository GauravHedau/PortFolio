import React from "react";
import GauravWhite from "../assest/whitegaurav.png";
import GauravDark from "../assest/gaurav.png";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { ImSun } from "react-icons/im";
import { toast } from "react-hot-toast";
import Resume from "../assest/resume.pdf";

const Heading = ({ dark, setDark }) => {
  function hanldeDarkMode() {
    setDark(!dark);
    toast.success(`switch to ${dark ? "light" : "dark"}`);
  }
  return (
    <div className="flex items-center justify-evenly p-8 gap-40">
      <div>
        <img
          src={dark ? GauravWhite : GauravDark}
          alt="gauravImage"
          width={200}
        />
      </div>
      <div className="flex gap-6 ">
        <button>
          {dark ? (
            <ImSun className="text-3xl" onClick={hanldeDarkMode} />
          ) : (
            <BsFillMoonStarsFill
              className="text-3xl"
              onClick={hanldeDarkMode}
            />
          )}
        </button>
        <a
          href={Resume}
          download="Gaurav Hedau Resume"
          target="_blank"
          rel="noreferrer"
        >
          <button className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md font-semibold">
            Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default Heading;
