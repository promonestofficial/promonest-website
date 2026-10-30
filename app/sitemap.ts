import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap { const base="https://promonest.vercel.app"; return ["","/coupons","/stores"].map(path=>({url:base+path,lastModified:new Date(),changeFrequency:"daily",priority:path===""?1:0.8})); }
