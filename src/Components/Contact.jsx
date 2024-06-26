import React from "react";
import contact from "../assets/mail.svg";
import { FaMobileAlt } from "react-icons/fa";
import { IoMailUnreadOutline } from "react-icons/io5";
import { SiLinkedin } from "react-icons/si";
import { FiGithub } from "react-icons/fi";

const Contact = () => {
  return (
    <div className=" w-full h-screen text-gray-300 ">
      <div className="flex justify-center align-center w-full pt-12">
        <div className="text-4xl font-bold inline border-b-4 border-pink-600 ">
          Contact
        </div>
      </div>

      <div className=" h-5/6 grid grid-cols-1 lg:grid-cols-2  gap-12 ">
        <div className="flex hidden lg:flex  items-center justify-end  ">
          <img
            className="w-72 h-72 opacity-85 motion-safe:animate-slideBounce duration-300"
            src={contact}
          ></img>
        </div>

        <div className="flex items-center lg:items-start justify-center flex-col gap-10 font-primary">
          <span className="inline-flex gap-2 text-2xl ">
            <IoMailUnreadOutline className="w-8 h-8"></IoMailUnreadOutline>
            subathra.tce@gmail.com
          </span>
          <div>
            <span className="inline-flex gap-8">
              <p className="text-xl inline border-b-4 border-pink-600 ">
                Profiles:
              </p>
              <a href="https://www.linkedin.com/in/subathra-ramakrishnan-66122828/">
                <SiLinkedin className="w-8 h-8"></SiLinkedin>
              </a>
              <a href="https://github.com/subathra18">
                <FiGithub className="w-8 h-8"></FiGithub>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
