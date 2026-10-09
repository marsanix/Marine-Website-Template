<script setup>
import { RouterLink } from 'vue-router'
import { asset } from '@/utils/asset'

/**
 * Hero halaman dalam — foto full-bleed dengan lapisan navy gelap.
 * Konsisten untuk semua halaman selain Beranda.
 */
defineProps({
  image: { type: String, required: true },
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true },
  lead: { type: String, default: '' },
  breadcrumb: { type: Array, default: () => [] },
})
</script>

<template>
  <!-- pt-32 (mobile) / lg:pt-40 menahan konten tetap di bawah header tetap.
       Header desktop ±132px saat belum di-scroll, jadi pt-32 saja membuat
       remah navigasi nyaris menempel. -->
  <section class="relative flex min-h-[62vh] items-end overflow-hidden bg-navy-950 pt-32 lg:pt-40">
    <!-- Foto latar -->
    <img
      :src="asset(image)"
      alt=""
      class="absolute inset-0 h-full w-full object-cover"
      aria-hidden="true"
    />
    <div class="overlay-navy absolute inset-0" aria-hidden="true" />
    <div
      class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white/95 to-transparent"
      aria-hidden="true"
    />

    <div class="container-x relative pb-24 lg:pb-28">
      <!-- Remah navigasi -->
      <nav v-if="breadcrumb.length" class="mb-8 flex flex-wrap items-center gap-3 text-[12px]">
        <RouterLink
          to="/"
          class="font-medium uppercase tracking-[0.14em] text-white/50 transition-colors hover:text-gold-300"
        >
          Beranda
        </RouterLink>
        <template v-for="(crumb, i) in breadcrumb" :key="crumb.label">
          <span class="text-white/25">/</span>
          <span
            class="font-medium uppercase tracking-[0.14em]"
            :class="i === breadcrumb.length - 1 ? 'text-gold-400' : 'text-white/50'"
          >
            {{ crumb.label }}
          </span>
        </template>
      </nav>

      <div v-if="eyebrow" class="flex items-center gap-4">
        <span class="rule-gold" />
        <span class="eyebrow-gold">{{ eyebrow }}</span>
      </div>

      <h1
        class="h-display mt-6 max-w-4xl text-balance text-[2.35rem] leading-[1.1] text-white sm:text-[3.1rem] lg:text-[4rem]"
      >
        {{ title }}
      </h1>

      <p
        v-if="lead"
        class="mt-7 max-w-2xl text-pretty text-[16.5px] leading-relaxed text-white/70 sm:text-[17.5px]"
      >
        {{ lead }}
      </p>

      <slot />
    </div>
  </section>
</template>
