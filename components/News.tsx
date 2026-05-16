"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

type Post = {
  src: string;
  category: string;
  date: string;
  read: string;
  title: string;
  excerpt: string;
};

const posts: Post[] = [
  {
    src: "/Images/Product (3).png",
    category: "Launch",
    date: "May 12, 2026",
    read: "4 min read",
    title: "Lime Lightning hits 240 UK convenience stores",
    excerpt:
      "Phase-one trial closes with a +187% reorder rate and a national roll-out scheduled for Q3.",
  },
  {
    src: "/Images/Product (4).png",
    category: "Limited Drop",
    date: "Apr 28, 2026",
    read: "3 min read",
    title: "Chorus Fruit: golden apple meets premium can format",
    excerpt:
      "The first 330ml can SKU in the range. Limited launch via Selfridges, Harrods and Boxpark.",
  },
  {
    src: "/Images/Product (2).png",
    category: "Trade",
    date: "Apr 14, 2026",
    read: "5 min read",
    title: "Demand Distribution opens Dartford bonded depot",
    excerpt:
      "Second UK depot doubles our pallet positions to 18,000 and unlocks ROI + EU onward handling.",
  },
];

export default function News() {
  return (
    <section id="news" className="relative isolate bg-bg-100 py-20 lg:py-28 border-y border-line">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="eyebrow mb-4">News &amp; Trade Updates</div>
            <h2 className="heading-display text-ink-900 text-[40px] md:text-[52px] lg:text-[56px] text-balance">
              The latest from the <span className="text-primary">UK trade desk.</span>
            </h2>
          </div>
          <a href="#" className="arrow-link">
            View all updates
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
          {posts.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="group mc-card overflow-hidden flex flex-col"
            >
              <div className="relative aspect-[4/3] bg-bg-200 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="relative h-full w-full max-w-[180px]">
                    <Image
                      src={p.src}
                      alt={p.title}
                      fill
                      sizes="240px"
                      className="object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,0.18)] transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur border border-line rounded-full">
                  <span className="text-[10px] uppercase tracking-[0.22em] font-semibold text-ink-700">
                    {p.category}
                  </span>
                </div>
              </div>

              <div className="p-6 lg:p-7 flex-1 flex flex-col bg-white">
                <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] font-semibold text-ink-400">
                  <span>{p.date}</span>
                  <span>·</span>
                  <span>{p.read}</span>
                </div>
                <h3 className="mt-3 font-display text-xl font-bold text-ink-900 tracking-tight leading-snug">
                  {p.title}
                </h3>
                <p className="mt-3 text-ink-500 leading-relaxed text-[15px] flex-1">
                  {p.excerpt}
                </p>
                <div className="mt-6 pt-5 border-t border-line flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-[0.22em] font-bold text-primary">
                    Read article
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
