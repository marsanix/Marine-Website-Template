<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import AppIcon from './AppIcon.vue'
import { company, navigation, whatsappLink } from '@/data/site'
import { asset } from '@/utils/asset'

const route = useRoute()
const scrolled = ref(false)
const menuOpen = ref(false)

const isSolid = computed(() => scrolled.value || menuOpen.value)

function onScroll() {
  scrolled.value = window.scrollY > 32
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  document.body.style.overflow = ''
})

// Kunci scroll halaman saat drawer mobile terbuka.
watch(menuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

// Tutup drawer setiap kali pindah halaman.
watch(
  () => route.fullPath,
  () => {
    menuOpen.value = false
  }
)

const isActive = (to) =>
  to === '/' ? route.path === '/' : route.path.startsWith(to)
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-500"
    :class="
      isSolid
        ? 'bg-navy-950/95 shadow-[0_10px_40px_-16px_rgba(0,10,31,.8)] backdrop-blur-md'
        : 'bg-gradient-to-b from-navy-950/85 to-transparent'
    "
  >
    <!-- Strip kontak: tampil hanya saat halaman belum discroll -->
    <div
      class="hidden overflow-hidden border-b border-white/10 transition-all duration-500 lg:block"
      :class="scrolled ? 'max-h-0 opacity-0' : 'max-h-12 opacity-100'"
    >
      <div class="container-x flex h-10 items-center justify-between">
        <p class="eyebrow text-white/55">{{ company.hours }}</p>

        <div class="flex items-center gap-7">
          <a
            :href="`tel:${company.phoneRaw}`"
            class="flex items-center gap-2 text-[12px] font-medium text-white/70 transition-colors hover:text-gold-300"
          >
            <AppIcon name="phone" :size="14" />
            {{ company.phoneDisplay }}
          </a>
          <a
            :href="`mailto:${company.email}`"
            class="flex items-center gap-2 text-[12px] font-medium text-white/70 transition-colors hover:text-gold-300"
          >
            <AppIcon name="mail" :size="14" />
            {{ company.email }}
          </a>
        </div>
      </div>
    </div>

    <!-- Bar utama -->
    <div class="container-x">
      <div
        class="flex items-center justify-between transition-all duration-500"
        :class="scrolled ? 'h-[70px]' : 'h-[86px]'"
      >
        <!-- Logo -->
        <RouterLink to="/" class="group flex items-center gap-3.5" aria-label="Beranda">
          <img
            :src="asset('/assets/img/logo-pop-128.webp')"
            :alt="`Logo ${company.name}`"
            width="128"
            height="131"
            class="h-12 w-12 transition-transform duration-500 group-hover:scale-105 lg:h-[52px] lg:w-[52px]"
          />
          <span class="hidden leading-none sm:block">
            <span
              class="block font-display text-[17px] font-semibold tracking-wide text-white lg:text-[19px]"
            >
              Pelabuhan Ocean Persada
            </span>
            <span class="eyebrow mt-1.5 block text-[9.5px] text-gold-400">
              Ship-to-Ship Operations · Batam
            </span>
          </span>
        </RouterLink>

        <!-- Navigasi desktop -->
        <nav class="hidden items-center gap-9 xl:flex">
          <RouterLink
            v-for="item in navigation"
            :key="item.to"
            :to="item.to"
            class="relative py-2 text-[12.5px] font-semibold uppercase tracking-[0.13em] transition-colors duration-300"
            :class="
              isActive(item.to)
                ? 'text-gold-400'
                : 'text-white/75 hover:text-white'
            "
          >
            {{ item.label }}
            <span
              class="absolute -bottom-0.5 left-0 h-px bg-gold-400 transition-all duration-300"
              :class="isActive(item.to) ? 'w-full' : 'w-0'"
            />
          </RouterLink>
        </nav>

        <!-- Aksi -->
        <div class="flex items-center gap-3">
          <a
            :href="whatsappLink()"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden bg-gold-400 px-6 py-3 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-navy-900 transition-all duration-300 hover:bg-gold-300 hover:shadow-gold lg:inline-flex"
          >
            Konsultasi Operasional
          </a>

          <button
            type="button"
            class="inline-flex h-11 w-11 items-center justify-center border border-white/25 text-white transition-colors hover:border-gold-400 hover:text-gold-300 xl:hidden"
            :aria-expanded="menuOpen"
            aria-label="Buka menu navigasi"
            @click="menuOpen = !menuOpen"
          >
            <AppIcon :name="menuOpen ? 'x' : 'menu'" :size="20" />
          </button>
        </div>
      </div>
    </div>

    <!-- Garis emas tipis di dasar navbar -->
    <div
      class="h-px bg-gradient-to-r from-transparent via-gold-400/45 to-transparent transition-opacity duration-500"
      :class="isSolid ? 'opacity-100' : 'opacity-0'"
    />
  </header>

  <!-- Drawer navigasi mobile -->
  <Transition
    enter-active-class="transition-opacity duration-300"
    enter-from-class="opacity-0"
    leave-active-class="transition-opacity duration-200"
    leave-to-class="opacity-0"
  >
    <div v-if="menuOpen" class="fixed inset-0 z-40 bg-navy-950 xl:hidden">
      <div class="pattern-horizon container-x flex h-full flex-col overflow-y-auto pt-28 pb-12">
        <nav class="flex flex-col">
          <RouterLink
            v-for="(item, i) in navigation"
            :key="item.to"
            :to="item.to"
            class="flex items-baseline gap-4 border-b border-white/10 py-5 font-display text-2xl transition-colors duration-300"
            :class="isActive(item.to) ? 'text-gold-400' : 'text-white hover:text-gold-300'"
          >
            <span class="eyebrow w-6 text-white/30">{{ String(i + 1).padStart(2, '0') }}</span>
            {{ item.label }}
          </RouterLink>
        </nav>

        <div class="mt-auto space-y-5 pt-12">
          <a
            :href="whatsappLink()"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-gold w-full"
          >
            Konsultasi Operasional
          </a>

          <div class="space-y-3 border-t border-white/10 pt-6">
            <a
              :href="`tel:${company.phoneRaw}`"
              class="flex items-center gap-3 text-sm text-white/70"
            >
              <AppIcon name="phone" :size="16" class="text-gold-400" />
              {{ company.phoneDisplay }}
            </a>
            <a
              :href="`mailto:${company.email}`"
              class="flex items-center gap-3 text-sm text-white/70"
            >
              <AppIcon name="mail" :size="16" class="text-gold-400" />
              {{ company.email }}
            </a>
            <p class="flex items-start gap-3 text-sm text-white/70">
              <AppIcon name="map-pin" :size="16" class="mt-0.5 text-gold-400" />
              <span>{{ company.address }}<br />{{ company.addressNote }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
