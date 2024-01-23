import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";
const Hero = () => {
  const [text] = useTypewriter({
    words: ["Code", "Youtube", "Freelance", "Desgin"],
    loop: 0,
  });
  return (
    <div className="overflow-hidden h-full w-full relative" id="home">
      {/* Hero image */}
      <motion.img
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        src="/assets/man.png"
        alt="ramy"
        className="h-[200px] lg:h-[450px] xl:h-[550px] object-cover absolute bottom-0 right-0 left-0 mx-auto"
      />

      {/* background Circle */}
      <div className="bg-indigo-400 h-[48rem] w-[48rem] rounded-full absolute right-0 left-0 mx-auto -bottom-1/4 hidden lg:block -z-10" />

      {/* TypeWriter */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="transition duration-300 ease-in-out absolute top-1/3 left-5 text-lg sm:left-10 sm:text-4xl md:left-16 lg:left-5 lg:text-6xl xl:left-44 md:text-3xl font-bold">
        <span className="text-gray-600 dark:text-gray-300 transition duration-200 ease-in-out">I craft</span>
        <p className="text-red-500">
          {text}
          <Cursor />
        </p>
      </motion.div>

      {/* TExt card */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="transition duration-700 ease-in-out hidden lg:flex flex-col gap-5 rounded-lg shadow-md shadow-indigo-100 absolute top-0 bottom-0 m-auto right-10 bg-white h-fit w-1/3 p-6 hover:shadow-lg hover:shadow-indigo-400 dark:bg-slate-900">
        <h1 className="transition duration-300 ease-in-out text-4xl font-bold text-indigo-800 dark:text-indigo-400">Hi, I am Ramy</h1>
        <p className="transition duration-300 ease-in-out text-gray-500 dark:text-gray-300">
          I am a full stack developer with a passion for building web
          applications and solving problems.
        </p>
        <a
          href="#contact"
          className="bg-indigo-500  text-white text-xl px-3 py-2 w-fit transition duration-300 ease-in-out hover:drop-shadow-lg hover:scale-[1.01] rounded-md font-semibold">
          Hire Me
        </a>
      </motion.div>
    </div>
  );
};

export default Hero;
