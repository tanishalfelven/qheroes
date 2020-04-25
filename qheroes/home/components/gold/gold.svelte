<link rel="stylesheet" href="./gold.css">

<div class="{css.goldwidget}">
    <div class="{css.ticks}">
        {#each $gains as { amount, from, source } (from)}
        <div
            class="{css.tick}"
            data-source="{source}"
            style="
                --end-x: {random(-5, 5)}rem;
                --end-y: {random(-5, -1)}rem;
            "
        >
            +{amount}
        </div>
        {/each}
    </div>

    <div class="{css.gold}">
        {$gold} GP
    </div>

    <button class="{css.mine}" on:click={mine}>
        MINE
    </button>
</div>

<script>
    import gold, { mine, gains } from "qheroes/shared/stores/gold.js";
    import random from "qheroes/shared/random.js";
</script>