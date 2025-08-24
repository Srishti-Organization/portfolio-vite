import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      company: "WOW Finstack",
      type: "Hybrid",
      role: "Software Developer",
      duration: "December 2024 - Present",
      details: [
        "Developed secure RESTful backend services and APIs with Java, Spring Boot, implementing best practices for authentication, authorization, and error handling.",
        "Designed and implemented a scalable microservice for dynamic QR code generation with support for customization and integration between services.",
        "Implemented the User Management module in a Card Management System to support onboarding, authentication, and account profile management",
        "Integrated frontend for the Card Management and Core Banking Systems, providing users with a seamless web interface to access and manage features."
      ]
    }
  ];

  return (
    <section id="experience" className="bg-gradient-to-r from-forest-moss/10 to-rustic-lavender/10 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-display font-semiboldcustom text-forest-indigo mb-8">Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                <h4 className="text-xl font-semibold text-forest-moss">{exp.role}</h4>
                <span className="text-sm font-semibold text-gray-500">{exp.duration}</span>
              </div>
              <p className="text-gray-700 font-semibold mb-2">{exp.company} • {exp.type}</p>

              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {exp.details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
