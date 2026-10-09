<script setup>
import { computed, ref } from 'vue'
import AppIcon from '@/components/AppIcon.vue'
import PageHero from '@/components/PageHero.vue'
import { operationCategories, operations, whatsappLink } from '@/data/site'
import { asset } from '@/utils/asset'

const activeCategory = ref('Semua')

const filtered = computed(() =>
  activeCategory.value === 'Semua'
    ? operations
    : operations.filter((item) => item.category === activeCategory.value)
)
</script>

<template>
  <div>
    <PageHero
      image="/assets/img/barge-crew-operation.webp"
      eyebrow="Pengalaman Operasi"
      title="Jejak Operasi di Perairan Batam"
      lead="Setiap operasi yang kami tangani dijalankan dengan pengawasan berlapis, mulai dari persiapan peralatan hingga pelepasan tambat."
      :breadcrumb="[{ label: 'Pengalaman' }]"
    />

    <!-- ================================================================== -->
    <!--  DAFTAR OPERASI                                                     -->
    <!-- ================================================================== -->
    <section class="bg-white py-20 lg:py-28">
      <div class="container-x">
        <!-- Penyaring kategori -->
        <div class="flex flex-wrap items-center gap-3">
          <span class="eyebrow mr-2 text-navy-900/40">Saring</span>

          <button
            v-for="category in operationCategories"
            :key="category"
            type="button"
            class="border px-5 py-2.5 text-[12.5px] font-semibold uppercase tracking-[0.12em] transition-all duration-300"
            :class="
              activeCategory === category
                ? 'border-navy-900 bg-navy-900 text-white'
                : 'border-navy-900/15 text-navy-900/60 hover:border-navy-900/40 hover:text-navy-900'
            "
            @click="activeCategory = category"
          >
            {{ category }}
          </button>
        </div>

        <!-- Kisi operasi -->
        <TransitionGroup
          tag="div"
          class="mt-14 grid gap-8 md:grid-cols-2"
          enter-active-class="transition-all duration-500"
          enter-from-class="opacity-0 translate-y-4"
          leave-active-class="absolute opacity-0 transition-all duration-200"
          move-class="transition-transform duration-500"
        >
          <article
            v-for="(op, i) in filtered"
            :key="op.title"
            v-reveal="(i % 2) * 90"
            class="card card-hover group flex flex-col overflow-hidden"
          >
            <div class="relative aspect-[16/10] overflow-hidden">
              <img
                :src="asset(op.image)"
                :alt="op.title"
                loading="lazy"
                class="h-full w-full object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-[1.06]"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent"
                aria-hidden="true"
              />
              <span
                class="absolute bottom-4 left-4 bg-navy-950/75 px-3.5 py-2 backdrop-blur-sm"
              >
                <span class="eyebrow text-gold-400">{{ op.category }}</span>
              </span>
            </div>

            <div class="flex flex-1 flex-col p-8">
              <div class="flex flex-wrap items-center gap-x-5 gap-y-2 text-[12.5px] text-navy-900/50">
                <span class="flex items-center gap-2">
                  <AppIcon name="map-pin" :size="14" class="text-gold-500" />
                  {{ op.location }}
                </span>
                <span class="flex items-center gap-2">
                  <AppIcon name="compass" :size="14" class="text-gold-500" />
                  {{ op.scope }}
                </span>
              </div>

              <h2 class="h-display mt-5 text-[1.4rem] leading-snug text-navy-900">
                {{ op.title }}
              </h2>

              <p class="mt-4 text-[14.5px] leading-relaxed text-navy-900/60">
                {{ op.summary }}
              </p>

              <ul class="mt-auto flex flex-wrap gap-2 pt-7">
                <li
                  v-for="tag in op.highlights"
                  :key="tag"
                  class="border border-navy-900/10 bg-navy-50 px-3 py-1.5 text-[12px] font-medium text-navy-900/65"
                >
                  {{ tag }}
                </li>
              </ul>
            </div>
          </article>
        </TransitionGroup>

        <p
          v-if="!filtered.length"
          class="mt-16 border border-dashed border-navy-900/20 py-20 text-center text-navy-900/50"
        >
          Belum ada operasi pada kategori ini.
        </p>
      </div>
    </section>

    <!-- ================================================================== -->
    <!--  CATATAN PENDAMPING                                                 -->
    <!-- ================================================================== -->
    <section class="bg-navy-50 py-20 lg:py-24">
      <div class="container-x">
        <div class="grid gap-px overflow-hidden border border-navy-900/10 bg-navy-900/10 lg:grid-cols-3">
          <div
            v-for="(item, i) in [
              {
                icon: 'shield',
                title: 'Pengawasan Berlapis',
                text: 'Setiap tahap operasi diawasi oleh kru bersertifikat dengan pembagian peran yang jelas.',
              },
              {
                icon: 'fender',
                title: 'Peralatan Terperiksa',
                text: 'Fender dan selang transfer melewati pemeriksaan sebelum dan sesudah digunakan.',
              },
              {
                icon: 'clock',
                title: 'Waktu Labuh Efisien',
                text: 'Koordinasi awal yang rapi membantu memangkas durasi singgah kapal di perairan.',
              },
            ]"
            :key="item.title"
            v-reveal="i * 100"
            class="bg-white p-9"
          >
            <span class="flex h-12 w-12 items-center justify-center rounded-full bg-navy-50 text-navy-700">
              <AppIcon :name="item.icon" :size="23" />
            </span>
            <h3 class="h-display mt-6 text-[1.25rem] text-navy-900">{{ item.title }}</h3>
            <p class="mt-3.5 text-[14.5px] leading-relaxed text-navy-900/60">{{ item.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ================================================================== -->
    <!--  AJAKAN                                                             -->
    <!-- ================================================================== -->
    <section class="bg-white py-20 lg:py-24">
      <div class="container-x">
        <div
          class="flex flex-col items-center justify-between gap-8 border border-navy-900/10 bg-navy-50 p-10 text-center lg:flex-row lg:p-14 lg:text-left"
        >
          <div>
            <h2 class="h-display text-[1.6rem] leading-tight text-navy-900 lg:text-[2rem]">
              Operasi Anda bisa menjadi yang berikutnya
            </h2>
            <p class="mt-4 max-w-xl text-[15.5px] leading-relaxed text-navy-900/60">
              Sampaikan kebutuhan penambatan atau transfer kargo Anda, kami siap menyusun
              rencana pelaksanaannya.
            </p>
          </div>

          <a
            :href="whatsappLink()"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-navy shrink-0"
          >
            <AppIcon name="whatsapp" :size="17" />
            Konsultasi Operasional
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
