"use client";

/* Spotlight B — second featured product hero, reverse layout (image left, copy right). */

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Partnership() {
  return (
    <section
      id="partnership"
      className="relative isolate bg-white py-6 pb-20 lg:pb-28"
    >
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="relative grid lg:grid-cols-2 rounded-3xl overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #FFF1F5 0%, #FFD9E4 40%, #FFB7CD 100%)",
          }}
        >
          {/* Product image (left on desktop) */}
          <div className="relative order-2 lg:order-1 min-h-[440px] lg:min-h-[640px] flex items-center justify-center p-8 lg:p-16">
            <div className="absolute inset-x-0 bottom-12 mx-auto h-32 w-3/5 rounded-full blur-3xl opacity-30 bg-[#E75480]" />
            <div className="relative w-full h-full max-w-md">
              <Image
                src="/Images/Product (1).png"
                alt="Minecraft Drinks Strawberry Slam bottle"
                fill
                sizes="(max-width: 1024px) 80vw, 40vw"
                className="object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.18)]"
              />
            </div>

            <div className="absolute top-8 left-8 lg:top-12 lg:left-12 bg-white/90 backdrop-blur border border-line rounded-2xl px-4 py-3 shadow-soft">
              <div className="text-[10px] uppercase tracking-[0.22em] font-semibold text-ink-400">
                Hospitality favourite
              </div>
              <div className="mt-1 font-display text-2xl font-bold text-ink-900 tracking-tight">
                Top 3 SKU
              </div>
            </div>
          </div>

          {/* Copy (right on desktop) */}
          <div className="relative order-1 lg:order-2 flex flex-col justify-center p-10 lg:p-16">
            <span className="inline-flex items-center gap-2 mb-5 self-start px-3 py-1.5 bg-white/70 backdrop-blur border border-line rounded-full">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E75480]" />
              <span className="text-[10px] uppercase tracking-[0.22em] font-semibold text-ink-700">
                Signature SKU
              </span>
            </span>
            <h3 className="heading-display text-ink-900 text-[48px] md:text-[64px] lg:text-[80px] leading-[0.95]">
              Strawberry
              <br />
              <span style={{ color: "#E75480" }}>Slam.</span>
            </h3>
            <p className="mt-6 text-lg text-ink-600 leading-relaxed max-w-md">
              Pink pixel pop. Real British strawberry. Built for the on-the-go shelf and the
              independent hospitality floor. The #2 sell-through SKU in our 2026 UK trial.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-px bg-ink-900/10 rounded-2xl overflow-hidden border border-ink-900/10 max-w-md">
              {[
                { k: "Real", v: "Strawberry" },
                { k: "330ml", v: "Glass + can" },
                { k: "Lactose-free", v: "Plant-based" },
              ].map((s) => (
                <div key={s.k} className="bg-white/60 backdrop-blur p-4">
                  <div className="font-display text-base font-bold text-ink-900 tracking-tight">
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
        </motion.div>
      </div>
    </section>
  );
}
