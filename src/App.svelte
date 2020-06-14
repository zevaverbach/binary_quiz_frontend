<script>
    import download from './utils/download.js'
    import { MIN_BITS, MAX_BITS, MIN_PROBLEMS, MAX_PROBLEMS, DEFAULT_BITS, DEFAULT_NUM_PROBLEMS } from './config.js'
    let bits
    let num_problems

</script>

<main style="margin: 2em;">
    <h1>Binary Quiz!</h1>
        <form on:submit|preventDefault={() => download(bits || DEFAULT_BITS, num_problems || DEFAULT_NUM_PROBLEMS)}>
            <div id=inputs style="margin: 2em;">
                <label>
                    <input
                            style="text-align: right; width: 2em; border: none; outline: none"
                            placeholder={DEFAULT_BITS}
                            autofocus
                            type=text bind:value={bits}
                    >
                    Bits
                </label>
                <label>
                    <input
                            style="text-align: right; width: 2em; border: none; outline: none"
                            placeholder={DEFAULT_NUM_PROBLEMS}
                            type=text bind:value={num_problems}
                    >
                    Number of Problems
                </label>
            </div>
            <input type=submit style="cursor:pointer;" value="Download PDFs" >
        </form>
</main>
