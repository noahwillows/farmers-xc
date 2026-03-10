"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-white">
          <h1 className="text-xl font-bold text-white">Farmers XC</h1>
        </Link>

        <nav className="flex gap-6 text-sm font-medium">
          <Link href="/about" className="text-white hover:text-white/70">
            About
          </Link>
          <Link href="/roster" className="text-white hover:text-white/70">
            Roster
          </Link>
          <Link href="/media" className="text-white hover:text-white/70">
            Media
          </Link>
          <Link href="/results" className="text-white hover:text-white/70">
            Results
          </Link>
          <Link href="/schedule" className="text-white hover:text-white/70">
            Schedule
          </Link>
          <Link href="/contact" className="text-white hover:text-white/70">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}