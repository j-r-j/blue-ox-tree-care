import { site, serviceAreaCities } from '../data/site';
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
    image: `${site.url}/images/hero.jpg`,
    priceRange: '$$',
    sameAs: [site.instagram, site.facebook, site.googleProfile],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [...site.hours.days],
        opens: site.hours.opens,
        closes: site.hours.closes,
      },
    ],
    areaServed: serviceAreaCities.map((city) => ({
      '@type': 'City',
      name: city.name.split(' / ')[0],
      containedInPlace: {
        '@type': 'State',
        name: 'Texas',
      },
    })),
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

export function personSchemas() {
  return site.owners.map((owner) => ({
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${site.url}/#${owner.id}`,
    name: owner.name,
    jobTitle: owner.title,
    description: owner.bio,
    worksFor: {
      '@type': 'LocalBusiness',
      '@id': `${site.url}/#localbusiness`,
      name: site.name,
    },
    knowsAbout: ['Arboriculture', 'Tree care', 'Central Texas trees'],
  }));
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
