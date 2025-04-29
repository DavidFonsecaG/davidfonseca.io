<script>
    import '../styles/theme.css';
    import Navigation from '$lib/components/Navigation.svelte';
    // import Footer from '$lib/components/Footer.svelte';
</script>
  
<svelte:head>
    {#if import.meta.env.PROD}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-2T5NF1VGGK"
      ></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
        }
        gtag('js', new Date());
  
        gtag('config', 'G-2T5NF1VGGK');
      </script>
    {/if}
</svelte:head>

<div class="flex flex-col min-h-full items-center font-[inter]">
    <Navigation />
    <main class="flex flex-col w-full">
        <slot />
    </main>
    <!-- <Footer /> -->
</div>
