import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="bg-gradient-to-r from-rustic-dusty/30 to-meadow-cream/40 py-12"
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-display font-semiboldcustom text-forest-indigo mb-4"
          >
            About Me
          </motion.h2>
          <motion.p
            whileInView={{ y: [20, 0], opacity: [0, 1] }}
            className="text-gray-700 max-w-3xl"
          >
            I'm an aspiring software engineer pursuing a B.Tech in Artificial
            Intelligence (NIT Surat, expected 2027). I have experience developing
            secure backend services, microservices, and FinTech applications using
            Java, Spring Boot, and Apache Kafka. I also have practical exposure to
            AI/ML projects and modern web technologies. I love blending creativity
            and tech, with an eye for design, color, and interactive user experiences.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
