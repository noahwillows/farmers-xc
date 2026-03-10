import Link from "next/link";

const links = [
  { href: "/about", label: "About" },
  { href: "/roster", label: "Roster" },
  { href: "/media", label: "Media" },
  { href: "/results", label: "Results" },
  { href: "/schedule", label: "Schedule" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-white/40">
            Farmers XC
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-white">
            Built as a living archive for the team’s story, culture, and future.
          </h3>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/60">
            A modern cross country media site for race days, athletes, results,
            and the momentum of the program across seasons.
          </p>
        </div>

        <div className="md:justify-self-end">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/40">
            Navigate
          </p>
          <div className="grid grid-cols-2 gap-3 text-sm">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/70 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 text-sm text-white/45">
          <span>© {new Date().getFullYear()} Farmers XC</span>
          <span>Live team archive</span>
        </div>
      </div>
    </footer>
  );
}