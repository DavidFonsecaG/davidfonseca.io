<script lang="ts">
    import {
        Card,
        CardTitle,
        CardDescription,
        CardContent,
    } from "$lib/components/ui/card";
    import Button from "$lib/components/ui/Button.svelte";
</script>

<div class="flex flex-col items-center justify-center text-center px-4 pt-25 pb-10 md:px-6 md:pt-60 md:pb-30 w-full md:max-w-15/16 gap-20 ">
    <div class="flex grid md:grid-cols-2 gap-5 w-full text-card ">
        <Card variant="secondary" className={"p-8 md:p-10 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-101 hover:shadow-lg"}>
            <CardContent className="flex flex-col bg-transparent">    
                <div class="flex flex-col items-start text-start w-full">
                    <div class="flex p-1 px-3 rounded-full text-xs border">
                    Augmented Retrieval Generation
                    </div>
                    <CardTitle className={"text-2xl"}>AI Powered Email Assistant</CardTitle>
                    <CardDescription>This is a short descriptions of this project.</CardDescription>
                </div>
            </CardContent>
        </Card>

        <Card variant="secondary" className={"p-8 md:p-10 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-101 hover:shadow-lg"}>
            <CardContent className="flex flex-col bg-transparent">    
                <div class="flex flex-col items-start text-start w-full">
                    <div class="flex p-1 px-3 rounded-full text-xs border">
                    Augmented Retrieval Generation
                    </div>
                    <CardTitle className={"text-2xl"}>AI Powered Email Assistant</CardTitle>
                    <CardDescription>This is a short descriptions of this project.</CardDescription>
                </div>
            </CardContent>
        </Card>

        <Card variant="secondary" className={"p-8 md:p-10 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-101 hover:shadow-lg"}>
            <CardContent className="flex flex-col bg-transparent">    
                <div class="flex flex-col items-start text-start w-full">
                    <div class="flex p-1 px-3 rounded-full text-xs border">
                    Augmented Retrieval Generation
                    </div>
                    <CardTitle className={"text-2xl"}>AI Powered Email Assistant</CardTitle>
                    <CardDescription>This is a short descriptions of this project.</CardDescription>
                </div>
            </CardContent>
        </Card>

        <Card variant="secondary" className={"p-8 md:p-10 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-101 hover:shadow-lg"}>
            <CardContent className="flex flex-col bg-transparent">    
                <div class="flex flex-col items-start text-start w-full">
                    <div class="flex p-1 px-3 rounded-full text-xs border">
                    Augmented Retrieval Generation
                    </div>
                    <CardTitle className={"text-2xl"}>AI Powered Email Assistant</CardTitle>
                    <CardDescription>This is a short descriptions of this project.</CardDescription>
                </div>
            </CardContent>
        </Card>
    </div>
</div>