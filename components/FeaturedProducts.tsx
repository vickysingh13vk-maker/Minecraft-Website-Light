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
  highlights: { k: string; v: string }[];
  bg: string;
  accent: string;
};

const tiles: Tile[] = [
  {
    src: "/Images/Product (4).png",
    alt: "Minecraft Drinks Lime Lightning can",
    tag: "Flagship",
    name: "Lime Lightning",
    flavor: "Inspired by Chorus Fruit & Golden Apple",
    body: "A refreshing flavour inspired by creativity, exploration and discovery.",
    highlights: [
      { k: "30%", v: "Apple Juice" },
      { k: "0g", v: "Added Sugar" },
      { k: "2.8g", v: "Sugar Per 100ml" },
    ],
    bg: "linear-gradient(180deg, #F7FBF1 0%, #E9F5DE 100%)",
    accent: "#6CC04A",
  },
  {
    src: "/Images/Product (4).png",
    alt: "Minecraft Drinks Strawberry Slam can",
    tag: "Signature",
    name: "Strawberry Slam",
    flavor: "Minecraft Inspired Flavour Experience",
    body: "A vibrant fruit-forward flavour designed to deliver a memorable Minecraft-inspired experience.",
    highlights: [
      { k: "30%", v: "Apple Juice" },
      { k: "0g", v: "Added Sugar" },
      { k: "Family", v: "Friendly" },
    ],
    bg: "linear-gradient(180deg, #FFF1F5 0%, #FFD9E4 100%)",
    accent: "#E75480",
  },
];

export default function FeaturedProducts() {
  return (
    <section id="products" className="relative isolate bg-white py-20 lg:py-28">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-14">
          <div className="lg:col-span-7">
            <div className="eyebrow mb-4">04 · Choose Your Adventure</div>
            <h2 className="heading-display text-ink-900 text-[40px] md:text-[56px] lg:text-[68px] text-balance">
              Inspired by Minecraft. <span className="text-primary">Crafted for adventure.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-6 justify-end">
            <p className="text-base text-ink-500 leading-relaxed">
              The Minecraft Drinks range combines distinctive flavours with one of the world&apos;s most
              recognisable entertainment brands.
            </p>
            <a href="#contact" className="btn-mc self-start">
              Get More Info
              <ArrowRight size={14} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-7">
          {tiles.map((t, i) => (
            <motion.a
              key={t.name}
              href="#contact"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              className="group grid grid-cols-1 sm:grid-cols-[42%_58%] mc-card overflow-hidden sm:min-h-[380px]"
            >
              <div
                className="relative overflow-hidden min-h-[280px] sm:min-h-0"
                style={{ background: t.bg }}
              >
                <div
                  className="absolute inset-x-0 bottom-10 mx-auto h-32 w-3/5 rounded-full blur-3xl opacity-40"
                  style={{ background: t.accent }}
                />
                <div className="absolute inset-0 flex items-center justify-center p-8 transition-transform duration-500 group-hover:scale-105">
                  <div className="relative h-[88%] w-[60%]">
                    <Image
                      src={t.src}
                      alt={t.alt}
                      fill
                      sizes="(max-width: 768px) 80vw, 40vw"
                      className="object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,0.2)]"
                    />
                  </div>
                </div>
                <div className="absolute top-5 left-5 inline-flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur border border-line">
                  <span
                    className="h-1.5 w-1.5"
                    style={{ background: t.accent }}
                  />
                  <span className="text-[10px] uppercase tracking-[0.22em] font-semibold text-ink-700">
                    {t.tag}
                  </span>
                </div>
              </div>

              <div className="p-6 lg:p-8 bg-white flex flex-col justify-center">
                <div className="text-[10px] uppercase tracking-[0.22em] font-semibold text-ink-400">
                  {t.flavor}
                </div>
                <h3 className="mt-2 font-display text-2xl lg:text-3xl font-bold text-ink-900 tracking-tight">
                  {t.name}
                </h3>
                <p className="mt-3 text-sm text-ink-500 leading-relaxed">
                  {t.body}
                </p>

                <div className="mt-5 grid grid-cols-3 gap-px bg-line border border-line">
                  {t.highlights.map((s) => (
                    <div key={s.k} className="bg-white p-2.5">
                      <div className="font-display text-base font-bold text-ink-900 tracking-tight">
                        {s.k}
                      </div>
                      <div className="text-[9px] uppercase tracking-[0.18em] font-semibold text-ink-400">
                        {s.v}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-4">
                  <span className="btn-mc text-[12px] px-5 py-3">View Info <ArrowRight size={13} /></span>
                  <span className="arrow-link text-[11px]">Request Pricing</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
