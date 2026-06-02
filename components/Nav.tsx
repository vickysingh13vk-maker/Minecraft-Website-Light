"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#products", label: "The Range" },
  { href: "#partnership", label: "Partnership" },
  { href: "#capabilities", label: "Distribution" },
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
          <Image
            src="/Images/LOGO.png"
            alt="Minecraft Drinks"
            width={130}
            height={56}
            className="object-contain"
            priority
          />
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

        <div className="hidden lg:flex items-center gap-3">
          <a href="#contact" className="btn-mc btn-mc-sm">
            Become a Stockist
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
