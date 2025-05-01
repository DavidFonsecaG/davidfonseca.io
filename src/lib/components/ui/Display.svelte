<script lang="ts">
    import {
        Card,
        CardTitle,
        CardDescription,
        CardContent,
    } from "$lib/components/ui/card";
    import Button from "$lib/components/ui/Button.svelte";
    import type { SvelteComponent } from "svelte";
    import { ArrowRight } from 'lucide-svelte';

    export let cardVariant: "secondary" | "default" | "outline";
    export let imageSrc = "";
    export let imageAlt = "";
    export let imageClasses = "";
  
    export let svgIcon: (new (...args: any) => SvelteComponent) | null = null;
  
    export let badgeText = "";
    export let title = "";
    export let description = "";
    export let buttonText = "";
    export let buttonLink = "#";
</script>
  
<Card variant={cardVariant}>
    <CardContent className="gap-4">
        <div class="flex items-center justify-center p-4 w-2/8 relative">
            <img class={imageClasses} src={imageSrc} alt={imageAlt} />
            {#if svgIcon}
                <svelte:component this={svgIcon} class="absolute w-30 h-30" />
            {/if}
        </div>
    
        <div class="flex flex-col items-start w-6/8 gap-3">
            <div class="flex p-1 px-3 rounded-full text-xs bg-gradient-to-r from-indigo-300/30 to-gray-400/20">
            {badgeText}
            </div>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
            <a href={buttonLink}>
                <Button variant="secondary" size="lg" className="pr-1">
                    {buttonText}
                    <span class="inline-flex items-center justify-center size-9 bg-secondary-foreground rounded-md">
                        <ArrowRight class="text-white w-4 h-4" />
                    </span>
                </Button>
            </a>
        </div>
    </CardContent>
</Card>
  