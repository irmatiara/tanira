import React from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import { COMPARISON_ROWS } from "@/data/tanira";

export default function ComparisonSection() {
  return (
    <section id="perbandingan" className="scroll-mt-16 sm:scroll-mt-20 py-7 sm:py-10 lg:py-12 bg-forest text-mist border-b border-moss">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-3 sm:gap-4 mb-5 sm:mb-7 lg:mb-8">
          <div className="max-w-2xl space-y-2 sm:space-y-3">
            <span className="inline-block px-3.5 py-1 rounded-full bg-moss text-mist text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em]">Panduan Mengenali Kualitas</span>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-[2.75rem] font-normal text-mist">Cara Membedakan Gula Aren Cetak Asli vs Campuran</h2>
          </div>
          <p className="text-xs sm:text-base text-mist/80 leading-relaxed max-w-xl">
            Sering kali pembeli sulit membedakan mana gula aren murni dan mana
            yang sudah dicampur gula pasir. Berikut ciri-ciri fisik yang paling
            mudah dikenali di rumah:
          </p>
        </div>

        <div className="bg-mist text-earth rounded-2xl md:rounded-3xl overflow-hidden border-2 border-sage shadow-2xl">
          {/* Desktop Table Header */}
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

          {/* Mobile Sticky/Compact Column Header (Shown once at top on Mobile) */}
          <div className="grid grid-cols-2 md:hidden bg-forest text-mist border-b border-sage/50 text-[11px] font-bold uppercase tracking-wider">
            <div className="px-3.5 py-3 bg-moss/55 flex items-center gap-1.5 text-sage">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              <span>Aren Asli (Tanira)</span>
            </div>
            <div className="px-3.5 py-3 border-l border-sage/35 flex items-center gap-1.5 text-mist/85">
              <XCircle className="w-3.5 h-3.5 shrink-0 text-sage/80" />
              <span>Gula Campuran</span>
            </div>
          </div>

          {/* Rows: Compact 2-Column Side-by-Side on Mobile, 12-Col Table Rows on Desktop */}
          <div className="divide-y divide-sage/50">
            {COMPARISON_ROWS.map((row) => (
              <div key={row.aspect} className="grid grid-cols-2 md:grid-cols-12 text-xs sm:text-sm md:text-base">
                {/* Aspect Title */}
                <div className="col-span-2 md:col-span-3 px-3.5 py-2 sm:p-5 md:p-6 font-bold text-mist md:text-forest bg-moss md:bg-sage/25 flex items-center text-xs sm:text-sm md:text-base">
                  {row.aspect}
                </div>

                {/* Authentic Aren Cell */}
                <div className="col-span-1 md:col-span-5 p-3 sm:p-5 md:p-6 text-forest font-medium bg-sage/15 md:bg-sage/10 md:border-l border-sage/45 leading-snug sm:leading-relaxed">
                  <p>{row.authenticAren}</p>
                </div>

                {/* Mixed Sugar Cell */}
                <div className="col-span-1 md:col-span-4 p-3 sm:p-5 md:p-6 text-earth/80 bg-mist border-l border-sage/45 leading-snug sm:leading-relaxed">
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
