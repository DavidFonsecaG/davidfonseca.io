<script lang="ts">
  export let scrolled: boolean;
  export let open: boolean;

  function handleToggle() {
    open = !open;
  }
</script>

<div class="md:hidden">
  <button
    class:bg-white={scrolled}
    class="flex flex-col gap-1 p-2 size-9 cursor-pointer items-center justify-center rounded-md text-sm font-medium min-w-9"
    aria-label="burger-menu"
    on:click={handleToggle}
  >
    <div
      class="bg-primary h-0.5 w-full transition-all duration-500 ease-in-out"
      class:-rotate-45={open}
      class:translate-y-1={open}
    ></div>
    {#if !open}
      <div
        class="bg-primary h-0.5 w-full transition-all duration-500 ease-in-out"
      ></div>
    {/if}
    <div
      class="bg-primary h-0.5 w-full transition-all duration-500 ease-in-out"
      class:rotate-45={open}
      class:-translate-y-0.5={open}
    ></div>
  </button>
</div>
