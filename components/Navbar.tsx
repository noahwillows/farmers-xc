"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/about", label: "About" },
  { href: "/roster", label: "Roster" },
  { href: "/media", label: "Media" },
  { href: "/results", label: "Results" },
  { href: "/schedule", label: "Schedule" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="group">
          <p className="text-[10px] uppercase tracking-[0.35em] text-white/45 transition group-hover:text-white/65">
            Team Archive
          </p>
          <h1 className="text-2xl font-bold tracking-wide text-white">
            Farmers XC
          </h1>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  active
                    ? "border-white/30 bg-white/10 text-white"
                    : "border-white/10 text-white/75 hover:border-white/25 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}