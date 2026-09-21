export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  metaDescription: string;
  highlights: string[];
  localNotes?: string[];
}

export const services: Service[] = [
  {
    slug: 'tree-trimming',
    title: 'Tree Trimming & Pruning in Austin, TX',
    shortTitle: 'Tree Trimming',
    description:
      'Professional structural pruning and canopy management for Central Texas trees — including live oaks, pecans, and cedar elms — performed by ISA certified arborists.',
    metaDescription:
      'Expert tree trimming and pruning in Austin, Round Rock & Bee Cave. ISA certified arborists. Oak wilt-safe practices and heritage tree care.',
    highlights: [
      'Structural pruning for long-term tree health',
      'Canopy thinning and clearance from structures',
      'Deadwood removal and crown cleaning',
      'Seasonal timing guidance for Central Texas species',
    ],
    localNotes: [
      'Oak wilt prevention: we avoid pruning susceptible oaks during active transmission season (February–June) unless emergency work is required.',
      'City of Austin heritage trees may require a permit before significant pruning — we help you understand when a permit applies.',
    ],
  },
  {
    slug: 'tree-removal',
    title: 'Tree Removal in Austin, TX',
    shortTitle: 'Tree Removal',
    description:
      'Safe, controlled tree removal for hazardous, dead, or unwanted trees across the Austin metro — with careful rigging in tight residential spaces.',
    metaDescription:
      'Professional tree removal in Austin, Round Rock & Lakeway. ISA certified arborists. Permit guidance for City of Austin heritage trees.',
    highlights: [
      'Hazardous and dead tree removal',
      'Crane-assisted removal when needed',
      'Careful rigging near homes and fences',
      'Complete cleanup and haul-off',
    ],
    localNotes: [
      'Heritage trees and protected species in Austin may require a City of Austin permit before removal — we can discuss your situation.',
      'Post-oak and live oak removals are planned to minimize soil disturbance and protect surrounding vegetation.',
    ],
  },
  {
    slug: 'stump-grinding',
    title: 'Stump Grinding in Austin, TX',
    shortTitle: 'Stump Grinding',
    description:
      'Efficient stump grinding to reclaim yard space after tree removal — ideal for replanting, landscaping, or eliminating tripping hazards.',
    metaDescription:
      'Stump grinding services in Austin, Round Rock & Bee Cave. Reclaim your yard after tree removal with professional grinding.',
    highlights: [
      'Below-grade grinding for clean finish',
      'Access in fenced yards and tight spaces',
      'Wood chip backfill or haul-off options',
      'Site prep for sod, landscaping, or replanting',
    ],
  },
  {
    slug: 'storm-damage',
    title: 'Storm Damage Tree Service in Austin, TX',
    shortTitle: 'Storm Damage',
    description:
      'Emergency response and cleanup after Central Texas storms — removing fallen limbs, stabilizing damaged trees, and restoring safe access to your property.',
    metaDescription:
      'Storm damage tree cleanup in Austin & Central Texas. Fallen tree removal, hazard mitigation, and emergency arborist response.',
    highlights: [
      'Fallen tree and limb removal',
      'Emergency hazard mitigation',
      'Roof and structure clearance',
      'Post-storm tree health assessment',
    ],
    localNotes: [
      'Central Texas ice storms and high winds frequently damage live oaks and pecans — prompt assessment helps prevent secondary failure.',
    ],
  },
  {
    slug: 'tree-risk-assessment',
    title: 'Tree Risk Assessment in Austin, TX',
    shortTitle: 'Tree Risk Assessment',
    description:
      'ISA-qualified tree risk assessments to evaluate structural defects, root issues, and failure potential — with clear recommendations for property owners.',
    metaDescription:
      'Professional tree risk assessment in Austin, TX. ISA certified arborists evaluate hazard trees and provide actionable recommendations.',
    highlights: [
      'Visual and advanced risk evaluation',
      'Documentation for insurance or legal needs',
      'Prioritized mitigation recommendations',
      'Follow-up monitoring plans',
    ],
    localNotes: [
      'Mature live oaks with co-dominant stems or included bark are common risk factors in the Austin area.',
    ],
  },
  {
    slug: 'fire-mitigation',
    title: 'Wildfire & Fire Mitigation in Austin, TX',
    shortTitle: 'Fire Mitigation',
    description:
      'Defensible-space planning and vegetation management for Hill Country and Austin-area properties — reducing fuel loads while preserving healthy trees.',
    metaDescription:
      'Wildfire mitigation and defensible space tree work in Austin, Bee Cave & Lakeway. Reduce fuel loads with ISA certified arborists.',
    highlights: [
      'Defensible space vegetation management',
      'Ladder fuel reduction',
      'Strategic canopy thinning near structures',
      'Species-specific recommendations for Hill Country lots',
    ],
  },
  {
    slug: 'pest-disease',
    title: 'Tree Pest & Disease Management in Austin, TX',
    shortTitle: 'Pest & Disease',
    description:
      'Diagnosis and treatment planning for Central Texas tree pests and diseases — including oak wilt, hypoxylon canker, and borer infestations.',
    metaDescription:
      'Tree pest and disease diagnosis in Austin, TX. Oak wilt, hypoxylon, and borer management by ISA certified arborists.',
    highlights: [
      'On-site diagnosis and lab referral when needed',
      'Oak wilt assessment and trenching coordination',
      'Integrated pest management approach',
      'Treatment and monitoring plans',
    ],
    localNotes: [
      'Oak wilt is a serious concern for live oaks and red oaks in Travis County — early detection and trenching can protect unaffected trees.',
      'Hypoxylon canker often affects stressed post oaks during drought — improving tree vigor is key to prevention.',
    ],
  },
  {
    slug: 'organic-fertilizing',
    title: 'Organic Tree Fertilizing in Austin, TX',
    shortTitle: 'Organic Fertilizing',
    description:
      'Soil-based organic fertilization programs tailored to Central Texas soils — supporting root health, drought resilience, and long-term tree vitality.',
    metaDescription:
      'Organic tree fertilizing in Austin & Round Rock. Soil health programs for Central Texas trees by ISA certified arborists.',
    highlights: [
      'Soil analysis and amendment recommendations',
      'Organic, slow-release fertilization',
      'Root zone aeration when beneficial',
      'Seasonal programs for stressed or mature trees',
    ],
    localNotes: [
      'Central Texas alkaline clay soils often benefit from organic matter additions to improve root zone conditions.',
    ],
  },
  {
    slug: 'cabling-bracing',
    title: 'Tree Cabling & Bracing in Austin, TX',
    shortTitle: 'Cabling & Bracing',
    description:
      'Structural support systems for trees with co-dominant stems, included bark, or heavy limbs — extending the safe life of valuable shade trees.',
    metaDescription:
      'Tree cabling and bracing in Austin, TX. Structural support for co-dominant stems and heavy limbs by ISA certified arborists.',
    highlights: [
      'Dynamic and static cabling systems',
      'Bracing for split or weak unions',
      'Annual inspection and adjustment',
      'Heritage and mature tree preservation',
    ],
    localNotes: [
      'Large live oaks with multiple trunks are common in older Austin neighborhoods — cabling can reduce failure risk while preserving the tree.',
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
