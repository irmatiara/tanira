"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/data/tanira";

export default function FaqSection() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-20 py-10 lg:py-12 bg-sage-surface border-b border-moss/35">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Title & Summary */}
          <div className="lg:col-span-5 space-y-4">
            <span className="inline-block px-3.5 py-1 rounded-full bg-forest text-sage text-xs font-bold uppercase tracking-[0.18em]">Tanya Jawab</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-normal text-forest leading-tight">Hal yang Sering Ditanyakan</h2>
            <p className="text-sm sm:text-base text-earth/85 leading-relaxed">
              Informasi lengkap seputar pengolahan Gula Aren Cetak dan
              ketersediaan Air Nira Aren segar dari kebun keluarga kami.
            </p>

            <div className="p-6 rounded-2xl bg-forest text-mist border border-moss mt-6 space-y-2">
              <p className="text-xs font-bold uppercase tracking-wider text-sage">Komitmen Kualitas Keluarga</p>
              <p className="text-sm text-mist/90 leading-relaxed">
                Setiap cetakan gula aren diolah tanpa bahan pengawet, pemutih,
                maupun campuran gula rafinasi demi menjaga cita rasa warisan
                asli.
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
                    <span className="font-bold text-base text-forest">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-moss shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-forest" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-2 text-sm sm:text-base text-earth/85 leading-relaxed border-t border-sage/50">{faq.answer}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
