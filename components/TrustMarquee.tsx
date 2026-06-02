"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  { title: "Officially Licensed Product", body: "Created under official Minecraft licensing, with authentic branding and intellectual property." },
  { title: "Inspired By In-Game Elements", body: "From Chorus Fruit and Golden Apples to the spirit of adventure that defines every Minecraft journey." },
  { title: "Collectible Packaging", body: "Recognisable designs with collectible appeal that resonate instantly with Minecraft fans." },
  { title: "Recognised Worldwide", body: "Built on one of the most iconic entertainment brands in the world, with global consumer recognition." },
  { title: "Built Around Adventure", body: "Every product transforms the creativity and exploration of Minecraft into a real-world beverage experience." },
  { title: "Family Friendly Appeal", body: "Refreshing flavours suitable for all ages, designed for broad consumer appeal across UK retail." },
];

export default function TrustMarquee() {
  return (
    <section
      id="range"
      className="relative isolate bg-bg-100 py-20 lg:py-28 border-y border-line"
    >
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-8 mb-14 items-end">
          <div className="lg:col-span-7">
            <div className="eyebrow mb-4">03 · The Range</div>
            <h2 className="heading-display text-ink-900 text-[40px] md:text-[56px] lg:text-[68px] text-balance">
              Straight from the game <span className="text-primary">into the can.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-lg text-ink-500 leading-relaxed max-w-md">
            Minecraft Drinks are inspired by iconic elements from the Minecraft universe.
            Created under official licensing, every bottle combines recognisable branding,
            collectible appeal and refreshing flavour experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line rounded-3xl overflow-hidden">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="bg-white p-7 lg:p-9"
            >
              <div className="flex items-center gap-3 mb-4">
                <Image src="/Images/New folder/Block_of_Gold_JE6_BE3 (1).webp" alt="" width={22} height={22} className="shrink-0 object-contain" />
                <span className="text-[10px] uppercase tracking-[0.22em] font-semibold text-ink-400">
                  0{i + 1}
                </span>
              </div>
              <h3 className="font-display text-lg font-bold text-ink-900 tracking-tight mb-3">
                {f.title}
              </h3>
              <p className="text-sm text-ink-500 leading-relaxed">{f.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
