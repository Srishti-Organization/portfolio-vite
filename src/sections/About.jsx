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
            I'm a software engineer studying B.Tech in Artificial Intelligence at NIT
            Surat (expected 2027). For the past year I've been building backend
            services in production at WOW Finstack — Spring Boot microservices, REST
            APIs, and payment infrastructure that processes real card transactions.
            Somewhere between debugging an ISO8583 message flow and reading a Grad-CAM
            heatmap, I figured out what I actually enjoy: systems that have to work
            when the data is messy and the documentation is wrong. Alongside that, my
            AI coursework and research have taken me from model training through
            explainability, so I'm comfortable on both sides of the line where backend
            architecture meets machine learning. I also care about how things look and
            feel to use — design and interaction are part of the engineering, not an
            afterthought.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
