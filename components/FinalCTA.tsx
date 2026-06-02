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

          {/* Full-height case image — right half */}
          <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none">
            <Image
              src="/Images/Case.jpg"
              alt=""
              fill
              sizes="50vw"
              className="object-cover object-left"
            />
            {/* Left fade into dark bg */}
            <div
              className="absolute inset-y-0 left-0 w-1/3"
              style={{ background: "linear-gradient(to right, #0E1117, transparent)" }}
              aria-hidden
            />
          </div>

          <div className="relative max-w-2xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.28em] font-semibold text-primary">
                08 · The Adventure Starts Here
              </span>
            </div>

            <h2 className="heading-display text-white text-[40px] md:text-[56px] lg:text-[72px] text-balance leading-[1.02]">
              The Adventure
              <br />
              <span className="text-primary">Starts Here.</span>
            </h2>

            <p className="mt-7 text-lg md:text-xl text-white/70 leading-relaxed max-w-xl">
              One of the world&apos;s most recognised gaming brands. One official UK distribution
              partner. One opportunity to be part of the future of Minecraft Drinks in the
              United Kingdom. Join Demand Distribution in bringing Minecraft Drinks to more
              businesses across the UK.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a href="#contact" className="btn-mc">
                Become A Trade Partner
                <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-white font-bold text-[13px] uppercase tracking-[0.06em] hover:text-primary transition-colors"
              >
                Request Trade Pricing
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
