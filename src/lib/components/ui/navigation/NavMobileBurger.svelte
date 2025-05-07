<script lang="ts">
  	import Button from "../Button.svelte";

    export let big: Boolean = false;
    export let open: Boolean = false;
</script>

<div class:big class:open class="md:hidden">
	<Button size={"icon"} variant={"secondary"} className={"flex flex-col gap-1 p-2 desktop-links-button"} on:click>
		<div class="bg-primary h-0.5 w-full"></div>
		<div class="bg-primary h-0.5 w-full"></div>
		<div class="bg-primary h-0.5 w-full"></div>
	</Button>
</div>