"use client";

import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export function QuoteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-line">
      <div className="container-x flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/Images/LOGO.png" alt="Minecraft Drinks" width={96} height={38} className="object-contain" priority />
          <span className="text-ink-300 font-light text-lg select-none">×</span>
          <Image src="/Images/DD logo.png" alt="Demand Distribution" width={96} height={38} className="object-contain" priority />
        </Link>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.12em] font-bold text-ink-500 hover:text-primary transition-colors"
        >
          <ArrowLeft size={14} />
          Back to site
        </Link>
      </div>
    </header>
  );
}

export function QuoteHero({
  eyebrow,
  title,
  highlight,
  subtitle,
  tabs,
}: {
  eyebrow: string;
  title: string;
  highlight: string;
  subtitle: string;
  tabs?: { href: string; label: string; active: boolean }[];
}) {
  return (
    <section className="relative isolate bg-ink-900 text-white overflow-hidden border-b border-white/10">
      <div
        className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/25 blur-[120px]"
        aria-hidden
      />
      <div className="container-x py-14 lg:py-20 relative">
        <div className="text-[11px] uppercase tracking-[0.28em] font-bold text-primary mb-4">
          {eyebrow}
        </div>
        <h1 className="heading-display text-[36px] md:text-[52px] lg:text-[60px] leading-[1.03] text-balance max-w-3xl">
          {title} <span className="text-primary">{highlight}</span>
        </h1>
        <p className="mt-5 text-base md:text-lg text-white/60 leading-relaxed max-w-2xl">
          {subtitle}
        </p>

        {tabs && (
          <div className="mt-8 inline-flex flex-wrap gap-2">
            {tabs.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className={`px-5 py-2.5 text-[12px] uppercase tracking-[0.12em] font-bold border transition-colors ${
                  t.active
                    ? "bg-primary border-primary text-white"
                    : "border-white/20 text-white/60 hover:border-primary hover:text-white"
                }`}
              >
                {t.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export function Success({
  title,
  message,
}: {
  title: string;
  message: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center py-16 px-6"
    >
      <CheckCircle2 className="mx-auto h-16 w-16 text-primary" />
      <h3 className="mt-6 heading-display text-ink-900 text-[28px] lg:text-[36px]">
        {title}
      </h3>
      <p className="mt-3 text-ink-500 max-w-md mx-auto leading-relaxed">{message}</p>
      <Link href="/" className="btn-mc mt-8 inline-flex">
        Back to site
        <ArrowLeft size={15} className="rotate-180" />
      </Link>
    </motion.div>
  );
}

export function QuoteFooter() {
  return (
    <footer className="bg-ink-900 text-white/40 py-8 border-t border-white/10">
      <div className="container-x flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] uppercase tracking-[0.18em]">
        <span>© {new Date().getFullYear()} Demand Distribution Ltd.</span>
        <span>Prices subject to change. VAT applicable where required.</span>
      </div>
    </footer>
  );
}

export function FormCard({ children }: { children: ReactNode }) {
  return (
    <div className="mc-frame bg-white border border-line p-6 md:p-9">{children}</div>
  );
}
