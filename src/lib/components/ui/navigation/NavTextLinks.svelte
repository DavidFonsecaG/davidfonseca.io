<script lang="ts">
    import NavTextLink from './NavTextLink.svelte';
    import { cn } from '$lib/utils/utils';
  
    export let scrolled: boolean;
    export let className: string = "";
</script>
  
<ul 
    class={cn("flex gap-2 items-center", className)}
    class:menu-bg={scrolled}
>
    <NavTextLink {scrolled} to="/projects" title="Projects" on:click />
    <NavTextLink {scrolled} to="/contact" title="Contact" on:click />
</ul>