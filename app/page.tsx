export default function AboutPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.3em] text-white/45">
          About
        </p>
        <h2 className="mt-3 text-4xl font-semibold md:text-5xl">
          History, goals, and team identity
        </h2>
        <p className="mt-4 leading-7 text-white/70">
          This page is where the long-form story of Farmers XC can live. It can
          explain where the team began, what defines the culture, and what the
          program is building toward.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: "History",
            text: "Tell the story of the team’s origins, key eras, important athletes, and the moments that shaped the culture.",
          },
          {
            title: "Goals",
            text: "Explain the current competitive goals, standards of excellence, and the long-term vision of the program.",
          },
          {
            title: "Team Components",
            text: "Define the pillars of the team: training, leadership, consistency, accountability, support, and race mentality.",
          },
        ].map((section) => (
          <div
            key={section.title}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-6"
          >
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-white/45">
              {section.title}
            </p>
            <p className="leading-7 text-white/75">{section.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}