import { mask } from '../mask-fn'

describe('Mask', () => {
  const cases = [
    [123, { patterns: '9.99999', placeholder: 'x' }, '1.23xxx'],
    [123, '9.99999', '1.23'],
    [123456789, '+4\\9 99 999 99', '+4\\1 23 456 78'],
    ['40770868000195', '99.999.999/9999-99', '40.770.868/0001-95'],
    ['40770868000195', ['99.999.999/9999-99'], '40.770.868/0001-95'],
    ['40770868000', { patterns: '99.999.999/9999-99', placeholder: '_' }, '40.770.868/000____'],
    ['Person Name 123', { patterns: 'SSSSSS-999999', placeholder: '_' }, 'Person-'],
    [78366801004, ['999.999.999-99', '99.999.999/9999-99'], '783.668.010-04'],
    [40770868000195, ['999.999.999-99', '99.999.999/9999-99'], '40.770.868/0001-95'],
    ['78366801004', ['999.999.999-99', '99.999.999/9999-99', '99999'], '783.668.010-04'],
    ['78366', ['999.999.999-99', '99.999.999/9999-99', '99999'], '78366'],
    ['40770868000195', { patterns: '999.999.999-99', noLimit: true }, '407.708.680-00195'],
    ['TEST123SURPLUS', { patterns: 'AAAA999', noLimit: true }, 'TEST123SURPLUS'],
    ['TESTX123SURPLUS', { patterns: 'AAAA999', noLimit: true }, 'TEST123SURPLUS'],
  ]
  test.each(cases)('when value is (%p) and options (%p) should mask equals (%p)',
    (value: any, options: any, expectedResult: string) => {
      const result = mask(value, options)
      expect(result).toEqual(expectedResult)
    })

  // test('debugging', () => {
  //   const result = mask('TESTX123SURPLUS', { patterns: 'AAAA999', noLimit: true })
  //   expect(result).toEqual('TEST123SURPLUS')
  // })
})
