/**
 * Direktif v-reveal — memunculkan elemen dengan halus saat masuk viewport.
 *
 * Dipakai sebagai direktif (bukan komponen pembungkus) agar tidak menambah
 * elemen DOM, sehingga tata letak grid/flex tetap utuh.
 *
 *   <div v-reveal>...</div>
 *   <div v-reveal="150">...</div>          // tunda 150 ms (efek berurutan)
 *   <div v-reveal="{ delay: 300 }">...</div>
 */

let observer = null

function getObserver() {
  if (observer || typeof IntersectionObserver === 'undefined') return observer

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    },
    { threshold: 0.1, rootMargin: '0px 0px -6% 0px' }
  )

  return observer
}

function resolveDelay(value) {
  if (typeof value === 'number') return value
  if (value && typeof value.delay === 'number') return value.delay
  return 0
}

export default {
  mounted(el, binding) {
    const io = getObserver()

    // Tanpa dukungan IntersectionObserver, tampilkan langsung.
    if (!io) {
      el.classList.add('reveal', 'is-visible')
      return
    }

    el.classList.add('reveal')

    const delay = resolveDelay(binding.value)
    if (delay > 0) el.style.transitionDelay = `${delay}ms`

    io.observe(el)
  },

  unmounted(el) {
    observer?.unobserve(el)
  },
}
