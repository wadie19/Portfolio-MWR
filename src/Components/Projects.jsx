import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section
      className="mx-auto max-w-screen-xl pt-20"
      id="projects"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-12 text-center text-4xl font-semibold"
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="flex h-full flex-col overflow-hidden rounded-3xl border border-stone-50/30 bg-white/10"
          >
            {/* Project image */}
            <img
              src={project.image}
              alt={`${project.name} project`}
              className="h-52 w-full object-cover"
            />

            {/* Project content */}
            <div className="flex h-full flex-col p-6">
              <h3 className="mb-3 text-2xl font-semibold">
                {project.name}
              </h3>

              <p className="mb-5 leading-relaxed text-stone-300">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-stone-50/30 px-3 py-1 text-sm"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* GitHub link */}
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-black transition hover:bg-gray-300"
              >
                <FaGithub />
                <span>View on GitHub</span>
                <MdArrowOutward />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;