import React from "react";
import Image from "next/image";
import { MapPin, Clock, ExternalLink } from "lucide-react";
import { LOCATION_INFO } from "@/data/tanira";

export default function Footer() {
  return (
    <footer className="bg-forest text-mist border-t-2 border-moss pt-6 pb-5 sm:pt-8 sm:pb-6">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 sm:gap-8 pb-5 sm:pb-6 border-b border-moss/60">
          {/* Column 1: Brand Identity (Left) */}
          <div className="space-y-3 sm:space-y-4 max-w-md">
            <div className="flex items-center gap-3.5 sm:gap-4">
              <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-mist border-2 border-sage p-1 sm:p-1.5 flex items-center justify-center shadow-sm shrink-0">
                <Image src="/images/logo-tanira.png" alt="Logo Tanira" width={56} height={56} className="object-contain w-full h-full"/>
              </div>
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-mist leading-none">TANIRA</h3>
                <p className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-sage mt-1">Tunas Alam Nira Asli</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-mist/80 leading-relaxed">
              Usaha keluarga pengrajin Gula Aren Cetak tradisional dan penyedia
              Air Nira Aren segar. Diolah secara jujur dari tetesan nira murni
              tanpa tambahan gula pasir maupun pengawet.
            </p>
          </div>

          {/* Column 2: Lokasi & Aktivitas Dapur (Right - Desktop/Tablet Card, Compact Inline on Mobile) */}
          <div className="hidden md:block bg-moss/25 border border-sage/35 rounded-2xl p-5 sm:p-6 space-y-3 w-full md:w-auto md:min-w-[340px]">
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-sage">Dapur Pengolahan</h4>
            <div className="space-y-2 text-sm text-mist/90">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sage shrink-0 mt-0.5" />
                <span>{LOCATION_INFO.region}</span>
              </p>
              <p className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-sage shrink-0 mt-0.5" />
                <span>Sadapan Nira: Pagi & Sore Hari</span>
              </p>
            </div>
            <div className="pt-1">
              <a href={LOCATION_INFO.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-bold text-sage hover:text-mist transition-colors">
                <span>Lihat Titik di Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row items-center justify-center gap-2 text-[11px] sm:text-xs text-mist/75">
          <p>© {new Date().getFullYear()} TANIRA - Tunas Alam Nira Asli.</p>
        </div>
      </div>
    </footer>
  );
}
