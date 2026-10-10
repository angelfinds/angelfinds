// ===== DATA TRACKING BATCH =====
// Cara update: ubah angka "tahap" (1-9) dan tanggal "update".
// Tambah batch baru = copy satu blok { ... } di dalam BATCHES, lalu isi datanya.
  const STAGES = ["📦 PO Open","🛒 Order Placed","📮 Seller Shipping","🏠 China Warehouse","🚢 Sea Cargo","🇮🇩 Arrived in Indonesia","🚚 Domestic Transit","⚖️ Weighing & Sorting","📦 Shipped to Customer"];
  const BATCHES = [
    {nama:"Batch 2", tahap:2, update:"11 Okt 2026", kirim:"± pertengahan–akhir November 2026", catatan:"PO Batch 2 sudah ditutup, pesanan sedang diproses.",
     jadwal:["5–10 Okt 2026","5–10 Okt 2026 / setelah order masuk","± 10–17 Okt 2026","± 15–22 Okt 2026","± 20 Okt – 17 Nov 2026","± awal–pertengahan Nov 2026","± 3–7 hari","± 1–2 hari setelah barang tiba","± pertengahan–akhir Nov 2026"]},
    {nama:"Batch 1", tahap:5, update:"8 Okt 2026", kirim:"akhir Oktober – awal November 2026", catatan:"Batch 1 sedang dalam perjalanan sea cargo.",
     jadwal:["9–14 Sept 2026","9–14 Sept 2026","± 14–21 Sept 2026","± 18–25 Sept 2026","± akhir Sept – akhir Okt 2026","± akhir Okt 2026","± 3–5 hari","± 1 hari","± awal Nov 2026"]},
  ];
