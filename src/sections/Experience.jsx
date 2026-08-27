import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      company: "WOW Finstack",
      type: "Hybrid",
      role: "Software Developer (Intern)",
      duration: "December 2024 - Present",
      details: [
        "Developed secure RESTful backend services and APIs with Java and Spring Boot, implementing best practices for authentication, authorization, and error handling.",
        "Designed and implemented a scalable microservice for dynamic QR code generation with support for customization and clean integration between services.",
        "Implemented the User Management module in a Card Management System to support onboarding, authentication, and account profile management.",
        "Built an ISO8583-compliant Issuer Simulator and conducted extensive testing using the Visa Simulator to emulate financial responses, validate card issuer workflows, and ensure reliable transaction processing.",
        "Executed comprehensive payment system testing and transaction validation tailored specifically for 019 Bank (Israel) protocols."
      ]
    },
    {
      company: "Sardar Vallabhbhai National Institute of Technology, Surat",
      type: "Onsite",
      role: "Research Intern",
      duration: "August 2025 - December 2025",
      details: [
        "Developed a Multi-Resolution Ensemble (MRE) framework using lightweight CNNs (EfficientNet, MobileNet, ShuffleNet) to classify breast cancer histopathology images across multiple scales.",
        "Engineered MRPE, a weighting scheme that balances model accuracy against inference speed for clinical use.",
        "Achieved 95.00% test accuracy with an EfficientNet-B0 backbone, surpassing the 87% ICIAR 2018 BACH challenge benchmark.",
        "Implemented a quantitative XAI framework using Grad-CAM and IoU to measure spatial overlap between model heatmaps and pathologist regions of interest.",
        "Established a statistically significant positive correlation (p=0.02) between model activations and human-centric diagnostic scores, improving transparency.",
        "Benchmarked FP16 vs. FP32 inference on Apple M4 hardware, identifying performance bottlenecks in specialized hardware kernels.",
        "Built a Gradio web interface providing a \"glass-box\" diagnostic tool for real-time image analysis and uncertainty visualization."
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
