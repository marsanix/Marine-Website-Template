<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import AppIcon from './AppIcon.vue'
import { whatsappLink } from '@/data/site'

const visible = ref(false)

function onScroll() {
  visible.value = window.scrollY > 420
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <Transition
    enter-active-class="transition-all duration-500"
    enter-from-class="translate-y-4 opacity-0"
    leave-active-class="transition-all duration-300"
    leave-to-class="translate-y-4 opacity-0"
  >
    <a
      v-if="visible"
      :href="whatsappLink()"
      target="_blank"
      rel="noopener noreferrer"
      class="group fixed bottom-6 right-6 z-40 inline-flex items-center gap-3 rounded-full bg-[#25D366] py-3.5 pl-4 pr-5 text-white shadow-[0_14px_38px_-10px_rgba(37,211,102,.7)] transition-transform duration-300 hover:scale-[1.03] sm:bottom-8 sm:right-8"
      aria-label="Hubungi kami melalui WhatsApp"
    >
      <span class="relative flex h-7 w-7 items-center justify-center">
        <span
          class="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40"
          aria-hidden="true"
        />
        <AppIcon name="whatsapp" :size="24" class="relative" />
      </span>
      <span
        class="max-w-0 overflow-hidden whitespace-nowrap text-[13px] font-semibold uppercase tracking-[0.12em] transition-all duration-500 group-hover:max-w-[190px]"
      >
        Konsultasi Operasional
      </span>
    </a>
  </Transition>
</template>
