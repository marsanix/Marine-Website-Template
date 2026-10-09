<script setup>
import { computed } from 'vue'
import AppIcon from './AppIcon.vue'
import { company, footerLinks, whatsappLink } from '@/data/site'
import { asset } from '@/utils/asset'

const year = computed(() => new Date().getFullYear())
</script>

<template>
  <footer class="relative overflow-hidden bg-navy-950 text-white">
    <div class="pattern-horizon absolute inset-0" aria-hidden="true" />
    <div
      class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent"
      aria-hidden="true"
    />

    <div class="container-x relative py-16 lg:py-20">
      <div class="grid gap-12 lg:grid-cols-12 lg:gap-10">
        <!-- Identitas -->
        <div class="lg:col-span-5">
          <RouterLink to="/" class="inline-flex items-center gap-4">
            <img
              :src="asset('/assets/img/logo-pop-128.webp')"
              :alt="`Logo ${company.name}`"
              width="128"
              height="131"
              class="h-14 w-14"
            />
            <span class="leading-none">
              <span class="block font-display text-xl font-semibold tracking-wide">
                Pelabuhan Ocean Persada
              </span>
              <span class="eyebrow mt-2 block text-[9.5px] text-gold-400">
                Ship-to-Ship Operations · Batam
              </span>
            </span>
          </RouterLink>

          <p class="mt-7 max-w-md text-[15px] leading-relaxed text-white/60">
            {{ company.tagline }}
          </p>

          <address class="mt-7 not-italic">
            <div class="flex items-start gap-3 text-sm text-white/70">
              <AppIcon name="map-pin" :size="17" class="mt-0.5 text-gold-400" />
              <span>
                {{ company.address }}<br />
                <span class="text-white/45">{{ company.addressNote }}</span>
              </span>
            </div>
          </address>
        </div>

        <!-- Kolom tautan -->
        <div
          v-for="column in footerLinks"
          :key="column.heading"
          class="lg:col-span-2"
        >
          <h3 class="eyebrow text-white/45">{{ column.heading }}</h3>
          <span class="rule-gold mt-4" />
          <ul class="mt-6 space-y-3.5">
            <li v-for="link in column.links" :key="link.label">
              <RouterLink
                :to="link.to"
                class="text-[14px] text-white/65 transition-colors duration-300 hover:text-gold-300"
              >
                {{ link.label }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Kontak langsung -->
        <div class="lg:col-span-3">
          <h3 class="eyebrow text-white/45">Hubungi Operasional</h3>
          <span class="rule-gold mt-4" />

          <ul class="mt-6 space-y-4">
            <li>
              <a
                :href="`tel:${company.phoneRaw}`"
                class="group flex items-center gap-3 text-[14px] text-white/70 transition-colors hover:text-gold-300"
              >
                <AppIcon name="phone" :size="16" class="text-gold-400" />
                {{ company.phoneDisplay }}
              </a>
            </li>
            <li>
              <a
                :href="`mailto:${company.email}`"
                class="flex items-center gap-3 text-[14px] text-white/70 transition-colors hover:text-gold-300"
              >
                <AppIcon name="mail" :size="16" class="text-gold-400" />
                <span class="break-all">{{ company.email }}</span>
              </a>
            </li>
            <li class="flex items-center gap-3 text-[14px] text-white/70">
              <AppIcon name="clock" :size="16" class="text-gold-400" />
              {{ company.hoursShort }}
            </li>
          </ul>

          <a
            :href="whatsappLink()"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-gold mt-8 w-full"
          >
            <AppIcon name="whatsapp" :size="17" />
            Chat WhatsApp
          </a>
        </div>
      </div>
    </div>

    <!-- Batang bawah -->
    <div class="relative border-t border-white/10">
      <div
        class="container-x flex flex-col items-center justify-between gap-4 py-6 sm:flex-row"
      >
        <p class="text-[13px] text-white/45">
          © {{ year }} {{ company.name }}. Seluruh hak dilindungi.
        </p>
        <p class="flex items-center gap-2 text-[13px] text-white/35">
          <AppIcon name="compass" :size="15" />
          Berbasis di Batam, Kepulauan Riau — Indonesia
        </p>
      </div>
    </div>
  </footer>
</template>
