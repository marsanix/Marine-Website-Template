import { createRouter, createWebHistory } from 'vue-router'
import { company } from '@/data/site'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: { title: 'Beranda' },
  },
  {
    path: '/tentang-kami',
    name: 'about',
    component: () => import('@/views/AboutView.vue'),
    meta: { title: 'Tentang Kami' },
  },
  {
    path: '/layanan',
    name: 'services',
    component: () => import('@/views/ServicesView.vue'),
    meta: { title: 'Layanan' },
  },
  {
    path: '/pengalaman',
    name: 'experience',
    component: () => import('@/views/ExperienceView.vue'),
    meta: { title: 'Pengalaman' },
  },
  {
    path: '/berita',
    name: 'news',
    component: () => import('@/views/NewsView.vue'),
    meta: { title: 'Berita' },
  },
  {
    path: '/berita/:slug',
    name: 'news-detail',
    component: () => import('@/views/NewsDetailView.vue'),
    meta: { title: 'Berita' },
  },
  {
    path: '/kontak',
    name: 'contact',
    component: () => import('@/views/ContactView.vue'),
    meta: { title: 'Kontak' },
  },
  {
    // Pratinjau panel CMS — konsep tampilan admin untuk klien.
    path: '/admin',
    name: 'admin',
    component: () => import('@/views/admin/AdminView.vue'),
    meta: { title: 'Pratinjau CMS', layout: 'bare' },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFoundView.vue'),
    meta: { title: 'Halaman Tidak Ditemukan' },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth', top: 96 }
    return { top: 0 }
  },
})

router.afterEach((to) => {
  const title = to.meta?.title
  document.title = title ? `${title} — ${company.name}` : company.name
})

export default router
