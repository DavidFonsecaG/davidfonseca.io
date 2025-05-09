<script lang="ts">
    import { cn } from "$lib/utils/utils";
    export let className = "";
</script>
  
<div data-slot="card-title" class={cn("leading-none font-semibold", className)}>
    <slot />
</div>
  