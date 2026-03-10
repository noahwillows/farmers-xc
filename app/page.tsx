import Link from "next/link";

const quickLinks = [
  {
    title: "About",
    description: "History, goals, and the identity that drives Farmers XC.",
    href: "/about",
  },
  {
    title: "Roster",
    description: "Meet the team and build out runner profiles over time.",
    href: "/roster",
  },
  {
    title: "Media",
    description: "Create a home for race photos, videos, and featured moments.",
    href: "/media",
  },
  {
    title: "Results",
    description: "Archive meet performances, records, and season progression.",
    href: "/results",
  },
  {
    title: "Schedule",
    description: "Show upcoming meets, key dates, and the competitive calendar.",
    href: "/schedule",
  },
  {
    title: "Contact",
    description: "Add team links, contact info, and recruiting details later.",
    href: "/contact",
  },
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <div className="max-w-4xl">
        <p className="text-sm uppercase tracking-[0.35em] text-white/45">
          Cross Country Storytelling
        </p>
        <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
          A living media archive for the story, identity, and momentum of
          Farmers XC.
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
          This site is now built as a real multi-page foundation. From here,
          you can grow it into a full team archive with history, roster pages,
          race results, media galleries, and schedule updates.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {quickLinks.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-6 transition hover:border-white/20 hover:bg-white/10"
          >
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-white/45">
              {item.title}
            </p>
            <p className="leading-7 text-white/75">{item.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}