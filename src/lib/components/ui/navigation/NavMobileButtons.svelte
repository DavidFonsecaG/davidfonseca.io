<script lang="ts">
    import NavMobileBurger from "./NavMobileBurger.svelte";
    import NavMobileButton from "./NavMobileButton.svelte";
    export let open: boolean = false;
    export let scrolled: boolean = false;
</script>

<div class="md:hidden flex gap-1">
    <NavMobileButton {scrolled} />
    <NavMobileBurger
        {open}
        on:click={() => {
        open = !open;
        }}
    />
</div>