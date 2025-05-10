<script>
    import '../styles/theme.css';
    import Navigation from '$lib/components/Navigation.svelte';
    import Footer from '$lib/components/Footer.svelte';
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
    <title>David Fonseca</title>
</svelte:head>

<div class="flex flex-col w-full min-h-screen items-center ">
    <Navigation />
    <main class="flex flex-col w-full items-center justify-center">
        <slot />
    </main>
    <Footer />
</div>
