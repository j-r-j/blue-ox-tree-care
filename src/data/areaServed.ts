/** Geographic coverage for LocalBusiness schema — no street address (service-area business). */

import { neighborhoods } from './neighborhoods';

export interface ServedNeighborhood {
  name: string;
  slug: string;
  /** Google Maps place URL for the neighborhood. */
  placeUrl: string;
}

export interface ServedZip {
  postalCode: string;
  locality: string;
}

export const servedNeighborhoods: ServedNeighborhood[] = neighborhoods.map((n) => ({
  name: n.name,
  slug: n.slug,
  placeUrl: n.placeUrl,
}));

export const servedZipCodes: ServedZip[] = [
  { postalCode: '78703', locality: 'Tarrytown / Clarksville / Pemberton Heights' },
  { postalCode: '78756', locality: 'Rosedale / Bryker Woods' },
  { postalCode: '78751', locality: 'Hyde Park' },
  { postalCode: '78757', locality: 'Allandale' },
  { postalCode: '78731', locality: 'Northwest Hills' },
  { postalCode: '78704', locality: 'Zilker / Barton Hills' },
  { postalCode: '78746', locality: 'West Lake Hills / Rollingwood / Lost Creek' },
  { postalCode: '78735', locality: 'Barton Creek' },
  { postalCode: '78733', locality: 'Barton Creek / Westlake' },
  { postalCode: '78739', locality: 'Circle C / Southwest Austin' },
  { postalCode: '78732', locality: 'Steiner Ranch' },
  { postalCode: '78701', locality: 'Central Austin' },
  { postalCode: '78748', locality: 'Southwest Austin' },
  { postalCode: '78681', locality: 'Round Rock' },
  { postalCode: '78738', locality: 'Bee Cave / Lakeway' },
];
