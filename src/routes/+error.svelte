<script lang="ts">
  import Button from "$lib/components/ui/Button.svelte";
</script>

<svelte:head>
  <title>Page not found - David Fonseca</title>
</svelte:head>

<div
  class="flex flex-col items-center justify-center text-center px-4 h-[75vh] w-full md:px-6 md:max-w-15/16"
>
  <section class="flex flex-col items-center justify-center gap-5">
    <div class="p-1 px-3 border rounded-full text-xs bg-card">404 error</div>
    <h1 class="text-4xl md:text-6xl font-medium">Page not found</h1>
    <p class="text-md max-w-xl text-primary/70 md:text-lg">
      We're sorry, but the page you're looking for could not be found. It may
      have been moved, deleted, or never existed in the first place.
    </p>
    <a href="/" class="w-full">
      <Button size="lg" className="w-full cursor-pointer">
        <svg height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16"
          ><path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.5 6.56062L8.00001 2.06062L3.50001 6.56062V13.5L6.00001 13.5V11C6.00001 9.89539 6.89544 8.99996 8.00001 8.99996C9.10458 8.99996 10 9.89539 10 11V13.5L12.5 13.5V6.56062ZM13.78 5.71933L8.70711 0.646409C8.31659 0.255886 7.68342 0.255883 7.2929 0.646409L2.21987 5.71944C2.21974 5.71957 2.21961 5.7197 2.21949 5.71982L0.469676 7.46963L-0.0606537 7.99996L1.00001 9.06062L1.53034 8.53029L2.00001 8.06062V14.25V15H2.75001L6.00001 15H7.50001H8.50001H10L13.25 15H14V14.25V8.06062L14.4697 8.53029L15 9.06062L16.0607 7.99996L15.5303 7.46963L13.7806 5.71993C13.7804 5.71973 13.7802 5.71953 13.78 5.71933ZM8.50001 11V13.5H7.50001V11C7.50001 10.7238 7.72386 10.5 8.00001 10.5C8.27615 10.5 8.50001 10.7238 8.50001 11Z"
            fill="currentColor"
          ></path></svg
        >
        Back go home
      </Button>
    </a>
  </section>
</div>
