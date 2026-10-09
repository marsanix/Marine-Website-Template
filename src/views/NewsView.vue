<script setup>
import { computed, ref } from 'vue'
import AppIcon from '@/components/AppIcon.vue'
import PageHero from '@/components/PageHero.vue'
import { news, newsCategories, whatsappLink } from '@/data/site'
import { asset } from '@/utils/asset'
import { formatDate } from '@/utils/format'

const activeCategory = ref('Semua')

const filtered = computed(() =>
  activeCategory.value === 'Semua'
    ? news
    : news.filter((item) => item.category === activeCategory.value)
)

const [featured, ...rest] = news
const restNews = computed(() => {
  const pool = activeCategory.value === 'Semua'
    ? rest
    : filtered.value.filter((item) => item.slug !== featured.slug)
  return pool
})
</script>

<template>
  <div>
    <PageHero
      image="/assets/img/batam-port-cranes.webp"
      eyebrow="Berita & Wawasan"
      title="Kabar dari Operasional Kami"
      lead="Catatan lapangan, pembaruan prosedur, dan wawasan seputar operasi maritim di perairan Batam."
      :breadcrumb="[{ label: 'Berita' }]"
    />

    <!-- ================================================================== -->
    <!--  SOROTAN                                                            -->
    <!-- ================================================================== -->
    <section class="bg-white py-20 lg:py-28">
      <div class="container-x">
        <RouterLink
          v-reveal
          :to="`/berita/${featured.slug}`"
          class="group grid overflow-hidden border border-navy-900/10 bg-white shadow-card transition-shadow duration-500 hover:shadow-card-lg lg:grid-cols-2"
        >
          <div class="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[420px]">
            <img
              :src="asset(featured.image)"
              :alt="featured.title"
              class="absolute inset-0 h-full w-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.05]"
            />
            <span class="absolute left-5 top-5 bg-gold-400 px-3.5 py-2">
              <span class="eyebrow text-navy-900">Sorotan</span>
            </span>
          </div>

          <div class="flex flex-col justify-center p-9 lg:p-14">
            <div class="flex flex-wrap items-center gap-x-5 gap-y-2 text-[12.5px] text-navy-900/50">
              <span class="eyebrow text-gold-600">{{ featured.category }}</span>
              <span class="h-px w-5 bg-navy-900/20" />
              <span>{{ formatDate(featured.date) }}</span>
            </div>

            <h2
              class="h-display mt-6 text-[1.7rem] leading-tight text-navy-900 transition-colors duration-300 group-hover:text-gold-600 lg:text-[2.2rem]"
            >
              {{ featured.title }}
            </h2>

            <p class="mt-5 text-pretty text-[15.5px] leading-relaxed text-navy-900/60">
              {{ featured.excerpt }}
            </p>

            <span class="link-underline mt-9 text-navy-800 group-hover:text-gold-600">
              Baca selengkapnya
              <AppIcon name="arrow-right" :size="15" />
            </span>
          </div>
        </RouterLink>
      </div>
    </section>

    <!-- ================================================================== -->
    <!--  DAFTAR ARTIKEL                                                     -->
    <!-- ================================================================== -->
    <section class="bg-navy-50 py-20 lg:py-28">
      <div class="container-x">
        <div class="flex flex-wrap items-center justify-between gap-6">
          <div class="flex flex-wrap items-center gap-3">
            <span class="eyebrow mr-2 text-navy-900/40">Kategori</span>

            <button
              v-for="category in newsCategories"
              :key="category"
              type="button"
              class="border px-5 py-2.5 text-[12.5px] font-semibold uppercase tracking-[0.12em] transition-all duration-300"
              :class="
                activeCategory === category
                  ? 'border-navy-900 bg-navy-900 text-white'
                  : 'border-navy-900/15 bg-white/60 text-navy-900/60 hover:border-navy-900/40 hover:text-navy-900'
              "
              @click="activeCategory = category"
            >
              {{ category }}
            </button>
          </div>

          <p class="text-[13.5px] text-navy-900/50">
            Menampilkan {{ restNews.length }} artikel
          </p>
        </div>

        <TransitionGroup
          tag="div"
          class="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          enter-active-class="transition-all duration-500"
          enter-from-class="opacity-0 translate-y-4"
          leave-active-class="absolute opacity-0 transition-all duration-200"
          move-class="transition-transform duration-500"
        >
          <RouterLink
            v-for="(article, i) in restNews"
            :key="article.slug"
            v-reveal="(i % 3) * 90"
            :to="`/berita/${article.slug}`"
            class="card card-hover group flex flex-col overflow-hidden"
          >
            <div class="relative aspect-[16/10] overflow-hidden">
              <img
                :src="asset(article.image)"
                :alt="article.title"
                loading="lazy"
                class="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
              />
              <span class="absolute left-4 top-4 bg-white/95 px-3 py-1.5">
                <span class="eyebrow text-navy-800">{{ article.category }}</span>
              </span>
            </div>

            <div class="flex flex-1 flex-col p-7">
              <p class="text-[12.5px] font-medium uppercase tracking-[0.12em] text-navy-900/40">
                {{ formatDate(article.date) }}
              </p>
              <h2
                class="h-display mt-4 text-[1.2rem] leading-snug text-navy-900 transition-colors duration-300 group-hover:text-gold-600"
              >
                {{ article.title }}
              </h2>
              <p class="mt-4 line-clamp-3 text-[14px] leading-relaxed text-navy-900/60">
                {{ article.excerpt }}
              </p>
              <span class="link-underline mt-auto pt-7 text-gold-600">
                Baca selengkapnya
                <AppIcon name="arrow-right" :size="15" />
              </span>
            </div>
          </RouterLink>
        </TransitionGroup>

        <p
          v-if="!restNews.length"
          class="mt-12 border border-dashed border-navy-900/20 bg-white/50 py-20 text-center text-navy-900/50"
        >
          Belum ada artikel pada kategori ini.
        </p>
      </div>
    </section>

    <!-- ================================================================== -->
    <!--  AJAKAN                                                             -->
    <!-- ================================================================== -->
    <section class="bg-white py-20 lg:py-24">
      <div class="container-x">
        <div
          class="flex flex-col items-center justify-between gap-8 border border-navy-900/10 bg-navy-900 p-10 text-center lg:flex-row lg:p-14 lg:text-left"
        >
          <div>
            <h2 class="h-display text-[1.6rem] leading-tight text-white lg:text-[2rem]">
              Butuh informasi operasional langsung?
            </h2>
            <p class="mt-4 max-w-xl text-[15.5px] leading-relaxed text-white/60">
              Tim operasional kami siaga 24 jam untuk menjawab pertanyaan teknis maupun
              koordinasi jadwal.
            </p>
          </div>

          <a
            :href="whatsappLink()"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-gold shrink-0"
          >
            <AppIcon name="whatsapp" :size="17" />
            Konsultasi Operasional
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
