export interface Options {
  patterns: string | string[],
  placeholder?: string,
  noLimit?: boolean,
}

const isObject = (possibleObject) => 
  Object.prototype.toString.call(possibleObject) === '[object Object]'

const getPattern = (options: string | string[] | Options): string | string[] => (
  isObject(options) ? (options as Options).patterns : options as string | string[]
)

const getPlaceholder = (options: string | string[] | Options): string => (
  isObject(options) ? (options as Options).placeholder : undefined
)

const getNoLimit = (options: string | string[] | Options): boolean => (
  isObject(options) ? (options as Options).noLimit : false
)

export const getOptions = (options: string | string[] | Options): Options => {
  return {
    patterns: getPattern(options),
    placeholder: getPlaceholder(options),
    noLimit: getNoLimit(options) ?? false,
  }
}
