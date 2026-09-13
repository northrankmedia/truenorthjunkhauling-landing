// Trimmed to exactly what this standalone landing microsite needs. Source of
// truth for the full business record lives in the main truenorthjunkhauling
// repo's src/data/business.ts, keep these facts in sync by hand if they
// change (name, phone, hours, review count).

export const business = {
  name: "True North Junk Hauling",
  phone: "(662) 912-0777",
  phoneHref: "tel:+16629120777",
  smsHref: "sms:+16629120777",
  siteUrl: "https://site.truenorthjunkhauling.com",
  mainSiteUrl: "https://www.truenorthjunkhauling.com",
} as const;

// Confirmed live on the GBP listing 2026-09-01 (5.0, 9 reviews). Update by
// hand whenever the count materially changes.
export const reviewStats = {
  ratingValue: 5.0,
  reviewCount: 9,
} as const;

export const trustBadges = [
  { label: "Same-Day Pickup", icon: "clock" },
  { label: "Licensed & Insured", icon: "shield" },
  { label: "Free On-Site Estimates", icon: "tag" },
  { label: "7 Days a Week", icon: "calendar" },
] as const;

export const pricingTiers = [
  { name: "Small Load", price: "$199+" },
  { name: "Medium Load", price: "$299+" },
  { name: "Large Load", price: "$499+" },
  { name: "Trailer Load", price: "$999+" },
] as const;
