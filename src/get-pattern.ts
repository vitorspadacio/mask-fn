import { ALPHA, ALPHANUM, DIGIT } from './pattern-matcher'

const removeDecorationRegex = new RegExp(`[^${DIGIT}|${ALPHA}|${ALPHANUM}]`, 'g')

const reduceToShorterPatternMatchingValueSize = (valueSize, actualPattern, pattern) => {
  const patternSize = removePatternDecorations(pattern).length
  const actualPatternSize = removePatternDecorations(actualPattern).length

  const patternSizeIsTheShorterForTheValueSize = patternSize >= valueSize &&
    patternSize < actualPatternSize
  
  const patternSizeEqualsValueSize = patternSize === valueSize

  const shouldSelectPattern = patternSizeIsTheShorterForTheValueSize ||
    patternSizeEqualsValueSize

  return shouldSelectPattern ? pattern : actualPattern
}

export const getPattern = (value: string, patterns: string | string[]): string => {
  if (!Array.isArray(patterns))
    return patterns

  const valueSize = value.length

  return patterns.reduce((actualPattern, pattern) => 
    reduceToShorterPatternMatchingValueSize(valueSize, actualPattern, pattern))
}

export const removePatternDecorations = (pattern: string): string =>
  pattern.replace(removeDecorationRegex, '')
