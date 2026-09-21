import { seo } from './site';

export interface ServiceArea {
  slug: string;
  name: string;
  title: string;
  metaDescription: string;
  description: string;
  body: string[];
  neighborhoods: string[];
  relatedServices: string[];
}

export const serviceAreas: ServiceArea[] = [
  {
    slug: 'austin',
    name: 'Austin',
    title: seo.areaTitle('Austin'),
    metaDescription: seo.areaMeta('Austin'),
    description:
      'Blue Ox Tree Care provides full-service tree care throughout Austin and Travis County, from central neighborhoods to the Hill Country edge. Our ISA Board Certified Master Arborist-owned team understands Central Texas species, oak wilt protocols, and City of Austin tree regulations.',
    body: [
      'Blue Ox Tree Care provides full-service tree care throughout Austin and Travis County, from central neighborhoods to the Hill Country edge. Our ISA Board Certified Master Arborist-owned team understands Central Texas species, oak wilt protocols, and City of Austin tree regulations.',
      'Whether you need structural pruning on a mature live oak, a risk assessment before storm season, or organic treatment for a declining tree, you work directly with certified arborists who know Austin\'s trees and regulations.',
      'Call (512) 749-8615 for your free estimate. We are a service-area business and come to your property.',
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
    metaDescription: seo.areaMeta('Round Rock'),
    description:
      'Tree trimming, removal, and arborist services in Round Rock, TX. ISA certified arborists serving Williamson County with structural pruning, stump grinding, and organic tree health care.',
    body: [
      'We serve Round Rock and surrounding Williamson County communities with the same ISA-certified expertise we bring to Austin. From new subdivisions to established shade-tree lots, we tailor pruning, removal, and health care plans to your property.',
      'Round Rock\'s mix of new development and mature shade trees means every property is different. We assess structure, species, and soil conditions before recommending trimming, removal, or organic health treatments.',
      'Licensed, insured, and offering free estimates. Call (512) 749-8615 to schedule tree service in Round Rock.',
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
    metaDescription: seo.areaMeta('Bee Cave and Lakeway'),
    description:
      'Tree care in Bee Cave, Lakeway, and the Austin Hill Country. Trimming, removal, fire mitigation, and risk assessment for steep lots, oak woodlands, and wildfire-prone properties.',
    body: [
      'Bee Cave, Lakeway, and the surrounding Hill Country present unique tree care challenges: steep lots, native juniper and oak woodlands, and wildfire concerns. Blue Ox Tree Care offers trimming, removal, fire mitigation, and risk assessment tailored to this terrain.',
      'Our fire mitigation and defensible-space work follows guidelines proven to protect homes in wildfire-prone areas. That expertise comes from serving mountain communities before bringing it to the Austin Hill Country.',
      'Call (512) 749-8615 for a free estimate on tree care in Bee Cave, Lakeway, West Lake Hills, and surrounding communities.',
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
  },
];

export function getServiceArea(slug: string): ServiceArea | undefined {
  return serviceAreas.find((a) => a.slug === slug);
}
