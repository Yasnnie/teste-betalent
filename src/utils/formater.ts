export function formatDateDDMMYY(dateString: string): string {
  const date = new Date(dateString)
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()
  return `${day}/${month}/${year}`
}


export function formatPhone(phone: string): string {
  const match = phone.match(/^(\d{2})(\d{2})(\d{5})(\d{4})$/)
  if (!match) return phone
  const [, country, ddd, first, last] = match
  return `+${country} ${ddd} ${first}-${last}`
}
