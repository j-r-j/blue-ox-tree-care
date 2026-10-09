export interface NavItem {
  label: string;
  href: string;
  /** Extra path prefixes that should mark this item active. */
  match?: string[];
  /** One-line helper shown under the label in the mobile menu. */
  hint: string;
}

export const mainNav: NavItem[] = [
  {
    label: 'Services',
    href: '/services',
    hint: 'Trimming, removal, storm damage, tree health',
  },
  {
    label: 'Areas We Serve',
    href: '/service-areas',
    match: ['/neighborhoods'],
    hint: 'Austin, Round Rock, Bee Cave & Lakeway',
  },
  {
    label: 'About',
    href: '/about',
    match: ['/arborists', '/what-to-expect'],
    hint: 'Meet Travis & Lacy, our certified arborists',
  },
  {
    label: 'Resources',
    href: '/guides',
    match: ['/journal', '/faq'],
    hint: 'Guides, FAQ, and tree care articles',
  },
  {
    label: 'Contact',
    href: '/contact',
    hint: 'Request your free estimate',
  },
];
