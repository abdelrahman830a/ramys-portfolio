import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = ({ setisDark }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="transition duration-500 ease-in-out z-10 w-full fixed top-0 bg-white dark:bg-slate-900 shadow-sm shadow-indigo-200">
      <div className="container mx-auto py-5 flex  justify-between items-center px-3">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{once: true}}
          >
          <p className="transition duration-200 ease-in-out font-nuts text-2xl font-semibold cursor-cell dark:text-gray-200">
            Mohamed Ramy
          </p>
        </motion.div>

        {/* Desktop Nav */}
        <motion.ul
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{once: true}}
          className="transition duration-200 ease-in-out hidden md:flex space-x-10 text-gray-600 font-bold text-sm uppercase dark:text-gray-300">
          <li className="hover:text-gray-500 transition duration-150 ease-in-out hover:drop-shadow-lg">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-gray-500 transition duration-150 ease-in-out hover:drop-shadow-lg">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-gray-500 transition duration-150 ease-in-out hover:drop-shadow-lg">
            <a href="#services">Services</a>
          </li>
          <li className="hover:text-gray-500 transition duration-150 ease-in-out hover:drop-shadow-lg">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:text-gray-500 transition duration-150 ease-in-out hover:drop-shadow-lg">
            <a href="#contact">Contact</a>
          </li>
        </motion.ul>

        {/* Moon Image */}
        <div onClick={() => setisDark((prev) => !prev)}>
          <motion.img
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{once: true}}
            src="/assets/moon.png"
            alt="dark/night mode"
            className="w-5 cursor-pointer hidden md:block hover:drop-shadow-md shadow-indigo-300"
          />
        </div>

        {/* Mobile Nav */}

        {/* Menu Icon */}
        <motion.div className="md:hidden">
          <div className="flex flex-row-reverse gap-5">
          <motion.div
            className="md:hidden dark:invert filter"
            onClick={() => setIsOpen((prev) => !prev)}>
            <img src="/assets/menu.png" alt="menu" className="w-5 h-5" />
          </motion.div>
          {/* Moon Icon Movbile */}
          <div onClick={() => setisDark((prev) => !prev)}>
                <img
                  src="/assets/moon.png"
                  alt="dark/night mode"
                  className="w-6"
                />
              </div>
              </div>
          {isOpen && (
            <motion.ul
              initial={{ opacity: 0, x: -150 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-indigo-300 absolute left-0 top-0 w-full p-10 space-y-10 rounded-b-2xl text-[#fff] text-center transition duration-200 ease-in-out">
              <div className="">
                <img
                  src="/assets/close.png"
                  alt="close"
                  className="w-8 h-8 absolute top-4 right-4"
                  onClick={() => setIsOpen((prev) => !prev)}
                />
              </div>

              <motion.li
                onClick={() => setIsOpen((prev) => !prev)}
                className="hover:text-gray-500 transition duration-150 ease-in-out hover:drop-shadow-lg">
                <a href="#home">Home</a>
              </motion.li>
              <motion.li
                onClick={() => setIsOpen((prev) => !prev)}
                className="hover:text-gray-500 transition duration-150 ease-in-out hover:drop-shadow-lg">
                <a href="#about">About</a>
              </motion.li>
              <motion.li
                onClick={() => setIsOpen((prev) => !prev)}
                className="hover:text-gray-500 transition duration-150 ease-in-out hover:drop-shadow-lg">
                <a href="#services">Services</a>
              </motion.li>
              <motion.li
                onClick={() => setIsOpen((prev) => !prev)}
                className="hover:text-gray-500 transition duration-150 ease-in-out hover:drop-shadow-lg">
                <a href="#projects">Projects</a>
              </motion.li>
              <motion.li
                onClick={() => setIsOpen((prev) => !prev)}
                className="hover:text-gray-500 transition duration-150 ease-in-out hover:drop-shadow-lg">
                <a href="#contact">Contact</a>
              </motion.li>
            </motion.ul>
          )}
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
