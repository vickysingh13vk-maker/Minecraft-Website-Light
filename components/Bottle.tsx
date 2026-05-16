"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export type Variant = "primary" | "emerald" | "violet" | "chorus";

const products: Record<
  Variant,
  { src: string; label: string; glow: string; alt: string; ratio: number }
> = {
  primary: {
    src: "/Images/Product (3).png",
    label: "LIME LIGHTNING",
    glow: "rgba(108,192,74,0.55)",
    alt: "Minecraft Drinks — Lime Lightning bottle",
    ratio: 0.55,
  },
  emerald: {
    src: "/Images/Product (1).png",
    label: "STRAWBERRY SLAM",
    glow: "rgba(231,84,128,0.5)",
    alt: "Minecraft Drinks — Strawberry Slam bottle",
    ratio: 0.55,
  },
  violet: {
    src: "/Images/Product (2).png",
    label: "CARAMEL CHUG",
    glow: "rgba(226,158,43,0.55)",
    alt: "Minecraft Drinks — Caramel Chug bottle",
    ratio: 0.55,
  },
  chorus: {
    src: "/Images/Product (4).png",
    label: "CHORUS FRUIT",
    glow: "rgba(108,164,217,0.55)",
    alt: "Minecraft Drinks — Chorus Fruit Golden Apple Melon can",
    ratio: 0.62,
  },
};

export default function Bottle({
  variant = "primary",
  size = 280,
  floating = true,
}: {
  variant?: Variant;
  size?: number;
  floating?: boolean;
}) {
  const p = products[variant];
  const h = size;
  const w = Math.round(size * p.ratio);

  return (
    <motion.div
      className="relative inline-block"
      style={{ width: w, height: h }}
      animate={floating ? { y: [0, -14, 0] } : undefined}
      transition={
        floating ? { duration: 6, repeat: Infinity, ease: "easeInOut" } : undefined
      }
    >
      {/* Glow halo */}
      <div
        className="absolute -inset-8 rounded-full blur-3xl opacity-70 pointer-events-none"
        style={{ background: p.glow }}
        aria-hidden
      />

      {/* Product image */}
      <Image
        src={p.src}
        alt={p.alt}
        fill
        sizes={`(max-width: 640px) ${w}px, ${w}px`}
        className="relative z-10 object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.65)]"
        priority={false}
      />

      {/* Pixel accent block — small decorative cube */}
      <motion.div
        className="absolute -right-2 top-6 h-5 w-5 voxel-edge z-20 pointer-events-none"
        style={{ background: extractAccent(variant) }}
        animate={{ rotate: [0, 8, -6, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        aria-hidden
      />
    </motion.div>
  );
}

function extractAccent(v: Variant) {
  switch (v) {
    case "primary":
      return "#6CC04A";
    case "emerald":
      return "#E75480";
    case "violet":
      return "#E29E2B";
    case "chorus":
      return "#6CA4D9";
  }
}
