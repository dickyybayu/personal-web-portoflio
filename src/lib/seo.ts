export const siteName = "Dicky Bayu Sadewo Portfolio";
export const ownerName = "Dicky Bayu Sadewo";
export const siteDescription =
  "Personal portfolio of Dicky Bayu Sadewo, a Full-Stack AI Engineer and Web3 Engineer building products with React, Next.js, blockchain, and machine learning.";

export function getSiteUrl() {
  const explicitUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (explicitUrl) {
    return explicitUrl.replace(/\/$/, "");
  }

  const vercelProductionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

  if (vercelProductionUrl) {
    return `https://${vercelProductionUrl}`.replace(/\/$/, "");
  }

  return "http://localhost:3000";
}
