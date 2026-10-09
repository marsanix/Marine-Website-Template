const MONTHS_ID = [
  'Januari',
  'Februari',
  'Maret',
  'April',
  'Mei',
  'Juni',
  'Juli',
  'Agustus',
  'September',
  'Oktober',
  'November',
  'Desember',
]

/** "2026-09-24" -> "24 September 2026" */
export function formatDate(value) {
  if (!value) return ''
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return value
  return `${date.getDate()} ${MONTHS_ID[date.getMonth()]} ${date.getFullYear()}`
}

/** "2026-09-24" -> "24 Sep 2026" */
export function formatDateShort(value) {
  if (!value) return ''
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return value
  return `${date.getDate()} ${MONTHS_ID[date.getMonth()].slice(0, 3)} ${date.getFullYear()}`
}
