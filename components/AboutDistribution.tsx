"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Truck, ShieldCheck, BarChart3, Network, ArrowRight, CheckCircle2 } from "lucide-react";

const tabs = [
  {
    id: "supply",
    num: "01",
    short: "Reliable Supply",
    title: "Reliable supply so your shelves are never empty.",
    body: "Demand Distribution maintains consistent stock availability across the UK, ensuring Minecraft Drinks are always ready for your customers.",
    icon: Truck,
    stats: [
      { k: "UK Wide", v: "Coverage" },
      { k: "Official", v: "Distribution partner" },
    ],
    bullets: [
      "Official UK distribution partner for Minecraft Drinks",
      "Nationwide coverage across England, Scotland, Wales and Northern Ireland",
      "Consistent product availability for trade partners",
      "Dedicated stock management and fulfilment",
    ],
  },
  {
    id: "fulfilment",
    num: "02",
    short: "Fast Fulfilment",
    title: "Fast fulfilment built for UK trade.",
    body: "Our fulfilment network is designed for speed and reliability, getting Minecraft Drinks to UK businesses efficiently and on time.",
    icon: BarChart3,
    stats: [
      { k: "Fast", v: "Nationwide despatch" },
      { k: "Direct", v: "Trade access" },
    ],
    bullets: [
      "Fast nationwide despatch for trade orders",
      "Direct access to officially licensed Minecraft Drinks",
      "Streamlined ordering process for UK businesses",
      "Reliable logistics built for consistent delivery",
    ],
  },
  {
    id: "support",
    num: "03",
    short: "Dedicated Support",
    title: "Dedicated trade support from day one.",
    body: "Our team is focused entirely on helping UK businesses succeed with Minecraft Drinks — from first enquiry to long-term partnership.",
    icon: ShieldCheck,
    stats: [
      { k: "Dedicated", v: "Trade support team" },
      { k: "24h", v: "Enquiry response" },
    ],
    bullets: [
      "Dedicated UK trade support team",
      "Fast response to all trade enquiries",
      "Support for retailers, wholesalers and hospitality",
      "Ongoing partnership guidance and account management",
    ],
  },
  {
    id: "growth",
    num: "04",
    short: "Long-Term Growth",
    title: "A partnership built for long-term growth.",
    body: "Demand Distribution is committed to growing the Minecraft Drinks brand across the UK — backed by one of the world's most recognised gaming brands.",
    icon: Network,
    stats: [
      { k: "300M+", v: "Brand fans worldwide" },
      { k: "UK Wide", v: "Brand building" },
    ],
    bullets: [
      "Long-term distribution partnership with Minecraft Drinks",
      "Brand-building support across UK trade channels",
      "Access to one of the world's most recognised gaming brands",
      "Growth opportunity backed by global consumer demand",
    ],
  },
];

export default function AboutDistribution() {
  const [active, setActive] = useState(0);
  const t = tabs[active];
  const Icon = t.icon;

  return (
    <section
      id="capabilities"
      className="relative isolate bg-bg-100 py-24 lg:py-32 border-y border-line overflow-hidden"
    >
      <div className="container-x relative z-10">

        {/* Header row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-14 lg:mb-16"
        >
          {/* Top row: eyebrow + logo badge */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-8 pb-8 border-b border-line">
            <div className="eyebrow">06 · Why Demand Distribution</div>
            <div className="flex items-center gap-3 bg-white border border-line px-5 py-3 self-start sm:self-auto">
              <span className="h-2 w-2 bg-primary" />
              <Image
                src="/Images/DD logo.png"
                alt="Demand Distribution"
                width={110}
                height={44}
                className="object-contain"
              />
              <span className="text-[10px] uppercase tracking-[0.22em] font-bold text-ink-400 pl-3 border-l border-line">
                Official UK Partner
              </span>
            </div>
          </div>

          {/* Headline + description */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-end">
            <div className="lg:col-span-8">
              <h2 className="heading-display text-ink-900 text-[40px] md:text-[52px] lg:text-[64px] text-balance leading-[1.02]">
                A globally recognised brand deserves a{" "}
                <span className="text-primary">strong partner.</span>
              </h2>
            </div>
            <div className="lg:col-span-4">
              <p className="text-base text-ink-500 leading-relaxed">
                Nationwide coverage, modern logistics and dedicated trade support —
                built to grow Minecraft Drinks across the UK.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Tab strip */}
        <div className="border-b border-line">
          <div className="flex overflow-x-auto gap-0 -mb-px scrollbar-none">
            {tabs.map((tab, i) => {
              const TabIcon = tab.icon;
              const isActive = i === active;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActive(i)}
                  className={`group relative flex items-center gap-2.5 px-5 lg:px-8 py-4 lg:py-5 whitespace-nowrap transition-all duration-200 border-b-2 ${
                    isActive
                      ? "border-primary text-ink-900 bg-white"
                      : "border-transparent text-ink-400 hover:text-ink-700 hover:bg-white/60"
                  }`}
                >
                  <span className={`grid h-7 w-7 place-items-center transition-colors ${isActive ? "bg-primary text-white" : "bg-line text-ink-400 group-hover:bg-primary/10 group-hover:text-primary"}`}>
                    <TabIcon size={14} strokeWidth={2.2} />
                  </span>
                  <span className="font-display text-[12px] font-bold uppercase tracking-[0.16em]">
                    {tab.num} · {tab.short}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 lg:mt-12 grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch"
          >
            {/* Left: copy */}
            <div className="lg:col-span-7 bg-white border border-line p-8 lg:p-10 h-full">
              <h3 className="heading-display text-ink-900 text-[28px] md:text-[36px] lg:text-[44px] text-balance leading-[1.05]">
                {t.title}
              </h3>
              <p className="mt-5 text-base text-ink-500 leading-relaxed max-w-lg">
                {t.body}
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-3">
                {t.bullets.map((b) => (
                  <div key={b} className="flex items-start gap-3 bg-bg-100 border border-line p-4">
                    <CheckCircle2 size={15} className="shrink-0 mt-0.5 text-primary" strokeWidth={2.5} />
                    <span className="text-[13px] text-ink-700 leading-relaxed">{b}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* Right: stat card */}
            <div className="lg:col-span-5 h-full">
              <div className="bg-white border border-line p-8 lg:p-9 h-full flex flex-col">
                {/* Icon + label */}
                <div className="flex items-center gap-3 mb-8">
                  <span className="grid h-11 w-11 place-items-center bg-primary/10 text-primary">
                    <Icon size={20} strokeWidth={2} />
                  </span>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.26em] font-bold text-ink-300 mb-0.5">
                      Active · Live
                    </div>
                    <div className="text-[13px] uppercase tracking-[0.18em] font-bold text-ink-900">
                      {t.short}
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="space-y-0 border border-line">
                  {t.stats.map((s, i) => (
                    <div
                      key={s.k}
                      className={`flex items-center justify-between px-6 py-5 ${
                        i !== t.stats.length - 1 ? "border-b border-line" : ""
                      }`}
                    >
                      <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-ink-400">
                        {s.v}
                      </span>
                      <span className="font-display text-2xl lg:text-3xl font-bold text-ink-900 tracking-tight">
                        {s.k}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className="mt-7 flex items-center justify-between w-full px-6 py-4 bg-primary hover:bg-primary/90 transition-colors text-white group"
                >
                  <span className="text-[12px] uppercase tracking-[0.18em] font-bold">
                    Become a Trade Partner
                  </span>
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
