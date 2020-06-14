<script>
    import download from './utils/download.js'
    import {
        MIN_BITS, MAX_BITS, MIN_PROBLEMS, MAX_PROBLEMS, DEFAULT_BITS, DEFAULT_NUM_PROBLEMS ,
            MAX_DIGITS_BITS, MAX_DIGITS_PROBLEMS
    } from './config.js'
    import { bits, num_problems } from './stores.js'

    $: valid = ($bits || DEFAULT_BITS) <= MAX_BITS
            && ($bits || DEFAULT_BITS) >= MIN_BITS
            && ($num_problems || DEFAULT_NUM_PROBLEMS) >= MIN_PROBLEMS
            && ($num_problems || DEFAULT_NUM_PROBLEMS) <= MAX_PROBLEMS

    const downloadAndClear = () => {
        download($bits || DEFAULT_BITS, $num_problems || DEFAULT_NUM_PROBLEMS)
        bits.update(() => null)
        num_problems.update(() => null)
    }

</script>

<form on:submit|preventDefault={downloadAndClear}>
    <div id=inputs style="margin: 2em;">
        <label>
            <input
                    style="text-align: right; width: 2em; border: none; outline: none"
                    maxlength={MAX_DIGITS_BITS}
                    placeholder={DEFAULT_BITS}
                    autofocus
                    type=text bind:value={$bits}
            >
            Bits
        </label>
        <label>
            <input
                    style="text-align: right; width: 2em; border: none; outline: none"
                    maxlength={MAX_DIGITS_PROBLEMS}
                    placeholder={DEFAULT_NUM_PROBLEMS}
                    type=text bind:value={$num_problems}
            >
            Number of Problems
        </label>
    </div>
    <input disabled={!valid} type=submit style="cursor:pointer;" value="Download PDFs" >
</form>
