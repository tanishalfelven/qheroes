<link rel="stylesheet" href="./nav.css">

<div class="{css.nav}">
    {#if $unlocks.store}
        <button
            class="{css.navbutton}"
            on:click="{() => send("STORE")}"
            data-selected="{$matches("home.store")}"
        >
            STORE
        </button>
    {/if}
    {#if $unlocks.party && $party.size}
        <button
            class="{css.navbutton}"
            on:click="{() => send("PARTY")}"
            data-selected="{$matches("home.party")}"
        >
            PARTY
        </button>
    {/if}
</div>

<script>
    import unlocks from "qheroes/shared/stores/unlocks.js";
    import { send, matches } from "qheroes/shared/stores/statechart.js";
    import party from "qheroes/shared/stores/adventurers.js";
</script>