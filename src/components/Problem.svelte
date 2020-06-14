<script>
    import {checkAnswer} from "../problems";
    import { bits, activeProblemIndex, tally, num_problems, activeQuiz } from '../stores'
    export let problem
    let displaySummary = false
    let solution
    let submitted = false
    let class_ = ""

    const check = () => {
        if (checkAnswer(solution, problem)) {
            submitted = true
            if ($num_problems === $activeProblemIndex + 1) {
                displaySummary = true
            }
            activeProblemIndex.update(() => $activeProblemIndex + 1)
            tally.update(() => $tally + 1)
        } else {
            class_ = "incorrect"
        }
        solution = null
    }

    const reset = () => {
        activeQuiz.update(() => false)
        bits.update(() => null)
        num_problems.update(() => null)
    }

</script>

{#if displaySummary}
    <div>Congratulations, you've completed {$num_problems} {$bits}-bit problems!</div>
    <div><a on:click={reset}>Go back to home screen.</a></div>
{:else}
    <form on:submit|preventDefault={check} class="{class_} problem">
        <label>
           {problem} =
           <input autofocus type=number style="width: {$bits}em" bind:value={solution}>
        </label>
        <input type=submit style="visibility: hidden">
    </form>
{/if}

<style>
    .problem {
        font-size: 3em;
        display: flex;
        flex-direction: row;
    }
    .incorrect {
        border: dodgerblue;
    }
</style>
