<script lang="ts">
    import {
        Card,
        CardTitle,
        CardDescription,
        CardContent,
    } from "$lib/components/ui/card";

    export let imgSrc = "";
    export let year = "";
    export let company = ""; 
    export let role = "";
    export let achivement = "";
    export let type = "";
</script>

<Card variant={"secondary"} className={"w-7/8 py-0"}>
    <CardContent className={"gap-3"}>
        <div class="flex w-full justify-between py-8">
            <div class="flex items-center justify-center p-2 mr-6 w-2/16">
                <img class="max-h-50 md:max-w-20" src={imgSrc} alt="logo">
            </div>
            <div class="flex flex-col items-start w-11/16">
                <CardTitle className={"text-sm lg:text-md"}>{year}</CardTitle>
                <CardTitle className={"text-xl lg:text-2xl"}>{company}</CardTitle>
                <CardDescription>
                    <p>{role}</p>
                    <p class="text-sm text-primary/70">{achivement}</p>
                </CardDescription>
            </div>
            <div class="flex items-center justify-end w-3/16">
                <p class="text-sm font-semibold text-indigo-500">{type}</p>
            </div>
        </div>
        <div class="flex flex-col h-full items-center justify-center">
            <div class=" h-full w-2 bg-indigo-500"></div>
            <div class=" min-h-4 w-4 rounded-sm bg-indigo-500"></div>
            <div class=" h-full w-2 bg-indigo-500"></div>
        </div>
    </CardContent>
</Card>