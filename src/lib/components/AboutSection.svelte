<script lang="ts">
    import {
        Card,
        CardTitle,
        CardDescription,
        CardContent,
    } from "$lib/components/ui/card";
    import Experience from "./ui/Experience.svelte";
    import { about, experiences } from "$lib/data/siteContent";

    const enrichedExperiences = experiences.map((exp, index, arr) => {
      const sameTypeBefore = arr.slice(0, index).some(e => e.type === exp.type);
      const sameTypeAfter = arr.slice(index + 1).some(e => e.type === exp.type);

      return {
        ...exp,
        prev: sameTypeBefore,
        next: sameTypeAfter
      };
    });
</script>

<section id="about" class="flex flex-col w-full p-6 text-card gap-5">
    <Card variant={"secondary"} className={"px-16 py-18"}>
      <CardContent className={"gap-4"}>
        <div class="flex flex-col items-start gap-3">

          <CardTitle>{about.title}</CardTitle>
          <CardDescription className={"text-primary/70 text-md lg:text-md leading-relaxed"}>
            {about.description}
          </CardDescription>

          <div class="flex flex-col w-full items-center justify-center mt-8">
            {#each enrichedExperiences as experience (experience.company)}
              <Experience {...experience}/>
            {/each}
          </div>

        </div>
      </CardContent>
    </Card>
</section>