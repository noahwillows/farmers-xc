export default function MediaPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20 text-white">
      <h1 className="text-5xl font-semibold">Media Archive</h1>

      <p className="mt-4 text-white/70 max-w-2xl">
        A collection of race photos, training moments, team travel, and program
        highlights.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="aspect-[4/5] rounded-2xl border border-white/10 bg-white/5"
          />
        ))}
      </div>
    </main>
  );
}