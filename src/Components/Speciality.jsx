import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.svg";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Redux from "../assets/redux.png";

const Speciality = () => {
  const specialities = [
    {
      skill: "JS",
      image: JavaScript,
    },
    {
      skill: "React",
      image: ReactImg,
    },
    {
      skill: "Redux",
      image: Redux,
    },
    {
      skill: "HTML",
      image: HTML,
    },
    {
      skill: "CSS",
      image: CSS,
    },
    {
      skill: "Tailwind",
      image: Tailwind,
    },
    {
      skill: "Github",
      image: GitHub,
    },
  ];
  return (
    <div className="mt-8">
      <div name="skills" className=" text-gray-300">
        <div className="max-w-[1000px] mx-auto  flex flex-col justify-center ">
          <div className="w-full grid grid-cols-4 sm:grid-cols-8 gap-2 text-center ">
            {specialities.map((item, index) => {
              const { skill, image } = item;
              return (
                <div
                  key={index}
                  className="animate-slideIn opacity-0 shadow-md shadow-[#040c16]"
                  style={{ "--delay": index * 0.55 + "s" }}
                >
                  <img
                    className="w-6 mx-auto"
                    src={image}
                    alt={`${skill} icon`}
                  />
                  <p className="my-2 uppercase">{skill}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speciality;
