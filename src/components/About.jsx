import { motion } from "framer-motion";
const About = () => {
  return (
    <div id="about" className="transition duration-300 ease-in-out px-10 dark:bg-slate-800">
      <div className="container mx-auto py-20 md:py-40 flex flex-col-reverse lg:flex-row items-center gap-10 md:gap-20">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        className="relative">
          <img
            className="h-1/4 absolute top-0 left-0 -z-10 "
            src="/assets/dots.png"
            alt="dots"
          />
          <div className="h-full rounded-full overflow-hidden">
            <img className="" src="/assets/portrait.png" alt="" />
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        className="my-auto flex flex-col gap-3">
          <h1 className="text-indigo-600 font-bold">ABOUT ME</h1>
          <h1 className="transition duration-300 ease-in-out text-3xl font-medium dark:text-white">
            Better Code
          </h1>
          <h1 className="transition duration-300 ease-in-out text-3xl font-medium dark:text-white">
            Better Experience
          </h1>
          <p className="transition duration-300 ease-in-out text-gray-400 dark:text-gray-300">
            I &apos;m a software engineer based in Indonesia specializing in
            building (and occasionally designing) exceptional websites,
            applications, and everything in between.
          </p>
          <h2 className="text-gray-400 font-medium">c++</h2>
          <div className="w-full bg-gray-200 h-1.5 rounded-md">
            <div className="w-[98%] bg-indigo-600 h-1.5 rounded-md"></div>
          </div>
          <h2 className="text-gray-400 font-medium">Python</h2>
          <div className="w-full bg-gray-200 h-1.5 rounded-md">
            <div className="w-3/6 bg-indigo-600 h-1.5 rounded-md"></div>
          </div>
          <h2 className="text-gray-400 font-medium">Javascript</h2>
          <div className="w-full bg-gray-200 h-1.5 rounded-md">
            <div className="w-5/6 bg-indigo-600 h-1.5 rounded-md"></div>
          </div>
          
        </motion.div>
      </div>
    </div>
  );
};

export default About;
