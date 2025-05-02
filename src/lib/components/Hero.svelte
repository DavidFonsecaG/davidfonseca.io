<script lang="ts">
        import { hero } from "$lib/data/siteContent";
</script>

<section class="my-20 flex flex-col items-center justify-center">
    <h1 class="text-6xl font-medium mb-4">{hero.title}</h1>
    <p class="text-lg max-w-xl font-normal text-primary/70">
      {hero.subtitle}
    </p>
</section>