import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/kinalatunk", "/galeria", "/programok", "/kontakt"].map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: path === "/programok" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
