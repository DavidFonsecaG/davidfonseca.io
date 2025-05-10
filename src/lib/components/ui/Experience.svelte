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

<Card variant={"secondary"} className={"p-0 w-full md:px-10 md:w-7/8 md:h-[164px]"}>
    <CardContent className={"h-full gap-3"}>
        <div class="flex flex-col w-full py-6 md:py-8 gap-2 md:gap-5 md:flex-row">
            <div class="flex md:p-2 md:items-center md:justify-center ">
                <img class="max-w-18" src={imgSrc} alt="logo">
            </div>
            <div class="flex flex-col text-start items-start ">
                <CardTitle className={"text-sm lg:text-md"}>{year}</CardTitle>
                <CardTitle className={"text-lg md:text-xl lg:text-2xl"}>{company}</CardTitle>
                <CardDescription>
                    <p class="text-base md:text-lg">{role}</p>
                    <p class="text-sm text-primary/70">{achivement}</p>
                </CardDescription>
            </div>
        </div>
        <div class="flex flex-col h-full w-5 items-center justify-center relative">
            {#if prev}
                <div class={cn(color, "absolute top-0 h-1/2 w-1.5")}></div>
            {/if}
            <div class={cn(color, "absolute inset-x-0 h-5 w-5 rounded-sm")}></div>
            {#if next}
                <div class={cn(color, "absolute bottom-0 h-1/2 w-1.5")}></div>
            {/if}
            {#if label}
                <p class={cn(colorLabel, "hidden absolute lg:inline right-7 text-sm font-semibold")}>{label}</p>
            {/if}
        </div>
    </CardContent>
</Card>