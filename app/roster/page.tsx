export default function RosterPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20 text-white">
      <h1 className="text-5xl font-semibold">Team Roster</h1>

      <p className="mt-4 text-white/70 max-w-2xl">
        Meet the athletes who make up Farmers XC. Runner profiles, personal
        records, and progression across seasons will live here.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {["Runner Name", "Runner Name", "Runner Name"].map((name, i) => (
          <div
            key={i}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-white/60">Distance Runner</p>
          </div>
        ))}
      </div>
    </main>
  );
}