"use client";

export default function FarmersXCWebsite() {
  const sections = [
    {
      id: "history",
      title: "History",
      text: "Farmers XC is built on years of hard work, shared miles, and team tradition. Use this section to tell the story of where the team started, the key eras that shaped it, and the moments that still define the culture today.",
    },
    {
      id: "goals",
      title: "Goals",
      text: "This section can explain what the team is chasing now — competitive goals, personal growth, culture standards, and the long-term vision the program is building toward.",
    },
    {
      id: "team",
      title: "Team Components",
      text: "Describe the team pillars here: training, leadership, consistency, support, race mentality, accountability, and community. This is where the identity of Farmers XC can really come through.",
    },
  ];

  const media = [
    {
      title: "Season Opener",
      subtitle: "Add your real caption here",
      image:
        "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Long Run Morning",
      subtitle: "Add your real caption here",
      image:
        "https://images.unsplash.com/photo-1486218119243-13883505764c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Pack Finish",
      subtitle: "Add your real caption here",
      image:
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Workout Day",
      subtitle: "Add your real caption here",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Team Travel",
      subtitle: "Add your real caption here",
      image:
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Championship Week",
      subtitle: "Add your real caption here",
      image:
        "https://images.unsplash.com/photo-1502904550040-7534597429ae?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/45">
              Team Archive
            </p>
            <h1 className="text-2xl font-bold tracking-wide">Farmers XC</h1>
          </div>
          <nav className="hidden gap-2 md:flex">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 transition hover:border-white/30 hover:bg-white/10"
              >
                {section.title}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.1fr_0.9fr] md:py-20">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.35em] text-white/45">
            Cross Country Storytelling
          </p>
          <h2 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
            A living media archive for the story, identity, and momentum of
            Farmers XC.
          </h2>
          <p className="max-w-2xl text-base leading-7 text-white/70 md:text-lg">
            This version is designed to feel more like a modern sports media
            page — with clean navigation, a documentary-style tone, and a
            horizontal film-reel gallery where images expand on hover.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/30">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-medium">Featured Strip</h3>
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">
              Interactive
            </span>
          </div>
          <div className="flex h-[320px] gap-3 overflow-x-auto pb-2">
            {media.slice(0, 4).map((item, i) => (
              <div
                key={i}
                className="group relative min-w-[160px] flex-1 overflow-hidden rounded-[1.5rem] border border-white/10 transition-all duration-500 hover:min-w-[240px]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-sm font-medium">{item.title}</p>
                  <p className="text-xs text-white/65">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-3">
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20"
            >
              <p className="mb-3 text-sm uppercase tracking-[0.2em] text-white/45">
                {section.title}
              </p>
              <p className="leading-7 text-white/75">{section.text}</p>
            </section>
          ))}
        </div>

        <section className="mt-14">
          <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-white/45">
                Film Reel Gallery
              </p>
              <h3 className="text-2xl font-semibold md:text-3xl">
                Hover-expand scrolling media strip
              </h3>
            </div>
            <p className="max-w-xl text-sm text-white/55">
              Swap these placeholder images for your own race photos, training
              shots, team candids, bus rides, and championship moments.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4">
            <div className="flex gap-4 overflow-x-auto pb-3">
              {media.map((item, i) => (
                <article
                  key={i}
                  className="group relative h-[420px] min-w-[180px] overflow-hidden rounded-[1.75rem] border border-white/10 transition-all duration-500 hover:min-w-[340px]"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-90" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-lg font-semibold">{item.title}</p>
                    <p className="mt-1 text-sm text-white/70">{item.subtitle}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
