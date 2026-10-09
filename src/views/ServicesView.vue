<script setup>
import AppIcon from '@/components/AppIcon.vue'
import PageHero from '@/components/PageHero.vue'
import SectionHeading from '@/components/SectionHeading.vue'
import { coreValues, procedures, services, whatsappLink } from '@/data/site'
import { asset } from '@/utils/asset'
</script>

<template>
  <div>
    <PageHero
      image="/assets/img/hose-manifold-crew.webp"
      eyebrow="Operasi STS Presisi"
      title="Cakupan Layanan Maritim"
      lead="Fasilitas transfer kargo antar-kapal dengan standar keselamatan maritim internasional di perairan strategis Batam."
      :breadcrumb="[{ label: 'Layanan' }]"
    >
      <div class="mt-10">
        <a
          :href="whatsappLink()"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-gold"
        >
          <AppIcon name="whatsapp" :size="17" />
          Hubungi Tim Operasional
        </a>
      </div>
    </PageHero>

    <!-- ================================================================== -->
    <!--  RINCIAN LAYANAN                                                    -->
    <!-- ================================================================== -->
    <section class="bg-white py-24 lg:py-32">
      <div class="container-x">
        <SectionHeading
          eyebrow="Lingkup Pekerjaan"
          title="Tiga Pilar Layanan Kami"
          lead="Setiap layanan dijalankan oleh personel bersertifikat dengan peralatan yang diperiksa sebelum operasi dimulai."
        />

        <div class="mt-20 space-y-20 lg:space-y-28">
          <article
            v-for="(service, i) in services"
            :key="service.slug"
            class="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
          >
            <!-- Citra -->
            <div
              v-reveal
              class="relative overflow-hidden rounded-sm"
              :class="i % 2 === 1 ? 'lg:order-2' : ''"
            >
              <img
                :src="asset(service.image)"
                :alt="service.title"
                loading="lazy"
                class="aspect-[4/3] w-full object-cover"
              />
              <span
                class="h-display absolute right-6 top-6 flex h-16 w-16 items-center justify-center bg-white/95 text-[1.4rem] text-navy-900"
              >
                {{ String(i + 1).padStart(2, '0') }}
              </span>
            </div>

            <!-- Uraian -->
            <div v-reveal="120" :class="i % 2 === 1 ? 'lg:order-1' : ''">
              <div class="flex items-center gap-4">
                <span
                  class="flex h-12 w-12 items-center justify-center rounded-full bg-navy-50 text-navy-700"
                >
                  <AppIcon :name="service.icon" :size="23" />
                </span>
                <span class="eyebrow-navy">{{ service.category }}</span>
              </div>

              <h3 class="h-display mt-6 text-[1.75rem] leading-tight text-navy-900 lg:text-[2.25rem]">
                {{ service.title }}
              </h3>

              <p class="mt-5 text-pretty text-[16px] leading-relaxed text-navy-900/65">
                {{ service.summary }}
              </p>

              <ul class="mt-8 grid gap-3.5 border-t border-navy-900/10 pt-8 sm:grid-cols-2">
                <li
                  v-for="point in service.points"
                  :key="point"
                  class="flex gap-3 text-[14.5px] leading-snug text-navy-900/70"
                >
                  <AppIcon name="check" :size="16" class="mt-0.5 text-gold-500" />
                  {{ point }}
                </li>
              </ul>

              <a
                :href="whatsappLink(`Saya ingin menanyakan layanan: ${service.title}`)"
                target="_blank"
                rel="noopener noreferrer"
                class="link-underline mt-9 text-gold-600 hover:text-navy-800"
              >
                Tanyakan layanan ini
                <AppIcon name="arrow-right" :size="15" />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ================================================================== -->
    <!--  ALUR PELAKSANAAN                                                   -->
    <!-- ================================================================== -->
    <section class="relative overflow-hidden bg-navy-950 py-24 lg:py-32">
      <div class="pattern-horizon absolute inset-0" aria-hidden="true" />
      <div
        class="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-sea-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div class="container-x relative">
        <SectionHeading
          eyebrow="Prosedur Operasional"
          title="Alur Pelaksanaan Transfer"
          lead="Empat tahap yang kami jalankan secara berurutan dengan pengawasan pada setiap peralihan tahap."
          theme="dark"
          align="center"
        />

        <!-- Garis penghubung antar tahap -->
        <div class="relative mt-20">
          <div
            class="absolute left-0 right-0 top-[38px] hidden h-px bg-gradient-to-r from-transparent via-gold-400/35 to-transparent lg:block"
            aria-hidden="true"
          />

          <div class="grid gap-10 lg:grid-cols-4 lg:gap-7">
            <article
              v-for="(step, i) in procedures"
              :key="step.step"
              v-reveal="i * 130"
              class="group relative"
            >
              <div class="flex items-center gap-4 lg:block">
                <span
                  class="h-display relative z-10 flex h-[76px] w-[76px] items-center justify-center rounded-full border border-gold-400/40 bg-navy-950 text-[1.5rem] text-gold-400 transition-colors duration-500 group-hover:border-gold-400 group-hover:bg-gold-400 group-hover:text-navy-900"
                >
                  {{ step.step }}
                </span>
                <span class="eyebrow text-white/40 lg:hidden">Tahap {{ step.step }}</span>
              </div>

              <h3 class="h-display mt-7 text-[1.3rem] leading-snug text-white">
                {{ step.title }}
              </h3>

              <p class="mt-4 text-[14.5px] leading-relaxed text-white/60">
                {{ step.summary }}
              </p>

              <div class="mt-7 overflow-hidden rounded-sm">
                <img
                  :src="asset(step.image)"
                  :alt="step.title"
                  loading="lazy"
                  class="aspect-[16/10] w-full object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                />
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- ================================================================== -->
    <!--  NILAI UTAMA                                                        -->
    <!-- ================================================================== -->
    <section class="bg-navy-50 py-24 lg:py-32">
      <div class="container-x">
        <SectionHeading
          eyebrow="Nilai Utama"
          title="Keunggulan Operasional Kami"
          align="center"
        />

        <div class="mt-16 grid gap-px overflow-hidden border border-navy-900/10 bg-navy-900/10 lg:grid-cols-3">
          <article
            v-for="(value, i) in coreValues"
            :key="value.title"
            v-reveal="i * 110"
            class="group bg-white p-9 transition-colors duration-500 hover:bg-navy-900 lg:p-12"
          >
            <span
              class="flex h-14 w-14 items-center justify-center rounded-full bg-navy-50 text-navy-700 transition-colors duration-500 group-hover:bg-gold-400 group-hover:text-navy-900"
            >
              <AppIcon :name="value.icon" :size="26" />
            </span>

            <h3
              class="h-display mt-7 text-[1.35rem] leading-snug text-navy-900 transition-colors duration-500 group-hover:text-white"
            >
              {{ value.title }}
            </h3>

            <p
              class="mt-4 text-[14.5px] leading-relaxed text-navy-900/60 transition-colors duration-500 group-hover:text-white/65"
            >
              {{ value.summary }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- ================================================================== -->
    <!--  AJAKAN                                                             -->
    <!-- ================================================================== -->
    <section class="bg-white py-24 lg:py-32">
      <div class="container-x">
        <div class="mx-auto max-w-3xl text-center">
          <div class="flex items-center justify-center gap-4">
            <span class="rule-gold" />
            <span class="eyebrow-navy">Mulai Koordinasi</span>
            <span class="rule-gold" />
          </div>

          <h2 class="h-display mt-8 text-balance text-[1.9rem] leading-tight text-navy-900 lg:text-[2.6rem]">
            Rencanakan Operasi STS Anda Bersama Kami
          </h2>

          <p class="mx-auto mt-6 max-w-2xl text-pretty text-[16.5px] leading-relaxed text-navy-900/65">
            Sampaikan detail kapal, jenis kargo, dan perkiraan jadwal. Tim operasional kami
            akan menyiapkan rencana pelaksanaan beserta kebutuhan peralatannya.
          </p>

          <div class="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              :href="whatsappLink()"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-gold"
            >
              <AppIcon name="whatsapp" :size="17" />
              Konsultasi Operasional
            </a>
            <RouterLink to="/pengalaman" class="btn-outline-navy">
              Lihat Pengalaman
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
