<link rel="stylesheet" href="./modal.css">

{#if children.length}
{#each children as { component, children, props } (component.name)}
<div
    class="{css.layout}"
    transition:fly="{{duration: 500, x: -1000, y:-1000, opacity: 0.5, easing: quintOut}}"
>
    <button
        class="{css.close}"
        on:click="{hide}"
    >
        ×
    </button>
    <div
        on:click|stopPropagation
        class="{css.content}"
    >
        <svelte:component this={component} {...props}/>
    </div>
</div>
{/each}
{/if}

<script>
    import { fly } from "svelte/transition";
    import { quintOut } from "svelte/easing";
    import { send } from "qheroes/shared/stores/statechart.js";

    export let children = [];

    const hide = () => send("NONE");
</script>