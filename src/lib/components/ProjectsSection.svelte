<script lang="ts">
  import Display from "$lib/components/ui/Display.svelte";
  import { pinnedProjects } from "$lib/data/siteContent";
</script>

<section id="projects" class="flex flex-col w-full text-card gap-5">
  {#each pinnedProjects as project (project.title)}
    <Display {...project} />
  {/each}

  <div class="flex flex-wrap justify-center m-2">
    <a
      href="/projects"
      class="inline-flex items-center justify-center gap-2 bg-transparent hover:text-blue-500 text-muted-foreground text-lg"
    >
      See all projects
      <svg
        xmlns="https://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-arrow-right-icon lucide-arrow-right"
        ><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg
      >
    </a>
  </div>
</section>
