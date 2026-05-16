"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Truck,
  ShieldCheck,
  BarChart3,
  Network,
  ArrowRight,
} from "lucide-react";

type Tab = {
  id: string;
  short: string;
  title: string;
  body: string;
  icon: typeof Truck;
  stats: { k: string; v: string }[];
  bullets: string[];
};

const tabs: Tab[] = [
  {
    id: "distribution",
    short: "Distribution",
    title: "48-hour UK distribution, engineered like enterprise software.",
    body: "Two bonded depots in Park Royal and Dartford, 18,000 pallet positions, FSA-compliant cold chain. Same-day London, 48-hour nationwide.",
    icon: Truck,
    stats: [
      { k: "2", v: "Bonded depots" },
      { k: "18,000", v: "Pallet positions" },
      { k: "48h", v: "UK nationwide" },
    ],
    bullets: [
      "Same-day London zone (M25)",
      "Next-day Greater London",
      "48-hour nationwide on orders before 14:00",
      "Customs + onward to ROI and core EU",
    ],
  },
  {
    id: "compliance",
    short: "Compliance",
    title: "BRC AA + SALSA certified, with chain-of-custody you can audit.",
    body: "Full HMRC AWRS registration. FSA-compliant cold chain. BRC AA grade. SALSA-certified food safety. Modern slavery and ethical sourcing statements live.",
    icon: ShieldCheck,
    stats: [
      { k: "AA", v: "BRC Grade" },
      { k: "AWRS", v: "HMRC registered" },
      { k: "100%", v: "Cold-chain audited" },
    ],
    bullets: [
      "BRC Global Standard AA",
      "SALSA certified facilities",
      "HMRC AWRS alcohol wholesaler registration",
      "Sedex SMETA 4-pillar audit on file",
    ],
  },
  {
    id: "dashboard",
    short: "Dashboard",
    title: "A live trade dashboard that thinks like a product.",
    body: "Real-time sell-through, depletion analytics, automated reorder triggers, and live SLA monitoring. One login per partner, every postcode in view.",
    icon: BarChart3,
    stats: [
      { k: "24/7", v: "Partner portal" },
      { k: "99.6%", v: "Fill rate (30d)" },
      { k: "31h", v: "Avg. lead time" },
    ],
    bullets: [
      "Live sell-through by SKU and location",
      "Auto-reorder triggers tied to depletion",
      "Trade pricing and credit terms in-app",
      "REST API + EDI for major mults",
    ],
  },
  {
    id: "network",
    short: "Network",
    title: "Every channel. Every postcode. One UK sales team.",
    body: "Major mults, convenience and independents, premium hospitality, e-commerce platforms, venue activations. One brand story across all of it.",
    icon: Network,
    stats: [
      { k: "2,400+", v: "Active retail" },
      { k: "5", v: "Sales channels" },
      { k: "EU+IE", v: "Onward routes" },
    ],
    bullets: [
      "Mults — Tesco, Sainsbury's, Waitrose, Ocado",
      "Premium — Selfridges, Harrods, Fortnum's",
      "Hospitality — venues, hotels, on-trade",
      "E-com — Amazon UK, brand DTC, marketplaces",
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
      className="relative isolate bg-bg-100 py-24 lg:py-32 border-y border-line"
    >
      <div className="container-x">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="eyebrow mb-4">02 · The Distribution Engine</div>
          <h2 className="heading-display text-ink-900 text-[40px] md:text-[56px] lg:text-[64px] text-balance">
            UK distribution, <span className="text-primary">built like a platform.</span>
          </h2>
          <p className="mt-6 text-lg text-ink-500 leading-relaxed max-w-2xl">
            Bonded warehousing. Live trade analytics. Every UK channel. One partner from London
            to every postcode.
          </p>
        </motion.div>

        {/* Tab strip */}
        <div className="mt-12 lg:mt-16 border-b border-line">
          <div className="flex overflow-x-auto gap-1 -mb-px scrollbar-none">
            {tabs.map((tab, i) => {
              const TabIcon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActive(i)}
                  className={`group relative flex items-center gap-3 px-5 lg:px-7 py-4 lg:py-5 whitespace-nowrap transition-colors ${
                    i === active
                      ? "border-b-2 border-primary text-ink-900"
                      : "border-b-2 border-transparent text-ink-400 hover:text-ink-700"
                  }`}
                >
                  <TabIcon size={18} strokeWidth={2} />
                  <span className="font-display text-[13px] font-bold uppercase tracking-[0.16em]">
                    0{i + 1} · {tab.short}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active tab panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 lg:mt-14 grid lg:grid-cols-12 gap-10 lg:gap-16 items-start"
          >
            <div className="lg:col-span-7">
              <h3 className="heading-display text-ink-900 text-3xl md:text-4xl lg:text-5xl text-balance leading-tight">
                {t.title}
              </h3>
              <p className="mt-6 text-lg text-ink-500 leading-relaxed max-w-xl">{t.body}</p>

              <ul className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-4 max-w-xl">
                {t.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-ink-700">
                    <span className="mt-2 block h-1.5 w-1.5 bg-primary shrink-0 rounded-full" />
                    <span className="text-[15px] leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>

              <a href="#contact" className="arrow-link mt-10">
                Open Trade Account
              </a>
            </div>

            {/* Stat panel */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="mc-frame p-7 lg:p-9">
                <div className="flex items-center gap-3 mb-7">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-primary/10 text-primary">
                    <Icon size={20} strokeWidth={2.2} />
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-ink-400">
                    {t.short} · Live
                  </span>
                </div>

                <div className="space-y-5 pt-2 border-t border-line">
                  {t.stats.map((s, i) => (
                    <div
                      key={s.k}
                      className={`flex items-baseline justify-between ${
                        i !== t.stats.length - 1 ? "pb-5 border-b border-line" : ""
                      }`}
                    >
                      <span className="text-[13px] uppercase tracking-[0.18em] font-semibold text-ink-500">
                        {s.v}
                      </span>
                      <span className="font-display text-3xl lg:text-4xl font-bold text-ink-900 tracking-tight">
                        {s.k}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center justify-between w-full px-5 py-4 bg-ink-900 hover:bg-primary transition-colors text-white rounded-full group"
                >
                  <span className="text-[13px] uppercase tracking-[0.16em] font-bold">
                    Talk to the trade desk
                  </span>
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
