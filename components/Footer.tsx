"use client";

import { useState } from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Twitch,
  Globe,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const cols = [
  {
    title: "Drinks",
    links: ["Lime Lightning", "Strawberry Slam", "Caramel Chug", "Chorus Fruit", "All SKUs"],
  },
  {
    title: "Trade",
    links: ["Become a stockist", "Trade portal", "Volume calculator", "Marketing assets", "Compliance"],
  },
  {
    title: "Company",
    links: ["About", "Press", "Sustainability", "Careers", "Contact"],
  },
  {
    title: "Support",
    links: ["Help centre", "Order status", "Returns", "Cold chain", "Modern slavery"],
  },
];

const socials = [
  { Icon: Twitter, label: "Twitter / X" },
  { Icon: Instagram, label: "Instagram" },
  { Icon: Youtube, label: "YouTube" },
  { Icon: Twitch, label: "Twitch" },
  { Icon: Facebook, label: "Facebook" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <footer className="relative bg-bg-100 border-t border-line">
      {/* Email signup band */}
      <div className="border-b border-line">
        <div className="container-x py-12 lg:py-16">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="eyebrow mb-3">Stay In Trade</div>
              <h3 className="heading-display text-ink-900 text-3xl md:text-4xl lg:text-5xl text-balance">
                New launches. New depots. <span className="text-primary">First.</span>
              </h3>
              <p className="mt-4 text-ink-500 max-w-md">
                Sign up for trade-only product launches, volume pricing, and quarterly UK
                allocation windows.
              </p>
            </div>
            <div className="lg:col-span-6">
              {!subscribed ? (
                <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your work email"
                    required
                    className="flex-1 bg-white border border-line rounded-full px-6 py-4 text-ink-900 placeholder:text-ink-300 outline-none focus:border-primary focus:ring-2 focus:ring-primary/15"
                  />
                  <button type="submit" className="btn-mc">
                    Subscribe
                    <ArrowRight size={16} />
                  </button>
                </form>
              ) : (
                <div className="flex items-center gap-3 bg-white border border-line rounded-2xl px-5 py-4">
                  <CheckCircle2 className="text-primary" size={22} />
                  <span className="text-ink-900 font-medium">
                    You&apos;re on the list. Watch your inbox.
                  </span>
                </div>
              )}
              <p className="mt-3 text-xs text-ink-400">
                By subscribing you agree to our privacy policy. No spam, unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-x py-16 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-4">
            <a href="#" className="inline-flex items-center gap-3">
              <div className="grid place-items-center h-9 w-9 voxel-edge bg-mc-green rounded">
                <span className="font-minecraft text-white text-[12px] leading-none">M</span>
              </div>
              <div className="leading-none">
                <div className="font-display text-base font-bold uppercase tracking-tight text-ink-900">
                  Demand <span className="text-primary">×</span> Minecraft
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.28em] text-ink-400 font-medium">
                  Drinks · UK Distribution
                </div>
              </div>
            </a>
            <p className="mt-6 max-w-md text-ink-500 leading-relaxed">
              Demand Distribution Ltd. is the official UK distribution partner for Minecraft
              Drinks. Headquartered in Canary Wharf, serving every postcode in the UK.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 max-w-sm">
              {[
                { k: "BRC AA", v: "Certified Supply" },
                { k: "AWRS", v: "HMRC Registered" },
                { k: "SALSA", v: "Food Safety" },
                { k: "B-Corp", v: "Pending 2026" },
              ].map((c) => (
                <div
                  key={c.k}
                  className="bg-white border border-line rounded-xl px-3 py-2"
                >
                  <div className="font-display text-sm font-bold text-ink-900 tracking-tight">
                    {c.k}
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.18em] font-semibold text-ink-400">
                    {c.v}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {cols.map((c) => (
              <div key={c.title}>
                <div className="text-[11px] uppercase tracking-[0.22em] font-bold text-ink-900 mb-4">
                  {c.title}
                </div>
                <ul className="space-y-3">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-sm text-ink-500 hover:text-primary transition-colors"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Social + language */}
        <div className="mt-14 pt-8 border-t border-line flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            {socials.map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-line bg-white text-ink-700 hover:text-primary hover:border-primary transition-colors"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3 text-sm text-ink-500">
            <Globe size={16} className="text-ink-400" />
            <span className="text-xs uppercase tracking-[0.18em] font-semibold">
              English (United Kingdom)
            </span>
          </div>
        </div>

        {/* Legal */}
        <div className="mt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="text-xs text-ink-400">
            © {new Date().getFullYear()} Demand Distribution Ltd. · Registered in England &amp;
            Wales No. 14872310
          </div>
          <div className="flex items-center gap-6 text-xs text-ink-500">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
            <a href="#" className="hover:text-primary transition-colors">Trademarks</a>
          </div>
        </div>

        <div className="mt-8 text-[11px] text-ink-300 leading-relaxed max-w-3xl">
          MINECRAFT and the MINECRAFT logo are trademarks of Mojang AB / Microsoft Corp. Used
          under license. All beverage products are independently formulated and distributed by
          Demand Distribution Ltd. Not for sale to persons under 16.
        </div>
      </div>
    </footer>
  );
}
