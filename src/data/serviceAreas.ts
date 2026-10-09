import { seo } from './site';

export interface ServiceArea {
  slug: string;
  name: string;
  /** Visible H1 / page banner title. */
  title: string;
  /** Document `<title>`, unique per page for SEO. */
  metaTitle: string;
  metaDescription: string;
  description: string;
  body: string[];
  neighborhoods: string[];
  relatedServices: string[];
  /** Neighborhood page slugs near this area (Austin links every neighborhood). */
  nearbyNeighborhoods?: string[];
}

export const serviceAreas: ServiceArea[] = [
  {
    slug: 'austin',
    name: 'Austin',
    title: seo.areaTitle('Austin'),
    metaTitle: seo.areaMetaTitle('Austin'),
    metaDescription: seo.areaMeta('Austin'),
    description:
      'Austin tree service for every kind of tree job, all over Austin and Travis County. We work from the central neighborhoods out to the Hill Country.',
    body: [
      'Blue Ox Tree Care is owned by an ISA Board Certified Master Arborist. We know Central Texas trees. We know how to guard against oak wilt, a disease that kills oaks. We also know the City of Austin tree rules.',
      'Maybe your big live oak needs pruning to keep it strong. Maybe you want a risk check before storm season, or organic care for a tree that is getting sick. Either way, you work with certified arborists who know Austin trees and rules.',
      'Call (512) 749-8615 for your free estimate. We have no storefront. We come to you.',
    ],
    neighborhoods: [
      'Central Austin',
      'North Austin',
      'South Austin',
      'Westlake & Rollingwood',
      'Tarrytown & Clarksville',
      'Hyde Park & Allandale',
    ],
    relatedServices: ['tree-trimming', 'tree-removal', 'pest-disease', 'tree-risk-assessment'],
  },
  {
    slug: 'round-rock',
    name: 'Round Rock',
    title: seo.areaTitle('Round Rock'),
    metaTitle: seo.areaMetaTitle('Round Rock'),
    metaDescription: seo.areaMeta('Round Rock'),
    description:
      'Tree trimming, tree removal, and arborist services in Round Rock, TX. We serve Williamson County. We prune, grind stumps, and give trees organic care.',
    body: [
      'We serve Round Rock and the nearby towns in Williamson County. You get the same ISA certified care we bring to Austin. Some homes are in new neighborhoods. Others have big, old shade trees. Either way, we plan pruning, removal, and tree care to fit your yard.',
      'Round Rock has new building going up next to big, older trees, so no two yards are the same. Before we suggest trimming, removal, or organic care, we look at your tree\'s shape, its type, and your soil.',
      'We are licensed and insured, and estimates are free. Call (512) 749-8615 to set up tree service in Round Rock.',
    ],
    neighborhoods: [
      'Old Settlers Park area',
      'Teravista',
      'Forest Creek',
      "Behren's Crossing",
      'Downtown Round Rock',
    ],
    relatedServices: ['tree-trimming', 'storm-damage', 'stump-grinding', 'organic-fertilizing'],
  },
  {
    slug: 'bee-cave-lakeway',
    name: 'Bee Cave / Lakeway',
    title: seo.areaTitle('Bee Cave & Lakeway'),
    metaTitle: seo.areaMetaTitle('Bee Cave & Lakeway'),
    metaDescription: seo.areaMeta('Bee Cave and Lakeway'),
    description:
      'Tree care in Bee Cave, Lakeway, and the Austin Hill Country. We trim, remove, and check trees on steep lots and in oak woods. We also help homes get ready for wildfire.',
    body: [
      'Bee Cave, Lakeway, and the Hill Country around them bring their own tree problems. Lots are steep. Native juniper and oak woods grow close to homes. Wildfire is a real worry. Blue Ox Tree Care trims, removes, and checks trees with this land in mind, and we do fire prep work too.',
      'Our fire prep work creates defensible space, a safer zone around your home with less fuel to burn. We follow guidelines that are proven to protect homes where wildfires happen. We learned this work in mountain towns before we brought it to the Austin Hill Country.',
      'Call (512) 749-8615 for a free estimate on tree care in Bee Cave, Lakeway, West Lake Hills, and nearby towns.',
    ],
    neighborhoods: [
      'Bee Cave',
      'Lakeway',
      'West Lake Hills',
      'Steiner Ranch',
      'Spanish Oaks',
      'Rough Hollow',
    ],
    relatedServices: ['fire-mitigation', 'tree-trimming', 'tree-removal', 'tree-risk-assessment'],
    nearbyNeighborhoods: ['west-lake-hills', 'rollingwood', 'barton-creek', 'lost-creek', 'steiner-ranch'],
  },
];

export function getServiceArea(slug: string): ServiceArea | undefined {
  return serviceAreas.find((a) => a.slug === slug);
}
