<script lang="ts">
    import NavTextLink from './NavTextLink.svelte';
  
    export let scrolled: boolean;
</script>
  
<ul 
    class="grid gap-3 grid-cols-2 inline-flex items-center" 
    class:menu-bg={scrolled}
>
    <NavTextLink {scrolled} to="/projects" title="Projects" on:click />
    <NavTextLink {scrolled} to="/contact" title="Help" on:click />
</ul>