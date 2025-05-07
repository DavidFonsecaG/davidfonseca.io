<script lang="ts">
    import {
        Card,
        CardTitle,
        CardDescription,
        CardContent,
    } from "$lib/components/ui/card";
    import { cn } from "$lib/utils/utils";

    export let imgSrc: string;
    export let year: string;
    export let company: string; 
    export let role: string;
    export let achivement: string;
    export let type: "education" | "organization" | "work" | "default";
    export let prev = false;
    export let next = false;

    let color: string;
    let label: string | undefined = undefined;
    let colorLabel: string;

    let colors = {
        work: "red-500",
        organization: "yellow-500",
        education: "indigo-500",
    }

    switch (type) {
        case 'work':
            color = "bg-" + colors.work;
            if (!prev) 
                label = 'WORK';
                colorLabel = "text-" + colors.work;
            break;
        case 'organization':
            color = "bg-" + colors.organization;
            if (!prev) 
                label = 'ORGANIZATIONS';
                colorLabel = "text-" + colors.organization;
        break;
        case 'education':
            color = "bg-" + colors.education;
            if (!prev) 
                label = 'EDUCATION';
                colorLabel = "text-" + colors.education;
            break;
    }
</script>

<Card variant={"secondary"} className={"w-7/8 py-0 h-[164px]"}>
    <CardContent className={"gap-3"}>
        <div class="flex w-full py-8">
            <div class="flex items-center justify-center p-2 mr-5 w-2/16">
                <img class="max-h-50 md:max-w-18" src={imgSrc} alt="logo">
            </div>
            <div class="flex flex-col items-start w-11/16">
                <CardTitle className={"text-sm lg:text-md"}>{year}</CardTitle>
                <CardTitle className={"text-xl lg:text-2xl"}>{company}</CardTitle>
                <CardDescription>
                    <p>{role}</p>
                    <p class="text-sm text-primary/70">{achivement}</p>
                </CardDescription>
            </div>
        </div>
        <div class="flex flex-col h-full w-4 items-center justify-center relative">
            {#if prev}
                <div class={cn(color, "absolute top-0 h-1/2 w-2")}></div>
            {/if}
            <div class={cn(color, "absolute h-5 w-5 rounded-sm")}></div>
            {#if next}
                <div class={cn(color, "absolute bottom-0 h-1/2 w-2")}></div>
            {/if}
            {#if label}
            <p class={cn(colorLabel, "absolute right-7 text-sm font-semibold")}>{label}</p>
            {/if}
        </div>
    </CardContent>
</Card>