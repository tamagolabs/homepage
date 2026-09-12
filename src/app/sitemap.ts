import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site-config";
import { locales } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || siteConfig.url;
  const currentDate = new Date();

  return locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: locale === "pt" ? 1.0 : 0.9,
    alternates: {
      languages: {
        pt: `${baseUrl}/pt`,
        en: `${baseUrl}/en`,
      },
    },
  }));
}
