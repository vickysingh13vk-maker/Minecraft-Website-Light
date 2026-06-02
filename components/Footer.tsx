"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Twitch,
  Globe,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";

const faqs = [
  {
    q: "Who distributes Minecraft Drinks in the UK?",
    a: "Demand Distribution is the official UK distribution partner for Minecraft Drinks.",
  },
  {
    q: "Are Minecraft Drinks officially licensed?",
    a: "Yes. Minecraft Drinks are officially licensed products inspired by the Minecraft universe.",
  },
  {
    q: "How can I request trade pricing?",
    a: "Submit the contact form above and our team will be in touch.",
  },
  {
    q: "Which areas of the UK do you cover?",
    a: "We support businesses across England, Scotland, Wales and Northern Ireland.",
  },
];

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

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="relative bg-white border-b border-line">
      <div className="container-x py-16 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left: heading */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="eyebrow mb-4">FAQ</div>
            <h2 className="heading-display text-ink-900 text-[32px] md:text-[44px] lg:text-[48px] text-balance leading-[1.05]">
              Common questions.
            </h2>
            <p className="mt-4 text-ink-500 text-base leading-relaxed">
              Everything you need to know about Minecraft Drinks and UK distribution.
            </p>
          </div>

          {/* Right: accordion */}
          <div className="lg:col-span-8 space-y-px bg-line border border-line overflow-hidden">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display text-base font-bold text-ink-900 tracking-tight">
                    {f.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-ink-400 transition-transform ${open === i ? "rotate-180" : ""}`}
                  />
                </button>
                {open === i && (
                  <div className="px-6 pb-5 text-ink-500 leading-relaxed border-t border-line pt-4">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Footer() {
  return (
    <>
    <FAQ />
    <footer className="relative bg-bg-100 border-t border-line">
      <div className="container-x py-10 lg:py-12">
        {/* Top row: logo + socials */}
        <div className="flex flex-wrap items-center justify-between gap-6 pb-8 border-b border-line">
          <a href="#" className="flex items-center gap-3">
            <Image src="/Images/LOGO.png" alt="Minecraft Drinks" width={110} height={44} className="object-contain" />
            <span className="text-ink-300 font-light text-xl select-none">×</span>
            <Image src="/Images/DD logo.png" alt="Demand Distribution" width={110} height={44} className="object-contain" />
          </a>
          <div className="flex items-center gap-2">
            {socials.map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="grid h-9 w-9 place-items-center border border-line bg-white text-ink-700 hover:text-primary hover:border-primary transition-colors"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row: legal + links */}
        <div className="pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="text-xs text-ink-400">
            © {new Date().getFullYear()} Demand Distribution Ltd. · Registered in England &amp; Wales No. 14872310
          </div>
          <div className="flex flex-wrap items-center gap-5 text-xs text-ink-500">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
            <a href="#" className="hover:text-primary transition-colors">Trademarks</a>
          </div>
        </div>

        <div className="mt-5 text-[11px] text-ink-300 leading-relaxed max-w-2xl">
          MINECRAFT and the MINECRAFT logo are trademarks of Mojang AB / Microsoft Corp. Used under license. All beverage products are independently formulated and distributed by Demand Distribution Ltd. Not for sale to persons under 16.
        </div>
      </div>
    </footer>
    </>
  );
}
