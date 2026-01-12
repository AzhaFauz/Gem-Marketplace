"use client";

import Link from "next/link";
import DiamondLogo from "../icons/DiamondLogo";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="max-w-full mx-auto px-18 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <DiamondLogo />
          <div>
            <h1 className="text-white text-lg font-semibold">Zash Gems</h1>
            <p className="text-yellow-400 text-xs">Sri Lankan Treasures</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-10 text-gray-200">
          <Link href="#" className="hover:text-yellow-400 transition">
            Collection
          </Link>
          <Link href="#" className="hover:text-yellow-400 transition">
            Our Story
          </Link>
          <Link href="#" className="hover:text-yellow-400 transition">
            Contact
          </Link>
          <Link href="#" className="hover:text-yellow-400 transition">
            Blog
          </Link>

          <button className="ml-6 bg-linear-to-r from-orange-400 to-yellow-400 text-black font-medium px-6 py-2 rounded-full shadow-lg hover:scale-105 transition">
            Inquire
          </button>
        </nav>
      </div>
    </header>
  );
}
