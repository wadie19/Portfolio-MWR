import React from "react";
import Accueil from "./Components/Accueil";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import WorkExperience from "./Components/WorkExperience";
import Education from "./Components/Education";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Bio from "./Components/Bio";

const App = () =>{
  return (
      <div className="relative h-full overflow-y-auto antialiased">
        <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-img"></div>
<div className="relative z-10 flex flex-col items-center p-4 space-y-8
container mx-auto">
    <Accueil />
    <Navbar />
    <Projects />
    <Bio />
    <Skills />
    <WorkExperience />
    <Education />
    <Contact /> 
    <Footer />
      </div>
    </div>
    
  )
}

export default App