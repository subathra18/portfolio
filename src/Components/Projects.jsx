import React from "react";
import Project from "./Project";
import { motion } from "framer-motion";
import { fadeIn } from "../anim";
import { ProjectList } from "../projectList";

const Projects = () => {
  return (
    <section className="font-primary h-screen  text-gray-300 flex items-center py-8 lg:py-24 px-10">
      <div className="mx-auto p-16">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-3 lg:gap-y-12 "
          >
            <div>
              <h2 className="h2 leading-tight text-pink-500 font-bold">
                My Work
              </h2>
              <p className="font-secondary max-w-sm lg:mb-16 tracking-wide text-xl">
                coded with React ,Redux ,Hooks,Tailwind
              </p>
            </div>
            <div className="lg:h-1/2 w-full flex flex-col lg:flex-row gap-y-3 gap-x-5">
              <Project {...ProjectList[0]}></Project>
              <Project {...ProjectList[1]}></Project>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="pt-5 flex-1 flex flex-col gap-y-3 lg:gap-10 "
          >
            <Project {...ProjectList[2]}></Project>
            <Project {...ProjectList[3]}></Project>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
