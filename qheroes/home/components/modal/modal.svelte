<link rel="stylesheet" href="./modal.css">

{#if children.length}
<div
    class="{css.modal}"
    on:click="{hide}"
>
    <div
        class="{css.layout}"
        on:click|stopPropagation
    >
        <button
            class="{css.close}"
            on:click="{hide}"
        >
            ×
        </button>
        <div class="{css.content}">
            {#each children as { component, children, props }}
            <svelte:component this={component}/>
            {/each}
        </div>
    </div>
</div>
{/if}

<script>
    import { send } from "qheroes/shared/stores/statechart.js";

    export let children = [];

    const hide = () => send("NONE");
</script>