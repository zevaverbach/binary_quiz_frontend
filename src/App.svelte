<script>
    import Inputs from "./components/Inputs.svelte";
    import Quiz from "./components/Quiz.svelte";
    import Tally from "./components/Tally.svelte";
    import {activeQuiz} from './stores'
</script>
<main style="margin: 2em;">
    <h1>Binary Quiz!</h1>
    {#if ($activeQuiz)}
        <Tally />
        <Quiz />
    {:else}
        <Inputs />
    {/if}
</main>
