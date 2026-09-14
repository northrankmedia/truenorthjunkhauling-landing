// Real content for the 6 service sitelink pages, trimmed from the main
// site's richer src/data/services.ts (whole item lists and full FAQ sets
// live there; this keeps just what a single-screen conversion page needs).
// Keep in sync by hand if the source facts change.

export type ServicePage = {
  slug: string;
  shortName: string;
  headlineTop: string;
  headlineAccent: string;
  heroBlurb: string;
  description: string;
  pricingNote: string;
  faqs: { q: string; a: string }[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "furniture-mattresses",
    shortName: "Furniture & Mattresses",
    headlineTop: "Furniture & Mattress",
    headlineAccent: "Removal, Same-Day",
    heroBlurb:
      "Couches, mattresses, and bed frames are heavy, awkward, and a pain to fit in a regular trash pickup. We carry it out so you don't have to.",
    description:
      "Furniture and mattresses make up more of our calls than anything else, and for good reason: your city trash service almost never takes them. We handle single pieces and full-room loads the same way, with two-person crews built to move heavy, bulky items without damaging your walls, floors, or door frames, including tight stairwells common in Oxford's older homes and student housing.",
    pricingNote:
      "A single sofa or mattress is usually a Small Load ($199+). A full bedroom or living room set typically runs Medium ($299+).",
    faqs: [
      {
        q: "Can you get a couch out of a second-floor apartment?",
        a: "Yes. Narrow stairwells and tight turns are common in Oxford's older buildings and student housing, and our crews come with the right equipment to navigate them without damaging walls or doorframes.",
      },
      {
        q: "Do you recycle mattresses instead of landfilling them?",
        a: "When a mattress recycling option is available for the load, we use it, mattresses are one of the bulkiest landfill items, so keeping them out when we can is a meaningful part of responsible disposal.",
      },
    ],
  },
  {
    slug: "appliances",
    shortName: "Appliances",
    headlineTop: "Appliance Removal,",
    headlineAccent: "Done Right",
    heroBlurb:
      "Old refrigerators, dead washers, and broken units don't belong in a driveway. We haul them out and dispose of them the right way.",
    description:
      "Major appliances are heavy, often leak fluids, and in some cases contain refrigerants that require specific handling. We remove old and non-working appliances from kitchens, laundry rooms, garages, and rental turnovers, and route each one to the right disposal or recycling channel instead of a curb pile.",
    pricingNote:
      "A single appliance is typically a Small Load ($199+). A kitchen full of appliances during a remodel usually lands in Medium ($299+) or Large ($499+).",
    faqs: [
      {
        q: "Do you take refrigerators and freezers with refrigerant still in them?",
        a: "Yes. Refrigerant-containing appliances are handled according to proper disposal guidelines, not just loaded in with everything else.",
      },
      {
        q: "Do you pick up appliances from rental properties for landlords?",
        a: "Regularly. Appliance turnover between tenants is one of our most common landlord and property manager calls.",
      },
    ],
  },
  {
    slug: "estate-full-cleanouts",
    shortName: "Estate & Full Cleanouts",
    headlineTop: "Estate & Full",
    headlineAccent: "Property Cleanouts",
    heroBlurb:
      "Clearing an entire home, whether after a loss, a downsize, or a foreclosure, is emotionally and physically overwhelming. We handle the hauling so you can focus on everything else.",
    description:
      "Full property cleanouts are one of the most personal jobs we do. Whether you're settling a loved one's estate, preparing a home for sale, or clearing out a rental after a long-term tenant, we work at your pace, respect what you want set aside, and haul the rest, top to bottom, garage to attic.",
    pricingNote:
      "Full-home cleanouts almost always fall into Large Load ($499+) or Trailer Load ($999+), depending on square footage and how much has accumulated.",
    faqs: [
      {
        q: "Can you work around items we want to keep?",
        a: "Yes. Tell us what's staying, and we'll sort around it. Many estate jobs involve a small set of sentimental or valuable items the family wants to keep.",
      },
      {
        q: "Do you handle hoarding or heavy-accumulation situations?",
        a: "We do, without judgment. These jobs take longer and are quoted based on the volume and access involved.",
      },
    ],
  },
  {
    slug: "yard-waste-debris",
    shortName: "Yard Waste & Debris",
    headlineTop: "Yard Waste &",
    headlineAccent: "Debris Removal",
    heroBlurb:
      "Branches, brush piles, and storm debris don't fit in a yard waste bin. We haul it off in one trip, no bundling or bagging required.",
    description:
      "Whether it's a season's worth of trimmings, a storm-downed limb, or a full brush-clearing project, we haul yard waste in bulk so you don't have to spend a weekend bagging leaves and bundling branches for a curb pickup that might not even take them.",
    pricingNote:
      "A single trailer load of brush or trimmings is typically Small ($199+) to Medium ($299+). Larger clearing projects often run Large ($499+) or Trailer Load ($999+).",
    faqs: [
      {
        q: "Do I need to bag or bundle the yard waste first?",
        a: "No. We take loose piles, branches, and brush as-is. Bagging isn't necessary, though it doesn't hurt if you've already started.",
      },
      {
        q: "Can you handle storm debris after a wind or ice event?",
        a: "Yes, and during active storm season we prioritize getting to these calls quickly since downed limbs are often a safety hazard.",
      },
    ],
  },
  {
    slug: "student-move-outs",
    shortName: "Student Move-Outs",
    headlineTop: "Ole Miss Student",
    headlineAccent: "Move-Out Hauling",
    heroBlurb:
      "May move-out week fills every dumpster in Oxford within a day. We give students, parents, and landlords a faster, guaranteed way to clear an apartment.",
    description:
      "Anyone who's lived through move-out week near campus knows the problem: complex dumpsters overflow by the second day, and everyone is trying to move out on the same weekend. We run a dedicated process for student move-outs, scheduled around the actual Ole Miss academic calendar, so you're not competing with an overflowing dumpster for space.",
    pricingNote:
      "A single dorm room or shared bedroom is usually a Small Load ($199+). A full apartment move-out typically runs Medium ($299+) to Large ($499+).",
    faqs: [
      {
        q: "Can you schedule around the exact Ole Miss move-out weekend?",
        a: "Yes, that's what this service is built for. We add crews specifically for the May and August move-out crunch so you're not waiting behind a backlog.",
      },
      {
        q: "Do you work with parents booking a pickup remotely for their student?",
        a: "Often. Plenty of parents book and pay for the pickup from out of town while the student just needs to be there, or coordinate a lockbox with the landlord.",
      },
    ],
  },
  {
    slug: "construction-debris",
    shortName: "Construction Debris",
    headlineTop: "Construction Debris",
    headlineAccent: "Removal",
    heroBlurb:
      "Drywall, flooring, lumber scraps, and remodel debris pile up fast. We haul it off the job site so your crew can keep working.",
    description:
      "Renovation and small construction debris slows a project down when it just sits in a driveway waiting for a haul. We work with homeowners doing a DIY remodel and with contractors who need reliable, on-call debris removal without committing to a dumpster rental sitting on-site for weeks.",
    pricingNote:
      "Most single-room remodel debris runs Medium ($299+) to Large ($499+). Larger renovations typically move into Trailer Load ($999+).",
    faqs: [
      {
        q: "Do I need a dumpster rental instead of calling you?",
        a: "For small to mid-size remodels, no. A rented dumpster makes sense for a months-long project generating debris continuously. For most homeowner remodels, an on-call haul is faster and cheaper.",
      },
      {
        q: "Can you take roofing shingle debris?",
        a: "Non-hazardous shingle debris from a standard reroof, yes. We can't take materials confirmed to contain asbestos.",
      },
    ],
  },
];

export function getServicePageBySlug(slug: string) {
  return servicePages.find((s) => s.slug === slug);
}
