import {DEFAULT_BITS, DEFAULT_NUM_PROBLEMS} from "./config";

export const generateProblems = (bits, num_problems) => {
    let probs = []
    let counter = 0

    while (counter < (num_problems || DEFAULT_NUM_PROBLEMS)) {
        let problem = generateProblem(bits || DEFAULT_BITS)
        if (!probs.includes(problem)) {
            probs.push(problem)
            counter++
        }
    }

    return probs
}

export const generateProblem = bits => Array.from(Array(bits)).map((_, i) => Math.random() >= .5 ? '1' : '0').join('')

export const solveProblem = problem => parseInt(problem, 2)

export const checkAnswer = (answer, problem) => solveProblem(problem) === answer

