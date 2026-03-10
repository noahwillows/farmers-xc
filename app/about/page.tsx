export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20 text-white">
      <section className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.3em] text-white/40">
          Team Identity
        </p>

        <h1 className="mt-4 text-5xl font-semibold">About Farmers XC</h1>

        <p className="mt-6 text-white/70 leading-relaxed">
          Farmers XC is built on discipline, shared effort, and a culture that
          values growth through competition. This page documents the history,
          philosophy, and standards that define the team.
        </p>
      </section>

      <section className="mt-16 grid gap-6 md:grid-cols-3">
        {[
          {
            title: "History",
            text: "Where the program started, the key eras that shaped it, and the athletes who built the culture.",
          },
          {
            title: "Goals",
            text: "Competitive standards, performance goals, and the long-term vision for the team.",
          },
          {
            title: "Team Components",
            text: "Training, leadership, accountability, consistency, and the mentality required to compete.",
          },
        ].map((block) => (
          <div
            key={block.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <h3 className="text-lg font-semibold">{block.title}</h3>
            <p className="mt-3 text-white/70">{block.text}</p>
          </div>
        ))}
      </section>
    </main>
  );
}