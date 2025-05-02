<script lang="ts">
    import Hero from "$lib/components/Hero.svelte";
    import ProjectsSection from "$lib/components/ProjectsSection.svelte";
    import AboutSection from "$lib/components/AboutSection.svelte";
</script>

<div class="flex flex-col items-center justify-center text-center py-30 gap-20 max-w-15/16">
    <Hero />
    <ProjectsSection />
    <AboutSection />
</div>