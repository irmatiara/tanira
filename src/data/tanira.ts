import type {
  NavItem,
  ProductItem,
  ProcessStep,
  PurityAdvantage,
  ComparisonRow,
  FaqItem,
  LocationInfo,
} from "@/types/tanira";

export const NAV_ITEMS: NavItem[] = [
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "Proses", href: "#proses" },
  { label: "Produk", href: "#produk" },
  { label: "Keaslian", href: "#perbandingan" },
  { label: "FAQ", href: "#faq" },
  { label: "Lokasi", href: "#lokasi" },
];

/**
 * Konfigurasi fitur pemesanan.
 * Saat ini `enableDirectOrder` disetel `false` karena halaman berfokus pada
 * edukasi proses pembuatan & pengenalan kemurnian produk.
 * Ubah ke `true` saat fitur keranjang/checkout langsung siap diaktifkan.
 */
export const ORDERING_CONFIG = {
  enableDirectOrder: false,
  statusNotice:
    "Saat ini pemesanan online langsung melalui website sedang dalam tahap pengembangan.",
};

export const BRAND_INFO = {
  name: "TANIRA",
  fullName: "Tunas Alam Nira Asli",
  tagline: "Kemurnian Tetes Nira Alam, Diolah dengan Ketulusan Tradisi Keluarga",
  storyLead:
    "Berawal dari kebun aren keluarga, Tanira menjaga warisan pengolahan gula merah aren secara jujur—tanpa tambahan gula pasir, tanpa pengawet, dan dimasak perlahan di atas tungku kayu bakar.",
};

export const PURITY_ADVANTAGES: PurityAdvantage[] = [
  {
    id: "murni-100",
    title: "100% Nira Aren Murni Tanpa Campuran",
    subtitle: "Tanpa Gula Pasir & Rafinasi",
    description:
      "Banyak gula merah di pasaran dicampur gula pasir (rafinasi) atau tetes tebu agar keras dan murah. Gula cetak Tanira dibuat murni hanya dari sadapan air nira pohon aren pilihan.",
    metric: "0% Campuran",
  },
  {
    id: "aroma-wangi",
    title: "Aroma Wangi Karamel & Kayu Bakar",
    subtitle: "Ciri Khas Dapur Tradisional",
    description:
      "Proses perebusan perlahan selama berjam-jam di atas tungku kayu bakar menghasilkan aroma wangi khas nira matang dan rasa manis legit yang lembut di tenggorokan, tidak meninggalkan rasa pahit atau getir.",
    metric: "3–4 Jam Masak",
  },
  {
    id: "tekstur-lembut",
    title: "Tekstur Empuk & Mudah Diiris",
    subtitle: "Tanpa Bahan Pengeras Kimia",
    description:
      "Karena mengeras secara alami dari kristalisasi nira murni, gula cetak kami mudah diiris tipis menggunakan pisau dapur tanpa pecah berhamburan seperti batu, serta cepat larut saat dimasak.",
    metric: "Alami Padat",
  },
  {
    id: "segar-harian",
    title: "Sadapan Segar yang Langsung Diolah",
    subtitle: "Menjaga Kualitas Sejak Pagi",
    description:
      "Air nira diambil langsung dari pohon pada pagi dan sore hari menggunakan bumbung bersih, lalu segera disaring dan dimasak di hari yang sama sebelum mengalami fermentasi berlebih.",
    metric: "Olahan Harian",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: "01",
    title: "Penyadapan & Penyaringan Nira Segar",
    localTerm: "Panen Pagi & Sore Hari",
    description:
      "Tetesan air nira disadap langsung dari pohon aren setiap pagi dan sore, lalu segera disaring berlapis agar bersih dan tetap segar sebelum terfermentasi.",
    keyDetail: "100% air nira aren segar tanpa tambahan air",
  },
  {
    stepNumber: "02",
    title: "Perebusan di Tungku Kayu Bakar",
    localTerm: "Dimasak Perlahan ± 3–4 Jam",
    description:
      "Air nira direbus di dalam wajan besar di atas perapian kayu bakar sambil terus diaduk hingga mendidih, berbusa keemasan, dan mengental menjadi karamel pekat.",
    keyDetail: "Menghasilkan aroma wangi karamel yang khas",
  },
  {
    stepNumber: "03",
    title: "Pencetakan & Pendinginan Alami",
    localTerm: "Tanpa Bahan Pengeras",
    description:
      "Adonan gula aren matang dituangkan ke dalam cetakan tradisional dan dibiarkan memadat secara alami oleh suhu ruang hingga siap dikemas.",
    keyDetail: "Tekstur padat namun tetap empuk saat diiris",
  },
];

export const PRODUCTS: ProductItem[] = [
  {
    id: "gula-aren-cetak",
    slug: "gula-aren-cetak-asli",
    name: "Gula Aren Cetak Tradisional",
    badge: "Produk Utama",
    isPrimary: true,
    shortDescription:
      "Gula merah cetak asli dari 100% nira aren murni yang dimasak dengan tungku kayu bakar. Harum, legit, dan lembut saat diiris.",
    fullDescription:
      "Hasil olahan utama keluarga kami. Setiap keping gula cetak dibuat dari air nira sadapan segar yang direbus hingga mengental sempurna tanpa tambahan gula pasir maupun pengawet. Sangat cocok untuk kebutuhan dapur keluarga, pembuatan kue tradisional, hingga seduhan minuman hangat.",
    highlights: [
      "100% Nira Aren Murni tanpa campuran gula pasir",
      "Tekstur padat namun empuk saat disisir dengan pisau",
      "Warna cokelat keemasan alami (tidak diwarnai/dihitamkan)",
      "Aroma harum nira matang yang menggugah selera masakan",
    ],
    characteristics: [
      { label: "Bentuk", value: "Cetak Batok / Keping Tradisional" },
      { label: "Komposisi", value: "100% Air Nira Pohon Aren (Arenga pinnata)" },
      { label: "Rasa & Aroma", value: "Manis legit lembut, wangi karamel alami" },
      { label: "Daya Simpan", value: "Hingga 6–12 bulan di wadah tertutup & kering" },
    ],
    usageIdeas: [
      "Bumbu masakan Nusantara (Gudeg, Semur, Ayam Bakar, Sambal Rujak)",
      "Kuah kinca kue tradisional (Klepon, Lupis, Serabi, Kolak, Bubur Sumsum)",
      "Pemanis alami seduhan kopi hitam, kopi susu, atau wedang jahe hangat",
      "Bahan dasar Cuko Pempek yang kental dan harum",
    ],
    storageTip:
      "Simpan di dalam wadah kedap udara pada suhu ruang yang sejuk dan kering, atau di dalam kulkas agar tetap kering dan tahan lama.",
    ordering: {
      availableForDirectOrder: false,
      availabilityNote:
        "Diproduksi rutin setiap minggu sesuai hasil sadapan.",
    },
  },
  {
    id: "air-nira-murni",
    slug: "air-nira-aren-segar",
    name: "Air Nira Aren Murni (Sadapan Segar)",
    badge: "Tersedia Sesuai Sadapan",
    isPrimary: false,
    shortDescription:
      "Tetesan air nira aren murni yang baru diturunkan dari pohon sebelum dimasak menjadi gula. Manis segar alami dengan sensasi dingin khas pegunungan.",
    fullDescription:
      "Selain diolah menjadi gula cetak, biasanya kami juga melayani permintaan khusus bagi yang ingin membeli air nira aren segar secara langsung. Air nira ini adalah cairan murni hasil sadapan pagi/sore hari yang belum melalui proses pemasakan menjadi gula cetak.",
    highlights: [
      "Diambil langsung dari sadapan pohon aren pagi atau sore hari",
      "Rasa manis ringan yang menyegarkan dan alami",
      "Dapat diminum langsung selagi segar atau diolah sesuai kebutuhan",
      "Tanpa tambahan air maupun pemanis buatan",
    ],
    characteristics: [
      { label: "Bentuk", value: "Cairan Nira Segar" },
      { label: "Waktu Panen", value: "Sadapan Pagi & Sore Hari" },
      { label: "Sifat Produk", value: "Sangat segar (mudah berfermentasi alami)" },
      { label: "Ketersediaan", value: "Mengikuti jadwal turun sadapan harian" },
    ],
    usageIdeas: [
      "Diminum langsung sebagai minuman tradisional penyegar tubuh (legen/nira aren segar)",
      "Direbus hangat bersama jahe atau rempah tradisional",
      "Bahan baku olahan fermentasi alami atau eksperimen kuliner rumahan",
    ],
    storageTip:
      "Karena 100% segar tanpa pengawet, air nira harus segera dikonsumsi, direbus, atau disimpan dalam suhu dingin (kulkas/freezer) segera setelah diterima.",
    ordering: {
      availableForDirectOrder: false,
      availabilityNote:
        "Biasanya tersedia bagi pembeli yang memesan lebih dulu mengikuti jadwal sadap pagi/sore.",
    },
  },
];

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    aspect: "Bahan Baku",
    authenticAren: "100% tetesan air nira pohon aren murni tanpa tambahan pemanis lain.",
    mixedSugar: "Dicampur gula pasir (rafinasi), tetes tebu, atau bahan pengisi.",
  },
  {
    aspect: "Tekstur Saat Diiris",
    authenticAren: "Empuk, lembut, mudah disisir tipis dengan pisau tanpa terpental.",
    mixedSugar: "Sangat keras seperti batu dan mudah pecah berkeping-keping tajam.",
  },
  {
    aspect: "Aroma",
    authenticAren: "Wangi khas karamel nira dan sentuhan hangat asap kayu bakar.",
    mixedSugar: "Cenderung hambar atau hanya berbau manis gula biasa.",
  },
  {
    aspect: "Rasa di Lidah & Tenggorokan",
    authenticAren: "Manis legit yang hangat, kompleks, dan nyaman di tenggorokan.",
    mixedSugar: "Manis menyengat di awal dan terkadang meninggalkan rasa getir/serik.",
  },
  {
    aspect: "Kelindian saat Dimasak",
    authenticAren: "Cepat meleleh merata dan memberikan warna cokelat keemasan alami.",
    mixedSugar: "Lebih lama larut dan terkadang menyisakan endapan kristal gula kasar.",
  },
];

export const FAQS: FaqItem[] = [
  {
    question: "Kenapa Gula Aren Tanira hanya tersedia dalam bentuk gula cetak?",
    answer:
      "Usaha orang tua kami berfokus menjaga keaslian pengolahan gula aren cetak tradisional. Dengan fokus pada satu olahan utama (serta air nira segar), setiap hasil sadapan dapat kami jaga kualitas kematangan dan kemurniannya secara konsisten.",
  },
  {
    question: "Apakah bisa membeli air niranya saja sebelum dimasak menjadi gula?",
    answer:
      "Biasanya bisa. Karena setiap hari ada jadwal penyadapan pohon aren di pagi dan sore hari, air nira segar dapat disisihkan sebelum masuk ke wajan perebusan. Namun karena sifat air nira murni yang cepat berubah rasa jika dibiarkan di suhu ruang, ketersediaannya menyesuaikan waktu sadap harian.",
  },
  {
    question: "Bagaimana cara membedakan gula aren cetak asli dengan yang campuran?",
    answer:
      "Cara paling mudah adalah dengan mencium aromanya dan mengiris pinggirannya menggunakan pisau. Gula aren murni memiliki wangi khas nira matang dan teksturnya empuk saat disisir pisau. Selain itu, bila dimakan langsung sedikit saja, gula aren asli akan lumer lembut di mulut tanpa kristal kasar.",
  },
  {
    question: "Kenapa warna gula aren cetak terkadang sedikit berbeda antar cetakan?",
    answer:
      "Warna gula aren murni dipengaruhi secara alami oleh cuaca, musim kemarau atau penghujan, serta suhu tungku kayu bakar saat proses perebusan. Karena kami tidak memakai pewarna buatan atau bahan kimia pemutih/penghitam, variasi warna cokelat keemasan hingga cokelat tua adalah tanda keaslian produk alam.",
  },
  {
    question: "Apakah sudah bisa memesan langsung lewat website ini?",
    answer:
      "Untuk saat ini website Tanira berfungsi sebagai halaman informasi resmi untuk mengenal proses pembuatan dan keaslian produk kami. Fitur pemesanan online langsung melalui website sedang disiapkan untuk pengembangan tahap berikutnya.",
  },
];

export const LOCATION_INFO: LocationInfo = {
  title: "Lokasi Dapur & Pengolahan Aren Keluarga",
  region: "Kec. Bandar Masilam, Kab. Simalungun, Sumatera Utara",
  coordinatesLabel: "3°14'10.7\"N 99°15'50.9\"E",
  latitude: 3.236304,
  longitude: 99.264124,
  googleMapsUrl: "https://maps.app.goo.gl/XsMV7sRscGDVAZDJ6",
  embedUrl:
    "https://maps.google.com/maps?q=3.236304,99.264124&hl=id&z=16&output=embed",
  description:
    "Gula Aren Cetak dan Air Nira Segar Tanira diolah langsung di dapur keluarga kami. Anda dapat melihat titik lokasi pengolahan kami melalui peta interaktif berikut.",
};
