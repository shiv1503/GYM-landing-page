"use client";

import { useEffect, useState } from "react";
import { siteConfig, navLinks } from "@/lib/site";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-nav ${scrolled ? "scrolled" : ""} ${open ? "open" : ""}`}>
      <div className="wrap flex items-center justify-between">
        <a href="#home" className="logo">
          <span className="w-2 h-2 rounded-full bg-lime" />
          {siteConfig.name.toUpperCase()}
        </a>

        <nav aria-label="Primary" className="hidden md:flex gap-8 items-center">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-semibold uppercase tracking-wide text-muted hover:text-ink transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <a href="#lead" className="btn btn-primary hidden md:inline-flex">
            Start Free Trial
          </a>
          <button
            className="md:hidden w-[42px] h-[42px] border border-border text-ink rounded-[4px]"
            aria-expanded={open}
            aria-controls="mobileMenu"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="block w-[18px] h-[2px] bg-ink mx-auto my-[4px]" />
            <span className="block w-[18px] h-[2px] bg-ink mx-auto my-[4px]" />
            <span className="block w-[18px] h-[2px] bg-ink mx-auto my-[4px]" />
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobileMenu" aria-label="Mobile" className="wrap flex flex-col gap-4 pt-6 pb-2 md:hidden">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold uppercase text-muted"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a href="#lead" className="text-sm font-semibold uppercase text-lime" onClick={() => setOpen(false)}>
            Start Free Trial
          </a>
        </nav>
      )}
    </header>
  );
}
