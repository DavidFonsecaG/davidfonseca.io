<script lang="ts">
  import NavTextLink from "./NavTextLink.svelte";
  export let scrolled: boolean = false;
</script>

<ul class={`inline-flex items-center ${scrolled && "bg-primary text-white text-sm rounded-md size-9 w-full px-4"}`}>
  <NavTextLink to="/contact" title="Contact" />
</ul>
