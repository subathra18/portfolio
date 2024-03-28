import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const Project = ({ image, github, url, title }) => {
  return (
    <div className="w-full h-full group relative overflow-hidden border-2 border-white/50 rounded-xl">
      <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
      <img
        src={image}
        className="h-full w-full group-hover:scale-125 transition-all duration-500"
      ></img>
      <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
        <span className="text-gradient">{title}</span>
      </div>
      <div className=" absolute -bottom-full left-12 group-hover:bottom-10 transition-all duration-700 z-50 ">
        <div className="flex gap-3">
          <a href={url}>
            <TbWorldWww className="h-8 w-8 text-white-500 hover:text-white-400 duration-300" />
          </a>
          <a href={github}>
            <FaGithubSquare className="h-8 w-8 text-white-500 hover:text-white-400 duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
