<script setup>
import AppIcon from '@/components/AppIcon.vue'
import { asset } from '@/utils/asset'
</script>

<template>
  <section class="relative flex min-h-screen items-center overflow-hidden bg-navy-950">
    <img
      :src="asset('/assets/img/tanker-opensea.webp')"
      alt=""
      class="absolute inset-0 h-full w-full object-cover opacity-25"
      aria-hidden="true"
    />
    <div class="overlay-navy absolute inset-0" aria-hidden="true" />
    <div class="pattern-horizon absolute inset-0" aria-hidden="true" />

    <div class="container-x relative py-32 text-center">
      <p class="h-display text-[5rem] leading-none text-gold-400 lg:text-[7rem]">404</p>

      <div class="mx-auto mt-8 flex max-w-md items-center gap-4">
        <span class="h-px flex-1 bg-white/15" />
        <span class="eyebrow text-white/50">Halaman Tidak Ditemukan</span>
        <span class="h-px flex-1 bg-white/15" />
      </div>

      <h1 class="h-display mx-auto mt-8 max-w-2xl text-balance text-[1.9rem] leading-tight text-white lg:text-[2.6rem]">
        Sepertinya Anda keluar dari jalur pelayaran
      </h1>

      <p class="mx-auto mt-6 max-w-lg text-pretty text-[16px] leading-relaxed text-white/60">
        Halaman yang Anda tuju tidak tersedia. Silakan kembali ke beranda atau langsung
        menuju halaman layanan kami.
      </p>

      <div class="mt-11 flex flex-wrap items-center justify-center gap-4">
        <RouterLink to="/" class="btn-gold">
          <AppIcon name="arrow-right" :size="17" class="rotate-180" />
          Kembali ke Beranda
        </RouterLink>
        <RouterLink to="/layanan" class="btn-outline-light">Lihat Layanan</RouterLink>
      </div>
    </div>
  </section>
</template>
