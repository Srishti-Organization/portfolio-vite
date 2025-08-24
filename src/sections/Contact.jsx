export default function Contact() {
  return (
    <section id="contact" className="container mx-auto px-6 py-16 text-center">
      <h2 className="text-3xl font-display font-semiboldcustom mb-4">Let's Connect</h2>
      <p className="text-gray-700 font-semiboldcustom mb-6">
        Email, GitHub or LinkedIn — I love collaborating on cross-disciplinary projects that mix code & design.
      </p>
      <div className="flex justify-center gap-4 flex-wrap">
        <a href="mailto:srishtirao7@gmail.com" className="px-6 py-3 bg-meadow-blush text-white font-semiboldcustom rounded-full shadow hover:scale-105 transition">Email ✉️</a>
        <a href="https://github.com/srishti-rao" target="_blank" rel="noreferrer" className="px-6 py-3 bg-forest-moss text-white font-semiboldcustom rounded-full shadow hover:scale-105 transition">GitHub 🐈‍⬛</a>
        <a href="https://linkedin.com/in/srishti-rao-" target="_blank" rel="noreferrer" className="px-6 py-3 bg-forest-indigo text-white font-semiboldcustom rounded-full shadow hover:scale-105 transition">LinkedIn 🔗</a>
      </div>
    </section>
  );
}