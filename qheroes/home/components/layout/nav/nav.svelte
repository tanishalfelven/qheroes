<link rel="stylesheet" href="./nav.css">

<div class="{css.nav}">
    {#if $unlocks.store}
        <button
            class="{css.togglestore}"
            on:click={() => send("STORE")}
        >
            STORE
        </button>
    {/if}
</div>

<script>
    import unlocks from "qheroes/shared/stores/unlocks.js";
    import { send } from "qheroes/shared/stores/statechart.js";
</script>