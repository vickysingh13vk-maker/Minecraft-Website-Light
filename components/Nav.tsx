"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, ShoppingBag, User } from "lucide-react";

const links = [
  { href: "#products", label: "Drinks" },
  { href: "#capabilities", label: "Distribution" },
  { href: "#about", label: "Brand" },
  { href: "#news", label: "Trade News" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 border-b border-line backdrop-blur-md"
          : "bg-white border-b border-transparent"
      }`}
    >
      {/* Promo bar */}
      <div className="hidden md:flex bg-ink-900 text-white text-[11px] uppercase tracking-[0.22em] font-semibold h-8 items-center justify-center px-4">
        Free UK delivery on trade orders over £400 ·
        <a href="#contact" className="ml-2 underline underline-offset-2 hover:text-primary">
          Become a stockist
        </a>
      </div>

      <nav className="container-x flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="grid place-items-center h-8 w-8 voxel-edge bg-mc-green rounded">
            <span className="font-minecraft text-white text-[11px] leading-none">M</span>
          </div>
          <div className="leading-none">
            <div className="font-display text-[14px] font-bold tracking-tight text-ink-900 uppercase">
              Demand <span className="text-primary">×</span> Minecraft
            </div>
            <div className="mt-0.5 text-[9px] uppercase tracking-[0.28em] text-ink-400 font-medium">
              Drinks · UK Distribution
            </div>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[13px] font-semibold uppercase tracking-wider text-ink-700 hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-1">
          <button
            aria-label="Search"
            className="p-2.5 text-ink-700 hover:text-primary transition-colors"
          >
            <Search size={18} strokeWidth={2} />
          </button>
          <a
            href="#contact"
            aria-label="Trade login"
            className="p-2.5 text-ink-700 hover:text-primary transition-colors"
          >
            <User size={18} strokeWidth={2} />
          </a>
          <button
            aria-label="Cart"
            className="relative p-2.5 text-ink-700 hover:text-primary transition-colors"
          >
            <ShoppingBag size={18} strokeWidth={2} />
            <span className="absolute top-1 right-1 grid place-items-center h-4 w-4 bg-primary text-white text-[9px] font-bold rounded-full">
              0
            </span>
          </button>
          <a href="#contact" className="btn-mc btn-mc-sm ml-2">
            Trade Pack
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-ink-900"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden border-t border-line bg-white"
          >
            <div className="container-x py-5 flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 text-sm font-semibold uppercase tracking-wider text-ink-800 hover:text-primary"
                >
                  {l.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="btn-mc mt-4 w-full">
                Trade Pack
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
