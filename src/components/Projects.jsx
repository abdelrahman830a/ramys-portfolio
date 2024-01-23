import { motion } from "framer-motion";
const Skills = () => {
  return (
    <div className=" transition duration-300 ease-in-out dark:bg-slate-800 relative px-10" id="projects">
      <div className="container mx-auto py-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-3">
          <h1 className="text-indigo-600 font-bold">Portfolio</h1>
          <h1 className="text-3xl transition duration-300 ease-in-out dark:text-white">Works & Projects</h1>
          <p className="transition duration-300 ease-in-out dark:text-gray-300 md:w-1/2 text-center text-gray-400">
            Here are some of my projects that I have worked on. I am always
            looking to learn new things and improve my skills. I am currently
            working on a few projects that I will be adding to this page soon.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        className="flex flex-wrap p-5 sm:p-0 justify-center">
          <div className="lg:w-1/5 m-1 w-full md:w-4/12 shadow-xl p-5 hover:shadow-indigo-200 transition duration-200 ease-in-out">
            <img src="/assets/item.png" alt="project" />
          </div>
          <div className="lg:w-1/5 m-1 w-full md:w-4/12 shadow-xl p-5 hover:shadow-indigo-200 transition duration-200 ease-in-out">
            <img src="/assets/item.png" alt="project" />
          </div>
          <div className="lg:w-1/5 m-1 w-full md:w-4/12 shadow-xl p-5 hover:shadow-indigo-200 transition duration-200 ease-in-out">
            <img src="/assets/item.png" alt="project" />
          </div>
          <div className="lg:w-1/5 m-1 w-full md:w-4/12 shadow-xl p-5 hover:shadow-indigo-200 transition duration-200 ease-in-out">
            <img src="/assets/item.png" alt="project" />
          </div>
          <div className="lg:w-1/5 m-1 w-full md:w-4/12 shadow-xl p-5 hover:shadow-indigo-200 transition duration-200 ease-in-out">
            <img src="/assets/item.png" alt="project" />
          </div>
          <div className="lg:w-1/5 m-1 w-full md:w-4/12 shadow-xl p-5 hover:shadow-indigo-200 transition duration-200 ease-in-out">
            <img src="/assets/item.png" alt="project" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
