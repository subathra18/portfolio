import React from "react";
import Project from "./ProjectN";
import Pomodoro from "../assets/pomodoro.png";
import MessageCopy from "../assets/MessageCopy.png";
import Madlib from "../assets/Madlib.png";
import ImageLibrary from "../assets/imageLibrary.png";

const Projects = () => {
  const list = [
    {
      name: "MessageCopy",
      url: "https://majestic-meerkat-ce4c22.netlify.app",
      image: MessageCopy,
      github: "https://github.com/subathra18/MessageCopy",
      title: "Message Copy",
      text: "A website for all your messaging needs",
    },
    {
      name: "pomodoro",
      url: "https://elegant-kleicha-aac618.netlify.app",
      image: Pomodoro,
      github: "https://github.com/subathra18/pomodoro",
      title: "POMODORO App",
      text: "Website that helps you with timed tasks",
    },
    {
      name: "Image Library",
      url: "https://genuine-daifuku-6cd0b3.netlify.app",
      image: ImageLibrary,
      github: "https://github.com/subathra18/imageLibrary",
      title: "Image Library",
      text: "An image search app",
    },
    {
      name: "Madlib",
      url: "https://singular-kashata-a1029d.netlify.app",
      image: Madlib,
      github: "https://github.com/subathra18/madlibPoem",
      title: "Madlib",
      text: "Pens a poem from your inputs",
    },
  ];
  return (
    <div name="skills" className="w-full  bg-[#112138] text-gray-300">
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
              return <Project key={index} {...item}></Project>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
