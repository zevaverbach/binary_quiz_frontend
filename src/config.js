export const MIN_BITS = 3
export const MAX_BITS = 16
export const MIN_PROBLEMS = 2
export const MAX_PROBLEMS = 99
export const MAX_DIGITS_PROBLEMS = MAX_PROBLEMS.toString().length
export const MAX_DIGITS_BITS = MAX_BITS.toString().length
export const DEFAULT_BITS = 4
export const DEFAULT_NUM_PROBLEMS = 10

export const getMaxPermutations = (bits) => {
   return Math.pow(2, bits)
}

