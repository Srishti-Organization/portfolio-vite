import { motion } from "framer-motion";
import skills from "../data/skills";

export default function Skills() {
  const categories = [
    "Programming Languages",
    "Backend",
    "Frontend",
    "Databases",
    "DevOps & Tools",
    "AI & ML",
    "Security"
  ];

  return (
    <section id="skills" className="bg-gradient-to-r from-rustic-dusty/30 to-meadow-cream/40 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-display font-semiboldcustom text-forest-indigo mb-6">Skills</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <motion.div
              key={category}
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-white rounded-2xl shadow-lg"
            >
              <h4 className="font-semibold mb-2 text-meadow-blush">{category}</h4>
              <p className="text-gray-700 font-semiboldcustom text-sm">
                {skills
                  .filter(s => s.category === category)
                  .map(s => `${s.name} ${s.icon}`)
                  .join(", ")}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
