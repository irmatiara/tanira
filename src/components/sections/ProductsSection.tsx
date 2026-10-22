import React from "react";
import { CheckCircle2, Info, Sparkles } from "lucide-react";
import { PRODUCTS, ORDERING_CONFIG } from "@/data/tanira";

export default function ProductsSection() {
  return (
    <section id="produk" className="scroll-mt-16 sm:scroll-mt-20 py-7 sm:py-10 lg:py-12 bg-sage-surface border-b border-moss/35">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-3 sm:gap-4 mb-5 sm:mb-7 lg:mb-8">
          <div className="max-w-2xl space-y-2 sm:space-y-2.5">
            <span className="inline-block px-3.5 py-1 rounded-full bg-forest text-sage text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em]">Hasil Olahan Keluarga Tanira</span>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-[2.75rem] font-normal text-forest">Varian Hasil Aren Kami</h2>
          </div>
          <p className="text-xs sm:text-base text-earth/85 leading-relaxed max-w-xl">
            Fokus pada <strong className="text-forest">Gula Aren Cetak</strong>{" "}
            sebagai produk utama, serta melayani pembelian{" "}
            <strong className="text-forest">Air Nira Aren Segar</strong> sesuai
            jadwal sadapan harian.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-stretch">
          {PRODUCTS.map((product) => {
            const isPrimary = product.isPrimary;
            return (
              <div
                key={product.id}
                className={`rounded-2xl sm:rounded-3xl p-5 sm:p-8 border-2 flex flex-col justify-between transition-all ${
                  isPrimary
                    ? "bg-forest text-mist border-sage shadow-xl"
                    : "bg-mist text-earth border-moss/45 shadow-md"
                }`}
              >
                <div>
                  {/* Product Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5 sm:mb-3">
                    <span
                      className={`px-3 py-0.5 sm:px-3.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider ${
                        isPrimary
                          ? "bg-sage text-forest"
                          : "bg-moss text-mist"
                      }`}
                    >
                      {product.badge}
                    </span>
                    <span
                      className={`text-[11px] sm:text-xs font-semibold ${
                        isPrimary ? "text-sage" : "text-moss"
                      }`}
                    >
                      100% Asli Tanpa Campuran
                    </span>
                  </div>

                  <h3
                    className={`font-serif text-xl sm:text-3xl font-normal ${
                      isPrimary ? "text-mist" : "text-forest"
                    }`}
                  >
                    {product.name}
                  </h3>
                  <p
                    className={`text-xs sm:text-sm leading-relaxed mt-1.5 sm:mt-2 ${
                      isPrimary ? "text-mist/85" : "text-earth/85"
                    }`}
                  >
                    {product.shortDescription}
                  </p>

                  {/* Compact 2x2 Characteristics Grid */}
                  <div
                    className={`grid grid-cols-2 gap-2.5 sm:gap-3 mt-4 sm:mt-5 p-3 sm:p-4 rounded-xl sm:rounded-2xl border ${
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
                          className={`text-xs sm:text-sm font-semibold block leading-snug ${
                            isPrimary ? "text-mist" : "text-earth"
                          }`}
                        >
                          {char.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Concise Highlights (3 Key Points) */}
                  <ul className="mt-4 sm:mt-5 space-y-1.5 sm:space-y-2">
                    {product.highlights.slice(0, 3).map((hl) => (
                      <li
                        key={hl}
                        className={`flex items-start gap-2 text-xs sm:text-sm ${
                          isPrimary ? "text-mist/90" : "text-earth/85"
                        }`}
                      >
                        <CheckCircle2
                          className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 mt-0.5 ${
                            isPrimary ? "text-sage" : "text-forest"
                          }`}
                        />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Availability Footer */}
                <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-sage/35">
                  {ORDERING_CONFIG.enableDirectOrder ? (
                    <button type="button" className="w-full py-3 sm:py-3.5 px-5 rounded-xl bg-sage text-forest font-bold text-xs sm:text-sm hover:bg-mist transition-colors">
                      Pesan {product.name}
                    </button>
                  ) : (
                    <div
                      className={`flex items-start gap-2 p-2.5 sm:p-3.5 rounded-xl border text-xs ${
                        isPrimary
                          ? "bg-moss/40 border-sage/40 text-mist"
                          : "bg-sage/30 border-moss/40 text-earth"
                      }`}
                    >
                      <Info
                        className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 mt-0.5 ${
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
          <div className="mt-5 sm:mt-8 bg-moss text-mist rounded-xl sm:rounded-2xl p-3.5 sm:p-5 border-2 border-sage/60 shadow-md flex flex-row items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-start sm:items-center gap-2.5 sm:gap-3.5">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-forest border border-sage/40 flex items-center justify-center shrink-0 text-sage mt-0.5 sm:mt-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-mist">Fitur Pemesanan Langsung Segera Hadir</h4>
                <p className="text-[11px] sm:text-xs text-mist/85 leading-relaxed mt-0.5">
                  Saat ini halaman berfokus pada informasi keaslian & proses olahan Tanira.
                </p>
              </div>
            </div>
            <span className="hidden sm:inline-block shrink-0 px-3.5 py-1.5 rounded-full text-xs font-bold bg-forest text-sage border border-sage/50">Segera Hadir</span>
          </div>
        )}
      </div>
    </section>
  );
}
