import { SKILLS } from "../constants";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section
      className="container mx-auto max-w-screen-xl pt-20"
      id="skills"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-12 text-center text-4xl font-semibold"
      >
        Tech Stack
      </motion.h2>

      <div className="grid gap-6 px-4 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((skillGroup, index) => (
          <motion.div
            key={skillGroup.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            className="rounded-3xl border border-stone-50/30 p-6"
          >
            <h3 className="mb-5 text-xl font-semibold lg:text-2xl">
              {skillGroup.category}
            </h3>

            <div className="flex flex-wrap gap-3">
              {skillGroup.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-stone-50/30 px-4 py-2 text-sm lg:text-base"
                >
                  {technology}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;