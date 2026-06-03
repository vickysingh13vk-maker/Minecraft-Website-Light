"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutDrinks() {
  return (
    <section
      id="about"
      className="relative isolate bg-white pt-20 lg:pt-28 pb-20 lg:pb-28 overflow-hidden"
    >
      {/* Minecraft characters — touches right + bottom */}
      <div className="pointer-events-none absolute bottom-0 right-0 hidden md:block w-[320px] lg:w-[460px] select-none" aria-hidden>
        <Image
          src="/Images/New folder/Bild2.png"
          alt=""
          width={460}
          height={390}
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="container-x relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 mb-16 items-end">
          <div className="lg:col-span-7">
            <div className="eyebrow mb-4">02 · The World&apos;s Biggest Game</div>
            <h2 className="heading-display text-ink-900 text-[40px] md:text-[56px] lg:text-[68px] text-balance">
              Built around one of the <span className="text-primary">world&apos;s biggest games.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 space-y-4 text-lg text-ink-500 leading-relaxed max-w-md">
            <p>Minecraft is more than a game. It is one of the most influential entertainment brands ever created.</p>
            <p>For over a decade, Minecraft has inspired creativity, exploration and adventure across generations of players worldwide.</p>
            <p>Minecraft Drinks transform that global recognition into a product consumers instantly connect with.</p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 gap-px bg-line border border-line overflow-hidden md:max-w-[calc(100%-320px)] lg:max-w-[calc(100%-400px)]"
        >
          {[
            { k: "300M+", v: "Copies Sold Worldwide" },
            { k: "140M+", v: "Monthly Active Players" },
            { k: "190+", v: "Countries Reached" },
            { k: "15+", v: "Years Of Global Impact" },
          ].map((s) => (
            <div key={s.k} className="bg-white px-6 py-7 lg:px-8 lg:py-8 flex flex-col justify-center">
              <div className="font-display text-[36px] lg:text-[48px] font-bold text-ink-900 tracking-tight leading-none">
                {s.k}
              </div>
              <div className="mt-2 text-[10px] uppercase tracking-[0.2em] font-semibold text-ink-400">
                {s.v}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
