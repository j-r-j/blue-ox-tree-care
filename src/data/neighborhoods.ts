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
    slug: 'clarksville',
    name: 'Clarksville / Old West Austin',
    region: 'central',
    title: 'Tree Care in Clarksville & Old West Austin',
    metaDescription:
      'ISA certified tree care in Clarksville and Old West Austin — heritage live oaks, tight urban lots, protected tree permits. Call (512) 749-8615.',
    heroSubtitle:
      'Arboriculture for one of Austin\'s oldest neighborhoods — historic lots, pedestrian-scale streets, and canopy that defines Old West Austin.',
    placeUrl: 'https://www.google.com/maps/place/Clarksville,+Austin,+TX',
    zipCodes: ['78703'],
    relatedServices: ['tree-trimming', 'tree-risk-assessment', 'tree-removal', 'cabling-bracing'],
    relatedGuides: ['oak-wilt-austin', 'austin-protected-heritage-trees', 'austin-bulk-brush-pickup'],
    sections: [
      {
        heading: 'Old West Austin\'s urban forest',
        paragraphs: [
          'Clarksville and Old West Austin preserve some of the city\'s earliest residential fabric — narrow lots, walkable blocks near Shoal Creek, and trees that survived decades of infill and renovation. Canopy here is not ornamental background; it is shade for sidewalks, privacy between closely spaced homes, and often the largest living asset on the property.',
          'Blue Ox Tree Care serves Clarksville alongside adjacent Tarrytown and Pemberton Heights. Our ISA certified arborists assess trees on tight urban parcels where every cut affects neighbors, sight lines, and sometimes City of Austin protected tree status. We are a service-area business — call (512) 749-8615 and we come to your property.',
        ],
      },
      {
        heading: 'Heritage-scale trees on compact lots',
        paragraphs: [
          'Many Clarksville properties contain live oaks and pecans that exceed the protected tree diameter threshold — triggering permit requirements for removal or impact from additions and ADUs. Renovation booms across Old West Austin mean root zones get compressed, grades change, and previously healthy trees show stress within a few seasons.',
          'Our heritage tree guide explains Austin\'s protected and heritage tree framework. Before construction or major pruning, we help you understand whether city review applies and what documentation supports a compliant project. We do not replace the permit process — we provide accurate arboricultural assessment.',
        ],
        list: [
          'Pre-construction tree protection planning and root zone guidance',
          'Clearance pruning over alleys, driveways, and shared fences',
          'Cabling and bracing for mature trees with structural defects',
          'Removal only when risk or project requirements make retention impractical',
        ],
      },
      {
        heading: 'Oak wilt on connected central Austin blocks',
        paragraphs: [
          'Live oaks on Clarksville blocks often sit close enough for root grafting — meaning oak wilt can move between properties in infection centers that expand quietly underground. Fresh pruning wounds during the active transmission season (often described as February through June) attract beetles that carry spores from diseased red oaks.',
          'Our oak wilt guide covers timing and wound management. We schedule elective pruning for safer windows when possible and use proper technique when storm damage forces work during higher-risk periods.',
        ],
      },
      {
        heading: 'Storms, debris, and ongoing care',
        paragraphs: [
          'Central Austin storms deposit limbs on Clarksville roofs and power lines with regularity. Our storm damage service secures hazardous hangers first, then plans cleanup. For routine maintenance debris, Austin Resource Recovery brush collection rules apply — our brush pickup guide explains bundling and schedule alignment.',
          'Licensed, insured, and BCMA-led. Free estimates throughout Clarksville and Old West Austin.',
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
      'Tree care in Pemberton Heights — estate live oaks, heritage trees, and ISA certified arborists. Austin\'s most canopy-rich central neighborhood. Call (512) 749-8615.',
    heroSubtitle:
      'Professional arboriculture for Pemberton Heights — grand live oaks, estate-scale lots, and Austin\'s strictest tree protection context.',
    placeUrl: 'https://www.google.com/maps/place/Pemberton+Heights,+Austin,+TX',
    zipCodes: ['78703'],
    relatedServices: ['tree-trimming', 'tree-risk-assessment', 'tree-removal', 'organic-fertilizing'],
    relatedGuides: ['oak-wilt-austin', 'austin-protected-heritage-trees', 'austin-bulk-brush-pickup'],
    sections: [
      {
        heading: 'Tree care on Pemberton Heights estates',
        paragraphs: [
          'Pemberton Heights ranks among Austin\'s most heavily canopied central neighborhoods — estate-scale properties shaded by live oaks and pecans that often qualify as protected or heritage trees under City of Austin ordinance. Homeowners here invest in tree care because canopy directly supports property value, privacy, and the neighborhood\'s established character.',
          'Blue Ox Tree Care provides trimming, risk assessment, organic health programs, and permit-aware removal guidance throughout Pemberton Heights. Travis Berlin (ISA BCMA, RM-7612B) and Lacy Berlin (RM-8632A) work directly with homeowners — not a sales team. Call (512) 749-8615 for a free on-site estimate.',
        ],
      },
      {
        heading: 'Protected and heritage tree compliance',
        paragraphs: [
          'Diameter thresholds in Austin mean many Pemberton Heights trees require permits before removal or significant impact from construction, pool installation, or utility work. Heritage tree designation adds mitigation requirements that surprise homeowners who have not navigated the process before.',
          'We evaluate whether your tree triggers city review, discuss retention alternatives when possible, and provide documentation that supports permit applications. Our protected and heritage tree guide covers the basics; on-site assessment translates ordinance language to your specific trees.',
        ],
        list: [
          'Heritage and protected tree evaluation before renovation projects',
          'Structural pruning that preserves long-term health on high-value specimens',
          'Tree risk assessment with written reports for insurance or sale due diligence',
          'Organic pest and disease treatment for stressed mature trees',
        ],
      },
      {
        heading: 'Live oak health and oak wilt vigilance',
        paragraphs: [
          'Pemberton Heights live oaks form interconnected root systems across property lines — ideal conditions for oak wilt spread when infection enters a neighborhood. Vigilance matters: veinal necrosis, rapid canopy thinning, and neighbor removals for wilt all warrant professional assessment.',
          'Pruning timing follows Central Texas oak wilt guidance — elective work on susceptible species is safest mid-July through January. Our oak wilt guide explains why; we apply that knowledge on every Pemberton Heights property we manage.',
        ],
      },
      {
        heading: 'Storm response and debris planning',
        paragraphs: [
          'Large limbs over Pemberton Heights driveways and rooflines create serious storm liability. After weather events, our storm damage service prioritizes securing threats over structures. Routine pruning debris can be hauled away or staged for Austin Resource Recovery collection — we discuss options during your estimate.',
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
      'ISA certified tree trimming and health care in Bryker Woods, Austin — mature central Austin canopy on family-sized lots. Call (512) 749-8615.',
    heroSubtitle:
      'Central Austin tree care for Bryker Woods — bungalow lots under mature live oaks and pecans between MoPac and downtown.',
    placeUrl: 'https://www.google.com/maps/place/Bryker+Woods,+Austin,+TX',
    zipCodes: ['78703', '78756'],
    relatedServices: ['tree-trimming', 'pest-disease', 'tree-risk-assessment', 'organic-fertilizing'],
    relatedGuides: ['oak-wilt-austin', 'austin-protected-heritage-trees', 'austin-bulk-brush-pickup'],
    sections: [
      {
        heading: 'Central Austin canopy on Bryker Woods lots',
        paragraphs: [
          'Bryker Woods combines walkable central Austin location with residential-scale lots that still carry substantial tree canopy — live oaks arching over bungalow roofs, pecans shading front yards, and the occasional protected-size tree that survived every renovation on the block. Trees here are part of daily life: shade for play, privacy from MoPac corridor noise, and cooling that offsets Austin summers.',
          'Blue Ox Tree Care provides science-based trimming, health diagnosis, and risk assessment throughout Bryker Woods. We are a service-area business serving central and west Austin — call (512) 749-8615 and our certified arborists come to you.',
        ],
      },
      {
        heading: 'Pruning for structure and clearance',
        paragraphs: [
          'Bryker Woods trees often need clearance from roofs, second-story additions, and shared fences — but clearance work must not become topping or over-thinning that weakens the tree. We follow ANSI A300 standards, preserving branch collar integrity and species-appropriate crown architecture.',
          'Younger replacements and mid-age trees benefit from structural training before defects become entrenched. Mature specimens may need crown reduction rather than repeated topping by prior contractors — we assess what prior work has done and plan corrective care.',
        ],
        list: [
          'Roof and gutter clearance without lion-tailing',
          'Deadwood removal and crown cleaning for mature specimens',
          'Organic treatment for borers, fungal issues, and drought stress',
          'Protected tree guidance when diameter thresholds apply',
        ],
      },
      {
        heading: 'Oak wilt and seasonal timing',
        paragraphs: [
          'Central Austin live oaks face regional oak wilt pressure. Bryker Woods blocks with contiguous live oak canopy share root graft risk — one infected property affects neighbors. We recommend pruning schedules that minimize unnecessary wounding during active transmission seasons and paint fresh cuts when work cannot wait.',
          'See our oak wilt guide for educational background on Central Texas timing recommendations.',
        ],
      },
      {
        heading: 'Renovation stress and storm cleanup',
        paragraphs: [
          'Bryker Woods renovation activity compresses root zones and changes drainage — trees that tolerated old conditions decline after construction. We assess construction impact and recommend retention or removal based on structural reality, not guesswork. After storms, our storm damage service addresses hangers over Bryker Woods homes promptly.',
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
      'Tree trimming, removal, and oak wilt-aware care in Rosedale, Austin. ISA certified arborists for central Austin live oaks. Call (512) 749-8615.',
    heroSubtitle:
      'Tree care for Rosedale — central Austin\'s blend of historic pecans, live oaks, and active renovation under established canopy.',
    placeUrl: 'https://www.google.com/maps/place/Rosedale,+Austin,+TX',
    zipCodes: ['78756'],
    relatedServices: ['tree-trimming', 'tree-removal', 'tree-risk-assessment', 'stump-grinding'],
    relatedGuides: ['oak-wilt-austin', 'austin-protected-heritage-trees', 'austin-bulk-brush-pickup'],
    sections: [
      {
        heading: 'Rosedale\'s mixed central Austin canopy',
        paragraphs: [
          'Rosedale stretches between central Austin and UT-adjacent neighborhoods with a canopy mix that reflects its development history — massive pecans from early plantings, live oaks that matured as the neighborhood filled in, and younger replacements where older trees failed or were removed. Lot sizes vary, but tree density remains high compared to newer Austin subdivisions.',
          'Blue Ox Tree Care serves Rosedale homeowners who need professional assessment before renovation, storm cleanup, or routine maintenance. ISA certified arborists Travis and Lacy Berlin provide on-site estimates — call (512) 749-8615.',
        ],
      },
      {
        heading: 'Pecans and live oaks — different care needs',
        paragraphs: [
          'Pecans and live oaks dominate Rosedale but require different management. Pecans drop heavy limbs in storms and need structural attention to co-dominant stems; live oaks demand oak-wilt-aware timing and root-zone protection during construction. Treating every tree the same leads to poor outcomes.',
          'We identify species, assess structure, and recommend work scoped to each tree\'s condition — not a blanket "trim everything" approach.',
        ],
        list: [
          'Species-specific pruning plans for pecans and live oaks',
          'Stump grinding and replanting guidance after necessary removals',
          'Risk assessment before second-story additions or pool projects',
          'Storm damage triage for limbs over Rosedale rooflines',
        ],
      },
      {
        heading: 'Protected trees and renovation permits',
        paragraphs: [
          'Rosedale renovation continues at a steady pace — and protected tree permits appear more often than homeowners expect. Diameter thresholds apply regardless of whether a tree "looks like it belongs to the city." Our heritage tree guide walks through Austin\'s rules; we help you understand permit requirements before work begins.',
        ],
      },
      {
        heading: 'Debris and ongoing maintenance',
        paragraphs: [
          'Rosedale addresses fall under Austin Resource Recovery collection for brush and bulk debris. After professional pruning or removal, our brush pickup guide helps you plan curbside cleanup. For haul-away included in service, discuss options during your free estimate.',
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
      'Heritage tree and live oak care in Hyde Park, Austin — ISA certified arborists for Austin\'s north-central landmark neighborhood. Call (512) 749-8615.',
    heroSubtitle:
      'Arboriculture for Hyde Park — landmark-district character, towering pecans, and live oaks on north-central Austin\'s classic bungalow blocks.',
    placeUrl: 'https://www.google.com/maps/place/Hyde+Park,+Austin,+TX',
    zipCodes: ['78751'],
    relatedServices: ['tree-trimming', 'tree-risk-assessment', 'cabling-bracing', 'pest-disease'],
    relatedGuides: ['oak-wilt-austin', 'austin-protected-heritage-trees', 'austin-bulk-brush-pickup'],
    sections: [
      {
        heading: 'Hyde Park\'s landmark canopy',
        paragraphs: [
          'Hyde Park carries north-central Austin\'s strongest sense of place — wide porches beneath pecans that predate current homes, live oaks shading Speedway and Duval corridors, and a local historic district context where tree removal draws neighbor attention even when permits allow it. Canopy preservation is cultural here, not just horticultural.',
          'Blue Ox Tree Care provides trimming, cabling, health treatment, and risk assessment throughout Hyde Park. We respect retention goals while being honest when a tree poses unacceptable failure risk. Service-area business — call (512) 749-8615.',
        ],
      },
      {
        heading: 'Large pecans and structural risk',
        paragraphs: [
          'Hyde Park pecans reach sizes that create both awe and liability — heavy lateral limbs over streets and structures, hollow trunks invisible from the curb, and included bark unions that fail in wind events. Regular assessment catches problems while cabling or selective reduction remain options.',
          'Live oaks interspersed through Hyde Park need oak-wilt-aware scheduling and neighbor-aware root graft assessment when wilt appears nearby.',
        ],
        list: [
          'Advanced risk assessment for oversized legacy pecans',
          'Cabling and bracing when retention is feasible and safe',
          'Organic health treatment for declining but savable trees',
          'Heritage and protected tree permit navigation',
        ],
      },
      {
        heading: 'City of Austin tree regulations',
        paragraphs: [
          'Hyde Park trees frequently exceed protected diameter thresholds. Heritage designation on select specimens adds mitigation requirements. Our protected and heritage tree guide explains the process; we provide on-site evaluation that supports informed decisions before you commit to a renovation timeline.',
        ],
      },
      {
        heading: 'Storm seasons and ARR cleanup',
        paragraphs: [
          'Hyde Park sees significant storm debris from both pecan limb drop and oak branch failure. Our storm damage service addresses immediate hazards; routine work debris aligns with Austin Resource Recovery rules covered in our brush pickup guide.',
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
      'Tree trimming and live oak care in Allandale, Austin — ISA certified arborists for north-central Austin\'s mature street-tree canopy. Call (512) 749-8615.',
    heroSubtitle:
      'North-central Austin tree care for Allandale — post-war lots with consistent live oak street trees and deep backyard canopy.',
    placeUrl: 'https://www.google.com/maps/place/Allandale,+Austin,+TX',
    zipCodes: ['78757', '78756'],
    relatedServices: ['tree-trimming', 'storm-damage', 'organic-fertilizing', 'tree-risk-assessment'],
    relatedGuides: ['oak-wilt-austin', 'austin-bulk-brush-pickup', 'austin-protected-heritage-trees'],
    sections: [
      {
        heading: 'Allandale\'s established live oak canopy',
        paragraphs: [
          'Allandale developed in the post-war era with lot sizes that allowed live oaks to become the defining neighborhood feature — street trees maturing alongside backyard specimens until many properties sit under continuous shade. That canopy is cooler in summer and more complex to manage than sparse new-build subdivisions.',
          'Blue Ox Tree Care provides trimming, fertilizing, storm response, and risk assessment across Allandale and adjacent Crestview and Brentwood corridors. ISA certified arborists on every assessment — call (512) 749-8615.',
        ],
      },
      {
        heading: 'Maintenance cycles for mature shade trees',
        paragraphs: [
          'Allandale live oaks benefit from periodic crown cleaning, clearance from structures, and structural correction before defects become emergencies — typically on a multi-year cycle rather than annual shearing. Over-pruning live oaks for light penetration backfires when lion-tailing promotes epicormic sprout weakness.',
          'Organic fertilizing supports trees in compacted soils where decades of foot traffic, driveway expansion, and utility trenching stressed root systems.',
        ],
        list: [
          'Crown cleaning and selective thinning with species-appropriate timing',
          'Clearance pruning for two-story additions common in Allandale renovations',
          'Storm damage response after Central Texas wind events',
          'Oak wilt timing guidance for connected live oak blocks',
        ],
      },
      {
        heading: 'Protected trees on renovated Allandale lots',
        paragraphs: [
          'Allandale\'s renovation wave means protected tree permits appear regularly — especially when expanding footprints toward mature trees at the rear lot line. We assess impact before you finalize plans and explain Austin ordinance requirements via our heritage tree guide context.',
        ],
      },
      {
        heading: 'Brush pickup after tree work',
        paragraphs: [
          'Allandale homeowners use Austin Resource Recovery for brush collection after maintenance. Our brush pickup guide explains bundle limits and schedules. We offer haul-away when curbside staging is impractical for larger jobs.',
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
      'Tree care in Northwest Hills — hilly west Austin terrain, live oaks, and ISA certified arborists. Fire and storm-aware pruning. Call (512) 749-8615.',
    heroSubtitle:
      'West Austin arboriculture for Northwest Hills — Balcones terrain, view corridors, and live oak canopy on sloped lots.',
    placeUrl: 'https://www.google.com/maps/place/Northwest+Hills,+Austin,+TX',
    zipCodes: ['78731', '78759'],
    relatedServices: ['tree-trimming', 'tree-risk-assessment', 'fire-mitigation', 'tree-removal'],
    relatedGuides: ['oak-wilt-austin', 'austin-protected-heritage-trees', 'austin-bulk-brush-pickup'],
    sections: [
      {
        heading: 'Tree work on Northwest Hills terrain',
        paragraphs: [
          'Northwest Hills combines west Austin\'s characteristic topography — slopes, rock outcrops, and narrow driveways — with live oak and cedar elm canopy that homeowners balance against view preservation and wildfire awareness. Tree work here requires equipment planning that flat central Austin jobs do not.',
          'Blue Ox Tree Care serves Northwest Hills from Far West Boulevard corridors to Great Hills edges. Travis Berlin\'s BCMA credential and wildfire-adjacent experience from Colorado inform slope work and defensible-space planning. Call (512) 749-8615 — we come to your property.',
        ],
      },
      {
        heading: 'Views, clearance, and selective reduction',
        paragraphs: [
          'Northwest Hills homeowners often request view restoration — a legitimate goal when executed through selective reduction and interior thinning rather than topping. Topping destroys structure and creates long-term hazard; proper reduction removes weight while preserving tree health.',
          'Clearance from chimneys, solar arrays, and second-story decks requires branch-specific cuts, not indiscriminate shearing.',
        ],
        list: [
          'View-oriented selective crown reduction',
          'Slope-aware removal with rigging plans for limited access',
          'Fire mitigation limbing and ladder-fuel reduction near structures',
          'Risk assessment for trees leaning over downhill neighbors',
        ],
      },
      {
        heading: 'Oak wilt and rocky soils',
        paragraphs: [
          'Live oaks on Northwest Hills slopes may have shallower root plates in rocky Balcones soils — affecting stability assessment during drought and after saturation events. Oak wilt remains a regional concern; we schedule susceptible-species pruning for safer seasonal windows per our oak wilt guide.',
        ],
      },
      {
        heading: 'Storms and emergency response',
        paragraphs: [
          'Hill country wind funnels through Northwest Hills draws, breaking limbs and occasionally uprooting trees on saturated slopes. Our storm damage service secures hazards first. Debris disposal follows Austin Resource Recovery rules for city addresses — see our brush pickup guide.',
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
      'Tree care in Barton Hills, Austin — greenbelt-adjacent live oaks, Barton Creek watershed, ISA certified arborists. Call (512) 749-8615.',
    heroSubtitle:
      'Southwest-central Austin tree care for Barton Hills — greenbelt edge properties, Barton Creek watershed, and native oak-juniper woodland.',
    placeUrl: 'https://www.google.com/maps/place/Barton+Hills,+Austin,+TX',
    zipCodes: ['78704'],
    relatedServices: ['tree-trimming', 'tree-risk-assessment', 'fire-mitigation', 'pest-disease'],
    relatedGuides: ['oak-wilt-austin', 'austin-protected-heritage-trees', 'austin-bulk-brush-pickup'],
    sections: [
      {
        heading: 'Greenbelt-edge tree care in Barton Hills',
        paragraphs: [
          'Barton Hills sits where south-central Austin meets the Barton Creek greenbelt — properties transition from landscaped yards to native oak-juniper slopes within short distances. That edge creates unique management needs: retaining privacy and shade while respecting slope stability, greenbelt interface, and wildfire ladder fuels on hillside lots.',
          'Blue Ox Tree Care provides trimming, health treatment, fire mitigation, and risk assessment throughout Barton Hills. ISA certified arborists assess each property\'s mix of cultivated and native trees — call (512) 749-8615.',
        ],
      },
      {
        heading: 'Native woodland and home landscape integration',
        paragraphs: [
          'Barton Hills lots often blend live oaks planted decades ago with Ashe juniper and cedar elm volunteering from the greenbelt. Juniper management near structures supports defensible space without clear-cutting hillsides. Live oaks near the creek corridor need oak-wilt-aware care when root zones connect to broader watershed populations.',
          'Steep rear slopes limit equipment access — we plan hand-work and rigging approaches during estimate rather than assuming bucket-truck access.',
        ],
        list: [
          'Greenbelt-adjacent limbing and ladder-fuel reduction',
          'Live oak structural pruning with oak wilt timing awareness',
          'Organic treatment for post-drought decline and borer activity',
          'Slope stability consideration when removing large hillside trees',
        ],
      },
      {
        heading: 'Protected trees and Barton Creek context',
        paragraphs: [
          'Barton Hills renovation and pool projects regularly encounter protected-size trees. Austin\'s heritage and protected tree ordinance applies — our guide explains thresholds and permit flow. Creek corridor properties may face additional sensitivity around root zones and erosion; we factor that into retention recommendations.',
        ],
      },
      {
        heading: 'Storm debris on hillside Barton Hills properties',
        paragraphs: [
          'Barton Hills storms send limbs downhill and onto lower neighbors\' roofs — creating liability chains that prompt urgent professional response. Our storm damage service addresses immediate safety; routine debris follows ARR collection guidance in our brush pickup guide.',
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
      'ISA certified tree care in Zilker, Austin — Barton Springs area live oaks, protected trees, renovation-aware pruning. Call (512) 749-8615.',
    heroSubtitle:
      'Tree care steps from Barton Springs — Zilker\'s high-value central-south lots with heritage-scale live oaks and active renovation.',
    placeUrl: 'https://www.google.com/maps/place/Zilker,+Austin,+TX',
    zipCodes: ['78704'],
    relatedServices: ['tree-trimming', 'tree-risk-assessment', 'tree-removal', 'cabling-bracing'],
    relatedGuides: ['austin-protected-heritage-trees', 'oak-wilt-austin', 'austin-bulk-brush-pickup'],
    sections: [
      {
        heading: 'Zilker\'s high-value urban canopy',
        paragraphs: [
          'Zilker ranks among Austin\'s most tree-identified neighborhoods — walkable to Barton Springs, dense with live oaks and pecans that shade bungalow streets and newer infill alike. Property values reflect canopy quality; so does the cost of poor tree work. Topping a Zilker live oak damages asset value and tree health simultaneously.',
          'Blue Ox Tree Care serves Zilker homeowners with ISA certified assessment, structural pruning, cabling, and permit-aware removal when retention is not viable. Service-area business — call (512) 749-8615.',
        ],
      },
      {
        heading: 'Renovation, ADUs, and root zone pressure',
        paragraphs: [
          'Zilker\'s development pressure means trees endure compressed root zones from additions, pools, and accessory dwelling units. Decline often appears two to five years after construction — when homeowners assume the tree "made it through" the build. Early assessment during planning prevents expensive retention failures.',
          'Protected tree permits are common on Zilker projects. We evaluate diameter, discuss impact alternatives, and align with Austin ordinance requirements explained in our heritage tree guide.',
        ],
        list: [
          'Pre-renovation tree retention feasibility assessment',
          'Structural pruning and cabling for high-value retained trees',
          'Removal and stump grinding when risk or project design requires it',
          'Oak wilt timing for elective live oak pruning',
        ],
      },
      {
        heading: 'Species mix and professional technique',
        paragraphs: [
          'Zilker combines pecans with live oaks and occasional red oaks — each species carrying different storm failure modes and disease susceptibilities. Red oaks in the area warrant oak wilt vigilance as beetle transmission vectors. We identify species before recommending work, never applying one template to every tree on the lot.',
        ],
      },
      {
        heading: 'Events, tourism, and routine maintenance',
        paragraphs: [
          'Zilker properties near park corridors see heavy foot traffic that compacts soil around root zones. Organic health programs and mulching guidance support trees in high-use edges. Storm and routine debris align with Austin Resource Recovery — our brush pickup guide covers post-work cleanup.',
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
      'Tree trimming, fire mitigation, and removal in Lost Creek — west Austin wooded lots by ISA certified arborists. Call (512) 749-8615.',
    heroSubtitle:
      'West Austin tree care for Lost Creek — wooded enclave lots, live oak woodlands, and Hill Country edge terrain near Bee Cave.',
    placeUrl: 'https://www.google.com/maps/place/Lost+Creek,+Austin,+TX',
    zipCodes: ['78746', '78738'],
    relatedServices: ['fire-mitigation', 'tree-trimming', 'tree-removal', 'tree-risk-assessment'],
    relatedGuides: ['oak-wilt-austin', 'austin-protected-heritage-trees', 'austin-bulk-brush-pickup'],
    sections: [
      {
        heading: 'Wooded lots in Lost Creek',
        paragraphs: [
          'Lost Creek occupies a west Austin pocket where wooded lots, curving streets, and Hill Country edge terrain replace central Austin\'s grid. Properties retain native live oak and juniper woodland alongside decades-old landscape plantings — creating layered canopy that requires selective management rather than blanket clearing.',
          'Blue Ox Tree Care serves Lost Creek with trimming, fire mitigation, removal, and risk assessment suited to wooded residential terrain. Call (512) 749-8615 — certified arborists come to your property.',
        ],
      },
      {
        heading: 'Wildfire awareness on west Austin wooded parcels',
        paragraphs: [
          'Lost Creek\'s tree density supports shade and privacy but also continuous fuel paths when juniper understory connects to overhanging oak limbs near roofs. Fire mitigation creates defensible space through selective limbing, dead material removal, and crown separation — not moonscape clearing.',
          'Our fire mitigation service follows principles proven in wildfire-prone regions, adapted to Lost Creek\'s mix of native and cultivated trees.',
        ],
        list: [
          'Defensible space assessment with written recommendations',
          'Selective juniper thinning near structures and driveways',
          'Live oak structural pruning on wooded entry corridors',
          'Removal planning for dead or hazard trees on slope access',
        ],
      },
      {
        heading: 'Oak wilt in west Austin woodlands',
        paragraphs: [
          'Lost Creek live oaks in clustered woodland patterns share root graft potential — oak wilt infection centers can spread through contiguous canopy. We monitor regional wilt activity and schedule pruning to reduce unnecessary wounding during active transmission seasons per our oak wilt guide.',
        ],
      },
      {
        heading: 'Access, storms, and debris',
        paragraphs: [
          'Lost Creek\'s winding streets and sloped driveways affect equipment staging for large removals. We plan access during estimate. After storms, hazardous hangers over Lost Creek rooflines get priority response through our storm damage service.',
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
      'Tree care in Barton Creek, Austin — golf-course corridor live oaks, Hill Country estates, ISA certified arborists. Call (512) 749-8615.',
    heroSubtitle:
      'Southwest Austin tree care for Barton Creek — estate properties, golf-course corridor oaks, and Edwards Plateau limestone terrain.',
    placeUrl: 'https://www.google.com/maps/place/Barton+Creek,+Austin,+TX',
    zipCodes: ['78735', '78733'],
    relatedServices: ['tree-trimming', 'tree-risk-assessment', 'fire-mitigation', 'organic-fertilizing'],
    relatedGuides: ['oak-wilt-austin', 'austin-protected-heritage-trees', 'austin-bulk-brush-pickup'],
    sections: [
      {
        heading: 'Estate-scale tree care in Barton Creek',
        paragraphs: [
          'Barton Creek encompasses some of southwest Austin\'s largest residential parcels — live oaks framing fairway views, limestone outcrops interrupting root zones, and canopy that defines the corridor\'s premium character. Tree decisions here affect views, golf course interface, and HOA landscape standards simultaneously.',
          'Blue Ox Tree Care provides trimming, risk assessment, fire mitigation, and organic health programs throughout Barton Creek and Westbank Drive corridors. ISA BCMA-led — call (512) 749-8615 for a free estimate.',
        ],
      },
      {
        heading: 'Limestone soils and live oak management',
        paragraphs: [
          'Edwards Plateau limestone shapes Barton Creek root development — trees may appear healthy above ground while root plates are shallower than central Austin specimens. Drought stress, construction trenching, and irrigation changes show up as canopy thinning years later.',
          'Organic fertilizing and targeted health treatment address decline before removal becomes the only option — Lacy Berlin formulates in-house organic programs for Barton Creek properties.',
        ],
        list: [
          'View-preservation pruning along golf course and greenbelt edges',
          'Structural assessment for large live oaks near entertainment patios',
          'Fire mitigation on parcels backing to wildland interface',
          'Risk assessment documentation for estate sales and renovations',
        ],
      },
      {
        heading: 'Protected trees on Barton Creek renovations',
        paragraphs: [
          'Large-diameter live oaks on Barton Creek estates frequently trigger Austin protected tree review during pool, guest house, or hardscape expansion. Our heritage tree guide explains ordinance basics; on-site assessment clarifies what your project triggers.',
        ],
      },
      {
        heading: 'Storm recovery and maintenance debris',
        paragraphs: [
          'Barton Creek storms break heavy oak limbs over pool enclosures and drive courtries. Our storm damage service prioritizes structural safety. Routine maintenance debris can be hauled or staged per Austin Resource Recovery rules — see our brush pickup guide.',
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
    region: 'west',
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
    region: 'southwest',
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
    slug: 'steiner-ranch',
    name: 'Steiner Ranch',
    region: 'southwest',
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
