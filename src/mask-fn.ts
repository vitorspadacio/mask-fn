import { getOptions, Options } from './get-options'
import { getPattern, removePatternDecorations } from './get-pattern'
import { charMatchPattern, patternCharIsNotMatcher } from './pattern-matcher'

const addValueSurplus = (
  maskedValue: string,
  noLimit: boolean,
  value: string,
  pattern: string): string => {
  if (!noLimit) return maskedValue

  const patternWithNoDecorations = removePatternDecorations(pattern)
  const valueSurplus = value.toString().slice(patternWithNoDecorations.length)
  return maskedValue + valueSurplus
}

const maskValue = (value: string, pattern: string, placeholder: string): string => {
  const valueArray = value.split('')
  const patternArray = pattern.split('')

  let valueIndex = 0

  return patternArray.map((patternChar) => {
    const valueChar = valueArray[valueIndex]

    if (valueIndex >= valueArray.length)
      if (placeholder) return placeholder
      else return

    if (charMatchPattern(patternChar, valueChar)) {
      valueIndex++
      return valueChar
    }

    if (patternCharIsNotMatcher(patternChar)) {
      if (patternChar === valueChar) valueIndex++
      return patternChar
    }

    valueIndex++
    return
  }).join('')
}

export const mask = (value: string | number, options: string | string[] | Options): string => {
  const { patterns, placeholder, noLimit } = getOptions(options)
  const valueString = value.toString()
  const pattern = getPattern(valueString, patterns)

  const maskedValue = maskValue(valueString, pattern, placeholder)

  return addValueSurplus(maskedValue, noLimit, valueString, pattern)
}
