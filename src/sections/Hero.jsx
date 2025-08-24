import { motion } from "framer-motion";

export default function Hero() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute -left-32 -top-32 w-96 h-96 rounded-full bg-gradient-to-tr from-meadow-blush to-forest-lilac opacity-80 blur-3xl transform rotate-12" />
      <div className="absolute right-0 top-20 w-72 h-72 rounded-full bg-gradient-to-br from-rustic-dusty to-rustic-powder opacity-80 blur-2xl" />
      <section className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 relative z-10"
        >
        <h1 className="text-5xl md:text-6xl font-display font-extrabold leading-tight text-shadow">
                Srishti Rao <span className="block md:inline text-meadow-sage font-semibold">🌸</span>
        </h1>
          <p className="mt-4 text-lg md:text-xl max-w-xl">
            B.Tech (AI) • FullStack Developer • Backend Focused • AI & Data Enthusiast • Fashion-forward creator — blending <span className="font-semibold">tech + style</span> to build beautiful, usable experiences.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a href="/Srishti_Rao_Resume.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-forest-indigo text-white font-semiboldcustom px-5 py-3 rounded-full shadow-lg hover:scale-105 transition">Resume 📄</a>
            <a href="https://github.com/srishti-rao" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-forest-moss text-white font-semiboldcustom px-5 py-3 rounded-full shadow hover:scale-105 transition">GitHub 🐈‍⬛</a>
          </div>

        </motion.div>
        <motion.div
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.9, delay: 0.2 }}
    className="w-full md:w-1/2 flex justify-center"
>
    <div className="relative w-96 md:w-[28rem] rounded-3xl shadow-2xl transform hover:-translate-y-3 hover:rotate-1 transition duration-500 bg-gradient-to-tr from-meadow-blush/60 to-rustic-dusty/60 p-8">

        {/* Floating flower-like background */}
        <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-gradient-to-br from-meadow-wildflower/50 to-forest-lilac/40 blur-3xl animate-float"></div>
        <div className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full bg-gradient-to-br from-rustic-powder/50 to-meadow-cream/40 blur-2xl animate-float animation-delay-2000"></div>

        {/* Glass-like card behind image */}
        <div className="h-64 w-full rounded-xl bg-white/50 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-inner">
            <div className="rounded-full p-2 bg-gradient-to-tr from-meadow-blush to-forest-lilac shadow-lg">
                <img 
                    src="/assets/profile.jpg" 
                    alt="Srishti" 
                    className="rounded-full h-52 w-52 object-cover border-4 border-white shadow-md" 
                />
            </div>
        </div>

        {/* Caption / tagline */}
        <div className="mt-6 text-center">
            <h3 className="text-2xl font-display font-bold text-forest-indigo">Srishti Rao</h3>
            <p className="mt-1 text-sm font-semiboldcustom text-gray-700 max-w-xs mx-auto">
                Blending AI Insights with Practical Backend Solutions
            </p>
        </div>
    </div>
</motion.div>
      </section>
    </header>
  );
}