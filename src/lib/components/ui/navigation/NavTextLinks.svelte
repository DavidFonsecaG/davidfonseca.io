<script lang="ts">
  import NavTextLink from "./NavTextLink.svelte";
  import { cn } from "$lib/utils/utils";

  export let scrolled: boolean;
  export let className: string = "";
</script>

<ul class={cn(`flex gap-2 items-center ${scrolled && "bg-primary text-white text-sm rounded-md size-9 w-full px-4"}`, className)} >
  <NavTextLink to="/projects" title="Projects" />
  <NavTextLink to="/contact" title="Contact" />
</ul>
