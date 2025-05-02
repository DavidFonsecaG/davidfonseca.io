<script lang="ts">
    import Display from "$lib/components/ui/Display.svelte";
    import { AtSign, Earth, ArrowRight } from "lucide-svelte";
  
    const displays = [
      {
        cardVariant: "default",
        svgIcon: AtSign,
        badgeText: "Retrieval Augmented Generation",
        title: "AI Powered Email Assistant",
        description: "An AI-powered email assistant that connects to Outlook to summarize emails, show past context, and suggest replies.",
        buttonText: "Learn more",
        buttonLink: "/email-ai"
      },
      {
        cardVariant: "secondary",
        svgIcon: Earth,
        badgeText: "Raster - Tiff",
        title: "Mapping wildfires using AVIRIS",
        description: "An AI-powered email assistant that connects to Outlook to summarize emails, show past context, and suggest replies.",
        buttonText: "Learn more",
        buttonLink: "/mapping-wildfire"
      }
    ] as const;
</script>

<section id="projects" class="flex flex-col w-full p-6 text-card gap-5">
    {#each displays as display (display.title)}
      <Display {...display} />
    {/each}

    <div class="flex flex-wrap justify-center m-2">
        <a href="/projects" class="inline-flex items-center justify-center gap-2 bg-transparent hover:text-blue-500 text-muted-foreground text-lg">
          See all projects <ArrowRight />
        </a>
    </div>
</section>