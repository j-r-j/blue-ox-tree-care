export const site = {
  name: 'Blue Ox Tree Care',
  legalName: 'Blue Ox Tree Care LLC',
  tagline: 'ISA certified arborists serving Austin, Round Rock, Bee Cave & Lakeway',
  phone: '(512) 749-8615',
  phoneTel: '+15127498615',
  email: 'Owner@BlueOxTreeCareLLC.com',
  emailArborists: 'arborists@blueoxtreecareaustin.com',
  instagram: 'http://instagram.com/blueoxtreecare',
  facebook: 'https://www.facebook.com/blueoxtreecare/',
  googleProfile: 'https://share.google/RaJen7sPcxILcMAUu',
  url: 'https://www.blueoxtreecarellc.com',
  hours: {
    display: 'Monday–Friday, 8:00 AM – 5:00 PM',
    short: 'Mon–Fri, 8 AM – 5 PM',
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] as const,
    opens: '08:00',
    closes: '17:00',
  },
  trustLines: [
    'Travis Berlin, ISA BCMA (RM-7612B) — fewer than 2% of ISA Certified Arborists have ever earned BCMA',
    'Lacy Berlin, ISA Certified Arborist (RM-8632A)',
    'Licensed and insured',
    'Free estimates',
  ],
  serviceAreaNote:
    'Service-area business — no public storefront. We come to your property.',
  owners: [
    {
      id: 'travis-berlin',
      name: 'Travis Berlin',
      title: 'Co-Owner & ISA Board Certified Master Arborist',
      credentials: 'ISA BCMA, RM-7612B',
      bio: `Travis is a fifth-generation Coloradan, born and raised. He is an experienced ISA Board Certified Master Arborist — fewer than 2% of ISA Certified Arborists have ever earned this elite credential. He has managed four tree companies, opening two of his own, one in Hawaii and Blue Ox Tree Care in Salida, CO. He also was the arborist who managed Disneyland's trees in Anaheim, CA, as well as a Municipal Arborist for the city of Newport Beach, CA.`,
    },
    {
      id: 'lacy-berlin',
      name: 'Lacy Berlin',
      title: 'Co-Owner & ISA Certified Arborist',
      credentials: 'ISA Certified Arborist, RM-8632A',
      bio: `Lacy is a knowledgeable ISA Certified Arborist who excels at tree health treatments, formulating and creating organic pest and disease treatments in house. Beyond deep tree health expertise, Lacy drives the professionalism and quality presentation that Blue Ox Tree Care is known for — from marketing and client communication to day-to-day operations that keep the company responsive for Austin-area customers.`,
    },
  ],
} as const;

export const aboutContent = {
  intro:
    'Family-owned tree care by ISA certified arborists — proudly serving the Austin, Texas metro.',
  story: `Blue Ox Tree Care is owned and operated by Travis and Lacy Berlin, a husband-and-wife team dedicated to professional, science-based tree care. Today we serve the greater Austin area — including Austin, Round Rock, Bee Cave, and Lakeway — with the same commitment to tree health, safety, and customer service that built our reputation.`,
  salidaHistory: `Before relocating to Central Texas, Travis and Lacy operated Blue Ox Tree Care in Salida, Colorado, serving the Arkansas River Valley and surrounding mountain communities. That experience — working in challenging terrain, managing wildfire-adjacent properties, and caring for diverse native species — informs how we approach Hill Country and Austin-area tree care today. Salida remains an important chapter in our story; our focus and service area is now Austin and Central Texas.`,
  disneylandNote: `Travis's experience managing trees at Disneyland in Anaheim, California, and as a municipal arborist in Newport Beach reflects the scale and precision we bring to residential and commercial tree care in Austin.`,
  approach: `We believe every tree deserves an informed care plan. That means proper pruning cuts, species-appropriate timing, honest assessments, and clear communication. Whether you need a single tree trimmed or a full property risk assessment, you will work directly with certified arborists — not a sales team.`,
} as const;

export const serviceAreaCities = [
  { name: 'Austin', slug: 'austin' },
  { name: 'Round Rock', slug: 'round-rock' },
  { name: 'Bee Cave / Lakeway', slug: 'bee-cave-lakeway' },
] as const;

export const seo = {
  home: {
    title: 'Tree Care in Austin, TX | ISA Certified Arborists',
    description:
      'Blue Ox Tree Care — ISA Board Certified Master Arborist owned tree service in Austin, Round Rock, Bee Cave & Lakeway. Licensed, insured, free estimates. Call (512) 749-8615.',
  },
  serviceTitle: (name: string) => `${name} in Austin, TX | ISA Certified Arborists`,
  /** Visible H1 on service pages — credentials stay in document title / subcopy. */
  servicePageTitle: (name: string) => `${name} in Austin, TX`,
  serviceMeta: (nameLower: string) =>
    `Professional ${nameLower} in Austin, Round Rock, Bee Cave & Lakeway by ISA certified arborists. Licensed & insured. Free estimates — call (512) 749-8615.`,
  areaTitle: (city: string) => `Tree Care Services in ${city}, TX`,
  areaMeta: (city: string) =>
    `ISA certified tree care in ${city}, TX — trimming, removal, risk assessment & more. Blue Ox Tree Care. Call (512) 749-8615.`,
} as const;
