"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

type Tile = {
  src: string;
  alt: string;
  tag: string;
  name: string;
  flavor: string;
  body: string;
  bg: string;
  accent: string;
};

const tiles: Tile[] = [
  {
    src: "/Images/Product (3).png",
    alt: "Minecraft Drinks Lime Lightning bottle",
    tag: "Flagship",
    name: "Lime Lightning",
    flavor: "Citrus · Electrolyte",
    body: "British spring water. Charged citrus. The creeper-green flagship.",
    bg: "linear-gradient(180deg, #F7FBF1 0%, #E9F5DE 100%)",
    accent: "#6CC04A",
  },
  {
    src: "/Images/Product (1).png",
    alt: "Minecraft Drinks Strawberry Slam bottle",
    tag: "Signature",
    name: "Strawberry Slam",
    flavor: "Real strawberry",
    body: "Pink pixel pop. Real berry. The hospitality floor's favourite.",
    bg: "linear-gradient(180deg, #FFF1F5 0%, #FFD9E4 100%)",
    accent: "#E75480",
  },
  {
    src: "/Images/Product (2).png",
    alt: "Minecraft Drinks Caramel Chug bottle",
    tag: "Top-selling",
    name: "Caramel Chug",
    flavor: "Warm caramel",
    body: "Smooth pour. Soft warmth. The independents' top reorder.",
    bg: "linear-gradient(180deg, #FFF6EC 0%, #FFE0BD 100%)",
    accent: "#E29E2B",
  },
  {
    src: "/Images/Product (4).png",
    alt: "Minecraft Drinks Chorus Fruit can",
    tag: "Limited",
    name: "Chorus Fruit",
    flavor: "Golden apple · Melon",
    body: "Premium 330ml can. Limited release. Built for the cooler door.",
    bg: "linear-gradient(180deg, #EFF6FD 0%, #C9E0F5 100%)",
    accent: "#6CA4D9",
  },
];

export default function FeaturedProducts() {
  return (
    <section id="products" className="relative isolate bg-white py-20 lg:py-28">
      <div className="container-x">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="eyebrow mb-4">The Range · UK</div>
            <h2 className="heading-display text-ink-900 text-[40px] md:text-[56px] lg:text-[68px] text-balance">
              Four flagships. <span className="text-primary">Every UK shelf.</span>
            </h2>
          </div>
          <a href="#contact" className="arrow-link">
            Request trade pack
          </a>
        </div>

        {/* 4-up grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {tiles.map((t, i) => (
            <motion.a
              key={t.name}
              href="#contact"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              className="group flex flex-col mc-card overflow-hidden"
            >
              {/* Product visual */}
              <div
                className="relative aspect-[4/5] overflow-hidden"
                style={{ background: t.bg }}
              >
                <div
                  className="absolute inset-x-0 bottom-10 mx-auto h-24 w-3/5 rounded-full blur-3xl opacity-40"
                  style={{ background: t.accent }}
                />
                <div className="absolute inset-0 flex items-end justify-center pb-8 transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="relative h-[78%] w-[55%]">
                    <Image
                      src={t.src}
                      alt={t.alt}
                      fill
                      sizes="(max-width: 768px) 80vw, 22vw"
                      className="object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,0.18)]"
                    />
                  </div>
                </div>
                {/* Tag chip */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 bg-white/85 backdrop-blur border border-line rounded-full">
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ background: t.accent }}
                  />
                  <span className="text-[10px] uppercase tracking-[0.22em] font-semibold text-ink-700">
                    {t.tag}
                  </span>
                </div>
              </div>

              {/* Caption */}
              <div className="p-6 bg-white flex-1 flex flex-col">
                <div className="text-[11px] uppercase tracking-[0.22em] font-semibold text-ink-400">
                  {t.flavor}
                </div>
                <h3 className="mt-2 font-display text-2xl font-bold text-ink-900 tracking-tight">
                  {t.name}
                </h3>
                <p className="mt-2 text-sm text-ink-500 leading-relaxed line-clamp-2 flex-1">
                  {t.body}
                </p>
                <div className="mt-5 pt-4 border-t border-line flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-[0.22em] font-bold text-primary">
                    Order cases
                  </span>
                  <ArrowRight
                    size={16}
                    className="text-ink-400 group-hover:text-primary group-hover:translate-x-1 transition-all"
                  />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
