/**
 * Menyusun URL aset dari folder `public/`.
 *
 * Menghormati `base` Vite sehingga demo tetap benar bila di-deploy
 * ke sub-folder, mis. https://contoh.com/demo/
 */
const base = import.meta.env.BASE_URL || '/'

export function asset(path) {
  if (!path) return ''
  if (/^(https?:)?\/\//.test(path)) return path
  return `${base.replace(/\/+$/, '')}/${String(path).replace(/^\/+/, '')}`
}
