import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://gotechcom.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          vi: "https://gotechcom.com",
          en: "https://gotechcom.com",
        },
      },
    },
  ];
}
