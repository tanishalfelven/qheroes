<link rel="stylesheet" href="./store.css">

<div class="{css.header}">
    ADVENTURERS
</div>

<div class="{css.offers}">
    {#each offers as { cost, id, type }}
    {#if $unlocks[id]}
    <button
        class="{css.offer}"
        data-available="{$gold >= cost}"
        on:click="{() => purchase({ cost, id, type })}"
    >
        <div class="{css.owned}">[ {$owned[id]} ]</div>
        <div class="{css.title}">{id}</div>
        <div class="{css.cost}">{cost} GP</div>
    </button>
    {/if}
    {/each}
</div>

<script>
    import unlocks from "qheroes/shared/stores/unlocks.js";
    import { offers } from "qheroes/shared/data/store.js";
    import { owned } from "qheroes/shared/stores/adventurers.js";
    import gold from "qheroes/shared/stores/gold.js";

    import purchase from "qheroes/shared/purchase.js";
</script>