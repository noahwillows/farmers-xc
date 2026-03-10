export default function SchedulePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20 text-white">
      <h1 className="text-5xl font-semibold">Season Schedule</h1>

      <p className="mt-4 text-white/70">
        Upcoming races and key dates for the Farmers XC season.
      </p>

      <div className="mt-12 space-y-4">
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <h3 className="font-semibold">Meet Name</h3>
          <p className="text-white/60">Date – Location</p>
        </div>
      </div>
    </main>
  );
}