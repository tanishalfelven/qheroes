<link rel="stylesheet" href="./home.css">

<div class="{css.home}">
    <Layout>
        <Gold />
    </Layout>

    <Modal {children} />
</div>

<script>
    import Layout from "./components/layout/layout.svelte";
    import Gold from "./components/gold/gold.svelte";
    import Modal from "./components/modal/modal.svelte";

    export let children = [];
</script>