import React from "react";
import { BiCopyright } from "react-icons/bi";
import GauravWhite from "../assest/whitegaurav.png";

const Footer = ({ dark }) => {
  return (
    <div className="flex items-center justify-evenly p-4 bg-black">
      <div>
        <img
          src={GauravWhite}
          alt="gauravImage"
          width={200}
        />
      </div>
      <div className="flex gap-4 items-center">
        <p className="font-semibold text-teal-600">PortFolio</p>
        <p className="font-semibold text-teal-600">|</p>
        <BiCopyright className="text-xl text-teal-600" />
      </div>
    </div>
  );
};

export default Footer;
