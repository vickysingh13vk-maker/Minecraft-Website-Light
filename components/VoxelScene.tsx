"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/* Cinematic voxel landscape — earth/stone palette, low green. */

function VoxelBlock({
  x,
  y,
  size = 48,
  color,
  delay = 0,
}: {
  x: number;
  y: number;
  size?: number;
  color: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className="absolute"
      style={{
        width: size,
        height: size,
        left: `${x}%`,
        bottom: `${y}%`,
      }}
    >
      <div
        className="relative h-full w-full voxel-edge"
        style={{ background: color }}
      />
    </motion.div>
  );
}

export function VoxelLandscape() {
  // Layered ridge: distant mountains (dark stone) → mid hills (earth) → foreground (dirt + grass tips)
  const ridge = [
    // back layer: distant mountains
    ...Array.from({ length: 14 }).map((_, i) => ({
      x: i * 7,
      y: 14 + Math.abs(Math.sin(i * 1.3)) * 18,
      color: "#1A1A1A",
      size: 68,
      delay: 0.05 + i * 0.02,
    })),
    // mid: stone hills
    ...Array.from({ length: 12 }).map((_, i) => ({
      x: 4 + i * 8,
      y: 8 + Math.abs(Math.sin(i * 0.9)) * 12,
      color: "#262626",
      size: 64,
      delay: 0.2 + i * 0.025,
    })),
    // foreground dirt row
    ...Array.from({ length: 16 }).map((_, i) => ({
      x: i * 6.5,
      y: 0,
      color: i % 4 === 0 ? "#4A3520" : "#3B2A1A",
      size: 60,
      delay: 0.3 + i * 0.02,
    })),
    // grass tips (sparse green)
    { x: 8, y: 6.5, color: "#6CC04A", size: 24, delay: 0.6 },
    { x: 36, y: 6.5, color: "#5FA63D", size: 22, delay: 0.7 },
    { x: 64, y: 6.5, color: "#6CC04A", size: 24, delay: 0.75 },
    { x: 88, y: 6.5, color: "#5FA63D", size: 22, delay: 0.8 },
    // torch glow accent
    { x: 50, y: 22, color: "#F5C84B", size: 14, delay: 0.95 },
  ];

  return (
    <div className="absolute inset-0">
      {ridge.map((b, i) => (
        <VoxelBlock key={i} x={b.x} y={b.y} size={b.size} color={b.color} delay={b.delay} />
      ))}
    </div>
  );
}

export function Particles({ count = 40 }: { count?: number }) {
  const [particles, setParticles] = useState<
    Array<{ x: number; y: number; d: number; s: number; warm: boolean }>
  >([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: count }).map((_, i) => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        d: Math.random() * 6 + 4,
        s: Math.random() * 2.5 + 1,
        warm: i % 7 === 0,
      })),
    );
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-[1px]"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.s,
            height: p.s,
            background: p.warm ? "#F5C84B" : "rgba(255,255,255,0.55)",
            boxShadow: p.warm
              ? `0 0 ${p.s * 5}px rgba(245,200,75,0.7)`
              : `0 0 ${p.s * 3}px rgba(255,255,255,0.35)`,
          }}
          animate={{ y: [0, -70, 0], opacity: [0, 1, 0] }}
          transition={{
            duration: p.d,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export function PixelGrid() {
  return (
    <div
      className="absolute inset-0 bg-grid-voxel opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"
      style={{ backgroundSize: "44px 44px" }}
      aria-hidden
    />
  );
}

export function Fog() {
  return (
    <>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-bg-900 via-bg-900/85 to-transparent" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 500px at 70% 40%, rgba(245,200,75,0.07), transparent 60%), radial-gradient(700px 400px at 25% 60%, rgba(108,192,74,0.08), transparent 60%)",
        }}
      />
    </>
  );
}
