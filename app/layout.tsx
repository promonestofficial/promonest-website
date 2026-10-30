import type { Metadata } from "next";
import "./globals.css";
import { Navbar, Footer } from "@/components/site";
export const metadata: Metadata = {
  metadataBase: new URL("https://promonest.vercel.app"),
  title: { default: "PromoNest – Coupon Codes, Promo Codes & Discount Deals", template: "%s | PromoNest" },
  description: "Find coupon codes, promo codes, verified discounts and online shopping deals for popular stores at PromoNest.",
  keywords: ["coupon code", "discount code", "promo codes", "online coupons", "verified coupon codes", "shopping deals", "free shipping codes"],
  openGraph: { title: "PromoNest – Save More. Shop Smarter.", description: "Discover coupon codes and deals from popular stores.", type: "website" },
};
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body><Navbar />{children}<Footer /></body></html>;
}