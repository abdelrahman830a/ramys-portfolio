import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import { useState } from "react";
function App() {
  const [isDark, setisDark] = useState(false);
  return (
    <div className={` font-nunito h-full ${isDark && "dark"}`}>
      <div className="h-[50vh] lg:h-screen scroll-smooth transition duration-300 ease-in-out bg-gradient-to-t from-indigo-200 dark:from-slate-900 dark:to-slate-700">
        {/* Navbar */}
        <Navbar className=""  setisDark={setisDark} />
        {/* Hero */}
        <Hero />

        {/* About */}
        <About className="" />

        {/* Skills */}
        <Services className="" />

        {/* Projects */}
        <Projects className="" />

        {/* Contact */}
        <Contact className="" />

        {/* Fooeer */}
        <Footer className="" />

        {/* LinkedIn */}
        <div className="fixed bottom-0 left-0 ">
          <a href="https://linkedin.com">
            <img
              className="hidden md:block w-6 h-6 object-cover"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
              alt="linkedin"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
