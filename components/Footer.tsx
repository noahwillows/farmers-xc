export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-white/60">
        © {new Date().getFullYear()} Farmers XC
      </div>
    </footer>
  );
}