<script lang="ts">
    import { hero } from "$lib/data/siteContent";
</script>

<section class="flex flex-col items-center justify-center gap-4 md:pb-18">
    <h1 class="text-4xl md:text-6xl font-medium">{hero.title}</h1>
    <p class="text-md max-w-xl text-primary/70 md:text-lg">
      	{hero.subtitle}
    </p>
</section>