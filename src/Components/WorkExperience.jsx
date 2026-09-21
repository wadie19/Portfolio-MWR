import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const WorkExperience = () => {
  return (
    <section className="pt-20" id="work">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center text-4xl font-semibold tracking-tighter"
      >
        Work Experience
      </motion.h2>

      <div className="mx-auto max-w-screen-xl space-y-8 p-6 lg:p-10">
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            key={index}
            className="rounded-2xl border border-stone-50/30 bg-white/10 p-6"
          >
            <div className="mb-4">
              <h3 className="text-2xl font-semibold">
                {experience.title}
              </h3>

              <p className="text-xl">
                {experience.company}
              </p>

              <p className="text-sm text-stone-300">
                {experience.duration}
              </p>
            </div>

            {experience.summary && (
              <p className="mb-4 text-base leading-relaxed">
                {experience.summary}
              </p>
            )}

            <ul className="mb-5 list-disc space-y-2 pl-5">
              {experience.tasks.map((task, taskIndex) => (
                <li key={taskIndex} className="text-base leading-relaxed">
                  {task}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-stone-50/30 px-3 py-1 text-sm"
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

export default WorkExperience;