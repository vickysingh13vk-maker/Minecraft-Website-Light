"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ArrowLeft } from "lucide-react";

const slides = [
  {
    id: "partner",
    eyebrow: "05 · UK Distribution Partner",
    heading: "Official UK Distribution Partner.",
    sub: "Demand Distribution × Minecraft Drinks.",
    body: "Demand Distribution is proud to be the official and exclusive UK distribution partner for Minecraft Drinks — built to bring one of the world's most iconic gaming brands to businesses across the United Kingdom.",
    stats: [
      { k: "Official", v: "Licensed UK Partner" },
      { k: "Nationwide", v: "UK Coverage" },
      { k: "Dedicated", v: "Trade Support" },
      { k: "Reliable", v: "Stock Availability" },
    ],
    cta1: { label: "Request Trade Pricing", href: "#contact" },
    cta2: { label: "Become a Stockist", href: "#contact" },
    accent: "#44A148",
  },
  {
    id: "trade",
    eyebrow: "05 · Trade Ready",
    heading: "Stocked. Supported. Delivered.",
    sub: "Built for UK Trade.",
    body: "Our fulfilment network covers England, Scotland, Wales and Northern Ireland. From first enquiry to ongoing account management — our UK-based team ensures Minecraft Drinks are always ready for your shelves.",
    stats: [
      { k: "24h", v: "Enquiry Response" },
      { k: "UK Wide", v: "Fulfilment Network" },
      { k: "300M+", v: "Global Brand Fans" },
      { k: "15+", v: "Years Of Impact" },
    ],
    cta1: { label: "Open Trade Account", href: "#contact" },
    cta2: { label: "Contact The Team", href: "#contact" },
    accent: "#44A148",
  },
];

export default function Partnership() {
  const [active, setActive] = useState(0);
  const s = slides[active];

  return (
    <section id="partnership" className="relative isolate bg-ink-900 border-y border-white/10">

      {/* Top band */}
      <div className="container-x pt-14 pb-10 border-b border-white/10">
        <div className="flex items-center justify-between gap-6">
          <div>
            <div className="text-[11px] uppercase tracking-[0.28em] font-bold text-primary mb-2">
              05 · UK Distribution Partner
            </div>
            <h2 className="heading-display text-white text-[32px] md:text-[44px] lg:text-[52px] text-balance leading-[1.05]">
              Bringing Minecraft Drinks to the{" "}
              <span className="text-primary">United Kingdom.</span>
            </h2>
          </div>
          {/* Slide counter */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <button
              onClick={() => setActive((p) => (p - 1 + slides.length) % slides.length)}
              className="grid h-10 w-10 place-items-center border border-white/20 text-white/60 hover:border-primary hover:text-primary transition-colors"
              aria-label="Previous"
            >
              <ArrowLeft size={16} />
            </button>
            <span className="text-[11px] font-bold text-white/30 tabular-nums">
              {String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </span>
            <button
              onClick={() => setActive((p) => (p + 1) % slides.length)}
              className="grid h-10 w-10 place-items-center border border-white/20 text-white/60 hover:border-primary hover:text-primary transition-colors"
              aria-label="Next"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Main card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={s.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="grid lg:grid-cols-2"
        >
          {/* LEFT: product image — full height, edge-to-edge */}
          <div className="relative min-h-[420px] lg:min-h-[560px] overflow-hidden">
            <Image
              src="/Images/Banner 1.png"
              alt="Minecraft Drinks — Official UK Distribution"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
              priority
            />
            {/* Right-side fade into dark content area */}
            <div
              className="absolute inset-y-0 right-0 w-1/4 pointer-events-none"
              style={{ background: "linear-gradient(to right, transparent, #0E1117)" }}
              aria-hidden
            />
          </div>

          {/* RIGHT: content */}
          <div className="flex flex-col justify-center px-10 lg:px-14 py-14 border-l border-white/10">
            <div className="text-[10px] uppercase tracking-[0.26em] font-bold text-primary mb-6">
              {s.eyebrow}
            </div>

            <h3 className="heading-display text-white text-[28px] lg:text-[40px] leading-[1.05] text-balance">
              {s.heading}
              <br />
              <span className="text-white/40 text-[22px] lg:text-[28px]">{s.sub}</span>
            </h3>

            <p className="mt-6 text-[15px] text-white/55 leading-relaxed max-w-md">
              {s.body}
            </p>

            {/* Stats 2×2 */}
            <div className="mt-8 grid grid-cols-2 gap-px bg-white/10 border border-white/10 max-w-sm">
              {s.stats.map((st) => (
                <div key={st.k} className="bg-ink-900 px-5 py-4">
                  <div className="font-display text-xl font-bold text-white tracking-tight">{st.k}</div>
                  <div className="mt-0.5 text-[9px] uppercase tracking-[0.2em] font-semibold text-white/35">{st.v}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href={s.cta1.href} className="btn-mc">
                {s.cta1.label}
                <ArrowRight size={14} />
              </a>
              <a
                href={s.cta2.href}
                className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.12em] font-bold text-white/50 hover:text-primary transition-colors"
              >
                {s.cta2.label}
                <ArrowRight size={13} />
              </a>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Mobile nav */}
      <div className="lg:hidden container-x py-6 flex items-center gap-4 border-t border-white/10">
        <button
          onClick={() => setActive((p) => (p - 1 + slides.length) % slides.length)}
          className="grid h-9 w-9 place-items-center border border-white/20 text-white/60 hover:border-primary hover:text-primary transition-colors"
        >
          <ArrowLeft size={15} />
        </button>
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-1.5 transition-all duration-300 ${i === active ? "w-8 bg-primary" : "w-1.5 bg-white/20"}`}
            />
          ))}
        </div>
        <button
          onClick={() => setActive((p) => (p + 1) % slides.length)}
          className="grid h-9 w-9 place-items-center border border-white/20 text-white/60 hover:border-primary hover:text-primary transition-colors"
        >
          <ArrowRight size={15} />
        </button>
      </div>

    </section>
  );
}
