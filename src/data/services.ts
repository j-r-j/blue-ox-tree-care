import { seo } from './site';

export interface Service {
  slug: string;
  title: string;
  /** Page H1: shorter than document title (no credential pipe). */
  pageTitle: string;
  shortTitle: string;
  description: string;
  metaDescription: string;
  intro: string;
  body: string[];
  highlights: string[];
  localNotes?: string[];
}

export const services: Service[] = [
  {
    slug: 'tree-trimming',
    title: seo.serviceTitle('Tree Trimming & Pruning'),
    pageTitle: seo.servicePageTitle('Tree Trimming & Pruning'),
    shortTitle: 'Tree Trimming',
    intro:
      'Good trimming keeps your trees healthy and your home safe. Bad cuts can make a tree sick or weak. We trim trees the right way.',
    description:
      'Pruning for live oaks, pecans, cedar elms, and other Central Texas trees. We help each tree grow a strong shape and a healthy crown. ISA certified arborists do the work.',
    metaDescription: seo.serviceMeta('tree trimming and pruning'),
    body: [
      'Trimming keeps your tree healthy. Dead, sick, or weak branches can break. When they fall, they can hurt your family or damage your home. These branches should be cut off the right way.',
      'Good trimming also gives a tree a better shape and a stronger build. It lets the right amount of sun and air into the crown. If you have fruit trees, they stay healthier and give a steadier crop.',
      'Bad trimming is a common reason trees get sick and start to die. It can also be very dangerous. That is why your trees need to be trimmed the right way.',
      'Our team has the skill to trim your trees safely and correctly. We trim so your trees live longer and grow strong.',
    ],
    highlights: [
      'Pruning that builds a strong shape for years to come',
      'Thinning the crown and clearing branches off your roof and walls',
      'Removing dead wood and cleaning out the crown',
      'Advice on the best time of year to prune each Central Texas tree',
    ],
    localNotes: [
      'Oak wilt is a disease that kills oaks. To help stop it, we do not prune at-risk oaks from February through June, when it spreads most. We only make an exception for emergencies.',
      'In Austin, a heritage tree may need a city permit before major pruning. We help you find out if you need one.',
    ],
  },
  {
    slug: 'tree-removal',
    title: seo.serviceTitle('Tree Removal'),
    pageTitle: seo.servicePageTitle('Tree Removal'),
    shortTitle: 'Tree Removal',
    intro:
      'When a tree is dead, unsafe, or can\'t be saved, taking it down may be the safest choice. Only a licensed, insured crew should do it.',
    description:
      'We safely take down dead, risky, or unwanted trees anywhere in the Austin area. We lower each piece with ropes, even in tight yards.',
    metaDescription: seo.serviceMeta('tree removal'),
    body: [
      'We love trees. But sometimes taking a tree down is the best choice. It may be time when a big tree grows in a bad spot, or its roots crack your home\'s foundation. It may be time when a tree is too weak to fix and could fall on your house. It may also be time when a tree is dead or dying and can\'t recover.',
      'Our ISA Certified Arborists can look at the tree with you. They will help you decide if it should come down.',
      'Taking down a tree is very dangerous work. Please don\'t try it on your own. At Blue Ox Tree Care, safety comes first. Our crew is licensed and insured. We have the right gear and skill to take your tree down with care and keep your family and home safe.',
    ],
    highlights: [
      'Removing dead and dangerous trees',
      'Crane removal when needed',
      'Careful roping near homes and fences',
      'Full cleanup and haul-away',
    ],
    localNotes: [
      'In Austin, heritage trees and other protected trees may need a city permit before they come down. We can talk through your case with you.',
      'When we remove a post oak or live oak, we plan the job to disturb the soil as little as we can. This protects the plants around it.',
    ],
  },
  {
    slug: 'stump-grinding',
    title: seo.serviceTitle('Stump Grinding'),
    pageTitle: seo.servicePageTitle('Stump Grinding'),
    shortTitle: 'Stump Grinding',
    intro:
      'Stump grinding gets rid of ugly stumps you can trip on. You get your yard back for grass, plants, or a new tree.',
    description:
      'Stump grinding to win back yard space after a tree comes down. It clears the way for a new tree or new plants, and it gets rid of a trip hazard.',
    metaDescription: seo.serviceMeta('stump grinding'),
    body: [
      'Is an old stump a trip hazard in your yard? Is it an eyesore that draws bugs and pests? Our stump grinding takes care of it.',
      'You won\'t even be able to tell a stump was there. Your grass can fill in, or you can plant something new. You get a clean start for whatever you want to do with the space.',
    ],
    highlights: [
      'Grinding below ground level for a clean finish',
      'We can reach fenced yards and tight spaces',
      'We leave the wood chips to fill the hole, or haul them off',
      'Getting the spot ready for sod, plants, or a new tree',
    ],
  },
  {
    slug: 'storm-damage',
    title: seo.serviceTitle('Emergency Storm Damage Tree Service'),
    pageTitle: seo.servicePageTitle('Storm Damage Tree Service'),
    shortTitle: 'Storm Damage',
    intro:
      'After high winds, hail, or ice storms, broken branches and fallen trees need help fast. Quick work protects people, homes, and the trees that are left.',
    description:
      'Emergency storm tree service in Austin, Round Rock, Bee Cave, and Lakeway. We remove dangerous limbs and fallen trees. Then we check the trees that are left.',
    metaDescription:
      'Emergency storm damage tree service in Austin, Round Rock, Bee Cave & Lakeway. Hanging limbs, fallen trees, roof clearance. Call (512) 749-8615.',
    body: [
      'High winds and storms can bring branches down on people, homes, and pets. A torn branch is easy to miss at first. If no one deals with it soon, it can fall and hurt someone or damage your home.',
      'Torn branches that are not cut off the right way let in bugs and disease. They are also places where wood starts to rot.',
      'We are licensed and insured for dangerous jobs. We use the newest safety methods in our field.',
    ],
    highlights: [
      'Removing fallen trees and limbs',
      'Making dangerous trees safe fast',
      'Clearing trees off roofs and buildings',
      'Checking tree health after the storm',
    ],
    localNotes: [
      'Ice storms and high winds in Central Texas often damage live oaks and pecans. A quick check helps keep a hurt tree from failing later.',
    ],
  },
  {
    slug: 'tree-risk-assessment',
    title: seo.serviceTitle('Tree Risk Assessment'),
    pageTitle: seo.servicePageTitle('Tree Risk Assessment'),
    shortTitle: 'Tree Risk Assessment',
    intro:
      'Do branches hang over your roof? Does a tree lean hard toward your home or where kids play? An ISA certified risk check finds the danger. Then we tell you how to fix it before the tree fails.',
    description:
      'A tree risk check by a qualified ISA arborist. We look for weak spots, root problems, and the chance a tree could fall. Then we tell you plainly what to do.',
    metaDescription: seo.serviceMeta('tree risk assessment'),
    body: [
      'Do tree limbs hang over your roof? Does a trunk lean hard over your home, your business, or the spot where your kids play? Call us for a tree risk check.',
      'We will tell you how to lower the risk. That may mean special trimming, where we lower limbs on arborist ropes rated for thousands of pounds. Or we may suggest taking the tree down.',
      'Bringing down a risky tree takes the most skill and control. That is why we bring years of careful training, real experience, and insurance to protect you and your home.',
    ],
    highlights: [
      'Checking trees by eye and with special tools',
      'Written reports for insurance or legal needs',
      'A clear list of what to fix first',
      'Plans to check the tree again later',
    ],
    localNotes: [
      'Many older live oaks in Austin have two main trunks of about the same size (co-dominant stems). Bark can get trapped in the joint between them (included bark). Both make a split more likely.',
    ],
  },
  {
    slug: 'fire-mitigation',
    title: seo.serviceTitle('Wildfire & Fire Mitigation'),
    pageTitle: seo.servicePageTitle('Wildfire & Fire Mitigation'),
    shortTitle: 'Fire Mitigation',
    intro:
      'We help get Austin Hill Country homes ready for wildfire. We thin trees and brush to make defensible space: a safer zone around your home with less fuel to burn. We follow proven guidelines.',
    description:
      'We plan and clear defensible space on Hill Country and Austin-area lots. We remove the fuel a fire needs and keep your healthy trees.',
    metaDescription: seo.serviceMeta('wildfire mitigation and defensible space'),
    body: [
      'Every summer, smoke fills the sky from millions of acres of wildfires. Still, people keep building homes in wooded areas without getting ready for fire.',
      'At Blue Ox Tree Care, we follow guidelines that came from studying homes that survived wildfires and homes that did not. The steps are very specific. When they are done right, they protect homes.',
      'Wildfire is a common risk here. Call us to check your property. It is most important before you build, or after you move onto a wooded lot in Bee Cave, Lakeway, or the Austin Hill Country.',
    ],
    highlights: [
      'Clearing a safer zone of plants and trees around your home',
      'Removing ladder fuels: low brush and branches that let fire climb into trees',
      'Thinning tree crowns near your house',
      'Advice on which trees to keep on Hill Country lots',
    ],
  },
  {
    slug: 'pest-disease',
    title: seo.serviceTitle('Tree Pest & Disease Management'),
    pageTitle: seo.servicePageTitle('Tree Pest & Disease Management'),
    shortTitle: 'Pest & Disease',
    intro:
      'We make our own organic treatments for tree pests and disease. They help trees heal and feed the life in the soil, with no petroleum-based chemicals. This is one of our main specialties.',
    description:
      'We find out what is making your tree sick and plan the treatment. We treat Central Texas problems like oak wilt, hypoxylon canker, and insects that bore into trees.',
    metaDescription: seo.serviceMeta('organic tree pest and disease treatment'),
    body: [
      'We treat the pests and diseases that attack your trees. At the same time, we rebuild the living soil around the roots. We do this with a soil treatment we make in house. It adds helpful microbes to the soil, which we call soil inoculation. It works through the whole tree, from the roots up, against pests, fungi, and bacteria. We brew and mix each batch for what your tree needs.',
      'Every tree is different. Results depend on the kind of tree, the timing, and how sick it already is. We tell you what to expect up front. Our organic program has helped many Central Texas trees grow strong again where other methods did not work. Organic tree care is a main part of what we do.',
      'We pair this soil treatment with our organic spray. The spray works on pests, bacteria, and fungi on the outside of the tree.',
      'We only use organic methods. We never use petroleum-based salts that can harm trees and soil. Our tree care fits a non-toxic plan for your family, your pets, and your yard.',
    ],
    highlights: [
      'We check your tree on site and send samples to a lab when needed',
      'Oak wilt checks and help setting up trenching',
      'Organic treatments we make in house',
      'Treatment plans with follow-up checks',
    ],
    localNotes: [
      'Oak wilt is a serious threat to live oaks and red oaks in Travis County. Finding it early helps. So does trenching, which means digging a deep trench to cut the root links between trees. Both can protect trees that are not sick yet.',
      'Hypoxylon canker is a fungus that often attacks post oaks stressed by drought. Keeping your tree strong is the best way to prevent it.',
    ],
  },
  {
    slug: 'organic-fertilizing',
    title: seo.serviceTitle('Organic Tree Fertilizing'),
    pageTitle: seo.servicePageTitle('Organic Tree Fertilizing'),
    shortTitle: 'Organic Fertilizing',
    intro:
      'Bring dull or yellow trees back to green with organic fertilizer made for arborists. Trees can use it right away. It has no petroleum salts, and it won\'t wash off and pollute the water.',
    description:
      'Organic feeding plans made for Central Texas soils. They help roots grow, help trees handle drought, and keep trees healthy for years.',
    metaDescription: seo.serviceMeta('organic tree fertilizing'),
    body: [
      'Do your trees look dull or yellow? We can help them turn a healthy green again. We use a special fertilizer made only for arborists to use.',
      'Most store fertilizers are made from petroleum. Ours is not. Your trees can take it in and use it right away. It has none of the harsh salts that ruin the soil your tree needs. It also won\'t wash off and pollute the water.',
      'We know the best season and the best time of day to feed your trees. That helps you get the most out of it on Central Texas land.',
    ],
    highlights: [
      'Soil tests and advice on what your soil needs',
      'Organic, slow-release fertilizer',
      'Loosening the soil around roots when it helps',
      'Year-round plans for stressed or older trees',
    ],
    localNotes: [
      'Central Texas soil is often clay, and it is often alkaline (the opposite of acidic). Adding organic matter often helps roots grow better.',
    ],
  },
  {
    slug: 'cabling-bracing',
    title: seo.serviceTitle('Tree Cabling & Bracing'),
    pageTitle: seo.servicePageTitle('Tree Cabling & Bracing'),
    shortTitle: 'Cabling & Bracing',
    intro:
      'A tree with two main trunks and trapped bark can split apart with no warning. A Board Certified Master Arborist can check your tree. Cables rated for 8,000 pounds can lower that risk.',
    description:
      'Cables and braces that hold up trees with two or more main trunks, weak joints, or heavy limbs. They help keep big shade trees safe for longer.',
    metaDescription: seo.serviceMeta('tree cabling and bracing'),
    body: [
      'A tree with two or more trunks can split apart. That puts people and property at serious risk.',
      'When a tree has two or more trunks of about the same size, it is called co-dominant. Most of these trees have a weak spot called included bark. That is bark trapped in the joint between the trunks, so the wood can\'t grow together. It is a big risk, and an untrained eye often misses it.',
      'If you own a home or business, the safest step is to have an ISA Certified Arborist check any co-dominant trees.',
      'Our ISA Board Certified Master Arborist can check your trees during a free estimate. He may suggest modern tree cables to keep your tree from splitting. Our cables are rated for 8,000 pounds. They can handle very old, large trees.',
    ],
    highlights: [
      'Dynamic (flexible) and static (fixed) cable systems',
      'Braces for split or weak joints',
      'Yearly checks and adjustments',
      'Saving heritage trees and older trees',
    ],
    localNotes: [
      'Big live oaks with more than one trunk are common in older Austin neighborhoods. Cables can lower the risk of a split and let you keep the tree.',
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
