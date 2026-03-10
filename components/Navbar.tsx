"use client";


import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/about", label: "About" },
  { href: "/roster", label: "Roster" },
  { href: "/media", label: "Media" },
  { href: "/results", label: "Results" },
  { href: "/schedule", label: "Schedule" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <header className="nav-shell">
        <div className="nav-inner">
          <Link href="/" className="brand">
            <span className="brand-kicker">Texas A&amp;M Cross Country</span>
            <span className="brand-title">Farmers XC</span>
          </Link>

          <nav className="nav-links">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${active ? "active" : ""}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      <style jsx>{`
        .nav-shell {
          position: sticky;
          top: 0;
          z-index: 1000;
          backdrop-filter: blur(18px);
          background: rgba(5, 5, 5, 0.82);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .nav-inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 18px 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .brand {
          display: flex;
          flex-direction: column;
          text-decoration: none;
          color: white;
          line-height: 1.05;
        }

        .brand-kicker {
          font-size: 10px;
          letter-spacing: 0.42em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.42);
          margin-bottom: 6px;
        }

        .brand-title {
          font-size: 2rem;
          font-weight: 700;
          letter-spacing: -0.03em;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .nav-link {
          color: rgba(255, 255, 255, 0.74);
          text-decoration: none;
          padding: 10px 16px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 600;
          transition:
            background 0.2s ease,
            color 0.2s ease,
            transform 0.2s ease;
        }

        .nav-link:hover {
          background: rgba(255, 255, 255, 0.08);
          color: white;
          transform: translateY(-1px);
        }

        .nav-link.active {
          background: white;
          color: black;
        }

        @media (max-width: 900px) {
          .nav-inner {
            padding: 16px 18px;
            flex-direction: column;
            align-items: flex-start;
          }

          .brand-title {
            font-size: 1.75rem;
          }

          .nav-links {
            width: 100%;
            gap: 8px;
          }

          .nav-link {
            padding: 9px 13px;
            font-size: 13px;
          }
        }
      `}</style>
    </>
  );
}