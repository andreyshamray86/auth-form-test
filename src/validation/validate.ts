export const isEmailValid = (value: string) => {
  const re =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  if (value) {
    return re.test(value) ? true : false
  }
  return undefined
}

export const isShort = (value: string) => {
  return value.length < 2
}
