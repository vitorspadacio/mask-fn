import { ALPHA, ALPHANUM, charMatchPattern, DIGIT, patternCharIsNotMatcher } from '../pattern-matcher'

describe('PatternMatcher', () => {
  describe('charMatchPattern', () => {
    const cases = [
      [DIGIT, '1', true],
      [DIGIT, '2', true],
      [DIGIT, '3', true],
      [DIGIT, '4', true],
      [DIGIT, '5', true],
      [DIGIT, '6', true],
      [DIGIT, '7', true],
      [DIGIT, '8', true],
      [DIGIT, '9', true],
      [DIGIT, '0', true],
      [DIGIT, 'A', false],
      [DIGIT, 'z', false],
      [ALPHA, 'a', true],
      [ALPHA, 'B', true],
      [ALPHA, 'O', true],
      [ALPHA, 'g', true],
      [ALPHA, '@', false],
      [ALPHA, '{', false],
      [ALPHA, '1', false],
      [ALPHANUM, '1', true],
      [ALPHANUM, '2', true],
      [ALPHANUM, '3', true],
      [ALPHANUM, '4', true],
      [ALPHANUM, '5', true],
      [ALPHANUM, '6', true],
      [ALPHANUM, '7', true],
      [ALPHANUM, '8', true],
      [ALPHANUM, '9', true],
      [ALPHANUM, '0', true],
      [ALPHANUM, 'A', true],
      [ALPHANUM, 'z', true],
      [ALPHANUM, 'a', true],
      [ALPHANUM, 'B', true],
      [ALPHANUM, 'O', true],
      [ALPHANUM, 'g', true],
      [ALPHANUM, '@', false],
      [ALPHANUM, '{', false],
      [ALPHANUM, '1', true],
    ]
    test.each(cases)('when pattern char (%p) and value char (%p) were tested should return (%p)',
    (patternChar: string, valueChar: string, expectedResult: boolean) => {
      const result = charMatchPattern(patternChar, valueChar)
      expect(result).toEqual(expectedResult)
    })
  })

  describe('patternCharIsNotMatcher', () => {
    const cases = [
      ['A', false],
      ['9', false],
      ['S', false],
      ['1', true],
      ['-', true],
      ['x', true],
      ['@', true],
      ['/', true],
    ]
    test.each(cases)('when char (%p) is tested, should return (%p) when is not a matcher char',
    (char: string, expectedResult: boolean) => {
      const result = patternCharIsNotMatcher(char)
      expect(result).toEqual(expectedResult)
    })
  })
})

