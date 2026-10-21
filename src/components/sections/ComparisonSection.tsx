import React from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import { COMPARISON_ROWS } from "@/data/tanira";

export default function ComparisonSection() {
  return (
    <section
      id="perbandingan"
      className="scroll-mt-20 py-10 lg:py-12 bg-forest text-mist border-b border-moss"
    >
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-7 lg:mb-8">
          <div className="max-w-2xl space-y-3">
            <span className="inline-block px-3.5 py-1 rounded-full bg-moss text-mist text-xs font-bold uppercase tracking-[0.18em]">
              Panduan Mengenali Kualitas
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-normal text-mist">
              Cara Membedakan Gula Aren Cetak Asli vs Campuran
            </h2>
          </div>
          <p className="text-sm sm:text-base text-mist/80 leading-relaxed max-w-xl">
            Sering kali pembeli sulit membedakan mana gula aren murni dan mana
            yang sudah dicampur gula pasir. Berikut ciri-ciri fisik yang paling
            mudah dikenali di rumah:
          </p>
        </div>

        <div className="md:bg-mist md:text-earth md:rounded-3xl md:overflow-hidden md:border-2 md:border-sage md:shadow-2xl">
          {/* Desktop Table Header (Hidden on Mobile) */}
          <div className="hidden md:grid md:grid-cols-12 bg-moss text-mist border-b border-sage/50 text-xs font-bold uppercase tracking-wider">
            <div className="p-6 md:col-span-3 text-mist">Aspek Pengujian</div>
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
  );
}
