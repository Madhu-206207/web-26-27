/**
 * DomainCard
 * Developer Students Club • SRM IST Ramapuram
 *
 * Implements the exact GSAP 3D tilt behaviour from TeamShowcase:
 *   rotateX / rotateY / scale on mousemove, smooth reset on mouseleave.
 */

import { useRef } from 'react';
import { gsap } from 'gsap';
import type { DomainCardData } from './types';

interface Props {
  domain: DomainCardData;
  headingLevel?: 2 | 3 | 4;
  index?: number;
}

export default function DomainCard({
  domain,
  headingLevel = 3,
  index = 0,
}: Props) {
  const { id, title, description, imagePath, subdomains } = domain;

  const Heading = `h${headingLevel}` as 'h2' | 'h3' | 'h4';
  const titleId = `domain-card-title-${id}`;
  const cardRef = useRef<HTMLElement>(null);

  // ── 3D tilt — identical to TeamShowcase implementation ──────────────
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    const tiltX = (yc - y) / 20;
    const tiltY = (x - xc) / 20;
    gsap.to(card, {
      rotateX: tiltX,
      rotateY: tiltY,
      scale: 1.025,
      duration: 0.35,
      ease: 'power2.out',
      overwrite: 'auto',
    });
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.5,
      ease: 'power2.out',
      overwrite: 'auto',
    });
  };
  // ────────────────────────────────────────────────────────────────────

  return (
    <article
      ref={cardRef}
      className="domain-card-glass"
      aria-labelledby={titleId}
      style={{ '--card-index': index } as React.CSSProperties}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* ── Top Artwork & Title Layer ─────────────────────────────────────────── */}
      <div className="domain-card-top">
        <img
          src={imagePath}
          alt=""
          className="domain-card-artwork-img"
          loading="lazy"
          decoding="async"
        />
        <div className="domain-card-artwork-overlay" aria-hidden="true" />

        {/* Icon in upper-left corner */}
        <div
          className={`domain-card-icon domain-card-icon--${id}`}
          aria-hidden="true"
        />

        {/* Title in lower-left corner over gradient overlay */}
        <Heading id={titleId} className="domain-card-title">
          {title}
        </Heading>
      </div>

      {/* ── Content Layer ─────────────────────────────────────────── */}
      <div className="domain-card-body">

        <p className="domain-card-description">{description}</p>

        {subdomains.length > 0 && (
          <ul className="domain-card-bullet-list" aria-label={`${title} subdomains`}>
            {subdomains.map((sub) => (
              <li key={sub.label} className="domain-card-bullet-item">
                <span className="bullet-dot" aria-hidden="true" />
                {sub.label}
              </li>
            ))}
          </ul>
        )}

      </div>

      {/* ── Glow Ring ─────────────────────────────────────────────── */}
      <div className="domain-card-glow-ring" aria-hidden="true" />
    </article>
  );
}
