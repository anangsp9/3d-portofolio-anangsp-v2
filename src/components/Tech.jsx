// src/components/Tech.jsx
import React from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, when: "beforeChildren" },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 20 } },
};

const Tech = () => {
  return (
    <section className="w-full">
      {/* Section Title */}
      <div className="text-center mb-8">
        <p className="text-sm uppercase tracking-widest text-secondary">Skillset</p>
        <h2 className="text-3xl sm:text-4xl font-bold">Technologies I Master</h2>
        <p className="mt-3 text-sm text-secondary">
          These icons represent the core technologies and tools I use in my daily workflow.
        </p>
      </div>

      {/* Icons Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 sm:gap-8 place-items-center"
      >
        {technologies.map((tech) => (
          <motion.div
            key={tech.name}
            variants={item}
            className="group flex flex-col items-center"
          >
            <div
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-black/5 dark:bg-white/5
                         backdrop-blur-sm flex items-center justify-center
                         ring-1 ring-black/5 dark:ring-white/10
                         transition-transform duration-200 ease-out
                         group-hover:scale-110 group-hover:rotate-3 group-active:scale-95"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain select-none drop-shadow-md"
                draggable="false"
              />
            </div>
            <span className="mt-2 text-xs sm:text-sm text-center text-secondary">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default SectionWrapper(Tech, "");
