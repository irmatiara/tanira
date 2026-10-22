import React from "react";
import { ShieldCheck, Flame, Sparkles, Droplets } from "lucide-react";
import { PURITY_ADVANTAGES } from "@/data/tanira";

const ADVANTAGE_ICONS = [
  <ShieldCheck key="shield" className="w-5 h-5 sm:w-6 sm:h-6 text-sage" />,
  <Flame key="flame" className="w-5 h-5 sm:w-6 sm:h-6 text-sage" />,
  <Sparkles key="sparkles" className="w-5 h-5 sm:w-6 sm:h-6 text-sage" />,
  <Droplets key="droplets" className="w-5 h-5 sm:w-6 sm:h-6 text-sage" />,
];

export default function AdvantagesSection() {
  return (
    <section id="keunggulan" className="scroll-mt-16 sm:scroll-mt-20 py-7 sm:py-10 lg:py-12 bg-sage-surface border-b border-moss/30">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-3 sm:gap-4 mb-5 sm:mb-7 lg:mb-8">
          <div className="max-w-2xl space-y-2 sm:space-y-3">
            <span className="inline-block px-3.5 py-1 rounded-full bg-forest text-sage text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em]">Mengapa Kemurnian Itu Penting?</span>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-[2.75rem] font-normal text-forest leading-tight">Keunggulan Gula Aren Asli</h2>
          </div>
          <p className="text-xs sm:text-base text-earth/85 leading-relaxed max-w-xl">
            Gula merah dari pohon aren (<em>Arenga pinnata</em>) memiliki
            karakter rasa, keharuman, dan kelembutan yang tidak bisa ditiru
            oleh gula merah campuran.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
          {PURITY_ADVANTAGES.map((item, idx) => (
            <div key={item.id} className="bg-mist rounded-2xl p-4 sm:p-6 border-2 border-moss/30 shadow-sm hover:shadow-md hover:border-forest transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 sm:block mb-2.5 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-forest border border-moss flex items-center justify-center shadow-xs shrink-0 sm:mb-4">
                    {ADVANTAGE_ICONS[idx]}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-moss">{item.subtitle}</p>
                      <span className="inline-block px-2 py-0.5 rounded-md bg-sage/35 text-forest text-[10px] font-bold">{item.metric}</span>
                    </div>
                    <h3 className="font-serif text-lg sm:text-2xl font-normal text-forest mt-0.5 sm:mt-1 leading-snug">{item.title}</h3>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-earth/85 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
