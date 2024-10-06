import React from "react";
import Accueil from "./Components/Accueil";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";

const App = () =>{
  return (
      <div className="relative h-full overflow-y-auto antialiased">
        <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-img"></div>
<div className="relative z-10 flex flex-col items-center p-4 space-y-8
container mx-auto">
    <Accueil />
    <Navbar />
    <Projects />
      </div>
    </div>
    
  )
}

export default App