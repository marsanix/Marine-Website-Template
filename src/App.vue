<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import SiteNavbar from '@/components/SiteNavbar.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import WhatsAppButton from '@/components/WhatsAppButton.vue'

const route = useRoute()

/**
 * Halaman dengan `meta.layout === 'bare'` (mis. pratinjau CMS) tampil
 * tanpa navbar dan footer agar terasa seperti panel admin tersendiri.
 */
const isBare = computed(() => route.meta?.layout === 'bare')
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <template v-if="!isBare">
      <SiteNavbar />

      <main class="flex-1">
        <RouterView v-slot="{ Component }">
          <Transition
            mode="out-in"
            enter-active-class="transition-opacity duration-300"
            enter-from-class="opacity-0"
            leave-active-class="transition-opacity duration-150"
            leave-to-class="opacity-0"
          >
            <component :is="Component" />
          </Transition>
        </RouterView>
      </main>

      <SiteFooter />
      <WhatsAppButton />
    </template>

    <RouterView v-else />
  </div>
</template>
