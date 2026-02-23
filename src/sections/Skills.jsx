import { motion } from "framer-motion";

const skills = ["Photoshop", "Illustrator", "After Effects", "Figma", "Branding", "Typography", "UI/Visual Design", "Motion Graphics"];

export default function Skills() {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent"
        >
          Core Competencies
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl text-center border border-gray-700/50 hover:border-indigo-500/50 transition-colors"
            >
              <p className="text-lg font-medium">{skill}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}