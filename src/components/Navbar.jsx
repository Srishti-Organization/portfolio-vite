import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 right-0 bg-white/70 backdrop-blur-md shadow-md z-50">
  <div className="container mx-auto px-6 py-4 flex justify-between items-center">
    <span className="font-bold text-xl text-forest-indigo"> Srishti Rao</span>
    <div className="overflow-x-auto scrollbar-hide">
      <div className="flex gap-6 min-w-max">
        <a href="#about" className="font-semibold text-forest-indigo hover:text-meadow-blush transition">About</a>
        <a href="#experience" className="font-semibold text-forest-indigo hover:text-meadow-blush transition">Experience</a>
        <a href="#projects" className="font-semibold text-forest-indigo hover:text-meadow-blush transition">Projects</a>
        <a href="#skills" className="font-semibold text-forest-indigo hover:text-meadow-blush transition">Skills</a>
        <a href="#interests" className="font-semibold text-forest-indigo hover:text-meadow-blush transition">Interests</a>
        <a href="#contact" className="font-semibold text-forest-indigo hover:text-meadow-blush transition">Contact</a>
      </div>
    </div>
  </div>
</nav>

  );
}