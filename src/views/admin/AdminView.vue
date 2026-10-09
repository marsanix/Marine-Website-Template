<script setup>
import { reactive, ref } from 'vue'
import AppIcon from '@/components/AppIcon.vue'
import { cmsPreview, company } from '@/data/site'
import { asset } from '@/utils/asset'
import { formatDateShort } from '@/utils/format'

/**
 * PRATINJAU KONSEP PANEL CMS
 * ------------------------------------------------------------------
 * Halaman ini hanya memperlihatkan rancangan tampilan panel admin
 * kepada klien. Seluruh data berasal dari `cmsPreview` (contoh) dan
 * tidak ada penyimpanan sungguhan. Saat integrasi Laravel, halaman
 * ini menjadi Blade/Inertia view yang terhubung ke basis data.
 */

const sidebarOpen = ref(false)

const editor = reactive({
  title: 'Menjaga Presisi Operasi Ship-to-Ship di Perairan Batam',
  slug: 'presisi-operasi-sts-perairan-batam',
  category: 'Operasional',
  status: 'Terbit',
  excerpt:
    'Setiap operasi transfer antar-kapal bertumpu pada perhitungan posisi, pemasangan fender, dan koordinasi kru yang berjalan dalam satu ritme.',
  body:
    'Operasi ship-to-ship menuntut ketelitian pada setiap tahapnya. Sebelum kedua kapal bersandar, tim kami menyusun perhitungan posisi berdasarkan arah arus, kecepatan angin, dan kondisi gelombang di perairan Batam.',
})

const saved = ref(false)

function saveDraft() {
  saved.value = true
  setTimeout(() => (saved.value = false), 2600)
}
</script>

<template>
  <div class="flex min-h-screen bg-navy-50">
    <!-- ================================================================== -->
    <!--  SIDEBAR                                                            -->
    <!-- ================================================================== -->
    <aside
      class="fixed inset-y-0 left-0 z-50 flex w-72 flex-col bg-navy-950 transition-transform duration-300 lg:translate-x-0"
      :class="sidebarOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <!-- Logo -->
      <div class="flex h-[74px] shrink-0 items-center gap-3.5 border-b border-white/10 px-6">
        <img
          :src="asset('/assets/img/logo-pop-128.webp')"
          :alt="`Logo ${company.name}`"
          width="128"
          height="131"
          class="h-10 w-10"
        />
        <span class="leading-none">
          <span class="block font-display text-[15px] font-semibold text-white">
            Panel CMS
          </span>
          <span class="eyebrow mt-1.5 block text-[8.5px] text-gold-400">
            Pelabuhan Ocean Persada
          </span>
        </span>

        <button
          type="button"
          class="ml-auto text-white/60 hover:text-white lg:hidden"
          aria-label="Tutup menu"
          @click="sidebarOpen = false"
        >
          <AppIcon name="x" :size="20" />
        </button>
      </div>

      <!-- Menu -->
      <nav class="flex-1 space-y-1 overflow-y-auto p-4">
        <p class="eyebrow px-3 pb-3 pt-2 text-white/30">Kelola Konten</p>

        <a
          v-for="item in cmsPreview.menu"
          :key="item.label"
          href="#"
          class="flex items-center gap-3.5 rounded-sm px-3.5 py-3 text-[14px] transition-colors duration-200"
          :class="
            item.active
              ? 'bg-gold-400 font-semibold text-navy-900'
              : 'text-white/65 hover:bg-white/[0.07] hover:text-white'
          "
          @click.prevent
        >
          <AppIcon :name="item.icon" :size="19" />
          <span class="flex-1">{{ item.label }}</span>
          <span
            v-if="item.badge"
            class="rounded-full px-2 py-0.5 text-[11px] font-semibold"
            :class="item.active ? 'bg-navy-900 text-gold-400' : 'bg-gold-400 text-navy-900'"
          >
            {{ item.badge }}
          </span>
        </a>
      </nav>

      <!-- Pengguna -->
      <div class="shrink-0 border-t border-white/10 p-4">
        <div class="flex items-center gap-3.5 rounded-sm bg-white/[0.05] p-3.5">
          <span
            class="flex h-10 w-10 items-center justify-center rounded-full bg-gold-400 font-display text-[15px] font-semibold text-navy-900"
          >
            AO
          </span>
          <span class="min-w-0 flex-1 leading-tight">
            <span class="block truncate text-[13.5px] font-medium text-white">
              Admin Operasional
            </span>
            <span class="mt-1 block truncate text-[11.5px] text-white/45">
              admin@pelabuhanoceanpersada.com
            </span>
          </span>
        </div>

        <RouterLink
          to="/"
          class="mt-3 flex items-center gap-2.5 px-2 py-2 text-[13px] text-white/50 transition-colors hover:text-gold-300"
        >
          <AppIcon name="arrow-right" :size="15" class="rotate-180" />
          Kembali ke situs
        </RouterLink>
      </div>
    </aside>

    <!-- Latar gelap saat sidebar mobile terbuka -->
    <div
      v-if="sidebarOpen"
      class="fixed inset-0 z-40 bg-navy-950/60 lg:hidden"
      @click="sidebarOpen = false"
    />

    <!-- ================================================================== -->
    <!--  AREA UTAMA                                                         -->
    <!-- ================================================================== -->
    <div class="flex min-w-0 flex-1 flex-col lg:pl-72">
      <!-- Bilah atas -->
      <header
        class="sticky top-0 z-30 flex h-[74px] items-center gap-4 border-b border-navy-900/10 bg-white/95 px-6 backdrop-blur-md lg:px-8"
      >
        <button
          type="button"
          class="text-navy-900/60 hover:text-navy-900 lg:hidden"
          aria-label="Buka menu"
          @click="sidebarOpen = true"
        >
          <AppIcon name="menu" :size="22" />
        </button>

        <div class="relative hidden max-w-md flex-1 sm:block">
          <AppIcon
            name="search"
            :size="17"
            class="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-navy-900/35"
          />
          <input
            type="search"
            placeholder="Cari halaman, artikel, atau layanan…"
            class="w-full border border-navy-900/12 bg-navy-50/60 py-2.5 pl-11 pr-4 text-[14px] text-navy-900 placeholder:text-navy-900/35 focus:border-navy-800 focus:bg-white focus:outline-none"
          />
        </div>

        <div class="ml-auto flex items-center gap-3">
          <button
            type="button"
            class="relative flex h-10 w-10 items-center justify-center border border-navy-900/12 text-navy-900/60 transition-colors hover:border-navy-900/30 hover:text-navy-900"
            aria-label="Notifikasi"
          >
            <AppIcon name="bell" :size="18" />
            <span class="absolute right-2 top-2 h-2 w-2 rounded-full bg-gold-400" />
          </button>

          <span
            class="flex h-10 w-10 items-center justify-center rounded-full bg-navy-800 font-display text-[14px] font-semibold text-white"
          >
            AO
          </span>
        </div>
      </header>

      <div class="flex-1 p-6 lg:p-8">
        <!-- Pemberitahuan pratinjau -->
        <div
          class="mb-7 flex flex-wrap items-center gap-3 border border-gold-400/40 bg-gold-50 px-5 py-4"
        >
          <AppIcon name="eye" :size="18" class="text-gold-600" />
          <p class="text-[13.5px] text-navy-900/75">
            <span class="font-semibold text-navy-900">Pratinjau konsep panel CMS.</span>
            Seluruh data di halaman ini adalah contoh dan belum tersimpan.
          </p>
          <span class="eyebrow ml-auto text-gold-600">Tampilan Admin</span>
        </div>

        <!-- Judul halaman -->
        <div class="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p class="eyebrow text-navy-900/40">Dasbor</p>
            <h1 class="h-display mt-3 text-[1.75rem] leading-tight text-navy-900 lg:text-[2.1rem]">
              Selamat datang kembali
            </h1>
            <p class="mt-2.5 text-[14.5px] text-navy-900/55">
              Ringkasan konten website per {{ formatDateShort(new Date().toISOString().slice(0, 10)) }}.
            </p>
          </div>

          <button type="button" class="btn-navy">
            <AppIcon name="plus" :size="17" />
            Tulis Artikel
          </button>
        </div>

        <!-- Kartu statistik -->
        <div class="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          <div
            v-for="stat in cmsPreview.stats"
            :key="stat.label"
            class="border border-navy-900/10 bg-white p-6 shadow-card"
          >
            <div class="flex items-start justify-between">
              <span
                class="flex h-11 w-11 items-center justify-center rounded-full bg-navy-50 text-navy-700"
              >
                <AppIcon :name="stat.icon" :size="21" />
              </span>
              <AppIcon name="trend" :size="17" class="text-navy-900/25" />
            </div>

            <p class="h-display mt-6 text-[2.1rem] leading-none text-navy-900">
              {{ stat.value }}
            </p>
            <p class="mt-3 text-[13.5px] font-medium text-navy-900/70">{{ stat.label }}</p>
            <p class="mt-1.5 text-[12.5px] text-navy-900/45">{{ stat.delta }}</p>
          </div>
        </div>

        <!-- Tabel + aktivitas -->
        <div class="mt-6 grid gap-6 xl:grid-cols-3">
          <!-- Tabel artikel -->
          <!-- min-w-0 wajib: tanpa ini item grid menolak menyusut dan tabel
               ber-min-width memaksa seluruh halaman melebar di layar kecil. -->
          <section class="min-w-0 border border-navy-900/10 bg-white shadow-card xl:col-span-2">
            <header class="flex flex-wrap items-center justify-between gap-4 border-b border-navy-900/10 p-6">
              <div>
                <h2 class="h-display text-[1.25rem] text-navy-900">Daftar Artikel</h2>
                <p class="mt-1.5 text-[13px] text-navy-900/50">
                  {{ cmsPreview.articles.length }} artikel terdaftar
                </p>
              </div>

              <button
                type="button"
                class="flex items-center gap-2 border border-navy-900/12 px-4 py-2.5 text-[12.5px] font-semibold uppercase tracking-[0.1em] text-navy-900/70 transition-colors hover:border-navy-900/30 hover:text-navy-900"
              >
                <AppIcon name="sliders" :size="15" />
                Saring
              </button>
            </header>

            <div class="overflow-x-auto">
              <table class="w-full min-w-[640px] border-collapse text-left">
                <thead>
                  <tr class="border-b border-navy-900/10 bg-navy-50/60">
                    <th class="eyebrow px-6 py-4 text-navy-900/45">Artikel</th>
                    <th class="eyebrow px-4 py-4 text-navy-900/45">Kategori</th>
                    <th class="eyebrow px-4 py-4 text-navy-900/45">Diperbarui</th>
                    <th class="eyebrow px-4 py-4 text-navy-900/45">Status</th>
                    <th class="eyebrow px-6 py-4 text-right text-navy-900/45">Aksi</th>
                  </tr>
                </thead>

                <tbody class="divide-y divide-navy-900/8">
                  <tr
                    v-for="article in cmsPreview.articles"
                    :key="article.id"
                    class="transition-colors hover:bg-navy-50/50"
                  >
                    <td class="px-6 py-4">
                      <div class="flex items-center gap-4">
                        <img
                          :src="asset(article.image)"
                          :alt="article.title"
                          loading="lazy"
                          class="h-12 w-16 shrink-0 object-cover"
                        />
                        <div class="min-w-0">
                          <p class="truncate text-[14px] font-medium text-navy-900">
                            {{ article.title }}
                          </p>
                          <p class="mt-1 text-[12px] text-navy-900/40">{{ article.id }}</p>
                        </div>
                      </div>
                    </td>

                    <td class="px-4 py-4">
                      <span class="text-[13px] text-navy-900/65">{{ article.category }}</span>
                    </td>

                    <td class="px-4 py-4">
                      <span class="text-[13px] text-navy-900/55">
                        {{ formatDateShort(article.updated) }}
                      </span>
                    </td>

                    <td class="px-4 py-4">
                      <span
                        class="inline-flex items-center gap-2 px-3 py-1.5 text-[12px] font-semibold"
                        :class="
                          article.status === 'Terbit'
                            ? 'bg-sea-500/12 text-sea-700'
                            : 'bg-gold-400/18 text-gold-700'
                        "
                      >
                        <span
                          class="h-1.5 w-1.5 rounded-full"
                          :class="article.status === 'Terbit' ? 'bg-sea-500' : 'bg-gold-500'"
                        />
                        {{ article.status }}
                      </span>
                    </td>

                    <td class="px-6 py-4">
                      <div class="flex items-center justify-end gap-1.5">
                        <button
                          type="button"
                          class="flex h-8 w-8 items-center justify-center text-navy-900/45 transition-colors hover:bg-navy-50 hover:text-navy-900"
                          aria-label="Lihat artikel"
                        >
                          <AppIcon name="eye" :size="16" />
                        </button>
                        <button
                          type="button"
                          class="flex h-8 w-8 items-center justify-center text-navy-900/45 transition-colors hover:bg-navy-50 hover:text-navy-900"
                          aria-label="Ubah artikel"
                        >
                          <AppIcon name="edit" :size="16" />
                        </button>
                        <button
                          type="button"
                          class="flex h-8 w-8 items-center justify-center text-navy-900/45 transition-colors hover:bg-red-50 hover:text-red-600"
                          aria-label="Hapus artikel"
                        >
                          <AppIcon name="trash" :size="16" />
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <!-- Aktivitas -->
          <section class="border border-navy-900/10 bg-white shadow-card">
            <header class="border-b border-navy-900/10 p-6">
              <h2 class="h-display text-[1.25rem] text-navy-900">Aktivitas Terbaru</h2>
              <p class="mt-1.5 text-[13px] text-navy-900/50">Jejak perubahan konten</p>
            </header>

            <ul class="divide-y divide-navy-900/8">
              <li
                v-for="entry in cmsPreview.activity"
                :key="entry.target + entry.time"
                class="flex gap-4 p-6"
              >
                <span
                  class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-50 text-navy-700"
                >
                  <AppIcon name="edit" :size="17" />
                </span>

                <div class="min-w-0">
                  <p class="text-[13.5px] leading-snug text-navy-900/70">
                    <span class="font-semibold text-navy-900">{{ entry.actor }}</span>
                    {{ entry.action }}
                    <span class="font-medium text-navy-900">{{ entry.target }}</span>
                  </p>
                  <p class="mt-1.5 text-[12px] text-navy-900/40">{{ entry.time }}</p>
                </div>
              </li>
            </ul>
          </section>
        </div>

        <!-- ============================================================== -->
        <!--  EDITOR KONTEN                                                  -->
        <!-- ============================================================== -->
        <section class="mt-6 border border-navy-900/10 bg-white shadow-card">
          <header
            class="flex flex-wrap items-center justify-between gap-4 border-b border-navy-900/10 p-6"
          >
            <div>
              <h2 class="h-display text-[1.25rem] text-navy-900">Editor Artikel</h2>
              <p class="mt-1.5 text-[13px] text-navy-900/50">
                Contoh tampilan penyuntingan konten halaman berita
              </p>
            </div>

            <Transition
              enter-active-class="transition-opacity duration-300"
              enter-from-class="opacity-0"
              leave-active-class="transition-opacity duration-300"
              leave-to-class="opacity-0"
            >
              <span
                v-if="saved"
                class="flex items-center gap-2.5 bg-sea-500/12 px-4 py-2.5 text-[13px] font-medium text-sea-700"
              >
                <AppIcon name="check" :size="16" />
                Draf tersimpan (contoh)
              </span>
            </Transition>
          </header>

          <form class="grid gap-8 p-6 lg:grid-cols-12 lg:p-8" @submit.prevent="saveDraft">
            <!-- Kolom utama -->
            <div class="space-y-6 lg:col-span-8">
              <div>
                <label for="cms-title" class="eyebrow block text-navy-900/50">Judul</label>
                <input
                  id="cms-title"
                  v-model="editor.title"
                  type="text"
                  class="mt-3 w-full border border-navy-900/15 px-4 py-3.5 text-[15px] text-navy-900 focus:border-navy-800 focus:outline-none"
                />
              </div>

              <div>
                <label for="cms-slug" class="eyebrow block text-navy-900/50">Slug URL</label>
                <div class="mt-3 flex items-stretch">
                  <span
                    class="flex items-center border border-r-0 border-navy-900/15 bg-navy-50 px-3.5 text-[13px] text-navy-900/45"
                  >
                    /berita/
                  </span>
                  <input
                    id="cms-slug"
                    v-model="editor.slug"
                    type="text"
                    class="w-full border border-navy-900/15 px-4 py-3.5 text-[15px] text-navy-900 focus:border-navy-800 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label for="cms-excerpt" class="eyebrow block text-navy-900/50">
                  Ringkasan
                </label>
                <textarea
                  id="cms-excerpt"
                  v-model="editor.excerpt"
                  rows="3"
                  class="mt-3 w-full resize-y border border-navy-900/15 px-4 py-3.5 text-[15px] leading-relaxed text-navy-900 focus:border-navy-800 focus:outline-none"
                />
              </div>

              <div>
                <label for="cms-body" class="eyebrow block text-navy-900/50">
                  Isi Artikel
                </label>
                <textarea
                  id="cms-body"
                  v-model="editor.body"
                  rows="7"
                  class="mt-3 w-full resize-y border border-navy-900/15 px-4 py-3.5 text-[15px] leading-relaxed text-navy-900 focus:border-navy-800 focus:outline-none"
                />
              </div>
            </div>

            <!-- Kolom samping -->
            <div class="space-y-6 lg:col-span-4">
              <div class="border border-navy-900/10 bg-navy-50 p-6">
                <p class="eyebrow text-navy-900/45">Status Terbit</p>

                <select
                  v-model="editor.status"
                  class="mt-4 w-full border border-navy-900/15 bg-white px-4 py-3 text-[14.5px] text-navy-900 focus:border-navy-800 focus:outline-none"
                >
                  <option>Terbit</option>
                  <option>Draf</option>
                  <option>Dijadwalkan</option>
                </select>

                <p class="eyebrow mt-7 text-navy-900/45">Kategori</p>
                <select
                  v-model="editor.category"
                  class="mt-4 w-full border border-navy-900/15 bg-white px-4 py-3 text-[14.5px] text-navy-900 focus:border-navy-800 focus:outline-none"
                >
                  <option>Operasional</option>
                  <option>Keselamatan</option>
                  <option>Perusahaan</option>
                </select>

                <p class="eyebrow mt-7 text-navy-900/45">Gambar Utama</p>
                <div class="mt-4 border border-dashed border-navy-900/25 bg-white p-4 text-center">
                  <img
                    :src="asset('/assets/img/sts-fender-channel.webp')"
                    alt="Pratinjau gambar utama"
                    class="aspect-[16/10] w-full object-cover"
                  />
                  <button
                    type="button"
                    class="mt-4 w-full border border-navy-900/15 py-2.5 text-[12.5px] font-semibold uppercase tracking-[0.1em] text-navy-900/65 transition-colors hover:border-navy-900/35 hover:text-navy-900"
                  >
                    Ganti Gambar
                  </button>
                </div>
              </div>

              <div class="flex flex-col gap-3">
                <button type="submit" class="btn-navy w-full">
                  <AppIcon name="check" :size="17" />
                  Simpan Perubahan
                </button>
                <button
                  type="button"
                  class="w-full border border-navy-900/15 py-3.5 text-[12.5px] font-semibold uppercase tracking-[0.12em] text-navy-900/65 transition-colors hover:border-navy-900/35 hover:text-navy-900"
                >
                  Simpan sebagai Draf
                </button>
              </div>
            </div>
          </form>
        </section>

        <p class="mt-8 pb-4 text-center text-[12.5px] text-navy-900/40">
          Pratinjau desain panel CMS · {{ company.name }}
        </p>
      </div>
    </div>
  </div>
</template>
