import React from "react";
import Image from "next/image";
import { Sun, ArrowDown, Award } from "lucide-react";
import { BRAND_INFO } from "@/data/tanira";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-hero-botanical text-mist py-10 lg:py-12 border-b border-moss">
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
              <span className="italic text-sage">Diolah Jujur</span> Menjadi
              Gula Aren Asli.
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
              <a href="#proses" className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-sage text-forest font-bold text-sm hover:bg-mist transition-all shadow-md">
                <span>Telusuri Proses Pembuatan</span>
                <ArrowDown className="w-4 h-4" />
              </a>
              <a href="#produk" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-moss/40 text-mist font-semibold text-sm border border-sage/45 hover:bg-moss transition-all">
                <span>Lihat Gula Cetak & Air Nira</span>
              </a>
            </div>

            {/* Clean Horizontal Highlights Bar */}
            <div className="pt-6 border-t border-moss/70 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-sage">Komposisi Utama</p>
                <p className="font-serif text-2xl text-mist mt-1">100% Nira Murni</p>
                <p className="text-xs text-mist/70 mt-0.5">Tanpa campuran gula pasir</p>
              </div>

              <div className="sm:border-l sm:border-moss/70 sm:pl-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-sage">Cara Pengolahan</p>
                <p className="font-serif text-2xl text-mist mt-1">Tungku Kayu Bakar</p>
                <p className="text-xs text-mist/70 mt-0.5">Dimasak perlahan 3–4 jam</p>
              </div>

              <div className="sm:border-l sm:border-moss/70 sm:pl-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-sage">Varian Hasil Kebun</p>
                <p className="font-serif text-2xl text-mist mt-1">Gula Cetak & Nira</p>
                <p className="text-xs text-mist/70 mt-0.5">Sadapan segar pagi & sore</p>
              </div>
            </div>
          </div>

          {/* Right Column: 5 Columns Editorial Image Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-sage/60 shadow-2xl bg-earth">
              <Image src="/images/gula-aren-hero.jpg" alt="Gula Aren Cetak Asli dan Air Nira Aren Segar Tanira" width={900} height={700} className="w-full h-[400px] sm:h-[480px] lg:h-[520px] object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-transparent to-transparent" />

              {/* Bottom Caption inside Hero Image */}
              <div className="absolute bottom-5 left-5 right-5 bg-forest/90 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-sage/50 shadow-lg text-mist">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-sage">Hasil Kebun Aren Keluarga</span>
                    <h2 className="font-serif text-xl font-normal text-mist mt-0.5">Gula Aren Cetak & Air Nira Segar</h2>
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
  );
}
