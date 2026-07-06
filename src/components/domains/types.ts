/**
 * Domains Feature — Type Definitions
 * Developer Students Club • SRM IST Ramapuram
 */

/** A single subdomain tag belonging to a domain. */
export interface Subdomain {
  /** Human-readable label displayed as a tag on the card. */
  label: string;
}

/** Data shape for a single domain card. */
export interface DomainCardData {
  /**
   * Unique identifier used as a stable React key and for
   * aria-labelledby anchoring.
   */
  id: string;

  /** Primary heading displayed on the card. */
  title: string;

  /** One-to-two sentence description of the domain. */
  description: string;

  /**
   * Absolute public path to the artwork used as the card background image.
   * Example: "/i1.webp"
   */
  imagePath: string;

  /**
   * Icon identifier string. Kept as a plain string so the component
   * layer can resolve it to an inline SVG without coupling data to an import.
   */
  iconName: string;

  /** Ordered list of subdomain tags rendered on the card. */
  subdomains: Subdomain[];

  /** Label text for the card's call-to-action link. Optional. */
  ctaLabel?: string;

  /** Destination href for the call-to-action link. Optional. */
  ctaHref?: string;
}
