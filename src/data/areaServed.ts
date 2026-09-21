/** Geographic coverage for LocalBusiness schema — no street address (service-area business). */

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

export const servedNeighborhoods: ServedNeighborhood[] = [
  {
    name: 'Tarrytown',
    slug: 'tarrytown',
    placeUrl: 'https://www.google.com/maps/place/Tarrytown,+Austin,+TX',
  },
  {
    name: 'West Lake Hills',
    slug: 'west-lake-hills',
    placeUrl: 'https://www.google.com/maps/place/West+Lake+Hills,+TX',
  },
  {
    name: 'Rollingwood',
    slug: 'rollingwood',
    placeUrl: 'https://www.google.com/maps/place/Rollingwood,+TX',
  },
  {
    name: 'Circle C Ranch',
    slug: 'circle-c',
    placeUrl: 'https://www.google.com/maps/place/Circle+C+Ranch,+Austin,+TX',
  },
  {
    name: 'Mueller',
    slug: 'mueller-east-austin',
    placeUrl: 'https://www.google.com/maps/place/Mueller,+Austin,+TX',
  },
  {
    name: 'Steiner Ranch',
    slug: 'steiner-ranch',
    placeUrl: 'https://www.google.com/maps/place/Steiner+Ranch,+Austin,+TX',
  },
];

export const servedZipCodes: ServedZip[] = [
  { postalCode: '78703', locality: 'Austin (Tarrytown / Clarksville)' },
  { postalCode: '78746', locality: 'West Lake Hills / Rollingwood' },
  { postalCode: '78739', locality: 'Circle C / Southwest Austin' },
  { postalCode: '78723', locality: 'Mueller / East Austin' },
  { postalCode: '78732', locality: 'Steiner Ranch / Northwest Austin' },
  { postalCode: '78701', locality: 'Central Austin' },
  { postalCode: '78704', locality: 'South Austin' },
  { postalCode: '78731', locality: 'Northwest Austin' },
  { postalCode: '78748', locality: 'Southwest Austin' },
  { postalCode: '78681', locality: 'Round Rock' },
  { postalCode: '78738', locality: 'Bee Cave / Lakeway' },
];
