// Real content for the 4 location sitelink pages, matching the 4 places
// actually targeted in Google Ads Locations settings, trimmed from the main
// site's src/data/towns.ts (Oxford, Water Valley, Batesville) plus the
// Lafayette County blurb from its src/data/business.ts. Keep in sync by
// hand if the source facts change.

export type ServiceAreaPage = {
  slug: string;
  name: string;
  headlineAccent: string;
  intro: string;
  localNote: string;
  faqs: { q: string; a: string }[];
};

export const serviceAreaPages: ServiceAreaPage[] = [
  {
    slug: "oxford",
    name: "Oxford, MS",
    headlineAccent: "Oxford, MS",
    intro:
      "Oxford is home base for True North Junk Hauling, which means it's where our response times are fastest and our local knowledge runs deepest. From the historic homes ringing the Square to the newer subdivisions off Highway 6, we know the driveways, the HOA rules, and the parking realities of getting a trailer where it needs to be.",
    localNote:
      "Oxford's mix of historic homes, newer subdivisions, and a huge seasonal renter population near campus means our Oxford calls range from a single-item pickup on a Tuesday afternoon to a full estate cleanout on a century-old home. We're set up for both.",
    faqs: [
      {
        q: "How quickly can you get to a job in Oxford?",
        a: "Oxford is our home base, so it's typically where we offer the fastest same-day response, often within a few hours if you call in the morning.",
      },
      {
        q: "Do you service both in-town and the outer Oxford subdivisions?",
        a: "Yes, everywhere from the Square to the subdivisions off Highway 6 and beyond is within our standard Oxford service area.",
      },
    ],
  },
  {
    slug: "lafayette-county",
    name: "Lafayette County, MS",
    headlineAccent: "Lafayette County",
    intro:
      "Beyond Oxford's city limits, Lafayette County calls range from farmland cleanouts to county-road pickups on properties spread further apart than a typical in-town lot. We serve the full county, not just the city center.",
    localNote:
      "Rural Lafayette County properties tend to generate larger yard debris and land-clearing jobs than in-town lots, plus the same furniture, appliance, and estate cleanout calls we handle everywhere else. We schedule county pickups efficiently alongside our regular Oxford route.",
    faqs: [
      {
        q: "Do you charge extra to service Lafayette County outside Oxford's city limits?",
        a: "No separate travel fee for standard service anywhere in Lafayette County. Pricing is based on load size the same way it is everywhere else in our service area.",
      },
      {
        q: "Can you handle a rural property with limited road access?",
        a: "Yes, tell us about the access when you call or text, and we'll plan the pickup accordingly. Rural county properties are a regular part of our route, not an exception.",
      },
    ],
  },
  {
    slug: "water-valley",
    name: "Water Valley, MS",
    headlineAccent: "Water Valley, MS",
    intro:
      "Water Valley, the largest town in neighboring Yalobusha County, is a regular stop on our route south of Oxford. We see a steady mix of estate cleanouts in the town's older residential streets and yard debris hauls from the more rural properties on the outskirts.",
    localNote:
      "Water Valley properties tend to be a bit further apart than Oxford's in-town lots, which means larger yard debris and land-clearing jobs are more common here. We schedule Water Valley pickups efficiently alongside other Highway 7 corridor stops.",
    faqs: [
      {
        q: "Do you charge extra to service Water Valley since it's outside Oxford?",
        a: "No separate travel fee for standard Water Valley service. Pricing is based on load size the same way it is everywhere else in our service area.",
      },
      {
        q: "How often do you have crews in Water Valley?",
        a: "Regularly. We run stops through Water Valley and the surrounding area, call or text and we'll give you the next available window.",
      },
    ],
  },
  {
    slug: "batesville",
    name: "Batesville, MS",
    headlineAccent: "Batesville, MS",
    intro:
      "Batesville sits along the I-55 corridor in Panola County and has a healthy mix of residential and commercial calls, from home cleanouts to retail and light industrial debris tied to the corridor's ongoing commercial growth.",
    localNote:
      "Batesville's location on I-55 means we regularly handle commercial and light construction debris jobs here alongside standard residential furniture and appliance pickups, and we're set up to take on property management accounts along the corridor.",
    faqs: [
      {
        q: "Do you handle commercial accounts in Batesville?",
        a: "Yes, we work with property managers and businesses along the I-55 corridor for recurring pickups.",
      },
      {
        q: "Is Batesville within your standard service radius?",
        a: "Yes, Batesville is a standard part of our service area along the I-55 corridor.",
      },
    ],
  },
];

export function getServiceAreaPageBySlug(slug: string) {
  return serviceAreaPages.find((t) => t.slug === slug);
}
