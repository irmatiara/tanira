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
} from "lucide-react";
import {
  BRAND_INFO,
  PURITY_ADVANTAGES,
  PROCESS_STEPS,
  PRODUCTS,
  COMPARISON_ROWS,
  FAQS,
  ORDERING_CONFIG,
} from "@/data/tanira";

export default function TaniraLandingPage() {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(3); // Default highlight on Tahap 04 (Perebusan)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const advantageIcons = [
    <ShieldCheck key="shield" className="w-6 h-6 text-[#7E7B56]" />,
    <Flame key="flame" className="w-6 h-6 text-[#B86B2B]" />,
    <Sparkles key="sparkles" className="w-6 h-6 text-[#7E7B56]" />,
    <Droplets key="droplets" className="w-6 h-6 text-[#B86B2B]" />,
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#362013]">
      {/* Top Subtle Banner */}
      <div className="bg-[#362013] text-[#F2ECE1] text-xs sm:text-sm py-2.5 px-4 text-center border-b border-[#5E371F]">
        <span className="inline-flex items-center gap-2 font-medium tracking-wide">
          <Leaf className="w-3.5 h-3.5 text-[#D99B4E]" />
          <span>
            <strong>TANIRA</strong> — Tunas Alam Nira Asli • Olahan Tradisional
            Keluarga dari 100% Tetesan Nira Aren Murni
          </span>
        </span>
      </div>

      {/* Navigation Bar */}
      <header className="sticky top-0 z-40 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#7E7B56]/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-white border border-[#7E7B56]/25 shadow-xs flex items-center justify-center p-1">
              <Image src="/images/logo-tanira.png" alt="Logo Tanira - Tunas Alam Nira Asli" width={56} height={56} className="object-contain w-full h-full" priority />
            </div>
            <div>
              <span className="block font-[family-name:var(--font-serif)] text-2xl font-bold tracking-wider text-[#362013]">TANIRA</span>
              <span className="block text-[10px] tracking-[0.22em] uppercase text-[#7E7B56] font-semibold">Tunas Alam Nira Asli</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#5E371F]">
            <a href="#keunggulan" className="hover:text-[#362013] transition-colors">Keunggulan Asli</a>
            <a href="#proses" className="hover:text-[#362013] transition-colors">Proses Pembuatan</a>
            <a href="#produk" className="hover:text-[#362013] transition-colors">Gula Cetak & Air Nira</a>
            <a href="#perbandingan" className="hover:text-[#362013] transition-colors">Ciri Keaslian</a>
            <a href="#faq" className="hover:text-[#362013] transition-colors">Tanya Jawab</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="#proses" className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold bg-[#7E7B56]/15 text-[#5C593B] border border-[#7E7B56]/30 hover:bg-[#7E7B56] hover:text-white transition-all">
              <Flame className="w-4 h-4" />
              <span>Kisah Dapur Aren</span>
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-organic-pattern pt-10 pb-20 lg:pt-16 lg:pb-28 border-b border-[#7E7B56]/15">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
              {/* Left Column: Story & Headline */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2ECE1] border border-[#7E7B56]/30 text-[#5C593B] text-xs font-semibold tracking-wide uppercase">
                  <Sun className="w-3.5 h-3.5 text-[#B86B2B]" />
                  <span>Warisan Olahan Tradisional Orang Tua</span>
                </div>

                <h1 className="font-[family-name:var(--font-serif)] text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-[#362013] leading-[1.12] tracking-tight">
                  Kemurnian Tetes Nira Alam,{" "}
                  <span className="italic font-semibold text-[#B86B2B]">
                    Diolah Jujur
                  </span>{" "}
                  Menjadi Gula Aren Asli.
                </h1>

                <p className="text-base sm:text-lg text-[#5E371F] leading-relaxed">
                  {BRAND_INFO.storyLead} Kami berfokus menghadirkan{" "}
                  <strong className="text-[#362013] font-semibold">
                    Gula Aren Cetak
                  </strong>{" "}
                  berkualitas murni, serta menyediakan{" "}
                  <strong className="text-[#362013] font-semibold">
                    Air Nira Aren Segar
                  </strong>{" "}
                  langsung dari sadapan harian.
                </p>

                {/* Key Purity Pills */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="bg-white/80 backdrop-blur-xs p-3.5 rounded-xl border border-[#7E7B56]/20 shadow-2xs">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#7E7B56]">Komposisi</p>
                    <p className="text-sm font-bold text-[#362013] mt-0.5">100% Nira Murni</p>
                    <p className="text-xs text-[#5E371F]/80 mt-0.5">Tanpa gula pasir</p>
                  </div>

                  <div className="bg-white/80 backdrop-blur-xs p-3.5 rounded-xl border border-[#7E7B56]/20 shadow-2xs">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#7E7B56]">Proses Masak</p>
                    <p className="text-sm font-bold text-[#362013] mt-0.5">Tungku Kayu Bakar</p>
                    <p className="text-xs text-[#5E371F]/80 mt-0.5">Aroma wangi alami</p>
                  </div>

                  <div className="bg-white/80 backdrop-blur-xs p-3.5 rounded-xl border border-[#7E7B56]/20 shadow-2xs">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#7E7B56]">Varian Hasil</p>
                    <p className="text-sm font-bold text-[#362013] mt-0.5">Gula Cetak & Nira</p>
                    <p className="text-xs text-[#5E371F]/80 mt-0.5">Segar dari kebun</p>
                  </div>
                </div>

                {/* Action Links */}
                <div className="flex flex-wrap items-center gap-4 pt-3">
                  <a href="#proses" className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#362013] text-[#FAF7F2] font-semibold text-sm hover:bg-[#5E371F] transition-all shadow-sm">
                    <span>Telusuri Proses Pembuatan</span>
                    <ArrowDown className="w-4 h-4" />
                  </a>
                  <a href="#produk" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#362013] font-semibold text-sm border border-[#7E7B56]/35 hover:bg-[#F2ECE1] transition-all">
                    <span>Lihat Gula Cetak & Air Nira</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Editorial Image Showcase */}
              <div className="lg:col-span-6 relative">
                <div className="relative rounded-3xl overflow-hidden border-2 border-[#7E7B56]/25 shadow-xl bg-[#362013]">
                  <Image src="/images/gula-aren-hero.jpg" alt="Gula Aren Cetak Asli dan Air Nira Aren Segar Tanira" width={900} height={650} className="w-full h-[380px] sm:h-[460px] object-cover" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#24140B]/80 via-transparent to-transparent" />

                  {/* Bottom Caption inside Hero Image */}
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-[#FAF7F2]/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-[#7E7B56]/30 shadow-lg">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#B86B2B]">Hasil Kebun Aren Keluarga</span>
                        <h2 className="font-[family-name:var(--font-serif)] text-xl sm:text-2xl font-bold text-[#362013] mt-0.5">Gula Aren Cetak & Air Nira Segar</h2>
                        <p className="text-xs sm:text-sm text-[#5E371F] mt-1">
                          Kiri: Air nira aren murni hasil sadapan pagi. Kanan:
                          Gula aren cetak padat yang lembut dan harum karamel.
                        </p>
                      </div>
                      <div className="hidden sm:flex shrink-0 w-12 h-12 rounded-xl bg-[#7E7B56]/15 border border-[#7E7B56]/30 items-center justify-center text-[#5C593B]">
                        <Award className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* KEUNGGULAN GULA AREN ASLI SECTION */}
        <section id="keunggulan" className="py-20 lg:py-24 bg-[#FAF7F2] border-b border-[#7E7B56]/15">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#7E7B56]">Mengapa Kemurnian Itu Penting?</span>
              <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#362013]">Keunggulan Gula Aren Asli Olahan Orang Tua Kami</h2>
              <p className="text-base text-[#5E371F] leading-relaxed">
                Gula merah dari pohon aren (<em>Arenga pinnata</em>) memiliki
                karakter rasa, keharuman, dan kelembutan yang tidak bisa ditiru
                oleh gula merah campuran. Berikut adalah 4 hal yang selalu kami
                jaga di setiap cetakannya:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-14">
              {PURITY_ADVANTAGES.map((item, idx) => (
                <div key={item.id} className="bg-white rounded-2xl p-6 sm:p-8 border border-[#7E7B56]/20 shadow-xs hover:shadow-md hover:border-[#7E7B56]/40 transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-[#F2ECE1] border border-[#7E7B56]/25 flex items-center justify-center">{advantageIcons[idx]}</div>
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#7E7B56]/15 text-[#5C593B] border border-[#7E7B56]/25">{item.metric}</span>
                    </div>

                    <p className="text-xs font-bold uppercase tracking-wider text-[#B86B2B]">{item.subtitle}</p>
                    <h3 className="font-[family-name:var(--font-serif)] text-2xl font-bold text-[#362013] mt-1">{item.title}</h3>
                    <p className="text-sm sm:text-base text-[#5E371F] leading-relaxed mt-3">{item.description}</p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#F2ECE1] flex items-center gap-2 text-xs font-semibold text-[#7E7B56]">
                    <CheckCircle2 className="w-4 h-4 text-[#7E7B56]" />
                    <span>Dijaga keasliannya sejak dari pohon aren</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CERITA PROSES PEMBUATAN (6 TAHAP) */}
        <section id="proses" className="py-20 lg:py-28 bg-[#F2ECE1] border-b border-[#7E7B56]/20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-14">
              <div className="lg:col-span-7 space-y-3">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#B86B2B]">
                  <Flame className="w-4 h-4" />
                  <span>Dari Pohon Aren hingga ke Cetakan</span>
                </span>
                <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#362013] leading-tight">Proses Pembuatan Gula Aren Cetak Secara Tradisional</h2>
              </div>
              <div className="lg:col-span-5">
                <p className="text-sm sm:text-base text-[#5E371F] leading-relaxed">
                  Setiap keping gula aren membutuhkan kesabaran. Dimulai dari
                  menyadap tetesan air nira saat embun pagi masih turun, hingga
                  mengaduk kawah nira yang mendidih di atas perapian kayu bakar.
                </p>
              </div>
            </div>

            {/* Visual Feature + Highlighted Step Banner */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
              <div className="lg:col-span-7 relative rounded-3xl overflow-hidden border border-[#7E7B56]/30 shadow-lg min-h-[340px] sm:min-h-[420px] bg-[#362013]">
                <Image src="/images/proses-nira.jpg" alt="Proses Perebusan Air Nira Aren di Wajan Tungku Kayu Bakar" width={900} height={600} className="w-full h-full object-cover"/>
                <div className="absolute inset-0 bg-gradient-to-t from-[#24140B]/90 via-[#24140B]/25 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-[#FAF7F2]">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#B86B2B] text-white mb-2">Dapur Pengolahan Tradisional</span>
                  <h3 className="font-[family-name:var(--font-serif)] text-2xl sm:text-3xl font-bold">Perebusan Nira Segar di Atas Tungku Kayu Bakar</h3>
                  <p className="text-xs sm:text-sm text-[#F2ECE1]/90 mt-1 max-w-xl">
                    Di samping tungku tampak bumbung bambu penampung nira segar.
                    Air nira dimasak perlahan selama 3–4 jam hingga berbusa
                    keemasan dan mengental menjadi karamel gula aren murni.
                  </p>
                </div>
              </div>

              {/* Active Step Detail Card */}
              <div className="lg:col-span-5 bg-[#362013] text-[#FAF7F2] rounded-3xl p-6 sm:p-8 border border-[#5E371F] shadow-lg flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 pb-4 border-b border-[#5E371F]">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#D99B4E]">Sorotan Tahap Pembuatan</span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#F2ECE1]/80 bg-[#5E371F]/60 px-3 py-1 rounded-full">
                      <Clock className="w-3.5 h-3.5 text-[#D99B4E]" />
                      {PROCESS_STEPS[activeStepIndex].timeWindow}
                    </span>
                  </div>

                  <div className="mt-6">
                    <div className="flex items-baseline gap-3">
                      <span className="font-[family-name:var(--font-serif)] text-5xl font-bold text-[#D99B4E]">
                        {PROCESS_STEPS[activeStepIndex].stepNumber}
                      </span>
                      <div>
                        <span className="text-xs uppercase tracking-wider text-[#D99B4E]/90 font-semibold block">
                          {PROCESS_STEPS[activeStepIndex].localTerm}
                        </span>
                        <h3 className="font-[family-name:var(--font-serif)] text-2xl sm:text-3xl font-bold text-white mt-0.5">
                          {PROCESS_STEPS[activeStepIndex].title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-[#F2ECE1]/90 leading-relaxed mt-5">
                      {PROCESS_STEPS[activeStepIndex].description}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#5E371F]">
                  <p className="text-xs uppercase tracking-wider text-[#D99B4E] font-bold">Kunci Kualitas pada Tahap Ini:</p>
                  <p className="text-sm text-white font-medium mt-1">
                    “{PROCESS_STEPS[activeStepIndex].keyDetail}”
                  </p>
                  <div className="flex items-center justify-between mt-5">
                    <span className="text-xs text-[#F2ECE1]/60">Klik kartu tahap di bawah untuk melihat detailnya</span>
                    <div className="flex gap-1.5">
                      {PROCESS_STEPS.map((_, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setActiveStepIndex(idx)}
                          aria-label={`Pilih tahap ${idx + 1}`}
                          className={`h-2 rounded-full transition-all ${activeStepIndex === idx
                              ? "w-6 bg-[#D99B4E]"
                              : "w-2 bg-[#5E371F] hover:bg-[#7E7B56]"
                            }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* All 6 Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {PROCESS_STEPS.map((step, index) => {
                const isSelected = index === activeStepIndex;
                return (
                  <button
                    key={step.stepNumber}
                    type="button"
                    onClick={() => setActiveStepIndex(index)}
                    className={`text-left rounded-2xl p-6 transition-all border flex flex-col justify-between ${isSelected
                        ? "bg-white border-[#B86B2B] ring-2 ring-[#B86B2B]/25 shadow-md"
                        : "bg-[#FAF7F2] border-[#7E7B56]/25 hover:bg-white hover:border-[#7E7B56]/50"
                      }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span
                          className={`font-[family-name:var(--font-serif)] text-2xl font-bold px-3 py-1 rounded-xl ${isSelected
                              ? "bg-[#B86B2B] text-white"
                              : "bg-[#F2ECE1] text-[#5E371F]"
                            }`}
                        >
                          Tahap {step.stepNumber}
                        </span>
                        <span className="text-xs font-medium text-[#7E7B56]">{step.timeWindow}</span>
                      </div>

                      <h4 className="font-[family-name:var(--font-serif)] text-xl font-bold text-[#362013] mt-2">{step.title}</h4>
                      <p className="text-xs font-semibold text-[#B86B2B] mt-0.5">{step.localTerm}</p>
                      <p className="text-sm text-[#5E371F] leading-relaxed mt-3">{step.description}</p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-[#7E7B56]/15 flex items-center justify-between text-xs font-semibold">
                      <span className="text-[#5C593B]">{step.keyDetail}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* PRODUK KAMI SECTION (GULA CETAK & AIR NIRA MURNI) */}
        <section id="produk" className="py-20 lg:py-28 bg-[#FAF7F2] border-b border-[#7E7B56]/15">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#7E7B56]">Hasil Olahan Keluarga Tanira</span>
              <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#362013]">Varian Hasil Aren Kami</h2>
              <p className="text-base text-[#5E371F] leading-relaxed">
                Untuk menjaga kualitas dan keaslian rasa, orang tua kami hanya
                memproduksi <strong>Gula Aren Cetak</strong> sebagai produk
                utama. Namun, jika ada yang ingin menikmati atau mengolah{" "}
                <strong>Air Nira Aren Segar</strong> sebelum dimasak menjadi
                gula, biasanya juga dapat kami sediakan.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              {PRODUCTS.map((product) => (
                <div
                  key={product.id}
                  className={`rounded-3xl p-7 sm:p-9 border flex flex-col justify-between transition-all ${product.isPrimary
                      ? "bg-white border-[#B86B2B]/40 shadow-md ring-1 ring-[#B86B2B]/15"
                      : "bg-[#F2ECE1]/70 border-[#7E7B56]/30 shadow-xs"
                    }`}
                >
                  <div>
                    {/* Product Header */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      <span
                        className={`px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${product.isPrimary
                            ? "bg-[#362013] text-[#D99B4E]"
                            : "bg-[#7E7B56] text-white"
                          }`}
                      >
                        {product.badge}
                      </span>
                      <span className="text-xs font-semibold text-[#7E7B56]">100% Asli Tanpa Campuran</span>
                    </div>

                    <h3 className="font-[family-name:var(--font-serif)] text-2xl sm:text-3xl font-bold text-[#362013]">{product.name}</h3>
                    <p className="text-sm sm:text-base text-[#5E371F] leading-relaxed mt-3">{product.fullDescription}</p>

                    {/* Characteristics Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 bg-[#FAF7F2] p-4 rounded-2xl border border-[#7E7B56]/20">
                      {product.characteristics.map((char) => (
                        <div key={char.label} className="space-y-0.5">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-[#7E7B56] block">{char.label}</span>
                          <span className="text-xs sm:text-sm font-semibold text-[#362013] block">{char.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Highlights */}
                    <div className="mt-6 space-y-2.5">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#362013]">Keunggulan Utama:</h4>
                      <ul className="space-y-2">
                        {product.highlights.map((hl) => (
                          <li key={hl} className="flex items-start gap-2.5 text-sm text-[#5E371F]">
                            <CheckCircle2 className="w-4 h-4 text-[#7E7B56] shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Culinary Usage Ideas */}
                    <div className="mt-6 pt-5 border-t border-[#7E7B56]/20">
                      <h4 className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B86B2B]">
                        <Utensils className="w-3.5 h-3.5" />
                        <span>Cocok Digunakan Untuk:</span>
                      </h4>
                      <ul className="mt-2.5 space-y-1.5">
                        {product.usageIdeas.map((idea) => (
                          <li key={idea} className="text-xs sm:text-sm text-[#5E371F] flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#B86B2B] shrink-0" />
                            <span>{idea}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Storage & Availability Footer (Future-Ready for Direct Ordering) */}
                  <div className="mt-8 pt-5 border-t border-[#7E7B56]/20 space-y-4">
                    <div className="bg-[#FAF7F2] rounded-xl p-3.5 border border-[#7E7B56]/20 text-xs text-[#5E371F]">
                      <strong className="text-[#362013] block mb-0.5">Tips Penyimpanan:</strong>
                      {product.storageTip}
                    </div>

                    {ORDERING_CONFIG.enableDirectOrder ? (
                      <button type="button" className="w-full py-3.5 px-5 rounded-xl bg-[#362013] text-white font-semibold text-sm hover:bg-[#5E371F] transition-colors">
                        Pesan {product.name}
                      </button>
                    ) : (
                      <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#7E7B56]/10 border border-[#7E7B56]/25 text-xs text-[#5C593B]">
                        <Info className="w-4 h-4 text-[#7E7B56] shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-[#362013] block">Info Ketersediaan:</span>
                          <span>{product.ordering.availabilityNote}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Future Online Ordering Notice Banner */}
            {!ORDERING_CONFIG.enableDirectOrder && (
              <div className="mt-10 bg-white rounded-2xl p-6 border border-[#7E7B56]/25 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#F2ECE1] flex items-center justify-center shrink-0 text-[#B86B2B]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#362013]">Pengembangan Fitur Pemesanan Langsung</h4>
                    <p className="text-xs sm:text-sm text-[#5E371F] mt-0.5">
                      Halaman ini dirancang sebagai pusat informasi proses &
                      keaslian produk Tanira. Fitur pemesanan langsung (untuk
                      Gula Aren Cetak maupun jadwal sadap Air Nira) sedang
                      disiapkan untuk pengembangan selanjutnya.
                    </p>
                  </div>
                </div>
                <span className="shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#F2ECE1] text-[#5E371F] border border-[#7E7B56]/25">Segera Hadir</span>
              </div>
            )}
          </div>
        </section>

        {/* TABEL PERBANDINGAN: GULA AREN ASLI VS CAMPURAN */}
        <section id="perbandingan" className="py-20 lg:py-24 bg-[#362013] text-[#FAF7F2]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#D99B4E]">Panduan Mengenali Kualitas</span>
              <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Cara Membedakan Gula Aren Cetak Asli vs Campuran</h2>
              <p className="text-sm sm:text-base text-[#F2ECE1]/80 leading-relaxed">
                Sering kali pembeli sulit membedakan mana gula aren murni dan
                mana yang sudah dicampur gula pasir. Berikut ciri-ciri fisik
                yang paling mudah dikenali di rumah:
              </p>
            </div>

            <div className="bg-[#28170D] rounded-3xl overflow-hidden border border-[#5E371F] shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-12 bg-[#1E1109] border-b border-[#5E371F] text-xs font-bold uppercase tracking-wider">
                <div className="p-4 sm:p-5 md:col-span-3 text-[#D99B4E]">Aspek Pengujian</div>
                <div className="p-4 sm:p-5 md:col-span-5 text-[#A5B882] border-t md:border-t-0 md:border-l border-[#5E371F] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Gula Aren Cetak Asli (Tanira)</span>
                </div>
                <div className="p-4 sm:p-5 md:col-span-4 text-[#E08A70] border-t md:border-t-0 md:border-l border-[#5E371F] flex items-center gap-2">
                  <XCircle className="w-4 h-4 shrink-0" />
                  <span>Gula Merah Campuran</span>
                </div>
              </div>

              <div className="divide-y divide-[#5E371F]/70">
                {COMPARISON_ROWS.map((row) => (
                  <div key={row.aspect} className="grid grid-cols-1 md:grid-cols-12 text-sm">
                    <div className="p-4 sm:p-5 md:col-span-3 font-bold text-[#D99B4E] bg-[#24140B]/50">
                      {row.aspect}
                    </div>
                    <div className="p-4 sm:p-5 md:col-span-5 text-[#FAF7F2] md:border-l border-[#5E371F]/70 leading-relaxed">
                      {row.authenticAren}
                    </div>
                    <div className="p-4 sm:p-5 md:col-span-4 text-[#F2ECE1]/70 md:border-l border-[#5E371F]/70 leading-relaxed">
                      {row.mixedSugar}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TANYA JAWAB (FAQ) SECTION */}
        <section id="faq" className="py-20 lg:py-24 bg-[#FAF7F2]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-3 mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#7E7B56]">
                Tanya Jawab
              </span>
              <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl font-bold text-[#362013]">
                Hal yang Sering Ditanyakan
              </h2>
              <p className="text-sm sm:text-base text-[#5E371F]">
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
                    className="bg-white rounded-2xl border border-[#7E7B56]/25 overflow-hidden transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-[#F2ECE1]/40 transition-colors"
                    >
                      <span className="font-bold text-base text-[#362013]">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#7E7B56] shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                          }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-[#5E371F] leading-relaxed border-t border-[#F2ECE1]">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#F2ECE1] border-t border-[#7E7B56]/25 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-[#7E7B56]/20">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-white border border-[#7E7B56]/25 p-1.5 flex items-center justify-center shadow-2xs">
                <Image
                  src="/images/logo-tanira.png"
                  alt="Logo Tanira"
                  width={60}
                  height={60}
                  className="object-contain w-full h-full"
                />
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-serif)] text-2xl font-bold text-[#362013]">
                  TANIRA
                </h3>
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#7E7B56]">
                  Tunas Alam Nira Asli
                </p>
                <p className="text-xs text-[#5E371F] mt-1 max-w-md">
                  Usaha keluarga pengrajin Gula Aren Cetak tradisional & penyedia
                  Air Nira Aren murni tanpa bahan campuran.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 text-sm font-medium text-[#5E371F]">
              <a href="#keunggulan" className="hover:text-[#362013]">
                Keunggulan
              </a>
              <a href="#proses" className="hover:text-[#362013]">
                Proses Pembuatan
              </a>
              <a href="#produk" className="hover:text-[#362013]">
                Produk
              </a>
              <a href="#perbandingan" className="hover:text-[#362013]">
                Uji Keaslian
              </a>
              <a href="#faq" className="hover:text-[#362013]">
                FAQ
              </a>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5E371F]/80">
            <p>
              © {new Date().getFullYear()} TANIRA (Tunas Alam Nira Asli). Dibuat
              untuk menjaga tradisi kemurnian gula aren keluarga.
            </p>
            <p className="font-medium text-[#7E7B56]">
              100% Nira Aren Murni • Tanpa Pengawet • Olahan Tradisional
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
