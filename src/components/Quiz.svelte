<script>
    import {checkAnswer} from "../problems";
    import {problems, bits, activeProblemIndex, tally, num_problems, activeQuiz} from '../stores'
    import Tally from "./Tally.svelte";

    $: problem = $problems[$activeProblemIndex]
    let displaySummary = false
    let solution

    const check = () => {
        if (!checkAnswer(solution, problem)) {
            class_ = "incorrect"
        } else {
            tally.update(() => $tally + 1)
            if ($num_problems === $activeProblemIndex + 1) {
                displaySummary = true
            } else {
                activeProblemIndex.update(() => $activeProblemIndex + 1)
            }
            solution = null
        }
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
    <div style="font-size: 2em;">
        <div>
            Congratulations, you've completed {$num_problems} {$bits}-bit problems!
        </div>
        <div style="margin-top: 1em;">
            <a href="#" on:click={reset}>Go back to the home screen.</a>
        </div>
    </div>
{:else}
    <Tally />
    <form on:submit|preventDefault={check} class="problem">
        <label>
           {problem} =
           <input autofocus type=number bind:value={solution}>
        </label>
        <input type=submit style="visibility: hidden">
    </form>
{/if}

