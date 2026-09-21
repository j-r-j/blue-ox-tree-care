export interface ServiceArea {
  slug: string;
  name: string;
  title: string;
  metaDescription: string;
  description: string;
  neighborhoods: string[];
  relatedServices: string[];
}

export const serviceAreas: ServiceArea[] = [
  {
    slug: 'austin',
    name: 'Austin',
    title: 'Tree Care Services in Austin, TX',
    metaDescription:
      'ISA certified arborists serving Austin, TX. Tree trimming, removal, oak wilt care, and heritage tree services throughout Travis County.',
    description:
      'Blue Ox Tree Care provides full-service tree care throughout Austin and Travis County — from central neighborhoods to the Hill Country edge. Our ISA certified arborists understand Central Texas species, oak wilt protocols, and City of Austin tree regulations.',
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
    title: 'Tree Care Services in Round Rock, TX',
    metaDescription:
      'Professional tree trimming, removal, and arborist services in Round Rock, TX. ISA certified. Serving Williamson County homeowners.',
    description:
      'We serve Round Rock and surrounding Williamson County communities with the same ISA-certified expertise we bring to Austin. From new subdivisions to established shade-tree lots, we tailor pruning and removal plans to your property.',
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
    title: 'Tree Care Services in Bee Cave & Lakeway, TX',
    metaDescription:
      'Tree care in Bee Cave, Lakeway & West Lake Hills. Fire mitigation, trimming, and removal by ISA certified arborists in the Hill Country.',
    description:
      'Bee Cave, Lakeway, and the surrounding Hill Country present unique tree care challenges — steep lots, native juniper and oak woodlands, and wildfire concerns. Blue Ox Tree Care offers trimming, removal, fire mitigation, and risk assessment tailored to this terrain.',
    neighborhoods: [
      'Bee Cave',
      'Lakeway',
      'West Lake Hills',
      'Steiner Ranch',
      'Spanish Oaks',
      'Rough Hollow',
    ],
    relatedServices: ['fire-mitigation', 'tree-trimming', 'tree-removal', 'tree-risk-assessment'],
  },
];

export function getServiceArea(slug: string): ServiceArea | undefined {
  return serviceAreas.find((a) => a.slug === slug);
}
