export interface JournalSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
}

export interface JournalLink {
  label: string;
  href: string;
}

export interface JournalPost {
  slug: string;
  title: string;
  metaDescription: string;
  heroSubtitle: string;
  datePublished: string;
  sections: JournalSection[];
  relatedLinks: JournalLink[];
}

export const journalPosts: JournalPost[] = [
  {
    slug: 'how-often-prune-live-oaks-austin',
    title: 'How Often to Prune Live Oaks in Austin',
    metaDescription:
      'When and how often to prune live oaks in Austin — oak wilt timing, structural needs, and Central Texas best practices from ISA certified arborists. Call (512) 749-8615.',
    heroSubtitle:
      'Pruning frequency and seasonal timing for Austin live oaks — balancing structure, health, and oak wilt risk.',
    datePublished: '2025-09-15',
    relatedLinks: [
      { label: 'Oak wilt guide', href: '/guides/oak-wilt-austin' },
      { label: 'Tree trimming service', href: '/services/tree-trimming' },
      { label: 'Tree risk assessment', href: '/services/tree-risk-assessment' },
      { label: 'What to expect from Blue Ox', href: '/what-to-expect' },
    ],
    sections: [
      {
        heading: 'There is no single calendar for every live oak',
        paragraphs: [
          'Homeowners often ask how often live oaks should be pruned — expecting a simple answer like "every three years." In practice, pruning frequency depends on the tree\'s age, structure, location, and health. A young live oak may need training cuts every few years to establish good form. A mature live oak with sound structure may go five to seven years between maintenance pruning if it has adequate clearance from buildings and drives.',
          'What matters more than a fixed schedule is pruning with a purpose: remove dead, damaged, or diseased wood; correct structural defects; provide clearance where needed; and avoid unnecessary wounding that stresses the tree or increases disease risk. Random "haircuts" on a timer rarely improve tree health.',
        ],
      },
      {
        heading: 'Oak wilt makes timing critical in Central Texas',
        paragraphs: [
          'Austin live oaks face a constraint that trees in many other regions do not: oak wilt. The fungal disease Bretziella fagacearum spreads through root grafts between neighboring live oaks and via sap-feeding beetles that carry spores from infected red oaks to fresh wounds on healthy trees. That means when you prune can matter as much as what you remove.',
          'General educational guidance for Central Texas recommends avoiding unnecessary wounding of susceptible oaks during the active transmission season, often described as February through June. Beetle activity and sap flow peak in this window. The safest pruning window for routine work on live oaks is typically mid-July through January — though emergency work for storm damage or hazardous limbs may be required regardless of season.',
          'When oaks must be pruned during higher-risk periods, wound dressing (pruning paint) is commonly recommended in Texas to reduce beetle attraction to fresh sap. Paint does not replace good timing — it is a mitigation step when work cannot wait.',
        ],
        list: [
          'Routine structural and clearance pruning: prefer mid-July through January',
          'Avoid elective pruning February through June when possible',
          'Emergency storm and hazard work: proceed immediately with proper technique',
          'Paint fresh cuts on oaks when pruning during higher-risk windows',
        ],
      },
      {
        heading: 'Signs your live oak needs attention sooner',
        paragraphs: [
          'Schedule an assessment before your next "regular" pruning cycle if you notice dead branches over a roof or driveway, cracks in major limbs, significant canopy dieback, or fungal conks at the base. These conditions indicate structural or health problems that will not wait for a convenient season — though non-emergency corrective work can often be timed for safer windows.',
          'If neighbors have had oaks removed for oak wilt, or you see veinal necrosis (browning along leaf veins), contact an ISA certified arborist promptly. Early diagnosis protects remaining trees through informed management.',
        ],
      },
      {
        heading: 'Work with certified arborists',
        paragraphs: [
          'Blue Ox Tree Care provides live oak pruning across the Austin metro — Tarrytown, West Lake Hills, Circle C, Mueller, Steiner Ranch, and beyond. Travis Berlin (ISA BCMA, RM-7612B) and Lacy Berlin (ISA Certified Arborist, RM-8632A) assess each tree individually and recommend timing that balances structure, health, and oak wilt risk. Call (512) 749-8615 for a free estimate.',
        ],
      },
    ],
  },
  {
    slug: 'central-texas-storm-tree-triage',
    title: 'After a Central Texas Storm: Tree Triage Checklist',
    metaDescription:
      'Post-storm tree triage for Central Texas — what to check first, when to call an arborist, and safety priorities after wind and hail. Call (512) 749-8615.',
    heroSubtitle:
      'A practical checklist for Austin-area homeowners after severe weather — safety first, then professional assessment.',
    datePublished: '2025-09-10',
    relatedLinks: [
      { label: 'Storm damage service', href: '/services/storm-damage' },
      { label: 'Tree risk assessment', href: '/services/tree-risk-assessment' },
      { label: 'What to expect from Blue Ox', href: '/what-to-expect' },
      { label: 'Oak wilt guide', href: '/guides/oak-wilt-austin' },
    ],
    sections: [
      {
        heading: 'Safety before inspection',
        paragraphs: [
          'Central Texas storms — straight-line winds, hail, and occasional tornadic activity — can leave trees in dangerous condition. Before walking your property, look from a safe distance for hanging branches (widowmakers), split trunks, uprooted trees leaning against structures, and downed power lines. Never approach a tree in contact with electrical lines; call your utility provider.',
          'Keep family, pets, and neighbors away from the affected area until hanging limbs are secured or removed. A branch that appears stable may shift without warning.',
        ],
        list: [
          'Scan from a distance before entering the yard',
          'Treat all downed lines as energized — call the utility',
          'Identify hangers over roofs, drives, and play areas',
          'Do not climb or use a ladder on storm-damaged trees',
        ],
      },
      {
        heading: 'What to document',
        paragraphs: [
          'Once immediate safety threats are addressed, photograph damage from multiple angles before cleanup begins — insurance claims and arborist assessments both benefit from clear documentation. Note the date and time of the storm, which trees were affected, and whether damage appears limited to limbs or involves trunk failure or root plate movement.',
          'Partial root plate failure — where a tree remains partially upright but soil is cracked and heaved on one side — is particularly dangerous. These trees often fail completely in the next wind event and require professional evaluation for removal.',
        ],
      },
      {
        heading: 'What homeowners can vs. should not do',
        paragraphs: [
          'Homeowners can safely clear small branches on the ground away from structures. Do not attempt to cut hanging branches from below, pull on bent limbs, or operate a chainsaw overhead. Corrective pruning after storm damage requires professional rigging and ANSI-standard cuts — improper cuts create long-term decay and new hazards.',
          'If a live oak sustained significant wounding during storm cleanup, remember that fresh wounds during oak wilt transmission season (often February through June) carry elevated infection risk. Emergency work may be necessary; wound paint and professional technique reduce but do not eliminate that risk.',
        ],
      },
      {
        heading: 'When to call a professional',
        paragraphs: [
          'Call an ISA certified arborist when any of the following apply: branches over structures or blocking access, split trunks or co-dominant stem failures, trees leaning significantly, root plate heaving, or damage you cannot assess from the ground. Blue Ox Tree Care prioritizes storm triage — securing hazards first, then planning full cleanup and any follow-up health care.',
          'Call (512) 749-8615 for storm damage response across Austin, Round Rock, Bee Cave, Lakeway, and surrounding communities. We are a service-area business and come to your property.',
        ],
      },
    ],
  },
  {
    slug: 'tree-debris-austin-arr-brush-pickup',
    title: 'Tree Debris & Austin ARR Brush Pickup',
    metaDescription:
      'How Austin Resource Recovery brush and bulk pickup works for tree debris — bundle rules, schedules, and planning professional tree work. Call (512) 749-8615.',
    heroSubtitle:
      'Planning tree work cleanup around Austin Resource Recovery collection rules.',
    datePublished: '2025-09-05',
    relatedLinks: [
      { label: 'Full brush pickup guide', href: '/guides/austin-bulk-brush-pickup' },
      { label: 'Tree trimming service', href: '/services/tree-trimming' },
      { label: 'Tree removal service', href: '/services/tree-removal' },
      { label: 'What to expect from Blue Ox', href: '/what-to-expect' },
    ],
    sections: [
      {
        heading: 'Professional tree work creates debris',
        paragraphs: [
          'Pruning, removal, and storm cleanup all generate material — branches, logs, chips, and sometimes stumps. Before scheduling work, it helps to know how that debris will leave your property. Some homeowners prefer full haul-away included in the tree service contract. Others plan to use Austin Resource Recovery (ARR) bulk and brush collection for some or all of the material.',
          'Understanding ARR rules upfront prevents piles sitting curbside past collection day or items rejected by collection crews.',
        ],
      },
      {
        heading: 'ARR brush collection basics',
        paragraphs: [
          'Austin Resource Recovery collects yard trimmings and brush on scheduled collection days for addresses within city limits. Brush must be tied in bundles within size and weight limits, or placed in approved containers. Large logs, stumps, and root balls typically do not qualify as brush — they may require bulk collection or private disposal.',
          'Our comprehensive guide to Austin bulk trash and brush pickup covers bundle dimensions, weight limits, collection schedules, and the difference between brush and bulk items. Rules update periodically — confirm current requirements on the City of Austin website before your collection day.',
        ],
        list: [
          'Bundle brush within ARR size and weight limits',
          'Separate large logs and stumps — often bulk items, not brush',
          'Check your collection calendar for brush vs. bulk weeks',
          'Plan professional work timing around collection when doing curbside cleanup',
        ],
      },
      {
        heading: 'Coordinating with your tree service',
        paragraphs: [
          'When requesting an estimate from Blue Ox Tree Care, specify whether you want debris hauled away or left for ARR collection. We can chip material on site, haul everything off, or stage cut branches for bundling — each approach affects project cost and timeline. For large removals, haul-away is often the practical choice; for routine pruning, ARR collection may be sufficient if you plan bundles in advance.',
        ],
      },
      {
        heading: 'Beyond Austin city limits',
        paragraphs: [
          'Not every address we serve uses ARR — Round Rock, Bee Cave, Lakeway, and some Austin extraterritorial areas have different waste providers. Our brush pickup guide focuses on Austin city rules; ask during your estimate about disposal options for your specific address. Call (512) 749-8615 for tree care anywhere in our Austin metro service area.',
        ],
      },
    ],
  },
  {
    slug: 'hiring-isa-arborist-austin-bcma',
    title: 'Hiring an ISA Arborist in Austin — What BCMA Means',
    metaDescription:
      'What ISA certification and BCMA mean when hiring an arborist in Austin — credentials, questions to ask, and what to expect. Call (512) 749-8615.',
    heroSubtitle:
      'Understanding ISA Certified Arborist and Board Certified Master Arborist credentials before you hire.',
    datePublished: '2025-09-01',
    relatedLinks: [
      { label: 'Meet our arborists', href: '/arborists' },
      { label: 'Travis Berlin, BCMA', href: '/arborists/travis-berlin' },
      { label: 'What to expect from Blue Ox', href: '/what-to-expect' },
      { label: 'Tree risk assessment', href: '/services/tree-risk-assessment' },
    ],
    sections: [
      {
        heading: 'Not every tree service is arborist-led',
        paragraphs: [
          'In Texas, anyone can call themselves a tree service. Licensing and insurance vary; arboricultural training is optional. When tree work affects safety, property value, and long-term tree health, credential verification matters. The International Society of Arboriculture (ISA) offers standardized certification that requires passing a comprehensive exam covering tree biology, pruning, diagnosis, and safety.',
          'An ISA Certified Arborist has demonstrated baseline competency. It is the credential homeowners should expect as a minimum when hiring for anything beyond simple ground-level cleanup.',
        ],
      },
      {
        heading: 'What BCMA adds',
        paragraphs: [
          'Board Certified Master Arborist (BCMA) is ISA\'s highest credential — fewer than 2% of ISA Certified Arborists have ever earned it. BCMA candidates must hold ISA certification, meet experience requirements, and pass a rigorous exam covering advanced diagnosis, risk assessment, and management planning. When a company is BCMA-owned, you are working with arborists who have invested at the top of the profession.',
          'Blue Ox Tree Care co-owner Travis Berlin holds BCMA credential RM-7612B. Co-owner Lacy Berlin holds ISA Certified Arborist credential RM-8632A with deep tree health treatment expertise. Both credentials are verifiable through ISA\'s online credential lookup.',
        ],
        list: [
          'Ask for ISA credential numbers and verify at isa-arbor.com',
          'Confirm the certified arborist will be on site — not just the sales call',
          'Request proof of insurance for hazardous tree work',
          'Be wary of door-knockers after storms with no verifiable credentials',
        ],
      },
      {
        heading: 'Questions worth asking',
        paragraphs: [
          'Before hiring, ask: Will a certified arborist assess my trees in person? What pruning standard do you follow (ANSI A300)? How do you handle oak wilt timing for live oaks? What is included in the estimate — haul-away, stump grinding, permit assistance? A professional company answers clearly without pressure tactics.',
          'For complex situations — construction impact, heritage tree permits, multi-tree risk assessment — BCMA-level expertise and documented reports provide value that outlasts the immediate job.',
        ],
      },
      {
        heading: 'Blue Ox Tree Care credentials',
        paragraphs: [
          'We are a family-owned, licensed, and insured service-area business serving Austin, Round Rock, Bee Cave, and Lakeway. You work directly with Travis and Lacy Berlin from estimate through completion — not a rotating crew with no arborist oversight. Call (512) 749-8615 for a free estimate, or read more about our team on the arborists pages.',
        ],
      },
    ],
  },
];

export function getJournalPost(slug: string): JournalPost | undefined {
  return journalPosts.find((p) => p.slug === slug);
}
