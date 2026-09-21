import { seo } from './site';

export interface Service {
  slug: string;
  title: string;
  /** Page H1: shorter than document title (no credential pipe). */
  pageTitle: string;
  shortTitle: string;
  description: string;
  metaDescription: string;
  intro: string;
  body: string[];
  highlights: string[];
  localNotes?: string[];
}

export const services: Service[] = [
  {
    slug: 'tree-trimming',
    title: seo.serviceTitle('Tree Trimming & Pruning'),
    pageTitle: seo.servicePageTitle('Tree Trimming & Pruning'),
    shortTitle: 'Tree Trimming',
    intro:
      'Proper trimming protects your property and keeps Central Texas trees healthy, but incorrect cuts can cause decline or create hazards. Blue Ox Tree Care trims trees the right way.',
    description:
      'Professional structural pruning and canopy management for Central Texas trees, including live oaks, pecans, and cedar elms, performed by ISA certified arborists.',
    metaDescription: seo.serviceMeta('tree trimming and pruning'),
    body: [
      'Proper trimming is important for your tree\'s overall health. Dead, diseased, and heavy, structurally defective branches that could break may pose a threat to your property and your family\'s safety, and should be properly trimmed.',
      'Proper trimming can improve the shape and structure of your trees, allowing for just the right amount of light and airflow into the canopy. If you have fruit trees, they will be healthier and produce more consistent yields.',
      'Improper trimming is often the cause of poor tree health and potential decline, and can also be extremely dangerous. With the health of your trees in mind, it is imperative that they are trimmed correctly to avoid potential risks.',
      'Our professionals at Blue Ox Tree Care have the dedicated knowledge and experience necessary to safely and correctly trim your trees, to improve their overall longevity and help them thrive.',
    ],
    highlights: [
      'Structural pruning for long-term tree health',
      'Canopy thinning and clearance from structures',
      'Deadwood removal and crown cleaning',
      'Seasonal timing guidance for Central Texas species',
    ],
    localNotes: [
      'Oak wilt prevention: we avoid pruning susceptible oaks during active transmission season (February–June) unless emergency work is required.',
      'City of Austin heritage trees may require a permit before significant pruning. We help you understand when a permit applies.',
    ],
  },
  {
    slug: 'tree-removal',
    title: seo.serviceTitle('Tree Removal'),
    pageTitle: seo.servicePageTitle('Tree Removal'),
    shortTitle: 'Tree Removal',
    intro:
      'When a tree is hazardous, dead, or beyond repair, removal may be the safest option. It should always be done by licensed, insured professionals.',
    description:
      'Safe, controlled tree removal for hazardous, dead, or unwanted trees across the Austin metro, with careful rigging in tight residential spaces.',
    metaDescription: seo.serviceMeta('tree removal'),
    body: [
      'We love trees, but sometimes removing a tree may be the best option. When the location of an overgrown tree is problematic, large roots start to crack a home\'s foundation, a tree is beyond structural repair and poses a threat to your house and your family\'s safety, or the tree is dead or in irreversible decline, it may be time to remove it.',
      'Our highly experienced ISA Certified Arborists can help you make the proper assessment to determine if the tree in question should be removed.',
      'Once the decision to remove a tree has been made, it is a very dangerous endeavor. Attempting to remove a tree on your own is not recommended. At Blue Ox Tree Care, safety is our highest priority. Our licensed and insured professionals have the proper equipment and experience necessary to safely and carefully remove your tree, protecting your family and property.',
    ],
    highlights: [
      'Hazardous and dead tree removal',
      'Crane-assisted removal when needed',
      'Careful rigging near homes and fences',
      'Complete cleanup and haul-off',
    ],
    localNotes: [
      'Heritage trees and protected species in Austin may require a City of Austin permit before removal. We can discuss your situation.',
      'Post-oak and live oak removals are planned to minimize soil disturbance and protect surrounding vegetation.',
    ],
  },
  {
    slug: 'stump-grinding',
    title: seo.serviceTitle('Stump Grinding'),
    pageTitle: seo.servicePageTitle('Stump Grinding'),
    shortTitle: 'Stump Grinding',
    intro:
      'Stump grinding removes tripping hazards and eyesores so you can reclaim yard space for lawn, landscaping, or replanting.',
    description:
      'Efficient stump grinding to reclaim yard space after tree removal. Ideal for replanting, landscaping, or eliminating tripping hazards in Austin-area yards.',
    metaDescription: seo.serviceMeta('stump grinding'),
    body: [
      'Tired of tree stumps that are a tripping hazard, not to mention an eyesore that harbors unwanted insects and pests on your property? Our stump grinding service will remedy that for you.',
      'You will not even be able to tell they were ever there. Your lawn can fill in or you can plant anew. Restored space on your property becomes a clean slate for your new visions to become real.',
    ],
    highlights: [
      'Below-grade grinding for clean finish',
      'Access in fenced yards and tight spaces',
      'Wood chip backfill or haul-off options',
      'Site prep for sod, landscaping, or replanting',
    ],
  },
  {
    slug: 'storm-damage',
    title: seo.serviceTitle('Emergency Storm Damage Tree Service'),
    pageTitle: seo.servicePageTitle('Storm Damage Tree Service'),
    shortTitle: 'Storm Damage',
    intro:
      'After high winds, hail, or ice storms, torn branches and fallen trees need immediate professional response to protect people, property, and remaining tree health.',
    description:
      'Emergency storm damage tree service in Austin, Round Rock, Bee Cave & Lakeway. Hazardous limb removal, fallen tree cleanup, and post-storm assessment by ISA certified arborists.',
    metaDescription:
      'Emergency storm damage tree service in Austin, Round Rock, Bee Cave & Lakeway. Hazardous limbs, fallen trees, roof clearance. Licensed & insured. Call (512) 749-8615.',
    body: [
      'High winds or storms bring high risk of branches endangering people, property, and animals. Torn branches are a hazard that can initially go unnoticed, but can cause property damage or bodily injury if not quickly attended to.',
      'Torn branches that are not properly removed become entry sites for insects and diseases to take hold, as well as places vulnerable to decay.',
      'We are licensed and insured to handle hazardous jobs with the most up-to-date safety methods available in the industry.',
    ],
    highlights: [
      'Fallen tree and limb removal',
      'Emergency hazard mitigation',
      'Roof and structure clearance',
      'Post-storm tree health assessment',
    ],
    localNotes: [
      'Central Texas ice storms and high winds frequently damage live oaks and pecans. Prompt assessment helps prevent secondary failure.',
    ],
  },
  {
    slug: 'tree-risk-assessment',
    title: seo.serviceTitle('Tree Risk Assessment'),
    pageTitle: seo.servicePageTitle('Tree Risk Assessment'),
    shortTitle: 'Tree Risk Assessment',
    intro:
      'Tree limbs over your roof or a heavy lean toward your home or play areas? An ISA certified risk assessment identifies hazards and recommends mitigation before failure occurs.',
    description:
      'ISA-qualified tree risk assessments to evaluate structural defects, root issues, and failure potential, with clear recommendations for property owners.',
    metaDescription: seo.serviceMeta('tree risk assessment'),
    body: [
      'Tree limbs over your roof? Tree trunk have a heavy lean over your home, business, or where your kids play? Call in the experts to do your tree risk assessment.',
      'We will recommend how we can help mitigate that risk with specialty trimming in which we rig down limbs on special arborists\' ropes rated for thousands of pounds, or we may recommend removal.',
      'Hazardous trees require the most skill and control to bring tree material down to the ground. That is why our company has the experience, meticulous years of training, and insurance to protect you and your property.',
    ],
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
    title: seo.serviceTitle('Wildfire & Fire Mitigation'),
    pageTitle: seo.servicePageTitle('Wildfire & Fire Mitigation'),
    shortTitle: 'Fire Mitigation',
    intro:
      'Defensible-space tree work reduces wildfire fuel loads around Austin Hill Country homes while following proven mitigation guidelines.',
    description:
      'Defensible-space planning and vegetation management for Hill Country and Austin-area properties, reducing fuel loads while preserving healthy trees.',
    metaDescription: seo.serviceMeta('wildfire mitigation and defensible space tree work'),
    body: [
      'Every summer smoke fills the sky from millions of acres of wildfires, yet people continue to build in forested areas without proper fire mitigation.',
      'At Blue Ox Tree Care, we follow guidelines developed by studying homes that survived wildfires and ones that did not. These are very specific practices that protect homes when followed correctly.',
      'Protect your home from the all-too-common wildfire risk by contacting Blue Ox Tree Care for a property assessment, especially before you build or after moving into a wooded lot in Bee Cave, Lakeway, or the Austin Hill Country.',
    ],
    highlights: [
      'Defensible space vegetation management',
      'Ladder fuel reduction',
      'Strategic canopy thinning near structures',
      'Species-specific recommendations for Hill Country lots',
    ],
  },
  {
    slug: 'pest-disease',
    title: seo.serviceTitle('Tree Pest & Disease Management'),
    pageTitle: seo.servicePageTitle('Tree Pest & Disease Management'),
    shortTitle: 'Pest & Disease',
    intro:
      'Organic, in-house pest and disease treatments restore tree health and soil biology without petroleum-based chemicals. This is a core specialty of Blue Ox Tree Care.',
    description:
      'Diagnosis and treatment planning for Central Texas tree pests and diseases, including oak wilt, hypoxylon canker, and borer infestations.',
    metaDescription: seo.serviceMeta('organic tree pest and disease treatment'),
    body: [
      'We address pests and diseases attacking your trees while restoring soil biology with in-house soil-inoculating technology designed to support tree health systemically, targeting pests, fungi, and bacteria from the root zone up. Each batch is brewed and custom blended for your tree\'s specific needs.',
      'Every tree is different, and outcomes depend on species, timing, and how far decline has progressed. We set realistic expectations up front. Our organic program has helped many Central Texas trees regain vigor where conventional approaches fell short, and organic tree health care is a cornerstone of our practice.',
      'This soil treatment pairs with our organic contact spray for stronger results against topical pests, bacteria, and fungi.',
      'We use exclusively organic methods without petroleum-based salts that can harm trees and soil. You can feel confident including our tree care in a non-toxic approach for your family, animals, and property.',
    ],
    highlights: [
      'On-site diagnosis and lab referral when needed',
      'Oak wilt assessment and trenching coordination',
      'In-house organic treatment formulation',
      'Treatment and monitoring plans',
    ],
    localNotes: [
      'Oak wilt is a serious concern for live oaks and red oaks in Travis County. Early detection and trenching can protect unaffected trees.',
      'Hypoxylon canker often affects stressed post oaks during drought. Improving tree vigor is key to prevention.',
    ],
  },
  {
    slug: 'organic-fertilizing',
    title: seo.serviceTitle('Organic Tree Fertilizing'),
    pageTitle: seo.servicePageTitle('Organic Tree Fertilizing'),
    shortTitle: 'Organic Fertilizing',
    intro:
      'Restore vitality to dull or yellowing trees with arborist-formulated organic fertilizer. Absorbable nutrition without petroleum salts or harmful runoff.',
    description:
      'Soil-based organic fertilization programs tailored to Central Texas soils, supporting root health, drought resilience, and long-term tree vitality.',
    metaDescription: seo.serviceMeta('organic tree fertilizing'),
    body: [
      'Restore life back to your dull or yellowing trees so they glow green with vitality by having us apply our specially formulated fertilizer for arborists\' use exclusively.',
      'Our fertilizer is not made of petroleum like most mass-market products. It is completely absorbable by your trees to utilize right away, without the toxic salts that ruin the soil your tree relies on and without polluting waterways with runoff.',
      'We utilize knowledge of seasons and time of day to determine when to apply, maximizing your results on Central Texas properties.',
    ],
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
    title: seo.serviceTitle('Tree Cabling & Bracing'),
    pageTitle: seo.servicePageTitle('Tree Cabling & Bracing'),
    shortTitle: 'Cabling & Bracing',
    intro:
      'Co-dominant trees with included bark can split apart without warning. Inspection and 8,000-lb-rated cabling by a Board Certified Master Arborist reduces that risk.',
    description:
      'Structural support systems for trees with co-dominant stems, included bark, or heavy limbs, extending the safe life of valuable shade trees.',
    metaDescription: seo.serviceMeta('tree cabling and bracing'),
    body: [
      'Trees with two or more trunks can be hazardous and split apart, creating serious risk to people and property. This is not to be taken lightly.',
      'Trees with two or more trunks are called co-dominant and most often have a structural defect called included bark. This defect can cause great risk and is often overlooked by an untrained eye.',
      'As a home or business owner, the safest thing you can do is have co-dominant trees inspected by an ISA Certified Arborist.',
      'Our ISA Board Certified Master Arborist can inspect your trees during a free estimate and recommend advanced tree cabling technology to prevent your trees from splitting apart. Our cabling is rated for 8,000 lbs and can handle old-growth trees without problem.',
    ],
    highlights: [
      'Dynamic and static cabling systems',
      'Bracing for split or weak unions',
      'Annual inspection and adjustment',
      'Heritage and mature tree preservation',
    ],
    localNotes: [
      'Large live oaks with multiple trunks are common in older Austin neighborhoods. Cabling can reduce failure risk while preserving the tree.',
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
