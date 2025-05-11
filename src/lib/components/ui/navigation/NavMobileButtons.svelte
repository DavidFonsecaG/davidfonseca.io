<script lang="ts">
    import NavMobileBurger from "./NavMobileBurger.svelte";
    import NavMobileButton from "./NavMobileButton.svelte";

    export let open: boolean;
    export let scrolled: boolean;
</script>

<div class="md:hidden flex gap-1">
    <NavMobileButton {scrolled} />
    <NavMobileBurger
        bind:open
        {scrolled}
    />
</div>