/**
 * Domains Feature — Static Data
 * Developer Students Club • SRM IST Ramapuram
 *
 * Single source of truth for all three DSC domains.
 * Extend by appending a new object to the `DOMAINS` array.
 */

import type { DomainCardData } from './types';

export const DOMAINS: DomainCardData[] = [
  {
    id: 'technical',
    title: 'Technical',
    description:
      'Build robust systems, design scalable software, and solve real-world engineering problems.',
    imagePath: '/domains/technical.webp',
    iconName: 'cpu',
    subdomains: [
      { label: 'Web Development' },
      { label: 'Competitive Programming' },
      { label: 'AI & Machine Learning' },
      { label: 'Data Science' },
    ],
    ctaLabel: 'Explore Technical',
    ctaHref: '/contact',
  },
  {
    id: 'creatives',
    title: 'Creatives',
    description:
      'Craft memorable experiences through design, storytelling, and visual creativity.',
    imagePath: '/domains/creatives.webp',
    iconName: 'palette',
    subdomains: [
      { label: 'UI/UX Design' },
      { label: 'Content Creation' },
      { label: 'Video Editing' },
      { label: 'Photography' },
    ],
    ctaLabel: 'Explore Creatives',
    ctaHref: '/contact',
  },
  {
    id: 'operations',
    title: 'Operations',
    description:
      'Lead teams, manage events, and build a thriving developer community.',
    imagePath: '/domains/operations.webp',
    iconName: 'users',
    subdomains: [
      { label: 'Event Management' },
      { label: 'Public Relations' },
      { label: 'Marketing' },
    ],
    ctaLabel: 'Explore Operations',
    ctaHref: '/contact',
  },
];
