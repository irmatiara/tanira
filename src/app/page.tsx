"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Flame,
  Droplets,
  ShieldCheck,
  Sparkles,
  Clock,
  CheckCircle2,
  XCircle,
  ChevronDown,
  Info,
  ArrowDown,
  Sun,
  Award,
  MapPin,
  ExternalLink,
  Menu,
  X,
} from "lucide-react";
import {
  BRAND_INFO,
  PURITY_ADVANTAGES,
  PROCESS_STEPS,
  PRODUCTS,
  COMPARISON_ROWS,
  FAQS,
  ORDERING_CONFIG,
  LOCATION_INFO,
} from "@/data/tanira";

const NAV_ITEMS = [
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "Proses", href: "#proses" },
  { label: "Produk", href: "#produk" },
  { label: "Keaslian", href: "#perbandingan" },
  { label: "FAQ", href: "#faq" },
  { label: "Lokasi", href: "#lokasi" },
];

export default function TaniraLandingPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const advantageIcons = [
    <ShieldCheck key="shield" className="w-6 h-6 text-sage" />,
    <Flame key="flame" className="w-6 h-6 text-sage" />,
    <Sparkles key="sparkles" className="w-6 h-6 text-sage" />,
    <Droplets key="droplets" className="w-6 h-6 text-sage" />,
  ];

  return (
    <div className="min-h-screen flex flex-col bg-sage/30 text-earth">
      {/* Navigation Bar - Clean, Spacious & Balanced for Laptop */}
      <header className="sticky top-0 z-40 bg-forest/95 backdrop-blur-md border-b border-moss/60">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between gap-6">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3.5 shrink-0 group">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-mist border border-sage flex items-center justify-center p-1">
              <Image
                src="/images/logo-tanira.png"
                alt="Logo Tanira - Tunas Alam Nira Asli"
                width={48}
                height={48}
                className="object-contain w-full h-full"
                priority
              />
            </div>
            <div>
              <span className="block font-serif text-2xl font-normal tracking-wider text-mist leading-none">
                TANIRA
              </span>
              <span className="block text-[10px] tracking-[0.18em] uppercase text-sage font-semibold mt-1">
                Tunas Alam Nira Asli
              </span>
            </div>
          </a>

          {/* Desktop Navigation Pill - Concise labels so it never feels cramped */}
          <nav className="hidden lg:flex items-center gap-1 bg-earth/45 border border-moss/70 rounded-full px-3 py-1.5">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-1.5 rounded-full text-sm font-medium text-mist/85 hover:text-forest hover:bg-sage transition-all whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action / Mobile Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Buka menu navigasi"
              className="lg:hidden p-2.5 rounded-xl bg-moss/40 text-mist border border-sage/35"
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
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 px-4 rounded-xl text-sm font-medium text-mist hover:bg-moss/50"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* HERO SECTION - Full Viewport on Laptop Screens */}
        <section className="relative overflow-hidden bg-hero-botanical text-mist min-h-[calc(100vh-5rem)] flex items-center py-14 lg:py-20 border-b border-moss">
          <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
              {/* Left Column: 7 Columns for Breathable Story & Typography */}
              <div className="lg:col-span-7 space-y-7">
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-moss/45 border border-sage/40 text-sage text-xs font-semibold tracking-wider uppercase">
                  <Sun className="w-3.5 h-3.5 text-sage" />
                  <span>Warisan Olahan Tradisional Keluarga</span>
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl xl:text-[3.75rem] font-normal text-mist leading-[1.12] tracking-tight">
                  Kemurnian Tetes Nira Alam,{" "}
                  <span className="italic text-sage">Diolah Jujur</span>{" "}
                  Menjadi Gula Aren Asli.
                </h1>

                <p className="text-base sm:text-lg text-mist/85 leading-relaxed max-w-2xl">
                  {BRAND_INFO.storyLead} Kami berfokus menghadirkan{" "}
                  <strong className="text-sage font-semibold">
                    Gula Aren Cetak
                  </strong>{" "}
                  berkualitas murni, serta menyediakan{" "}
                  <strong className="text-sage font-semibold">
                    Air Nira Aren Segar
                  </strong>{" "}
                  langsung dari sadapan harian.
                </p>

                {/* Action Links */}
                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <a
                    href="#proses"
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-sage text-forest font-bold text-sm hover:bg-mist transition-all shadow-md"
                  >
                    <span>Telusuri Proses Pembuatan</span>
                    <ArrowDown className="w-4 h-4" />
                  </a>
                  <a
                    href="#produk"
                    className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-moss/40 text-mist font-semibold text-sm border border-sage/45 hover:bg-moss transition-all"
                  >
                    <span>Lihat Gula Cetak & Air Nira</span>
                  </a>
                </div>

                {/* Clean Horizontal Highlights Bar (Un-cramped on Laptop) */}
                <div className="pt-6 border-t border-moss/70 grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-sage">
                      Komposisi Utama
                    </p>
                    <p className="font-serif text-2xl text-mist mt-1">
                      100% Nira Murni
                    </p>
                    <p className="text-xs text-mist/70 mt-0.5">
                      Tanpa campuran gula pasir
                    </p>
                  </div>

                  <div className="sm:border-l sm:border-moss/70 sm:pl-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-sage">
                      Cara Pengolahan
                    </p>
                    <p className="font-serif text-2xl text-mist mt-1">
                      Tungku Kayu Bakar
                    </p>
                    <p className="text-xs text-mist/70 mt-0.5">
                      Dimasak perlahan 3–4 jam
                    </p>
                  </div>

                  <div className="sm:border-l sm:border-moss/70 sm:pl-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-sage">
                      Varian Hasil Kebun
                    </p>
                    <p className="font-serif text-2xl text-mist mt-1">
                      Gula Cetak & Nira
                    </p>
                    <p className="text-xs text-mist/70 mt-0.5">
                      Sadapan segar pagi & sore
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: 5 Columns Editorial Image Showcase */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-3xl overflow-hidden border-2 border-sage/60 shadow-2xl bg-earth">
                  <Image
                    src="/images/gula-aren-hero.jpg"
                    alt="Gula Aren Cetak Asli dan Air Nira Aren Segar Tanira"
                    width={900}
                    height={700}
                    className="w-full h-[400px] sm:h-[480px] lg:h-[520px] object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-transparent to-transparent" />

                  {/* Bottom Caption inside Hero Image */}
                  <div className="absolute bottom-5 left-5 right-5 bg-forest/90 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-sage/50 shadow-lg text-mist">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-sage">
                          Hasil Kebun Aren Keluarga
                        </span>
                        <h2 className="font-serif text-xl font-normal text-mist mt-0.5">
                          Gula Aren Cetak & Air Nira Segar
                        </h2>
                      </div>
                      <div className="shrink-0 w-11 h-11 rounded-xl bg-moss border border-sage/50 flex items-center justify-center text-mist">
                        <Award className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* KEUNGGULAN GULA AREN ASLI SECTION - Full 4-Column Grid on Laptop */}
        <section
          id="keunggulan"
          className="py-20 lg:py-28 bg-sage-surface border-b border-moss/30"
        >
          <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
              <div className="max-w-2xl space-y-3">
                <span className="inline-block px-3.5 py-1 rounded-full bg-forest text-sage text-xs font-bold uppercase tracking-[0.18em]">
                  Mengapa Kemurnian Itu Penting?
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-normal text-forest leading-tight">
                  Keunggulan Gula Aren Asli
                </h2>
              </div>
              <p className="text-sm sm:text-base text-earth/85 leading-relaxed max-w-xl">
                Gula merah dari pohon aren (<em>Arenga pinnata</em>) memiliki
                karakter rasa, keharuman, dan kelembutan yang tidak bisa ditiru
                oleh gula merah campuran.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {PURITY_ADVANTAGES.map((item, idx) => (
                <div
                  key={item.id}
                  className="bg-mist rounded-2xl p-6 sm:p-7 border-2 border-moss/30 shadow-sm hover:shadow-md hover:border-forest transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-forest border border-moss flex items-center justify-center shadow-xs">
                        {advantageIcons[idx]}
                      </div>
                    </div>

                    <p className="text-xs font-bold uppercase tracking-wider text-moss">
                      {item.subtitle}
                    </p>
                    <h3 className="font-serif text-xl sm:text-2xl font-normal text-forest mt-1 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm text-earth/85 leading-relaxed mt-3">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-sage/50 flex items-center gap-2 text-xs font-semibold text-forest">
                    <CheckCircle2 className="w-4 h-4 text-moss shrink-0" />
                    <span>100% Asli dari Pohon Aren</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CERITA PROSES PEMBUATAN (RINGKAS 3 TAHAP) */}
        <section
          id="proses"
          className="py-20 lg:py-24 bg-moss text-mist border-b border-forest"
        >
          <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
              <div className="max-w-2xl space-y-3">
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest/60 border border-sage/40 text-xs font-bold uppercase tracking-[0.18em] text-sage">
                  <Flame className="w-4 h-4 text-sage" />
                  <span>Dari Pohon Aren ke Cetakan</span>
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-normal text-mist leading-tight">
                  Tahap Pengolahan Tradisional
                </h2>
              </div>
              <p className="text-sm sm:text-base text-mist/90 leading-relaxed max-w-xl">
                Diolah langsung di dapur keluarga pada hari yang sama saat air
                nira diturunkan dari pohon, menjaga kesegaran dan keharuman
                gula aren murni.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Left Column: Kitchen Visual */}
              <div className="lg:col-span-5 relative rounded-3xl overflow-hidden border-2 border-sage/60 shadow-xl min-h-[300px] sm:min-h-[380px] bg-earth">
                <Image
                  src="/images/proses-nira.jpg"
                  alt="Proses Perebusan Air Nira Aren di Wajan Tungku Kayu Bakar"
                  width={900}
                  height={650}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/95 via-forest/25 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-mist">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-sage text-forest mb-2">
                    Dapur Pengolahan Keluarga
                  </span>
                  <h3 className="font-serif text-2xl font-normal">
                    Perebusan dengan Tungku Kayu Bakar
                  </h3>
                  <p className="text-xs sm:text-sm text-mist/85 mt-1 leading-relaxed">
                    Dimasak perlahan selama 3–4 jam hingga mengental menjadi
                    karamel gula aren murni.
                  </p>
                </div>
              </div>

              {/* Right Column: 3 Concise Steps */}
              <div className="lg:col-span-7 flex flex-col justify-between gap-4">
                {PROCESS_STEPS.map((step) => (
                  <div
                    key={step.stepNumber}
                    className="rounded-2xl p-5 sm:p-6 bg-mist text-earth border-2 border-sage/60 shadow-sm flex flex-col sm:flex-row items-start gap-4 sm:gap-5"
                  >
                    <span className="font-serif text-2xl font-normal px-3.5 py-1.5 rounded-xl bg-forest text-sage shrink-0">
                      {step.stepNumber}
                    </span>
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <h4 className="font-serif text-xl sm:text-2xl font-normal text-forest">
                          {step.title}
                        </h4>
                        <span className="text-xs font-bold uppercase tracking-wider text-moss">
                          • {step.localTerm}
                        </span>
                      </div>
                      <p className="text-sm text-earth/85 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PRODUK KAMI SECTION (GULA CETAK & AIR NIRA MURNI - RINGKAS) */}
        <section
          id="produk"
          className="py-18 lg:py-24 bg-sage-surface border-b border-moss/35"
        >
          <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
              <div className="max-w-2xl space-y-2.5">
                <span className="inline-block px-3.5 py-1 rounded-full bg-forest text-sage text-xs font-bold uppercase tracking-[0.18em]">
                  Hasil Olahan Keluarga Tanira
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-normal text-forest">
                  Varian Hasil Aren Kami
                </h2>
              </div>
              <p className="text-sm sm:text-base text-earth/85 leading-relaxed max-w-xl">
                Fokus pada <strong className="text-forest">Gula Aren Cetak</strong>{" "}
                sebagai produk utama, serta melayani pembelian{" "}
                <strong className="text-forest">Air Nira Aren Segar</strong>{" "}
                sesuai jadwal sadapan harian.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
              {PRODUCTS.map((product) => {
                const isPrimary = product.isPrimary;
                return (
                  <div
                    key={product.id}
                    className={`rounded-3xl p-6 sm:p-8 border-2 flex flex-col justify-between transition-all ${
                      isPrimary
                        ? "bg-forest text-mist border-sage shadow-xl"
                        : "bg-mist text-earth border-moss/45 shadow-md"
                    }`}
                  >
                    <div>
                      {/* Product Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span
                          className={`px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                            isPrimary
                              ? "bg-sage text-forest"
                              : "bg-moss text-mist"
                          }`}
                        >
                          {product.badge}
                        </span>
                        <span
                          className={`text-xs font-semibold ${
                            isPrimary ? "text-sage" : "text-moss"
                          }`}
                        >
                          100% Asli Tanpa Campuran
                        </span>
                      </div>

                      <h3
                        className={`font-serif text-2xl sm:text-3xl font-normal ${
                          isPrimary ? "text-mist" : "text-forest"
                        }`}
                      >
                        {product.name}
                      </h3>
                      <p
                        className={`text-sm leading-relaxed mt-2 ${
                          isPrimary ? "text-mist/85" : "text-earth/85"
                        }`}
                      >
                        {product.shortDescription}
                      </p>

                      {/* Compact 2x2 Characteristics Grid */}
                      <div
                        className={`grid grid-cols-2 gap-3 mt-5 p-4 rounded-2xl border ${
                          isPrimary
                            ? "bg-moss/35 border-sage/40"
                            : "bg-sage/25 border-moss/30"
                        }`}
                      >
                        {product.characteristics.map((char) => (
                          <div key={char.label} className="space-y-0.5">
                            <span
                              className={`text-[10px] font-bold uppercase tracking-wider block ${
                                isPrimary ? "text-sage" : "text-moss"
                              }`}
                            >
                              {char.label}
                            </span>
                            <span
                              className={`text-xs sm:text-sm font-semibold block ${
                                isPrimary ? "text-mist" : "text-earth"
                              }`}
                            >
                              {char.value}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Concise Highlights (3 Key Points) */}
                      <ul className="mt-5 space-y-2">
                        {product.highlights.slice(0, 3).map((hl) => (
                          <li
                            key={hl}
                            className={`flex items-start gap-2.5 text-xs sm:text-sm ${
                              isPrimary ? "text-mist/90" : "text-earth/85"
                            }`}
                          >
                            <CheckCircle2
                              className={`w-4 h-4 shrink-0 mt-0.5 ${
                                isPrimary ? "text-sage" : "text-forest"
                              }`}
                            />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Availability Footer */}
                    <div className="mt-6 pt-4 border-t border-sage/35">
                      {ORDERING_CONFIG.enableDirectOrder ? (
                        <button
                          type="button"
                          className="w-full py-3.5 px-5 rounded-xl bg-sage text-forest font-bold text-sm hover:bg-mist transition-colors"
                        >
                          Pesan {product.name}
                        </button>
                      ) : (
                        <div
                          className={`flex items-start gap-2.5 p-3.5 rounded-xl border text-xs ${
                            isPrimary
                              ? "bg-moss/40 border-sage/40 text-mist"
                              : "bg-sage/30 border-moss/40 text-earth"
                          }`}
                        >
                          <Info
                            className={`w-4 h-4 shrink-0 mt-0.5 ${
                              isPrimary ? "text-sage" : "text-forest"
                            }`}
                          />
                          <div>
                            <span
                              className={`font-bold ${
                                isPrimary ? "text-sage" : "text-forest"
                              }`}
                            >
                              Ketersediaan:{" "}
                            </span>
                            <span>{product.ordering.availabilityNote}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Future Online Ordering Notice Banner */}
            {!ORDERING_CONFIG.enableDirectOrder && (
              <div className="mt-8 bg-moss text-mist rounded-2xl p-5 sm:p-6 border-2 border-sage/60 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-forest border border-sage/40 flex items-center justify-center shrink-0 text-sage">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-mist">
                      Pengembangan Fitur Pemesanan Langsung
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-mist/85 leading-relaxed">
                    Halaman ini dirancang sebagai pusat informasi proses &
                    keaslian produk Tanira. Fitur pemesanan langsung sedang
                    disiapkan untuk pengembangan selanjutnya.
                  </p>
                </div>
                <span className="shrink-0 px-3.5 py-1.5 rounded-full text-xs font-bold bg-forest text-sage border border-sage/50">
                  Segera Hadir
                </span>
              </div>
            )}
          </div>
        </section>

        {/* TABEL PERBANDINGAN: GULA AREN ASLI VS CAMPURAN - Full Laptop Width */}
        <section
          id="perbandingan"
          className="py-20 lg:py-28 bg-forest text-mist border-b border-moss"
        >
          <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
              <div className="max-w-2xl space-y-3">
                <span className="inline-block px-3.5 py-1 rounded-full bg-moss text-mist text-xs font-bold uppercase tracking-[0.18em]">
                  Panduan Mengenali Kualitas
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-normal text-mist">
                  Cara Membedakan Gula Aren Cetak Asli vs Campuran
                </h2>
              </div>
              <p className="text-sm sm:text-base text-mist/80 leading-relaxed max-w-xl">
                Sering kali pembeli sulit membedakan mana gula aren murni dan
                mana yang sudah dicampur gula pasir. Berikut ciri-ciri fisik
                yang paling mudah dikenali di rumah:
              </p>
            </div>

            <div className="md:bg-mist md:text-earth md:rounded-3xl md:overflow-hidden md:border-2 md:border-sage md:shadow-2xl">
              {/* Desktop Table Header (Hidden on Mobile) */}
              <div className="hidden md:grid md:grid-cols-12 bg-moss text-mist border-b border-sage/50 text-xs font-bold uppercase tracking-wider">
                <div className="p-6 md:col-span-3 text-mist">
                  Aspek Pengujian
                </div>
                <div className="p-6 md:col-span-5 text-mist bg-forest/35 border-l border-sage/40 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sage shrink-0" />
                  <span>Gula Aren Cetak Asli (Tanira)</span>
                </div>
                <div className="p-6 md:col-span-4 text-mist/90 border-l border-sage/40 flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-sage shrink-0" />
                  <span>Gula Merah Campuran</span>
                </div>
              </div>

              {/* Rows: Stacked Cards on Mobile, Table Rows on Desktop */}
              <div className="space-y-4 md:space-y-0 md:divide-y md:divide-sage/45">
                {COMPARISON_ROWS.map((row) => (
                  <div
                    key={row.aspect}
                    className="bg-mist text-earth rounded-2xl md:rounded-none overflow-hidden border-2 border-sage md:border-0 shadow-md md:shadow-none grid grid-cols-1 md:grid-cols-12 text-sm sm:text-base"
                  >
                    {/* Aspect Title */}
                    <div className="px-5 py-3.5 sm:p-6 md:col-span-3 font-bold text-mist md:text-forest bg-moss md:bg-sage/25 flex items-center">
                      {row.aspect}
                    </div>

                    {/* Authentic Aren Cell */}
                    <div className="p-5 sm:p-6 md:col-span-5 text-forest font-medium bg-sage/15 md:bg-sage/10 md:border-l border-sage/45 leading-relaxed space-y-1.5">
                      <div className="flex md:hidden items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-forest">
                        <CheckCircle2 className="w-4 h-4 text-moss shrink-0" />
                        <span>Gula Aren Cetak Asli (Tanira)</span>
                      </div>
                      <p>{row.authenticAren}</p>
                    </div>

                    {/* Mixed Sugar Cell */}
                    <div className="p-5 sm:p-6 md:col-span-4 text-earth/80 bg-mist border-t md:border-t-0 md:border-l border-sage/45 leading-relaxed space-y-1.5">
                      <div className="flex md:hidden items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-olive">
                        <XCircle className="w-4 h-4 text-olive shrink-0" />
                        <span>Gula Merah Campuran</span>
                      </div>
                      <p>{row.mixedSugar}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TANYA JAWAB (FAQ) SECTION - 2-Column Split on Laptop */}
        <section
          id="faq"
          className="py-20 lg:py-28 bg-sage-surface border-b border-moss/35"
        >
          <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              {/* Left Column: Title & Summary */}
              <div className="lg:col-span-5 space-y-4">
                <span className="inline-block px-3.5 py-1 rounded-full bg-forest text-sage text-xs font-bold uppercase tracking-[0.18em]">
                  Tanya Jawab
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-normal text-forest leading-tight">
                  Hal yang Sering Ditanyakan
                </h2>
                <p className="text-sm sm:text-base text-earth/85 leading-relaxed">
                  Informasi lengkap seputar pengolahan Gula Aren Cetak dan
                  ketersediaan Air Nira Aren segar dari kebun keluarga kami.
                </p>

                <div className="p-6 rounded-2xl bg-forest text-mist border border-moss mt-6 space-y-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-sage">
                    Komitmen Kualitas Keluarga
                  </p>
                  <p className="text-sm text-mist/90 leading-relaxed">
                    Setiap cetakan gula aren diolah tanpa bahan pengawet,
                    pemutih, maupun campuran gula rafinasi demi menjaga cita
                    rasa warisan asli.
                  </p>
                </div>
              </div>

              {/* Right Column: Accordions */}
              <div className="lg:col-span-7 space-y-3.5">
                {FAQS.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={faq.question}
                      className={`rounded-2xl border-2 overflow-hidden transition-all ${
                        isOpen
                          ? "bg-mist border-forest shadow-md"
                          : "bg-mist/90 border-moss/40"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-sage/20 transition-colors"
                      >
                        <span className="font-bold text-base text-forest">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-moss shrink-0 transition-transform duration-200 ${
                            isOpen ? "rotate-180 text-forest" : ""
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-5 pt-2 text-sm sm:text-base text-earth/85 leading-relaxed border-t border-sage/50">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* LOKASI DAPUR & PENGOLAHAN AREN (GOOGLE MAPS SECTION) */}
        <section
          id="lokasi"
          className="py-20 lg:py-28 bg-moss text-mist"
        >
          <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
              {/* Left Info Column */}
              <div className="lg:col-span-5 bg-forest rounded-3xl p-7 sm:p-9 border-2 border-sage/50 shadow-xl flex flex-col justify-between">
                <div>
                  <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-moss/60 border border-sage/40 text-xs font-bold uppercase tracking-wider text-sage">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Titik Lokasi Pengolahan</span>
                  </span>

                  <h2 className="font-serif text-3xl sm:text-4xl font-normal text-mist mt-4 leading-tight">
                    {LOCATION_INFO.title}
                  </h2>

                  <p className="text-sm sm:text-base text-mist/85 leading-relaxed mt-3">
                    {LOCATION_INFO.description}
                  </p>

                  <div className="mt-6 p-4 rounded-2xl bg-moss/35 border border-sage/35 space-y-2">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-sage block">
                        Wilayah
                      </span>
                      <span className="text-sm font-semibold text-mist block">
                        {LOCATION_INFO.region}
                      </span>
                    </div>
                    <div className="pt-2 border-t border-sage/25">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-sage block">
                        Koordinat Peta
                      </span>
                      <span className="text-xs font-mono text-mist/90 block">
                        {LOCATION_INFO.coordinatesLabel}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <a
                    href={LOCATION_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-xl bg-sage text-forest font-bold text-sm hover:bg-mist transition-all shadow-md"
                  >
                    <MapPin className="w-4 h-4" />
                    <span>Buka Petunjuk Arah di Google Maps</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Right Map Embed Column */}
              <div className="lg:col-span-7 rounded-3xl overflow-hidden border-2 border-sage shadow-2xl bg-earth min-h-[380px] sm:min-h-[460px] relative">
                <iframe
                  src={LOCATION_INFO.embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Peta Lokasi Dapur Gula Aren Tanira"
                  className="w-full h-full min-h-[380px] sm:min-h-[460px]"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER - Deep Forest Canopy */}
      <footer className="bg-forest text-mist border-t-2 border-moss pt-12 pb-8">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-5 border-b border-moss/60">
            {/* Column 1: Brand Identity (Left) */}
            <div className="space-y-4 max-w-md">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-mist border-2 border-sage p-1.5 flex items-center justify-center shadow-sm shrink-0">
                  <Image
                    src="/images/logo-tanira.png"
                    alt="Logo Tanira"
                    width={56}
                    height={56}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-normal text-mist leading-none">
                    TANIRA
                  </h3>
                  <p className="text-xs font-bold tracking-[0.2em] uppercase text-sage mt-1">
                    Tunas Alam Nira Asli
                  </p>
                </div>
              </div>
              <p className="text-sm text-mist/80 leading-relaxed">
                Usaha keluarga pengrajin Gula Aren Cetak tradisional dan
                penyedia Air Nira Aren segar. Diolah secara jujur dari tetesan
                nira murni tanpa tambahan gula pasir maupun pengawet.
              </p>
            </div>

            {/* Column 2: Lokasi & Aktivitas Dapur (Right) */}
            <div className="bg-moss/25 border border-sage/35 rounded-2xl p-5 sm:p-6 space-y-3 w-full md:w-auto md:min-w-[340px]">
              <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-sage">
                Dapur Pengolahan
              </h4>
              <div className="space-y-2 text-sm text-mist/90">
                <p className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-sage shrink-0 mt-0.5" />
                  <span>{LOCATION_INFO.region}</span>
                </p>
                <p className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-sage shrink-0 mt-0.5" />
                  <span>Sadapan Nira: Pagi & Sore Hari</span>
                </p>
              </div>
              <div className="pt-1">
                <a
                  href={LOCATION_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-sage hover:text-mist transition-colors"
                >
                  <span>Lihat Titik di Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-mist/75">
            <p>
              © {new Date().getFullYear()} TANIRA - Tunas Alam Nira Asli.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
