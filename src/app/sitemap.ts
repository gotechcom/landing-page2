import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://gotechcom.com/vi",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          vi: "https://gotechcom.com/vi",
          en: "https://gotechcom.com/en",
        },
      },
    },
    {
      url: "https://gotechcom.com/en",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          vi: "https://gotechcom.com/vi",
          en: "https://gotechcom.com/en",
        },
      },
    },
  ];
}
