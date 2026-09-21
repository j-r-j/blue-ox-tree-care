import { site, serviceAreaCities } from '../data/site';
import { services } from '../data/services';
import type { FAQItem } from '../data/faq';

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${site.url}/#localbusiness`,
    name: site.name,
    legalName: site.legalName,
    description: site.tagline,
    url: site.url,
    telephone: site.phoneTel,
    email: site.email,
    image: `${site.url}/images/hero-placeholder.svg`,
    priceRange: '$$',
    sameAs: [site.instagram],
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
          url: `${site.url}/services/${service.slug}`,
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
    description: service.description,
    url: `${site.url}/services/${service.slug}`,
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
