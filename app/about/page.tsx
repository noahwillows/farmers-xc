import Link from "next/link";

const spotlight = [
  {
    title: "Season Opener",
    subtitle: "Build race stories and featured meet coverage.",
    image:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Long Run Morning",
    subtitle: "Capture training culture and the daily process.",
    image:
      "https://images.unsplash.com/photo-1486218119243-13883505764c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Pack Finish",
    subtitle: "Highlight team mentality and competition moments.",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Workout Day",
    subtitle: "Show the grind, repetitions, and preparation.",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
  },
];

const sections = [
  {
    title: "About",
    href: "/about",
    text: "History, goals, identity, and the standards that define Farmers XC.",
  },
  {
    title: "Roster",
    href: "/roster",
    text: "Athlete profiles, progression, and the people behind the program.",
  },
  {
    title: "Media",
    href: "/media",
    text: "Race photos, training visuals, documentaries, and featured moments.",
  },
  {
    title: "Results",
    href: "/results",
    text: "Meet archive, season progression, PR history, and team records.",
  },
  {
    title: "Schedule",
    href: "/schedule",
    text: "Upcoming races, key dates, and the competitive calendar.",
  },
  {
    title: "Contact",
    href: "/contact",
    text: "Program information, recruiting details, and external links.",
  },
];

const reel = [
  {
    title: "Season Opener",
    image:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Long Run Morning",
    image:
      "https://images.unsplash.com/photo-1486218119243-13883505764c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Pack Finish",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Workout Day",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Team Travel",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Championship Week",
    image:
      "https://images.unsplash.com/photo-1502904550040-7534597429ae?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.05fr_0.95fr] md:py-20">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.35em] text-white/40">
            Cross Country Storytelling
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] md:text-7xl">
            A living media archive for the story, identity, and momentum of
            Farmers XC.
          </h1>

          <p className="max-w-2xl text-base leading-8 text-white/65 md:text-lg">
            Built like a modern sports media page, this site is the home for
            race coverage, athlete profiles, team history, results, and the
            visuals that define the program.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/media"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:opacity-90"
            >
              Enter the archive
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white/85 transition hover:border-white/30 hover:bg-white/5"
            >
              Explore the program
            </Link>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/40">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-medium">Featured Strip</h2>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/65">
              Interactive
            </span>
          </div>

          <div className="flex h-[360px] gap-3 overflow-x-auto pb-2">
            {spotlight.map((item) => (
              <article
                key={item.title}
                className="group relative min-w-[170px] flex-1 overflow-hidden rounded-[1.6rem] border border-white/10 transition-all duration-500 hover:min-w-[250px]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-base font-semibold">{item.title}</p>
                  <p className="mt-1 text-xs leading-5 text-white/70">
                    {item.subtitle}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-6 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-white/40">
              Site Structure
            </p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              The backbone of the Farmers XC universe
            </h2>
          </div>
          <p className="hidden max-w-xl text-sm leading-6 text-white/50 md:block">
            Each page is a lane of the archive: team identity, roster, media,
            results, schedule, and contact.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {sections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 transition hover:border-white/20 hover:bg-white/[0.06]"
            >
              <p className="mb-3 text-sm uppercase tracking-[0.22em] text-white/40 transition group-hover:text-white/60">
                {section.title}
              </p>
              <p className="leading-7 text-white/72">{section.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-white/40">
              Film Reel Gallery
            </p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              Hover-expand scrolling media strip
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-white/50">
            Replace these with real race images, workout shots, bus rides, team
            candids, championship visuals, and season-defining moments.
          </p>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-4">
          <div className="flex gap-4 overflow-x-auto pb-3">
            {reel.map((item) => (
              <article
                key={item.title}
                className="group relative h-[430px] min-w-[190px] overflow-hidden rounded-[1.75rem] border border-white/10 transition-all duration-500 hover:min-w-[340px]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-95" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-xl font-semibold">{item.title}</p>
                  <p className="mt-2 text-sm text-white/70">
                    Add your real caption here
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}