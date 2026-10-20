import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const serifFont = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const sansFont = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "TANIRA — Tunas Alam Nira Asli | Gula Aren Cetak & Air Nira Murni",
  description:
    "Kisah pengolahan tradisional Gula Aren Cetak 100% murni dari tetesan air nira aren segar usaha keluarga. Tanpa campuran gula pasir, tanpa pengawet, dimasak dengan kayu bakar.",
  keywords: [
    "Tanira",
    "Tunas Alam Nira Asli",
    "Gula Aren Cetak",
    "Gula Merah Aren Asli",
    "Air Nira Aren Murni",
    "Proses Pembuatan Gula Aren",
    "Gula Aren Tradisional",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${serifFont.variable} ${sansFont.variable}`}>
      <body className="font-sans bg-mist text-earth antialiased selection:bg-sage/35 selection:text-forest">
        {children}
      </body>
    </html>
  );
}
