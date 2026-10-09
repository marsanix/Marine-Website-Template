# Demo Website — PT Pelabuhan Ocean Persada

Demo website statis untuk presentasi ke klien. Dibangun dengan **Vue 3 + Vite +
Tailwind CSS**, tanpa backend, tanpa CDN — seluruh aset (foto, font, ikon)
tersimpan lokal sehingga demo bisa dijalankan offline dari laptop mana pun.

Rancangan ini sengaja dibuat agar nanti bisa dipindahkan ke **Laravel** tanpa
menulis ulang tampilan (lihat [Jalur Integrasi Laravel](#jalur-integrasi-laravel)).

---

## Menjalankan

Butuh Node.js 18 atau lebih baru.

```bash
npm install
npm run dev        # server pengembangan, http://localhost:5173
```

Untuk mengecek hasil produksi:

```bash
npm run build      # keluaran ke folder dist/
npm run preview    # menyajikan dist/ di http://localhost:4173
```

### Deploy ke subfolder

Kalau demo diunggah ke subfolder (mis. `domain.com/demo-pop/`), set `VITE_BASE`
saat build:

```bash
VITE_BASE=/demo-pop/ npm run build
```

Fungsi `asset()` di `src/utils/asset.js` otomatis mengikuti nilai tersebut, jadi
path gambar dan font tidak perlu diubah manual.

### Berkas pendamping di `public/`

| Berkas                | Untuk                                                                                                     |
| --------------------- | --------------------------------------------------------------------------------------------------------- |
| `public/.htaccess`  | Apache/cPanel — mengarahkan semua URL ke`index.html` supaya rute Vue tidak 404 saat halaman di-refresh |
| `public/_redirects` | Netlify — fungsi yang sama                                                                               |

> Karena ini SPA dengan mode history, refresh di `/layanan` akan 404 kalau
> server tidak punya aturan rewrite. Kedua berkas di atas menanganinya; keduanya
> ikut tersalin ke `dist/` saat build.

---

## Halaman

| Rute              | Halaman                                                             |
| ----------------- | ------------------------------------------------------------------- |
| `/`             | Beranda                                                             |
| `/tentang-kami` | Tentang Kami                                                        |
| `/layanan`      | Layanan                                                             |
| `/pengalaman`   | Pengalaman Operasi (dengan filter kategori)                         |
| `/berita`       | Daftar Berita                                                       |
| `/berita/:slug` | Detail Berita                                                       |
| `/kontak`       | Kontak (form + peta)                                                |
| `/admin`        | **Pratinjau konsep panel CMS** — mockup, bukan CMS sungguhan |
| `*`             | Halaman 404                                                         |

Halaman `/admin` sengaja disertakan untuk menunjukkan ke klien bagaimana mereka
akan mengelola konten nanti. Tombol di dalamnya belum tersambung ke apa pun dan
sudah diberi spanduk pemberitahuan bahwa datanya contoh.

---

## Di mana konten berada

**Seluruh teks, gambar, dan data ada di satu berkas: [`src/data/site.js`](src/data/site.js).**

Komponen Vue tidak menyimpan konten sendiri — semuanya mengimpor dari berkas
itu. Ini titik paling penting untuk pengembangan lanjutan.

Berkas tersebut menandai asal setiap blok konten:

- **`[ASLI]`** — diambil apa adanya dari situs resmi `pelabuhanoceanpersada.com`
  melalui WordPress REST API. Termasuk: nama & tagline perusahaan, alamat,
  telepon, email, jam operasional, tiga layanan utama, empat tahap alur
  pelaksanaan, dua testimoni klien, dan seluruh foto operasional.
- **`[CONTOH]`** — disusun sebagai contoh untuk keperluan demo, **menunggu materi
  final dari klien**. Termasuk: visi & misi, enam catatan pengalaman operasi,
  enam artikel berita, dan data mockup panel CMS.

Sebelum situs dipakai produksi, blok `[CONTOH]` perlu diganti dengan materi
sungguhan dari klien. Teks penanda ini hanya ada di dalam kode — tidak muncul di
tampilan website.

### Foto

Semua foto ada di `public/assets/img/` dalam format WebP, berasal dari pustaka
media situs resmi klien. Logo tersedia dalam tiga ukuran (`logo-pop-128/400/640`).

---

## Struktur berkas

```
src/
  data/site.js          ← SUMBER KONTEN TUNGGAL
  router/index.js       ← rute + judul dokumen per halaman
  directives/reveal.js  ← animasi muncul saat di-scroll (IntersectionObserver)
  utils/asset.js        ← resolusi path aset (mengikuti VITE_BASE)
  utils/format.js       ← format tanggal Bahasa Indonesia
  components/
    SiteNavbar.vue      ← header tetap + menu mobile
    SiteFooter.vue
    PageHero.vue        ← hero halaman dalam (foto + remah navigasi)
    SectionHeading.vue
    AppIcon.vue         ← ikon SVG inline (tanpa pustaka eksternal)
    WhatsAppButton.vue
  views/                ← satu berkas per halaman
  style.css             ← sistem desain (tombol, kartu, tipografi, pola)
tailwind.config.js      ← palet warna, font, bayangan, animasi
```

### Sistem desain

Palet diambil dari piksel logo resmi, bukan dikira-kira:

- `navy` — `#001848` (warna utama, dominan gelap)
- `gold` — `#D8A818` (aksen tipis, garis & tombol utama)
- `sea` — `#18A8D8` (aksen sekunder)

Tipografi: **Playfair Display** (judul, serif elegan) + **Inter** (badan teks).
Keduanya di-host sendiri di `public/assets/fonts/`.

Kelas siap pakai yang paling sering dipakai ada di `src/style.css`:
`.container-x`, `.h-display`, `.eyebrow` / `.eyebrow-gold` / `.eyebrow-navy`,
`.btn-gold` / `.btn-navy` / `.btn-outline-light` / `.btn-outline-navy`, `.card`,
`.rule-gold`, `.link-underline`.

---

## Jalur Integrasi Laravel

Struktur ini sudah disiapkan supaya pemindahan ke Laravel hanya menyentuh
lapisan data, bukan tampilan.

**1. Pindahkan komponen Vue apa adanya.**
Seluruh isi `src/` bisa langsung dipakai sebagai komponen Inertia. Tidak ada
komponen yang perlu ditulis ulang.

**2. Ganti sumber data.**
Setiap view mengimpor dari `src/data/site.js`. Ubah satu berkas itu menjadi
props Inertia atau pemanggilan API:

```js
// Sebelum (demo statis)
import { services } from '@/data/site'

// Sesudah (Laravel + Inertia)
const props = defineProps({ services: Array })
```

Bentuk data di `site.js` sudah menyerupai respons JSON, jadi bisa dipetakan
langsung ke model Eloquent — `services` → tabel `services`, `news` → tabel
`posts`, dan seterusnya.

**3. Form kontak.**
Satu-satunya titik yang perlu disambungkan ke backend ada di
`src/views/ContactView.vue`, fungsi `handleSubmit()`:

```js
function handleSubmit() {
  // Demo statis: belum terhubung ke backend.
  // Saat integrasi Laravel, ganti isi fungsi ini dengan POST ke endpoint /kontak.
  submitted.value = true
}
```

Ganti isinya dengan `router.post('/kontak', form)` (Inertia) atau `fetch()`
biasa, lalu tambahkan validasi serta pesan galat dari server.

**4. Panel CMS.**
`/admin` saat ini mockup statis. Untuk versi sungguhan, rute ini menjadi
halaman Inertia berpelindung middleware auth, dan data mockup di bagian
`cmsPreview` pada `site.js` diganti data dari database.

**5. Build.**
Jalankan `npm run build`, lalu arahkan Vite ke `resources/` Laravel atau salin
hasil `dist/` ke `public/`. Karena `asset()` sudah mengikuti `VITE_BASE`, path
aset tetap benar di bawah `public/build/`.

---

## Catatan

- **Responsif** — diuji pada 1440px dan 390px; tidak ada overflow horizontal di
  seluruh halaman.
- **Aksesibilitas** — animasi dinonaktifkan otomatis pada
  `prefers-reduced-motion: reduce`; navigasi dapat digunakan dengan papan tik.
- **Tanpa dependensi eksternal** — tidak ada permintaan ke CDN. Satu-satunya
  koneksi luar adalah peta Google Maps di halaman Kontak dan tautan WhatsApp.
