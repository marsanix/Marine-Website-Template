<script setup>
import AppIcon from '@/components/AppIcon.vue'
import PageHero from '@/components/PageHero.vue'
import SectionHeading from '@/components/SectionHeading.vue'
import { company, governance, visionMission, whatsappLink } from '@/data/site'
import { asset } from '@/utils/asset'
</script>

<template>
  <div>
    <PageHero
      image="/assets/img/tanker-opensea.webp"
      eyebrow="Profil Perusahaan"
      title="Keandalan Operasional Maritim di Batam"
      :lead="company.description"
      :breadcrumb="[{ label: 'Tentang Kami' }]"
    >
      <div class="mt-10 flex flex-wrap gap-4">
        <RouterLink to="/layanan" class="btn-gold">
          Lihat Layanan
          <AppIcon name="arrow-right" :size="17" />
        </RouterLink>
        <RouterLink to="/kontak" class="btn-outline-light">Hubungi Kami</RouterLink>
      </div>
    </PageHero>

    <!-- ================================================================== -->
    <!--  NARASI PROFIL                                                      -->
    <!-- ================================================================== -->
    <section class="bg-white py-24 lg:py-32">
      <div class="container-x">
        <div class="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div class="lg:col-span-5">
            <div class="flex items-center gap-4">
              <span class="rule-gold" />
              <span class="eyebrow-navy">Tentang Kami</span>
            </div>

            <h2 class="h-display mt-7 text-[1.9rem] leading-tight text-navy-900 lg:text-[2.5rem]">
              Penyedia Layanan Maritim Profesional Berbasis di Batam
            </h2>

            <p class="mt-7 text-pretty text-[16px] leading-relaxed text-navy-900/65">
              Perairan Batam berada di jalur pelayaran yang menghubungkan kawasan industri
              regional dengan pasar internasional. Posisi ini menuntut penyedia layanan
              maritim yang mampu bekerja presisi, aman, dan tepat waktu.
            </p>

            <p class="mt-5 text-pretty text-[16px] leading-relaxed text-navy-900/65">
              Kami memfasilitasi transfer kargo antar-kapal dengan pengawasan berlapis
              mulai dari tahap pendekatan kapal, pemasangan fender, koneksi selang
              transfer, hingga pelepasan tambat.
            </p>

            <dl class="mt-10 grid gap-px overflow-hidden border border-navy-900/10 bg-navy-900/10 sm:grid-cols-2">
              <div class="bg-white p-6">
                <dt class="eyebrow text-navy-900/40">Kantor</dt>
                <dd class="mt-3 text-[15px] font-medium leading-snug text-navy-900">
                  {{ company.address }}<br />
                  <span class="text-navy-900/55">{{ company.addressNote }}</span>
                </dd>
              </div>
              <div class="bg-white p-6">
                <dt class="eyebrow text-navy-900/40">Operasional</dt>
                <dd class="mt-3 text-[15px] font-medium leading-snug text-navy-900">
                  24 Jam Siaga<br />
                  <span class="text-navy-900/55">Senin – Minggu</span>
                </dd>
              </div>
            </dl>
          </div>

          <!-- Galeri citra -->
          <div class="lg:col-span-7">
            <div class="grid grid-cols-2 gap-5">
              <div v-reveal class="col-span-2 overflow-hidden rounded-sm">
                <img
                  :src="asset('/assets/img/sts-fender-channel.webp')"
                  alt="Dua kapal bersandar dengan fender pengaman pada operasi transfer antar-kapal"
                  loading="lazy"
                  class="aspect-[16/10] w-full object-cover"
                />
              </div>
              <div v-reveal="140" class="overflow-hidden rounded-sm">
                <img
                  :src="asset('/assets/img/fenders-hull.webp')"
                  alt="Fender karet pada lambung kapal"
                  loading="lazy"
                  class="aspect-[4/5] w-full object-cover"
                />
              </div>
              <div v-reveal="240" class="overflow-hidden rounded-sm">
                <img
                  :src="asset('/assets/img/crew-deck-briefing.webp')"
                  alt="Kru berdiskusi di dek kapal"
                  loading="lazy"
                  class="aspect-[4/5] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ================================================================== -->
    <!--  STANDAR GLOBAL                                                     -->
    <!-- ================================================================== -->
    <section class="relative overflow-hidden bg-navy-900">
      <div class="grid lg:grid-cols-2">
        <div class="relative min-h-[340px] lg:min-h-[560px]">
          <img
            :src="asset('/assets/img/bridge-officer-log.webp')"
            alt="Perwira di anjungan kapal memeriksa catatan operasional"
            loading="lazy"
            class="absolute inset-0 h-full w-full object-cover"
          />
          <div
            class="absolute inset-0 bg-gradient-to-r from-navy-950/70 to-navy-900/20 lg:bg-gradient-to-l lg:from-navy-900 lg:to-transparent"
            aria-hidden="true"
          />
        </div>

        <div class="pattern-horizon flex flex-col justify-center px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
          <div class="flex items-center gap-4">
            <span class="rule-gold" />
            <span class="eyebrow-gold">Standar Global</span>
          </div>

          <h2 class="h-display mt-7 text-balance text-[1.9rem] leading-tight text-white lg:text-[2.6rem]">
            Kepatuhan Mutlak pada Keselamatan Pelayaran
          </h2>

          <p class="mt-7 text-pretty text-[16.5px] leading-relaxed text-white/70">
            Operasi transfer antar-kapal kami dijalankan dengan presisi penuh dan ketaatan
            ketat pada regulasi maritim internasional untuk melindungi aset dan kru Anda.
          </p>

          <p class="mt-5 text-pretty text-[16.5px] leading-relaxed text-white/70">
            Pengawasan profesional dan manajemen armada yang terintegrasi memastikan setiap
            proses berjalan tanpa hambatan di jalur pelayaran strategis.
          </p>

          <ul class="mt-10 space-y-4 border-t border-white/10 pt-9">
            <li
              v-for="point in [
                'Prosedur operasional standar yang terdokumentasi',
                'Pemeriksaan kelayakan peralatan sebelum operasi',
                'Briefing keselamatan bagi seluruh kru di dek',
                'Pelaporan dan dokumentasi setiap rangkaian operasi',
              ]"
              :key="point"
              class="flex gap-3.5 text-[15px] leading-snug text-white/75"
            >
              <AppIcon name="check" :size="17" class="mt-0.5 text-gold-400" />
              {{ point }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- ================================================================== -->
    <!--  TATA KELOLA                                                        -->
    <!-- ================================================================== -->
    <section class="bg-white py-24 lg:py-32">
      <div class="container-x">
        <SectionHeading
          eyebrow="Tata Kelola"
          title="Kredibilitas dan Integritas Manajerial"
          align="center"
        />

        <div class="mt-16 grid gap-8 lg:grid-cols-3">
          <article
            v-for="(item, i) in governance"
            :key="item.title"
            v-reveal="i * 110"
            class="card card-hover group flex flex-col p-9 lg:p-10"
          >
            <span
              class="flex h-14 w-14 items-center justify-center rounded-full bg-navy-50 text-navy-700 transition-colors duration-500 group-hover:bg-gold-400 group-hover:text-navy-900"
            >
              <AppIcon :name="item.icon" :size="26" />
            </span>

            <p class="eyebrow mt-8 text-gold-600">{{ item.label }}</p>

            <h3 class="h-display mt-4 text-[1.35rem] leading-snug text-navy-900">
              {{ item.title }}
            </h3>

            <p class="mt-4 text-[14.5px] leading-relaxed text-navy-900/60">
              {{ item.summary }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- ================================================================== -->
    <!--  VISI & MISI                                                        -->
    <!-- ================================================================== -->
    <section class="relative overflow-hidden bg-navy-950 py-24 lg:py-32">
      <div class="pattern-horizon absolute inset-0" aria-hidden="true" />

      <div class="container-x relative">
        <div class="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <!-- Visi -->
          <div class="lg:col-span-5">
            <div class="flex items-center gap-4">
              <span class="rule-gold" />
              <span class="eyebrow-gold">Visi</span>
            </div>

            <blockquote
              class="mt-8 font-display text-[1.5rem] leading-relaxed text-white lg:text-[1.85rem]"
            >
              {{ visionMission.vision }}
            </blockquote>

            <div class="mt-12 overflow-hidden rounded-sm">
              <img
                :src="asset('/assets/img/port-tugboat.webp')"
                alt="Kapal kontainer dan kapal tunda di perairan pelabuhan"
                loading="lazy"
                class="aspect-[16/10] w-full object-cover"
              />
            </div>
          </div>

          <!-- Misi -->
          <div class="lg:col-span-7">
            <div class="flex items-center gap-4">
              <span class="rule-gold" />
              <span class="eyebrow-gold">Misi</span>
            </div>

            <ol class="mt-8 divide-y divide-white/10 border-y border-white/10">
              <li
                v-for="(mission, i) in visionMission.missions"
                :key="mission"
                v-reveal="i * 90"
                class="group flex gap-6 py-7 transition-colors duration-500 hover:bg-white/[0.03] lg:gap-8"
              >
                <span
                  class="h-display shrink-0 text-[1.6rem] leading-none text-gold-400/50 transition-colors duration-500 group-hover:text-gold-400"
                >
                  {{ String(i + 1).padStart(2, '0') }}
                </span>
                <p class="text-pretty text-[15.5px] leading-relaxed text-white/70 transition-colors duration-500 group-hover:text-white/90">
                  {{ mission }}
                </p>
              </li>
            </ol>
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
              Ingin mengetahui kesiapan kami untuk operasi Anda?
            </h2>
            <p class="mt-4 max-w-xl text-[15.5px] leading-relaxed text-navy-900/60">
              Sampaikan kebutuhan operasional Anda, tim kami akan menyiapkan rencana
              pelaksanaannya.
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
