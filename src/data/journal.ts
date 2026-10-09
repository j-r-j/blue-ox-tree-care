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
      'How often to prune live oaks in Austin: oak wilt timing, strong structure, and Central Texas best practices from ISA arborists. Call (512) 749-8615.',
    heroSubtitle:
      'How often to prune Austin live oaks, and at what time of year, so you balance a strong shape, good health, and oak wilt risk.',
    datePublished: '2025-09-15',
    relatedLinks: [
      { label: 'Oak wilt guide', href: '/guides/oak-wilt-austin' },
      { label: 'Tree trimming service', href: '/services/tree-trimming' },
      { label: 'Tree risk assessment', href: '/services/tree-risk-assessment' },
      { label: 'What to expect from Blue Ox', href: '/what-to-expect' },
    ],
    sections: [
      {
        heading: 'There is no one schedule for every live oak',
        paragraphs: [
          'People often ask how often to prune a live oak. They expect a simple answer, like "every three years." In real life, it depends on the tree\'s age, shape, location, and health. A young live oak may need training cuts every few years to grow a good shape. An older live oak with a strong build may go five to seven years between pruning, as long as it has enough room from buildings and driveways.',
          'A fixed schedule matters less than pruning for a reason. Remove dead, damaged, or sick wood. Fix weak spots in the tree\'s structure. Clear space where it is needed. Avoid extra cuts that stress the tree or raise disease risk. Random "haircuts" on a timer rarely help a tree.',
        ],
      },
      {
        heading: 'Oak wilt makes timing matter in Central Texas',
        paragraphs: [
          'Austin live oaks face a problem that trees in many other places don\'t: oak wilt. It is a disease caused by the fungus Bretziella fagacearum. It spreads through root grafts, where the roots of nearby live oaks grow together. It also spreads through beetles that feed on sap. They carry spores from sick red oaks to fresh wounds on healthy trees. So when you prune can matter as much as what you cut.',
          'Central Texas guidance says not to make cuts on at-risk oaks during the active spread season unless you must. That season is often given as February through June, when beetles are most active and sap flows most. For routine work on live oaks, the safest time is usually mid-July through January. Emergency work for storm damage or dangerous limbs may be needed in any season.',
          'When oaks must be pruned in riskier months, Texas guidance often says to cover cuts with wound dressing (pruning paint). It helps keep beetles away from fresh sap. Paint does not replace good timing. It is a backup step when work can\'t wait.',
        ],
        list: [
          'Routine pruning for shape and clearance: best from mid-July through January',
          'Skip pruning that can wait from February through June when you can',
          'Emergency storm and hazard work: do it right away, with good methods',
          'Paint fresh cuts on oaks when pruning in riskier months',
        ],
      },
      {
        heading: 'Signs your live oak needs care sooner',
        paragraphs: [
          'Don\'t wait for your next "regular" pruning if you see dead branches over a roof or driveway, cracks in big limbs, large parts of the crown dying back, or shelf-like fungus (conks) at the base. These signs point to problems with the tree\'s strength or health, and they won\'t wait for a good season. Even so, work that isn\'t an emergency can often be timed for safer months.',
          'Call an ISA certified arborist soon if neighbors have lost oaks to oak wilt. Call also if you see veinal necrosis, which is when leaves turn brown along the veins. Finding it early helps you protect your other trees.',
        ],
      },
      {
        heading: 'Work with certified arborists',
        paragraphs: [
          'Blue Ox Tree Care prunes live oaks all over the Austin area, including Tarrytown, West Lake Hills, Circle C, Mueller, Steiner Ranch, and more. Travis Berlin (ISA BCMA, RM-7612B) and Lacy Berlin (ISA Certified Arborist, RM-8632A) look at each tree on its own. They suggest timing that balances shape, health, and oak wilt risk. Call (512) 749-8615 for a free estimate.',
        ],
      },
    ],
  },
  {
    slug: 'central-texas-storm-tree-triage',
    title: 'After a Central Texas Storm: Tree Triage Checklist',
    metaDescription:
      'What to check first on your trees after a Central Texas storm, when to call an arborist, and how to stay safe after wind and hail. Call (512) 749-8615.',
    heroSubtitle:
      'A simple checklist for Austin-area homeowners after bad weather. Stay safe first, then get a pro to look.',
    datePublished: '2025-09-10',
    relatedLinks: [
      { label: 'Storm damage service', href: '/services/storm-damage' },
      { label: 'Tree risk assessment', href: '/services/tree-risk-assessment' },
      { label: 'What to expect from Blue Ox', href: '/what-to-expect' },
      { label: 'Oak wilt guide', href: '/guides/oak-wilt-austin' },
    ],
    sections: [
      {
        heading: 'Stay safe before you look',
        paragraphs: [
          'Central Texas storms can leave trees in dangerous shape. These storms bring straight-line winds, hail, and sometimes tornadoes. Before you walk your yard, look from a safe distance. Watch for hanging branches, split trunks, trees leaning on buildings, and downed power lines. Hanging branches are sometimes called widowmakers. Never go near a tree that touches a power line. Call your power company.',
          'Keep family, pets, and neighbors away until hanging limbs are made safe or taken down. A branch that looks steady may shift with no warning.',
        ],
        list: [
          'Look from a distance before you go into the yard',
          'Treat every downed line as live. Call the power company.',
          'Find hanging branches over roofs, driveways, and play areas',
          'Don\'t climb or use a ladder on a storm-damaged tree',
        ],
      },
      {
        heading: 'What to write down and photograph',
        paragraphs: [
          'Once the urgent dangers are handled, take photos of the damage from several angles before cleanup starts. Clear records help with insurance claims and with an arborist\'s check. Write down the date and time of the storm and which trees were hit. Note whether only limbs broke, or whether a trunk broke or the roots lifted.',
          'Watch out for a root plate that has partly failed. The root plate is the mass of roots and soil at the base of the tree. If it fails partway, the tree still stands, but the soil is cracked and lifted on one side. This is very dangerous. These trees often fall all the way in the next windstorm. A pro needs to check whether they should come down.',
        ],
      },
      {
        heading: 'What you can do, and what to leave to a pro',
        paragraphs: [
          'You can safely clear small branches on the ground away from buildings. Don\'t try to cut hanging branches from below, pull on bent limbs, or run a chainsaw over your head. Fixing a storm-damaged tree takes professional roping and cuts that meet ANSI standards, the national rules for pruning. Bad cuts lead to rot and new dangers later.',
          'If a live oak was badly wounded during the storm or the cleanup, keep oak wilt in mind. Oak wilt is a disease that kills oaks. Fresh wounds during its spread season, often February through June, are at higher risk. Emergency work may still be needed. Wound paint and good methods lower that risk, but they don\'t remove it.',
        ],
      },
      {
        heading: 'When to call a professional',
        paragraphs: [
          'Call an ISA certified arborist if branches hang over buildings or block your way in, or if a trunk split or a two-trunk tree broke apart. Call if a tree leans a lot, if the roots lifted, or if you can\'t judge the damage from the ground. Blue Ox Tree Care puts storm help first. We make dangers safe first. Then we plan the full cleanup and any care the trees need after.',
          'Call (512) 749-8615 for storm damage help in Austin, Round Rock, Bee Cave, Lakeway, and nearby towns. We have no storefront. We come to you.',
        ],
      },
    ],
  },
  {
    slug: 'tree-debris-austin-arr-brush-pickup',
    title: 'Tree Debris & Austin ARR Brush Pickup',
    metaDescription:
      'How Austin Resource Recovery brush and bulk pickup works for tree debris, and how to plan cleanup around your tree work. Call (512) 749-8615.',
    heroSubtitle:
      'How to plan cleanup after tree work around Austin\'s city pickup rules.',
    datePublished: '2025-09-05',
    relatedLinks: [
      { label: 'Full brush pickup guide', href: '/guides/austin-bulk-brush-pickup' },
      { label: 'Tree trimming service', href: '/services/tree-trimming' },
      { label: 'Tree removal service', href: '/services/tree-removal' },
      { label: 'What to expect from Blue Ox', href: '/what-to-expect' },
    ],
    sections: [
      {
        heading: 'Tree work makes debris',
        paragraphs: [
          'Pruning, tree removal, and storm cleanup all leave material behind: branches, logs, wood chips, and sometimes stumps. Before you book tree work, it helps to know how that debris will leave your yard. Some homeowners want full haul-away as part of the tree service. Others plan to use the city\'s brush and bulk pickup for some or all of it. That service is run by Austin Resource Recovery (ARR).',
          'If you know ARR\'s rules ahead of time, you can avoid piles that sit at the curb past pickup day, or items the crews won\'t take.',
        ],
      },
      {
        heading: 'ARR brush pickup basics',
        paragraphs: [
          'Austin Resource Recovery picks up yard trimmings and brush for homes inside city limits. Brush must meet the city\'s size limits and be set out the right way. Large logs, stumps, and root balls usually don\'t count as brush. They may need bulk pickup or private hauling.',
          'Our full guide to Austin bulk trash and brush pickup covers the size rules, how to book, and the difference between brush and bulk items. The rules change from time to time. Check the current rules on the City of Austin website before your pickup day.',
        ],
        list: [
          'Set out brush within ARR\'s size limits',
          'Keep large logs and stumps separate. They often count as bulk, not brush.',
          'Book the right pickup: brush or bulk',
          'Time your tree work around your pickup date if you plan to use curbside cleanup',
        ],
      },
      {
        heading: 'Plan with your tree service',
        paragraphs: [
          'When you ask Blue Ox Tree Care for an estimate, tell us if you want debris hauled away or left for ARR pickup. We can chip it on site, haul it all off, or stack cut branches for you to set out. Each choice changes the cost and timing of the job. For large removals, haul-away is often the practical choice. For routine pruning, ARR pickup may be enough if you plan ahead.',
        ],
      },
      {
        heading: 'Outside Austin city limits',
        paragraphs: [
          'Not every home we serve uses ARR. Round Rock, Bee Cave, Lakeway, and some areas just outside Austin city limits have other trash services. Our brush pickup guide covers Austin city rules. During your estimate, ask about debris choices for your address. Call (512) 749-8615 for tree care anywhere in our Austin-area service area.',
        ],
      },
    ],
  },
  {
    slug: 'hiring-isa-arborist-austin-bcma',
    title: 'Hiring an ISA Arborist in Austin: What BCMA Means',
    metaDescription:
      'What ISA certification and BCMA mean when you hire an arborist in Austin: credentials, questions to ask, and what to expect. Call (512) 749-8615.',
    heroSubtitle:
      'What the ISA Certified Arborist and Board Certified Master Arborist titles mean, so you know what to look for before you hire.',
    datePublished: '2025-09-01',
    relatedLinks: [
      { label: 'Meet our arborists', href: '/arborists' },
      { label: 'Travis Berlin, BCMA', href: '/arborists/travis-berlin' },
      { label: 'What to expect from Blue Ox', href: '/what-to-expect' },
      { label: 'Tree risk assessment', href: '/services/tree-risk-assessment' },
    ],
    sections: [
      {
        heading: 'Not every tree service is run by arborists',
        paragraphs: [
          'In Texas, anyone can call themselves a tree service. Licenses and insurance vary, and tree training is optional. When tree work affects your safety, your home\'s value, and your tree\'s long-term health, it pays to check credentials. The International Society of Arboriculture (ISA) certifies tree experts. To become certified, an arborist must pass a broad exam on how trees grow, pruning, finding tree problems, and safety.',
          'An ISA Certified Arborist has shown they know the basics. That is the least you should expect when you hire for anything more than simple cleanup on the ground.',
        ],
      },
      {
        heading: 'What BCMA adds',
        paragraphs: [
          'Board Certified Master Arborist (BCMA) is the highest title ISA gives. Fewer than 2% of ISA Certified Arborists have ever earned it. To try for it, an arborist must already be ISA certified and meet ISA\'s experience rules. Then they must pass a tough exam on advanced diagnosis (finding the cause of tree problems), risk checks, and long-term care plans. When a BCMA owns the company, you work with an arborist who has reached the top of the field.',
          'Blue Ox Tree Care co-owner Travis Berlin holds BCMA credential RM-7612B. Co-owner Lacy Berlin holds ISA Certified Arborist credential RM-8632A, and she has deep skill in treating sick trees. You can look up both credentials on ISA\'s website.',
        ],
        list: [
          'Ask for ISA credential numbers and check them at isa-arbor.com',
          'Make sure the certified arborist will be on site, not only on the sales call',
          'Ask for proof of insurance for dangerous tree work',
          'Be careful of door-to-door crews after storms who can\'t show credentials',
        ],
      },
      {
        heading: 'Questions to ask',
        paragraphs: [
          'Before you hire, ask these questions. Will a certified arborist look at my trees in person? What pruning standard do you follow? (ANSI A300 is the national standard.) How do you time live oak work around oak wilt? What does the estimate include: haul-away, stump grinding, help with permits? A good company answers clearly and doesn\'t pressure you.',
          'Some jobs are complex, like trees near a building project, heritage tree permits, or risk checks on many trees. For these, BCMA-level skill and written reports give you value that lasts past the job itself.',
        ],
      },
      {
        heading: 'Blue Ox Tree Care credentials',
        paragraphs: [
          'We are a family-owned, licensed, and insured business. We have no storefront, and we serve Austin, Round Rock, Bee Cave, and Lakeway. You work with Travis and Lacy Berlin from the estimate until the job is done. You won\'t get a rotating crew with no arborist in charge. Call (512) 749-8615 for a free estimate, or read more about our team on our arborist pages.',
        ],
      },
    ],
  },
];

export function getJournalPost(slug: string): JournalPost | undefined {
  return journalPosts.find((p) => p.slug === slug);
}
