import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      whileHover={{ scale: 1.02 }}
      className="block p-6 bg-gradient-to-br from-white to-rustic-dusty/60 rounded-2xl shadow-md border border-white/60"
    >
      {project.img && <img src={project.img} alt={project.title} className="rounded-xl mb-4" />}
      <h3 className="text-2xl font-semibold text-forest-indigo">{project.title}</h3>
      <p className="mt-2 text-gray-700">{project.desc}</p>
      <div className="mt-4 inline-flex items-center gap-2 text-sm text-meadow-blush font-medium">View →</div>
    </motion.a>
  );
}