<script lang="ts">
  import Hero from "$lib/components/Hero.svelte";
  import ProjectsSection from "$lib/components/ProjectsSection.svelte";
  import AboutSection from "$lib/components/AboutSection.svelte";
</script>

<svelte:head>
  <title>David Fonseca</title>
</svelte:head>

<div
  class="flex flex-col items-center justify-center text-center px-4 pt-25 pb-20 md:px-6 md:pt-44 md:pb-30 w-full md:max-w-15/16 gap-24"
>
  <Hero />
  <ProjectsSection />
  <AboutSection />
</div>
