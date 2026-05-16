"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative isolate bg-white pt-0 pb-20 lg:pb-28">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl bg-ink-900 text-white px-8 md:px-14 lg:px-20 py-16 lg:py-24"
        >
          {/* Soft gradient warmth */}
          <div
            className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/30 blur-[120px] pointer-events-none"
            aria-hidden
          />
          <div
            className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-[120px] pointer-events-none"
            aria-hidden
          />

          {/* Floating product silhouettes */}
          <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 w-1/3 h-3/4 pointer-events-none">
            <div className="relative h-full w-full">
              <Image
                src="/Images/Product (3).png"
                alt=""
                fill
                sizes="33vw"
                className="object-contain object-right drop-shadow-[0_30px_50px_rgba(0,0,0,0.5)]"
              />
            </div>
          </div>

          <div className="relative max-w-2xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.28em] font-semibold text-primary">
                Now Accepting Trade Applications
              </span>
            </div>

            <h2 className="heading-display text-white text-[40px] md:text-[56px] lg:text-[72px] text-balance leading-[1.02]">
              One application.
              <br />
              <span className="text-primary">Every UK channel.</span>
            </h2>

            <p className="mt-7 text-lg md:text-xl text-white/70 leading-relaxed max-w-xl">
              Minecraft Drinks is taking on new stockists every quarter. Apply once and
              Demand Distribution handles the rest — from London to Inverness.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a href="#contact" className="btn-mc">
                Become a Stockist
                <ArrowRight size={16} />
              </a>
              <a
                href="#products"
                className="inline-flex items-center gap-2 text-white font-bold text-[13px] uppercase tracking-[0.06em] hover:text-primary transition-colors"
              >
                View the range
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
