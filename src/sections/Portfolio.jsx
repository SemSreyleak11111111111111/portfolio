import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { projectCategories } from "../data/projects";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 bg-gradient-to-b from-black to-gray-950">
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

            <div className="relative">
              <div className="flex flex-row gap-8 md:gap-10 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
                {category.items.map((project, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -12, 0],          // gentle drift up/down
                      rotate: [0, 0.8, -0.8, 0], // tiny tilt
                    }}
                    transition={{
                      duration: 10 + i * 1.2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                      delay: i * 1 + catIndex * 0.5, // stagger across rows too
                    }}
                    className="flex-shrink-0 w-80 md:w-96 snap-start"
                  >
                    <ProjectCard project={project} index={i} />
                  </motion.div>
                ))}
              </div>

              {/* Fade edges for scroll hint */}
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-950 to-transparent pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-950 to-transparent pointer-events-none" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}