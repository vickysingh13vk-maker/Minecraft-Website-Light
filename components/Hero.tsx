"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

type Slide = {
  tag: string;
  title: string;
  highlight: string;
  body: string;
  src: string;
  alt: string;
  bg: string;
  accent: string;
  textColor: string;
};

const slides: Slide[] = [
  {
    tag: "New · Q2 2026",
    title: "Lime",
    highlight: "Lightning.",
    body: "Charged citrus hydration. Creeper-green craft. The flagship UK SKU.",
    src: "/Images/Product (3).png",
    alt: "Minecraft Drinks Lime Lightning bottle",
    bg: "linear-gradient(135deg, #F7FBF1 0%, #E9F5DE 50%, #D7EBC1 100%)",
    accent: "#6CC04A",
    textColor: "#0A0A0A",
  },
  {
    tag: "Signature SKU",
    title: "Strawberry",
    highlight: "Slam.",
    body: "Pink pixel pop. Real berry. Built for the on-the-go shelf.",
    src: "/Images/Product (1).png",
    alt: "Minecraft Drinks Strawberry Slam bottle",
    bg: "linear-gradient(135deg, #FFF1F5 0%, #FFD9E4 50%, #FFB7CD 100%)",
    accent: "#E75480",
    textColor: "#0A0A0A",
  },
  {
    tag: "Top-selling",
    title: "Caramel",
    highlight: "Chug.",
    body: "Warm caramel. Smooth pour. The hospitality favourite.",
    src: "/Images/Product (2).png",
    alt: "Minecraft Drinks Caramel Chug bottle",
    bg: "linear-gradient(135deg, #FFF6EC 0%, #FFE0BD 50%, #FFC78A 100%)",
    accent: "#E29E2B",
    textColor: "#0A0A0A",
  },
  {
    tag: "Limited Edition",
    title: "Chorus",
    highlight: "Fruit.",
    body: "Golden apple. Melon. The premium 330ml can.",
    src: "/Images/Product (4).png",
    alt: "Minecraft Drinks Chorus Fruit can",
    bg: "linear-gradient(135deg, #EFF6FD 0%, #C9E0F5 50%, #9FC7EB 100%)",
    accent: "#6CA4D9",
    textColor: "#0A0A0A",
  },
];

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const next = useCallback(() => setIdx((i) => (i + 1) % slides.length), []);
  const prev = useCallback(() => setIdx((i) => (i - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const t = setInterval(next, 6500);
    return () => clearInterval(t);
  }, [next]);

  const s = slides[idx];

  return (
    <section className="relative isolate w-full pt-24 pb-0">
      <div className="container-x">
        <div
          className="relative overflow-hidden rounded-3xl"
          style={{ background: s.bg, transition: "background 700ms ease" }}
        >
          {/* Slide content */}
          <div className="relative grid lg:grid-cols-2 gap-6 lg:gap-10 px-6 md:px-12 lg:px-16 pt-16 lg:pt-24 pb-12 lg:pb-16 min-h-[640px] lg:min-h-[720px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`copy-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col justify-center max-w-xl"
              >
                <div className="inline-flex items-center gap-3 mb-6">
                  <span
                    className="inline-block h-2 w-2 rounded-full"
                    style={{ background: s.accent }}
                  />
                  <span className="text-[11px] uppercase tracking-[0.28em] font-semibold text-ink-700">
                    {s.tag}
                  </span>
                </div>

                <h1
                  className="heading-display text-[64px] sm:text-[80px] lg:text-[96px] xl:text-[112px]"
                  style={{ color: s.textColor }}
                >
                  {s.title}
                  <br />
                  <span style={{ color: s.accent }}>{s.highlight}</span>
                </h1>

                <p className="mt-7 text-lg md:text-xl text-ink-600 leading-relaxed max-w-md">
                  {s.body}
                </p>

                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <a href="#products" className="btn-mc">
                    Shop Range
                    <ArrowRight size={16} />
                  </a>
                  <a href="#about" className="arrow-link">
                    Learn More
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Product image */}
            <div className="relative flex items-center justify-center min-h-[420px] lg:min-h-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`img-${idx}`}
                  initial={{ opacity: 0, scale: 0.92, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="relative w-full h-[500px] lg:h-[620px]"
                >
                  {/* Soft halo */}
                  <div
                    className="absolute inset-x-0 bottom-12 mx-auto h-32 w-3/4 rounded-full blur-3xl opacity-40"
                    style={{ background: s.accent }}
                    aria-hidden
                  />
                  <Image
                    src={s.src}
                    alt={s.alt}
                    fill
                    priority={idx === 0}
                    sizes="(max-width: 1024px) 80vw, 50vw"
                    className="object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.2)]"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Controls bar */}
          <div className="absolute bottom-5 left-0 right-0 px-6 md:px-12 lg:px-16 flex items-center justify-between">
            {/* Slide dots + counter */}
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs text-ink-700 font-semibold tabular-nums">
                {String(idx + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
              </span>
              <div className="flex items-center gap-1.5">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIdx(i)}
                    aria-label={`Slide ${i + 1}`}
                    className={`h-1 transition-all duration-400 ${
                      i === idx ? "w-10 bg-ink-900" : "w-5 bg-ink-300 hover:bg-ink-500"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                aria-label="Previous slide"
                className="grid h-11 w-11 place-items-center rounded-full border border-ink-900/15 bg-white/70 hover:bg-white hover:border-ink-900/40 transition-all backdrop-blur"
              >
                <ChevronLeft size={18} className="text-ink-900" />
              </button>
              <button
                onClick={next}
                aria-label="Next slide"
                className="grid h-11 w-11 place-items-center rounded-full border border-ink-900/15 bg-white/70 hover:bg-white hover:border-ink-900/40 transition-all backdrop-blur"
              >
                <ChevronRight size={18} className="text-ink-900" />
              </button>
            </div>
          </div>
        </div>

        {/* Trust ticker below hero */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-px bg-line rounded-2xl overflow-hidden border border-line">
          {[
            { k: "2,400+", v: "UK Retail Locations" },
            { k: "48h", v: "Nationwide Despatch" },
            { k: "BRC AA", v: "Certified Supply" },
            { k: "Mojang ✓", v: "Officially Licensed" },
          ].map((b) => (
            <div key={b.k} className="bg-white p-5 lg:p-6">
              <div className="font-display text-2xl lg:text-3xl font-bold text-ink-900 tracking-tight">
                {b.k}
              </div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.2em] font-semibold text-ink-400">
                {b.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
