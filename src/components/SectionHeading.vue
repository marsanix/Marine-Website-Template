<script setup>
import { computed } from 'vue'

/**
 * Judul bagian yang konsisten di seluruh situs.
 * `theme="dark"` dipakai di atas latar navy, `theme="light"` di atas putih.
 */
const props = defineProps({
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true },
  lead: { type: String, default: '' },
  theme: { type: String, default: 'light' }, // 'light' | 'dark'
  align: { type: String, default: 'left' }, // 'left' | 'center'
  size: { type: String, default: 'md' }, // 'md' | 'lg'
})

const isDark = computed(() => props.theme === 'dark')
const centered = computed(() => props.align === 'center')

const titleClass = computed(() =>
  props.size === 'lg'
    ? 'text-[2.1rem] leading-[1.14] sm:text-[2.7rem] lg:text-[3.35rem]'
    : 'text-[1.75rem] leading-[1.2] sm:text-[2.15rem] lg:text-[2.6rem]'
)
</script>

<template>
  <div
    class="max-w-3xl"
    :class="centered ? 'mx-auto text-center' : 'text-left'"
  >
    <div
      v-if="eyebrow"
      class="flex items-center gap-4"
      :class="centered ? 'justify-center' : ''"
    >
      <span class="rule-gold" />
      <span :class="isDark ? 'eyebrow-gold' : 'eyebrow-navy'">{{ eyebrow }}</span>
      <span v-if="centered" class="rule-gold" />
    </div>

    <h2
      class="h-display mt-6 text-balance"
      :class="[titleClass, isDark ? 'text-white' : 'text-navy-900']"
    >
      {{ title }}
    </h2>

    <p
      v-if="lead"
      class="mt-6 text-pretty text-[16.5px] leading-relaxed sm:text-[17px]"
      :class="isDark ? 'text-white/65' : 'text-navy-900/65'"
    >
      {{ lead }}
    </p>
  </div>
</template>
