import React from "react";
import Project from "./Project";
import dummy from "../assets/dummy.jpg";

const Projects = () => {
  const list = [
    {
      name: "pomodoro",
      url: "https://github.com/subathra18?tab=repositories",
      image: dummy,
      github: "https://github.com/subathra18?tab=repositories",
      title: "pomodoro title",
      text: "pomodoro text",
    },
    {
      name: "pomodoro",
      url: "https://github.com/subathra18?tab=repositories",
      image: dummy,
      github: "https://github.com/subathra18?tab=repositories",
      title: "pomodoro title",
      text: "pomodoro text",
    },
    {
      name: "pomodoro",
      url: "https://github.com/subathra18?tab=repositories",
      image: dummy,
      github: "https://github.com/subathra18?tab=repositories",
      title: "pomodoro title",
      text: "pomodoro text",
    },
    {
      name: "pomodoro",
      url: "https://github.com/subathra18?tab=repositories",
      image: dummy,
      github: "https://github.com/subathra18?tab=repositories",
      title: "pomodoro title",
      text: "pomodoro text",
    },
  ];
  return (
    <div name="skills" className="w-full  bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full ">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Projects
          </p>
          <div
            className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-16 pt-10"
            style={{ "--delay": 1 * 0.55 + "s" }}
          >
            {list.map((item, index) => {
              return <Project id={index} {...item}></Project>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
