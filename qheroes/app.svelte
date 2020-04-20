{#each $tree as { component, children, props }}
    <svelte:component this={component} {children} {...props}/>
{/each}

<script>
    import { tree } from "qheroes/shared/stores/statechart.js";
</script>