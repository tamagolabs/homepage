import { siteConfig } from "@/data/site-config";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/pt";

interface JsonLdProps {
  locale: Locale;
  dict: Dictionary;
}

export function JsonLd({ locale, dict }: JsonLdProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/${locale}#organization`,
        name: siteConfig.name,
        legalName: siteConfig.legalName,
        url: `${siteConfig.url}/${locale}`,
        logo: `${siteConfig.url}/favicon.ico`,
        description: dict.meta.description,
        founder: {
          "@type": "Person",
          name: siteConfig.founder.name,
          jobTitle: dict.founder.role,
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
        "@id": `${siteConfig.url}/${locale}#website`,
        url: `${siteConfig.url}/${locale}`,
        name: siteConfig.name,
        description: dict.meta.description,
        publisher: {
          "@id": `${siteConfig.url}/${locale}#organization`,
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteConfig.url}/${locale}#service`,
        name: `${siteConfig.name} - ${locale === "en" ? "Software Engineering" : "Engenharia de Software"}`,
        url: `${siteConfig.url}/${locale}`,
        description: dict.jsonLd.serviceDescription,
        serviceType: dict.jsonLd.serviceTypes,
        provider: {
          "@id": `${siteConfig.url}/${locale}#organization`,
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
