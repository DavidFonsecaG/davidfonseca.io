<script lang="ts">
  	import Button from "../Button.svelte";
    import NavTextLink from "./NavTextLink.svelte";
    export let scrolled: boolean = false;
</script>

<ul class="inline-flex items-center" class:menu-bg={scrolled}>
	<NavTextLink {scrolled} to="/contact" title="Contact"/>
</ul>