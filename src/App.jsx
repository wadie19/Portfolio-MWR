import Accueil from "./Components/Accueil";
import Navbar from "./Components/Navbar";
import Bio from "./Components/Bio";
import WorkExperience from "./Components/WorkExperience";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Education from "./Components/Education";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="relative min-h-screen antialiased">
      <div className="fixed inset-0 bg-img bg-cover bg-center bg-fixed" />

      <Navbar />

      <main className="container relative z-10 mx-auto flex flex-col items-center space-y-8 px-4">
        <Accueil />
        <Bio />
        <WorkExperience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default App;