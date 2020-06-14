import {derived, writable} from 'svelte/store'
import {generateProblem} from "./problems"
import {getMaxPermutations, MIN_BITS, MAX_BITS, MIN_PROBLEMS, MAX_PROBLEMS, DEFAULT_BITS, DEFAULT_NUM_PROBLEMS} from "./config"

export const bits = writable()
export const num_problems = writable()
export const activeQuiz = writable(false)
export const activeProblemIndex = writable(0)
export const tally = writable(0)
export const problems = writable([])

export const valid = derived([bits, num_problems], ([$bits, $num_problems]) => (
    ($bits || DEFAULT_BITS) <= MAX_BITS
    && ($bits || DEFAULT_BITS) >= MIN_BITS
    && ($num_problems || DEFAULT_NUM_PROBLEMS) >= MIN_PROBLEMS
    && ($num_problems || DEFAULT_NUM_PROBLEMS) <= MAX_PROBLEMS
    && ($num_problems || DEFAULT_NUM_PROBLEMS) <= getMaxPermutations($bits)
))

