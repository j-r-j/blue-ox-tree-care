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
  /** Short label for nav menus; full title stays on guide pages. */
  navLabel?: string;
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
    navLabel: 'Oak Wilt',
    metaDescription:
      'Learn how oak wilt spreads in Austin and Central Texas, when to avoid pruning oaks, and how to protect live oaks and red oaks. ISA certified assessment from Blue Ox Tree Care. Call (512) 749-8615.',
    heroSubtitle:
      'Educational guide for Austin-area homeowners: what oak wilt is, how it spreads, and how pruning timing affects risk on Central Texas oaks.',
    sections: [
      {
        heading: 'What is oak wilt?',
        paragraphs: [
          'Oak wilt is a fungal disease caused by Bretziella fagacearum that kills susceptible oak species across Central Texas. Live oaks and red oaks (including Spanish oak and Shumard oak) are especially vulnerable in the Austin metro, Round Rock, and Hill Country communities like Bee Cave and Lakeway.',
          'Infected trees often show veinal necrosis (leaves that turn brown along the veins while the leaf margin stays green), followed by rapid defoliation. Red oaks can wilt and die within weeks. Live oaks may decline more slowly but frequently die within one to two seasons once symptoms appear across much of the canopy.',
        ],
      },
      {
        heading: 'How oak wilt spreads',
        paragraphs: [
          'Oak wilt spreads in two main ways. Underground, the fungus moves through connected root systems. Live oaks in particular often graft roots with neighboring trees, creating infection centers that expand outward. Above ground, sap-feeding beetles can carry fungal spores from infected red oaks to fresh wounds on healthy oaks.',
          'That second pathway is why fresh pruning cuts and storm damage during active transmission periods are so risky. Any wound that exposes sap can attract beetles carrying spores from nearby diseased trees.',
        ],
        list: [
          'Root graft transmission between nearby oaks (common with live oaks)',
          'Beetle transmission via fresh wounds on susceptible species',
          'Movement of infected firewood. Never store or transport unseasoned oak firewood from wilt-positive areas',
        ],
      },
      {
        heading: 'Pruning timing and wounding risk',
        paragraphs: [
          'General educational guidance for Central Texas recommends avoiding unnecessary wounding of susceptible oaks during the active transmission season, often described as February through June. Beetle activity and sap flow tend to peak in this window, which increases the chance that a fresh cut becomes an infection site.',
          'Homeowners should confirm current guidance with the Texas A&M Forest Service and local arborists before scheduling work. Recommendations can be updated as conditions change. When pruning is necessary outside emergency situations, the safest window is typically mid-July through January for many Austin-area properties.',
          'Emergency work (storm-broken limbs, hazardous hangers over a roof or driveway) may be required regardless of season. In those cases, proper wound treatment and professional technique matter.',
        ],
      },
      {
        heading: 'Paint pruning cuts on oaks',
        paragraphs: [
          'When oaks must be pruned during higher-risk periods, wound dressing (often called pruning paint) is commonly recommended for susceptible species in Texas to reduce beetle attraction to fresh sap. Apply paint immediately after the cut is made, covering the entire wound surface.',
          'Paint does not replace good timing. It is a mitigation step when work cannot wait. Correct pruning cuts (proper branch collar location, no stubs) remain essential to long-term tree health.',
        ],
      },
      {
        heading: 'Signs your tree may need professional assessment',
        paragraphs: [
          'Contact an ISA certified arborist if you notice sudden canopy thinning, veinal necrosis, dieback on one side of the crown, or if a neighbor\'s oak was recently removed for oak wilt. Early diagnosis helps you protect unaffected trees through trenching, treatment planning, or adjusted maintenance.',
          'Travis Berlin (ISA BCMA, RM-7612B) and Lacy Berlin (ISA Certified Arborist, RM-8632A) provide science-based assessments across Austin, Round Rock, and Bee Cave / Lakeway. We can evaluate symptoms, discuss risk to nearby oaks, and recommend next steps without overstating what any treatment can guarantee.',
        ],
      },
    ],
    callout: {
      heading: 'General education only',
      body: 'This page summarizes common Central Texas guidance for homeowners. Rules, beetle activity, and best practices can change. Confirm current recommendations with official oak wilt resources and qualified local arborists before pruning or treating oaks on your property.',
      links: [
        {
          label: 'Texas A&M Forest Service: Oak Wilt',
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
          'Pruning paint is a recommended mitigation when oaks must be wounded during higher-risk periods. It helps reduce beetle attraction to sap. It is not a guarantee against infection and does not replace timing work for the safer season when possible.',
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
      { label: 'Austin bulk trash & brush pickup', href: '/guides/austin-bulk-brush-pickup' },
      { label: 'Tree care in Austin', href: '/service-areas/austin' },
      { label: 'Tree care in Round Rock', href: '/service-areas/round-rock' },
    ],
  },
  {
    slug: 'austin-protected-heritage-trees',
    title: 'Austin Protected & Heritage Tree Rules',
    navLabel: 'Tree Permits',
    metaDescription:
      'Plain-English guide to City of Austin protected and heritage tree rules: DBH thresholds, permits, and when an ISA certified arborist can help with assessment and documentation. Call (512) 749-8615.',
    heroSubtitle:
      'Understand when City of Austin tree permits may apply before removal or significant pruning, and how certified arborists help with assessment and documentation.',
    sections: [
      {
        heading: 'Why Austin regulates certain trees',
        paragraphs: [
          'The City of Austin protects large, mature trees to preserve canopy cover, reduce heat, manage stormwater, and maintain neighborhood character. If you plan to remove a tree or perform significant work on a regulated tree, you may need approval through the City Arborist program before work begins.',
          'Requirements depend on tree size (measured at diameter at breast height, or DBH), species, location (public vs. private), and whether the project is tied to development. This guide summarizes common homeowner scenarios. Always verify current rules on official City pages linked below.',
        ],
      },
      {
        heading: 'Protected trees (generally 19 inches DBH and larger)',
        paragraphs: [
          'In many Austin residential situations, a "protected tree" is a tree 19 inches DBH or larger on private property. Protected status generally means you need a permit before removal and may need approval before certain pruning that exceeds routine maintenance.',
          'DBH is measured at 4.5 feet above natural grade. If a tree has multiple trunks, the City uses a formula to combine trunk diameters. Do not guess; a professional measurement avoids costly mistakes.',
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
          'Heritage trees face stricter standards. They are typically 24 inches DBH or larger and belong to designated species, including all oaks, pecan, bald cypress, and several other listed species under Austin\'s tree regulations.',
          'Heritage designation adds review requirements and often requires stronger justification for removal. Healthy heritage trees are treated as high-value community assets; removal is generally limited to dead, diseased, or imminently hazardous situations supported by documentation.',
        ],
        list: [
          'Heritage size threshold: typically 24" DBH or greater for listed species',
          'Listed species include all oaks, pecan, bald cypress, and others defined by ordinance',
          'Stricter review than standard protected trees. Plan early if development is involved',
        ],
      },
      {
        heading: 'City Arborist, TORA, and Build + Connect (high level)',
        paragraphs: [
          'The City of Austin City Arborist office administers tree permits and reviews applications for protected and heritage trees. Homeowners and contractors typically interact through Austin\'s development services channels, including the Tree Ordinance Review Application (TORA) process for many permit requests tied to property improvements.',
          'Build + Connect is the City\'s online portal for many development and permitting workflows. Tree-related submittals may require site plans, arborist reports, photographs, and replacement planting calculations depending on the case.',
          'Official reference: visit the City of Austin City Arborist pages for forms, fee schedules, and current ordinance text.',
        ],
      },
      {
        heading: 'How Blue Ox Tree Care can help (without guaranteeing permits)',
        paragraphs: [
          'Blue Ox Tree Care is owned by Travis Berlin, an ISA Board Certified Master Arborist (RM-7612B), and Lacy Berlin, an ISA Certified Arborist (RM-8632A). We help Austin, Round Rock, and Bee Cave / Lakeway property owners with tree risk assessment, health evaluation, and documentation that supports permit applications when a regulated tree is involved.',
          'We can measure DBH, document condition with photos, explain whether a tree appears dead, dying, or hazardous, and provide arborist letters for your submittal. We do not guarantee permit approval. That decision rests with the City of Austin based on ordinance criteria and your specific site.',
          'For regulated removals or major pruning, start with assessment before scheduling crane or removal crews. Combining accurate documentation with realistic tree care options often saves time in the review process.',
        ],
      },
    ],
    callout: {
      heading: 'Official City resources',
      body: 'Confirm all requirements on the City of Austin City Arborist website and related tree ordinance pages before removing or significantly pruning regulated trees. Ordinances and thresholds can be updated.',
      links: [
        {
          label: 'City of Austin: City Arborist',
          href: 'https://www.austintexas.gov/department/city-arborist',
          external: true,
        },
        {
          label: 'City of Austin: Trees & Ordinance',
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
          'Often yes. Oaks at or above protected size thresholds (generally 19" DBH for protected trees) typically require a permit before removal on private property in Austin. Heritage oaks at 24" DBH or larger face stricter review. Confirm current rules with the City Arborist office.',
      },
      {
        question: 'What is the difference between a protected tree and a heritage tree in Austin?',
        answer:
          'Protected trees are generally 19" DBH or larger. Heritage trees are a subset: typically 24" DBH or larger and a listed species such as oak, pecan, or bald cypress, with stricter removal standards and review.',
      },
      {
        question: 'Can Blue Ox guarantee my tree permit will be approved?',
        answer:
          'No. We provide professional assessment, documentation, and arborist reports to support your application, but permit decisions are made by the City of Austin. We help you understand options and present accurate tree condition information.',
      },
      {
        question: 'Does Round Rock or Bee Cave use the same rules as Austin?',
        answer:
          'Round Rock, Bee Cave, Lakeway, and other Central Texas municipalities have their own tree and development codes. They are not identical to Austin\'s. If your property is outside Austin city limits, check your local jurisdiction. We serve Austin, Round Rock, and Bee Cave / Lakeway and can discuss requirements based on your address.',
      },
    ],
    relatedLinks: [
      { label: 'Tree removal in Austin', href: '/services/tree-removal' },
      { label: 'Tree risk assessment', href: '/services/tree-risk-assessment' },
      { label: 'Oak wilt guide for Central Texas', href: '/guides/oak-wilt-austin' },
      { label: 'Austin bulk trash & brush pickup', href: '/guides/austin-bulk-brush-pickup' },
      { label: 'Tree care in Austin', href: '/service-areas/austin' },
    ],
  },
  {
    slug: 'austin-bulk-brush-pickup',
    title: 'Austin Bulk Trash & Brush Pickup for Tree Debris',
    navLabel: 'Brush & Bulk Pickup',
    metaDescription:
      'Austin Resource Recovery brush/bulk rules, set-out sizes, Hornsby Bend, plus Blue Ox Tree Care. Call (512) 749-8615.',
    heroSubtitle:
      'What\'s brush vs bulk, how to schedule on-demand pickup, set-out rules for limbs, drop-off options, and when professional haul-away is the better path.',
    sections: [
      {
        heading: 'Brush vs bulk vs compost cart',
        paragraphs: [
          'After tree work or storm cleanup, Austin homeowners often wonder which City of Austin Resource Recovery (ARR) channel to use. The answer depends on material type and size. Booking the wrong service can mean a missed pickup or a pile left at the curb.',
          'Brush collection is for tree limbs and large woody debris. Bulk collection is for furniture, appliances, household carpet, nail-free lumber, pallets, passenger tires (rims off, max 8), and similar items. Brush is not accepted as a bulk item, so book brush instead. Small branches and yard trimmings go through your weekly green compost cart program, not the on-demand brush appointment.',
        ],
      },
      {
        heading: 'How to schedule on-demand pickup',
        paragraphs: [
          'ARR residential curbside customers (single-family homes through fourplexes) can request separate on-demand bulk and brush collections (along with household hazardous waste and clothing/textiles). Each service includes up to three free collections per calendar year; an appointment is required.',
          'Schedule through the Austin Recycles app, online via My Schedule / on-demand pickup, or by calling Austin 3-1-1 at (512) 974-2000. Appointments cannot be edited. Cancel and rebook through the same channel if your date changes. If you need more than three brush pickups in a year, the City offers fee-based extra collection based on volume.',
        ],
      },
      {
        heading: 'Brush set-out rules',
        paragraphs: [
          'Brush collection is the primary path for large tree debris after trimming or storm cleanup. Follow ARR set-out rules so crews can collect safely and on schedule.',
          'Place limbs at the curb by 5:30 a.m. on your appointment day. Limbs should be 5–15 feet long. Cut longer pieces down. Stack loosely in one row, no more than 15 feet across and 4 feet high, with cut ends facing the street. Trunks larger than 8 inches in diameter must be cut to 3 feet or shorter.',
          'Do not block the sidewalk or let material stick into the street. Keep piles at least 5 feet from carts, mailboxes, fences or walls, water meters, phone and electrical boxes, hydrants, and parked cars. Do not place brush under low limbs or power lines. ARR does not collect brush in alleys, in front of vacant lots, or in front of businesses.',
        ],
        list: [
          'Limbs 5–15 feet long (cut longer pieces down)',
          'One row, ≤ 15 ft across, ≤ 4 ft high, cut ends facing the street',
          'Trunks > 8 in diameter → ≤ 3 ft long',
          'At curb by 5:30 a.m. on appointment day; keep 5 ft clearance from obstacles',
        ],
      },
      {
        heading: 'Small branches & weekly compost',
        paragraphs: [
          'Branches under 5 feet long and 3 inches in diameter or less belong in your green compost cart for regular weekly collection, not in a brush appointment pile.',
          'You can place cart contents plus up to 15 extra items beside the cart each week: lawn and leaf bags, reusable containers, and small branch piles. This path works well for routine trimming but not for large limb stacks or whole-tree debris.',
        ],
      },
      {
        heading: 'Hornsby Bend drop-off',
        paragraphs: [
          'When free brush appointments are used up or you need same-day drop-off, Austin and Travis County residents can take yard trimmings to the Hornsby Bend facility at 2210 FM 973, Austin, TX. Hours are Monday through Saturday, 8 a.m. to 3 p.m., with no appointment required. Bring government-issued photo ID.',
          'Accepted materials include tree limbs, branches, shrubs, and leaves (processed into Dillo Dirt). Not accepted: construction materials, particle board, trash, or treated/painted lumber. The City notes trailer and volume limits (about 6 cubic yards; confirm on the live City page). Fee changes for drop-off users may apply starting October 1, 2026 per proposed and adopted rule updates. Confirm current fees and limits on the official City page before you go.',
        ],
      },
      {
        heading: 'After storms',
        paragraphs: [
          'After major Central Texas storms, ARR may publish special debris instructions that differ from routine brush rules. Check the City\'s storm debris page for current guidance before setting material out.',
          'For hazardous limbs, fallen trees, or roof clearance, professional emergency response may be needed before curbside pickup is an option. See our storm damage service page. If you are pruning oaks after storm damage, follow safer timing and wound-painting guidance in our oak wilt guide; do not move infected oak firewood.',
        ],
      },
      {
        heading: 'When to call Blue Ox Tree Care',
        paragraphs: [
          'City brush pickup works well when your pile meets set-out rules and you can wait for an appointment. Call Blue Ox Tree Care at (512) 749-8615 when debris exceeds set-out limits, you need same-day or emergency storm removal, or the job includes stumps, oversized trunks, or crane work that ARR will not take.',
          'Properties outside ARR curbside service (larger multifamily, commercial sites, or addresses with private haulers) also need professional haul-away. Many customers prefer one crew to cut, rig, and haul in a single visit rather than managing separate tree work and curbside scheduling.',
          'Travis Berlin (ISA BCMA, RM-7612B) and Lacy Berlin (ISA Certified Arborist, RM-8632A) serve Austin, Round Rock, and Bee Cave / Lakeway. We are a service-area business. Our arborists come to your property with no storefront address listed on this site.',
        ],
      },
    ],
    callout: {
      heading: 'Verify with the City of Austin',
      body: 'This page summarizes ARR bulk and brush rules for educational purposes. Collection limits, fees, and schedules can change. Confirm current requirements on official Austin Resource Recovery pages before scheduling pickup or visiting Hornsby Bend.',
      links: [
        {
          label: 'On-demand bulk & brush collection',
          href: 'https://www.austintexas.gov/resource-recovery/programs/demand-bulk-brush-and-household-hazardous-waste-collection',
          external: true,
        },
        {
          label: 'Yard trimmings & Hornsby Bend drop-off',
          href: 'https://www.austintexas.gov/resource-recovery/programs/yard-trimmings-and-large-brush-drop',
          external: true,
        },
        {
          label: 'Storm debris removal',
          href: 'https://www.austintexas.gov/resource-recovery/programs/storm-debris-removal',
          external: true,
        },
      ],
    },
    faqs: [
      {
        question: 'What is the difference between bulk and brush collection in Austin?',
        answer:
          'Bulk collection is for items like furniture, appliances (with doors removed), carpet, nail-free lumber, and tires, not tree limbs. Brush collection is specifically for tree limbs and large woody debris. Booking the wrong service can leave your pile uncollected.',
      },
      {
        question: 'How many free brush pickups does Austin offer per year?',
        answer:
          'ARR residential curbside customers (single-family through fourplex) receive up to three free on-demand brush collections per calendar year. Appointments are required. Additional brush beyond the free allowance is available as a fee-based extra collection. Confirm current pricing with the City.',
      },
      {
        question: 'What size limbs qualify for brush collection?',
        answer:
          'Limbs should be 5–15 feet long. Cut longer pieces down. Trunks larger than 8 inches in diameter must be 3 feet or shorter. Stack in one row no more than 15 feet across and 4 feet high, with cut ends facing the street.',
      },
      {
        question: 'Can tree limbs go in the green compost cart?',
        answer:
          'Small branches under 5 feet long and 3 inches in diameter or less can go in your green compost cart for weekly collection. You may also set up to 15 extra items beside the cart each week. Larger limbs require a brush appointment or Hornsby Bend drop-off.',
      },
      {
        question: 'Where can I drop off brush myself in Austin?',
        answer:
          'Hornsby Bend at 2210 FM 973 accepts tree limbs, branches, shrubs, and leaves from Austin and Travis County residents with photo ID. Open Monday–Saturday, 8 a.m.–3 p.m., no appointment. Confirm current volume limits and any fees on the City\'s yard trimmings page before visiting.',
      },
      {
        question: 'When should I call a tree company instead of ARR?',
        answer:
          'Call (512) 749-8615 when debris exceeds ARR set-out limits, you need emergency or same-day removal, the job includes stumps or oversized material ARR will not take, your property is not on ARR curbside service, or you want cutting and haul-away handled in one professional visit.',
      },
    ],
    relatedLinks: [
      { label: 'Oak wilt guide for Central Texas', href: '/guides/oak-wilt-austin' },
      { label: 'Austin protected & heritage tree rules', href: '/guides/austin-protected-heritage-trees' },
      { label: 'Emergency storm damage service', href: '/services/storm-damage' },
      { label: 'Tree trimming in Austin', href: '/services/tree-trimming' },
      { label: 'Tree care in Austin', href: '/service-areas/austin' },
    ],
  },
];

/** Nav/footer display order: brush guide first (business-critical). */
export const guideNavSlugs = [
  'austin-bulk-brush-pickup',
  'oak-wilt-austin',
  'austin-protected-heritage-trees',
] as const;

export interface GuideNavItem {
  slug: string;
  title: string;
  navLabel: string;
  heroSubtitle: string;
}

export function getGuideNavItems(): GuideNavItem[] {
  return guideNavSlugs
    .map((slug) => guides.find((g) => g.slug === slug))
    .filter((g): g is Guide => g !== undefined)
    .map((g) => ({
      slug: g.slug,
      title: g.title,
      navLabel: g.navLabel ?? g.title,
      heroSubtitle: g.heroSubtitle,
    }));
}

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
