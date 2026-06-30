import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import ProjectCard from "./ProjectCard";
import Navbar from "./Navbar";

const ProjectsPage = () => {
  return (
    <div className="bg-primary min-h-screen">
      <Navbar />
      <div className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
        <motion.div variants={textVariant()} className="mt-20">
          <p className={`${styles.sectionSubText}`}>My work</p>
          <h2 className={`${styles.sectionHeadText}`}>All Projects</h2>
        </motion.div>

        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="w-full flex"
        >
          <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described with
            links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("up", "spring", 0.2, 0.75)}
          className="mt-20 grid gap-7 sm:grid-cols-2 lg:grid-cols-3 items-stretch"
        >
          {projects.map((project, index) => (
            <div key={`project-${index}`} className="h-full">
              <ProjectCard index={index} {...project} />
            </div>
          ))}
        </motion.div>

        <motion.div variants={fadeIn("up", "spring", 0.3, 0.75)} className="mt-16 flex justify-center pb-20">
          <Link
            to="/"
            className="px-10 py-3 bg-gradient-to-r from-purple-800 to-indigo-900 rounded-full text-white font-serif tracking-widest hover:saturate-[1.15] active:saturate-[1.4] transition-all duration-300"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsPage;
