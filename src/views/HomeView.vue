<script setup>
import AppIcon from '@/components/AppIcon.vue'
import SectionHeading from '@/components/SectionHeading.vue'
import {
  company,
  coreValues,
  equipment,
  news,
  operations,
  services,
  testimonials,
  trustMarkers,
  whatsappLink,
} from '@/data/site'
import { asset } from '@/utils/asset'
import { formatDate } from '@/utils/format'

const latestNews = news.slice(0, 3)
const featuredOperations = operations.slice(0, 3)
</script>

<template>
  <div>
    <!-- ================================================================== -->
    <!--  HERO                                                               -->
    <!-- ================================================================== -->
    <section class="relative flex min-h-[94svh] items-center overflow-hidden bg-navy-950 lg:min-h-screen">
      <img
        :src="asset('/assets/img/hero-sts-transfer.webp')"
        alt="Dua tanker melakukan operasi transfer kargo antar-kapal di laut lepas"
        class="absolute inset-0 h-full w-full animate-slow-pan object-cover"
      />
      <div class="overlay-navy-left absolute inset-0" aria-hidden="true" />
      <div
        class="absolute inset-x-0 top-0 h-52 bg-gradient-to-b from-navy-950/90 to-transparent"
        aria-hidden="true"
      />
      <div
        class="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-navy-950 to-transparent"
        aria-hidden="true"
      />

      <!-- Penanda vertikal di sisi kanan -->
      <div
        class="absolute right-10 top-1/2 hidden -translate-y-1/2 items-center gap-5 xl:flex"
        aria-hidden="true"
      >
        <span class="h-24 w-px bg-gradient-to-b from-transparent via-gold-400/60 to-transparent" />
        <span
          class="eyebrow whitespace-nowrap text-white/40 [writing-mode:vertical-rl]"
        >
          Ship-to-Ship Operations · Batam
        </span>
      </div>

      <div class="container-x relative pb-44 pt-36 lg:pb-52 lg:pt-40">
        <div class="max-w-3xl">
          <div class="flex animate-fade-in items-center gap-4">
            <span class="rule-gold" />
            <span class="eyebrow text-gold-400">{{ company.name }}</span>
          </div>

          <h1
            class="h-display mt-8 animate-fade-up text-balance text-[2.6rem] leading-[1.08] text-white sm:text-[3.5rem] lg:text-[4.5rem]"
          >
            Layanan Ship-to-Ship
            <span class="italic text-gold-400">Terpercaya</span>
            di Batam
          </h1>

          <p
            class="mt-8 max-w-2xl animate-fade-up text-pretty text-[17px] leading-relaxed text-white/70 lg:text-[18.5px]"
            style="animation-delay: 0.12s"
          >
            Memfasilitasi transfer kargo antar-kapal secara aman dan efisien di perairan
            strategis Batam dengan standar keselamatan maritim internasional.
          </p>

          <div
            class="mt-11 flex animate-fade-up flex-wrap items-center gap-4"
            style="animation-delay: 0.22s"
          >
            <a
              :href="whatsappLink()"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-gold"
            >
              Konsultasi Operasional
              <AppIcon name="arrow-right" :size="17" />
            </a>
            <RouterLink to="/layanan" class="btn-outline-light">
              Lihat Layanan
            </RouterLink>
          </div>
        </div>

        <!-- Penanda gulir -->
        <div class="mt-20 hidden items-center gap-4 lg:flex">
          <span class="relative h-14 w-px overflow-hidden bg-white/20">
            <span class="absolute inset-x-0 top-0 h-5 animate-bounce bg-gold-400" />
          </span>
          <span class="eyebrow text-white/40">Gulir untuk menjelajah</span>
        </div>
      </div>
    </section>

    <!-- ================================================================== -->
    <!--  PENANDA KEPERCAYAAN                                                -->
    <!-- ================================================================== -->
    <section class="relative bg-white">
      <div class="container-x">
        <div
          class="relative z-10 -mt-24 grid gap-px overflow-hidden border-t-2 border-gold-400 bg-navy-900/10 shadow-card-lg sm:grid-cols-2 lg:-mt-28 lg:grid-cols-4"
        >
          <div
            v-for="(marker, i) in trustMarkers"
            :key="marker.label"
            v-reveal="i * 90"
            class="flex items-start gap-4 bg-white p-7 lg:p-8"
          >
            <span
              class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy-50 text-navy-700"
            >
              <AppIcon :name="marker.icon" :size="22" />
            </span>
            <div class="min-w-0">
              <p class="eyebrow text-navy-900/40">{{ marker.label }}</p>
              <p class="mt-2.5 font-display text-[1.7rem] leading-none text-navy-900">
                {{ marker.value }}
              </p>
              <p class="mt-2.5 text-[13.5px] leading-snug text-navy-900/55">
                {{ marker.note }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ================================================================== -->
    <!--  LAYANAN UTAMA                                                      -->
    <!-- ================================================================== -->
    <section class="bg-white py-24 lg:py-32">
      <div class="container-x">
        <div class="flex flex-wrap items-end justify-between gap-10">
          <SectionHeading
            eyebrow="Layanan Utama"
            title="Spesialisasi Operasi Maritim"
            lead="Pengawasan ketat dan eksekusi teknis presisi untuk setiap tahapan transfer kargo di laut lepas."
          />
          <RouterLink
            to="/layanan"
            class="link-underline shrink-0 text-navy-800 hover:text-gold-600"
          >
            Lihat semua layanan
            <AppIcon name="arrow-right" :size="16" />
          </RouterLink>
        </div>

        <div class="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="(service, i) in services"
            :key="service.slug"
            v-reveal="i * 110"
            class="card card-hover group flex flex-col overflow-hidden"
          >
            <div class="relative aspect-[4/3] overflow-hidden">
              <img
                :src="asset(service.image)"
                :alt="service.title"
                loading="lazy"
                class="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/15 to-transparent"
                aria-hidden="true"
              />
              <span
                class="absolute bottom-4 left-4 bg-navy-950/75 px-3.5 py-2 backdrop-blur-sm"
              >
                <span class="eyebrow text-gold-400">{{ service.category }}</span>
              </span>
            </div>

            <div class="flex flex-1 flex-col p-7 lg:p-8">
              <h3 class="h-display text-[1.4rem] text-navy-900">
                {{ service.title }}
              </h3>
              <p class="mt-4 text-[14.5px] leading-relaxed text-navy-900/60">
                {{ service.summary }}
              </p>

              <ul class="mt-7 space-y-3 border-t border-navy-900/10 pt-7">
                <li
                  v-for="point in service.points"
                  :key="point"
                  class="flex gap-3 text-[13.5px] leading-snug text-navy-900/70"
                >
                  <AppIcon name="check" :size="15" class="mt-[3px] text-gold-500" />
                  {{ point }}
                </li>
              </ul>

              <RouterLink
                to="/layanan"
                class="link-underline mt-8 text-gold-600 hover:text-navy-800"
              >
                Selengkapnya
                <AppIcon name="arrow-right" :size="15" />
              </RouterLink>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ================================================================== -->
    <!--  KESIAPAN ARMADA                                                    -->
    <!-- ================================================================== -->
    <section class="relative overflow-hidden bg-navy-50 py-24 lg:py-32">
      <div class="pattern-grid absolute inset-0" aria-hidden="true" />

      <div class="container-x relative">
        <SectionHeading
          eyebrow="Kesiapan Armada"
          title="Standar Operasional & Peralatan STS"
          align="center"
        />

        <div class="mt-16 space-y-8 lg:space-y-10">
          <article
            v-for="(item, i) in equipment"
            :key="item.title"
            v-reveal
            class="grid overflow-hidden bg-white shadow-card lg:grid-cols-2"
          >
            <div
              class="relative aspect-[16/11] lg:aspect-auto lg:min-h-[400px]"
              :class="i % 2 === 1 ? 'lg:order-2' : ''"
            >
              <img
                :src="asset(item.image)"
                :alt="item.title"
                loading="lazy"
                class="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div
              class="flex flex-col justify-center p-9 lg:p-14"
              :class="i % 2 === 1 ? 'lg:order-1' : ''"
            >
              <div class="flex items-center gap-4">
                <span class="flex h-12 w-12 items-center justify-center rounded-full bg-navy-50 text-navy-700">
                  <AppIcon :name="item.icon" :size="23" />
                </span>
                <span class="eyebrow-navy">{{ item.eyebrow }}</span>
              </div>

              <h3 class="h-display mt-6 text-[1.65rem] leading-tight text-navy-900 lg:text-[2.1rem]">
                {{ item.title }}
              </h3>
              <p class="mt-5 text-pretty text-[15.5px] leading-relaxed text-navy-900/65">
                {{ item.summary }}
              </p>

              <RouterLink
                to="/pengalaman"
                class="link-underline mt-9 text-navy-800 hover:text-gold-600"
              >
                Lihat penerapannya
                <AppIcon name="arrow-up-right" :size="15" />
              </RouterLink>
            </div>
          </article>
        </div>

        <!-- Nilai utama -->
        <div class="mt-16 grid gap-px overflow-hidden border border-navy-900/10 bg-navy-900/10 lg:grid-cols-3">
          <div
            v-for="(value, i) in coreValues"
            :key="value.title"
            v-reveal="i * 100"
            class="group bg-white p-8 transition-colors duration-500 hover:bg-navy-900 lg:p-10"
          >
            <AppIcon
              :name="value.icon"
              :size="30"
              class="text-gold-500 transition-colors duration-500 group-hover:text-gold-400"
            />
            <h3
              class="h-display mt-6 text-[1.3rem] text-navy-900 transition-colors duration-500 group-hover:text-white"
            >
              {{ value.title }}
            </h3>
            <p
              class="mt-4 text-[14.5px] leading-relaxed text-navy-900/60 transition-colors duration-500 group-hover:text-white/65"
            >
              {{ value.summary }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ================================================================== -->
    <!--  PENGALAMAN OPERASI                                                 -->
    <!-- ================================================================== -->
    <section class="bg-white py-24 lg:py-32">
      <div class="container-x">
        <div class="flex flex-wrap items-end justify-between gap-10">
          <SectionHeading
            eyebrow="Pengalaman Operasi"
            title="Jejak Operasi di Perairan Batam"
            lead="Rangkaian operasi yang kami tangani dengan pengawasan berlapis dan penerapan prosedur keselamatan maritim."
          />
          <RouterLink
            to="/pengalaman"
            class="link-underline shrink-0 text-navy-800 hover:text-gold-600"
          >
            Semua pengalaman
            <AppIcon name="arrow-right" :size="16" />
          </RouterLink>
        </div>

        <div class="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <RouterLink
            v-for="(op, i) in featuredOperations"
            :key="op.title"
            v-reveal="i * 110"
            to="/pengalaman"
            class="group relative block overflow-hidden rounded-sm"
          >
            <div class="relative aspect-[3/3.6] overflow-hidden">
              <img
                :src="asset(op.image)"
                :alt="op.title"
                loading="lazy"
                class="h-full w-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.07]"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/45 to-navy-950/5"
                aria-hidden="true"
              />
              <div
                class="absolute inset-0 bg-navy-950/0 transition-colors duration-500 group-hover:bg-navy-950/25"
                aria-hidden="true"
              />
            </div>

            <div class="absolute inset-x-0 bottom-0 p-7 lg:p-8">
              <div class="flex items-center gap-3">
                <span class="eyebrow text-gold-400">{{ op.category }}</span>
                <span class="h-px w-6 bg-gold-400/50" />
                <span class="text-[11.5px] font-medium text-white/55">{{ op.location }}</span>
              </div>

              <h3
                class="h-display mt-4 text-[1.3rem] leading-snug text-white lg:text-[1.45rem]"
              >
                {{ op.title }}
              </h3>

              <p
                class="mt-3 max-h-0 overflow-hidden text-[14px] leading-relaxed text-white/70 opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100"
              >
                {{ op.summary }}
              </p>
            </div>

            <span
              class="absolute right-6 top-6 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-gold-400 text-navy-900 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
            >
              <AppIcon name="arrow-up-right" :size="19" />
            </span>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- ================================================================== -->
    <!--  TESTIMONI                                                          -->
    <!-- ================================================================== -->
    <section class="relative overflow-hidden bg-navy-900 py-24 lg:py-32">
      <div class="pattern-horizon absolute inset-0" aria-hidden="true" />
      <div
        class="absolute -right-24 top-0 h-96 w-96 rounded-full bg-gold-400/10 blur-3xl"
        aria-hidden="true"
      />

      <div class="container-x relative">
        <div class="flex flex-wrap items-end justify-between gap-10">
          <SectionHeading
            eyebrow="Mitra Maritim"
            title="Kepercayaan Pengelola Armada"
            theme="dark"
          />
          <div class="flex items-center gap-3">
            <span class="flex h-11 w-11 items-center justify-center rounded-full border border-gold-400/40 text-gold-400">
              <AppIcon name="badge-check" :size="21" />
            </span>
            <p class="max-w-[210px] text-[13px] leading-snug text-white/50">
              Umpan balik mitra operasional kami di jalur pelayaran regional
            </p>
          </div>
        </div>

        <div class="mt-16 grid gap-8 lg:grid-cols-2">
          <figure
            v-for="(item, i) in testimonials"
            :key="item.author"
            v-reveal="i * 130"
            class="relative border border-white/10 bg-white/[0.04] p-9 backdrop-blur-sm lg:p-11"
          >
            <span
              class="block font-display text-[5rem] leading-[0.6] text-gold-400/35"
              aria-hidden="true"
            >
              &ldquo;
            </span>

            <blockquote class="mt-6 text-pretty font-display text-[1.3rem] leading-relaxed text-white/90 lg:text-[1.45rem]">
              {{ item.quote }}
            </blockquote>

            <figcaption class="mt-8 border-t border-white/10 pt-6">
              <p class="text-[14.5px] font-semibold text-white">{{ item.author }}</p>
              <p class="eyebrow mt-2 text-white/40">{{ item.origin }}</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <!-- ================================================================== -->
    <!--  BERITA TERBARU                                                     -->
    <!-- ================================================================== -->
    <section class="bg-white py-24 lg:py-32">
      <div class="container-x">
        <div class="flex flex-wrap items-end justify-between gap-10">
          <SectionHeading
            eyebrow="Berita & Wawasan"
            title="Kabar Terbaru dari Operasional Kami"
          />
          <RouterLink
            to="/berita"
            class="link-underline shrink-0 text-navy-800 hover:text-gold-600"
          >
            Semua berita
            <AppIcon name="arrow-right" :size="16" />
          </RouterLink>
        </div>

        <div class="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <RouterLink
            v-for="(article, i) in latestNews"
            :key="article.slug"
            v-reveal="i * 110"
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
              <h3
                class="h-display mt-4 text-[1.22rem] leading-snug text-navy-900 transition-colors duration-300 group-hover:text-gold-600"
              >
                {{ article.title }}
              </h3>
              <p class="mt-4 line-clamp-3 text-[14px] leading-relaxed text-navy-900/60">
                {{ article.excerpt }}
              </p>
              <span class="link-underline mt-auto pt-7 text-gold-600">
                Baca selengkapnya
                <AppIcon name="arrow-right" :size="15" />
              </span>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- ================================================================== -->
    <!--  AJAKAN AKHIR                                                       -->
    <!-- ================================================================== -->
    <section class="relative overflow-hidden bg-navy-950">
      <img
        :src="asset('/assets/img/batam-port-cranes.webp')"
        alt=""
        loading="lazy"
        class="absolute inset-0 h-full w-full object-cover opacity-30"
        aria-hidden="true"
      />
      <div class="overlay-navy absolute inset-0" aria-hidden="true" />
      <div
        class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent"
        aria-hidden="true"
      />

      <div class="container-x relative py-24 lg:py-32">
        <div class="mx-auto max-w-3xl text-center">
          <div class="flex items-center justify-center gap-4">
            <span class="rule-gold" />
            <span class="eyebrow-gold">Siaga 24/7</span>
            <span class="rule-gold" />
          </div>

          <h2
            class="h-display mt-8 text-balance text-[2rem] leading-tight text-white sm:text-[2.6rem] lg:text-[3.1rem]"
          >
            Siap Mengoordinasikan Operasi STS Anda?
          </h2>

          <p class="mx-auto mt-7 max-w-2xl text-pretty text-[16.5px] leading-relaxed text-white/65">
            Tim operasional siaga 24/7 untuk memastikan kelancaran dan keamanan transfer
            kargo di perairan Batam.
          </p>

          <div class="mt-11 flex flex-wrap items-center justify-center gap-4">
            <a
              :href="whatsappLink()"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-gold"
            >
              <AppIcon name="whatsapp" :size="17" />
              Konsultasi Operasional
            </a>
            <RouterLink to="/kontak" class="btn-outline-light">
              Hubungi Kami
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
