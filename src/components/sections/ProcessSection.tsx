import React from "react";
import Image from "next/image";
import { Flame } from "lucide-react";
import { PROCESS_STEPS } from "@/data/tanira";

export default function ProcessSection() {
  return (
    <section id="proses" className="scroll-mt-16 sm:scroll-mt-20 py-7 sm:py-10 lg:py-12 bg-moss text-mist border-b border-forest">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-3 sm:gap-4 mb-5 sm:mb-7 lg:mb-8">
          <div className="max-w-2xl space-y-2 sm:space-y-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest/60 border border-sage/40 text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] text-sage">
              <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sage" />
              <span>Dari Pohon Aren ke Cetakan</span>
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-[2.75rem] font-normal text-mist leading-tight">Tahap Pengolahan Tradisional</h2>
          </div>
          <p className="text-xs sm:text-base text-mist/90 leading-relaxed max-w-xl">
            Diolah langsung di dapur keluarga pada hari yang sama saat air nira
            diturunkan dari pohon, menjaga kesegaran dan keharuman gula aren
            murni.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-stretch">
          {/* Left Column: Kitchen Visual */}
          <div className="lg:col-span-5 relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-sage/60 shadow-xl h-[210px] sm:h-[340px] lg:h-auto lg:min-h-full bg-earth">
            <Image src="/images/proses-nira.jpeg" alt="Proses Perebusan Air Nira Aren di Wajan Tungku Kayu Bakar" fill sizes="(max-width: 1024px) 100vw, 42vw" className="object-cover object-center"/>
            <div className="absolute inset-0 bg-gradient-to-t from-forest/95 via-forest/25 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-mist">
              <span className="inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[11px] sm:text-xs font-bold bg-sage text-forest mb-1.5 sm:mb-2">Dapur Pengolahan Keluarga</span>
              <h3 className="font-serif text-xl sm:text-2xl font-normal">Perebusan dengan Tungku Kayu Bakar</h3>
              <p className="text-xs sm:text-sm text-mist/85 mt-0.5 sm:mt-1 leading-relaxed">
                Dimasak perlahan selama 3–4 jam hingga mengental menjadi karamel
                gula aren murni.
              </p>
            </div>
          </div>

          {/* Right Column: 3 Concise Steps */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-3 sm:gap-4">
            {PROCESS_STEPS.map((step) => (
              <div key={step.stepNumber} className="rounded-2xl p-4 sm:p-6 bg-mist text-earth border-2 border-sage/60 shadow-sm flex flex-row items-start gap-3.5 sm:gap-5">
                <span className="font-serif text-lg sm:text-2xl font-normal px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-xl bg-forest text-sage shrink-0 mt-0.5">{step.stepNumber}</span>
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-0.5">
                    <h4 className="font-serif text-lg sm:text-2xl font-normal text-forest leading-snug">{step.title}</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-earth/85 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
