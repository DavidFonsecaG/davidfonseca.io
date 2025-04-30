<script lang="ts">
    import { cn } from "$lib/utils/utils";
    export let className = "";
</script>
  
<div data-slot="card-description" class={cn("text-start text-md lg:text-lg", className)}>
    <slot />
</div>
  