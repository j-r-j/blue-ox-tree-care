export const site = {
  name: 'Blue Ox Tree Care',
  legalName: 'Blue Ox Tree Care LLC',
  tagline: 'Tree care by ISA certified arborists in Austin, Round Rock, Bee Cave, and Lakeway.',
  phone: '(512) 749-8615',
  phoneTel: '+15127498615',
  email: 'Owner@BlueOxTreeCareLLC.com',
  emailArborists: 'arborists@blueoxtreecareaustin.com',
  instagram: 'https://www.instagram.com/blueoxtreecare/',
  facebook: 'https://www.facebook.com/blueoxtreecare/',
  googleProfile: 'https://share.google/n0jI8vs2w253Twx1K',
  googleWriteReview:
    'https://search.google.com/local/writereview?placeid=ChIJ49bZIDiCXS8R3UNshQ48qhU',
  url: 'https://www.blueoxtreecarellc.com',
  hours: {
    display: 'Monday to Friday, 8 AM to 5 PM',
    short: 'Mon to Fri, 8 AM to 5 PM',
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] as const,
    opens: '08:00',
    closes: '17:00',
  },
  trustLines: [
    'Travis Berlin is an ISA Board Certified Master Arborist (RM-7612B). Fewer than 2% of ISA Certified Arborists have ever earned it.',
    'Lacy Berlin is an ISA Certified Arborist (RM-8632A).',
    'Licensed and insured',
    'Free estimates',
  ],
  serviceAreaNote: 'We have no storefront. We come to you.',
  owners: [
    {
      id: 'travis-berlin',
      name: 'Travis Berlin',
      title: 'Co-Owner & ISA Board Certified Master Arborist',
      credentials: 'ISA BCMA, RM-7612B',
      bio: `Travis was born and raised in Colorado. His family has lived there for five generations. He is an ISA Board Certified Master Arborist. Fewer than 2% of ISA Certified Arborists have ever earned this title. Travis has managed four tree companies. He started two of them: one in Hawaii, and Blue Ox Tree Care in Salida, Colorado. He was the arborist in charge of the trees at Disneyland in Anaheim, California. He also worked as a city arborist for Newport Beach, California.`,
    },
    {
      id: 'lacy-berlin',
      name: 'Lacy Berlin',
      title: 'Co-Owner & ISA Certified Arborist',
      credentials: 'ISA Certified Arborist, RM-8632A',
      bio: `Lacy is an ISA Certified Arborist. Her focus is tree health. She makes our organic pest and disease treatments herself, right here in house. Lacy also leads the business side of Blue Ox: marketing, talking with customers, and the day-to-day work. She keeps us quick to answer when Austin-area customers call.`,
    },
  ],
} as const;

export const aboutContent = {
  intro: 'A family-owned tree care company in Austin, Texas. We are ISA certified arborists.',
  story: `Travis and Lacy Berlin own and run Blue Ox Tree Care. They are husband and wife. They care for trees based on science, and they put safety first. Today we serve the Austin area, including Austin, Round Rock, Bee Cave, and Lakeway.`,
  salidaHistory: `Before they moved to Central Texas, Travis and Lacy ran Blue Ox Tree Care in Salida, Colorado. They served the Arkansas River Valley and the mountain towns nearby. They worked on steep land, on homes near wildfire areas, and with many kinds of native trees. That work shapes how we care for Hill Country and Austin trees today. Salida is part of our story, but now we only serve Austin and Central Texas.`,
  disneylandNote: `Travis also managed the trees at Disneyland in Anaheim, California. He worked as a city arborist in Newport Beach, too. He brings that big-job care to every home and business we serve in Austin.`,
  approach: `Every tree needs a care plan based on facts. To us, that means good pruning cuts, the right timing for each kind of tree, honest advice, and clear talk. You may need one tree trimmed. You may want every tree on your land checked for risk. Either way, you work with certified arborists, not a sales team.`,
} as const;

export const serviceAreaCities = [
  { name: 'Austin', slug: 'austin' },
  { name: 'Round Rock', slug: 'round-rock' },
  { name: 'Bee Cave / Lakeway', slug: 'bee-cave-lakeway' },
] as const;

export const seo = {
  home: {
    title: 'Austin Tree Service & ISA Arborists | Blue Ox Tree Care',
    description:
      'Austin tree service led by a Board Certified Master Arborist. Trimming, removal, and tree health in Round Rock, Bee Cave & Lakeway. Call (512) 749-8615.',
  },
  serviceTitle: (name: string) => `${name} in Austin, TX`,
  /** Visible H1 on service pages; credentials stay in document title / subcopy. */
  servicePageTitle: (name: string) => `${name} in Austin, TX`,
  serviceMeta: (nameLower: string) =>
    `${nameLower.charAt(0).toUpperCase()}${nameLower.slice(1)} in Austin, Round Rock, Bee Cave & Lakeway from ISA certified arborists. Free estimate: (512) 749-8615.`,
  /** Visible H1 on service area pages. */
  areaTitle: (city: string) => `Tree Care in ${city}, TX`,
  /** Document title, distinct from the /services/ index. */
  areaMetaTitle: (city: string) => `Tree Care & Arborists in ${city}, TX`,
  areaMeta: (city: string) =>
    `Tree service in ${city}, TX from ISA certified arborists. Trimming, removal, storm cleanup, and tree health. Free estimate: (512) 749-8615.`,
} as const;
