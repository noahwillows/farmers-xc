export default function ResultsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20 text-white">
      <h1 className="text-5xl font-semibold">Race Results</h1>

      <p className="mt-4 text-white/70 max-w-2xl">
        Archive of meet performances, season results, and program records.
      </p>

      <div className="mt-12 space-y-4">
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <h3 className="font-semibold">Season Meet</h3>
          <p className="text-white/60">5k – Team Results</p>
        </div>
      </div>
    </main>
  );
}