/**
 * ============================================================================
 *  SUMBER KONTEN TUNGGAL — PT PELABUHAN OCEAN PERSADA
 * ============================================================================
 *
 *  Semua teks, gambar, dan data terpusat di berkas ini supaya saat proyek
 *  dilanjutkan ke Laravel, isi berkas ini cukup diganti dengan data dari
 *  API / controller (mis. props Inertia atau endpoint JSON). Komponen Vue
 *  tidak perlu diubah sama sekali.
 *
 *  Sumber konten:
 *   - Ditandai [ASLI]   : diambil apa adanya dari situs resmi
 *                         pelabuhanoceanpersada.com (via WordPress REST API).
 *   - Ditandai [CONTOH] : disusun sebagai contoh untuk keperluan demo,
 *                         menunggu materi final dari klien.
 * ============================================================================
 */

/* -------------------------------------------------------------------------- */
/*  Identitas perusahaan                                                       */
/* -------------------------------------------------------------------------- */

export const company = {
  name: 'PT Pelabuhan Ocean Persada',
  shortName: 'Pelabuhan Ocean Persada',
  abbreviation: 'PT POP',
  tagline:
    'Operasi Ship-to-Ship Presisi & Keamanan Maritim Terpercaya di Batam',
  description:
    'PT Pelabuhan Ocean Persada hadir sebagai penyedia layanan maritim profesional yang berbasis di perairan strategis Batam, memfasilitasi transfer kargo antar-kapal dengan standar keselamatan maritim internasional.',

  address: 'Ruko Center View Blok A No. 17',
  addressNote: 'Batam, Kepulauan Riau, Indonesia',
  phoneDisplay: '(+62) 813-1022-5369',
  phoneRaw: '+6281310225369',
  whatsappRaw: '6281310225369',
  email: 'admin@pelabuhanoceanpersada.com',
  hours: 'Senin – Minggu: 24 Jam Layanan Siaga Maritim',
  hoursShort: 'Layanan Siaga 24/7',

  mapsQuery: 'Ruko Center View Blok A No. 17',
  mapsEmbed:
    'https://www.google.com/maps?q=Ruko%20Center%20View%20Blok%20A%20No.%2017&output=embed',
  mapsLink:
    'https://www.google.com/maps/search/?api=1&query=Ruko%20Center%20View%20Blok%20A%20No.%2017',
}

/** Tautan WhatsApp siap pakai dengan pesan pembuka. */
export const whatsappLink = (
  message = 'Selamat pagi, saya ingin berkonsultasi mengenai layanan operasi Ship-to-Ship.'
) => `https://wa.me/${company.whatsappRaw}?text=${encodeURIComponent(message)}`

/* -------------------------------------------------------------------------- */
/*  Navigasi                                                                   */
/* -------------------------------------------------------------------------- */

export const navigation = [
  { label: 'Beranda', to: '/' },
  { label: 'Tentang Kami', to: '/tentang-kami' },
  { label: 'Layanan', to: '/layanan' },
  { label: 'Pengalaman', to: '/pengalaman' },
  { label: 'Berita', to: '/berita' },
  { label: 'Kontak', to: '/kontak' },
]

/* -------------------------------------------------------------------------- */
/*  Penanda kepercayaan (Beranda)  [ASLI]                                      */
/*  Sengaja tanpa angka statistik karena datanya belum tersedia dari klien.    */
/* -------------------------------------------------------------------------- */

export const trustMarkers = [
  {
    label: 'Siaga Operasional',
    value: '24 / 7',
    note: 'Tim operasional merespons sepanjang waktu',
    icon: 'clock',
  },
  {
    label: 'Basis Operasi',
    value: 'Batam',
    note: 'Perairan strategis jalur pelayaran internasional',
    icon: 'anchor',
  },
  {
    label: 'Standar Kerja',
    value: 'Internasional',
    note: 'Mengacu konvensi keselamatan maritim',
    icon: 'shield',
  },
  {
    label: 'Cakupan Layanan',
    value: 'Terpadu',
    note: 'Dari pendekatan kapal hingga pelepasan tambat',
    icon: 'layers',
  },
]

/* -------------------------------------------------------------------------- */
/*  Layanan utama (Beranda)  [ASLI]                                            */
/* -------------------------------------------------------------------------- */

export const services = [
  {
    slug: 'transfer-sts',
    category: 'Transfer STS',
    title: 'Transfer Kargo Antar-Kapal',
    summary:
      'Penanganan transfer minyak cair dan kargo kering antar-kapal di laut lepas dengan peralatan fender heavy-duty.',
    image: '/assets/img/sts-fender-channel.webp',
    icon: 'ship-transfer',
    points: [
      'Transfer minyak cair dan kargo kering di laut lepas',
      'Peralatan fender heavy-duty berstandar internasional',
      'Pengawasan tekanan dan laju alir selama proses',
      'Prosedur tanggap darurat tumpahan kargo',
    ],
  },
  {
    slug: 'tambat-pandu',
    category: 'Kepelabuhanan',
    title: 'Manajemen Tambat & Pandu',
    summary:
      'Dukungan operasional penambatan kapal dan asistensi pemanduan maritim untuk efisiensi jalur perairan Batam.',
    image: '/assets/img/port-tugboat.webp',
    icon: 'anchor',
    points: [
      'Pengaturan posisi kapal dan pemasangan tambat',
      'Asistensi pemanduan oleh pandu berpengalaman',
      'Koordinasi dengan otoritas pelabuhan setempat',
      'Pemangkasan waktu tunggu kapal di perairan',
    ],
  },
  {
    slug: 'inspeksi-keamanan',
    category: 'Kepatuhan',
    title: 'Inspeksi & Keamanan Maritim',
    summary:
      'Pengawasan ketaatan regulasi global dan audit keselamatan terpadu untuk memastikan keamanan armada.',
    image: '/assets/img/lifebuoy-safety.webp',
    icon: 'shield',
    points: [
      'Pengawasan ketaatan regulasi maritim global',
      'Audit keselamatan terpadu sebelum operasi',
      'Pemeriksaan kelayakan peralatan transfer',
      'Pelaporan dan dokumentasi operasional',
    ],
  },
]

/* -------------------------------------------------------------------------- */
/*  Kesiapan armada (Beranda)  [ASLI]                                          */
/* -------------------------------------------------------------------------- */

export const equipment = [
  {
    title: 'Fender & Hose Transfer',
    eyebrow: 'Peralatan STS',
    summary:
      'Penggunaan fender pelindung tekanan tinggi dan selang transfer bersertifikasi internasional untuk mencegah keretakan serta kebocoran.',
    image: '/assets/img/fenders-hull.webp',
    icon: 'fender',
  },
  {
    title: 'Tim Operasional Berpengalaman',
    eyebrow: 'Kru Profesional',
    summary:
      'Personel maritim bersertifikat yang terlatih menghadapi dinamika cuaca perairan Batam serta prosedur darurat.',
    image: '/assets/img/crew-deck-briefing.webp',
    icon: 'crew',
  },
]

/* -------------------------------------------------------------------------- */
/*  Alur pelaksanaan transfer (Layanan)  [ASLI]                                */
/* -------------------------------------------------------------------------- */

export const procedures = [
  {
    step: '01',
    title: 'Pendekatan dan Mooring',
    summary:
      'Pengaturan posisi kapal dengan panduan pandu berpengalaman dan pemasangan fender pengaman berkualitas tinggi.',
    image: '/assets/img/sts-fender-channel.webp',
  },
  {
    step: '02',
    title: 'Koneksi Selang Transfer',
    summary:
      'Pemasangan selang transfer fluida dengan pengujian tekanan ketat guna menghindari kebocoran kargo.',
    image: '/assets/img/hose-manifold-crew.webp',
  },
  {
    step: '03',
    title: 'Pengawasan Pompa',
    summary:
      'Monitoring laju transfer secara real-time oleh kru bersertifikasi untuk menjamin efisiensi waktu.',
    image: '/assets/img/winch-hose-reel.webp',
  },
  {
    step: '04',
    title: 'Pelepasan dan Keberangkatan',
    summary:
      'Pelepasan tambat yang terkoordinasi rapi setelah seluruh proses transfer dinyatakan tuntas.',
    image: '/assets/img/tanker-opensea.webp',
  },
]

/* -------------------------------------------------------------------------- */
/*  Nilai utama (Layanan)  [ASLI]                                              */
/* -------------------------------------------------------------------------- */

export const coreValues = [
  {
    title: 'Kepatuhan Regulasi Global',
    summary:
      'Seluruh prosedur merujuk pada standar keselamatan maritim internasional demi perlindungan aset dan lingkungan.',
    icon: 'shield',
  },
  {
    title: 'Efisiensi Waktu Labuh',
    summary:
      'Optimalisasi durasi singgah di perairan strategis Batam untuk memangkas biaya operasional logistik.',
    icon: 'clock',
  },
  {
    title: 'Manajemen Armada Profesional',
    summary:
      'Didukung oleh tenaga ahli maritim terlatih dan peralatan fender serta selang transfer berstandar tinggi.',
    icon: 'crew',
  },
]

/* -------------------------------------------------------------------------- */
/*  Tata kelola (Tentang Kami)  [ASLI]                                         */
/* -------------------------------------------------------------------------- */

export const governance = [
  {
    label: 'Pengawasan',
    title: 'Manajemen Armada Profesional',
    summary:
      'Pengawasan ketat oleh tenaga ahli berpengalaman dalam industri logistik pelayaran internasional.',
    icon: 'crew',
  },
  {
    label: 'Standar',
    title: 'Kepatuhan Regulasi Global',
    summary:
      'Penerapan prosedur operasional standar yang mematuhi konvensi keselamatan maritim.',
    icon: 'shield',
  },
  {
    label: 'Integritas',
    title: 'Komitmen Pelayanan Prima',
    summary:
      'Dedikasi tinggi terhadap efisiensi waktu dan keamanan setiap armada yang berlabuh.',
    icon: 'handshake',
  },
]

/* -------------------------------------------------------------------------- */
/*  Visi & Misi  [CONTOH — menunggu materi final klien]                        */
/* -------------------------------------------------------------------------- */

export const visionMission = {
  vision:
    'Menjadi mitra operasi maritim paling andal di perairan Batam dan Selat Malaka, yang diakui atas presisi kerja, kepatuhan keselamatan, dan integritas pelayanan.',
  missions: [
    'Menyelenggarakan operasi transfer antar-kapal yang aman, presisi, dan tepat waktu bagi setiap armada yang kami layani.',
    'Menerapkan standar keselamatan maritim internasional secara konsisten pada seluruh rangkaian prosedur operasional.',
    'Mengembangkan kompetensi kru dan kemutakhiran peralatan fender serta selang transfer secara berkelanjutan.',
    'Menjaga koordinasi yang transparan dengan otoritas pelabuhan, mitra logistik, dan pemilik kargo.',
  ],
}

/* -------------------------------------------------------------------------- */
/*  Testimoni (Beranda)  [ASLI]                                                */
/* -------------------------------------------------------------------------- */

export const testimonials = [
  {
    quote:
      'Operasi transfer STS berjalan lancar dengan koordinasi kru yang sangat disiplin pada prosedur keselamatan maritim.',
    author: 'Manajer Logistik Armada',
    origin: 'Singapura',
  },
  {
    quote:
      'Kecepatan merespons kebutuhan penambatan di perairan Batam membantu memangkas waktu tunggu kapal kami secara signifikan.',
    author: 'Direktur Operasional Charterer',
    origin: 'Jakarta',
  },
]

/* -------------------------------------------------------------------------- */
/*  Pengalaman operasi (halaman Pengalaman)  [CONTOH]                          */
/*  Deskripsi disusun generik tanpa menyebut nama klien.                       */
/* -------------------------------------------------------------------------- */

export const operationCategories = [
  'Semua',
  'Transfer STS',
  'Tambat & Pandu',
  'Inspeksi & Keamanan',
]

export const operations = [
  {
    title: 'Transfer Kargo Minyak Cair Antar-Kapal',
    category: 'Transfer STS',
    location: 'Perairan Batam',
    scope: 'Transfer minyak cair',
    summary:
      'Operasi transfer minyak cair antar dua tanker di laut lepas dengan pemasangan fender tekanan tinggi dan pengawasan laju alir secara berkelanjutan.',
    image: '/assets/img/hero-sts-transfer.webp',
    highlights: ['Fender heavy-duty', 'Pengujian tekanan selang', 'Monitoring laju alir'],
  },
  {
    title: 'Asistensi Tambat Kapal Kontainer',
    category: 'Tambat & Pandu',
    location: 'Pelabuhan Batam',
    scope: 'Penambatan & pemanduan',
    summary:
      'Dukungan penambatan dan asistensi pemanduan bagi kapal kontainer yang bersandar, termasuk koordinasi dengan otoritas pelabuhan setempat.',
    image: '/assets/img/port-tugboat.webp',
    highlights: ['Koordinasi pandu', 'Pengaturan posisi kapal', 'Efisiensi waktu sandar'],
  },
  {
    title: 'Audit Keselamatan Pra-Operasi',
    category: 'Inspeksi & Keamanan',
    location: 'Perairan Batam',
    scope: 'Inspeksi & kepatuhan',
    summary:
      'Pemeriksaan kelayakan peralatan transfer dan verifikasi kesiapan kru sebelum rangkaian operasi STS dimulai.',
    image: '/assets/img/bridge-officer-log.webp',
    highlights: ['Verifikasi peralatan', 'Pemeriksaan dokumen', 'Briefing keselamatan'],
  },
  {
    title: 'Operasi Bongkar Muat di Dek Tongkang',
    category: 'Transfer STS',
    location: 'Perairan Batam',
    scope: 'Penanganan kargo kering',
    summary:
      'Penanganan kargo kering di dek tongkang dengan pengawasan kru bersertifikat dan penerapan prosedur keselamatan kerja.',
    image: '/assets/img/barge-crew-operation.webp',
    highlights: ['Kru bersertifikat', 'Prosedur kerja aman', 'Pengawasan berlapis'],
  },
  {
    title: 'Koneksi Selang & Manifold',
    category: 'Transfer STS',
    location: 'Laut Lepas',
    scope: 'Pemasangan selang transfer',
    summary:
      'Pemasangan dan pengujian sambungan selang transfer fluida pada manifold kapal guna memastikan tidak ada kebocoran kargo.',
    image: '/assets/img/hose-manifold-crew.webp',
    highlights: ['Uji tekanan ketat', 'Pencegahan kebocoran', 'Ceklis sambungan'],
  },
  {
    title: 'Pengawasan Jalur Pelayaran Strategis',
    category: 'Inspeksi & Keamanan',
    location: 'Selat Malaka – Batam',
    scope: 'Pengawasan kepatuhan',
    summary:
      'Pengawasan ketaatan regulasi maritim pada jalur pelayaran strategis, mencakup pemeriksaan peralatan keselamatan armada.',
    image: '/assets/img/batam-port-cranes.webp',
    highlights: ['Kepatuhan regulasi', 'Pemeriksaan armada', 'Dokumentasi operasi'],
  },
]

/* -------------------------------------------------------------------------- */
/*  Berita (halaman Berita)  [CONTOH]                                          */
/* -------------------------------------------------------------------------- */

export const newsCategories = ['Semua', 'Operasional', 'Keselamatan', 'Perusahaan']

export const news = [
  {
    slug: 'presisi-operasi-sts-perairan-batam',
    title: 'Menjaga Presisi Operasi Ship-to-Ship di Perairan Batam',
    category: 'Operasional',
    date: '2026-09-24',
    author: 'Tim Operasional',
    image: '/assets/img/sts-fender-channel.webp',
    excerpt:
      'Setiap operasi transfer antar-kapal bertumpu pada perhitungan posisi, pemasangan fender, dan koordinasi kru yang berjalan dalam satu ritme.',
    body: [
      'Operasi ship-to-ship menuntut ketelitian pada setiap tahapnya. Sebelum kedua kapal bersandar, tim kami menyusun perhitungan posisi berdasarkan arah arus, kecepatan angin, dan kondisi gelombang di perairan Batam.',
      'Pemasangan fender menjadi tahap yang menentukan. Fender berfungsi menyerap benturan antara kedua lambung kapal sehingga tidak terjadi keretakan pada struktur maupun kebocoran pada sambungan kargo.',
      'Setelah posisi terkunci, kru bersertifikat melakukan pemasangan selang transfer dan pengujian tekanan. Monitoring laju alir berjalan secara berkelanjutan hingga seluruh muatan dinyatakan tuntas dialihkan.',
    ],
  },
  {
    slug: 'penerapan-standar-keselamatan-maritim',
    title: 'Menerapkan Standar Keselamatan Maritim Internasional Secara Konsisten',
    category: 'Keselamatan',
    date: '2026-09-12',
    author: 'Divisi HSE',
    image: '/assets/img/lifebuoy-safety.webp',
    excerpt:
      'Kepatuhan bukan sekadar kelengkapan dokumen, melainkan kebiasaan kerja yang diuji pada setiap operasi di lapangan.',
    body: [
      'Seluruh prosedur operasional kami merujuk pada konvensi keselamatan maritim internasional. Rujukan ini diterjemahkan menjadi ceklis kerja yang dijalankan kru pada setiap operasi, bukan sekadar dokumen yang tersimpan.',
      'Sebelum operasi dimulai, dilakukan briefing keselamatan yang mencakup prosedur darurat, jalur evakuasi, dan pembagian peran antar kru.',
      'Peralatan keselamatan diperiksa secara berkala, termasuk pelampung, peralatan pemadam, dan sistem komunikasi darurat yang menghubungkan kedua kapal.',
    ],
  },
  {
    slug: 'efisiensi-waktu-labuh',
    title: 'Menekan Waktu Labuh Kapal melalui Koordinasi yang Rapi',
    category: 'Operasional',
    date: '2026-08-30',
    author: 'Tim Operasional',
    image: '/assets/img/port-tugboat.webp',
    excerpt:
      'Waktu labuh yang lebih singkat berdampak langsung pada biaya logistik. Koordinasi awal menjadi kuncinya.',
    body: [
      'Durasi singgah kapal di perairan merupakan komponen biaya yang signifikan bagi operator logistik. Setiap jam yang dapat dipangkas memberi dampak langsung pada efisiensi.',
      'Kami memulai koordinasi jauh sebelum kapal tiba: menyiapkan jalur pendekatan, memastikan kesiapan pandu, serta menyelaraskan jadwal dengan otoritas pelabuhan setempat.',
      'Dengan persiapan tersebut, rangkaian penambatan hingga pelepasan tambat dapat berjalan dalam satu alur kerja yang terkoordinasi.',
    ],
  },
  {
    slug: 'perawatan-fender-dan-selang-transfer',
    title: 'Perawatan Fender dan Selang Transfer sebagai Investasi Keselamatan',
    category: 'Keselamatan',
    date: '2026-08-18',
    author: 'Divisi Teknik',
    image: '/assets/img/fenders-hull.webp',
    excerpt:
      'Peralatan yang terawat adalah lapisan pertahanan pertama dalam mencegah kebocoran kargo dan kerusakan lambung kapal.',
    body: [
      'Fender dan selang transfer bekerja pada tekanan tinggi sepanjang operasi. Keduanya diperiksa sebelum dan sesudah digunakan untuk memastikan tidak ada penurunan kondisi.',
      'Pemeriksaan mencakup keutuhan lapisan luar fender, kondisi sambungan, serta elastisitas selang. Peralatan yang tidak lolos pemeriksaan langsung dikeluarkan dari rotasi operasi.',
      'Perawatan berkala memperpanjang usia pakai peralatan sekaligus menjaga standar keselamatan yang kami tetapkan.',
    ],
  },
  {
    slug: 'kompetensi-kru-operasional',
    title: 'Membangun Kompetensi Kru Operasional Maritim',
    category: 'Perusahaan',
    date: '2026-08-05',
    author: 'Divisi SDM',
    image: '/assets/img/crew-deck-briefing.webp',
    excerpt:
      'Kru yang terlatih menghadapi dinamika cuaca perairan Batam menjadi penentu kelancaran seluruh rangkaian operasi.',
    body: [
      'Perairan Batam memiliki karakter cuaca yang dinamis. Kru kami dilatih membaca perubahan kondisi dan menyesuaikan prosedur kerja secara cepat dan tepat.',
      'Pelatihan mencakup penanganan selang transfer, prosedur darurat, komunikasi antar kapal, serta penerapan budaya keselamatan kerja di dek.',
      'Selain keterampilan teknis, kami menekankan disiplin pada prosedur sebagai fondasi keandalan operasional jangka panjang.',
    ],
  },
  {
    slug: 'koordinasi-lintas-pihak-operasi-laut',
    title: 'Koordinasi Lintas Pihak dalam Operasi di Laut Lepas',
    category: 'Operasional',
    date: '2026-07-22',
    author: 'Tim Operasional',
    image: '/assets/img/batam-port-cranes.webp',
    excerpt:
      'Operasi di laut lepas melibatkan banyak pihak. Komunikasi yang transparan menjaga semuanya berjalan pada jalurnya.',
    body: [
      'Sebuah operasi di laut lepas melibatkan pemilik kapal, pemilik kargo, agen, serta otoritas setempat. Masing-masing memiliki kepentingan dan jadwalnya sendiri.',
      'Kami menjaga satu titik koordinasi yang menyatukan informasi jadwal, kesiapan peralatan, dan kondisi perairan terkini.',
      'Dengan alur informasi yang jelas, keputusan operasional dapat diambil lebih cepat tanpa mengorbankan aspek keselamatan.',
    ],
  },
]

/* -------------------------------------------------------------------------- */
/*  Pratinjau CMS  [CONTOH]                                                    */
/*  Data tiruan untuk memperlihatkan konsep panel admin kepada klien.          */
/* -------------------------------------------------------------------------- */

export const cmsPreview = {
  stats: [
    { label: 'Halaman Aktif', value: '6', delta: 'Semua terbit', icon: 'layers' },
    { label: 'Artikel Berita', value: '6', delta: '2 draf', icon: 'news' },
    { label: 'Pesan Masuk', value: '14', delta: '3 belum dibaca', icon: 'mail' },
    { label: 'Layanan', value: '3', delta: 'Semua terbit', icon: 'ship-transfer' },
  ],
  articles: news.map((item, index) => ({
    id: `ART-${String(index + 1).padStart(3, '0')}`,
    title: item.title,
    category: item.category,
    image: item.image,
    updated: item.date,
    status: index === 1 || index === 4 ? 'Draf' : 'Terbit',
    author: item.author,
  })),
  activity: [
    { actor: 'Admin Operasional', action: 'memperbarui halaman', target: 'Layanan', time: '12 menit lalu' },
    { actor: 'Admin Operasional', action: 'menerbitkan artikel', target: 'Presisi Operasi STS', time: '2 jam lalu' },
    { actor: 'Editor Konten', action: 'menyimpan draf', target: 'Standar Keselamatan', time: 'Kemarin' },
    { actor: 'Admin Operasional', action: 'mengubah kontak', target: 'Halaman Kontak', time: '2 hari lalu' },
  ],
  menu: [
    { label: 'Dasbor', icon: 'grid', active: true },
    { label: 'Halaman', icon: 'layers' },
    { label: 'Berita', icon: 'news' },
    { label: 'Layanan', icon: 'ship-transfer' },
    { label: 'Pengalaman', icon: 'briefcase' },
    { label: 'Pesan Masuk', icon: 'mail', badge: '3' },
    { label: 'Pengaturan Situs', icon: 'settings' },
  ],
}

/* -------------------------------------------------------------------------- */
/*  Peta situs untuk footer                                                    */
/* -------------------------------------------------------------------------- */

export const footerLinks = [
  {
    heading: 'Perusahaan',
    links: [
      { label: 'Tentang Kami', to: '/tentang-kami' },
      { label: 'Pengalaman', to: '/pengalaman' },
      { label: 'Berita', to: '/berita' },
      { label: 'Pratinjau CMS', to: '/admin' },
    ],
  },
  {
    heading: 'Layanan',
    links: [
      { label: 'Transfer Kargo Antar-Kapal', to: '/layanan' },
      { label: 'Manajemen Tambat & Pandu', to: '/layanan' },
      { label: 'Inspeksi & Keamanan Maritim', to: '/layanan' },
      { label: 'Alur Pelaksanaan Transfer', to: '/layanan' },
    ],
  },
]
