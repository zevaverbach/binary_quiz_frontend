<script>
    import {checkAnswer} from "../problems";
    import { problems, bits, activeProblemIndex, tally, num_problems, activeQuiz } from '../stores';
    import Tally from "./Tally.svelte";

    $: problem = $problems[$activeProblemIndex];
    let displaySummary = false;
    let solution;
    let userInput;
    let form;
    let visible = true;

    function shakeAndClear() {
        userInput.style.color = 'red';
        userInput.classList.add('nuhuh');
        setTimeout(function() {
            userInput.classList.remove('nuhuh');
            userInput.value = '';
            userInput.style.color = '#333';
        }, 550)
    }

    function check() {
        if (!checkAnswer(solution, problem)) {
            shakeAndClear();
        } else {
            tally.update(() => $tally + 1);
            if ($num_problems === $activeProblemIndex + 1) {
                displaySummary = true;
            } else {
                visible = false;
                setTimeout(function() {
                    activeProblemIndex.update(() => $activeProblemIndex + 1);
                    solution = null;
                    visible = true;
                }, 550)
            }
        }
    }

    const reset = () => {
        activeQuiz.update(() => false)
        activeProblemIndex.update(() => 0)
        tally.update(() => 0)
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
    {#if visible}
        <form bind:this={form} on:submit|preventDefault={check} class="problem">
            <label>
               {problem} =
               <input bind:this={userInput} autofocus type=number bind:value={solution} id="problem">
            </label>
            <input type=submit style="visibility: hidden">
        </form>
    {/if}
{/if}
