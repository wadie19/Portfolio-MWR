import { EDUCATION } from "../constants";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section
      className="mx-auto max-w-screen-xl py-20"
      id="education"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-12 text-center text-4xl font-semibold"
      >
        Education
      </motion.h2>

      <div className="space-y-6 px-6 lg:px-10">
        {EDUCATION.map((edu, index) => (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
            key={index}
            className="rounded-2xl border border-stone-50/30 bg-white/10 p-6"
          >
            <h3 className="text-xl font-semibold lg:text-2xl">
              {edu.degree}
            </h3>

            <p className="mt-1 text-lg">
              {edu.institution}
            </p>

            <p className="mt-1 text-sm text-stone-300">
              {edu.duration}
            </p>

            <p className="mt-4 leading-relaxed">
              {edu.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;