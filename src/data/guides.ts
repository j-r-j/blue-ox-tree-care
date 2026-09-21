import type { FAQItem } from './faq';

export interface GuideSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
}

export interface GuideLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface Guide {
  slug: string;
  title: string;
  metaDescription: string;
  heroSubtitle: string;
  sections: GuideSection[];
  callout?: {
    heading: string;
    body: string;
    links?: GuideLink[];
  };
  faqs: FAQItem[];
  relatedLinks: GuideLink[];
}

export const guides: Guide[] = [
  {
    slug: 'oak-wilt-austin',
    title: 'Oak Wilt in Austin & Central Texas',
    metaDescription:
      'Learn how oak wilt spreads in Austin and Central Texas, when to avoid pruning oaks, and how to protect live oaks and red oaks. ISA certified assessment from Blue Ox Tree Care — call (512) 749-8615.',
    heroSubtitle:
      'Educational guide for Austin-area homeowners — what oak wilt is, how it spreads, and how pruning timing affects risk on Central Texas oaks.',
    sections: [
      {
        heading: 'What is oak wilt?',
        paragraphs: [
          'Oak wilt is a fungal disease caused by Bretziella fagacearum that kills susceptible oak species across Central Texas. Live oaks and red oaks (including Spanish oak and Shumard oak) are especially vulnerable in the Austin metro, Round Rock, and Hill Country communities like Bee Cave and Lakeway.',
          'Infected trees often show veinal necrosis — leaves that turn brown along the veins while the leaf margin stays green — followed by rapid defoliation. Red oaks can wilt and die within weeks. Live oaks may decline more slowly but frequently die within one to two seasons once symptoms appear across much of the canopy.',
        ],
      },
      {
        heading: 'How oak wilt spreads',
        paragraphs: [
          'Oak wilt spreads in two main ways. Underground, the fungus moves through connected root systems — live oaks in particular often graft roots with neighboring trees, creating infection centers that expand outward. Above ground, sap-feeding beetles can carry fungal spores from infected red oaks to fresh wounds on healthy oaks.',
          'That second pathway is why fresh pruning cuts and storm damage during active transmission periods are so risky. Any wound that exposes sap can attract beetles carrying spores from nearby diseased trees.',
        ],
        list: [
          'Root graft transmission between nearby oaks (common with live oaks)',
          'Beetle transmission via fresh wounds on susceptible species',
          'Movement of infected firewood — never store or transport unseasoned oak firewood from wilt-positive areas',
        ],
      },
      {
        heading: 'Pruning timing and wounding risk',
        paragraphs: [
          'General educational guidance for Central Texas recommends avoiding unnecessary wounding of susceptible oaks during the active transmission season, often described as February through June. Beetle activity and sap flow tend to peak in this window, which increases the chance that a fresh cut becomes an infection site.',
          'Homeowners should confirm current guidance with the Texas A&M Forest Service and local arborists before scheduling work — recommendations can be updated as conditions change. When pruning is necessary outside emergency situations, the safest window is typically mid-July through January for many Austin-area properties.',
          'Emergency work — storm-broken limbs, hazardous hangers over a roof or driveway — may be required regardless of season. In those cases, proper wound treatment and professional technique matter.',
        ],
      },
      {
        heading: 'Paint pruning cuts on oaks',
        paragraphs: [
          'When oaks must be pruned during higher-risk periods, wound dressing (often called pruning paint) is commonly recommended for susceptible species in Texas to reduce beetle attraction to fresh sap. Apply paint immediately after the cut is made, covering the entire wound surface.',
          'Paint does not replace good timing — it is a mitigation step when work cannot wait. Correct pruning cuts (proper branch collar location, no stubs) remain essential to long-term tree health.',
        ],
      },
      {
        heading: 'Signs your tree may need professional assessment',
        paragraphs: [
          'Contact an ISA certified arborist if you notice sudden canopy thinning, veinal necrosis, dieback on one side of the crown, or if a neighbor\'s oak was recently removed for oak wilt. Early diagnosis helps you protect unaffected trees through trenching, treatment planning, or adjusted maintenance.',
          'Travis Berlin (ISA BCMA, RM-7612B) and Lacy Berlin (ISA Certified Arborist, RM-8632A) provide science-based assessments across Austin, Round Rock, and Bee Cave / Lakeway. We can evaluate symptoms, discuss risk to nearby oaks, and recommend next steps — without overstating what any treatment can guarantee.',
        ],
      },
    ],
    callout: {
      heading: 'General education only',
      body: 'This page summarizes common Central Texas guidance for homeowners. Rules, beetle activity, and best practices can change. Confirm current recommendations with official oak wilt resources and qualified local arborists before pruning or treating oaks on your property.',
      links: [
        {
          label: 'Texas A&M Forest Service — Oak Wilt',
          href: 'https://texasforestservice.tamu.edu/oakwilt/',
          external: true,
        },
      ],
    },
    faqs: [
      {
        question: 'Which oak species get oak wilt in Austin?',
        answer:
          'Red oaks (including Texas red oak and Shumard oak) and live oaks are the most affected species in the Austin area. White oaks are generally less susceptible but are not immune. Proper identification matters before any removal or treatment plan.',
      },
      {
        question: 'Can I prune my live oak in spring?',
        answer:
          'General Central Texas guidance recommends avoiding unnecessary pruning of susceptible oaks from roughly February through June because fresh wounds attract sap-feeding beetles that can spread the fungus. Confirm current Texas A&M Forest Service guidance before scheduling work. If pruning is urgent, use proper cuts and wound paint as directed by your arborist.',
      },
      {
        question: 'Does pruning paint prevent oak wilt?',
        answer:
          'Pruning paint is a recommended mitigation when oaks must be wounded during higher-risk periods — it helps reduce beetle attraction to sap. It is not a guarantee against infection and does not replace timing work for the safer season when possible.',
      },
      {
        question: 'Can oak wilt spread to my neighbor\'s trees?',
        answer:
          'Yes. Root grafts between nearby live oaks can spread the fungus underground, and beetles can move spores between trees with fresh wounds. Infection centers can expand across property lines, which is why early assessment and isolation tactics (such as trenching) are sometimes recommended by specialists.',
      },
      {
        question: 'When should I call Blue Ox for oak wilt concerns?',
        answer:
          'Call (512) 749-8615 if you see sudden oak decline, suspect oak wilt on your property, or need an assessment before pruning mature oaks. We provide ISA certified evaluation and can coordinate with your broader tree health plan, including organic treatment options where appropriate.',
      },
    ],
    relatedLinks: [
      { label: 'Organic pest & disease treatment', href: '/services/pest-disease' },
      { label: 'Tree trimming in Austin', href: '/services/tree-trimming' },
      { label: 'Tree care in Austin', href: '/service-areas/austin' },
      { label: 'Tree care in Round Rock', href: '/service-areas/round-rock' },
    ],
  },
  {
    slug: 'austin-protected-heritage-trees',
    title: 'Austin Protected & Heritage Tree Rules',
    metaDescription:
      'Plain-English guide to City of Austin protected and heritage tree rules — DBH thresholds, permits, and when an ISA certified arborist can help with assessment and documentation. Call (512) 749-8615.',
    heroSubtitle:
      'Understand when City of Austin tree permits may apply before removal or significant pruning — and how certified arborists help with assessment and documentation.',
    sections: [
      {
        heading: 'Why Austin regulates certain trees',
        paragraphs: [
          'The City of Austin protects large, mature trees to preserve canopy cover, reduce heat, manage stormwater, and maintain neighborhood character. If you plan to remove a tree or perform significant work on a regulated tree, you may need approval through the City Arborist program before work begins.',
          'Requirements depend on tree size (measured at diameter at breast height, or DBH), species, location (public vs. private), and whether the project is tied to development. This guide summarizes common homeowner scenarios — always verify current rules on official City pages linked below.',
        ],
      },
      {
        heading: 'Protected trees (generally 19 inches DBH and larger)',
        paragraphs: [
          'In many Austin residential situations, a "protected tree" is a tree 19 inches DBH or larger on private property. Protected status generally means you need a permit before removal and may need approval before certain pruning that exceeds routine maintenance.',
          'DBH is measured at 4.5 feet above natural grade. If a tree has multiple trunks, the City uses a formula to combine trunk diameters — do not guess; a professional measurement avoids costly mistakes.',
        ],
        list: [
          'Protected size threshold: typically 19" DBH or greater (verify on official City resources)',
          'Permit generally required before removal of protected trees',
          'Significant pruning or injury may also trigger review depending on scope',
        ],
      },
      {
        heading: 'Heritage trees (24 inches DBH and listed species)',
        paragraphs: [
          'Heritage trees face stricter standards. They are typically 24 inches DBH or larger and belong to designated species — including all oaks, pecan, bald cypress, and several other listed species under Austin\'s tree regulations.',
          'Heritage designation adds review requirements and often requires stronger justification for removal. Healthy heritage trees are treated as high-value community assets; removal is generally limited to dead, diseased, or imminently hazardous situations supported by documentation.',
        ],
        list: [
          'Heritage size threshold: typically 24" DBH or greater for listed species',
          'Listed species include all oaks, pecan, bald cypress, and others defined by ordinance',
          'Stricter review than standard protected trees — plan early if development is involved',
        ],
      },
      {
        heading: 'City Arborist, TORA, and Build + Connect (high level)',
        paragraphs: [
          'The City of Austin City Arborist office administers tree permits and reviews applications for protected and heritage trees. Homeowners and contractors typically interact through Austin\'s development services channels — including the Tree Ordinance Review Application (TORA) process for many permit requests tied to property improvements.',
          'Build + Connect is the City\'s online portal for many development and permitting workflows. Tree-related submittals may require site plans, arborist reports, photographs, and replacement planting calculations depending on the case.',
          'Official reference: visit the City of Austin City Arborist pages for forms, fee schedules, and current ordinance text.',
        ],
      },
      {
        heading: 'How Blue Ox Tree Care can help (without guaranteeing permits)',
        paragraphs: [
          'Blue Ox Tree Care is owned by Travis Berlin, an ISA Board Certified Master Arborist (RM-7612B), and Lacy Berlin, an ISA Certified Arborist (RM-8632A). We help Austin, Round Rock, and Bee Cave / Lakeway property owners with tree risk assessment, health evaluation, and documentation that supports permit applications when a regulated tree is involved.',
          'We can measure DBH, document condition with photos, explain whether a tree appears dead, dying, or hazardous, and provide arborist letters for your submittal. We do not guarantee permit approval — that decision rests with the City of Austin based on ordinance criteria and your specific site.',
          'For regulated removals or major pruning, start with assessment before scheduling crane or removal crews. Combining accurate documentation with realistic tree care options often saves time in the review process.',
        ],
      },
    ],
    callout: {
      heading: 'Official City resources',
      body: 'Confirm all requirements on the City of Austin City Arborist website and related tree ordinance pages before removing or significantly pruning regulated trees. Ordinances and thresholds can be updated.',
      links: [
        {
          label: 'City of Austin — City Arborist',
          href: 'https://www.austintexas.gov/department/city-arborist',
          external: true,
        },
        {
          label: 'City of Austin — Trees & Ordinance',
          href: 'https://www.austintexas.gov/trees',
          external: true,
        },
      ],
    },
    faqs: [
      {
        question: 'How do I measure DBH for a City of Austin tree review?',
        answer:
          'DBH is the trunk diameter measured at 4.5 feet above natural grade. Multi-stem trees use a combined measurement formula defined by the City. An ISA certified arborist can measure and document DBH for permit submittals.',
      },
      {
        question: 'Do I need a permit to remove a 20-inch oak in Austin?',
        answer:
          'Often yes — oaks at or above protected size thresholds (generally 19" DBH for protected trees) typically require a permit before removal on private property in Austin. Heritage oaks at 24" DBH or larger face stricter review. Confirm current rules with the City Arborist office.',
      },
      {
        question: 'What is the difference between a protected tree and a heritage tree in Austin?',
        answer:
          'Protected trees are generally 19" DBH or larger. Heritage trees are a subset — typically 24" DBH or larger and a listed species such as oak, pecan, or bald cypress — with stricter removal standards and review.',
      },
      {
        question: 'Can Blue Ox guarantee my tree permit will be approved?',
        answer:
          'No. We provide professional assessment, documentation, and arborist reports to support your application, but permit decisions are made by the City of Austin. We help you understand options and present accurate tree condition information.',
      },
      {
        question: 'Does Round Rock or Bee Cave use the same rules as Austin?',
        answer:
          'Round Rock, Bee Cave, Lakeway, and other Central Texas municipalities have their own tree and development codes — they are not identical to Austin\'s. If your property is outside Austin city limits, check your local jurisdiction. We serve Austin, Round Rock, and Bee Cave / Lakeway and can discuss requirements based on your address.',
      },
    ],
    relatedLinks: [
      { label: 'Tree removal in Austin', href: '/services/tree-removal' },
      { label: 'Tree risk assessment', href: '/services/tree-risk-assessment' },
      { label: 'Oak wilt guide for Central Texas', href: '/guides/oak-wilt-austin' },
      { label: 'Tree care in Austin', href: '/service-areas/austin' },
    ],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
