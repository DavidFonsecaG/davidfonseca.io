<script lang="ts">
    import {
        Card,
        CardTitle,
        CardDescription,
        CardContent,
    } from "$lib/components/ui/card";
    import Button from "$lib/components/ui/Button.svelte";

    export let title = "";
    export let description = "";
    export let imgSrc = "";
    export let badgeText = "";
    export let cardVariant: "secondary" | "default" | "outline";
    export let buttonText = "";
    export let buttonLink = "#";
</script>
  
<Card variant={cardVariant}>
    <CardContent className="gap-4">
        <div class="flex items-center justify-center p-4 w-2/8 relative">
            <img src={imgSrc} alt="icon" class="absolute w-30 h-30" />
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </span>
                </Button>
            </a>
        </div>
    </CardContent>
</Card>
  