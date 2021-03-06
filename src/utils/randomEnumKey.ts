export const randomEnumKey = enumeration => {
  const keys = Object.keys(enumeration)
    .filter(k => !(Math.abs(Number.parseInt(k)) + 1))

  const enumKey = keys[Math.floor(Math.random() * keys.length)]
  return enumKey
}
