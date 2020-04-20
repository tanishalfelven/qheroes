<link rel="stylesheet" href="./gold.css">

<div class="{css.goldwidget}">
    <div class="{css.gold}">
        {$gold} GP
    </div>
    <button class="{css.mine}" on:click={mine}>
        MINE
    </button>
</div>

<script>
    import gold, { mine } from "qheroes/shared/stores/gold.js";
</script>