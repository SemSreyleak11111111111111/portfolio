import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { projectCategories } from "../data/projects";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-24 px-6 bg-gradient-to-b from-black to-gray-950 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
        >
          My Projects
        </motion.h2>

        {projectCategories.map((category, catIndex) => (
          <div key={catIndex} className="mb-20">
            <motion.h3
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold mb-8 text-indigo-400 text-center md:text-left"
            >
              {category.title}
            </motion.h3>

            {/* Auto Scrolling Row */}
            <div className="relative overflow-hidden">
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 8, // ⚡ smaller = faster
                  ease: "linear",
                }}
                className="flex gap-8 md:gap-10 w-max"
              >
                {[...category.items, ...category.items].map(
                  (project, i) => (
                    <div
                      key={i}
                      className="flex-shrink-0 w-80 md:w-96"
                    >
                      <ProjectCard project={project} index={i} />
                    </div>
                  )
                )}
              </motion.div>

              {/* Fade edges */}
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-950 to-transparent pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-950 to-transparent pointer-events-none" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}