/**
 * Calculate the time passed since a given date until today
 * @param startDate - starting date (ISO string or Date object)
 * @returns formatted uptime string, e.g., "21 years, 6 months"
 */
export function calculateAge(startDate: string | Date): string {
  const start = startDate instanceof Date ? startDate : new Date(startDate)
  const now = new Date()

  if (isNaN(start.getTime())) {
    throw new Error("Invalid date provided to calculateAge")
  }

  let years = now.getFullYear() - start.getFullYear()
  let months = now.getMonth() - start.getMonth()
  let days = now.getDate() - start.getDate()

  if (days < 0) {
    months -= 1
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0)
    days += prevMonth.getDate()
  }

  if (months < 0) {
    years -= 1
    months += 12
  }

  const parts: string[] = []
  if (years > 0) parts.push(`${years} year${years > 1 ? "s" : ""}`)
  if (months > 0) parts.push(`${months} month${months > 1 ? "s" : ""}`)
  // Always include days for more precise age
  if (days > 0) parts.push(`${days} day${days > 1 ? "s" : ""}`)

  // If less than a month, show only days
  if (years === 0 && months === 0 && parts.length > 0) {
    return parts[0] // Just the days
  }

  return parts.join(", ")
}
