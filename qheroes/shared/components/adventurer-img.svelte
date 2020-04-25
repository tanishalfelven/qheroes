<img {src} {style} />

<script>
    export let color = 0;
    export let id = "Goblin Adventurer";

    $: src = `qheroes/shared/img/adventurer/${id}.png`;
    $: style = `
        width: 100%;
        height: 100%;

        image-rendering: pixelated;

        filter: hue-rotate(${color}deg);`;
</script>