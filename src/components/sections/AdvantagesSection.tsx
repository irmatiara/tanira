import React from "react";
import { ShieldCheck, Flame, Sparkles, Droplets, CheckCircle2 } from "lucide-react";
import { PURITY_ADVANTAGES } from "@/data/tanira";

const ADVANTAGE_ICONS = [
  <ShieldCheck key="shield" className="w-6 h-6 text-sage" />,
  <Flame key="flame" className="w-6 h-6 text-sage" />,
  <Sparkles key="sparkles" className="w-6 h-6 text-sage" />,
  <Droplets key="droplets" className="w-6 h-6 text-sage" />,
];

export default function AdvantagesSection() {
  return (
    <section
      id="keunggulan"
      className="scroll-mt-20 py-10 lg:py-12 bg-sage-surface border-b border-moss/30"
    >
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-7 lg:mb-8">
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
                    {ADVANTAGE_ICONS[idx]}
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
  );
}
