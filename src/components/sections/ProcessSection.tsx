import React from "react";
import Image from "next/image";
import { Flame } from "lucide-react";
import { PROCESS_STEPS } from "@/data/tanira";

export default function ProcessSection() {
  return (
    <section
      id="proses"
      className="scroll-mt-20 py-10 lg:py-12 bg-moss text-mist border-b border-forest"
    >
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-7 lg:mb-8">
          <div className="max-w-2xl space-y-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest/60 border border-sage/40 text-xs font-bold uppercase tracking-[0.18em] text-sage">
              <Flame className="w-4 h-4 text-sage" />
              <span>Dari Pohon Aren ke Cetakan</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-normal text-mist leading-tight">
              Tahap Pengolahan Tradisional
            </h2>
          </div>
          <p className="text-sm sm:text-base text-mist/90 leading-relaxed max-w-xl">
            Diolah langsung di dapur keluarga pada hari yang sama saat air nira
            diturunkan dari pohon, menjaga kesegaran dan keharuman gula aren
            murni.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Kitchen Visual */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden border-2 border-sage/60 shadow-xl min-h-[300px] sm:min-h-[380px] bg-earth">
            <Image
              src="/images/proses-nira.jpg"
              alt="Proses Perebusan Air Nira Aren di Wajan Tungku Kayu Bakar"
              width={900}
              height={650}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/95 via-forest/25 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-mist">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-sage text-forest mb-2">
                Dapur Pengolahan Keluarga
              </span>
              <h3 className="font-serif text-2xl font-normal">
                Perebusan dengan Tungku Kayu Bakar
              </h3>
              <p className="text-xs sm:text-sm text-mist/85 mt-1 leading-relaxed">
                Dimasak perlahan selama 3–4 jam hingga mengental menjadi karamel
                gula aren murni.
              </p>
            </div>
          </div>

          {/* Right Column: 3 Concise Steps */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-4">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.stepNumber}
                className="rounded-2xl p-5 sm:p-6 bg-mist text-earth border-2 border-sage/60 shadow-sm flex flex-col sm:flex-row items-start gap-4 sm:gap-5"
              >
                <span className="font-serif text-2xl font-normal px-3.5 py-1.5 rounded-xl bg-forest text-sage shrink-0">
                  {step.stepNumber}
                </span>
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <h4 className="font-serif text-xl sm:text-2xl font-normal text-forest">
                      {step.title}
                    </h4>
                    <span className="text-xs font-bold uppercase tracking-wider text-moss">
                      • {step.localTerm}
                    </span>
                  </div>
                  <p className="text-sm text-earth/85 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
