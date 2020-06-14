<script>
    import download from '../utils/download'
    import {
        MIN_BITS, MAX_BITS, MIN_PROBLEMS, MAX_PROBLEMS, DEFAULT_BITS, DEFAULT_NUM_PROBLEMS,
        MAX_DIGITS_BITS, MAX_DIGITS_PROBLEMS
    } from '../config'
    import { bits, num_problems, valid, activeQuiz, problems } from '../stores'
    import {generateProblems} from "../problems";

    const downloadAndClear = () => {
        download($bits || DEFAULT_BITS, $num_problems || DEFAULT_NUM_PROBLEMS)
        bits.update(() => null)
        num_problems.update(() => null)
    }

    const submit = () => {
        if (!$num_problems){
            num_problems.update(() => DEFAULT_NUM_PROBLEMS)
        }
        if (!$bits){
            bits.update(() => DEFAULT_BITS)
        }
        const problems_ = generateProblems($bits, $num_problems)
        problems.update(() => problems_)
        activeQuiz.update(() => true)
    }

</script>

<form on:submit|preventDefault={submit}>
    <div id=inputs style="margin: 2em;">
        <label>
            <input
                    class="inputs"
                    max={MAX_BITS}
                    min={MIN_BITS}
                    placeholder={DEFAULT_BITS}
                    autofocus
                    type=number
                    bind:value={$bits}
            >
            bits
        </label>
        <label>
            <input
                    class="inputs"
                    max={MAX_PROBLEMS}
                    min={MIN_PROBLEMS}
                    placeholder={DEFAULT_NUM_PROBLEMS}
                    type=number
                    bind:value={$num_problems}
            >
            problems
        </label>
    </div>
    <input class="primary-button" disabled={!$valid} type=submit value="Start Quiz [enter]" >
<!--    <input class="button" disabled={!$valid} type=button on:click={downloadAndClear} value="Download PDFs">-->
</form>

<style>
    input[type=number] {
        font-size: 3em;
    }
    input[type=submit] {
        font-size: 1.5em;
    }
</style>
