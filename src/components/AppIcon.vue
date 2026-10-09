<script setup>
import { computed } from 'vue'

/**
 * Set ikon SVG inline — tanpa pustaka eksternal agar demo tetap ringan
 * dan tidak bergantung pada koneksi internet.
 *
 * Ikon garis memakai `stroke`, ikon merek memakai `fill`.
 */

const props = defineProps({
  name: { type: String, required: true },
  size: { type: [Number, String], default: 24 },
  stroke: { type: [Number, String], default: 1.5 },
})

const strokeIcons = {
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.2 1.9"/>',

  anchor:
    '<circle cx="12" cy="5" r="2.6"/><path d="M12 7.6V22"/><path d="M5 12H3a9 9 0 0 0 18 0h-2"/><path d="M8.5 10h7"/>',

  shield: '<path d="M12 22s7.5-3.8 7.5-9.5V5.4L12 2.5 4.5 5.4v7.1C4.5 18.2 12 22 12 22Z"/>',

  layers:
    '<path d="m12 2.6 9 4.7-9 4.7-9-4.7 9-4.7Z"/><path d="m3 16.7 9 4.7 9-4.7"/><path d="m3 12 9 4.7L21 12"/>',

  ship: '<path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M19.4 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.9 5.3 2.8 7.8"/><path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"/><path d="M12 10v4"/><path d="M12 2v3"/>',

  'ship-transfer':
    '<path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M19.4 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.9 5.3 2.8 7.8"/><path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"/><path d="M12 10v4"/>',

  fender:
    '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.6"/><path d="m5.6 5.6 3.8 3.8"/><path d="m14.6 9.4 3.8-3.8"/><path d="m14.6 14.6 3.8 3.8"/><path d="m9.4 14.6-3.8 3.8"/>',

  crew: '<path d="M15.5 21v-1.8a3.7 3.7 0 0 0-3.7-3.7H6.2A3.7 3.7 0 0 0 2.5 19.2V21"/><circle cx="9" cy="7.2" r="3.7"/><path d="M21.5 21v-1.8a3.7 3.7 0 0 0-2.8-3.6"/><path d="M15.6 3.7a3.7 3.7 0 0 1 0 7.1"/>',

  'badge-check':
    '<path d="M3.9 8.6a4 4 0 0 1 4.8-4.8 4 4 0 0 1 6.7 0 4 4 0 0 1 4.8 4.8 4 4 0 0 1 0 6.7 4 4 0 0 1-4.8 4.8 4 4 0 0 1-6.7 0 4 4 0 0 1-4.8-4.8 4 4 0 0 1 0-6.7Z"/><path d="m9 12 2 2 4-4"/>',

  grid: '<rect x="3" y="3" width="7.5" height="7.5" rx="1"/><rect x="13.5" y="3" width="7.5" height="7.5" rx="1"/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1"/><rect x="3" y="13.5" width="7.5" height="7.5" rx="1"/>',

  news: '<path d="M4 22h15a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0V8"/><path d="M18 14h-7"/><path d="M15 18h-4"/><path d="M10.5 6.5h6V10h-6z"/>',

  mail: '<rect x="2.5" y="4.5" width="19" height="15" rx="2"/><path d="m21.5 7-8.9 5.6a1.9 1.9 0 0 1-2.1 0L1.5 7"/>',

  briefcase:
    '<rect x="2.5" y="7" width="19" height="13.5" rx="2"/><path d="M16 20.5V5.5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v15"/>',

  sliders:
    '<path d="M21 5h-7"/><path d="M10 5H3"/><path d="M21 12h-9"/><path d="M8 12H3"/><path d="M21 19h-5"/><path d="M12 19H3"/><path d="M14 2.5v5"/><path d="M8 9.5v5"/><path d="M16 16.5v5"/>',

  phone:
    '<path d="M21.5 16.9v2.6a1.8 1.8 0 0 1-2 1.8 17.8 17.8 0 0 1-7.8-2.8 17.5 17.5 0 0 1-5.4-5.4A17.8 17.8 0 0 1 3.5 5.2a1.8 1.8 0 0 1 1.8-2h2.6a1.8 1.8 0 0 1 1.8 1.6c.1 1 .3 1.9.6 2.8a1.8 1.8 0 0 1-.4 1.9l-1.1 1.1a14 14 0 0 0 5.4 5.4l1.1-1.1a1.8 1.8 0 0 1 1.9-.4c.9.3 1.8.5 2.8.6a1.8 1.8 0 0 1 1.5 1.8Z"/>',

  'map-pin':
    '<path d="M20 10.3c0 5.9-8 11.7-8 11.7s-8-5.8-8-11.7a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10.3" r="2.9"/>',

  'arrow-right': '<path d="M4.5 12h15"/><path d="m13 5.5 6.5 6.5-6.5 6.5"/>',

  'arrow-up-right': '<path d="M7 17 17 7"/><path d="M8 7h9v9"/>',

  check: '<path d="m20 6.5-11 11-5-5"/>',

  menu: '<path d="M3 6h18"/><path d="M3 12h18"/><path d="M3 18h18"/>',

  x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',

  'chevron-down': '<path d="m6 9.5 6 6 6-6"/>',

  'chevron-right': '<path d="m9.5 6 6 6-6 6"/>',

  external: '<path d="M15 3h6v6"/><path d="M21 3 10.5 13.5"/><path d="M19 13.5v5.5a1.5 1.5 0 0 1-1.5 1.5H4.5A1.5 1.5 0 0 1 3 19V5.5A1.5 1.5 0 0 1 4.5 4H10"/>',

  compass:
    '<circle cx="12" cy="12" r="9"/><path d="m15.8 8.2-2 5.6-5.6 2 2-5.6 5.6-2Z"/>',

  droplet: '<path d="M12 2.7 6.8 8.9a7.3 7.3 0 1 0 10.4 0Z"/>',

  send: '<path d="M21.5 2.5 11 13"/><path d="m21.5 2.5-6.7 19-3.8-8.5-8.5-3.8 19-6.7Z"/>',

  search: '<circle cx="11" cy="11" r="7"/><path d="m20.5 20.5-4.6-4.6"/>',

  plus: '<path d="M12 5v14"/><path d="M5 12h14"/>',

  edit: '<path d="M11 4.5H4.5A1.5 1.5 0 0 0 3 6v13.5A1.5 1.5 0 0 0 4.5 21H18a1.5 1.5 0 0 0 1.5-1.5V13"/><path d="M17.6 3.4a2.1 2.1 0 0 1 3 3L12 15l-4 1 1-4 8.6-8.6Z"/>',

  trash: '<path d="M3.5 6h17"/><path d="M8.5 6V4.5A1.5 1.5 0 0 1 10 3h4a1.5 1.5 0 0 1 1.5 1.5V6"/><path d="M18.5 6v13.5A1.5 1.5 0 0 1 17 21H7a1.5 1.5 0 0 1-1.5-1.5V6"/><path d="M10 11v5"/><path d="M14 11v5"/>',

  eye: '<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z"/><circle cx="12" cy="12" r="3"/>',

  bell: '<path d="M18 8.5a6 6 0 0 0-12 0c0 6-2.5 7.5-2.5 7.5h17S18 14.5 18 8.5Z"/><path d="M13.7 20a2 2 0 0 1-3.4 0"/>',

  trend: '<path d="m3 16.5 5.5-5.5 4 4 8-8"/><path d="M15.5 7h5v5"/>',
}

const filledIcons = {
  whatsapp:
    '<path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.7.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.42-.08-.12-.28-.2-.57-.34M12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.89 9.89-9.89 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.89-9.88 9.89m8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.69 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.17-3.48-8.42Z"/>',
}

const icons = { ...strokeIcons, ...filledIcons }

const isFilled = computed(() => props.name in filledIcons)
const inner = computed(() => icons[props.name] ?? '')
const box = computed(() => (isFilled.value ? 24 : 24))
</script>

<template>
  <svg
    :width="size"
    :height="size"
    :viewBox="`0 0 ${box} ${box}`"
    :fill="isFilled ? 'currentColor' : 'none'"
    :stroke="isFilled ? 'none' : 'currentColor'"
    :stroke-width="isFilled ? undefined : stroke"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    focusable="false"
    class="shrink-0"
  >
    <!-- Isi ikon berasal dari peta statis di atas (bukan masukan pengguna). -->
    <g v-html="inner" />
  </svg>
</template>
