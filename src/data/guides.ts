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
      'How oak wilt spreads in Austin, when not to prune oaks, and how to protect live oaks and red oaks. ISA certified arborist checks. Call (512) 749-8615.',
    heroSubtitle:
      'A guide for Austin-area homeowners. Learn what oak wilt is, how it spreads, and how the timing of pruning affects the risk to your oaks.',
    sections: [
      {
        heading: 'What is oak wilt?',
        paragraphs: [
          'Oak wilt is a tree disease caused by a fungus called Bretziella fagacearum. It kills oaks that are prone to it across Central Texas. In the Austin area, Round Rock, and Hill Country towns like Bee Cave and Lakeway, live oaks and red oaks are most at risk. Red oaks include Spanish oak and Shumard oak.',
          'Sick trees often show veinal necrosis. That means the leaf turns brown along its veins while the edges stay green. Then the tree drops its leaves fast. Red oaks can wilt and die within weeks. Live oaks may die more slowly. But once signs show up across much of the crown, they often die within one to two seasons.',
        ],
      },
      {
        heading: 'How oak wilt spreads',
        paragraphs: [
          'Oak wilt spreads in two main ways. Underground, the fungus moves through roots that are joined together. Live oaks often form root grafts with nearby trees, which means their roots grow together. This creates a growing patch of sick trees called an infection center. Above ground, beetles that feed on sap can carry spores (the tiny seeds of the fungus) from sick red oaks to fresh wounds on healthy oaks.',
          'That second path is why fresh pruning cuts and storm damage are so risky in the months when oak wilt spreads most. Any wound that shows sap can draw beetles carrying spores from sick trees nearby.',
        ],
        list: [
          'Through joined roots between nearby oaks (common with live oaks)',
          'Through beetles that visit fresh wounds on at-risk oaks',
          'Through moving infected firewood. Never store or move green (unseasoned) oak firewood from areas with oak wilt.',
        ],
      },
      {
        heading: 'When to prune, and why wounds matter',
        paragraphs: [
          'Central Texas guidance says not to make cuts on at-risk oaks during the active spread season unless you must. That season is often given as February through June. Beetles are most active and sap flows most in these months. So a fresh cut is more likely to let the disease in.',
          'Check the latest advice from the Texas A&M Forest Service and local arborists before you plan work. Guidance can change as conditions change. When pruning is needed and it is not an emergency, the safest time for many Austin-area homes is usually mid-July through January.',
          'Emergency work may be needed in any season, like storm-broken limbs or branches hanging over a roof or driveway. Then it matters even more to treat wounds right and use good methods.',
        ],
      },
      {
        heading: 'Paint pruning cuts on oaks',
        paragraphs: [
          'When oaks must be pruned in riskier months, Texas guidance often says to cover the cut with wound dressing, also called pruning paint. It helps keep beetles away from the fresh sap. Paint the cut right after you make it, and cover the whole wound.',
          'Paint does not replace good timing. Use it as a backup when work can\'t wait. Correct cuts still matter for the long-term health of the tree. Cut in the right place at the branch collar (the swollen ring where a branch meets the trunk), and leave no stubs.',
        ],
      },
      {
        heading: 'Signs your tree needs an arborist to look at it',
        paragraphs: [
          'Call an ISA certified arborist if the crown thins all of a sudden, leaves turn brown along the veins, or branches die back on one side. Call too if a neighbor\'s oak was just removed for oak wilt. Finding it early helps you protect your healthy trees. Options include trenching, a treatment plan, or changes to how you care for your trees. Trenching means cutting a deep trench to break the root links between trees.',
          'Travis Berlin (ISA BCMA, RM-7612B) and Lacy Berlin (ISA Certified Arborist, RM-8632A) check trees based on science across Austin, Round Rock, and Bee Cave / Lakeway. We can look at the signs, talk about the risk to oaks nearby, and suggest next steps. We will be honest about what any treatment can and can\'t promise.',
        ],
      },
    ],
    callout: {
      heading: 'For general learning only',
      body: 'This page sums up common Central Texas advice for homeowners. Rules, beetle activity, and best practices can change. Before you prune or treat oaks on your land, check the latest advice from official oak wilt sources and trained local arborists.',
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
          'In the Austin area, red oaks and live oaks are hit hardest. Red oaks include Texas red oak and Shumard oak. White oaks are less likely to get it, but they can. Make sure you know what kind of oak you have before you plan any removal or treatment.',
      },
      {
        question: 'Can I prune my live oak in spring?',
        answer:
          'Central Texas guidance says not to prune at-risk oaks from about February through June unless you must. Fresh cuts draw beetles that feed on sap, and the beetles can spread the fungus. Check the latest Texas A&M Forest Service advice before you plan work. If pruning can\'t wait, use correct cuts and wound paint as your arborist directs.',
      },
      {
        question: 'Does pruning paint prevent oak wilt?',
        answer:
          'Pruning paint is a recommended step when oaks must be cut in riskier months. It helps keep beetles away from the sap. It can\'t promise your tree won\'t get sick. When you can, it is still better to wait for the safer season.',
      },
      {
        question: 'Can oak wilt spread to my neighbor\'s trees?',
        answer:
          'Yes. Joined roots between nearby live oaks can spread the fungus underground. Beetles can also carry spores between trees with fresh wounds. Patches of sick trees can grow across property lines. That is why experts sometimes suggest an early check and steps to stop the spread, such as trenching.',
      },
      {
        question: 'When should I call Blue Ox for oak wilt concerns?',
        answer:
          'Call (512) 749-8615 if an oak is suddenly getting sick, if you think you have oak wilt, or if you want a check before pruning big oaks. Our ISA certified arborists can check your trees. We can fit this into your overall tree health plan, including organic treatment when it makes sense.',
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
      'A plain guide to Austin protected and heritage tree rules: trunk size limits, permits, and how an ISA arborist can help. Call (512) 749-8615.',
    heroSubtitle:
      'Find out when you may need a City of Austin permit to remove a tree or do major pruning. See how certified arborists can help.',
    sections: [
      {
        heading: 'Why Austin protects some trees',
        paragraphs: [
          'The City of Austin protects large, older trees. These trees keep the city shaded, lower the heat, help handle storm water, and add to the look of each neighborhood. If you plan to remove a protected tree or do major work on one, you may need approval first. That approval comes through the City Arborist program.',
          'The rules depend on the tree\'s size, its kind, where it grows (public or private land), and whether the work is part of a building project. Size is measured as DBH, which stands for diameter at breast height. It is the width of the trunk at about chest height. This guide sums up common cases for homeowners. Always check the current rules on the official City pages linked below.',
        ],
      },
      {
        heading: 'Protected trees (usually 19 inches DBH and larger)',
        paragraphs: [
          'In many Austin home settings, a "protected tree" is a tree on private land with a DBH of 19 inches or more. Protected status usually means you need a permit before you remove the tree. You may also need approval for some pruning that goes beyond routine care.',
          'DBH is measured 4.5 feet above the natural ground level. If a tree has more than one trunk, the City uses a formula to combine the trunk sizes. Don\'t guess. A measurement by a professional helps you avoid costly mistakes.',
        ],
        list: [
          'Protected size: usually 19" DBH or more (check official City sources)',
          'A permit is usually needed before removing a protected tree',
          'Major pruning or damage may also need review, depending on how much work is done',
        ],
      },
      {
        heading: 'Heritage trees (24 inches DBH and listed species)',
        paragraphs: [
          'Heritage trees have stricter rules. They are usually 24 inches DBH or larger and belong to certain listed species. The list includes all oaks, pecan, bald cypress, and several other kinds named in Austin\'s tree rules.',
          'A heritage tree brings more review, and removal often needs a stronger reason. The City treats healthy heritage trees as valuable to the whole community. Removal is usually only allowed when the tree is dead, diseased, or an immediate danger, with records to back it up.',
        ],
        list: [
          'Heritage size: usually 24" DBH or more for listed species',
          'Listed species include all oaks, pecan, bald cypress, and others named in the rules',
          'Stricter review than other protected trees. Plan early if you are building.',
        ],
      },
      {
        heading: 'City Arborist, TORA, and Build + Connect (the basics)',
        paragraphs: [
          'The City Arborist office in Austin handles tree permits. It reviews requests for protected and heritage trees. Homeowners and contractors usually work through the City\'s development services. For many permits tied to home projects, that means the Tree Ordinance Review Application, or TORA.',
          'Build + Connect is the City\'s website for many building and permit tasks. Depending on the case, a tree request may need site plans, arborist reports, photos, and math showing how many new trees you would plant to replace the old one.',
          'For forms, fees, and the current rules, visit the City of Austin City Arborist pages.',
        ],
      },
      {
        heading: 'How Blue Ox Tree Care can help (we can\'t promise a permit)',
        paragraphs: [
          'Blue Ox Tree Care is owned by Travis Berlin, an ISA Board Certified Master Arborist (RM-7612B), and Lacy Berlin, an ISA Certified Arborist (RM-8632A). We help property owners in Austin, Round Rock, and Bee Cave / Lakeway with tree risk checks, health checks, and records that support a permit request.',
          'We can measure DBH, take photos of the tree\'s condition, and explain whether a tree looks dead, dying, or dangerous. We can also write arborist letters for your permit request. We can\'t promise a permit will be approved. The City of Austin makes that choice, based on its rules and your property.',
          'For removals or major pruning that need a permit, start with a tree check before you book a crane or removal crew. Good records plus realistic tree care options often save time in review.',
        ],
      },
    ],
    callout: {
      heading: 'Official City resources',
      body: 'Before you remove or do major pruning on a protected tree, check all the rules on the City of Austin City Arborist website and its tree rules pages. Rules and size limits can change.',
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
          'DBH is the width of the trunk measured 4.5 feet above the natural ground. For trees with more than one trunk, the City sets a formula to combine the trunks. An ISA certified arborist can measure DBH and write it down for your permit request.',
      },
      {
        question: 'Do I need a permit to remove a 20-inch oak in Austin?',
        answer:
          'Often, yes. In Austin, oaks at or above the protected size (usually 19" DBH) typically need a permit before removal on private land. Heritage oaks at 24" DBH or larger get even stricter review. Check the current rules with the City Arborist office.',
      },
      {
        question: 'What is the difference between a protected tree and a heritage tree in Austin?',
        answer:
          'Protected trees are usually 19" DBH or larger. Heritage trees are a smaller group within them. They are usually 24" DBH or larger and a listed species, such as oak, pecan, or bald cypress. Heritage trees have stricter removal rules and review.',
      },
      {
        question: 'Can Blue Ox guarantee my tree permit will be approved?',
        answer:
          'No. We give you expert checks, records, and arborist reports to support your request. The City of Austin makes the permit decision. We help you understand your choices and show the true condition of your tree.',
      },
      {
        question: 'Does Round Rock or Bee Cave use the same rules as Austin?',
        answer:
          'No. Round Rock, Bee Cave, Lakeway, and other Central Texas cities have their own tree and building rules, and they are not the same as Austin\'s. If you live outside Austin city limits, check with your own city. We serve Austin, Round Rock, and Bee Cave / Lakeway, and we can talk about the rules for your address.',
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
      'Austin Resource Recovery brush and bulk pickup for tree debris: pile sizes, booking, Hornsby Bend drop-off, and haul-away. Call (512) 749-8615.',
    heroSubtitle:
      'Brush or bulk? Learn how to book a pickup and set out limbs. See where to drop off brush, and when to have us haul it away.',
    sections: [
      {
        heading: 'Brush, bulk, or compost cart?',
        paragraphs: [
          'After tree work or a storm, many Austin homeowners wonder which city pickup to use. The city service is called Austin Resource Recovery (ARR). The answer depends on what the material is and how big it is. If you book the wrong service, your pile may be missed and left at the curb.',
          'Brush pickup is for tree limbs and large woody debris. Bulk pickup is for furniture, appliances, household carpet, lumber with no nails, pallets, passenger car tires (rims off, 8 at most), and similar items. Brush is not taken as a bulk item, so book a brush pickup for limbs. Small branches and yard trimmings go in your weekly green compost cart, not in an on-demand brush pickup.',
        ],
      },
      {
        heading: 'How to book a pickup',
        paragraphs: [
          'ARR curbside customers can book separate on-demand pickups for bulk and for brush. This covers homes from single-family houses up to fourplexes. You can also book pickups for household hazardous waste and for clothing and textiles. Each service includes up to three free pickups per calendar year. You must make an appointment.',
          'Book through the Austin Recycles app, online through My Schedule (on-demand pickup), or by calling Austin 3-1-1 at (512) 974-2000. You can\'t edit an appointment. If your date changes, cancel and book again the same way. If you need more than three brush pickups in a year, the City offers extra pickups for a fee based on how much you have.',
        ],
      },
      {
        heading: 'Brush set-out rules',
        paragraphs: [
          'Brush pickup is the main way to get rid of large tree debris after trimming or a storm. Follow ARR\'s set-out rules so crews can pick it up safely and on time.',
          'Put limbs at the curb by 5:30 a.m. on your pickup day. Limbs should be 5 to 15 feet long, so cut longer pieces down. Stack them loosely in one row, no more than 15 feet wide and 4 feet high. Point the cut ends toward the street. Trunks thicker than 8 inches must be cut to 3 feet long or shorter.',
          'Don\'t block the sidewalk or let the pile stick out into the street. Keep piles at least 5 feet from carts, mailboxes, fences or walls, water meters, phone and power boxes, fire hydrants, and parked cars. Don\'t put brush under low limbs or power lines. ARR does not pick up brush in alleys, in front of empty lots, or in front of businesses.',
        ],
        list: [
          'Limbs 5 to 15 feet long (cut longer pieces down)',
          'One row, up to 15 feet wide and 4 feet high, cut ends toward the street',
          'Trunks thicker than 8 inches: cut to 3 feet long or shorter',
          'At the curb by 5:30 a.m. on pickup day, 5 feet away from anything in the way',
        ],
      },
      {
        heading: 'Small branches and weekly compost',
        paragraphs: [
          'Branches shorter than 5 feet and 3 inches thick or less go in your green compost cart for weekly pickup. Don\'t add them to a brush pickup pile.',
          'Each week, you can set out your cart plus up to 15 extra items next to it. These can be lawn and leaf bags, reusable containers, and small piles of branches. This works well for routine trimming. It doesn\'t work for big stacks of limbs or a whole tree.',
        ],
      },
      {
        heading: 'Hornsby Bend drop-off',
        paragraphs: [
          'Have you used up your free brush pickups? Or do you want to drop off brush today? Austin and Travis County residents can take yard trimmings to the Hornsby Bend site at 2210 FM 973, Austin, TX. It is open Monday through Saturday, 8 a.m. to 3 p.m. You don\'t need an appointment. Bring a photo ID issued by the government.',
          'Hornsby Bend takes tree limbs, branches, shrubs, and leaves. These are made into Dillo Dirt, the city\'s compost. It does not take building materials, particle board, trash, or treated or painted lumber. The City lists limits on trailers and loads of about 6 cubic yards, so check the live City page for the current limit. Drop-off fees may change starting October 1, 2026, based on proposed and adopted rule updates. Check the current fees and limits on the official City page before you go.',
        ],
      },
      {
        heading: 'After storms',
        paragraphs: [
          'After big Central Texas storms, ARR may post special debris rules that differ from normal brush rules. Check the City\'s storm debris page for the latest before you set anything out.',
          'Fallen trees, dangerous limbs, or trees on a roof may need emergency help before curbside pickup is even possible. See our storm damage service page. If you prune oaks after a storm, follow the timing and wound-painting advice in our oak wilt guide. Don\'t move firewood from oaks with oak wilt.',
        ],
      },
      {
        heading: 'When to call Blue Ox Tree Care',
        paragraphs: [
          'City brush pickup works well when your pile meets the set-out rules and you can wait for an appointment. Call Blue Ox Tree Care at (512) 749-8615 when your debris is more than the limits allow. Call when you need same-day or emergency storm removal. Call when the job has stumps, very big trunks, or crane work that ARR won\'t take.',
          'Some places don\'t get ARR curbside pickup, like larger apartment buildings, businesses, or homes with private haulers. They also need a pro to haul debris away. Many customers like having one crew cut, lower, and haul everything in one visit. That way they don\'t have to manage tree work and city pickup on their own.',
          'Travis Berlin (ISA BCMA, RM-7612B) and Lacy Berlin (ISA Certified Arborist, RM-8632A) serve Austin, Round Rock, and Bee Cave / Lakeway. We have no storefront, and we list no street address on this site. Our arborists come to you.',
        ],
      },
    ],
    callout: {
      heading: 'Check with the City of Austin',
      body: 'This page sums up ARR bulk and brush rules to help you learn. Pickup limits, fees, and schedules can change. Check the current rules on official Austin Resource Recovery pages before you book a pickup or visit Hornsby Bend.',
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
          'Bulk pickup is for things like furniture, appliances (with doors removed), carpet, lumber with no nails, and tires. It is not for tree limbs. Brush pickup is just for tree limbs and large woody debris. If you book the wrong one, your pile may be left behind.',
      },
      {
        question: 'How many free brush pickups does Austin offer per year?',
        answer:
          'ARR curbside customers (single-family homes up to fourplexes) get up to three free on-demand brush pickups per calendar year. You must make an appointment. You can get more brush pickups for a fee. Check current prices with the City.',
      },
      {
        question: 'What size limbs qualify for brush collection?',
        answer:
          'Limbs should be 5 to 15 feet long, so cut longer pieces down. Trunks thicker than 8 inches must be 3 feet long or shorter. Stack them in one row, no more than 15 feet wide and 4 feet high, with cut ends toward the street.',
      },
      {
        question: 'Can tree limbs go in the green compost cart?',
        answer:
          'Small branches can, if they are shorter than 5 feet and 3 inches thick or less. Put them in your green compost cart for weekly pickup. You can also set up to 15 extra items next to the cart each week. Bigger limbs need a brush pickup or a trip to Hornsby Bend.',
      },
      {
        question: 'Where can I drop off brush myself in Austin?',
        answer:
          'Hornsby Bend, at 2210 FM 973, takes tree limbs, branches, shrubs, and leaves from Austin and Travis County residents with a photo ID. It is open Monday through Saturday, 8 a.m. to 3 p.m., and you don\'t need an appointment. Check the City\'s yard trimmings page for current load limits and any fees before you go.',
      },
      {
        question: 'When should I call a tree company instead of ARR?',
        answer:
          'Call (512) 749-8615 when your debris is more than ARR\'s limits allow, or when you need emergency or same-day removal. Call too if the job has stumps or other material ARR won\'t take, if your home doesn\'t get ARR curbside pickup, or if you want one crew to cut and haul everything in one visit.',
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
