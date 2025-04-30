<script lang="ts">
    import { cn } from "$lib/utils/utils";
    export let className = "";
</script>
  
<div data-slot="card-content" class={cn("flex justify-between", className)}>
    <slot />
</div>
  