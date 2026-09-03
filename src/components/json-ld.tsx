import { siteConfig } from "@/data/site-config";

export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        legalName: siteConfig.legalName,
        url: siteConfig.url,
        logo: `${siteConfig.url}/favicon.ico`,
        description: siteConfig.description,
        founder: {
          "@type": "Person",
          name: siteConfig.founder.name,
          jobTitle: siteConfig.founder.role,
          url: siteConfig.founder.portfolioUrl,
          sameAs: [
            siteConfig.founder.githubUrl,
            siteConfig.founder.linkedinUrl,
            siteConfig.founder.twitterUrl,
          ].filter(Boolean),
        },
        sameAs: [siteConfig.founder.githubUrl, siteConfig.founder.linkedinUrl],
        contactPoint: {
          "@type": "ContactPoint",
          email: siteConfig.contact.email,
          contactType: "sales",
          availableLanguage: ["Portuguese", "English"],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: {
          "@id": `${siteConfig.url}/#organization`,
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteConfig.url}/#service`,
        name: `${siteConfig.name} - Engenharia de Software`,
        url: siteConfig.url,
        description:
          "Desenvolvimento sob medida de APIs de alta performance, aplicativos móveis com React Native, landing pages nota 100 no Google Web Vitals e plataformas SaaS completas.",
        serviceType: [
          "Desenvolvimento de Software",
          "Desenvolvimento de APIs",
          "Desenvolvimento de Apps Mobile React Native",
          "Desenvolvimento de SaaS",
          "Landing Pages de Alta Conversão",
        ],
        provider: {
          "@id": `${siteConfig.url}/#organization`,
        },
        areaServed: "Global",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD requires raw JSON serialization
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
