"use client";

/* Spotlight A — full-bleed product hero, Suorin-style featured block.
   Reversed layout: copy left, product right, warm parchment band. */

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function AboutDrinks() {
  return (
    <section
      id="about"
      className="relative isolate bg-white pt-20 lg:pt-28 pb-6"
    >
      <div className="container-x">
        {/* Eyebrow header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-12 items-end">
          <div className="lg:col-span-7">
            <div className="eyebrow mb-4">01 · Minecraft Drinks</div>
            <h2 className="heading-display text-ink-900 text-[40px] md:text-[56px] lg:text-[68px] text-balance">
              A range built around the <span className="text-primary">world&apos;s biggest game.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-lg text-ink-500 leading-relaxed max-w-md">
            Four flagship UK SKUs. Officially licensed by Mojang. Real ingredients, no
            gaming-energy sugar bombs. Built to sell-through on real shelves.
          </p>
        </div>

        {/* Featured product block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="relative grid lg:grid-cols-2 rounded-3xl overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #F7FBF1 0%, #E9F5DE 40%, #D7EBC1 100%)",
          }}
        >
          {/* Copy */}
          <div className="relative flex flex-col justify-center p-10 lg:p-16">
            <span className="inline-flex items-center gap-2 mb-5 self-start px-3 py-1.5 bg-white/70 backdrop-blur border border-line rounded-full">
              <span className="h-1.5 w-1.5 rounded-full bg-mc-green" />
              <span className="text-[10px] uppercase tracking-[0.22em] font-semibold text-ink-700">
                Flagship SKU · Q2 2026
              </span>
            </span>
            <h3 className="heading-display text-ink-900 text-[48px] md:text-[64px] lg:text-[80px] leading-[0.95]">
              Lime
              <br />
              <span className="text-mc-green">Lightning.</span>
            </h3>
            <p className="mt-6 text-lg text-ink-600 leading-relaxed max-w-md">
              The flagship. Hyper-pure British spring water, charged with electrolytes and a
              creeper-green citrus zest. The #1 SKU in the UK trial across 240 convenience stores.
            </p>

            {/* Stat strip */}
            <div className="mt-8 grid grid-cols-3 gap-px bg-ink-900/10 rounded-2xl overflow-hidden border border-ink-900/10 max-w-md">
              {[
                { k: "0g", v: "Added sugar" },
                { k: "330ml", v: "Glass + can" },
                { k: "+187%", v: "Avg. reorder" },
              ].map((s) => (
                <div key={s.k} className="bg-white/60 backdrop-blur p-4">
                  <div className="font-display text-xl font-bold text-ink-900 tracking-tight">
                    {s.k}
                  </div>
                  <div className="mt-0.5 text-[10px] uppercase tracking-[0.18em] font-semibold text-ink-500">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-5">
              <a href="#contact" className="btn-mc">
                Order Cases
                <ArrowRight size={16} />
              </a>
              <a href="#products" className="arrow-link">
                See full range
              </a>
            </div>
          </div>

          {/* Product image */}
          <div className="relative min-h-[440px] lg:min-h-[640px] flex items-center justify-center p-8 lg:p-16">
            <div className="absolute inset-x-0 bottom-12 mx-auto h-32 w-3/5 rounded-full blur-3xl opacity-30 bg-mc-green" />
            <div className="relative w-full h-full max-w-md">
              <Image
                src="/Images/Product (3).png"
                alt="Minecraft Drinks Lime Lightning bottle"
                fill
                sizes="(max-width: 1024px) 80vw, 40vw"
                className="object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.18)]"
              />
            </div>

            {/* Floating spec chip */}
            <div className="absolute top-8 right-8 lg:top-12 lg:right-12 bg-white/90 backdrop-blur border border-line rounded-2xl px-4 py-3 shadow-soft">
              <div className="text-[10px] uppercase tracking-[0.22em] font-semibold text-ink-400">
                Sell-through
              </div>
              <div className="mt-1 font-display text-2xl font-bold text-ink-900 tracking-tight">
                +187%
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
