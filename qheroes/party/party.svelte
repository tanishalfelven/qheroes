<link rel="stylesheet" href="./party.css">

<div class="{css.header}">
    PARTY ({$party.size} / {PARTY_MAX})
</div>

<div class="{css.party}">
    {#each [ ...$party.values() ] as { name, level, UID } (UID)}
    <button class="{css.adventurer}" on:click="{() => send("VIEWADVENTURER", { UID })}">
        <div class="{css.pic}"/>
        <div class="{css.tag}">
            <div class="{css.level}">{level}</div>
            <div class="{css.name}">{name}</div>
        </div>
    </button>
    {/each}
</div>

<script>
    import party, { PARTY_MAX } from "qheroes/shared/stores/adventurers.js";
    import { send } from "qheroes/shared/stores/statechart.js";
</script>