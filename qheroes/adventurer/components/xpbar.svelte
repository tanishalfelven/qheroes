<link rel="stylesheet" href="./xpbar.css">

<div class="{css.bar}">
    <div class="{css.fill}" style="--fill: {fill}%" />
</div>

<script>
    export let maxXp = 0;
    export let xp = 0;

    $: fill = xp / maxXp * 100;
</script>