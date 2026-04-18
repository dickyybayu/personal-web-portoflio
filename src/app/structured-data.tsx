import { getSiteUrl, ownerName, siteDescription } from "@/lib/seo";

export function StructuredData() {
  const siteUrl = getSiteUrl();
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: ownerName,
    alternateName: "Dicky Bayu",
    url: siteUrl,
    image: `${siteUrl}/profiledicky.jpg`,
    jobTitle: ["Full-Stack AI Engineer", "Web3 Engineer"],
    description: siteDescription,
    email: "mailto:dicky.bayusadewo@gmail.com",
    sameAs: [
      "https://github.com/DickyyBayu",
      "https://www.linkedin.com/in/dickybayu/",
      "https://www.instagram.com/dickyybayu/",
    ],
    knowsAbout: [
      "Full-stack development",
      "Artificial intelligence",
      "Web3",
      "Blockchain",
      "React",
      "Next.js",
      "Machine learning",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Dicky Bayu Sadewo Portfolio",
    url: siteUrl,
    description: siteDescription,
    author: {
      "@type": "Person",
      name: ownerName,
    },
  };

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([personSchema, websiteSchema]),
      }}
    />
  );
}
