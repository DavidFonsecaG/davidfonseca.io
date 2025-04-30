<script lang="ts">
    export let title: O<string> = undefined;
    export let subtitle: O<string> = undefined;
</script>

<section class="my-20 flex flex-col items-center justify-center">
    <h1 class="text-6xl font-medium mb-4">{title}</h1>
    <p class="text-lg max-w-xl font-normal text-primary/70">
      {subtitle}
    </p>
</section>