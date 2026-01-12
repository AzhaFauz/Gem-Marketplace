import Image from "next/image";
import LuxuryStar from "../icons/LuxuryStar";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
      <Image
        src="/images/hero-bg.jpg"
        alt="Gem Background"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/60 to-black/90" />

      <div className="relative z-10 max-w-4xl px-6 animate-fadeIn">
        <div className="flex justify-center mb-6 animate-spin-luxury">
          <LuxuryStar />
        </div>

        <h1 className="text-6xl md:text-8xl font-light tracking-wide text-yellow-200">
          Zash <span className="text-orange-500">Gems</span>
        </h1>

        <p className="mt-4 text-2xl text-yellow-400">
          From the Land of Natural Stones
        </p>

        <p className="mt-6 text-gray-300 text-lg leading-relaxed">
          Exquisite precious gemstones, ethically sourced from the treasure
          island of Sri Lanka
        </p>

        <button className="mt-10 bg-linear-to-r from-orange-400 to-yellow-400 text-black font-semibold px-12 py-4 rounded-full shadow-xl hover:scale-105 transition">
          Explore Collection
        </button>

        <div className="mt-12 text-yellow-400 animate-bounce">⌄</div>
      </div>
    </section>
  );
}
