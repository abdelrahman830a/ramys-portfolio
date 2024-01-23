import React from "react";
import { motion } from "framer-motion";
const Services = () => {
  return (
    <div
      className="transition duration-300 ease-in-out dark:bg-slate-800 relative px-10 flex"
      id="services">
      <div className="container mx-auto py-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-3">
          <h1 className="text-indigo-600 font-bold">Services</h1>
          <h1 className="transition duration-300 ease-in-out text-3xl dark:text-white">
            What do I offer
          </h1>
          <p className="transition duration-300 ease-in-out dark:text-gray-300 md:w-1/2 text-center text-gray-400">
            I offer a wide range of services to help you achieve your goals. I
            am here to help you build your next product, improve your current
            product, or learn new skills.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex md:flex-nowrap flex-wrap p-5">
          <div className="transition duration-300 ease-in-out m-1 dark:bg-gray-900 w-full md:w-4/12 shadow-xl p-5 flex flex-col gap-3 hover:shadow-indigo-200">
            <img src="/assets/icon.png" alt="icon" className="w-10" />
            <h1 className="transition duration-300 ease-in-out font-medium text-lg dark:text-white">
              Front End Development
            </h1>
            <p className="transition duration-300 ease-in-out text-gray-500 dark:text-gray-300">
              As a front-end developer, I offer expertise in creating visually
              appealing and interactive user interfaces. I specialize in
              utilizing modern web technologies such as HTML, CSS, and
              JavaScript and React to bring designs to life.
            </p>
          </div>
          <div className="m-1 transition duration-300 ease-in-out  dark:bg-gray-900 w-full md:w-4/12 shadow-xl p-5 flex flex-col gap-3 hover:shadow-indigo-200">
            <img src="/assets/icon.png" alt="icon" className="w-10" />
            <h1 className="transition duration-300 ease-in-out font-medium text-lg dark:text-white">
              Problem Solving
            </h1>
            <p className="transition duration-300 ease-in-out text-gray-500 dark:text-gray-300">
              I am an avid problem solver with a strong background in C++. I
              regularly train on platforms like Codewars and LeetCode, which has
              helped me to sharpen my skills and learn new techniques.
            </p>
          </div>
          <div className="transition duration-300 ease-in-out m-1 dark:bg-gray-900 w-full md:w-4/12 shadow-xl p-5 flex flex-col gap-3 hover:shadow-indigo-200">
            <img src="/assets/icon.png" alt="icon" className="w-10" />
            <h1 className="transition duration-300 ease-in-out dark:text-white font-medium text-lg">
              Teaching
            </h1>
            <p className="transition duration-300 ease-in-out dark:text-gray-300 text-gray-500">
              I am also a content creator on YouTube, where I share my coding
              knowledge and experiences. My passion for teaching has led me to
              create educational content that complements university studies,
              helping my peers to grow and learn in a practical, engaging way.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
