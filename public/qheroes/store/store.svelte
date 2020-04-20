<link rel="stylesheet" href="./store.css">

<div class="{css.header}">
    STORE - AVAILABLE
</div>

<div class="{css.offers}">
    {#each offers as { cost, t, id, type }}
    <button
        class="{css.offer}"
        data-available="{$gold >= cost}"
        on:click="{() => purchase({ cost, id, type })}"
    >
        <div class="{css.owned}">[ {$owned[id]} ]</div>
        <div class="{css.title}">{t}</div>
        <div class="{css.cost}">{cost} GP</div>
    </button>
{/each}
</div>

<script>
    import { offers } from "qheroes/shared/data/store.js";
    import { owned } from "qheroes/shared/stores/adventurers.js";
    import gold from "qheroes/shared/stores/gold.js";

    import purchase from "qheroes/shared/purchase.js";
</script>