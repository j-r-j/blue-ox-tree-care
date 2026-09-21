export const site = {
  name: 'Blue Ox Tree Care',
  legalName: 'Blue Ox Tree Care LLC',
  tagline: 'ISA certified arborists serving Austin, Round Rock, Bee Cave & Lakeway',
  phone: '(512) 749-8615',
  phoneTel: '+15127498615',
  email: 'Owner@BlueOxTreeCareLLC.com',
  emailArborists: 'arborists@blueoxtreecareaustin.com',
  instagram: 'http://instagram.com/blueoxtreecare',
  url: 'https://www.blueoxtreecarellc.com',
  owners: [
    {
      name: 'Travis Berlin',
      title: 'Co-Owner & ISA Board Certified Master Arborist',
      credentials: 'ISA BCMA, RM-7612B',
    },
    {
      name: 'Lacy Berlin',
      title: 'Co-Owner & ISA Certified Arborist',
      credentials: 'ISA Certified Arborist, RM-8632A',
    },
  ],
} as const;

export const serviceAreaCities = [
  { name: 'Austin', slug: 'austin' },
  { name: 'Round Rock', slug: 'round-rock' },
  { name: 'Bee Cave / Lakeway', slug: 'bee-cave-lakeway' },
] as const;
