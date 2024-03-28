import React from "react";
import avatar from "../assets/avatar.svg";
import Speciality from "./Speciality";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen ">
      <div className="w-72 h-72 pt-5 m-auto">
        <img src={avatar}></img>
      </div>
      <div className="max-w-[1000px] mx-auto px-8 pt-4 flex flex-col justify-center ">
        <p className="text-[#8892b0]">Hi, I'm</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-pink-500">
          Subathra
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          A Front-end Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">Specializing in ...</p>
      </div>
      <Speciality></Speciality>
    </div>
  );
};

export default Home;
