<script lang="ts">
  	import Button from "../Button.svelte";
    import NavTextLink from "./NavTextLink.svelte";
    export let scrolled: boolean = false;
</script>

<ul class="grid gap-3 grid-cols-2 inline-flex items-center" class:menu-bg={scrolled}>
	<NavTextLink {scrolled} to="/contact" title="Help"/>
</ul>