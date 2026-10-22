"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/data/tanira";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeHref, setActiveHref] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 180) {
        setActiveHref("");
        return;
      }

      // Jika sudah mentok di paling bawah halaman, aktifkan menu terakhir (Lokasi)
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50
      ) {
        setActiveHref(NAV_ITEMS[NAV_ITEMS.length - 1].href);
        return;
      }

      let currentSection = "";
      for (const item of NAV_ITEMS) {
        const id = item.href.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140) {
            currentSection = item.href;
          }
        }
      }

      setActiveHref(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-forest/95 backdrop-blur-md border-b border-moss/60">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-16 sm:h-20 flex items-center justify-between gap-4 sm:gap-6">
        {/* Brand Logo */}
        <a href="#"
          onClick={() => {
            setActiveHref("");
            setMobileMenuOpen(false);
          }}
          className="flex items-center gap-3 shrink-0 group"
        >
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden bg-mist border border-sage flex items-center justify-center p-1">
            <Image src="/images/logo-tanira.png" alt="Logo Tanira - Tunas Alam Nira Asli" width={48} height={48} className="object-contain w-full h-full" priority />
          </div>
          <div>
            <span className="block font-serif text-xl sm:text-2xl font-normal tracking-wider text-mist leading-none">TANIRA</span>
            <span className="block text-[9px] sm:text-[10px] tracking-[0.18em] uppercase text-sage font-semibold mt-0.5 sm:mt-1">Tunas Alam Nira Asli</span>
          </div>
        </a>

        {/* Desktop Navigation Pill */}
        <nav className="hidden lg:flex items-center gap-1 bg-earth/45 border border-moss/70 rounded-full px-3 py-1.5">
          {NAV_ITEMS.map((item) => {
            const isActive = activeHref === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setActiveHref(item.href)}
                className={`px-4 py-1.5 rounded-full text-sm transition-all whitespace-nowrap ${
                  isActive
                    ? "bg-sage text-forest font-bold shadow-sm"
                    : "font-medium text-mist/85 hover:text-forest hover:bg-sage/80"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0 lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Buka menu navigasi"
            className="p-2.5 rounded-xl bg-moss/40 text-mist border border-sage/35"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-forest border-t border-moss/60 px-6 py-4 space-y-2">
          {NAV_ITEMS.map((item) => {
            const isActive = activeHref === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => {
                  setActiveHref(item.href);
                  setMobileMenuOpen(false);
                }}
                className={`block py-2.5 px-4 rounded-xl text-sm transition-all ${
                  isActive
                    ? "bg-sage text-forest font-bold"
                    : "font-medium text-mist hover:bg-moss/50"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}
