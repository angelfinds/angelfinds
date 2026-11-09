
// ===== DATA TRACKING BATCH =====
// Cara update: ubah angka "tahap" (1-9) dan tanggal "update".
// Tambah batch baru = copy satu blok { ... } di dalam BATCHES.

const STAGES = [
  "📦 PO Open",
  "🛒 Order Placed",
  "📮 Seller Shipping",
  "🏠 China Warehouse",
  "🚢 Sea Cargo",
  "🇮🇩 Arrived in Indonesia",
  "🚚 Domestic Transit",
  "⚖️ Weighing & Sorting",
  "📦 Shipped to Customer"
];

const BATCHES = [
  {
    nama: "Batch 2",
    tahap: 7,
    update: "9 Nov 2026",
    kirim: "± pertengahan–akhir November 2026",
    catatan: "Pesanan dalam perjalanan dari pelabuhan ke warehouse Indonesia",
    jadwal: [
      "5–10 Okt 2026",
      "5–10 Okt 2026 / setelah order masuk",
      "± 10–17 Okt 2026",
      "± 15–22 Okt 2026",
      "± 20 Okt – 17 Nov 2026",
      "± awal–pertengahan Nov 2026",
      "± 3–7 hari",
      "± 1–2 hari setelah barang tiba",
      "± pertengahan–akhir Nov 2026"
    ]
  },
  {
    nama: "Batch 3",
    tahap: 1,
    update: "9 Nov 2026",
    kirim: "± awal Desember 2026 – awal Januari 2027",
    catatan: "Open PO 5–11 November 2026. Pesanan akan diproses, dicek melalui QC, dan dikonsolidasikan di warehouse China sebelum dikirim ke Indonesia via sea cargo.",
    jadwal: [
      "5–11 Nov 2026",
      "5–11 Nov 2026 / setelah order masuk",
      "± 8–18 Nov 2026",
      "± 12–22 Nov 2026",
      "± 18–27 Nov 2026",
      "± 2–23 Des 2026",
      "± 3–7 hari setelah cargo tiba di Indonesia",
      "± 1–2 hari setelah bongkar cargo selesai",
      "± awal Des 2026 – awal Jan 2027"
    ]
  }
];
