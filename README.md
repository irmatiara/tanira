# TANIRA — Tunas Alam Nira Asli

Landing page resmi untuk usaha keluarga **TANIRA (Tunas Alam Nira Asli)**, pengrajin **Gula Aren Cetak Tradisional** dan penyedia **Air Nira Aren Murni**.

## Tech Stack
- **Framework:** [Next.js 15 (App Router)](https://nextjs.org/) + React 19 + TypeScript
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)

## Fitur Halaman Saat Ini
1. **Kisah & Keunggulan Gula Aren Asli:** Penjelasan mengapa gula aren cetak murni 100% tanpa campuran gula pasir memiliki aroma, tekstur, dan rasa yang jauh lebih baik.
2. **6 Tahap Proses Pembuatan Interaktif:** Alur tradisional mulai dari perawatan mayang, penyadapan pagi, penyaringan, perebusan di tungku kayu bakar selama 3–4 jam, uji tetes kematangan, hingga pencetakan alami.
3. **Katalog Produk:**
   - **Gula Aren Cetak Tradisional** *(Produk Utama)*
   - **Air Nira Aren Murni / Segar** *(Tersedia mengikuti jadwal sadapan harian)*
4. **Panduan Perbandingan Keaslian:** Tabel edukasi ciri fisik Gula Aren Cetak Asli vs Gula Merah Campuran.
5. **Arsitektur Siap Kembang (Future-Ready Ordering):** Data produk dan konfigurasi pemesanan dipisahkan di `src/data/tanira.ts` (`ORDERING_CONFIG.enableDirectOrder`) sehingga siap dikembangkan menjadi sistem pemesanan langsung ke depannya.

## Cara Menjalankan Project di Lokal

```bash
npm install
npm run dev
```

Lalu buka `http://localhost:3000` di browser.
