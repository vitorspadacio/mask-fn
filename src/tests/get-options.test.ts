import { getOptions, Options } from '../get-options'

const createOptions = (patterns, placeholder = undefined, noLimit = false) => ({
  patterns,
  placeholder,
  noLimit,
})

describe('GetOptions', () => {
  test('should return options with pattern when string is a parameter', () => {
    const patterns = '123'
    const expectedResult: Options = createOptions(patterns)

    const result = getOptions(patterns)

    expect(result).toEqual(expectedResult)
  })

  test('should return options with pattern array when string array is a parameter', () => {
    const patterns = ['123', '456']
    const expectedResult: Options = createOptions(patterns)

    const result = getOptions(patterns)

    expect(result).toEqual(expectedResult)
  })

  test('should return options with pattern when options object has only pattern string', () => {
    const patterns = ['123', '456']
    const options = { patterns }
    const expectedResult: Options = createOptions(patterns)

    const result = getOptions(options)

    expect(result).toEqual(expectedResult)
  })

  test('should return options with pattern and placeholder when options object has both', () => {
    const patterns = ['123', '456']
    const placeholder = 'x'
    const options = { patterns, placeholder }
    const expectedResult: Options = createOptions(patterns, placeholder)

    const result = getOptions(options)

    expect(result).toEqual(expectedResult)
  })

  test('should return options with pattern, placeholder and noLimit when options object has all of them', () => {
    const patterns = ['123', '456']
    const placeholder = 'x'
    const expectedResult: Options = createOptions(patterns, placeholder, true)

    const result = getOptions(expectedResult)

    expect(result).toEqual(expectedResult)
  })
  
  test('should return options with pattern and noLimit when options object has both', () => {
    const patterns = ['123', '456']
    const noLimit = true
    const options = { patterns, noLimit }
    const expectedResult: Options = createOptions(patterns, undefined, true)

    const result = getOptions(options)

    expect(result).toEqual(expectedResult)
  })
})
