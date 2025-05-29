<script>
    import '../styles/theme.css';
    import Navigation from '$lib/components/Navigation.svelte';
    import Footer from '$lib/components/Footer.svelte';
</script>
  
<svelte:head>
    <title>David Fonseca</title>
</svelte:head>

<div class="flex flex-col w-full min-h-screen items-center">
    <Navigation />
    <main class="flex flex-col w-full items-center justify-center">
        <slot />
    </main>
    <Footer />
</div>
