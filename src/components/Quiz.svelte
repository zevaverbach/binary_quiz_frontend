<script>
    import {bits, num_problems, problems, activeProblemIndex} from '../stores.js'
    import Problem from "./Problem.svelte";
</script>

<Problem problem={$problems[$activeProblemIndex]}/>

