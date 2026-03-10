export default function AboutPage() {
  return (
    <main className="bg-black text-white min-h-screen">

      <section className="max-w-5xl mx-auto px-6 py-24">

        <p className="uppercase tracking-[0.25em] text-white/40 text-sm">
          About the Program
        </p>

        <h1 className="text-5xl font-bold mt-6">
          The Story of Farmers XC
        </h1>

        <p className="text-white/60 text-lg leading-8 mt-6">
          Farmers XC is built on discipline, team culture, and relentless
          improvement. This site serves as a living archive documenting the
          athletes, races, and milestones that define the program.
        </p>

        <div className="mt-12 space-y-8">

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              Program Philosophy
            </h2>

            <p className="text-white/70 leading-7">
              Cross country is more than racing. It is about building a team
              identity, committing to the daily process, and pushing the
              limits of what athletes can achieve together.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              What This Site Documents
            </h2>

            <p className="text-white/70 leading-7">
              This archive captures races, training culture, team history,
              athlete development, and the defining moments of each season.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}