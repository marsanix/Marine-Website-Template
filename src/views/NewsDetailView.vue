<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import AppIcon from '@/components/AppIcon.vue'
import { news, whatsappLink } from '@/data/site'
import { asset } from '@/utils/asset'
import { formatDate } from '@/utils/format'

const route = useRoute()

const article = computed(() =>
  news.find((item) => item.slug === route.params.slug)
)

const related = computed(() =>
  news.filter((item) => item.slug !== route.params.slug).slice(0, 3)
)
</script>

<template>
  <div v-if="article">
    <!-- ================================================================== -->
    <!--  HERO ARTIKEL                                                       -->
    <!-- ================================================================== -->
    <section class="relative flex min-h-[62vh] items-end overflow-hidden bg-navy-950 pt-32">
      <img
        :src="asset(article.image)"
        :alt="article.title"
        class="absolute inset-0 h-full w-full object-cover"
      />
      <div class="overlay-navy absolute inset-0" aria-hidden="true" />
      <div
        class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent"
        aria-hidden="true"
      />

      <div class="container-x relative pb-24 lg:pb-28">
        <nav class="mb-8 flex flex-wrap items-center gap-3 text-[12px]">
          <RouterLink
            to="/"
            class="font-medium uppercase tracking-[0.14em] text-white/50 transition-colors hover:text-gold-300"
          >
            Beranda
          </RouterLink>
          <span class="text-white/25">/</span>
          <RouterLink
            to="/berita"
            class="font-medium uppercase tracking-[0.14em] text-white/50 transition-colors hover:text-gold-300"
          >
            Berita
          </RouterLink>
          <span class="text-white/25">/</span>
          <span class="font-medium uppercase tracking-[0.14em] text-gold-400">
            {{ article.category }}
          </span>
        </nav>

        <div class="flex flex-wrap items-center gap-x-6 gap-y-3">
          <span class="bg-gold-400 px-3.5 py-2">
            <span class="eyebrow text-navy-900">{{ article.category }}</span>
          </span>
          <span class="flex items-center gap-2 text-[13px] text-white/60">
            <AppIcon name="clock" :size="15" />
            {{ formatDate(article.date) }}
          </span>
          <span class="flex items-center gap-2 text-[13px] text-white/60">
            <AppIcon name="crew" :size="15" />
            {{ article.author }}
          </span>
        </div>

        <h1
          class="h-display mt-7 max-w-4xl text-balance text-[2rem] leading-[1.14] text-white sm:text-[2.6rem] lg:text-[3.2rem]"
        >
          {{ article.title }}
        </h1>
      </div>
    </section>

    <!-- ================================================================== -->
    <!--  ISI ARTIKEL                                                        -->
    <!-- ================================================================== -->
    <section class="bg-white py-20 lg:py-28">
      <div class="container-x">
        <div class="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <article class="lg:col-span-8">
            <p
              class="border-l-2 border-gold-400 pl-7 font-display text-[1.25rem] leading-relaxed text-navy-900 lg:text-[1.4rem]"
            >
              {{ article.excerpt }}
            </p>

            <div class="mt-12 space-y-7">
              <p
                v-for="(paragraph, i) in article.body"
                :key="i"
                class="text-pretty text-[16.5px] leading-[1.85] text-navy-900/75"
              >
                {{ paragraph }}
              </p>
            </div>

            <div class="mt-14 flex flex-wrap items-center justify-between gap-6 border-t border-navy-900/10 pt-9">
              <RouterLink to="/berita" class="link-underline text-navy-800 hover:text-gold-600">
                <AppIcon name="arrow-right" :size="15" class="rotate-180" />
                Kembali ke daftar berita
              </RouterLink>

              <div class="flex items-center gap-3">
                <span class="eyebrow text-navy-900/40">Bagikan</span>
                <a
                  :href="whatsappLink(`Saya membaca artikel: ${article.title}`)"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex h-10 w-10 items-center justify-center border border-navy-900/15 text-navy-800 transition-colors hover:border-navy-900 hover:bg-navy-900 hover:text-white"
                  aria-label="Bagikan melalui WhatsApp"
                >
                  <AppIcon name="whatsapp" :size="17" />
                </a>
                <a
                  :href="`mailto:?subject=${encodeURIComponent(article.title)}`"
                  class="flex h-10 w-10 items-center justify-center border border-navy-900/15 text-navy-800 transition-colors hover:border-navy-900 hover:bg-navy-900 hover:text-white"
                  aria-label="Bagikan melalui email"
                >
                  <AppIcon name="mail" :size="17" />
                </a>
              </div>
            </div>
          </article>

          <!-- Panel samping -->
          <aside class="lg:col-span-4">
            <div class="sticky top-28 space-y-8">
              <div class="border border-navy-900/10 bg-navy-50 p-8">
                <h2 class="h-display text-[1.3rem] text-navy-900">
                  Koordinasikan Operasi Anda
                </h2>
                <p class="mt-4 text-[14.5px] leading-relaxed text-navy-900/60">
                  Tim operasional kami siaga 24 jam untuk membantu perencanaan transfer
                  kargo dan penambatan kapal.
                </p>
                <a
                  :href="whatsappLink()"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn-navy mt-7 w-full"
                >
                  <AppIcon name="whatsapp" :size="17" />
                  Chat WhatsApp
                </a>
              </div>

              <div>
                <h2 class="eyebrow text-navy-900/40">Artikel Lain</h2>
                <span class="rule-gold mt-4" />

                <ul class="mt-6 space-y-5">
                  <li v-for="item in related" :key="item.slug">
                    <RouterLink
                      :to="`/berita/${item.slug}`"
                      class="group flex gap-4"
                    >
                      <img
                        :src="asset(item.image)"
                        :alt="item.title"
                        loading="lazy"
                        class="h-20 w-24 shrink-0 object-cover"
                      />
                      <span class="min-w-0">
                        <span class="block text-[12px] uppercase tracking-[0.1em] text-navy-900/40">
                          {{ formatDate(item.date) }}
                        </span>
                        <span
                          class="mt-2 block text-[14.5px] font-medium leading-snug text-navy-900 transition-colors group-hover:text-gold-600"
                        >
                          {{ item.title }}
                        </span>
                      </span>
                    </RouterLink>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  </div>

  <!-- Slug tidak ditemukan -->
  <section v-else class="flex min-h-screen items-center bg-navy-950 pt-32">
    <div class="container-x text-center">
      <span class="eyebrow-gold">404</span>
      <h1 class="h-display mt-6 text-[2rem] text-white lg:text-[2.75rem]">
        Artikel tidak ditemukan
      </h1>
      <p class="mx-auto mt-5 max-w-md text-white/60">
        Artikel yang Anda cari mungkin sudah dipindahkan atau tidak tersedia lagi.
      </p>
      <RouterLink to="/berita" class="btn-gold mt-9">
        Lihat semua berita
      </RouterLink>
    </div>
  </section>
</template>
