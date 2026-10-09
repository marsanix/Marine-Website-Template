<script setup>
import { reactive, ref } from 'vue'
import AppIcon from '@/components/AppIcon.vue'
import PageHero from '@/components/PageHero.vue'
import { company, whatsappLink } from '@/data/site'

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
  consent: false,
})

const submitted = ref(false)

const contactCards = [
  {
    label: 'Alamat Kantor',
    lines: [company.address, company.addressNote],
    icon: 'map-pin',
    href: company.mapsLink,
    action: 'Buka di Google Maps',
  },
  {
    label: 'Telepon',
    lines: [company.phoneDisplay, 'Saluran operasional & WhatsApp'],
    icon: 'phone',
    href: `tel:${company.phoneRaw}`,
    action: 'Hubungi sekarang',
  },
  {
    label: 'Email Resmi',
    lines: [company.email, 'Respons dalam 1×24 jam kerja'],
    icon: 'mail',
    href: `mailto:${company.email}`,
    action: 'Kirim email',
  },
  {
    label: 'Jam Operasional',
    lines: ['Senin – Minggu', '24 Jam Layanan Siaga Maritim'],
    icon: 'clock',
  },
]

function handleSubmit() {
  // Demo statis: belum terhubung ke backend.
  // Saat integrasi Laravel, ganti isi fungsi ini dengan POST ke endpoint /kontak.
  submitted.value = true
}

function resetForm() {
  submitted.value = false
  Object.assign(form, { name: '', email: '', subject: '', message: '', consent: false })
}
</script>

<template>
  <div>
    <PageHero
      image="/assets/img/lifebuoy-safety.webp"
      eyebrow="Hubungi Operasional"
      title="Koordinasi Pelayanan Maritim Batam"
      lead="Tim operasional siaga merespons permohonan koordinasi kapal dan layanan transfer STS sepanjang waktu untuk memastikan kelancaran logistik Anda."
      :breadcrumb="[{ label: 'Kontak' }]"
    />

    <!-- ================================================================== -->
    <!--  KARTU KONTAK                                                       -->
    <!-- ================================================================== -->
    <section class="bg-white py-20 lg:py-24">
      <div class="container-x">
        <div class="grid gap-px overflow-hidden border border-navy-900/10 bg-navy-900/10 sm:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="(card, i) in contactCards"
            :key="card.label"
            v-reveal="i * 90"
            class="group flex flex-col bg-white p-8 transition-colors duration-500 hover:bg-navy-50"
          >
            <span
              class="flex h-12 w-12 items-center justify-center rounded-full bg-navy-50 text-navy-700 transition-colors duration-500 group-hover:bg-gold-400 group-hover:text-navy-900"
            >
              <AppIcon :name="card.icon" :size="22" />
            </span>

            <p class="eyebrow mt-7 text-navy-900/40">{{ card.label }}</p>

            <div class="mt-4 flex-1">
              <p class="text-[15.5px] font-medium leading-snug text-navy-900">
                {{ card.lines[0] }}
              </p>
              <p class="mt-2 break-words text-[13.5px] leading-snug text-navy-900/55">
                {{ card.lines[1] }}
              </p>
            </div>

            <a
              v-if="card.href"
              :href="card.href"
              :target="card.icon === 'map-pin' ? '_blank' : undefined"
              :rel="card.icon === 'map-pin' ? 'noopener noreferrer' : undefined"
              class="link-underline mt-7 text-gold-600 hover:text-navy-900"
            >
              {{ card.action }}
              <AppIcon name="arrow-up-right" :size="15" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- ================================================================== -->
    <!--  FORMULIR + PETA                                                    -->
    <!-- ================================================================== -->
    <section class="bg-navy-50 py-20 lg:py-28">
      <div class="container-x">
        <div class="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <!-- Formulir -->
          <div class="lg:col-span-7">
            <div class="border border-navy-900/10 bg-white p-9 shadow-card lg:p-12">
              <div class="flex items-center gap-4">
                <span class="rule-gold" />
                <span class="eyebrow-navy">Formulir Permintaan</span>
              </div>

              <h2 class="h-display mt-6 text-[1.7rem] leading-tight text-navy-900 lg:text-[2.1rem]">
                Sampaikan Kebutuhan Operasional Anda
              </h2>

              <p class="mt-4 text-[15px] leading-relaxed text-navy-900/60">
                Lengkapi data berikut, tim kami akan menindaklanjuti sesuai jalur koordinasi
                yang diperlukan.
              </p>

              <!-- Panel keberhasilan -->
              <div
                v-if="submitted"
                class="mt-9 border border-gold-400/40 bg-navy-50 p-8 text-center"
              >
                <span
                  class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold-400 text-navy-900"
                >
                  <AppIcon name="check" :size="26" />
                </span>
                <h3 class="h-display mt-6 text-[1.35rem] text-navy-900">
                  Terima kasih, permintaan Anda tercatat
                </h3>
                <p class="mx-auto mt-3 max-w-md text-[14.5px] leading-relaxed text-navy-900/60">
                  Tim operasional kami akan menghubungi Anda melalui email atau telepon yang
                  tercantum.
                </p>
                <button type="button" class="btn-outline-navy mt-7" @click="resetForm">
                  Kirim permintaan lain
                </button>
              </div>

              <!-- Formulir -->
              <form v-else class="mt-9 space-y-6" novalidate @submit.prevent="handleSubmit">
                <div class="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label for="name" class="eyebrow block text-navy-900/50">
                      Nama <span class="text-gold-600">*</span>
                    </label>
                    <input
                      id="name"
                      v-model="form.name"
                      type="text"
                      required
                      autocomplete="name"
                      placeholder="Nama lengkap"
                      class="mt-3 w-full border border-navy-900/15 bg-white px-4 py-3.5 text-[15px] text-navy-900 placeholder:text-navy-900/30 focus:border-navy-800 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label for="email" class="eyebrow block text-navy-900/50">
                      Email <span class="text-gold-600">*</span>
                    </label>
                    <input
                      id="email"
                      v-model="form.email"
                      type="email"
                      required
                      autocomplete="email"
                      placeholder="nama@perusahaan.com"
                      class="mt-3 w-full border border-navy-900/15 bg-white px-4 py-3.5 text-[15px] text-navy-900 placeholder:text-navy-900/30 focus:border-navy-800 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label for="subject" class="eyebrow block text-navy-900/50">
                    Perihal
                  </label>
                  <input
                    id="subject"
                    v-model="form.subject"
                    type="text"
                    placeholder="Contoh: Permintaan koordinasi transfer STS"
                    class="mt-3 w-full border border-navy-900/15 bg-white px-4 py-3.5 text-[15px] text-navy-900 placeholder:text-navy-900/30 focus:border-navy-800 focus:outline-none"
                  />
                </div>

                <div>
                  <label for="message" class="eyebrow block text-navy-900/50">
                    Pesan <span class="text-gold-600">*</span>
                  </label>
                  <textarea
                    id="message"
                    v-model="form.message"
                    rows="5"
                    required
                    placeholder="Jelaskan kebutuhan operasional, jenis kapal, dan perkiraan jadwal."
                    class="mt-3 w-full resize-y border border-navy-900/15 bg-white px-4 py-3.5 text-[15px] leading-relaxed text-navy-900 placeholder:text-navy-900/30 focus:border-navy-800 focus:outline-none"
                  />
                </div>

                <label class="flex cursor-pointer items-start gap-3.5">
                  <input
                    v-model="form.consent"
                    type="checkbox"
                    required
                    class="mt-1 h-4 w-4 shrink-0 accent-navy-800"
                  />
                  <span class="text-[13.5px] leading-relaxed text-navy-900/60">
                    Saya menyetujui penggunaan data pribadi yang saya berikan untuk keperluan
                    menanggapi permintaan ini, sebagaimana dijelaskan dalam
                    <span class="font-medium text-navy-900 underline decoration-gold-400 decoration-2 underline-offset-2">
                      Kebijakan Privasi
                    </span>
                    yang telah saya baca. <span class="text-gold-600">*</span>
                  </span>
                </label>

                <div class="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    type="submit"
                    class="btn-navy"
                    :disabled="!form.consent || !form.name || !form.email || !form.message"
                    :class="
                      !form.consent || !form.name || !form.email || !form.message
                        ? 'cursor-not-allowed opacity-45'
                        : ''
                    "
                  >
                    <AppIcon name="send" :size="17" />
                    Kirim Permintaan
                  </button>

                  <a
                    :href="whatsappLink()"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="link-underline text-gold-600 hover:text-navy-800"
                  >
                    atau langsung via WhatsApp
                    <AppIcon name="arrow-up-right" :size="15" />
                  </a>
                </div>
              </form>
            </div>
          </div>

          <!-- Peta & info tambahan -->
          <div class="lg:col-span-5">
            <div class="h-full border border-navy-900/10 bg-white shadow-card">
              <div class="border-b border-navy-900/10 p-8">
                <div class="flex items-center gap-4">
                  <span class="rule-gold" />
                  <span class="eyebrow-navy">Lokasi Operasional</span>
                </div>
                <h2 class="h-display mt-5 text-[1.4rem] leading-snug text-navy-900">
                  Perairan Batam &amp; Sekitarnya
                </h2>
                <p class="mt-3 text-[14px] leading-relaxed text-navy-900/55">
                  Basis operasi kami berada di Batam, Kepulauan Riau — jalur pelayaran
                  strategis yang menghubungkan kawasan industri regional dengan pasar
                  internasional.
                </p>
              </div>

              <iframe
                :src="company.mapsEmbed"
                title="Peta lokasi kantor PT Pelabuhan Ocean Persada"
                class="h-[320px] w-full border-0 lg:h-[420px]"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                allowfullscreen
              />

              <div class="grid gap-px bg-navy-900/10 sm:grid-cols-2">
                <a
                  :href="company.mapsLink"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="group flex items-center justify-between gap-4 bg-white p-6 transition-colors hover:bg-navy-50"
                >
                  <span class="text-[14.5px] font-medium text-navy-900">
                    Petunjuk arah
                  </span>
                  <AppIcon
                    name="arrow-up-right"
                    :size="18"
                    class="text-gold-600 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>

                <a
                  :href="whatsappLink()"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="group flex items-center justify-between gap-4 bg-white p-6 transition-colors hover:bg-navy-50"
                >
                  <span class="text-[14.5px] font-medium text-navy-900">
                    WhatsApp operasional
                  </span>
                  <AppIcon
                    name="arrow-up-right"
                    :size="18"
                    class="text-gold-600 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ================================================================== -->
    <!--  PITA SIAGA                                                         -->
    <!-- ================================================================== -->
    <section class="relative overflow-hidden bg-navy-950 py-16">
      <div class="pattern-horizon absolute inset-0" aria-hidden="true" />
      <div
        class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent"
        aria-hidden="true"
      />

      <div class="container-x relative">
        <div class="flex flex-col items-center justify-between gap-7 lg:flex-row">
          <div class="flex items-center gap-6">
            <span class="relative flex h-14 w-14 shrink-0 items-center justify-center">
              <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400/30" />
              <span class="relative flex h-14 w-14 items-center justify-center rounded-full bg-gold-400 text-navy-900">
                <AppIcon name="clock" :size="25" />
              </span>
            </span>

            <div class="text-center lg:text-left">
              <p class="h-display text-[1.4rem] text-white lg:text-[1.7rem]">
                Siaga 24 Jam, Tujuh Hari Seminggu
              </p>
              <p class="mt-2 text-[14.5px] text-white/60">
                Permohonan koordinasi operasional ditangani sepanjang waktu.
              </p>
            </div>
          </div>

          <a
            :href="`tel:${company.phoneRaw}`"
            class="btn-gold shrink-0"
          >
            <AppIcon name="phone" :size="17" />
            {{ company.phoneDisplay }}
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
