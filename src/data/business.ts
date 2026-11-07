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
  // Web3Forms access key (public by design, safe in page HTML). Created by
  // Kevin at web3forms.com with the email where leads should land. Empty =
  // the form isn't wired yet, do NOT deploy.
  web3formsKey: "481b4702-af22-443a-82fa-1e14503c1251",
} as const;

// Confirmed live on the GBP listing 2026-11-06 (5.0, 14 reviews). Update by
// hand whenever the count materially changes.
export const reviewStats = {
  ratingValue: 5.0,
  reviewCount: 14,
} as const;

// Real Google reviews, copied word for word from the GBP listing on
// 2026-11-06 (all 5 stars). Surname shortened to an initial. Never edit the
// wording or add a review that isn't on the listing.
export const googleReviews = [
  { author: "Blake L.", text: "Great experience with Kevin. Him and his crew are true professionals and get the job done quickly and safely. Would highly recommend." },
  { author: "Micah R.", text: "Kevin and his guys do a great job. No complaints, they come in and get the job done." },
  { author: "Annemarie C.", text: "Amazing move-in by Kevin and team. Handled move-in for my daughter’s new apartment in Oxford before she arrived from New Jersey. Thank you Kevin!!" },
] as const;

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
