"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const items = [
  { k: 2400, suffix: "+", label: "UK Retail Locations", sub: "Stocking Minecraft Drinks" },
  { k: 96, suffix: "%", label: "On-time Delivery", sub: "Rolling 90-day SLA" },
  { k: 12, suffix: "M", prefix: "£", label: "Trade Value Moved", sub: "Last fiscal year" },
  { k: 48, suffix: "hr", label: "UK-Wide Despatch", sub: "London to Inverness" },
];

function Counter({
  value,
  prefix = "",
  suffix = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => {
    return value >= 100 ? Math.round(v).toLocaleString("en-GB") : v.toFixed(0);
  });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: [0.22, 1, 0.36, 1],
      });
      return () => controls.stop();
    }
  }, [inView, count, value]);

  return (
    <span ref={ref} className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900 py-24 lg:py-32 border-y border-primary/15">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 20% 50%, rgba(68,161,72,0.3), transparent 60%), radial-gradient(circle at 80% 50%, rgba(168,224,99,0.22), transparent 60%)",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-grid-voxel opacity-[0.06] [background-size:48px_48px]" aria-hidden />

      <div className="container-x relative grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6">
        {items.map((it, i) => (
          <motion.div
            key={it.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: i * 0.08 }}
            className="relative"
          >
            <Counter value={it.k} prefix={it.prefix} suffix={it.suffix} />
            <div className="mt-3 font-semibold text-white/90">{it.label}</div>
            <div className="text-sm text-white/50">{it.sub}</div>
            {i < items.length - 1 && (
              <span className="hidden lg:block absolute right-0 top-2 h-24 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
