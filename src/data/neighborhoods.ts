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
    title: 'Tree Care in Tarrytown, Austin TX',
    metaDescription:
      'ISA certified tree care in Tarrytown, Austin — live oak pruning, heritage tree permits, oak wilt protocols. Blue Ox Tree Care. Call (512) 749-8615.',
    heroSubtitle:
      'Professional arboriculture for Tarrytown\'s mature live oaks, heritage trees, and established Central Austin landscapes.',
    placeUrl: 'https://www.google.com/maps/place/Tarrytown,+Austin,+TX',
    zipCodes: ['78703'],
    relatedServices: ['tree-trimming', 'tree-risk-assessment', 'pest-disease', 'tree-removal'],
    relatedGuides: ['oak-wilt-austin', 'austin-protected-heritage-trees', 'austin-bulk-brush-pickup'],
    sections: [
      {
        heading: 'Tree care tailored to Tarrytown properties',
        paragraphs: [
          'Tarrytown sits among Austin\'s most tree-rich neighborhoods — winding streets shaded by decades-old live oaks, pecans, and the occasional heritage-class tree that predates much of the surrounding development. Properties here often combine tight lot lines, mature canopy, and proximity to Lady Bird Lake, which means tree decisions carry real weight for shade, property value, and neighbor relations.',
          'Blue Ox Tree Care provides full-service arboriculture throughout Tarrytown and adjacent Clarksville. As a service-area business, we come to your property — there is no storefront to visit. You work directly with ISA certified arborists Travis Berlin (BCMA, RM-7612B) and Lacy Berlin (RM-8632A) from the first phone call through completion.',
          'Whether you need structural pruning on a live oak overhanging a driveway, a risk assessment before storm season, or guidance on City of Austin protected tree rules, our team understands the species, soil, and regulatory context specific to Central Austin.',
        ],
      },
      {
        heading: 'Live oaks, oak wilt, and pruning timing',
        paragraphs: [
          'Live oaks dominate Tarrytown\'s canopy, and they deserve species-appropriate care. Central Texas oak wilt remains a serious concern — the disease spreads through connected root systems and via beetles attracted to fresh wounds on susceptible oaks. That makes pruning timing as important as pruning technique in neighborhoods like Tarrytown where live oaks often grow close together.',
          'General educational guidance for Austin recommends avoiding unnecessary wounding of susceptible oaks during the active transmission season, often described as February through June. When work is necessary during higher-risk windows — storm damage, hazardous hangers over structures — proper technique and wound treatment matter. Our oak wilt guide explains the science; we apply that knowledge on every Tarrytown property we assess.',
        ],
        list: [
          'Structural pruning that preserves branch collar integrity and long-term health',
          'Oak wilt risk assessment when neighbors have reported symptoms or removals',
          'Organic pest and disease treatments formulated in-house by our certified arborists',
          'Heritage and protected tree permit guidance when removal or significant work is proposed',
        ],
      },
      {
        heading: 'Heritage trees and City of Austin regulations',
        paragraphs: [
          'Many Tarrytown properties include trees that fall under City of Austin protected or heritage tree ordinances. Diameter thresholds, mitigation requirements, and permit timelines can surprise homeowners who assume a backyard tree is entirely their decision. Before significant trimming, removal, or construction impact, it pays to understand what the city requires.',
          'Our guide to Austin protected and heritage tree rules walks through the basics. On site, we can evaluate whether your tree may trigger permit requirements and discuss options that balance safety, tree health, and compliance. We do not replace the city\'s permit process — we help you navigate it with accurate arboricultural documentation.',
        ],
      },
      {
        heading: 'Debris, brush pickup, and routine maintenance',
        paragraphs: [
          'Routine tree work in Tarrytown generates limbs, chips, and occasionally larger wood. Austin Resource Recovery (ARR) bulk and brush collection rules apply to much of the debris homeowners leave at the curb — size limits, bundling requirements, and collection schedules vary by service day. Our brush pickup guide explains how tree debris fits into ARR\'s system so you can plan cleanup alongside professional pruning or removal.',
          'Call (512) 749-8615 for a free estimate anywhere in Tarrytown. We serve the Austin metro from our service-area model — licensed, insured, and led by a Board Certified Master Arborist.',
        ],
      },
    ],
  },
  {
    slug: 'west-lake-hills',
    name: 'West Lake Hills',
    title: 'Tree Care in West Lake Hills, TX',
    metaDescription:
      'Tree trimming, removal, and fire mitigation in West Lake Hills by ISA certified arborists. Hill Country terrain expertise. Call (512) 749-8615.',
    heroSubtitle:
      'Arboriculture for West Lake Hills — steep lots, native oak woodlands, and Hill Country wildfire considerations.',
    placeUrl: 'https://www.google.com/maps/place/West+Lake+Hills,+TX',
    zipCodes: ['78746'],
    relatedServices: ['fire-mitigation', 'tree-trimming', 'tree-risk-assessment', 'tree-removal'],
    relatedGuides: ['oak-wilt-austin', 'austin-protected-heritage-trees', 'austin-bulk-brush-pickup'],
    sections: [
      {
        heading: 'Hill Country tree care in West Lake Hills',
        paragraphs: [
          'West Lake Hills combines some of Travis County\'s most desirable residential properties with terrain that makes tree work genuinely challenging — steep grades, narrow access drives, native oak and juniper woodlands, and views that homeowners protect as carefully as their structures. Tree care here is not a one-size-fits-all service; it requires equipment planning, species knowledge, and respect for the wildfire context that defines much of the Austin Hill Country.',
          'Blue Ox Tree Care serves West Lake Hills and surrounding communities from Bee Cave to Rollingwood. Co-owner Travis Berlin brings experience from mountain communities in Colorado and municipal-scale arboriculture in California; that background informs how we approach defensible space, canopy reduction near structures, and the structural pruning that keeps mature oaks safe on sloped lots.',
          'We are a service-area business — no street address, no showroom. Our arborists come to your West Lake Hills property for assessment and work. Call (512) 749-8615 for a free estimate.',
        ],
      },
      {
        heading: 'Fire mitigation and defensible space',
        paragraphs: [
          'Wildfire is not an abstract risk in West Lake Hills. Juniper breaks, dense understory, and overhanging branches near roofs and decks all contribute to fire behavior that homeowners and insurers increasingly scrutinize. Fire mitigation — sometimes called defensible space work — focuses on reducing continuous fuel paths from the ground into the canopy while preserving tree health and the aesthetic value that draws people to this area.',
          'Our fire mitigation service follows principles proven in wildfire-prone regions: selective thinning, limbing up away from structures, removing dead material, and creating separation between tree crowns where appropriate. We do not strip landscapes bare — we prioritize strategic reductions that protect homes while maintaining the Hill Country character West Lake Hills is known for.',
        ],
        list: [
          'Defensible space assessments with written recommendations',
          'Canopy raising and limbing near roofs, decks, and chimneys',
          'Deadwood removal and juniper management on wooded lots',
          'Coordination with other contractors when construction impacts trees',
        ],
      },
      {
        heading: 'Oak wilt and native species management',
        paragraphs: [
          'Live oaks and Spanish oaks both appear throughout West Lake Hills, and oak wilt remains active in the broader Central Texas region. Root graft transmission between neighboring live oaks is particularly relevant on wooded lots where trees grow in clusters. Pruning timing, wound treatment, and early symptom recognition all matter for property owners who want to protect long-established canopy.',
          'Our oak wilt guide explains transmission pathways and seasonal risk. On site, we evaluate crown symptoms, discuss trenching or treatment options when appropriate, and recommend pruning schedules that reduce unnecessary wounding during high-risk periods.',
        ],
      },
      {
        heading: 'Access, removal, and storm response',
        paragraphs: [
          'Steep lots and limited turnaround space make tree removal and large pruning operations more complex in West Lake Hills than on flat central Austin parcels. We plan rigging, equipment staging, and debris routing before work begins so your property and neighbors\' access are protected throughout the job.',
          'After Central Texas storms, hazardous hangers and partially failed limbs require prompt professional response. Our storm damage service prioritizes safety — securing threats over structures and driveways first, then planning full cleanup. For routine debris, our Austin brush pickup guide helps homeowners understand ARR collection rules after professional work is complete.',
        ],
      },
    ],
  },
  {
    slug: 'rollingwood',
    name: 'Rollingwood',
    title: 'Tree Care in Rollingwood, TX',
    metaDescription:
      'ISA certified tree trimming, removal, and health care in Rollingwood, TX. Mature live oak specialists. Free estimates — (512) 749-8615.',
    heroSubtitle:
      'Science-based tree care for Rollingwood\'s established live oaks and compact Hill Country edge lots.',
    placeUrl: 'https://www.google.com/maps/place/Rollingwood,+TX',
    zipCodes: ['78746'],
    relatedServices: ['tree-trimming', 'tree-risk-assessment', 'cabling-bracing', 'organic-fertilizing'],
    relatedGuides: ['oak-wilt-austin', 'austin-protected-heritage-trees', 'austin-bulk-brush-pickup'],
    sections: [
      {
        heading: 'Arboriculture for Rollingwood homeowners',
        paragraphs: [
          'Rollingwood occupies a unique position — an enclave city bordered by Austin and West Lake Hills, with some of the metro\'s most consistently tree-canopied residential streets. Mature live oaks arch over roads and shade generous front yards; many properties have trees that were here long before the current home. That maturity is an asset until structural defects, disease, or storm damage create real liability.',
          'Blue Ox Tree Care provides trimming, removal, cabling, organic health treatments, and risk assessment throughout Rollingwood. You work with certified arborists, not a sales crew — Travis Berlin holds the ISA Board Certified Master Arborist credential (fewer than 2% of ISA Certified Arborists earn BCMA), and Lacy Berlin brings deep tree health expertise plus the operational responsiveness Rollingwood customers expect.',
          'We operate as a service-area business and come to your property. Call (512) 749-8615 to schedule a free estimate.',
        ],
      },
      {
        heading: 'Structural pruning and mature live oaks',
        paragraphs: [
          'Live oaks in Rollingwood often develop co-dominant stems, included bark unions, and heavy lateral branches that extend over roofs and driveways. Correct structural pruning — reducing end weight, establishing a single leader where possible, and removing dead or crossing material — extends the safe lifespan of trees that define the neighborhood\'s character.',
          'We avoid topping and lion-tailing, both of which weaken trees and create long-term hazards. Every cut follows ANSI A300 pruning standards with attention to branch collar location. When a tree\'s structure cannot be corrected through pruning alone, cabling and bracing may stabilize high-value specimens that would otherwise require removal.',
        ],
        list: [
          'Crown cleaning, thinning, and reduction with species-appropriate timing',
          'Co-dominant stem evaluation and corrective pruning plans',
          'Cabling and bracing for selected mature trees with structural defects',
          'Organic fertilizing programs tailored to Central Texas soils',
        ],
      },
      {
        heading: 'Protected trees and neighbor considerations',
        paragraphs: [
          'Rollingwood properties sit close together, and tree canopies often span property lines. Work that affects a shared boundary tree requires clear communication with neighbors and, in some cases, compliance with City of Austin tree regulations when protected-size trees are involved. Our heritage tree guide explains Austin\'s protected and heritage tree framework; we help homeowners understand permit requirements before work begins.',
          'Oak wilt adds another neighborhood dimension — root grafts can connect live oaks on adjacent lots, meaning one property\'s infection risk affects neighbors. We assess symptoms in context and recommend timing and treatment approaches that account for Rollingwood\'s interconnected canopy.',
        ],
      },
      {
        heading: 'Health care and ongoing maintenance',
        paragraphs: [
          'Beyond structural work, Rollingwood trees benefit from proactive health monitoring — borer activity, fungal issues, soil compaction from construction, and drought stress all appear in Central Texas urban forests. Lacy Berlin formulates organic pest and disease treatments in house, allowing targeted responses without defaulting to broad-spectrum chemical programs.',
          'Regular assessment every few years catches problems while options remain — before a declining tree becomes an emergency removal. For debris from routine maintenance, see our guide to Austin bulk brush pickup for ARR collection rules that apply to Rollingwood addresses served by Austin Resource Recovery.',
        ],
      },
    ],
  },
  {
    slug: 'circle-c',
    name: 'Circle C Ranch',
    title: 'Tree Care in Circle C Ranch, Austin TX',
    metaDescription:
      'Tree trimming, removal, and health care in Circle C Ranch, Austin. ISA certified arborists for Southwest Austin. Call (512) 749-8615.',
    heroSubtitle:
      'Tree care for Circle C Ranch — from established shade trees to newer plantings across Southwest Austin.',
    placeUrl: 'https://www.google.com/maps/place/Circle+C+Ranch,+Austin,+TX',
    zipCodes: ['78739', '78749'],
    relatedServices: ['tree-trimming', 'storm-damage', 'stump-grinding', 'organic-fertilizing'],
    relatedGuides: ['oak-wilt-austin', 'austin-protected-heritage-trees', 'austin-bulk-brush-pickup'],
    sections: [
      {
        heading: 'Tree services in Circle C Ranch',
        paragraphs: [
          'Circle C Ranch is one of Southwest Austin\'s largest master-planned communities — a mix of mature shade trees in older sections, newer plantings in continuing development, and the limestone soils that define much of the Edwards Plateau edge. Homeowners here face a different tree profile than central Austin neighborhoods: fewer century-old live oaks in the oldest sense, but plenty of oaks, cedar elms, and ornamental species that need professional pruning as they mature.',
          'Blue Ox Tree Care serves Circle C and surrounding Southwest Austin ZIP codes from our Austin metro service area. We provide trimming, removal, stump grinding, storm damage response, and organic health programs — always with ISA certified arborists on site for assessment and oversight. Call (512) 749-8615 for a free estimate; we come to your property as a service-area business.',
        ],
      },
      {
        heading: 'Growing trees and developing landscapes',
        paragraphs: [
          'Many Circle C properties still have trees that are decades from full maturity — which means now is the ideal time to establish good structure. Early corrective pruning prevents the co-dominant stems and poor branch attachments that become expensive problems on mature trees. We work with homeowners who want to preserve shade and character without letting trees outgrow their space or threaten foundations and hardscape.',
          'Limestone and shallow soils common in Circle C affect root development and water availability. Organic fertilizing and soil health treatments can support trees stressed by construction compaction or drought — particularly important for transplanted specimens and trees near newer pool or patio projects.',
        ],
        list: [
          'Young tree training and structural pruning',
          'Mature tree crown reduction and clearance pruning',
          'Stump grinding after removal with site restoration guidance',
          'Storm damage triage after Central Texas wind and hail events',
        ],
      },
      {
        heading: 'Oak wilt awareness in Southwest Austin',
        paragraphs: [
          'Oak wilt infection centers exist across Travis County, and Southwest Austin is not isolated from regional disease pressure. Live oaks and red oaks both occur in Circle C plantings, and fresh pruning wounds during active transmission seasons create entry points for beetles carrying fungal spores. Our oak wilt guide covers timing recommendations — generally, the safest pruning window for susceptible species is mid-July through January, with emergency exceptions for storm damage.',
          'If a neighbor\'s oak was recently removed for wilt, or you notice veinal necrosis and rapid canopy decline, schedule a professional assessment promptly. Early response protects remaining trees through informed timing, trenching when appropriate, and treatment planning.',
        ],
      },
      {
        heading: 'Debris management and city collection',
        paragraphs: [
          'Tree work generates brush, and Circle C homeowners often rely on Austin Resource Recovery bulk and brush collection for cleanup. ARR rules specify bundle sizes, weight limits, and what materials qualify — important to know before leaving debris curbside after a professional job or DIY weekend project. Our brush pickup guide explains the process for Austin addresses.',
          'For larger removals, we discuss debris handling during the estimate — haul-away, chipping on site, or staged curbside collection aligned with your ARR schedule. Licensed and insured, with free estimates throughout Circle C Ranch.',
        ],
      },
    ],
  },
  {
    slug: 'mueller-east-austin',
    name: 'Mueller / East Austin',
    title: 'Tree Care in Mueller & East Austin',
    metaDescription:
      'ISA certified tree care in Mueller and East Austin — pruning, removal, and health treatments. Call Blue Ox Tree Care at (512) 749-8615.',
    heroSubtitle:
      'Arboriculture for Mueller\'s urban forest and the diverse canopy of East Austin neighborhoods.',
    placeUrl: 'https://www.google.com/maps/place/Mueller,+Austin,+TX',
    zipCodes: ['78723', '78721', '78702'],
    relatedServices: ['tree-trimming', 'tree-removal', 'pest-disease', 'tree-risk-assessment'],
    relatedGuides: ['oak-wilt-austin', 'austin-protected-heritage-trees', 'austin-bulk-brush-pickup'],
    sections: [
      {
        heading: 'Tree care in Mueller and East Austin',
        paragraphs: [
          'East Austin encompasses one of the city\'s most diverse urban forests — from the planned street trees and park plantings of Mueller to the long-established pecans, live oaks, and hackberries in Cherrywood, Holly, and Govalle. New development and infill construction continue to stress existing trees through root zone damage, grade changes, and changing irrigation patterns.',
          'Blue Ox Tree Care provides professional arboriculture across Mueller and broader East Austin. Our ISA certified team — led by BCMA Travis Berlin and arborist Lacy Berlin — assesses trees in context: species, structure, soil conditions, construction impact, and City of Austin regulatory requirements. We are a service-area business; call (512) 749-8615 and we come to you.',
        ],
      },
      {
        heading: 'Mueller\'s urban canopy',
        paragraphs: [
          'Mueller was designed with significant green space and street-tree plantings, but even planned urban forests need maintenance as trees mature. Clearance pruning over sidewalks and drives, crown thinning for wind resilience, and removal of declining specimens all become part of responsible property and HOA stewardship. We work with homeowners and property managers who need documented arborist assessments before major work.',
          'Protected tree rules still apply in Mueller when diameter thresholds are met — the city\'s heritage and protected tree ordinance is not limited to central Austin\'s oldest neighborhoods. Our heritage tree guide explains permit basics; we help you understand whether your project requires city review.',
        ],
        list: [
          'Clearance pruning for pedestrian and vehicle access',
          'Construction impact assessment and root zone protection guidance',
          'Removal and stump grinding when trees fail or pose unacceptable risk',
          'Organic pest and disease diagnosis with in-house treatment options',
        ],
      },
      {
        heading: 'Established East Austin neighborhoods',
        paragraphs: [
          'Beyond Mueller, East Austin\'s older blocks often contain trees that predate current structures — pecans with massive spread, live oaks rooted in compact urban soils, and volunteer species that homeowners inherit without a management plan. These trees provide shade and ecological value but can develop defects invisible from the ground: internal decay, root rot, and structural cracks that a casual inspection misses.',
          'Tree risk assessment from a qualified arborist identifies defects, estimates failure potential, and recommends mitigation — pruning, cabling, removal, or monitoring. This is particularly valuable before lease turnover, renovation, or insurance renewals when documentation matters.',
        ],
      },
      {
        heading: 'Oak wilt, storms, and debris',
        paragraphs: [
          'East Austin live oaks participate in the same regional oak wilt dynamics as the rest of Travis County. Pruning timing and wound management matter wherever susceptible oaks are present. After severe weather, our storm damage service addresses hazardous limbs and fallen trees with safety-first triage.',
          'For routine debris, Austin Resource Recovery brush and bulk collection rules apply to most East Austin addresses. Our brush pickup guide helps you plan curbside cleanup after professional pruning or removal — bundle sizes, schedules, and what ARR accepts.',
        ],
      },
    ],
  },
  {
    slug: 'steiner-ranch',
    name: 'Steiner Ranch',
    title: 'Tree Care in Steiner Ranch, Austin TX',
    metaDescription:
      'Tree trimming, fire mitigation, and removal in Steiner Ranch by ISA certified arborists. Northwest Austin Hill Country. Call (512) 749-8615.',
    heroSubtitle:
      'Hill Country arboriculture for Steiner Ranch — wooded lots, lake views, and wildfire-aware tree management.',
    placeUrl: 'https://www.google.com/maps/place/Steiner+Ranch,+Austin,+TX',
    zipCodes: ['78732'],
    relatedServices: ['fire-mitigation', 'tree-trimming', 'tree-removal', 'tree-risk-assessment'],
    relatedGuides: ['oak-wilt-austin', 'austin-protected-heritage-trees', 'austin-bulk-brush-pickup'],
    sections: [
      {
        heading: 'Professional tree care in Steiner Ranch',
        paragraphs: [
          'Steiner Ranch stretches across northwest Austin\'s Hill Country terrain — wooded home sites, lake views homeowners protect carefully, and the combination of native oak-juniper woodland with landscaped plantings that each require different care strategies. Steep access, HOA architectural guidelines, and wildfire awareness all factor into tree decisions here more than in flat central Austin neighborhoods.',
          'Blue Ox Tree Care serves Steiner Ranch and surrounding northwest Austin communities. Travis Berlin\'s BCMA credential and experience in mountain wildfire contexts inform our fire mitigation and risk assessment work; Lacy Berlin\'s tree health expertise supports organic treatment programs for stressed specimens. Call (512) 749-8615 — we come to your property as a service-area business with no storefront.',
        ],
      },
      {
        heading: 'Wildfire mitigation on wooded lots',
        paragraphs: [
          'Steiner Ranch properties often back to greenbelt or retain significant native vegetation. Fire mitigation focuses on breaking fuel continuity from the ground into tree canopies, reducing ladder fuels in juniper understory, and creating defensible space around structures without destroying the wooded character that defines the community.',
          'We assess each property individually — a lake-view home with scattered oaks needs a different approach than a densely wooded lot backing to undeveloped hillside. Our fire mitigation service includes selective thinning, limbing, dead material removal, and written recommendations homeowners can share with insurers or HOAs when documentation is requested.',
        ],
        list: [
          'Defensible space planning with species-appropriate canopy management',
          'Juniper and Ashe juniper reduction near structures',
          'Deadwood removal and hazard limb correction',
          'Coordination with view-preservation goals where possible',
        ],
      },
      {
        heading: 'Structural work and storm recovery',
        paragraphs: [
          'Mature oaks on Steiner Ranch lots develop heavy limbs that extend over roofs, pools, and boat storage. Structural pruning reduces end weight and corrects defects before storms turn them into emergencies. When storms do strike Central Texas, partially failed limbs and split trunks require prompt professional response — our storm damage service prioritizes making the property safe, then plans complete cleanup and any follow-up health care.',
          'Large removals on sloped Steiner Ranch lots demand rigging expertise and careful staging. We plan equipment access and debris routing during the estimate so there are no surprises on work day.',
        ],
      },
      {
        heading: 'Regional tree health and regulations',
        paragraphs: [
          'Oak wilt remains a regional concern across Travis County, including northwest Austin. Live oaks in Steiner Ranch may connect via root grafts across property lines; pruning wounds during active transmission seasons increase infection risk. Our oak wilt guide explains the science — we apply it in the field with appropriate timing and technique.',
          'Many Steiner Ranch addresses fall under Austin city limits and Austin Resource Recovery collection rules for brush and bulk debris. After professional tree work, our brush pickup guide helps homeowners align curbside cleanup with ARR requirements. For protected-size trees, Austin\'s heritage tree ordinance may apply — see our heritage tree guide or ask during your free estimate.',
        ],
      },
    ],
  },
];

export function getNeighborhood(slug: string): Neighborhood | undefined {
  return neighborhoods.find((n) => n.slug === slug);
}
