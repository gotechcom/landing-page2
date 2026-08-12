import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://gotechcom.com";

  return [
    {
      url: `${baseUrl}/?lang=vi`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          vi: `${baseUrl}/?lang=vi`,
          en: `${baseUrl}/?lang=en`,
        },
      },
    },
    {
      url: `${baseUrl}/?lang=en`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          vi: `${baseUrl}/?lang=vi`,
          en: `${baseUrl}/?lang=en`,
        },
      },
    },
  ];
}
