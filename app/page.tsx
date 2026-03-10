import Link from "next/link";

const spotlight = [
  {
    title: "Season Opener",
    subtitle: "Meet coverage, atmosphere, and the first statement of the year.",
    image:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Long Run Morning",
    subtitle: "The daily work that builds the program behind the scenes.",
    image:
      "https://images.unsplash.com/photo-1486218119243-13883505764c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Pack Finish",
    subtitle: "Moments that define team mentality and race-day identity.",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Workout Day",
    subtitle: "Strength, reps, discipline, and the edge built in training.",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
  },
];

const sections = [
  {
    title: "About",
    href: "/about",
    text: "History, identity, goals, and the standards that define Farmers XC.",
  },
  {
    title: "Roster",
    href: "/roster",
    text: "Athlete profiles, progression, and the people behind the program.",
  },
  {
    title: "Media",
    href: "/media",
    text: "Race visuals, training footage, featured moments, and archives.",
  },
  {
    title: "Results",
    href: "/results",
    text: "Meet history, progression across seasons, and key performances.",
  },
  {
    title: "Schedule",
    href: "/schedule",
    text: "The upcoming season map: races, important dates, and travel.",
  },
  {
    title: "Contact",
    href: "/contact",
    text: "Program information, recruiting details, and external team links.",
  },
];

const reel = [
  {
    title: "Race Atmosphere",
    image:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Road Miles",
    image:
      "https://images.unsplash.com/photo-1486218119243-13883505764c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Start Line",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Strength Session",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Travel Day",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Championship Build",
    image:
      "https://images.unsplash.com/photo-1502904550040-7534597429ae?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.05),transparent_30%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1.05fr_0.95fr] md:py-28">
          <div className="space-y-7">
            <p className="text-xs uppercase tracking-[0.4em] text-white/38">
              Cross Country Storytelling
            </p>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.92] md:text-7xl">
              A living media archive for the story, identity, and momentum of
              Farmers XC.
            </h1>

            <p className="max-w-2xl text-base leading-8 text-white/62 md:text-lg">
              Built like a modern sports feature page, this site is the home
              for race coverage, athlete profiles, team history, results, and
              the visuals that define the program.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/media"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90"
              >
                Enter the archive
              </Link>

              <Link
                href="/about"
                className="rounded-full border border-white/18 px-6 py-3 text-sm font-medium text-white/88 transition hover:border-white/35 hover:bg-white/6"
              >
                Explore the program
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_20px_80px_rgba(0,0,0,0.55)]">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-medium">Featured Strip</h2>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/62">
                Interactive
              </span>
            </div>

            <div className="flex h-[380px] gap-3 overflow-x-auto pb-2">
              {spotlight.map((item) => (
                <article
                  key={item.title}
                  className="group relative min-w-[180px] flex-1 overflow-hidden rounded-[1.7rem] border border-white/10 transition-all duration-500 hover:min-w-[265px]"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
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
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/38">
              Site Structure
            </p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
              The backbone of the Farmers XC universe
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-6 text-white/48">
            Every page is a lane of the archive: team identity, roster,
            visuals, results, schedule, and contact.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {sections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 transition hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.055]"
            >
              <p className="mb-3 text-xs uppercase tracking-[0.28em] text-white/38 transition group-hover:text-white/62">
                {section.title}
              </p>
              <p className="text-lg font-medium text-white">{section.title}</p>
              <p className="mt-3 leading-7 text-white/68">{section.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/38">
              Film Reel Gallery
            </p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
              A scrolling strip built for race visuals
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-6 text-white/48">
            Replace these with real race photos, training days, travel shots,
            finish-line moments, and championship imagery.
          </p>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-4">
          <div className="flex gap-4 overflow-x-auto pb-3">
            {reel.map((item) => (
              <article
                key={item.title}
                className="group relative h-[440px] min-w-[200px] overflow-hidden rounded-[1.8rem] border border-white/10 transition-all duration-500 hover:min-w-[345px]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-95" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-xl font-semibold">{item.title}</p>
                  <p className="mt-2 text-sm text-white/68">
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