/**
 * DomainsSection
 * Developer Students Club • SRM IST Ramapuram
 *
 * Phase 3: Top-right arch artwork with GSAP parallax movement,
 *          grayscale → colour on hover, emerald glow on hover.
 */

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import DomainCard from './DomainCard';
import { DOMAINS } from './domainData';

const SECTION_HEADING_ID = 'domains-section-heading';

export default function DomainsSection() {
  const archRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set initial static rotation — mirrors TeamArtCutouts pattern
    gsap.set(archRef.current, {
      rotation: 8,
      x: 0,
      y: 0,
    });

    const move = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      const y = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);

      gsap.to(archRef.current, {
        x: x * 12,
        y: y * 8,
        duration: 0.8,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    };

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <section
      className="domains-section"
      aria-labelledby={SECTION_HEADING_ID}
    >
      <div className="domains-section-container">

        {/* ── Top-right arch artwork (Phase 3) ───────────────────────────── */}
        <div className="domains-arch-artwork" aria-hidden="true">
          <div
            ref={archRef}
            className="domains-arch-wrap"
          >
            <img
              src="/i2.webp"
              alt=""
              className="domains-arch-image"
              draggable="false"
            />
          </div>
        </div>

        {/* ── Section Header ──────────────────────────────────────── */}
        <header className="domains-section-header">

          <span className="domains-section-label" aria-hidden="true">
            Our Domains
          </span>

          <h1 id={SECTION_HEADING_ID} className="domains-section-title">
            Three Domains.<br />
            <span className="domains-section-title-italic">Infinite Possibilities.</span>
          </h1>

          <p className="domains-section-description">
            Whether you&rsquo;re passionate about building cutting-edge
            technology, crafting memorable digital experiences, or leading
            thriving communities, there&rsquo;s a place for you at DSC.
            <br />
            <span className="emerald-italic">
              Discover the domain where your curiosity becomes your impact.
            </span>
          </p>

          <div className="domains-decorative-divider" aria-hidden="true">
            &lt;/&gt;
          </div>

        </header>

        {/* ── Domain Cards Grid ───────────────────────────────────── */}
        <div className="domains-grid" role="list">
          {DOMAINS.map((domain, index) => (
            <div key={domain.id} className="domains-grid-item" role="listitem">
              <DomainCard
                domain={domain}
                headingLevel={2}
                index={index}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
