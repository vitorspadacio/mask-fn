import { getPattern, removePatternDecorations } from '../src/get-pattern'

describe('GetPattern', () => {
  describe('getPattern', () => {
    test('should return pattern if is not an array of patterns', () => {
      const patterns = '99.999'
      const value = '12'
      const expectedResult = patterns

      const result = getPattern(value, patterns)

      expect(result).toEqual(expectedResult)
    })

    const cases = [
      ['12', '99'],
      ['123', '99.9'],
      ['1234', '99.99'],
      ['12345', '99.999'],
      //['123456', '99.999'],
    ]
    test.each(cases)('should get the shorter pattern that fits value size (%p)(%p)',
    (value, expectedPattern) => {
      const patterns = ['99', '99.9', '99.99', '99.999']
      const result = getPattern(value, patterns)
      expect(result).toEqual(expectedPattern)
    })

    test.each(cases)('should get the shorter pattern that fits value size (%p)(%p) in any order',
    (value, expectedPattern) => {
      const patterns = [ '99.99', '99.9', '99.999', '99' ]
      const result = getPattern(value, patterns)
      expect(result).toEqual(expectedPattern)
    })
  })

  describe('removePatternDecorations', () => {
    const cases = [
      ['9999.9999/999-00', '99999999999'],
      ['AAA999-123/SSS', 'AAA999SSS'],
    ]
    test.each(cases)('should remove non pattern matcher char from pattern (%p)(%p)',
    (pattern, expectedResult) => {
      const result = removePatternDecorations(pattern)
      expect(result).toEqual(expectedResult)
    })
  })
})
