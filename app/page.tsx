export default function HomePage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20 text-white">
      <section className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.3em] text-white/40">
          Cross Country Storytelling
        </p>

        <h1 className="mt-4 text-5xl font-semibold leading-tight md:text-6xl">
          A living media archive for the story, identity, and momentum of
          Farmers XC.
        </h1>

        <p className="mt-6 text-lg text-white/70">
          This site is designed as a modern archive for the Farmers XC program.
          It captures the culture, races, athletes, and milestones that define
          the team across seasons.
        </p>
      </section>

      <section className="mt-16 grid gap-6 md:grid-cols-3">
        {[
          {
            title: "About",
            text: "History, goals, and the identity that drives Farmers XC.",
          },
          {
            title: "Roster",
            text: "Meet the athletes and explore runner profiles.",
          },
          {
            title: "Media",
            text: "Race photos, training moments, and team highlights.",
          },
          {
            title: "Results",
            text: "Archive meet performances and program records.",
          },
          {
            title: "Schedule",
            text: "Upcoming races and season calendar.",
          },
          {
            title: "Contact",
            text: "Program information and recruiting details.",
          },
        ].map((card) => (
          <div
            key={card.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <h3 className="text-lg font-semibold">{card.title}</h3>
            <p className="mt-2 text-white/70">{card.text}</p>
          </div>
        ))}
      </section>
    </main>
  );
}