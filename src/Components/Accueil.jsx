import { motion } from "framer-motion";
import { useState } from "react";
import { FaRegHandPeace } from "react-icons/fa6";
import { GrContactInfo } from "react-icons/gr";
import { ImNewTab } from "react-icons/im";
import photo from "../assets/myImagee.png"
const Accueil = () => {
  const [showResume, setShowResume] = useState(false);

  const handleToggleResume = () => {
    window.open("src/Files/CV_REZGUI_WADIE.pdf", "_blank"); 
  };

  return (
    <section className="flex min-h-screen max-w-screen-xl flex-wrap items-center mt-12">
      {/* Left section with text */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2"
      >
        <h2 className="my-8 p-2 text-6xl font-bold md:text-6xl lg:text-[5rem]">
          Mohamed Wadie Rezgui
        </h2>
        <p className="flex p-2 text-3xl tracking-tighter lg:text-4xl">
            Hello there <FaRegHandPeace/>
        </p>
        <p className="mb-8 p-2 text-xl">
          I am a second-year Master's student in computer science, specializing in software
          engineering and application integration at ISIMA with a strong interest in web
          development. I am currently looking for a 5-6 month end-of-study internship starting in
          April 2025, with a strong interest in web or mobile development roles, ideally with the
          possibility of pre-hiring.
        </p>

        {/* Button to open resume in a new tab */}
        <div className="mb-4 flex space-x-2">
          <a href="#contact" 
           className="flex rounded-full bg-white px-4 py-2 text-black hover:bg-gray-300"
            >
        Contact Me <GrContactInfo />
          </a>
          <button
            onClick={handleToggleResume}
            className="flex rounded-full bg-white px-4 py-2 text-black hover:bg-gray-300"
          >
            
            See My Resume    <ImNewTab />
          </button>
          
        </div>
      </motion.div>

      {/* Right section with image */}
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
            alt="photo"
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


