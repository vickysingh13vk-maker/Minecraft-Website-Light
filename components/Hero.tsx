"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate w-full pt-24 pb-0">
      <div className="relative w-full overflow-hidden min-h-[680px] lg:min-h-[820px] bg-bg-100">
        {/* Background Minecraft landscape */}
        <Image
          src="/Images/Hero 2.png"
          alt="Minecraft landscape with grass blocks and creeper"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Legibility overlay — darken bottom-left for copy */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.3) 45%, rgba(0,0,0,0) 75%)",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-x-0 bottom-0 h-1/2 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.35) 100%)",
          }}
          aria-hidden
        />

        <div className="relative mx-auto w-full max-w-[1600px]">
          <div className="relative grid lg:grid-cols-12 items-center px-6 md:px-12 lg:px-20 xl:px-28 pt-16 lg:pt-28 pb-20 lg:pb-24 min-h-[680px] lg:min-h-[820px]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 flex flex-col justify-center max-w-2xl lg:col-span-7"
            >
              <div className="inline-flex items-center gap-3 mb-6 self-start px-4 py-2 bg-white/15 backdrop-blur border border-white/25 rounded-full">
                <span className="inline-block h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span className="text-[11px] uppercase tracking-[0.28em] font-semibold text-white">
                  Officially Licensed Minecraft Drinks
                </span>
              </div>

              <h1
                className="heading-display text-white text-[40px] sm:text-[56px] lg:text-[72px] xl:text-[84px]"
                style={{ textShadow: "0 6px 30px rgba(0,0,0,0.55)" }}
              >
                Taste The
                <br />
                Adventure.
              </h1>

              <p
                className="mt-7 text-lg md:text-xl text-white/90 leading-relaxed max-w-xl font-medium"
                style={{ textShadow: "0 2px 12px rgba(0,0,0,0.55)" }}
              >
                The officially licensed Minecraft beverage range has arrived in the United Kingdom.
                Inspired by one of the world&apos;s most iconic gaming universes, Minecraft Drinks transform
                creativity, exploration and adventure into a unique beverage experience. Now available
                nationwide through Demand Distribution, the official UK distribution partner for
                Minecraft Drinks.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a href="#products" className="btn-mc">
                  Explore The Range
                  <ArrowRight size={16} />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/40 text-white font-bold text-[13px] uppercase tracking-[0.06em] hover:bg-white hover:text-ink-900 transition-colors"
                >
                  Request Trade Pricing
                  <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>

            {/* Floating product — Chorus Fruit can, right column, vertically centered */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="hidden md:flex relative z-10 lg:col-span-5 items-center justify-center lg:justify-end pointer-events-none mt-10 lg:mt-0"
            >
              <div className="relative">
                <div
                  className="absolute inset-0 -m-12 bg-primary/30 blur-3xl"
                  aria-hidden
                />
                <motion.div
                  animate={{ y: [0, -12, 0], rotate: [-2, 2, -2] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative h-[360px] w-[180px] lg:h-[520px] lg:w-[260px]"
                >
                  <Image
                    src="/Images/Product (4).png"
                    alt="Minecraft Drinks Chorus Fruit can"
                    fill
                    priority
                    sizes="(max-width: 1024px) 200px, 280px"
                    className="object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.55)]"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Trust ticker below hero */}
      <div className="container-x">
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-px bg-line rounded-2xl overflow-hidden border border-line">
          {[
            { k: "Licensed", v: "Officially Licensed Minecraft Product" },
            { k: "UK Wide", v: "Available Across The UK" },
            { k: "Demand Dist.", v: "Distributed By Demand Distribution" },
            { k: "Mojang ✓", v: "Official License Holder" },
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
