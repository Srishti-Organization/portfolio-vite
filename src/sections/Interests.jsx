import { motion } from "framer-motion";
import Badge from "../components/Badge";

export default function Interests() {
  const hobbies = [
    "Fashion & Styling 👗",
    "Gym 🏋️‍♀️",
    "Running 🏃‍♀️",
    "Art & Craft 🎨",
    "Sketching & Design 🖌️",
    "Travelling ✈️",
    "Photography 📸",
  ];

  const hobbyColors = [
    "inline-flex items-center gap-3 bg-forest-mushroom text-white font-semiboldcustom px-5 py-3 rounded-full shadow hover:scale-105 transition",
    "inline-flex items-center gap-3 bg-forest-moss text-white font-semiboldcustom px-5 py-3 rounded-full shadow hover:scale-105 transition",
    "inline-flex items-center gap-3 bg-rustic-teal text-white font-semiboldcustom px-5 py-3 rounded-full shadow hover:scale-105 transition",
    "inline-flex items-center gap-3 bg-meadow-terracotta text-white font-semiboldcustom px-5 py-3 rounded-full shadow hover:scale-105 transition",
    "inline-flex items-center gap-3 bg-rustic-burnt text-white font-semiboldcustom px-5 py-3 rounded-full shadow-lg hover:scale-105 transition",
    "inline-flex items-center gap-3 bg-forest-indigo text-white font-semiboldcustom px-5 py-3 rounded-full shadow-lg hover:scale-105 transition",
    "inline-flex items-center gap-3 bg-forest-olive text-white font-semiboldcustom px-5 py-3 rounded-full shadow hover:scale-105 transition"
  ];

  const music = [
    { name: "Tame Impala", img: "/assets/tame_impala.jpeg", link: "https://open.spotify.com/artist/5INjqkS1o8h1imAzPqGZBb" },
    { name: "Chase Atlantic", img: "/assets/chase_atlantic.jpeg", link: "https://open.spotify.com/artist/7cYEt1pqMgXJdq00hAwVpT" },
    { name: "Playboi Carti", img: "/assets/playboi_carti.jpeg", link: "https://open.spotify.com/artist/699OTQXzgjhIYAHMy9RyPD" }
  ];

  const artistCardColors = [
    "bg-meadow-blush/30 hover:bg-meadow-blush/50",
    "bg-forest-lilac/30 hover:bg-forest-lilac/50",
    "bg-forest-indigo/30 hover:bg-forest-indigo/50"
  ];

  return (
    <section id="interests" className="container mx-auto px-6 py-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl font-display font-semiboldcustom text-forest-indigo mb-6"
      >
        Interests & Hobbies
      </motion.h2>

      <div className="flex flex-wrap gap-4 mb-8">
        {hobbies.map((hobby, i) => (
          <Badge key={i} className={hobbyColors[i % hobbyColors.length]}>
            {hobby}
          </Badge>
        ))}
      </div>

      <h3 className="text-xl font-semibold mb-4 text-forest-moss">Favorite Music Artists</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {music.map((m, i) => (
          <motion.a
            key={m.name}
            href={m.link}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05, rotate: 1 }}
            className={`flex flex-col items-center justify-center block rounded-2xl overflow-hidden shadow-lg border border-white/30 p-2 ${artistCardColors[i % artistCardColors.length]} transition`}
          >
            <img
              src={m.img}
              alt={m.name}
              className="w-full h-full object-cover rounded-xl"
            />
            <p className="text-center mt-2 font-bold text-forest-indigo">{m.name}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
