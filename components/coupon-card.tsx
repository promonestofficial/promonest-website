"use client";
import { useState } from "react";
export type Coupon = {id:number;store:string;logo:string;offer:string;detail:string;code:string;kind:string;verified:boolean;expires:string};
export function CouponCard({coupon}:{coupon:Coupon}) {
 const [copied,setCopied]=useState(false);
 async function copy(){try{await navigator.clipboard.writeText(coupon.code);setCopied(true);setTimeout(()=>setCopied(false),1800)}catch{setCopied(false)}}
 return <article className="coupon-card"><div className="coupon-top"><div className="store-logo">{coupon.logo}</div><div className="coupon-store"><b>{coupon.store}</b><span>{coupon.verified?"✓ Verified offer":"Community offer"}</span></div><span className="coupon-kind">{coupon.kind}</span></div><h3>{coupon.offer}</h3><p>{coupon.detail}</p><div className="coupon-bottom"><div><small>Promo code</small><strong className="code">{coupon.code}</strong></div><button className="copy-btn" onClick={copy}>{copied?"Copied ✓":"Copy code"}</button></div><div className="coupon-expiry">⌛ Expires {coupon.expires}</div></article>
}