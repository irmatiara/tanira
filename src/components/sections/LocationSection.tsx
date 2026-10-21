import React from "react";
import { MapPin, ExternalLink } from "lucide-react";
import { LOCATION_INFO } from "@/data/tanira";

export default function LocationSection() {
  return (
    <section id="lokasi" className="scroll-mt-20 py-10 lg:py-12 bg-moss text-mist">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Info Column */}
          <div className="lg:col-span-5 bg-forest rounded-3xl p-7 sm:p-9 border-2 border-sage/50 shadow-xl flex flex-col justify-between">
            <div>
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-moss/60 border border-sage/40 text-xs font-bold uppercase tracking-wider text-sage">
                <MapPin className="w-3.5 h-3.5" />
                <span>Titik Lokasi Pengolahan</span>
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-mist mt-4 leading-tight">
                {LOCATION_INFO.title}
              </h2>

              <p className="text-sm sm:text-base text-mist/85 leading-relaxed mt-3">
                {LOCATION_INFO.description}
              </p>

              <div className="mt-6 p-4 rounded-2xl bg-moss/35 border border-sage/35 space-y-2">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-sage block">
                    Wilayah
                  </span>
                  <span className="text-sm font-semibold text-mist block">
                    {LOCATION_INFO.region}
                  </span>
                </div>
                <div className="pt-2 border-t border-sage/25">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-sage block">
                    Koordinat Peta
                  </span>
                  <span className="text-xs font-mono text-mist/90 block">
                    {LOCATION_INFO.coordinatesLabel}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href={LOCATION_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-xl bg-sage text-forest font-bold text-sm hover:bg-mist transition-all shadow-md"
              >
                <MapPin className="w-4 h-4" />
                <span>Buka Petunjuk Arah di Google Maps</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Map Embed Column */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border-2 border-sage shadow-2xl bg-earth min-h-[380px] sm:min-h-[460px] relative">
            <iframe
              src={LOCATION_INFO.embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta Lokasi Dapur Gula Aren Tanira"
              className="w-full h-full min-h-[380px] sm:min-h-[460px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
