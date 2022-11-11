
export function generateProblems(bits, num_problems) {
    return new Array(num_problems)
        .fill(null)
        .map(function() {
            return generateProblem(bits)
        })
}

export function generateProblem(bits) {
    return Array.from(Array(bits)).map((_, i) => Math.random() >= .5 ? '1' : '0').join('');
} 

export function solveProblem(problem) {
    return parseInt(problem, 2);
}

export function checkAnswer(answer, problem) {
    return solveProblem(problem) === answer
}
