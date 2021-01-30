import { mask } from 'mask-fn'

test('hahah', () => {
  const result = mask('123', '999')
  expect(result).toEqual('123')
})
