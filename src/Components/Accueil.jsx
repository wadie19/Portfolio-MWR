import { motion } from "framer-motion";
import { FaRegHandPeace } from "react-icons/fa6";
import { GrContactInfo } from "react-icons/gr";
//import { ImNewTab } from "react-icons/im";

import photo from "../assets/myImagee.png";
//import cv from "../Files/CV_REZGUI_WADIE.pdf";

const Accueil = () => {
  //const handleToggleResume = () => {
  //  window.open(cv, "_blank");
  //};

  return (
    <section className="flex min-h-screen max-w-screen-xl flex-wrap items-center mt-12">
      
      {/* Left section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2"
      >
        <p className="flex items-center gap-2 p-2 text-xl">
          Hello there <FaRegHandPeace />
        </p>

        <h1 className="my-6 p-2 text-5xl font-bold md:text-6xl lg:text-[5rem]">
          Mohamed Wadie Rezgui
        </h1>

        <h2 className="p-2 text-2xl font-semibold md:text-3xl">
          Full-Stack Developer
        </h2>

        <p className="p-2 text-xl">
          Python · FastAPI · Angular
        </p>

        <p className="mb-8 p-2 text-lg leading-relaxed">
          Full-Stack Developer specialized in building and modernizing business
          applications. I currently work with Python, FastAPI and Angular,
          contributing to the migration of legacy COBOL/OpenVMS applications,
          REST API development, SQL databases, testing and deployment.
        </p>

        <div className="mb-4 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="flex items-center gap-2 rounded-full bg-white px-5 py-2 text-black hover:bg-gray-300"
          >
            Contact Me
            <GrContactInfo />
          </a>

          {/* <button
            onClick={handleToggleResume}
            className="flex items-center gap-2 rounded-full bg-white px-5 py-2 text-black hover:bg-gray-300"
          >
            View Resume
            <ImNewTab />
          </button>*/}
        </div>
      </motion.div>

      {/* Right section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 lg:p-8"
      >
        <div className="flex justify-center">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            src={photo}
            alt="Mohamed Wadie Rezgui"
            width={550}
            height={550}
            className="rounded-3xl"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Accueil;