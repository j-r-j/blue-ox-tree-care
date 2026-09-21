import { site, serviceAreaCities } from '../data/site';
import { servedNeighborhoods, servedZipCodes } from '../data/areaServed';
import { services } from '../data/services';
import type { FAQItem } from '../data/faq';

export interface BreadcrumbItem {
  name: string;
  path: string;
}

function absoluteUrl(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${site.url}${normalized}`;
}

export function localBusinessSchema() {
  const cityAreas = serviceAreaCities.map((city) => ({
    '@type': 'City' as const,
    name: city.name.split(' / ')[0],
    containedInPlace: {
      '@type': 'State',
      name: 'Texas',
    },
  }));

  const neighborhoodAreas = servedNeighborhoods.map((n) => ({
    '@type': 'Place' as const,
    name: n.name,
    url: n.placeUrl,
    containedInPlace: {
      '@type': 'City',
      name: 'Austin',
      containedInPlace: {
        '@type': 'State',
        name: 'Texas',
      },
    },
  }));

  const zipAreas = servedZipCodes.map((z) => ({
    '@type': 'PostalCode' as const,
    postalCode: z.postalCode,
    addressLocality: z.locality.split(' / ')[0],
    addressRegion: 'TX',
    addressCountry: 'US',
  }));

  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    '@id': `${site.url}/#localbusiness`,
    name: site.name,
    legalName: site.legalName,
    description: site.tagline,
    url: site.url,
    telephone: site.phoneTel,
    email: [site.email, site.emailArborists],
    image: `${site.url}/logo-ox.webp`,
    priceRange: '$$',
    sameAs: [site.facebook, site.instagram, site.googleProfile],
    employee: site.owners.map((owner) => ({
      '@type': 'Person',
      '@id': `${site.url}/#${owner.id}`,
      name: owner.name,
      url: absoluteUrl(`/arborists/${owner.id}`),
    })),
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [...site.hours.days],
        opens: site.hours.opens,
        closes: site.hours.closes,
      },
    ],
    areaServed: [...cityAreas, ...neighborhoodAreas, ...zipAreas],
    geo: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 30.2672,
        longitude: -97.7431,
      },
      geoRadius: '50000',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Tree Care Services',
      itemListElement: services.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.shortTitle,
          description: service.description,
          url: absoluteUrl(`/services/${service.slug}`),
        },
      })),
    },
  };
}

export function serviceSchema(slug: string) {
  const service = services.find((s) => s.slug === slug);
  if (!service) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.shortTitle,
    description: service.intro,
    url: absoluteUrl(`/services/${service.slug}`),
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${site.url}/#localbusiness`,
      name: site.name,
      telephone: site.phoneTel,
    },
    areaServed: serviceAreaCities.map((city) => ({
      '@type': 'City',
      name: city.name,
    })),
  };
}

export function faqPageSchema(items: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function personSchema(ownerId: string) {
  const owner = site.owners.find((o) => o.id === ownerId);
  if (!owner) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${site.url}/#${owner.id}`,
    name: owner.name,
    jobTitle: owner.title,
    description: owner.bio,
    url: absoluteUrl(`/arborists/${owner.id}`),
    image: `${site.url}/team/${owner.id}.jpg`,
    worksFor: {
      '@type': 'LocalBusiness',
      '@id': `${site.url}/#localbusiness`,
      name: site.name,
    },
    knowsAbout: ['Arboriculture', 'Tree care', 'Central Texas trees'],
  };
}

export function personSchemas() {
  return site.owners.map((owner) => personSchema(owner.id)!);
}

export interface ArticleSchemaInput {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
}

export function articleSchema(input: ArticleSchemaInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: input.title,
    description: input.description,
    url: absoluteUrl(input.path),
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    author: site.owners.map((owner) => ({
      '@type': 'Person',
      '@id': `${site.url}/#${owner.id}`,
      name: owner.name,
      url: absoluteUrl(`/arborists/${owner.id}`),
    })),
    publisher: {
      '@type': 'LocalBusiness',
      '@id': `${site.url}/#localbusiness`,
      name: site.name,
      logo: {
        '@type': 'ImageObject',
        url: `${site.url}/logo-ox.webp`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': absoluteUrl(input.path),
    },
  };
}

export function combineSchemas(
  ...schemas: Array<Record<string, unknown> | Record<string, unknown>[] | null | undefined>
): Record<string, unknown>[] {
  const flat: Record<string, unknown>[] = [];
  for (const schema of schemas) {
    if (!schema) continue;
    if (Array.isArray(schema)) {
      flat.push(...schema);
    } else {
      flat.push(schema);
    }
  }
  return flat;
}
