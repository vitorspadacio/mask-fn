export const DIGIT = '9'
export const ALPHA = 'A'
export const ALPHANUM = 'S'

const charIsDigit = (char: string) => char === DIGIT
const charIsAlphabetic = (char: string) => char === ALPHA
const charIsAlphanumeric = (char: string) => char === ALPHANUM

const charMatchDigit = (char: string) => !!char.match(/[0-9]/)
const charMatchAlphabetic = (char: string) => !!char.match(/[a-zA-Z]/)
const charMatchAlphanumeric = (char: string) => !!char.match(/[0-9a-zA-Z]/)

export const charMatchPattern = (patternChar: string, valueChar: string): boolean =>
  charIsDigit(patternChar) && charMatchDigit(valueChar) ||
  charIsAlphabetic(patternChar) && charMatchAlphabetic(valueChar) ||
  charIsAlphanumeric(patternChar) && charMatchAlphanumeric(valueChar)

export const patternCharIsNotMatcher = (char: string): boolean =>
  !(charIsDigit(char)|| charIsAlphabetic(char) || charIsAlphanumeric(char))

export const charMatchAnyPattern = (char: string): boolean =>
  charMatchDigit(char) || charMatchAlphabetic(char) || charMatchAlphanumeric(char)
