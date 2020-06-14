<script>
    import {checkAnswer} from "../problems";
    import {bits, activeProblemIndex, tally, num_problems, activeQuiz} from '../stores'
    import Tally from "./Tally.svelte";

    export let problem
    let displaySummary = false
    let solution
    let class_ = ""

    const check = () => {
        if (checkAnswer(solution, problem)) {
            tally.update(() => $tally + 1)
            if ($num_problems === $activeProblemIndex + 1) {
                displaySummary = true
            } else {
                activeProblemIndex.update(() => $activeProblemIndex + 1)
            }
        } else {
            class_ = "incorrect"
        }
        solution = null
    }

    const reset = () => {
        activeProblemIndex.update(() => 0)
        tally.update(() => 0)
        activeQuiz.update(() => false)
        bits.update(() => null)
        num_problems.update(() => null)
        displaySummary = false
    }

</script>

{#if displaySummary}
    <div>Congratulations, you've completed {$num_problems} {$bits}-bit problems!</div>
    <a href="#" on:click={reset}>Go back to home screen.</a>
{:else}
    <Tally />
    <form on:submit|preventDefault={check} class="{class_} problem">
        <label>
           {problem} =
           <input autofocus type=number bind:value={solution}>
        </label>
        <input type=submit style="visibility: hidden">
    </form>
{/if}

<style>
    .problem {
        font-size: 3em;
    }

    .problem input[type=number] {
       border: none;
    }
    .incorrect {
        border: dodgerblue;
    }
</style>
