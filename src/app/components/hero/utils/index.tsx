export function getAge(birthDate: Date, referenceDate: Date = new Date()): number {
  const birthYear = birthDate.getFullYear()
  const birthMonth = birthDate.getMonth()
  const birthDay = birthDate.getDate()

  const refYear = referenceDate.getFullYear()
  const refMonth = referenceDate.getMonth()
  const refDay = referenceDate.getDate()

  let age = refYear - birthYear
  const hasHadBirthdayThisYear = refMonth > birthMonth || (refMonth === birthMonth && refDay >= birthDay)
  if (!hasHadBirthdayThisYear) age -= 1
  return age
}


export function getYearsOfExperience(
  startDate: Date,
  extraMonths: number = 0,
  referenceDate: Date = new Date(),
  precision: number = 0
): number {
  const startYear = startDate.getFullYear()
  const startMonth = startDate.getMonth()
  const startDay = startDate.getDate()

  const refYear = referenceDate.getFullYear()
  const refMonth = referenceDate.getMonth()
  const refDay = referenceDate.getDate()

  let months = (refYear - startYear) * 12 + (refMonth - startMonth)
  if (refDay < startDay) months -= 1

  const totalMonths = Math.max(0, months + extraMonths)
  const years = totalMonths / 12
  return parseFloat(years.toFixed(precision))
}
export const myAge: number = getAge(new Date(2000, 0, 5))

// Started Oct 2020 plus 3 extra months prior experience
export const myYOE: number = getYearsOfExperience(new Date(2020, 9, 1), 3)
