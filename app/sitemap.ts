// app/sitemap.xml/route.ts
import siteConfig from "@/config/site.config";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return siteConfig.navigation.map((item) => ({
    url: `${siteConfig.url}${item.href}`,
    lastModified: new Date(),
    changeFrequency: item.href === "/" ? "monthly" : "yearly" as "monthly" | "yearly",
    priority: item.href === "/" ? 1 : 0.8,
  }));
}