export type NeighborhoodRegion = 'central' | 'west' | 'southwest';

export interface NeighborhoodSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
}

export interface NeighborhoodLink {
  label: string;
  href: string;
}

export interface Neighborhood {
  slug: string;
  name: string;
  region: NeighborhoodRegion;
  title: string;
  metaDescription: string;
  heroSubtitle: string;
  /** Google Maps place URL */
  placeUrl: string;
  zipCodes: string[];
  sections: NeighborhoodSection[];
  relatedServices: string[];
  relatedGuides: string[];
}

export const neighborhoods: Neighborhood[] = [
  {
    slug: 'tarrytown',
    name: 'Tarrytown',
    region: 'central',
    title: 'Tree Care in Tarrytown, Austin TX',
    metaDescription:
      'Tree care in Tarrytown, Austin from ISA certified arborists. Live oak pruning, heritage tree permits, and oak wilt care. Call (512) 749-8615.',
    heroSubtitle:
      'Care for the big live oaks and heritage trees of Tarrytown in Central Austin.',
    placeUrl: 'https://www.google.com/maps/place/Tarrytown,+Austin,+TX',
    zipCodes: ['78703'],
    relatedServices: ['tree-trimming', 'tree-risk-assessment', 'pest-disease', 'tree-removal'],
    relatedGuides: ['oak-wilt-austin', 'austin-protected-heritage-trees', 'austin-bulk-brush-pickup'],
    sections: [
      {
        heading: 'Tree care for Tarrytown homes',
        paragraphs: [
          'Tarrytown has more trees than most Austin neighborhoods. Its winding streets are shaded by old live oaks and pecans. Some are heritage trees that are older than many of the homes around them. Lots are close together, the trees are big, and Lady Bird Lake is nearby. So every tree choice matters for your shade, your home\'s value, and your neighbors.',
          'Blue Ox Tree Care works all over Tarrytown and nearby Clarksville. We have no storefront. We come to you. You work with Travis Berlin (BCMA, RM-7612B) and Lacy Berlin (RM-8632A), our ISA certified arborists. They are with you from your first call until the job is done.',
          'You may need a live oak over your driveway pruned to keep it strong. You may want a risk check before storm season. Or you may have questions about Austin\'s rules for protected trees. We know the trees, the soil, and the rules in Central Austin.',
        ],
      },
      {
        heading: 'Live oaks, oak wilt, and when to prune',
        paragraphs: [
          'Live oaks make up most of Tarrytown\'s tree cover, and they need the right care. Oak wilt is a serious threat here. It is a disease that kills oaks. It spreads through roots that grow together between trees. It also spreads through beetles that are drawn to fresh cuts. In Tarrytown, live oaks often grow close together. That makes when you prune just as important as how you prune.',
          'Austin guidance says to avoid cutting at-risk oaks from about February through June, when oak wilt spreads most. Sometimes work can\'t wait, like after a storm or when a broken limb hangs over your house. Then good cuts and wound paint matter. Our oak wilt guide explains the science. We use it on every Tarrytown job.',
        ],
        list: [
          'Pruning that protects the branch collar (the swollen ring where a branch meets the trunk)',
          'Oak wilt checks when neighbors have seen signs or lost trees',
          'Organic pest and disease treatments made in house by our certified arborists',
          'Help with heritage and protected tree permits before removal or major work',
        ],
      },
      {
        heading: 'Heritage trees and Austin city rules',
        paragraphs: [
          'In many Tarrytown yards, the city protects the big trees. Austin has rules for protected trees and heritage trees, based on how thick the trunk is. Many homeowners think a backyard tree is theirs alone to decide on. They are surprised by the size limits, the rules for replacing trees, and the wait for a permit. Before you do big trimming, take a tree down, or build near one, find out what the city requires.',
          'Our guide to Austin protected and heritage tree rules covers the basics. At your home, we can check whether your tree may need a permit. Then we talk about choices that keep you safe, keep the tree healthy, and follow the rules. The city runs the permit process. We help you through it with clear arborist records.',
        ],
      },
      {
        heading: 'Brush pickup and routine care',
        paragraphs: [
          'Tree work in Tarrytown leaves limbs, wood chips, and sometimes big logs. The city has rules for what you put at the curb. They come from Austin Resource Recovery (ARR), the city\'s trash and recycling service. There are rules for size, stacking, and scheduling. Our brush pickup guide explains how it works, so you can plan cleanup around your tree work.',
          'Call (512) 749-8615 for a free estimate anywhere in Tarrytown. We are licensed and insured, and a Board Certified Master Arborist leads our work.',
        ],
      },
    ],
  },
  {
    slug: 'clarksville',
    name: 'Clarksville / Old West Austin',
    region: 'central',
    title: 'Tree Care in Clarksville & Old West Austin',
    metaDescription:
      'Tree care in Clarksville and Old West Austin from ISA certified arborists. Heritage live oaks, small lots, and protected tree permits. Call (512) 749-8615.',
    heroSubtitle:
      'Tree care for one of Austin\'s oldest neighborhoods, with historic lots, walkable streets, and the trees that shape Old West Austin.',
    placeUrl: 'https://www.google.com/maps/place/Clarksville,+Austin,+TX',
    zipCodes: ['78703'],
    relatedServices: ['tree-trimming', 'tree-risk-assessment', 'tree-removal', 'cabling-bracing'],
    relatedGuides: ['oak-wilt-austin', 'austin-protected-heritage-trees', 'austin-bulk-brush-pickup'],
    sections: [
      {
        heading: 'Old West Austin\'s trees',
        paragraphs: [
          'Clarksville and Old West Austin hold some of the city\'s oldest homes. Lots are narrow, the blocks are easy to walk, and Shoal Creek is close by. Many trees here have lived through years of new building and remodels. They shade the sidewalks and give privacy between homes that sit close together. Often, the biggest tree is the most valuable living thing on the lot.',
          'Blue Ox Tree Care serves Clarksville, plus nearby Tarrytown and Pemberton Heights. Our ISA certified arborists check trees on small city lots. Here, every cut affects your neighbors and your view. Sometimes it also affects whether the city protects the tree. We have no storefront. Call (512) 749-8615 and we will come to you.',
        ],
      },
      {
        heading: 'Big trees on small lots',
        paragraphs: [
          'Many Clarksville yards have live oaks and pecans big enough to be protected by the city. That means you need a permit to remove them. You may also need one to build an addition or an ADU (a backyard cottage) that would harm them. Remodels all over Old West Austin crowd tree roots and change the slope of the ground. Trees that were healthy can show stress within a few years.',
          'Our heritage tree guide explains Austin\'s rules for protected and heritage trees. Before you build or do major pruning, we help you learn if the city will need to review it. We also help you know what records support a project that follows the rules. The city runs the permit process. We give you a clear arborist report.',
        ],
        list: [
          'Planning to protect trees and roots before you build',
          'Pruning to clear alleys, driveways, and shared fences',
          'Cables and braces for big trees with weak spots',
          'Removal only when the risk or your project leaves no good way to keep the tree',
        ],
      },
      {
        heading: 'Oak wilt on close-packed blocks',
        paragraphs: [
          'Live oaks on Clarksville blocks often grow close enough for their roots to join. When that happens, oak wilt (a disease that kills oaks) can move from yard to yard underground before anyone sees it. Fresh pruning cuts made from about February through June draw beetles. These beetles can carry the disease from sick red oaks.',
          'Our oak wilt guide covers timing and how to treat cuts. When we can, we prune in the safer months. When a storm forces work in a riskier month, we use the right methods.',
        ],
      },
      {
        heading: 'Storms, brush, and ongoing care',
        paragraphs: [
          'Storms in Central Austin often drop limbs on Clarksville roofs and power lines. Our storm damage team makes hanging limbs safe first. Then we plan the cleanup. For brush from routine work, the city\'s Austin Resource Recovery rules apply. Our brush pickup guide explains how to stack it and when to set it out.',
          'We are licensed and insured, and a Board Certified Master Arborist leads our work. Estimates are free all over Clarksville and Old West Austin.',
        ],
      },
    ],
  },
  {
    slug: 'pemberton-heights',
    name: 'Pemberton Heights',
    region: 'central',
    title: 'Tree Care in Pemberton Heights, Austin TX',
    metaDescription:
      'Tree care in Pemberton Heights, one of the most shaded neighborhoods in central Austin. Big live oaks and heritage trees. Call (512) 749-8615.',
    heroSubtitle:
      'Tree care for Pemberton Heights: grand live oaks, large lots, and many trees covered by Austin\'s tree rules.',
    placeUrl: 'https://www.google.com/maps/place/Pemberton+Heights,+Austin,+TX',
    zipCodes: ['78703'],
    relatedServices: ['tree-trimming', 'tree-risk-assessment', 'tree-removal', 'organic-fertilizing'],
    relatedGuides: ['oak-wilt-austin', 'austin-protected-heritage-trees', 'austin-bulk-brush-pickup'],
    sections: [
      {
        heading: 'Tree care on Pemberton Heights estates',
        paragraphs: [
          'Pemberton Heights is one of the most shaded neighborhoods in central Austin. Its large lots sit under live oaks and pecans. Many are big enough to count as protected or heritage trees under Austin city rules. People here take care of their trees because the trees add value, privacy, and the look the neighborhood is known for.',
          'Blue Ox Tree Care trims trees, checks them for risk, runs organic health programs, and helps with removal permits all over Pemberton Heights. Travis Berlin (ISA BCMA, RM-7612B) and Lacy Berlin (RM-8632A) work with you in person, not through a sales team. Call (512) 749-8615 for a free estimate at your home.',
        ],
      },
      {
        heading: 'Protected and heritage tree rules',
        paragraphs: [
          'Austin protects trees above a certain trunk size. Because of that, many Pemberton Heights trees need a permit before they can be removed. You may also need one before you build, put in a pool, or do utility work near them. Heritage trees come with extra rules about replacing them. Homeowners who have not been through it before are often surprised.',
          'We check whether your tree will need city review. We talk about ways to keep the tree when we can. We also give you records that support your permit application. Our protected and heritage tree guide covers the basics. A visit to your home shows how the rules apply to your trees.',
        ],
        list: [
          'Checking heritage and protected trees before a remodel',
          'Pruning that keeps high-value trees strong for years',
          'Tree risk checks with written reports for insurance or a home sale',
          'Organic pest and disease treatment for older trees under stress',
        ],
      },
      {
        heading: 'Live oak health and oak wilt',
        paragraphs: [
          'In Pemberton Heights, live oak roots grow together across property lines. If oak wilt (a disease that kills oaks) reaches the neighborhood, it can spread easily. So keep watch. Call an arborist if you see leaves with brown veins, a crown that thins fast, or a neighbor losing an oak to oak wilt.',
          'We time our pruning to follow Central Texas oak wilt guidance. For at-risk oaks, work that can wait is safest from mid-July through January. Our oak wilt guide explains why. We use that knowledge on every Pemberton Heights property we care for.',
        ],
      },
      {
        heading: 'Storm help and brush plans',
        paragraphs: [
          'Big limbs over Pemberton Heights driveways and roofs can do serious damage in a storm. After bad weather, our storm damage team makes limbs over buildings safe first. For routine pruning, we can haul brush away or stack it for the city\'s Austin Resource Recovery pickup. We will talk about your choices during your estimate.',
        ],
      },
    ],
  },
  {
    slug: 'bryker-woods',
    name: 'Bryker Woods',
    region: 'central',
    title: 'Tree Care in Bryker Woods, Austin TX',
    metaDescription:
      'Tree trimming and tree health care in Bryker Woods, Austin from ISA certified arborists. Big central Austin trees on family lots. Call (512) 749-8615.',
    heroSubtitle:
      'Central Austin tree care for Bryker Woods: bungalow lots under big live oaks and pecans, between MoPac and downtown.',
    placeUrl: 'https://www.google.com/maps/place/Bryker+Woods,+Austin,+TX',
    zipCodes: ['78703', '78756'],
    relatedServices: ['tree-trimming', 'pest-disease', 'tree-risk-assessment', 'organic-fertilizing'],
    relatedGuides: ['oak-wilt-austin', 'austin-protected-heritage-trees', 'austin-bulk-brush-pickup'],
    sections: [
      {
        heading: 'Big trees on Bryker Woods lots',
        paragraphs: [
          'Bryker Woods is close to the center of Austin and easy to walk. Its family-sized lots still have lots of trees. Live oaks arch over bungalow roofs. Pecans shade front yards. Here and there, a tree big enough to be protected has made it through every remodel on the block. Trees are part of daily life here. They shade kids at play, soften the noise from MoPac, and cool homes in the Austin summer.',
          'Blue Ox Tree Care trims trees, finds out why they are sick, and checks them for risk all over Bryker Woods. We base our work on science. We serve central and west Austin, and we have no storefront. Call (512) 749-8615 and our certified arborists will come to you.',
        ],
      },
      {
        heading: 'Pruning for shape and clearance',
        paragraphs: [
          'Trees in Bryker Woods often need to be cut back from roofs, second-story additions, and shared fences. But clearing branches should never turn into topping or over-thinning. Both make a tree weak. Topping means cutting big branches back to stubs. We follow ANSI A300, the national standard for pruning. We protect the branch collar, the swollen ring where a branch meets the trunk. We keep the natural shape of each kind of tree.',
          'Young and middle-aged trees do best with early pruning that sets a strong shape before weak spots get worse. Older trees that past crews topped may need crown reduction instead of more topping. Crown reduction means shortening a branch back to a smaller side branch. We look at what earlier work did and plan care to fix it.',
        ],
        list: [
          'Clearing roofs and gutters without lion-tailing (stripping inner branches and leaving tufts at the ends)',
          'Removing dead wood and cleaning out the crown on older trees',
          'Organic treatment for boring insects, fungus problems, and drought stress',
          'Help with protected tree rules when a trunk is big enough',
        ],
      },
      {
        heading: 'Oak wilt and timing',
        paragraphs: [
          'Central Austin live oaks are at risk from oak wilt, a disease that kills oaks. On Bryker Woods blocks, live oaks grow side by side, and their roots can join. So one sick tree can put the neighbors\' trees at risk. We plan pruning to avoid cutting oaks in the months when oak wilt spreads most. When work can\'t wait, we paint fresh cuts.',
          'See our oak wilt guide to learn more about when to prune in Central Texas.',
        ],
      },
      {
        heading: 'Remodel stress and storm cleanup',
        paragraphs: [
          'Remodels in Bryker Woods crowd tree roots and change how water drains. Trees that did fine before can start to die once building is done. We check how the building has affected a tree. Then we suggest keeping it or taking it down based on what we find. After storms, our storm damage team comes out fast for hanging limbs over Bryker Woods homes.',
        ],
      },
    ],
  },
  {
    slug: 'rosedale',
    name: 'Rosedale',
    region: 'central',
    title: 'Tree Care in Rosedale, Austin TX',
    metaDescription:
      'Tree trimming, tree removal, and oak wilt care in Rosedale, Austin. ISA certified arborists for central Austin live oaks and pecans. Call (512) 749-8615.',
    heroSubtitle:
      'Tree care for Rosedale in central Austin, with old pecans, live oaks, and lots of remodeling under big trees.',
    placeUrl: 'https://www.google.com/maps/place/Rosedale,+Austin,+TX',
    zipCodes: ['78756'],
    relatedServices: ['tree-trimming', 'tree-removal', 'tree-risk-assessment', 'stump-grinding'],
    relatedGuides: ['oak-wilt-austin', 'austin-protected-heritage-trees', 'austin-bulk-brush-pickup'],
    sections: [
      {
        heading: 'Rosedale\'s mix of trees',
        paragraphs: [
          'Rosedale sits between central Austin and the neighborhoods near UT. Its trees tell its history. Huge pecans date back to early plantings. Live oaks grew up as homes filled in. Younger trees now stand where older ones failed or were taken down. Lot sizes vary, but Rosedale still has far more trees than newer Austin neighborhoods.',
          'Blue Ox Tree Care helps Rosedale homeowners who need an expert check before a remodel, storm cleanup, or routine care. ISA certified arborists Travis and Lacy Berlin give free estimates at your home. Call (512) 749-8615.',
        ],
      },
      {
        heading: 'Pecans and live oaks need different care',
        paragraphs: [
          'Pecans and live oaks fill most of Rosedale, but they need different care. Pecans drop heavy limbs in storms. They need attention when two trunks of about the same size grow side by side. Live oaks need pruning timed to avoid oak wilt, a disease that kills oaks. Their roots also need protection during building. Treating every tree the same leads to bad results.',
          'We find out what kind of tree you have and how strong it is. Then we plan work for each tree on its own.',
        ],
        list: [
          'Pruning plans made for pecans and for live oaks',
          'Stump grinding and replanting advice after a tree must come down',
          'Risk checks before a second-story addition or a pool',
          'Storm damage help for limbs over Rosedale roofs',
        ],
      },
      {
        heading: 'Protected trees and remodel permits',
        paragraphs: [
          'Remodeling in Rosedale keeps going, and protected tree permits come up more often than people expect. The size rules apply to trees on your own land, too. Our heritage tree guide walks through Austin\'s rules. We help you learn what permits you need before work starts.',
        ],
      },
      {
        heading: 'Brush and routine care',
        paragraphs: [
          'In Rosedale, the city\'s Austin Resource Recovery service picks up brush and bulk trash. After we prune or remove a tree, our brush pickup guide helps you plan curbside cleanup. If you want us to haul brush away, ask about it during your free estimate.',
        ],
      },
    ],
  },
  {
    slug: 'hyde-park',
    name: 'Hyde Park',
    region: 'central',
    title: 'Tree Care in Hyde Park, Austin TX',
    metaDescription:
      'Heritage tree and live oak care in Hyde Park, Austin from ISA certified arborists. Big pecans and live oaks in north-central Austin. Call (512) 749-8615.',
    heroSubtitle:
      'Tree care for Hyde Park: a historic district with tall pecans and live oaks on north-central Austin\'s classic bungalow blocks.',
    placeUrl: 'https://www.google.com/maps/place/Hyde+Park,+Austin,+TX',
    zipCodes: ['78751'],
    relatedServices: ['tree-trimming', 'tree-risk-assessment', 'cabling-bracing', 'pest-disease'],
    relatedGuides: ['oak-wilt-austin', 'austin-protected-heritage-trees', 'austin-bulk-brush-pickup'],
    sections: [
      {
        heading: 'Hyde Park\'s historic trees',
        paragraphs: [
          'Hyde Park has a strong sense of place. Wide porches sit under pecans that are older than the homes. Live oaks shade Speedway and Duval. Parts of the neighborhood are a local historic district. Neighbors notice when a tree comes down, even when a permit allows it. Keeping trees is part of the culture here.',
          'Blue Ox Tree Care trims, cables, treats, and checks trees for risk all over Hyde Park. We respect your wish to keep your trees. We will also tell you honestly when a tree is too likely to fail. We have no storefront. Call (512) 749-8615.',
        ],
      },
      {
        heading: 'Large pecans and risk',
        paragraphs: [
          'Hyde Park pecans grow very big, and big trees bring risk. Heavy side limbs reach over streets and homes. A trunk can be hollow inside, and you can\'t see that from the curb. Some trees have included bark, which is bark trapped in the joint between two trunks. Those joints can break in high winds. Regular checks find problems while cables or careful pruning can still help.',
          'Hyde Park also has live oaks mixed in. They need pruning timed to avoid oak wilt, a disease that kills oaks. If oak wilt shows up nearby, we check whether your tree\'s roots link to your neighbors\' trees.',
        ],
        list: [
          'Detailed risk checks for very large old pecans',
          'Cables and braces when it is safe to keep the tree',
          'Organic treatment for trees that are sick but can be saved',
          'Help with heritage and protected tree permits',
        ],
      },
      {
        heading: 'Austin tree rules',
        paragraphs: [
          'Many Hyde Park trees are big enough to be protected. Some are heritage trees, which come with extra rules about replacing them. Our protected and heritage tree guide explains the process. We check your trees at home, so you can make good choices before you lock in a remodel schedule.',
        ],
      },
      {
        heading: 'Storm season and brush cleanup',
        paragraphs: [
          'Hyde Park gets a lot of storm debris, both from falling pecan limbs and from broken oak branches. Our storm damage team handles the dangers first. Brush from routine work follows the city\'s Austin Resource Recovery rules, which our brush pickup guide covers.',
        ],
      },
    ],
  },
  {
    slug: 'allandale',
    name: 'Allandale',
    region: 'central',
    title: 'Tree Care in Allandale, Austin TX',
    metaDescription:
      'Tree trimming and live oak care in Allandale, Austin from ISA certified arborists. Street trees and big backyard shade trees. Call (512) 749-8615.',
    heroSubtitle:
      'North-central Austin tree care for Allandale: post-war lots with rows of live oak street trees and deep backyard shade.',
    placeUrl: 'https://www.google.com/maps/place/Allandale,+Austin,+TX',
    zipCodes: ['78757', '78756'],
    relatedServices: ['tree-trimming', 'storm-damage', 'organic-fertilizing', 'tree-risk-assessment'],
    relatedGuides: ['oak-wilt-austin', 'austin-bulk-brush-pickup', 'austin-protected-heritage-trees'],
    sections: [
      {
        heading: 'Allandale\'s live oaks',
        paragraphs: [
          'Allandale was built after World War II. Its lots were big enough for live oaks to become the main feature of the neighborhood. Street trees grew up next to backyard trees. Now many homes sit under unbroken shade. That shade keeps homes cooler in summer. It also takes more skill to care for than the few trees in a new neighborhood.',
          'Blue Ox Tree Care trims, feeds, and checks trees all over Allandale and nearby Crestview and Brentwood. We help after storms, too. An ISA certified arborist comes to every visit. Call (512) 749-8615.',
        ],
      },
      {
        heading: 'Care cycles for big shade trees',
        paragraphs: [
          'Allandale live oaks do well with regular crown cleaning, clearance from homes, and fixes for weak spots before they turn into emergencies. This is usually done every few years, not every year. Thinning live oaks too much to let in light can backfire. Lion-tailing strips out the inner branches and leaves tufts at the ends. It makes the tree push out weak new sprouts.',
          'Organic fertilizing helps trees in packed-down soil. Years of foot traffic, wider driveways, and utility digging have stressed many root systems here.',
        ],
        list: [
          'Crown cleaning and careful thinning at the right time of year',
          'Clearance pruning for the two-story additions common in Allandale remodels',
          'Storm damage help after Central Texas wind storms',
          'Oak wilt timing advice for blocks where live oaks grow side by side',
        ],
      },
      {
        heading: 'Protected trees on remodeled lots',
        paragraphs: [
          'Many Allandale homes are being remodeled. Protected tree permits come up often, especially when a home grows toward big trees at the back of the lot. We check how your plans will affect the tree before you finalize them. We also explain Austin\'s rules, which our heritage tree guide covers.',
        ],
      },
      {
        heading: 'Brush pickup after tree work',
        paragraphs: [
          'Allandale homeowners use the city\'s Austin Resource Recovery service for brush pickup after tree care. Our brush pickup guide explains the size limits and schedules. For bigger jobs, when stacking brush at the curb won\'t work, we can haul it away.',
        ],
      },
    ],
  },
  {
    slug: 'northwest-hills',
    name: 'Northwest Hills',
    region: 'west',
    title: 'Tree Care in Northwest Hills, Austin TX',
    metaDescription:
      'Tree care in Northwest Hills, Austin: hilly lots, live oaks, and ISA certified arborists. Pruning with fire and storm safety in mind. Call (512) 749-8615.',
    heroSubtitle:
      'West Austin tree care for Northwest Hills, with Balcones hills, great views, and live oaks on sloped lots.',
    placeUrl: 'https://www.google.com/maps/place/Northwest+Hills,+Austin,+TX',
    zipCodes: ['78731', '78759'],
    relatedServices: ['tree-trimming', 'tree-risk-assessment', 'fire-mitigation', 'tree-removal'],
    relatedGuides: ['oak-wilt-austin', 'austin-protected-heritage-trees', 'austin-bulk-brush-pickup'],
    sections: [
      {
        heading: 'Tree work on Northwest Hills land',
        paragraphs: [
          'Northwest Hills has the slopes, rock ledges, and narrow driveways of west Austin. It also has live oaks and cedar elms. Homeowners want to keep their views, and they need to think about wildfire. Tree work here takes more planning for gear and trucks than jobs on flat central Austin lots.',
          'Blue Ox Tree Care serves Northwest Hills, from the Far West Boulevard area to the edge of Great Hills. Travis Berlin is a Board Certified Master Arborist. He also worked near wildfire areas in Colorado. That shapes how we work on slopes and how we plan defensible space, a safer zone around your home with less fuel to burn. Call (512) 749-8615 and we will come to you.',
        ],
      },
      {
        heading: 'Views, clearance, and careful reduction',
        paragraphs: [
          'Many Northwest Hills homeowners ask us to open up a view. That is a fair goal when it is done the right way. We make the crown smaller with careful cuts and thin the inside of the tree. We don\'t top trees. Topping means cutting big branches back to stubs. It ruins a tree\'s shape and makes it dangerous for years. Proper reduction takes off weight and keeps the tree healthy.',
          'To clear chimneys, solar panels, and second-story decks, we cut one branch at a time. We don\'t shear the whole tree.',
        ],
        list: [
          'Careful crown reduction to open up views',
          'Tree removal on slopes, with a roping plan for hard-to-reach spots',
          'Fire prep: raising limbs and removing ladder fuels (low brush and branches that let fire climb into trees)',
          'Risk checks for trees leaning over neighbors downhill',
        ],
      },
      {
        heading: 'Oak wilt and rocky soil',
        paragraphs: [
          'Live oaks on Northwest Hills slopes grow in rocky Balcones soil. Their roots may not spread as deep. That affects how stable they are during drought and after heavy rain. Oak wilt, a disease that kills oaks, is a concern across the region. We prune at-risk oaks in the safer months, as our oak wilt guide explains.',
        ],
      },
      {
        heading: 'Storms and emergency help',
        paragraphs: [
          'Hill Country wind rushes through the small valleys of Northwest Hills. It breaks limbs and can tip over trees on soaked slopes. Our storm damage team makes things safe first. For addresses in Austin, brush follows the city\'s Austin Resource Recovery rules. See our brush pickup guide.',
        ],
      },
    ],
  },
  {
    slug: 'barton-hills',
    name: 'Barton Hills',
    region: 'west',
    title: 'Tree Care in Barton Hills, Austin TX',
    metaDescription:
      'Tree care in Barton Hills, Austin from ISA certified arborists. Live oaks near the greenbelt and Barton Creek. Call (512) 749-8615.',
    heroSubtitle:
      'Tree care for Barton Hills, where yards meet the Barton Creek greenbelt and its native oak and juniper woods.',
    placeUrl: 'https://www.google.com/maps/place/Barton+Hills,+Austin,+TX',
    zipCodes: ['78704'],
    relatedServices: ['tree-trimming', 'tree-risk-assessment', 'fire-mitigation', 'pest-disease'],
    relatedGuides: ['oak-wilt-austin', 'austin-protected-heritage-trees', 'austin-bulk-brush-pickup'],
    sections: [
      {
        heading: 'Tree care at the edge of the greenbelt',
        paragraphs: [
          'Barton Hills is where south-central Austin meets the Barton Creek greenbelt. In a short walk, yards turn into native slopes of oak and juniper. That edge brings its own needs. You want to keep your shade and privacy. You also need to think about slope stability, the greenbelt next door, and ladder fuels on hillside lots. Ladder fuels are low brush and branches that let fire climb into trees.',
          'Blue Ox Tree Care trims, treats, and checks trees for risk all over Barton Hills. We do fire prep work too. Our ISA certified arborists look at the mix of planted and native trees in each yard. Call (512) 749-8615.',
        ],
      },
      {
        heading: 'Native woods and home yards',
        paragraphs: [
          'Many Barton Hills lots mix live oaks planted years ago with Ashe juniper and cedar elm that spread in from the greenbelt. Thinning juniper near your home helps make defensible space, a safer zone with less fuel to burn. You don\'t have to clear-cut the hill to do it. Live oaks near the creek need care that watches for oak wilt, a disease that kills oaks. Their roots may link to many other oaks along the creek.',
          'Steep back slopes make it hard to bring in big machines. We plan hand work and roping during the estimate, so we never count on a bucket truck being able to reach.',
        ],
        list: [
          'Raising limbs and clearing ladder fuels near the greenbelt',
          'Live oak pruning timed to avoid oak wilt',
          'Organic treatment for trees weak from drought or boring insects',
          'Thinking about slope stability before we remove big trees on a hill',
        ],
      },
      {
        heading: 'Protected trees near Barton Creek',
        paragraphs: [
          'Remodels and pool projects in Barton Hills often run into trees big enough to be protected. Austin\'s heritage and protected tree rules apply. Our guide explains the size limits and how permits work. Homes along the creek may need extra care for roots and erosion. We keep that in mind when we advise you on keeping a tree.',
        ],
      },
      {
        heading: 'Storm debris on hillside lots',
        paragraphs: [
          'In Barton Hills storms, limbs can tumble downhill onto a neighbor\'s roof. That can lead to damage claims between neighbors, so fast help matters. Our storm damage team handles safety first. Brush from routine work follows the city\'s Austin Resource Recovery rules, which our brush pickup guide explains.',
        ],
      },
    ],
  },
  {
    slug: 'zilker',
    name: 'Zilker',
    region: 'west',
    title: 'Tree Care in Zilker, Austin TX',
    metaDescription:
      'Tree care in Zilker, Austin from ISA certified arborists. Live oaks near Barton Springs, protected trees, and pruning around remodels. Call (512) 749-8615.',
    heroSubtitle:
      'Tree care near Barton Springs, for Zilker\'s valuable lots with big live oaks and lots of remodeling.',
    placeUrl: 'https://www.google.com/maps/place/Zilker,+Austin,+TX',
    zipCodes: ['78704'],
    relatedServices: ['tree-trimming', 'tree-risk-assessment', 'tree-removal', 'cabling-bracing'],
    relatedGuides: ['austin-protected-heritage-trees', 'oak-wilt-austin', 'austin-bulk-brush-pickup'],
    sections: [
      {
        heading: 'Zilker\'s valuable trees',
        paragraphs: [
          'Zilker is one of Austin\'s best-known neighborhoods for trees. You can walk to Barton Springs. Live oaks and pecans shade the bungalow streets and the newer homes alike. Good trees help home values here, and bad tree work costs you. Topping a Zilker live oak, which means cutting big branches back to stubs, hurts both the tree and your home\'s value.',
          'Blue Ox Tree Care serves Zilker homeowners. We offer ISA certified tree checks, pruning, and cables. When a tree can\'t be kept, we help with the permit and remove it. We have no storefront. Call (512) 749-8615.',
        ],
      },
      {
        heading: 'Remodels, ADUs, and root stress',
        paragraphs: [
          'There is a lot of building in Zilker. Trees lose root space to additions, pools, and ADUs (backyard cottages). Decline often shows up two to five years after the build, after the owner thinks the tree "made it." A check while you are still planning can keep you from losing a tree you worked hard to save.',
          'Zilker projects often need protected tree permits. We measure the trunk, talk about ways to lessen harm, and work within Austin\'s rules, which our heritage tree guide explains.',
        ],
        list: [
          'Checking before a remodel whether a tree can be kept',
          'Pruning and cables for valuable trees you keep',
          'Removal and stump grinding when the risk or your design calls for it',
          'Oak wilt timing for live oak pruning that can wait',
        ],
      },
      {
        heading: 'Kinds of trees and the right methods',
        paragraphs: [
          'Zilker has pecans, live oaks, and some red oaks. Each kind breaks in storms in its own way and gets different diseases. Red oaks here need extra watching for oak wilt, a disease that kills oaks, because beetles can carry it from them to other trees. We find out what kind of tree you have before we suggest any work. We never use one plan for every tree on the lot.',
        ],
      },
      {
        heading: 'Park crowds and routine care',
        paragraphs: [
          'Homes near the park see heavy foot traffic. That packs down the soil over tree roots. Organic health programs and advice on mulch help trees in these busy spots. Storm and routine brush follows the city\'s Austin Resource Recovery rules. Our brush pickup guide covers cleanup after the work.',
        ],
      },
    ],
  },
  {
    slug: 'lost-creek',
    name: 'Lost Creek',
    region: 'west',
    title: 'Tree Care in Lost Creek, Austin TX',
    metaDescription:
      'Tree trimming, wildfire prep, and tree removal in Lost Creek on wooded west Austin lots. ISA certified arborists. Call (512) 749-8615.',
    heroSubtitle:
      'West Austin tree care for Lost Creek: wooded lots, live oak woods, and Hill Country land near Bee Cave.',
    placeUrl: 'https://www.google.com/maps/place/Lost+Creek,+Austin,+TX',
    zipCodes: ['78746', '78738'],
    relatedServices: ['fire-mitigation', 'tree-trimming', 'tree-removal', 'tree-risk-assessment'],
    relatedGuides: ['oak-wilt-austin', 'austin-protected-heritage-trees', 'austin-bulk-brush-pickup'],
    sections: [
      {
        heading: 'Wooded lots in Lost Creek',
        paragraphs: [
          'Lost Creek is a pocket of west Austin with wooded lots, curving streets, and Hill Country land. Homes keep native live oak and juniper woods next to older planted trees. These layers of trees need careful, tree-by-tree care instead of clearing.',
          'Blue Ox Tree Care serves Lost Creek. We trim trees, do fire prep, remove trees, and check trees for risk on wooded lots. Call (512) 749-8615 and our certified arborists will come to you.',
        ],
      },
      {
        heading: 'Wildfire on wooded west Austin lots',
        paragraphs: [
          'Lost Creek\'s thick trees give shade and privacy. But juniper brush can link up with oak limbs that hang over roofs. That makes a path for fire. Fire prep creates defensible space, a safer zone around your home with less fuel to burn. We raise limbs, clear dead wood, and leave space between tree crowns. We don\'t strip the land bare.',
          'Our fire prep service follows methods proven in places where wildfires happen. We adapt them to Lost Creek\'s mix of native and planted trees.',
        ],
        list: [
          'Defensible space checks with written advice',
          'Thinning juniper near your home and driveway',
          'Live oak pruning along wooded entry drives',
          'Removal plans for dead or risky trees on slopes',
        ],
      },
      {
        heading: 'Oak wilt in west Austin woods',
        paragraphs: [
          'Lost Creek live oaks grow in groups, and their roots can join. Oak wilt, a disease that kills oaks, can spread through those linked roots. We keep track of oak wilt in the area. We plan pruning to avoid cutting oaks in the months when it spreads most, as our oak wilt guide explains.',
        ],
      },
      {
        heading: 'Access, storms, and brush',
        paragraphs: [
          'Lost Creek\'s winding streets and sloped driveways make it harder to set up gear for big removals. We plan how to get in during the estimate. After storms, hanging limbs over Lost Creek roofs go to the top of our list.',
        ],
      },
    ],
  },
  {
    slug: 'barton-creek',
    name: 'Barton Creek',
    region: 'west',
    title: 'Tree Care in Barton Creek, Austin TX',
    metaDescription:
      'Tree care in Barton Creek, Austin from ISA certified arborists. Live oaks along the golf courses and on Hill Country estates. Call (512) 749-8615.',
    heroSubtitle:
      'Southwest Austin tree care for Barton Creek: large estates, golf course oaks, and Edwards Plateau limestone.',
    placeUrl: 'https://www.google.com/maps/place/Barton+Creek,+Austin,+TX',
    zipCodes: ['78735', '78733'],
    relatedServices: ['tree-trimming', 'tree-risk-assessment', 'fire-mitigation', 'organic-fertilizing'],
    relatedGuides: ['oak-wilt-austin', 'austin-protected-heritage-trees', 'austin-bulk-brush-pickup'],
    sections: [
      {
        heading: 'Tree care on Barton Creek estates',
        paragraphs: [
          'Barton Creek has some of the largest home lots in southwest Austin. Live oaks frame the views of the fairways. Limestone ledges break up the ground where roots grow. The trees give the area its high-end look. Here, one tree choice can affect your view, the golf course next door, and your HOA\'s yard rules all at once.',
          'Blue Ox Tree Care trims trees, checks them for risk, does fire prep, and runs organic health programs all over Barton Creek and along Westbank Drive. A Board Certified Master Arborist leads our work. Call (512) 749-8615 for a free estimate.',
        ],
      },
      {
        heading: 'Limestone soil and live oak care',
        paragraphs: [
          'Barton Creek sits on the limestone of the Edwards Plateau. That rock shapes how roots grow. A tree can look healthy on top while its roots are not as deep as trees in central Austin. Stress from drought, from trenches dug for building, and from changes in watering can show up years later as a thinning crown.',
          'Organic fertilizing and targeted health care can help a sick tree before removal is the only choice. Lacy Berlin makes organic programs in house for Barton Creek homes.',
        ],
        list: [
          'Pruning that keeps views along golf courses and the greenbelt',
          'Checking large live oaks near patios and outdoor living areas',
          'Fire prep on lots that back up to wild land',
          'Risk check reports for home sales and remodels',
        ],
      },
      {
        heading: 'Protected trees and Barton Creek remodels',
        paragraphs: [
          'Large live oaks on Barton Creek estates often trigger Austin\'s protected tree review. That can happen when you add a pool, a guest house, or a patio. Our heritage tree guide explains the basics of the rules. A visit to your home makes clear what your project will need.',
        ],
      },
      {
        heading: 'Storm recovery and brush',
        paragraphs: [
          'Barton Creek storms break heavy oak limbs over pool enclosures and driveways. Our storm damage team puts the safety of your buildings first. Brush from routine care can be hauled away or set out under the city\'s Austin Resource Recovery rules. See our brush pickup guide.',
        ],
      },
    ],
  },
  {
    slug: 'west-lake-hills',
    name: 'West Lake Hills',
    region: 'west',
    title: 'Tree Care in West Lake Hills, TX',
    metaDescription:
      'Tree trimming, tree removal, and wildfire prep in West Lake Hills from ISA certified arborists who know Hill Country land. Call (512) 749-8615.',
    heroSubtitle:
      'Tree care for West Lake Hills: steep lots, native oak woods, and Hill Country wildfire risk.',
    placeUrl: 'https://www.google.com/maps/place/West+Lake+Hills,+TX',
    zipCodes: ['78746'],
    relatedServices: ['fire-mitigation', 'tree-trimming', 'tree-risk-assessment', 'tree-removal'],
    relatedGuides: ['oak-wilt-austin', 'austin-protected-heritage-trees', 'austin-bulk-brush-pickup'],
    sections: [
      {
        heading: 'Hill Country tree care in West Lake Hills',
        paragraphs: [
          'West Lake Hills has some of the most sought-after homes in Travis County. The land also makes tree work hard. Lots are steep and driveways are narrow. Native oak and juniper woods grow all around. Homeowners guard their views as closely as their homes. So tree care here takes planning for gear, knowledge of each kind of tree, and respect for wildfire risk. Wildfire is a big part of life in the Austin Hill Country.',
          'Blue Ox Tree Care serves West Lake Hills and nearby towns from Bee Cave to Rollingwood. Co-owner Travis Berlin worked in mountain towns in Colorado and as a city arborist in California. That background shapes how we make defensible space, how we cut back trees near homes, and how we prune big oaks to keep them safe on slopes.',
          'We have no street address or showroom. Our arborists come to your West Lake Hills home to check your trees and do the work. Call (512) 749-8615 for a free estimate.',
        ],
      },
      {
        heading: 'Fire prep and defensible space',
        paragraphs: [
          'Wildfire is a real risk in West Lake Hills. Juniper, thick brush, and branches over roofs and decks all affect how a fire behaves. Homeowners and insurance companies look at this more and more. Fire prep is also called defensible space work. It breaks up the path that fuel makes from the ground into the treetops. We do it while keeping your trees healthy and keeping the beauty that draws people here.',
          'Our fire prep follows methods proven where wildfires happen. We thin with care, raise limbs away from your home, clear dead wood, and leave space between tree crowns where it makes sense. We cut what protects your home and leave the rest. That keeps the Hill Country look West Lake Hills is known for.',
        ],
        list: [
          'Defensible space checks with written advice',
          'Raising limbs near roofs, decks, and chimneys',
          'Removing dead wood and managing juniper on wooded lots',
          'Working with your other contractors when building affects trees',
        ],
      },
      {
        heading: 'Oak wilt and native trees',
        paragraphs: [
          'Live oaks and Spanish oaks grow all over West Lake Hills. Oak wilt, a disease that kills oaks, is still active in Central Texas. It can spread through roots that join between nearby live oaks. That matters on wooded lots where trees grow in groups. If you want to protect old trees, pay attention to when you prune, how cuts are treated, and early signs of disease.',
          'Our oak wilt guide explains how oak wilt spreads and which months are riskiest. At your home, we look at the crown for signs of disease. We talk about trenching or treatment when it makes sense. We also plan pruning to avoid extra cuts in high-risk months.',
        ],
      },
      {
        heading: 'Access, removal, and storm help',
        paragraphs: [
          'Steep lots and little room to turn around make removals and big pruning jobs harder in West Lake Hills than on flat central Austin lots. Before work starts, we plan our ropes, where to put our gear, and how to move brush. That keeps your property safe and your neighbors\' driveways open the whole time.',
          'After Central Texas storms, hanging limbs and half-broken branches need fast help. Our storm damage team puts safety first. We make limbs over homes and driveways safe, then plan the full cleanup. For routine brush, our Austin brush pickup guide explains the city\'s Austin Resource Recovery rules.',
        ],
      },
    ],
  },
  {
    slug: 'rollingwood',
    name: 'Rollingwood',
    region: 'west',
    title: 'Tree Care in Rollingwood, TX',
    metaDescription:
      'ISA certified tree trimming, tree removal, and tree health care in Rollingwood, TX. We care for big live oaks. Free estimate: (512) 749-8615.',
    heroSubtitle:
      'Tree care based on science for Rollingwood\'s old live oaks and small Hill Country lots.',
    placeUrl: 'https://www.google.com/maps/place/Rollingwood,+TX',
    zipCodes: ['78746'],
    relatedServices: ['tree-trimming', 'tree-risk-assessment', 'cabling-bracing', 'organic-fertilizing'],
    relatedGuides: ['oak-wilt-austin', 'austin-protected-heritage-trees', 'austin-bulk-brush-pickup'],
    sections: [
      {
        heading: 'Tree care for Rollingwood homeowners',
        paragraphs: [
          'Rollingwood is a small city with Austin and West Lake Hills on its borders. It has some of the most tree-lined streets in the area. Big live oaks arch over the roads and shade wide front yards. Many trees were here long before the homes. Those old trees add a lot to a home, until weak spots, disease, or storm damage make them a real danger.',
          'Blue Ox Tree Care trims, removes, cables, treats, and checks trees for risk all over Rollingwood. You work with certified arborists, not a sales crew. Travis Berlin is an ISA Board Certified Master Arborist. Fewer than 2% of ISA Certified Arborists earn that title. Lacy Berlin knows tree health well, and she makes sure we answer fast when Rollingwood customers call.',
          'We have no storefront. We come to your home. Call (512) 749-8615 for a free estimate.',
        ],
      },
      {
        heading: 'Pruning big live oaks',
        paragraphs: [
          'Rollingwood live oaks often grow two trunks of about the same size (co-dominant stems). Some have included bark, which is bark trapped in the joint between trunks. Many have heavy side limbs over roofs and driveways. Good pruning helps these trees stay safe for longer. We take weight off the ends of long limbs. We help the tree grow one main trunk where we can. We also remove dead branches and branches that cross.',
          'We don\'t top trees or lion-tail them. Topping cuts big branches back to stubs. Lion-tailing strips out the inner branches. Both make trees weak and dangerous over time. Every cut follows ANSI A300, the national standard for pruning. We cut at the right spot near the branch collar, the swollen ring where a branch meets the trunk. When pruning alone can\'t fix a tree, cables and braces may hold up a valuable tree that would otherwise need to come down.',
        ],
        list: [
          'Crown cleaning, thinning, and reduction at the right time of year',
          'Checking trees with two main trunks and planning pruning to fix them',
          'Cables and braces for older trees with weak spots',
          'Organic feeding plans made for Central Texas soil',
        ],
      },
      {
        heading: 'Protected trees and neighbors',
        paragraphs: [
          'Rollingwood homes sit close together, and tree crowns often reach across property lines. If a tree sits on the line between yards, talk with your neighbor before work starts. If the tree is big enough to be protected, City of Austin tree rules may apply in some cases. Our heritage tree guide explains Austin\'s protected and heritage tree rules. We help you learn about permits before work begins.',
          'Oak wilt, a disease that kills oaks, affects whole neighborhoods. Roots can link live oaks in yards next to each other. So one yard\'s risk is also the neighbors\' risk. We look at signs of disease with the whole block in mind. Then we suggest timing and treatment that fit Rollingwood\'s linked trees.',
        ],
      },
      {
        heading: 'Tree health and ongoing care',
        paragraphs: [
          'Rollingwood trees also do well with regular health checks. Boring insects, fungus, soil packed down by building, and drought stress all show up in Central Texas yards. Lacy Berlin makes organic pest and disease treatments in house. That lets us treat the real problem without broad chemical sprays.',
          'A check every few years finds problems while you still have choices, before a sick tree turns into an emergency removal. For brush from routine care, see our Austin brush pickup guide. It covers the city\'s Austin Resource Recovery rules for Rollingwood homes that use that service.',
        ],
      },
    ],
  },
  {
    slug: 'circle-c',
    name: 'Circle C Ranch',
    region: 'southwest',
    title: 'Tree Care in Circle C Ranch, Austin TX',
    metaDescription:
      'Tree trimming, tree removal, and tree health care in Circle C Ranch, Austin. ISA certified arborists for Southwest Austin. Call (512) 749-8615.',
    heroSubtitle:
      'Tree care for Circle C Ranch, from older shade trees to newer plantings across Southwest Austin.',
    placeUrl: 'https://www.google.com/maps/place/Circle+C+Ranch,+Austin,+TX',
    zipCodes: ['78739', '78749'],
    relatedServices: ['tree-trimming', 'storm-damage', 'stump-grinding', 'organic-fertilizing'],
    relatedGuides: ['oak-wilt-austin', 'austin-protected-heritage-trees', 'austin-bulk-brush-pickup'],
    sections: [
      {
        heading: 'Tree services in Circle C Ranch',
        paragraphs: [
          'Circle C Ranch is one of the biggest planned communities in Southwest Austin. Older sections have grown-up shade trees. Newer sections have young trees. Much of the area sits on limestone soil at the edge of the Edwards Plateau. The trees here are not the same as in central Austin. There are fewer very old live oaks. But there are plenty of oaks, cedar elms, and other yard trees that need good pruning as they grow.',
          'Blue Ox Tree Care serves Circle C and the nearby Southwest Austin ZIP codes. We trim, remove trees, grind stumps, help after storms, and run organic health programs. An ISA certified arborist is always on site to check and guide the work. Call (512) 749-8615 for a free estimate. We have no storefront, so we come to you.',
        ],
      },
      {
        heading: 'Young trees and growing yards',
        paragraphs: [
          'Many Circle C trees are still decades from full size. That makes now the best time to build a strong shape. Early pruning prevents two problems that cost a lot to fix on big trees: two trunks of the same size, and weak branch joints. We help you keep your shade without letting trees outgrow their space or push on your foundation, patio, or walks.',
          'Limestone and thin soil are common in Circle C. They affect how roots grow and how much water trees get. Organic fertilizing and soil care can help trees stressed by drought or by soil packed down during building. This matters most for trees that were moved and replanted, and for trees near new pools or patios.',
        ],
        list: [
          'Pruning young trees to build a strong shape',
          'Crown reduction and clearance pruning on older trees',
          'Stump grinding after removal, with advice on fixing up the spot',
          'Storm damage help after Central Texas wind and hail',
        ],
      },
      {
        heading: 'Oak wilt in Southwest Austin',
        paragraphs: [
          'Oak wilt is a disease that kills oaks. It is found all over Travis County, and Southwest Austin is not cut off from it. Circle C has both live oaks and red oaks. Fresh pruning cuts in the months when oak wilt spreads let in beetles that carry the fungus. Our oak wilt guide covers timing. In general, the safest time to prune at-risk oaks is mid-July through January. Storm damage is the exception.',
          'Call us if a neighbor\'s oak was just removed for oak wilt. Call too if you see leaves with brown veins or a crown that thins fast. Acting early protects your other trees. We can plan the timing, dig a trench to cut root links when it makes sense, and plan treatment.',
        ],
      },
      {
        heading: 'Brush and city pickup',
        paragraphs: [
          'Tree work makes brush. Many Circle C homeowners use the city\'s Austin Resource Recovery brush and bulk pickup for cleanup. The city has rules for size and for what it will take. It helps to know them before you put brush at the curb after a job or a weekend project. Our brush pickup guide explains how it works for Austin homes.',
          'For bigger removals, we talk about brush during the estimate. We can haul it off, chip it on site, or stack it for your city pickup day. We are licensed and insured, and estimates are free all over Circle C Ranch.',
        ],
      },
    ],
  },
  {
    slug: 'steiner-ranch',
    name: 'Steiner Ranch',
    region: 'southwest',
    title: 'Tree Care in Steiner Ranch, Austin TX',
    metaDescription:
      'Tree trimming, wildfire prep, and tree removal in Steiner Ranch from ISA certified arborists. Northwest Austin Hill Country. Call (512) 749-8615.',
    heroSubtitle:
      'Hill Country tree care for Steiner Ranch: wooded lots, lake views, and tree care with wildfire in mind.',
    placeUrl: 'https://www.google.com/maps/place/Steiner+Ranch,+Austin,+TX',
    zipCodes: ['78732'],
    relatedServices: ['fire-mitigation', 'tree-trimming', 'tree-removal', 'tree-risk-assessment'],
    relatedGuides: ['oak-wilt-austin', 'austin-protected-heritage-trees', 'austin-bulk-brush-pickup'],
    sections: [
      {
        heading: 'Tree care in Steiner Ranch',
        paragraphs: [
          'Steiner Ranch spreads across the Hill Country in northwest Austin. Homes sit on wooded lots, and owners guard their lake views. Native oak and juniper woods grow next to planted trees, and each needs different care. Steep driveways, HOA rules, and wildfire risk all shape tree choices here more than in flat central Austin.',
          'Blue Ox Tree Care serves Steiner Ranch and nearby northwest Austin. Travis Berlin is a Board Certified Master Arborist who has worked where mountain wildfires happen. That shapes our fire prep and risk checks. Lacy Berlin\'s tree health skills support organic treatment for stressed trees. Call (512) 749-8615. We have no storefront, so we come to you.',
        ],
      },
      {
        heading: 'Wildfire prep on wooded lots',
        paragraphs: [
          'Many Steiner Ranch homes back up to the greenbelt or keep a lot of native plants. Fire prep breaks the chain of fuel from the ground up into the trees. We cut back ladder fuels in the juniper brush. Ladder fuels are low brush and branches that let fire climb. We create defensible space, a safer zone around your home with less fuel to burn. And we keep the wooded look of the community.',
          'We look at each home on its own. A lake-view home with a few oaks needs a different plan than a thick wooded lot that backs up to open hillside. Our fire prep includes careful thinning, raising limbs, clearing dead wood, and written advice. You can share that advice with your insurance company or HOA if they ask for it.',
        ],
        list: [
          'Defensible space plans with the right care for each kind of tree',
          'Cutting back Ashe juniper near your home',
          'Removing dead wood and fixing risky limbs',
          'Keeping your views in mind where we can',
        ],
      },
      {
        heading: 'Pruning and storm recovery',
        paragraphs: [
          'Older oaks on Steiner Ranch lots grow heavy limbs over roofs, pools, and boat storage. Good pruning takes weight off the ends and fixes weak spots before a storm turns them into an emergency. When storms hit Central Texas, half-broken limbs and split trunks need fast help. Our storm damage team makes your home safe first. Then we plan the full cleanup and any care the trees need after.',
          'Big removals on sloped Steiner Ranch lots take skill with ropes and careful setup. During the estimate, we plan how to bring in gear and move brush. That way there are no surprises on work day.',
        ],
      },
      {
        heading: 'Tree health and city rules',
        paragraphs: [
          'Oak wilt, a disease that kills oaks, is a concern all over Travis County, including northwest Austin. Live oaks in Steiner Ranch may link through their roots across property lines. Pruning cuts in the months when oak wilt spreads raise the risk. Our oak wilt guide explains the science. We use it in the field with the right timing and methods.',
          'Many Steiner Ranch homes are inside Austin city limits. They use the city\'s Austin Resource Recovery pickup for brush and bulk trash. After tree work, our brush pickup guide helps you follow the curbside rules. If your tree is big enough to be protected, Austin\'s heritage tree rules may apply. See our heritage tree guide, or ask during your free estimate.',
        ],
      },
    ],
  },
];

export const neighborhoodRegions: { id: NeighborhoodRegion; label: string }[] = [
  { id: 'central', label: 'Central Austin' },
  { id: 'west', label: 'West Austin & Hills' },
  { id: 'southwest', label: 'Southwest Austin' },
];

export function getNeighborhoodsByRegion(region: NeighborhoodRegion): Neighborhood[] {
  return neighborhoods.filter((n) => n.region === region);
}

export function getNeighborhood(slug: string): Neighborhood | undefined {
  return neighborhoods.find((n) => n.slug === slug);
}
