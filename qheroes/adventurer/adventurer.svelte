<link rel="stylesheet" href="./adventurer.css">

<button class="{css.back}" on:click={()=> send("PARTY")}
    >
    ↵ BACK TO PARTY
</button>

<div class="{css.header}">
    {name}
</div>

<div class="{css.pic}">
    <AdventurerImg {id} {color} />
</div>

<div class="{css.tag}">
    LVL {level}
</div>

<div class="{css.job}">
    <div class="{css.id}">{id}</div>
    <div class="{css.rate}">{rate}GP / {interval}s</div>
</div>

<script>
    import party from "qheroes/shared/stores/adventurers.js";
    import { send } from "qheroes/shared/stores/statechart.js";

    import AdventurerImg from "qheroes/shared/components/adventurer-img.svelte";

    export let UID = false;

    $: ({
        name,
        id,
        level,
        color,
        rate,
        interval,
    } = $party.get(UID));
</script>