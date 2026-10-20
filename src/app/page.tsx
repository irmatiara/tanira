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
  Leaf,
  Utensils,
  Info,
  ArrowDown,
  Sun,
  Award,
  MapPin,
  ExternalLink,
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

export default function TaniraLandingPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const advantageIcons = [
    <ShieldCheck key="shield" className="w-6 h-6 text-[#A2AC82]" />,
    <Flame key="flame" className="w-6 h-6 text-[#A2AC82]" />,
    <Sparkles key="sparkles" className="w-6 h-6 text-[#A2AC82]" />,
    <Droplets key="droplets" className="w-6 h-6 text-[#A2AC82]" />,
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#A2AC82]/30 text-[#2E2D1D]">
      {/* Top Subtle Banner */}
      <div className="bg-[#2E2D1D] text-[#F1F2ED] text-xs sm:text-sm py-2.5 px-4 text-center border-b border-[#5B6D49]/50">
        <span className="inline-flex items-center gap-2 font-medium tracking-wide">
          <Leaf className="w-3.5 h-3.5 text-[#A2AC82]" />
          <span>
            <strong className="text-[#A2AC82]">TANIRA</strong> — Tunas Alam Nira
            Asli • Olahan Tradisional Keluarga dari 100% Tetesan Nira Aren Murni
          </span>
        </span>
      </div>

      {/* Navigation Bar - Deep Forest Green */}
      <header className="sticky top-0 z-40 bg-[#0C3C01]/95 backdrop-blur-md border-b border-[#5B6D49]/60 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-[#F1F2ED] border-2 border-[#A2AC82] shadow-xs flex items-center justify-center p-1">
              <Image
                src="/images/logo-tanira.png"
                alt="Logo Tanira - Tunas Alam Nira Asli"
                width={56}
                height={56}
                className="object-contain w-full h-full"
                priority
              />
            </div>
            <div>
              <span className="block font-[family-name:var(--font-serif)] text-2xl font-normal tracking-wider text-[#F1F2ED]">
                TANIRA
              </span>
              <span className="block text-[10px] tracking-[0.22em] uppercase text-[#A2AC82] font-semibold">
                Tunas Alam Nira Asli
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#F1F2ED]/85">
            <a
              href="#keunggulan"
              className="hover:text-[#A2AC82] transition-colors"
            >
              Keunggulan Asli
            </a>
            <a
              href="#proses"
              className="hover:text-[#A2AC82] transition-colors"
            >
              Proses Pembuatan
            </a>
            <a
              href="#produk"
              className="hover:text-[#A2AC82] transition-colors"
            >
              Gula Cetak & Air Nira
            </a>
            <a
              href="#perbandingan"
              className="hover:text-[#A2AC82] transition-colors"
            >
              Ciri Keaslian
            </a>
            <a href="#faq" className="hover:text-[#A2AC82] transition-colors">
              Tanya Jawab
            </a>
            <a
              href="#lokasi"
              className="hover:text-[#A2AC82] transition-colors"
            >
              Lokasi
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#proses"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold bg-[#5B6D49] text-[#F1F2ED] border border-[#A2AC82]/50 hover:bg-[#A2AC82] hover:text-[#0C3C01] transition-all"
            >
              <Flame className="w-4 h-4" />
              <span>Kisah Dapur Aren</span>
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* HERO SECTION - Dominant Deep Botanical Green (#0C3C01 & #5B6D49) */}
        <section className="relative overflow-hidden bg-hero-botanical text-[#F1F2ED] pt-12 pb-20 lg:pt-18 lg:pb-28 border-b border-[#5B6D49]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
              {/* Left Column: Story & Headline */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5B6D49]/50 border border-[#A2AC82]/45 text-[#A2AC82] text-xs font-semibold tracking-wide uppercase">
                  <Sun className="w-3.5 h-3.5 text-[#A2AC82]" />
                  <span>Warisan Olahan Tradisional Orang Tua</span>
                </div>

                <h1 className="font-[family-name:var(--font-serif)] text-4xl sm:text-5xl lg:text-[3.25rem] font-normal text-[#F1F2ED] leading-[1.15] tracking-tight">
                  Kemurnian Tetes Nira Alam,{" "}
                  <span className="italic text-[#A2AC82]">Diolah Jujur</span>{" "}
                  Menjadi Gula Aren Asli.
                </h1>

                <p className="text-base sm:text-lg text-[#F1F2ED]/85 leading-relaxed">
                  {BRAND_INFO.storyLead} Kami berfokus menghadirkan{" "}
                  <strong className="text-[#A2AC82] font-semibold">
                    Gula Aren Cetak
                  </strong>{" "}
                  berkualitas murni, serta menyediakan{" "}
                  <strong className="text-[#A2AC82] font-semibold">
                    Air Nira Aren Segar
                  </strong>{" "}
                  langsung dari sadapan harian.
                </p>

                {/* Key Purity Pills in Green Glass */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="bg-[#5B6D49]/35 backdrop-blur-xs p-3.5 rounded-xl border border-[#A2AC82]/35">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#A2AC82]">
                      Komposisi
                    </p>
                    <p className="text-sm font-bold text-[#F1F2ED] mt-0.5">
                      100% Nira Murni
                    </p>
                    <p className="text-xs text-[#F1F2ED]/75 mt-0.5">
                      Tanpa gula pasir
                    </p>
                  </div>

                  <div className="bg-[#5B6D49]/35 backdrop-blur-xs p-3.5 rounded-xl border border-[#A2AC82]/35">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#A2AC82]">
                      Proses Masak
                    </p>
                    <p className="text-sm font-bold text-[#F1F2ED] mt-0.5">
                      Tungku Kayu Bakar
                    </p>
                    <p className="text-xs text-[#F1F2ED]/75 mt-0.5">
                      Aroma wangi alami
                    </p>
                  </div>

                  <div className="bg-[#5B6D49]/35 backdrop-blur-xs p-3.5 rounded-xl border border-[#A2AC82]/35">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#A2AC82]">
                      Varian Hasil
                    </p>
                    <p className="text-sm font-bold text-[#F1F2ED] mt-0.5">
                      Gula Cetak & Nira
                    </p>
                    <p className="text-xs text-[#F1F2ED]/75 mt-0.5">
                      Segar dari kebun
                    </p>
                  </div>
                </div>

                {/* Action Links */}
                <div className="flex flex-wrap items-center gap-4 pt-3">
                  <a
                    href="#proses"
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#A2AC82] text-[#0C3C01] font-bold text-sm hover:bg-[#F1F2ED] transition-all shadow-md"
                  >
                    <span>Telusuri Proses Pembuatan</span>
                    <ArrowDown className="w-4 h-4" />
                  </a>
                  <a
                    href="#produk"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#5B6D49]/40 text-[#F1F2ED] font-semibold text-sm border border-[#A2AC82]/45 hover:bg-[#5B6D49] transition-all"
                  >
                    <span>Lihat Gula Cetak & Air Nira</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Editorial Image Showcase */}
              <div className="lg:col-span-6 relative">
                <div className="relative rounded-3xl overflow-hidden border-2 border-[#A2AC82]/60 shadow-2xl bg-[#2E2D1D]">
                  <Image
                    src="/images/gula-aren-hero.jpg"
                    alt="Gula Aren Cetak Asli dan Air Nira Aren Segar Tanira"
                    width={900}
                    height={650}
                    className="w-full h-[380px] sm:h-[460px] object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C3C01]/90 via-transparent to-transparent" />

                  {/* Bottom Caption inside Hero Image */}
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-[#0C3C01]/90 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-[#A2AC82]/50 shadow-lg text-[#F1F2ED]">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#A2AC82]">
                          Hasil Kebun Aren Keluarga
                        </span>
                        <h2 className="font-[family-name:var(--font-serif)] text-xl sm:text-2xl font-normal text-[#F1F2ED] mt-0.5">
                          Gula Aren Cetak & Air Nira Segar
                        </h2>
                        <p className="text-xs sm:text-sm text-[#F1F2ED]/85 mt-1">
                          Kiri: Air nira aren murni hasil sadapan pagi. Kanan:
                          Gula aren cetak padat yang lembut dan harum karamel.
                        </p>
                      </div>
                      <div className="hidden sm:flex shrink-0 w-12 h-12 rounded-xl bg-[#5B6D49] border border-[#A2AC82]/50 items-center justify-center text-[#F1F2ED]">
                        <Award className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* KEUNGGULAN GULA AREN ASLI SECTION - Soft Sage Surface with Forest Cards */}
        <section
          id="keunggulan"
          className="py-20 lg:py-24 bg-sage-surface border-b border-[#5B6D49]/30"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#0C3C01] text-[#A2AC82] text-xs font-bold uppercase tracking-[0.18em]">
                Mengapa Kemurnian Itu Penting?
              </span>
              <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl lg:text-[2.75rem] font-normal text-[#0C3C01] leading-tight">
                Keunggulan Gula Aren Asli Olahan Orang Tua Kami
              </h2>
              <p className="text-base text-[#2E2D1D]/85 leading-relaxed">
                Gula merah dari pohon aren (<em>Arenga pinnata</em>) memiliki
                karakter rasa, keharuman, dan kelembutan yang tidak bisa ditiru
                oleh gula merah campuran. Berikut adalah 4 hal yang selalu kami
                jaga di setiap cetakannya:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-14">
              {PURITY_ADVANTAGES.map((item, idx) => (
                <div
                  key={item.id}
                  className="bg-[#F1F2ED] rounded-2xl p-6 sm:p-8 border-2 border-[#5B6D49]/30 shadow-sm hover:shadow-md hover:border-[#0C3C01] transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-[#0C3C01] border border-[#5B6D49] flex items-center justify-center shadow-xs">
                        {advantageIcons[idx]}
                      </div>
                      <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#5B6D49] text-[#F1F2ED]">
                        {item.metric}
                      </span>
                    </div>

                    <p className="text-xs font-bold uppercase tracking-wider text-[#5B6D49]">
                      {item.subtitle}
                    </p>
                    <h3 className="font-[family-name:var(--font-serif)] text-2xl font-normal text-[#0C3C01] mt-1">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#2E2D1D]/85 leading-relaxed mt-3">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#A2AC82]/50 flex items-center gap-2 text-xs font-semibold text-[#0C3C01]">
                    <CheckCircle2 className="w-4 h-4 text-[#5B6D49]" />
                    <span>Dijaga keasliannya sejak dari pohon aren</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CERITA PROSES PEMBUATAN (6 TAHAP) - Full Moss Green (#5B6D49) Section */}
        <section
          id="proses"
          className="py-20 lg:py-28 bg-[#5B6D49] text-[#F1F2ED] border-b border-[#0C3C01]"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-14">
              <div className="lg:col-span-7 space-y-3">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0C3C01]/60 border border-[#A2AC82]/40 text-xs font-bold uppercase tracking-[0.18em] text-[#A2AC82]">
                  <Flame className="w-4 h-4 text-[#A2AC82]" />
                  <span>Dari Pohon Aren hingga ke Cetakan</span>
                </span>
                <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl lg:text-[2.75rem] font-normal text-[#F1F2ED] leading-tight">
                  Proses Pembuatan Gula Aren Cetak Secara Tradisional
                </h2>
              </div>
              <div className="lg:col-span-5">
                <p className="text-sm sm:text-base text-[#F1F2ED]/90 leading-relaxed">
                  Setiap keping gula aren membutuhkan kesabaran. Dimulai dari
                  menyadap tetesan air nira saat embun pagi masih turun, hingga
                  mengaduk kawah nira yang mendidih di atas perapian kayu bakar.
                </p>
              </div>
            </div>

            {/* Full-Width Visual Feature Banner */}
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#A2AC82]/60 shadow-xl h-[340px] sm:h-[420px] lg:h-[460px] bg-[#2E2D1D] mb-12">
              <Image
                src="/images/proses-nira.jpg"
                alt="Proses Perebusan Air Nira Aren di Wajan Tungku Kayu Bakar"
                width={1200}
                height={650}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C3C01]/95 via-[#0C3C01]/35 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 flex flex-col lg:flex-row lg:items-end justify-between gap-6 text-[#F1F2ED]">
                <div className="max-w-2xl">
                  <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold bg-[#A2AC82] text-[#0C3C01] mb-2.5">
                    Dapur Pengolahan Tradisional
                  </span>
                  <h3 className="font-[family-name:var(--font-serif)] text-2xl sm:text-3xl lg:text-4xl font-normal">
                    Perebusan Nira Segar di Atas Tungku Kayu Bakar
                  </h3>
                  <p className="text-xs sm:text-sm text-[#F1F2ED]/90 mt-1.5 leading-relaxed">
                    Di samping tungku tampak bumbung bambu penampung nira segar.
                    Air nira dimasak perlahan selama 3–4 jam hingga berbusa
                    keemasan dan mengental menjadi karamel gula aren murni.
                  </p>
                </div>

                <div className="hidden sm:flex items-center gap-3 shrink-0">
                  <div className="bg-[#0C3C01]/85 backdrop-blur-md px-4 py-3 rounded-2xl border border-[#A2AC82]/40">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-[#A2AC82]">
                      Bahan Bakar
                    </span>
                    <span className="text-sm font-bold text-[#F1F2ED]">
                      Tungku Kayu
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* All 6 Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROCESS_STEPS.map((step) => (
                <div
                  key={step.stepNumber}
                  className="text-left rounded-2xl p-6 transition-all border-2 bg-[#F1F2ED] text-[#2E2D1D] border-[#A2AC82]/60 hover:bg-white hover:border-[#0C3C01] shadow-sm hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="font-[family-name:var(--font-serif)] text-2xl font-normal px-3.5 py-1 rounded-xl bg-[#0C3C01] text-[#A2AC82]">
                        Tahap {step.stepNumber}
                      </span>
                    </div>

                    <h4 className="font-[family-name:var(--font-serif)] text-xl font-normal mt-2 text-[#0C3C01]">
                      {step.title}
                    </h4>
                    <p className="text-xs font-semibold mt-0.5 text-[#7E7B56]">
                      {step.localTerm}
                    </p>
                    <p className="text-sm leading-relaxed mt-3 text-[#2E2D1D]/85">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#A2AC82]/50 flex items-center justify-between text-xs font-semibold text-[#0C3C01]">
                    <span>{step.keyDetail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRODUK KAMI SECTION (GULA CETAK & AIR NIRA MURNI) */}
        <section
          id="produk"
          className="py-20 lg:py-28 bg-sage-surface border-b border-[#5B6D49]/35"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#0C3C01] text-[#A2AC82] text-xs font-bold uppercase tracking-[0.18em]">
                Hasil Olahan Keluarga Tanira
              </span>
              <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl lg:text-[2.75rem] font-normal text-[#0C3C01]">
                Varian Hasil Aren Kami
              </h2>
              <p className="text-base text-[#2E2D1D]/85 leading-relaxed">
                Untuk menjaga kualitas dan keaslian rasa, orang tua kami hanya
                memproduksi{" "}
                <strong className="text-[#0C3C01]">Gula Aren Cetak</strong>{" "}
                sebagai produk utama. Namun, jika ada yang ingin menikmati atau
                mengolah{" "}
                <strong className="text-[#0C3C01]">Air Nira Aren Segar</strong>{" "}
                sebelum dimasak menjadi gula, biasanya juga dapat kami sediakan.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              {PRODUCTS.map((product) => {
                const isPrimary = product.isPrimary;
                return (
                  <div
                    key={product.id}
                    className={`rounded-3xl p-7 sm:p-9 border-2 flex flex-col justify-between transition-all ${
                      isPrimary
                        ? "bg-[#0C3C01] text-[#F1F2ED] border-[#A2AC82] shadow-xl"
                        : "bg-[#F1F2ED] text-[#2E2D1D] border-[#5B6D49]/45 shadow-md"
                    }`}
                  >
                    <div>
                      {/* Product Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                        <span
                          className={`px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                            isPrimary
                              ? "bg-[#A2AC82] text-[#0C3C01]"
                              : "bg-[#5B6D49] text-[#F1F2ED]"
                          }`}
                        >
                          {product.badge}
                        </span>
                        <span
                          className={`text-xs font-semibold ${
                            isPrimary ? "text-[#A2AC82]" : "text-[#5B6D49]"
                          }`}
                        >
                          100% Asli Tanpa Campuran
                        </span>
                      </div>

                      <h3
                        className={`font-[family-name:var(--font-serif)] text-2xl sm:text-3xl font-normal ${
                          isPrimary ? "text-[#F1F2ED]" : "text-[#0C3C01]"
                        }`}
                      >
                        {product.name}
                      </h3>
                      <p
                        className={`text-sm sm:text-base leading-relaxed mt-3 ${
                          isPrimary
                            ? "text-[#F1F2ED]/85"
                            : "text-[#2E2D1D]/85"
                        }`}
                      >
                        {product.fullDescription}
                      </p>

                      {/* Characteristics Grid */}
                      <div
                        className={`grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 p-4 rounded-2xl border ${
                          isPrimary
                            ? "bg-[#5B6D49]/35 border-[#A2AC82]/40"
                            : "bg-[#A2AC82]/25 border-[#5B6D49]/30"
                        }`}
                      >
                        {product.characteristics.map((char) => (
                          <div key={char.label} className="space-y-0.5">
                            <span
                              className={`text-[11px] font-bold uppercase tracking-wider block ${
                                isPrimary ? "text-[#A2AC82]" : "text-[#5B6D49]"
                              }`}
                            >
                              {char.label}
                            </span>
                            <span
                              className={`text-xs sm:text-sm font-semibold block ${
                                isPrimary ? "text-[#F1F2ED]" : "text-[#2E2D1D]"
                              }`}
                            >
                              {char.value}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Highlights */}
                      <div className="mt-6 space-y-2.5">
                        <h4
                          className={`text-xs font-bold uppercase tracking-wider ${
                            isPrimary ? "text-[#A2AC82]" : "text-[#0C3C01]"
                          }`}
                        >
                          Keunggulan Utama:
                        </h4>
                        <ul className="space-y-2">
                          {product.highlights.map((hl) => (
                            <li
                              key={hl}
                              className={`flex items-start gap-2.5 text-sm ${
                                isPrimary
                                  ? "text-[#F1F2ED]/90"
                                  : "text-[#2E2D1D]/85"
                              }`}
                            >
                              <CheckCircle2
                                className={`w-4 h-4 shrink-0 mt-0.5 ${
                                  isPrimary
                                    ? "text-[#A2AC82]"
                                    : "text-[#0C3C01]"
                                }`}
                              />
                              <span>{hl}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Culinary Usage Ideas */}
                      <div
                        className={`mt-6 pt-5 border-t ${
                          isPrimary
                            ? "border-[#5B6D49]"
                            : "border-[#A2AC82]/60"
                        }`}
                      >
                        <h4
                          className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider ${
                            isPrimary ? "text-[#A2AC82]" : "text-[#5B6D49]"
                          }`}
                        >
                          <Utensils className="w-3.5 h-3.5" />
                          <span>Cocok Digunakan Untuk:</span>
                        </h4>
                        <ul className="mt-2.5 space-y-1.5">
                          {product.usageIdeas.map((idea) => (
                            <li
                              key={idea}
                              className={`text-xs sm:text-sm flex items-center gap-2 ${
                                isPrimary
                                  ? "text-[#F1F2ED]/85"
                                  : "text-[#2E2D1D]/80"
                              }`}
                            >
                              <span
                                className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                                  isPrimary ? "bg-[#A2AC82]" : "bg-[#5B6D49]"
                                }`}
                              />
                              <span>{idea}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Storage & Availability Footer */}
                    <div
                      className={`mt-8 pt-5 border-t space-y-4 ${
                        isPrimary ? "border-[#5B6D49]" : "border-[#A2AC82]/60"
                      }`}
                    >
                      <div
                        className={`rounded-xl p-3.5 border text-xs ${
                          isPrimary
                            ? "bg-[#2E2D1D]/60 border-[#5B6D49] text-[#F1F2ED]/90"
                            : "bg-white border-[#A2AC82]/60 text-[#2E2D1D]/85"
                        }`}
                      >
                        <strong
                          className={`block mb-0.5 ${
                            isPrimary ? "text-[#A2AC82]" : "text-[#0C3C01]"
                          }`}
                        >
                          Tips Penyimpanan:
                        </strong>
                        {product.storageTip}
                      </div>

                      {ORDERING_CONFIG.enableDirectOrder ? (
                        <button
                          type="button"
                          className="w-full py-3.5 px-5 rounded-xl bg-[#A2AC82] text-[#0C3C01] font-bold text-sm hover:bg-[#F1F2ED] transition-colors"
                        >
                          Pesan {product.name}
                        </button>
                      ) : (
                        <div
                          className={`flex items-start gap-3 p-3.5 rounded-xl border text-xs ${
                            isPrimary
                              ? "bg-[#5B6D49]/40 border-[#A2AC82]/40 text-[#F1F2ED]"
                              : "bg-[#A2AC82]/30 border-[#5B6D49]/40 text-[#2E2D1D]"
                          }`}
                        >
                          <Info
                            className={`w-4 h-4 shrink-0 mt-0.5 ${
                              isPrimary ? "text-[#A2AC82]" : "text-[#0C3C01]"
                            }`}
                          />
                          <div>
                            <span
                              className={`font-bold block ${
                                isPrimary ? "text-[#A2AC82]" : "text-[#0C3C01]"
                              }`}
                            >
                              Info Ketersediaan:
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
              <div className="mt-10 bg-[#5B6D49] text-[#F1F2ED] rounded-2xl p-6 border-2 border-[#A2AC82]/60 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#0C3C01] border border-[#A2AC82]/40 flex items-center justify-center shrink-0 text-[#A2AC82]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#F1F2ED]">
                      Pengembangan Fitur Pemesanan Langsung
                    </h4>
                    <p className="text-xs sm:text-sm text-[#F1F2ED]/85 mt-0.5">
                      Halaman ini dirancang sebagai pusat informasi proses &
                      keaslian produk Tanira. Fitur pemesanan langsung (untuk
                      Gula Aren Cetak maupun jadwal sadap Air Nira) sedang
                      disiapkan untuk pengembangan selanjutnya.
                    </p>
                  </div>
                </div>
                <span className="shrink-0 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#0C3C01] text-[#A2AC82] border border-[#A2AC82]/50">
                  Segera Hadir
                </span>
              </div>
            )}
          </div>
        </section>

        {/* TABEL PERBANDINGAN: GULA AREN ASLI VS CAMPURAN - Deep Forest Green (#0C3C01) */}
        <section
          id="perbandingan"
          className="py-20 lg:py-24 bg-[#0C3C01] text-[#F1F2ED] border-b border-[#5B6D49]"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#5B6D49] text-[#F1F2ED] text-xs font-bold uppercase tracking-[0.18em]">
                Panduan Mengenali Kualitas
              </span>
              <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl lg:text-[2.75rem] font-normal text-[#F1F2ED]">
                Cara Membedakan Gula Aren Cetak Asli vs Campuran
              </h2>
              <p className="text-sm sm:text-base text-[#F1F2ED]/80 leading-relaxed">
                Sering kali pembeli sulit membedakan mana gula aren murni dan
                mana yang sudah dicampur gula pasir. Berikut ciri-ciri fisik
                yang paling mudah dikenali di rumah:
              </p>
            </div>

            <div className="bg-[#2E2D1D] rounded-3xl overflow-hidden border-2 border-[#5B6D49] shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-12 bg-[#5B6D49] border-b border-[#A2AC82]/40 text-xs font-bold uppercase tracking-wider">
                <div className="p-4 sm:p-5 md:col-span-3 text-[#F1F2ED]">
                  Aspek Pengujian
                </div>
                <div className="p-4 sm:p-5 md:col-span-5 text-[#F1F2ED] border-t md:border-t-0 md:border-l border-[#A2AC82]/40 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A2AC82] shrink-0" />
                  <span>Gula Aren Cetak Asli (Tanira)</span>
                </div>
                <div className="p-4 sm:p-5 md:col-span-4 text-[#F1F2ED]/80 border-t md:border-t-0 md:border-l border-[#A2AC82]/40 flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-[#A2AC82] shrink-0" />
                  <span>Gula Merah Campuran</span>
                </div>
              </div>

              <div className="divide-y divide-[#5B6D49]/50">
                {COMPARISON_ROWS.map((row) => (
                  <div
                    key={row.aspect}
                    className="grid grid-cols-1 md:grid-cols-12 text-sm"
                  >
                    <div className="p-4 sm:p-5 md:col-span-3 font-bold text-[#A2AC82] bg-[#0C3C01]/40">
                      {row.aspect}
                    </div>
                    <div className="p-4 sm:p-5 md:col-span-5 text-[#F1F2ED] md:border-l border-[#5B6D49]/50 leading-relaxed">
                      {row.authenticAren}
                    </div>
                    <div className="p-4 sm:p-5 md:col-span-4 text-[#F1F2ED]/70 md:border-l border-[#5B6D49]/50 leading-relaxed">
                      {row.mixedSugar}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TANYA JAWAB (FAQ) SECTION - Sage Green Surface */}
        <section
          id="faq"
          className="py-20 lg:py-24 bg-sage-surface border-b border-[#5B6D49]/35"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-3 mb-12">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#0C3C01] text-[#A2AC82] text-xs font-bold uppercase tracking-[0.18em]">
                Tanya Jawab
              </span>
              <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl font-normal text-[#0C3C01]">
                Hal yang Sering Ditanyakan
              </h2>
              <p className="text-sm sm:text-base text-[#2E2D1D]/85">
                Informasi seputar Gula Aren Cetak dan Air Nira Aren dari kebun
                keluarga kami.
              </p>
            </div>

            <div className="space-y-3.5">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={faq.question}
                    className={`rounded-2xl border-2 overflow-hidden transition-all ${
                      isOpen
                        ? "bg-[#F1F2ED] border-[#0C3C01] shadow-md"
                        : "bg-[#F1F2ED]/90 border-[#5B6D49]/40"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-[#A2AC82]/20 transition-colors"
                    >
                      <span className="font-bold text-base text-[#0C3C01]">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#5B6D49] shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-[#0C3C01]" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5 pt-2 text-sm sm:text-base text-[#2E2D1D]/85 leading-relaxed border-t border-[#A2AC82]/50">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* LOKASI DAPUR & PENGOLAHAN AREN (GOOGLE MAPS SECTION) */}
        <section
          id="lokasi"
          className="py-20 lg:py-24 bg-[#5B6D49] text-[#F1F2ED]"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
              {/* Left Info Column */}
              <div className="lg:col-span-5 bg-[#0C3C01] rounded-3xl p-7 sm:p-9 border-2 border-[#A2AC82]/50 shadow-xl flex flex-col justify-between">
                <div>
                  <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#5B6D49]/60 border border-[#A2AC82]/40 text-xs font-bold uppercase tracking-wider text-[#A2AC82]">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Titik Lokasi Pengolahan</span>
                  </span>

                  <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl font-normal text-[#F1F2ED] mt-4 leading-tight">
                    {LOCATION_INFO.title}
                  </h2>

                  <p className="text-sm sm:text-base text-[#F1F2ED]/85 leading-relaxed mt-3">
                    {LOCATION_INFO.description}
                  </p>

                  <div className="mt-6 p-4 rounded-2xl bg-[#5B6D49]/35 border border-[#A2AC82]/35 space-y-2">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#A2AC82] block">
                        Wilayah
                      </span>
                      <span className="text-sm font-semibold text-[#F1F2ED] block">
                        {LOCATION_INFO.region}
                      </span>
                    </div>
                    <div className="pt-2 border-t border-[#A2AC82]/25">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#A2AC82] block">
                        Koordinat Peta
                      </span>
                      <span className="text-xs font-mono text-[#F1F2ED]/90 block">
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
                    className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-xl bg-[#A2AC82] text-[#0C3C01] font-bold text-sm hover:bg-[#F1F2ED] transition-all shadow-md"
                  >
                    <MapPin className="w-4 h-4" />
                    <span>Buka Petunjuk Arah di Google Maps</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Right Map Embed Column */}
              <div className="lg:col-span-7 rounded-3xl overflow-hidden border-2 border-[#A2AC82] shadow-2xl bg-[#2E2D1D] min-h-[380px] sm:min-h-[460px] relative">
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

      {/* FOOTER - Deep Forest Canopy (#0C3C01) */}
      <footer className="bg-[#0C3C01] text-[#F1F2ED] border-t-2 border-[#5B6D49] py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-[#5B6D49]/60">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-[#F1F2ED] border-2 border-[#A2AC82] p-1.5 flex items-center justify-center shadow-sm">
                <Image
                  src="/images/logo-tanira.png"
                  alt="Logo Tanira"
                  width={60}
                  height={60}
                  className="object-contain w-full h-full"
                />
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-serif)] text-2xl font-normal text-[#F1F2ED]">
                  TANIRA
                </h3>
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#A2AC82]">
                  Tunas Alam Nira Asli
                </p>
                <p className="text-xs text-[#F1F2ED]/80 mt-1 max-w-md">
                  Usaha keluarga pengrajin Gula Aren Cetak tradisional & penyedia
                  Air Nira Aren murni tanpa bahan campuran.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 text-sm font-medium text-[#F1F2ED]/85">
              <a
                href="#keunggulan"
                className="hover:text-[#A2AC82] transition-colors"
              >
                Keunggulan
              </a>
              <a
                href="#proses"
                className="hover:text-[#A2AC82] transition-colors"
              >
                Proses Pembuatan
              </a>
              <a
                href="#produk"
                className="hover:text-[#A2AC82] transition-colors"
              >
                Produk
              </a>
              <a
                href="#perbandingan"
                className="hover:text-[#A2AC82] transition-colors"
              >
                Uji Keaslian
              </a>
              <a href="#faq" className="hover:text-[#A2AC82] transition-colors">
                FAQ
              </a>
              <a
                href="#lokasi"
                className="hover:text-[#A2AC82] transition-colors"
              >
                Lokasi
              </a>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F1F2ED]/75">
            <p>
              © {new Date().getFullYear()} TANIRA (Tunas Alam Nira Asli). Dibuat
              untuk menjaga tradisi kemurnian gula aren keluarga.
            </p>
            <p className="font-semibold text-[#A2AC82]">
              100% Nira Aren Murni • Tanpa Pengawet • Olahan Tradisional
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
