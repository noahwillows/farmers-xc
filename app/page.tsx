"use client";

import Link from "next/link";
import Link from "next/link";

const featureCards = [
  {
    title: "Season Opener",
    subtitle: "Race coverage, atmosphere, and the first statement of the year.",
    image:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Road Miles",
    subtitle: "The daily process that builds the team behind the scenes.",
    image:
      "https://images.unsplash.com/photo-1486218119243-13883505764c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Start Line Focus",
    subtitle: "Intensity, composure, and the moments before the gun.",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Strength Session",
    subtitle: "Power, consistency, and the edge built outside the course.",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=80",
  },
];

const structureCards = [
  {
    title: "About",
    href: "/about",
    text: "History, identity, team standards, and the long-term story of the program.",
  },
  {
    title: "Roster",
    href: "/roster",
    text: "Athlete profiles, progression, class years, and the people behind the results.",
  },
  {
    title: "Media",
    href: "/media",
    text: "Featured race visuals, training galleries, travel moments, and archive drops.",
  },
  {
    title: "Results",
    href: "/results",
    text: "Meet history, progression across seasons, and key program performances.",
  },
  {
    title: "Schedule",
    href: "/schedule",
    text: "The season map: race dates, major meets, travel windows, and key checkpoints.",
  },
  {
    title: "Contact",
    href: "/contact",
    text: "Program information, recruiting details, and external team resources.",
  },
];

const reelCards = [
  {
    title: "Watts Course Energy",
    image:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Tempo Morning",
    image:
      "https://images.unsplash.com/photo-1486218119243-13883505764c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Race Pack",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Weight Room",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Travel Day",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Championship Build",
    image:
      "https://images.unsplash.com/photo-1502904550040-7534597429ae?auto=format&fit=crop&w=1600&q=80",
  },
];

export default function HomePage() {
  return (
    <>
      <main className="page-shell">
        <section className="hero-shell">
          <div className="hero-backdrop" />

          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Cross Country Storytelling</p>

              <h1>
                A living media archive for the story, identity, and momentum of
                Farmers XC.
              </h1>

              <p className="hero-text">
                Built like a modern sports feature page, this site is the home
                for race coverage, athlete profiles, team history, results, and
                the visuals that define the program.
              </p>

              <div className="hero-actions">
                <Link href="/media" className="btn-primary">
                  Enter the archive
                </Link>

                <Link href="/about" className="btn-secondary">
                  Explore the program
                </Link>
              </div>
            </div>

            <div className="feature-panel">
              <div className="feature-head">
                <h2>Featured Strip</h2>
                <span>Interactive</span>
              </div>

              <div className="feature-strip">
                {featureCards.map((item) => (
                  <article key={item.title} className="feature-card">
                    <img src={item.image} alt={item.title} />
                    <div className="feature-overlay" />
                    <div className="feature-content">
                      <p className="feature-title">{item.title}</p>
                      <p className="feature-subtitle">{item.subtitle}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="structure-shell">
          <div className="section-header">
            <div>
              <p className="eyebrow">Site Structure</p>
              <h2>The backbone of the Farmers XC universe</h2>
            </div>

            <p className="section-copy">
              Every page is a lane of the archive: team identity, athlete
              profiles, visuals, results, schedule, and contact.
            </p>
          </div>

          <div className="structure-grid">
            {structureCards.map((section) => (
              <Link key={section.href} href={section.href} className="info-card">
                <p className="info-kicker">{section.title}</p>
                <h3>{section.title}</h3>
                <p className="info-text">{section.text}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="reel-shell">
          <div className="section-header">
            <div>
              <p className="eyebrow">Film Reel Gallery</p>
              <h2>A scrolling strip built for race visuals</h2>
            </div>

            <p className="section-copy">
              Replace these with actual Texas A&amp;M race photos, long run
              mornings, travel days, finish-line moments, and championship
              imagery.
            </p>
          </div>

          <div className="reel-frame">
            <div className="reel-row">
              {reelCards.map((item) => (
                <article key={item.title} className="reel-card">
                  <img src={item.image} alt={item.title} />
                  <div className="reel-overlay" />
                  <div className="reel-content">
                    <p className="reel-title">{item.title}</p>
                    <p className="reel-caption">Add your real caption here</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        .page-shell {
          background: #050505;
          color: white;
        }

        .hero-shell {
          position: relative;
          overflow: hidden;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .hero-backdrop {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(
              circle at 12% 8%,
              rgba(255, 255, 255, 0.09),
              transparent 28%
            ),
            radial-gradient(
              circle at 88% 18%,
              rgba(255, 255, 255, 0.06),
              transparent 24%
            ),
            linear-gradient(180deg, rgba(255, 255, 255, 0.015), transparent);
          pointer-events: none;
        }

        .hero-grid {
          position: relative;
          max-width: 1400px;
          margin: 0 auto;
          padding: 76px 28px 88px;
          display: grid;
          grid-template-columns: 1.04fr 0.96fr;
          gap: 44px;
          align-items: center;
        }

        .hero-copy {
          max-width: 760px;
        }

        .eyebrow {
          margin: 0 0 18px;
          text-transform: uppercase;
          letter-spacing: 0.42em;
          font-size: 11px;
          color: rgba(255, 255, 255, 0.4);
        }

        .hero-copy h1 {
          margin: 0;
          font-size: clamp(3.1rem, 7vw, 6.1rem);
          line-height: 0.92;
          letter-spacing: -0.05em;
          max-width: 900px;
        }

        .hero-text {
          margin: 28px 0 0;
          max-width: 720px;
          color: rgba(255, 255, 255, 0.62);
          font-size: 18px;
          line-height: 1.8;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 32px;
        }

        .btn-primary,
        .btn-secondary {
          text-decoration: none;
          border-radius: 999px;
          padding: 14px 22px;
          font-size: 14px;
          font-weight: 700;
          transition:
            transform 0.18s ease,
            background 0.18s ease,
            border-color 0.18s ease,
            color 0.18s ease,
            opacity 0.18s ease;
        }

        .btn-primary {
          background: white;
          color: black;
        }

        .btn-primary:hover {
          transform: translateY(-1px);
          opacity: 0.92;
        }

        .btn-secondary {
          border: 1px solid rgba(255, 255, 255, 0.18);
          color: rgba(255, 255, 255, 0.9);
        }

        .btn-secondary:hover {
          transform: translateY(-1px);
          border-color: rgba(255, 255, 255, 0.32);
          background: rgba(255, 255, 255, 0.05);
        }

        .feature-panel {
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 34px;
          padding: 18px;
          background: rgba(255, 255, 255, 0.04);
          box-shadow: 0 24px 90px rgba(0, 0, 0, 0.45);
        }

        .feature-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }

        .feature-head h2 {
          margin: 0;
          font-size: 18px;
          font-weight: 600;
        }

        .feature-head span {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.62);
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.05);
          border-radius: 999px;
          padding: 7px 12px;
        }

        .feature-strip {
          display: flex;
          gap: 12px;
          overflow-x: auto;
          padding-bottom: 6px;
        }

        .feature-card {
          position: relative;
          height: 390px;
          min-width: 182px;
          flex: 1;
          overflow: hidden;
          border-radius: 28px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          transition:
            min-width 0.45s ease,
            transform 0.45s ease;
        }

        .feature-card:hover {
          min-width: 270px;
        }

        .feature-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1);
          transition: transform 0.45s ease;
        }

        .feature-card:hover img {
          transform: scale(1.05);
        }

        .feature-overlay,
        .reel-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.05),
            rgba(0, 0, 0, 0.2) 35%,
            rgba(0, 0, 0, 0.85)
          );
        }

        .feature-content {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 18px;
        }

        .feature-title {
          margin: 0;
          font-size: 18px;
          font-weight: 700;
        }

        .feature-subtitle {
          margin: 8px 0 0;
          color: rgba(255, 255, 255, 0.72);
          font-size: 13px;
          line-height: 1.55;
        }

        .structure-shell,
        .reel-shell {
          max-width: 1400px;
          margin: 0 auto;
          padding: 70px 28px 0;
        }

        .reel-shell {
          padding-bottom: 20px;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          gap: 28px;
          align-items: end;
          margin-bottom: 28px;
        }

        .section-header h2 {
          margin: 10px 0 0;
          font-size: clamp(2rem, 4vw, 3rem);
          line-height: 1;
        }

        .section-copy {
          max-width: 540px;
          margin: 0;
          color: rgba(255, 255, 255, 0.48);
          font-size: 14px;
          line-height: 1.75;
        }

        .structure-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }

        .info-card {
          text-decoration: none;
          color: inherit;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 32px;
          background: rgba(255, 255, 255, 0.035);
          padding: 26px;
          transition:
            transform 0.2s ease,
            border-color 0.2s ease,
            background 0.2s ease;
        }

        .info-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 255, 255, 0.24);
          background: rgba(255, 255, 255, 0.055);
        }

        .info-kicker {
          margin: 0 0 12px;
          text-transform: uppercase;
          letter-spacing: 0.28em;
          font-size: 11px;
          color: rgba(255, 255, 255, 0.4);
        }

        .info-card h3 {
          margin: 0;
          font-size: 23px;
          font-weight: 700;
        }

        .info-text {
          margin: 14px 0 0;
          color: rgba(255, 255, 255, 0.68);
          line-height: 1.75;
          font-size: 15px;
        }

        .reel-frame {
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 34px;
          background: rgba(255, 255, 255, 0.035);
          padding: 16px;
        }

        .reel-row {
          display: flex;
          gap: 14px;
          overflow-x: auto;
          padding-bottom: 6px;
        }

        .reel-card {
          position: relative;
          min-width: 210px;
          height: 460px;
          overflow: hidden;
          border-radius: 30px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition:
            min-width 0.45s ease,
            transform 0.45s ease;
        }

        .reel-card:hover {
          min-width: 350px;
        }

        .reel-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.45s ease;
        }

        .reel-card:hover img {
          transform: scale(1.05);
        }

        .reel-content {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 22px;
        }

        .reel-title {
          margin: 0;
          font-size: 22px;
          font-weight: 700;
        }

        .reel-caption {
          margin: 8px 0 0;
          color: rgba(255, 255, 255, 0.7);
          font-size: 14px;
        }

        @media (max-width: 1100px) {
          .hero-grid {
            grid-template-columns: 1fr;
          }

          .section-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .structure-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 760px) {
          .hero-grid,
          .structure-shell,
          .reel-shell {
            padding-left: 18px;
            padding-right: 18px;
          }

          .hero-grid {
            padding-top: 52px;
            padding-bottom: 60px;
          }

          .hero-copy h1 {
            font-size: 3rem;
          }

          .hero-text {
            font-size: 16px;
          }

          .structure-grid {
            grid-template-columns: 1fr;
          }

          .feature-card {
            height: 320px;
            min-width: 150px;
          }

          .feature-card:hover {
            min-width: 220px;
          }

          .reel-card {
            min-width: 175px;
            height: 360px;
          }

          .reel-card:hover {
            min-width: 260px;
          }

          .reel-title {
            font-size: 18px;
          }
        }
      `}</style>
    </>
  );
}