import { motion } from "framer-motion";

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.06, 
        y: -10, 
        boxShadow: "0 25px 50px -12px rgba(99, 102, 241, 0.4)" 
      }}
      className="group relative bg-gray-900 rounded-2xl overflow-hidden shadow-xl shadow-black/40 cursor-pointer h-full"
    >
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-xl font-semibold text-white mb-1">{project.title}</h3>
        <p className="text-indigo-300 text-sm">{project.category}</p>
      </div>
    </motion.div>
  );
}

