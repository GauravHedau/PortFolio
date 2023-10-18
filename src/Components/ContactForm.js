import React from "react";
import { BiSolidUser } from "react-icons/bi";
import { FaTelegramPlane, FaFacebookSquare } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";

const ContactForms = () => {
  return (
    <div className="flex flex-col gap-8 items-center justify-center">
      <div className="flex flex-col items-center justify-center mt-10">
        <h1 className=" text-4xl font-semibold tracking-wide text-teal-600">
          Contact me
        </h1>
        <div className="flex items-baseline gap-2">
          <div className="w-8 h-1 bg-teal-600"></div>
          <p className="text-2xl ">get in touch</p>
          <div className="w-8 h-1 bg-teal-600"></div>
        </div>
      </div>

      <div className="flex justify-evenly items-start w-full flex-wrap ">
        <div className="flex flex-col gap-6 m-10">
          <h1 className="text-2xl font-bold">Get in Touch</h1>
          <div className="flex items-center gap-4 ">
            <div>
              <BiSolidUser className="text-3xl text-teal-600" />
            </div>
            <div>
              <p className="font-bold text-lg">Name</p>
              <p className="text-sm">Gaurav Hedau</p>
            </div>
          </div>
          <div className="flex items-center gap-4 ">
            <div>
              <FaLocationDot className="text-3xl text-teal-600" />
            </div>
            <div>
              <p className="font-bold text-lg">Address</p>
              <p className="text-sm">Akurdi Pune</p>
            </div>
          </div>
          <div className="flex items-center gap-4 ">
            <div>
              <MdEmail className="text-3xl text-teal-600" />
            </div>
            <div>
              <p className="font-bold text-lg">Email</p>
              <p className="text-sm">gauravhedau29@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-6 ">
            <a
              href="https://www.instagram.com/gaurav_hedau_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsInstagram className="text-3xl text-red-600" />
            </a>
            
            <a
              href="https://twitter.com/GauravHedau17"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTwitter className="text-3xl text-blue-600" />
            </a>
            <a
              href="https://wa.me/8483024931"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsWhatsapp className="text-3xl text-green-600" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100014980294244"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare className="text-3xl text-blue-600" />
            </a>
            <a
              href="https://t.me/gauravhedau"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegramPlane className="text-3xl text-blue-300" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-6 m-10">
          <h1 className="text-2xl font-bold">Message Me</h1>
          <div className="flex gap-8">
            <input
              type="text"
              required
              placeholder="Name"
              className="w-[50%] border text-black border-gray-400 p-2 rounded-md"
            />
            <input
              type="email"
              required
              placeholder="Email"
              className="w-[50%] border text-black border-gray-400 p-2 rounded-md"
            />
          </div>
          <input
            type="text"
            required
            placeholder="Subject"
            className="w-full border text-black border-gray-400 p-2 rounded-md"
          />
          <input
            type="text"
            required
            placeholder="Message"
            className="w-full h-20 border text-black border-gray-400 p-2 rounded-md"
          />
          <div className="flex w-40 p-2 rounded-md bg-teal-600 text-white gap-1">
            <FaTelegramPlane className="text-3xl" />
            <button>Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForms;
